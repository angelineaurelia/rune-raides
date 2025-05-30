const { ccclass, property } = cc._decorator;

enum SlimeState {
    Idle,
    Walk,
    Run,
    Attack
}

@ccclass
export default class GreeenSlimeAI extends cc.Component {
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

    @property({ tooltip: "Maximum health of the slime" })
    maxHealth: number = 100;

    @property({ tooltip: "Current health of the slime" })
    health: number = 100;

    @property(cc.Node)
    private lifebar: cc.Node = null;

    @property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    private barOffsetY: number = 10;

    @property({ type: cc.Node, tooltip: "Player node to detect" })
    player: cc.Node = null;

    private slimeState = SlimeState.Idle;
    private timer = 0;
    private direction = cc.v2(0, 0);
    private patrolCenter = cc.v2(0, 0);

    private boundaryNode!: cc.Node;
    private detectionNode!: cc.Node;
    private detectionGfx!: cc.Graphics;
    private attackNode!: cc.Node;
    private attackGfx!: cc.Graphics;

    private anim!: cc.Animation;
    private currentRunClip = "";
    private currentAttackClip = "";
    onLoad() {
     if (!this.player) {
            // use the exact path under the scene root:
            this.player = cc.find("MapManager/Actors/Player");
            if (!this.player) {
            cc.error("Couldn’t find Player at MapManager/Actors/Player");
            }
        }
    }



    start() {
        this.anim = this.getComponent(cc.Animation)!;
        this.patrolCenter = this.node.getPosition().clone();

        // Draw patrol boundary
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent!;
        this.boundaryNode.setPosition(this.patrolCenter);
        const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();

        // Detection area
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;

        // Attack area
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;

        // Health bar setup
        if (this.lifebar) {
            this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            this.updateLife(0, this.health);
        }

        this.setToIdle();
    }

    update(dt: number) {
        // 1) Compute distance to player
        let distToPlayer = Infinity;
        if (this.player) {
            const slimeW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
            const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }

        // 2) Check if player is still within patrol area
        const localPlayerPos = this.node.parent!
            .convertToNodeSpaceAR(
                this.player!.parent!.convertToWorldSpaceAR(this.player!.position)
            );
        const distFromCenter = localPlayerPos
            .sub(this.patrolCenter)
            .mag();
        const playerInPatrol = distFromCenter <= this.patrolRadius;

        // 3) Clamp radii for drawing
        const drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        const drawAttackR = Math.min(this.attackRadius, this.patrolRadius);

        // 4) Redraw detection circle
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();

        // 5) Redraw attack circle
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();

        // Determine states
        const inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        const inAttack = distToPlayer <= this.attackRadius && playerInPatrol;

        // Attack priority
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= 1) this.setToIdle();
            return;
        }

        // Running if detected
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run) this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        } else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }

        // Patrol logic
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

    // Life-bar update logic from Player
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
        this.updateLife(-amount, this.health);
        if (this.health === 0) this.die();
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
        this.anim.play("GreeenSlimeIdle");
    }

    private startWalking() {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(
            Math.random() >= 0.5 ? 1 : -1,
            Math.random() >= 0.5 ? 1 : -1
        ).normalize();
        const clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreeenSlimeWalkRight" : "GreeenSlimeWalkLeft")
            : (this.direction.y > 0 ? "GreeenSlimeWalkUp" : "GreeenSlimeWalkDown");
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
            ? (dir.x > 0 ? "GreeenSlimeAttackRight" : "GreeenSlimeAttackLeft")
            : (dir.y > 0 ? "GreeenSlimeAttackUp" : "GreeenSlimeAttackDown");
        this.anim.play(clip);
    }

    private runTowardsPlayer(dt: number) {
        const dir = this.getRunDirection();
        const clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeRunRight" : "GreeenSlimeRunLeft")
            : (dir.y > 0 ? "GreeenSlimeRunUp" : "GreeenSlimeRunDown");
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
        const worldP = this.player.parent!.convertToWorldSpaceAR(this.player.position);
        const localP = this.node.parent!.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    }
}
