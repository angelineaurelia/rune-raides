const { ccclass, property } = cc._decorator;

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

    @property({ tooltip: "Maximum health of the slime" })
    maxHealth: number = 100;

    @property({ tooltip: "Current health of the slime" })
    health: number = 100;

    @property({ tooltip: "Total width of health bar (pixels)" })
    healthBarWidth: number = 60;

    @property({ tooltip: "Height of each health segment box (pixels)" })
    healthBarHeight: number = 10;

    @property({ tooltip: "Number of segments in health bar" })
    segmentCount: number = 10;

    @property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    healthBarOffsetY: number = 50;

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

    private healthBarNode!: cc.Node;
    private healthBarGfx!: cc.Graphics;

    private anim!: cc.Animation;
    private currentRunClip = "";
    private currentAttackClip = "";

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
        this.healthBarNode = new cc.Node("HealthBar");
        this.healthBarNode.parent = this.node;
        this.healthBarNode.setPosition(0, this.healthBarOffsetY);
        this.healthBarGfx = this.healthBarNode.addComponent(cc.Graphics);
        this.healthBarGfx.lineWidth = 1;

        this.setToIdle();
    }

    update(dt: number) {
        this.drawHealthBar();

        // Compute distance to player
        let dist = Infinity;
        if (this.player) {
            const slimeW = this.node.parent!.convertToWorldSpaceAR(this.node.position);
            const playerW = this.player.parent!.convertToWorldSpaceAR(this.player.position);
            dist = slimeW.sub(playerW).mag();
        }

        // Redraw detection
        const inDetect = dist <= this.detectionRadius;
        this.detectionGfx.clear();
        this.detectionGfx.strokeColor = inDetect ? cc.color(255, 165, 0) : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, this.detectionRadius);
        this.detectionGfx.stroke();

        // Redraw attack
        const inAttack = dist <= this.attackRadius;
        this.attackGfx.clear();
        this.attackGfx.strokeColor = inAttack ? cc.color(128, 0, 128) : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, this.attackRadius);
        this.attackGfx.stroke();

        // Attack state
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= 1) this.setToIdle();
            return;
        }

        // Run if detected
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run) this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        } else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }

        // Patrol
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
            // Prevent leaving patrol radius when walking
            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);
            if (this.timer >= this.walkTime) this.setToIdle();
        }
    }

    private drawHealthBar() {
        const total = this.segmentCount;
        const filled = Math.ceil((this.health / this.maxHealth) * total);
        const boxW = this.healthBarWidth / total;
        const boxH = this.healthBarHeight;

        this.healthBarGfx.clear();

        // BlueSlime default; orange ≤5; red ≤3
        let fillColor = cc.color(0, 255, 0);
        if (filled <= 3) fillColor = cc.color(255, 0, 0);
        else if (filled <= 5) fillColor = cc.color(255, 165, 0);

        for (let i = 0; i < total; i++) {
            const x = -this.healthBarWidth / 2 + i * boxW;
            this.healthBarGfx.strokeColor = cc.color(0, 0, 0);
            this.healthBarGfx.rect(x, -boxH / 2, boxW - 1, boxH - 1);
            this.healthBarGfx.stroke();

            if (i < filled) {
                this.healthBarGfx.fillColor = fillColor;
                this.healthBarGfx.rect(x, -boxH / 2, boxW - 1, boxH - 1);
                this.healthBarGfx.fill();
            }
        }
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
        // Prevent leaving patrol radius when running
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
