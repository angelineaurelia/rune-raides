const { ccclass, property } = cc._decorator;
import Player from "../Player";
enum SlimeState {
    Idle,
    Walk,
    Run,
    Attack
}

@ccclass
export default class BlueSlimeAI extends cc.Component {
    @property({ tooltip: "Slime walk speed in pixels per second" })
    walkSpeed: number = 120;

    @property({ tooltip: "Slime run speed in pixels per second" })
    runSpeed: number = 240;

    @property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    idleTime: number = 5;

    @property({ tooltip: "How long the slime walks in one direction (seconds)" })
    walkTime: number = 5;

    @property({ tooltip: "Patrol radius from start point (pixels)" })
    patrolRadius: number = 200;

    @property({ tooltip: "Detection circle radius (pixels)" })
    detectionRadius: number = 180;

    @property({ tooltip: "Attack circle radius (pixels)" })
    attackRadius: number = 80;

    @property({ tooltip: "How much damage the slime does per attack" })
    attackDamage: number = 10;

    @property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    attackHitDelay: number = 0.3;

    @property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    attackAnimDuration: number = 1.0;

    @property({ tooltip: "Maximum health of the slime" })
    maxHealth: number = 20;

    @property({ tooltip: "Current health of the slime" })
    health: number = 20;

    @property(cc.Node)
    private lifebar: cc.Node = null;

    @property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    private barOffsetY: number = 10;

    private isDead: boolean = false;
    private isDeathAnimPlaying: boolean = false; // NEW: Tracks death animation

    public player: cc.Node = null;
    private slimeState: SlimeState = SlimeState.Idle;
    private timer: number = 0;
    private direction: cc.Vec2 = cc.v2(0, 0);
    private patrolCenter: cc.Vec2 = cc.v2(0, 0);

    private boundaryNode!: cc.Node;
    private detectionNode!: cc.Node;
    private detectionGfx!: cc.Graphics;
    private attackNode!: cc.Node;
    private attackGfx!: cc.Graphics;

    private anim!: cc.Animation;
    private currentRunClip: string = "";
    private currentAttackClip: string = "";

    onLoad() {
        let level = cc.find("GamemManager").getComponent("GameManager").level;
        let MaxX = (level*4 + 6)*100;
        let MaxY = (level*2 + 3)*100;
        cc.director.getCollisionManager().enabled = true;
    }

    start() {
        this.player = cc.find("Canvas/MapManager/Actors/Player") as cc.Node;
        if (!this.player) cc.error("Player node not found");

        this.anim = this.getComponent(cc.Animation)!;
        this.patrolCenter = this.node.getPosition().clone();

        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent!;
        this.boundaryNode.setPosition(this.patrolCenter);
        //const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        //patrolGfx.lineWidth = 2;
        //patrolGfx.strokeColor = cc.color(0, 255, 0);
        //patrolGfx.circle(0, 0, this.patrolRadius);
        //patrolGfx.stroke();

        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;

        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;

        if (this.lifebar) {
            //this.updateLife(0, 40);
        }

        this.setToIdle();
    }

    update(dt: number) {
        if (this.isDead) return; // Actually dead, nothing happens

        if (this.isDeathAnimPlaying) {
            // Let the death animation play, but skip AI
            return;
        }

        let distToPlayer = Infinity;
        if (this.player) {
            const slimeW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
            const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }

        const localPlayerPos = this.node.parent!
            .convertToNodeSpaceAR(
                this.player!.parent!.convertToWorldSpaceAR(this.player!.position)
            );
        const distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        const playerInPatrol = distFromCenter <= this.patrolRadius;

        const drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        const drawAttackR = Math.min(this.attackRadius, this.patrolRadius);

        this.detectionGfx.clear();
        //this.detectionGfx.lineWidth = 2;
        //this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            //? cc.color(255, 165, 0)
            //: cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();

        this.attackGfx.clear();
        //this.attackGfx.lineWidth = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
           // ? cc.color(128, 0, 128)
           // : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();

        const inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        const inAttack = distToPlayer <= this.attackRadius && playerInPatrol;

        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }

        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= this.attackAnimDuration) {
                this.setToIdle();
            }
            return;
        }

        if (inDetect) {
            if (this.slimeState !== SlimeState.Run) this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        } else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }

        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            const pos = this.node.getPosition();
            const moveDelta = cc.v2(
                this.direction.x * this.walkSpeed * dt,
                this.direction.y * this.walkSpeed * dt
            );
            const nextPos = pos.add(moveDelta);

            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);

            if (this.timer >= this.walkTime) this.setToIdle();
        }
    }

    private updateLife(delta: number, hp: number) {
        if (!this.lifebar) return;

        this.lifebar.width = (hp/this.maxHealth)*40;
        if (hp <= 10) this.lifebar.color = cc.Color.RED;
        else if (hp <= 20) this.lifebar.color = cc.Color.ORANGE;
        else this.lifebar.color = cc.Color.GREEN;
    }

    public takeDamage(amount: number) {
        if (this.isDead || this.isDeathAnimPlaying) return; // Already dead or anim playing

        const playerPos = this.player.getPosition();
        const slimePos = this.node.getPosition();
        const direction = playerPos.sub(slimePos).normalize();

        const hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeHurtRight" : "BlueSlimeHurtLeft")
            : (direction.y > 0 ? "BlueSlimeHurtUp" : "BlueSlimeHurtDown");

        this.anim.play(hurtAnim);

        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            if (!this.isDeathAnimPlaying) {
                this.isDeathAnimPlaying = true;
                this.playDeathAnimation(direction);
            }
        }

        this.updateLife(-amount, this.health);
    }

    public heal(amount: number) {
        this.health += amount;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    }

    private die() {
        this.unscheduleAllCallbacks();
    }

    private setToIdle() {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("BlueSlimeIdle");
    }

    private startWalking() {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(
            Math.random() >= 0.5 ? 1 : -1,
            Math.random() >= 0.5 ? 1 : -1
        ).normalize();
        const clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "BlueSlimeWalkRight" : "BlueSlimeWalkLeft")
            : (this.direction.y > 0 ? "BlueSlimeWalkUp" : "BlueSlimeWalkDown");
        this.anim.play(clip);
    }

    private startRunning() {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    }

    private startAttack() {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";

        const dir = this.getRunDirection();
        const clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeAttackRight" : "BlueSlimeAttackLeft")
            : (dir.y > 0 ? "BlueSlimeAttackUp" : "BlueSlimeAttackDown");
        this.anim.play(clip);

        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    }

    
    private applyAttackHit() {
        if (this.slimeState !== SlimeState.Attack) return;

        const slimeWorld3 = this.node.parent!.convertToWorldSpaceAR(this.node.position);
        const slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);

        const playerWorld3 = this.player!.parent!.convertToWorldSpaceAR(this.player!.position);
        const playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);

        const dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            const playerComp = this.player.getComponent(Player);
            if (playerComp) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
    }

    private runTowardsPlayer(dt: number) {
        const dir = this.getRunDirection();
        const clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeRunRight" : "BlueSlimeRunLeft")
            : (dir.y > 0 ? "BlueSlimeRunUp" : "BlueSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        const moveDelta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        const nextPos = this.node.getPosition().add(moveDelta);
        if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(nextPos);
    }

    private getRunDirection() {
        const worldP = this.player!.parent!.convertToWorldSpaceAR(this.player!.position);
        const localP = this.node.parent!.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    }

    onDisable() {
        this.unscheduleAllCallbacks();
    }

    private playDeathAnimation(direction: cc.Vec2) {
        const deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeDeathRight" : "BlueSlimeDeathLeft")
            : (direction.y > 0 ? "BlueSlimeDeathUp" : "BlueSlimeDeathDown");

        this.anim.play(deathAnim);

        this.unscheduleAllCallbacks();
        this.slimeState = SlimeState.Idle;

        this.scheduleOnce(() => {
            this.isDead = true;
            this.isDeathAnimPlaying = false;
        }, 1.0); // match to your animation's duration
    }
}
