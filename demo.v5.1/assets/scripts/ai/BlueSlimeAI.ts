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
    walkSpeed: number = 100;

    @property({ tooltip: "Slime run speed in pixels per second" })
    runSpeed: number = 200;

    @property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    idleTime: number = 5;

    @property({ tooltip: "How long the slime walks in one direction (seconds)" })
    walkTime: number = 5;

    @property({ tooltip: "Patrol radius from start point (pixels)" })
    patrolRadius: number = 200;

    @property({ tooltip: "Detection circle radius (pixels)" })
    detectionRadius: number = 150;

    @property({ tooltip: "Attack circle radius (pixels)" })
    attackRadius: number = 50;

    @property({ tooltip: "How much damage the slime does per attack" })
    attackDamage: number = 10;

    @property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    attackHitDelay: number = 0.3;

    @property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    attackAnimDuration: number = 1.0;

    @property({ tooltip: "Maximum health of the slime" })
    maxHealth: number = 40;

    @property({ tooltip: "Current health of the slime" })
    health: number = 40;

    @property(cc.Node)
    private lifebar: cc.Node = null;

    @property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    private barOffsetY: number = 10;

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
        // Enable the collision manager (if using physics/colliders later)
        cc.director.getCollisionManager().enabled = true;
    }

    start() {
        // 1) Find the player node in the scene
        this.player = cc.find("Canvas/MapManager/Actors/Player") as cc.Node;
        if (!this.player) cc.error("Player node not found");

        // 2) Cache the Animation component
        this.anim = this.getComponent(cc.Animation)!;

        // 3) Save the patrol center
        this.patrolCenter = this.node.getPosition().clone();

        // 4) Draw patrol boundary (unchanged)
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent!;
        this.boundaryNode.setPosition(this.patrolCenter);
        const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();

        // 5) Detection area (unchanged)
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;

        // 6) Attack area (unchanged)
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;

        // 7) Health bar setup (unchanged)
        if (this.lifebar) {
            this.updateLife(0, 40);
        }

        // 8) Start in Idle state
        this.setToIdle();
    }

    update(dt: number) {
        // 1) Compute distance to player (world space)
        let distToPlayer = Infinity;
        if (this.player) {
            const slimeW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
            const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }

        // 2) Check if player is within the patrol area
        const localPlayerPos = this.node.parent!
            .convertToNodeSpaceAR(
                this.player!.parent!.convertToWorldSpaceAR(this.player!.position)
            );
        const distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        const playerInPatrol = distFromCenter <= this.patrolRadius;

        // 3) Redraw detection & attack circles (unchanged)
        const drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        const drawAttackR = Math.min(this.attackRadius, this.patrolRadius);

        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();

        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();

        // 4) Determine states
        const inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        const inAttack = distToPlayer <= this.attackRadius && playerInPatrol;

        // 5) If in attack range and not already attacking, start attack
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }

        // 6) If currently in Attack state, wait out the attack timer before returning to Idle
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= this.attackAnimDuration) {
                // After the full anim duration, go back to Idle
                this.setToIdle();
            }
            return;
        }

        // 7) If detected but not in attack range, run toward player
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run) this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        } else if (this.slimeState === SlimeState.Run) {
            // If we were running but now out of detection, return to Idle
            this.setToIdle();
        }

        // 8) Patrol logic (unchanged)
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

    // Life-bar update
    private updateLife(delta: number, hp: number) {
        console.log("slime life change:", delta, "→", hp);
        if (!this.lifebar) return;
        this.lifebar.width = hp;
        if (hp <= 10) this.lifebar.color = cc.Color.RED;
        else if (hp <= 20) this.lifebar.color = cc.Color.ORANGE;
        else this.lifebar.color = cc.Color.GREEN;
    }

    public takeDamage(amount: number) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;

        if (this.health > 0) {
            // STILL ALIVE → play hurt animation
            this.anim.play("BlueSlimeHurt");   // ensure you have this clip
        }
        this.updateLife(-amount, this.health);

        if (this.health === 0) {
            // ZERO HP → play death animation first
            this.anim.play("BlueSlimeDeath");  // ensure you have this clip
            // Delay actual destroy until the death anim finishes (adjust 0.8 to match your clip length)
            this.scheduleOnce(() => {
                this.die();
            }, 0.8);
        }
    }

    public heal(amount: number) {
        this.health += amount;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    }

    private die() {
        this.node.destroy();
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

        // 1) Play the correct attack clip based on direction
        const dir = this.getRunDirection();
        const clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeAttackRight" : "BlueSlimeAttackLeft")
            : (dir.y > 0 ? "BlueSlimeAttackUp" : "BlueSlimeAttackDown");
        this.anim.play(clip);

        // 2) Schedule the “hit” a little into the animation
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    }

    // Called attackHitDelay seconds into the attack animation
    private applyAttackHit() {
        // Only deal damage once if still in Attack state
        if (this.slimeState !== SlimeState.Attack) return;

        // Convert both slime and player to world-space Vec2
        const slimeWorld3 = this.node.parent!.convertToWorldSpaceAR(this.node.position);
        const slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);

        const playerWorld3 = this.player!.parent!.convertToWorldSpaceAR(this.player!.position);
        const playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);

        const dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            // Player is in attack range → deal damage
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
        // Cancel any pending callbacks when this node is destroyed
        this.unscheduleAllCallbacks();
    }
}
