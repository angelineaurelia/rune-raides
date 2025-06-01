const { ccclass, property } = cc._decorator;

enum SlimeState {
  Idle,
  Walk,
  Run,
  Attack
}

@ccclass
export default class GreenBossAI extends cc.Component {
  @property({ tooltip: "Walk speed in pixels/sec" })
  walkSpeed = 100;

  @property({ tooltip: "Run speed in pixels/sec" })
  runSpeed = 200;

  @property({ tooltip: "Idle duration before moving (sec)" })
  idleTime = 5;

  @property({ tooltip: "Walk duration per direction (sec)" })
  walkTime = 5;

  @property({ tooltip: "Patrol radius from start (px)" })
  patrolRadius = 200;

  @property({ tooltip: "Detection radius (px)" })
  detectionRadius = 150;

  @property({ tooltip: "Normal attack radius (px)" })
  attackRadius = 50;

  @property({ tooltip: "Special attack radius when <50% HP (px)" })
  specAttackRadius = 100;

  @property({ tooltip: "Wind-up before any attack (sec)" })
  timeBeforeAttack = 1;

  @property({ tooltip: "Damage of normal attack" })
  attackDamage = 20;

  @property({ tooltip: "Damage of special attack" })
  specAttackDamage = 40;

  @property({ tooltip: "Max HP" })
  maxHealth = 200;

  @property({ tooltip: "Current HP" })
  health = 200;

  // —— new lifebar property ——  
  @property(cc.Node)
  private lifebar: cc.Node = null;

  @property({ tooltip: "Health bar vertical offset (px)" })
  private barOffsetY = 60;

  //@property({ type: cc.Node, tooltip: "Player node" })
  //player: cc.Node = null;
  
  public player: cc.Node = null;
  private state = SlimeState.Idle;
  private timer = 0;
  private direction = cc.v2(0, 0);
  private patrolCenter!: cc.Vec2;

  private boundaryNode!: cc.Node;
  private detectionNode!: cc.Node;
  private detectionGfx!: cc.Graphics;
  private attackNode!: cc.Node;
  private attackGfx!: cc.Graphics;

  private anim!: cc.Animation;
  private currentRunClip = "";

  start() {
    this.player = cc.find("Canvas/MapManager/Actors/Player") as cc.Node;
    if (!this.player) cc.error("Player node not found");

    this.anim = this.getComponent(cc.Animation)!;
    this.patrolCenter = this.node.getPosition().clone();

    // draw patrol boundary (optional)
    this.boundaryNode = new cc.Node("Boundary");
    this.boundaryNode.parent = this.node.parent!;
    this.boundaryNode.setPosition(this.patrolCenter);
    const bGfx = this.boundaryNode.addComponent(cc.Graphics);
    bGfx.lineWidth = 2;
    bGfx.strokeColor = cc.color(0, 255, 0);
    bGfx.circle(0, 0, this.patrolRadius);
    bGfx.stroke();

    // detection area node
    this.detectionNode = new cc.Node("Detect");
    this.detectionNode.parent = this.node;
    this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
    this.detectionGfx.lineWidth = 2;

    // attack area node
    this.attackNode = new cc.Node("Attack");
    this.attackNode.parent = this.node;
    this.attackGfx = this.attackNode.addComponent(cc.Graphics);
    this.attackGfx.lineWidth = 2;

    // —— health bar setup ——  
    if (this.lifebar) {
      // position bar above boss
      this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
      // initialize its width/color
      this.updateLife(0, this.health);
    }

    this.setIdle();
  }

  update(dt: number) {
    if (!this.player) return;

    // 1) world-space distance
    const bossW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
    const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
    const dist = bossW.sub(playerW).mag();

    // 2) patrol-bound check
    const localP = this.node.parent!.convertToNodeSpaceAR(playerW);
    const fromCenter = localP.sub(this.patrolCenter).mag();
    const inPatrol = fromCenter <= this.patrolRadius;

    // 3) choose radii & draw circles
    const useSpec = this.health <= this.maxHealth * 0.5;
    const rawAttackR = useSpec ? this.specAttackRadius : this.attackRadius;
    const drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
    const drawAttackR = Math.min(rawAttackR, this.patrolRadius);

    this.detectionGfx.clear();
    const inDetect = dist <= this.detectionRadius && inPatrol;
    this.detectionGfx.strokeColor = inDetect ? cc.color(255, 165, 0) : cc.color(255, 0, 0);
    this.detectionGfx.circle(0, 0, drawDetectR);
    this.detectionGfx.stroke();

    this.attackGfx.clear();
    const inRange = dist <= rawAttackR && inPatrol;
    this.attackGfx.strokeColor = inRange ? cc.color(128, 0, 128) : cc.color(0, 0, 255);
    this.attackGfx.circle(0, 0, drawAttackR);
    this.attackGfx.stroke();

    // 4) attack state
    if (this.state !== SlimeState.Attack && inRange) {
      this.timer = 0;
      if (useSpec) this.startSpecAttack();
      else this.startAttack();
      return;
    }
    if (this.state === SlimeState.Attack) return;

    // 5) run state
    if (inDetect) {
      if (this.state !== SlimeState.Run) this.startRun();
      this.runTowardsPlayer(dt);
      return;
    } else if (this.state === SlimeState.Run) {
      this.setIdle();
    }

    // 6) patrol fallback
    this.timer += dt;
    if (this.state === SlimeState.Idle && this.timer >= this.idleTime) this.startWalk();
    if (this.state === SlimeState.Walk) this.patrolMovement(dt);
  }

  // —— life‐bar updater ——  
  private updateLife(delta: number, hp: number) {
    console.log("boss hp:", delta, "→", hp);
    if (!this.lifebar) return;
    this.lifebar.width = hp;                     // direct px = hp
    if (hp <= 50)         this.lifebar.color = cc.Color.RED;
    else if (hp <= 100)   this.lifebar.color = cc.Color.ORANGE;
    else                  this.lifebar.color = cc.Color.GREEN;
  }

  public takeDamage(amount: number) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
    this.updateLife(-amount, this.health);
    if (this.health === 0) this.die();
  }

  private die() {
    this.node.destroy();
  }

  private setIdle() {
    this.state = SlimeState.Idle;
    this.timer = 0;
    this.anim.play("GreenBossIdle");
  }

  private startWalk() {
    this.state = SlimeState.Walk;
    this.timer = 0;
    this.direction = cc.v2(
      Math.random() < 0.5 ? -1 : 1,
      Math.random() < 0.5 ? -1 : 1
    ).normalize();
    const clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
      ? (this.direction.x > 0 ? "GreenBossWalkRight" : "GreenBossWalkLeft")
      : (this.direction.y > 0 ? "GreenBossWalkUp" : "GreenBossWalkDown");
    this.anim.play(clip);
  }

  private startRun() {
    this.state = SlimeState.Run;
    this.currentRunClip = "";
  }

  private startAttack() {
    this.state = SlimeState.Attack;
    this.anim.play("GreenBossIdle");
    this.scheduleOnce(
      () => this.performAttack(this.attackDamage, this.attackRadius, "GreenBossAttack"),
      this.timeBeforeAttack
    );
  }

  private startSpecAttack() {
    this.state = SlimeState.Attack;
    this.anim.play("GreenBossIdle");
    this.scheduleOnce(
      () => this.performAttack(this.specAttackDamage, this.specAttackRadius, "GreenBossSpecAttack"),
      this.timeBeforeAttack
    );
  }

  private performAttack(dmg: number, range: number, baseClip: string) {
    const dir = this.getRunDirection();
    const clip = Math.abs(dir.x) > Math.abs(dir.y)
      ? (dir.x > 0 ? `${baseClip}Right` : `${baseClip}Left`)
      : (dir.y > 0 ? `${baseClip}Up`    : `${baseClip}Down`);
    this.anim.play(clip);

    // deal damage if still in range
    const bossW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
    const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
    if (bossW.sub(playerW).mag() <= range) {
      const hc: any = this.player.getComponent("Health");
      if (hc?.takeDamage) hc.takeDamage(dmg);
    }

    this.scheduleOnce(() => this.setIdle(), 1);
  }

  private patrolMovement(dt: number) {
    const delta = this.direction.mul(this.walkSpeed * dt);
    const next = this.node.getPosition().add(delta);
    if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
      this.setIdle();
      return;
    }
    this.node.setPosition(next);
    if (this.timer >= this.walkTime) this.setIdle();
  }

  private runTowardsPlayer(dt: number) {
    const dir = this.getRunDirection();
    const clip = Math.abs(dir.x) > Math.abs(dir.y)
      ? (dir.x > 0 ? "GreenBossRunRight" : "GreenBossRunLeft")
      : (dir.y > 0 ? "GreenBossRunUp" : "GreenBossRunDown");
    if (clip !== this.currentRunClip) {
      this.anim.play(clip);
      this.currentRunClip = clip;
    }
    const next = this.node.getPosition().add(dir.mul(this.runSpeed * dt));
    if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
      this.setIdle();
      return;
    }
    this.node.setPosition(next);
  }

  private getRunDirection(): cc.Vec2 {
    const worldP  = this.player.parent!.convertToWorldSpaceAR(this.player.position);
    const localP  = this.node.parent!.convertToNodeSpaceAR(worldP);
    return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
  }
}
