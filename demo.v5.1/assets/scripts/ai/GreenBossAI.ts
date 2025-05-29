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

  @property({ tooltip: "Health bar width (px)" })
  healthBarWidth = 80;

  @property({ tooltip: "Health bar height (px)" })
  healthBarHeight = 12;

  @property({ tooltip: "Health segments" })
  segmentCount = 10;

  @property({ tooltip: "Health bar vertical offset (px)" })
  healthBarOffsetY = 60;

  @property({ type: cc.Node, tooltip: "Player node" })
  player: cc.Node = null;

  private state = SlimeState.Idle;
  private timer = 0;
  private direction = cc.v2(0, 0);
  private patrolCenter = cc.v2(0, 0);

  private boundaryNode!: cc.Node;
  private detectionNode!: cc.Node;
  private detectionGfx!: cc.Graphics;
  private attackNode!: cc.Node;
  private attackGfx!: cc.Graphics;

  private healthBarNode!: cc.Node;
  private healthBarGfx!: cc.Graphics;

  private anim!: cc.Animation;
  private currentRunClip = "";

  start() {
    this.anim = this.getComponent(cc.Animation)!;
    this.patrolCenter = this.node.getPosition().clone();

    // boundary
    this.boundaryNode = new cc.Node("Boundary");
    this.boundaryNode.parent = this.node.parent!;
    this.boundaryNode.setPosition(this.patrolCenter);
    const bGfx = this.boundaryNode.addComponent(cc.Graphics);
    bGfx.lineWidth = 2;
    bGfx.strokeColor = cc.color(0, 255, 0);
    bGfx.circle(0, 0, this.patrolRadius);
    bGfx.stroke();

    // detection area
    this.detectionNode = new cc.Node("Detect");
    this.detectionNode.parent = this.node;
    this.detectionNode.setPosition(0, 0);
    this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
    this.detectionGfx.lineWidth = 2;

    // attack area
    this.attackNode = new cc.Node("Attack");
    this.attackNode.parent = this.node;
    this.attackNode.setPosition(0, 0);
    this.attackGfx = this.attackNode.addComponent(cc.Graphics);
    this.attackGfx.lineWidth = 2;

    // health bar
    this.healthBarNode = new cc.Node("HealthBar");
    this.healthBarNode.parent = this.node;
    this.healthBarNode.setPosition(0, this.healthBarOffsetY);
    this.healthBarGfx = this.healthBarNode.addComponent(cc.Graphics);
    this.healthBarGfx.lineWidth = 1;

    this.setIdle();
  }

  update(dt: number) {
    this.drawHealthBar();
    if (!this.player) return;

    // world distance
    const bossW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
    const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
    const dist = bossW.sub(playerW).mag();

    // draw detection
    this.detectionGfx.clear();
    const inDetect = dist <= this.detectionRadius;
    this.detectionGfx.strokeColor = inDetect ? cc.color(255, 165, 0) : cc.color(255, 0, 0);
    this.detectionGfx.circle(0, 0, this.detectionRadius);
    this.detectionGfx.stroke();

    // choose proper attack range
    const useSpec = this.health <= this.maxHealth * 0.5;
    const range = useSpec ? this.specAttackRadius : this.attackRadius;
    this.attackGfx.clear();
    const inRange = dist <= range;
    this.attackGfx.strokeColor = inRange ? cc.color(128, 0, 128) : cc.color(0, 0, 255);
    this.attackGfx.circle(0, 0, range);
    this.attackGfx.stroke();

    // attempt attack if not currently in Attack state
    if (this.state !== SlimeState.Attack && inRange) {
      this.timer = 0;
      if (useSpec) this.startSpecAttack();
      else this.startAttack();
      return;
    }

    // skip movement while attacking
    if (this.state === SlimeState.Attack) return;

    // if player detected, run
    if (inDetect) {
      if (this.state !== SlimeState.Run) this.startRun();
      this.runTowardsPlayer(dt);
      return;
    }

    // patrol
    this.timer += dt;
    if (this.state === SlimeState.Idle && this.timer >= this.idleTime) {
      this.startWalk();
    }
    if (this.state === SlimeState.Walk) {
      this.patrolMovement(dt);
    }
  }

  private drawHealthBar() {
    const filled = Math.ceil((this.health / this.maxHealth) * this.segmentCount);
    const boxW = this.healthBarWidth / this.segmentCount;
    const boxH = this.healthBarHeight;
    this.healthBarGfx.clear();
    let color = cc.color(0, 255, 0);
    if (filled <= 3) color = cc.color(255, 0, 0);
    else if (filled <= 5) color = cc.color(255, 165, 0);
    for (let i = 0; i < this.segmentCount; i++) {
      const x = -this.healthBarWidth / 2 + i * boxW;
      this.healthBarGfx.strokeColor = cc.color(0, 0, 0);
      this.healthBarGfx.rect(x, -boxH / 2, boxW - 1, boxH - 1);
      this.healthBarGfx.stroke();
      if (i < filled) {
        this.healthBarGfx.fillColor = color;
        this.healthBarGfx.rect(x, -boxH / 2, boxW - 1, boxH - 1);
        this.healthBarGfx.fill();
      }
    }
  }

  private setIdle() {
    this.state = SlimeState.Idle;
    this.timer = 0;
    this.anim.play("GreenBossIdle");
  }

  private startWalk() {
    this.state = SlimeState.Walk;
    this.timer = 0;
    this.direction = cc.v2(Math.random() < 0.5 ? -1 : 1, Math.random() < 0.5 ? -1 : 1).normalize();
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
    // wind-up idle
    this.anim.play("GreenBossIdle");
    this.scheduleOnce(() => this.performAttack(this.attackDamage, this.attackRadius, "GreenBossAttack"), this.timeBeforeAttack);
  }

  private startSpecAttack() {
    this.state = SlimeState.Attack;
    this.anim.play("GreenBossIdle");
    this.scheduleOnce(() => this.performAttack(this.specAttackDamage, this.specAttackRadius, "GreenBossSpecAttack"), this.timeBeforeAttack);
  }

  private performAttack(dmg: number, range: number, clipBase: string) {
    const dir = this.getRunDirection();
    const clip = Math.abs(dir.x) > Math.abs(dir.y)
      ? (dir.x > 0 ? `${clipBase}Right` : `${clipBase}Left`)
      : (dir.y > 0 ? `${clipBase}Up` : `${clipBase}Down`);
    this.anim.play(clip);
    // damage only if still in range
    const bossW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
    const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
    if (bossW.sub(playerW).mag() <= range) {
      const hc: any = this.player.getComponent("Health");
      if (hc?.takeDamage) hc.takeDamage(dmg);
    }
    // after animation back to idle
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
    const delta = dir.mul(this.runSpeed * dt);
    const next = this.node.getPosition().add(delta);
    if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
      this.setIdle();
      return;
    }
    this.node.setPosition(next);
  }

  private getRunDirection(): cc.Vec2 {
    const worldP = this.player.parent!.convertToWorldSpaceAR(this.player.position);
    const local = this.node.parent!.convertToNodeSpaceAR(worldP);
    return cc.v2(local.x - this.node.x, local.y - this.node.y).normalize();
  }
}
