"use strict";
cc._RF.push(module, 'ddc97pf6D9J5rfmdoSlPhAP', 'GreenBossAI');
// scripts/ai/GreenBossAI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var GreenBossAI = /** @class */ (function (_super) {
    __extends(GreenBossAI, _super);
    function GreenBossAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 100;
        _this.runSpeed = 200;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 50;
        _this.specAttackRadius = 100;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 20;
        _this.specAttackDamage = 40;
        _this.maxHealth = 200;
        _this.health = 200;
        // —— new lifebar property ——  
        _this.lifebar = null;
        _this.barOffsetY = 60;
        //@property({ type: cc.Node, tooltip: "Player node" })
        //player: cc.Node = null;
        _this.player = null;
        _this.state = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.currentRunClip = "";
        return _this;
    }
    GreenBossAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        // draw patrol boundary (optional)
        this.boundaryNode = new cc.Node("Boundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        var bGfx = this.boundaryNode.addComponent(cc.Graphics);
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
    };
    GreenBossAI.prototype.update = function (dt) {
        if (!this.player)
            return;
        // 1) world-space distance
        var bossW = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var dist = bossW.sub(playerW).mag();
        // 2) patrol-bound check
        var localP = this.node.parent.convertToNodeSpaceAR(playerW);
        var fromCenter = localP.sub(this.patrolCenter).mag();
        var inPatrol = fromCenter <= this.patrolRadius;
        // 3) choose radii & draw circles
        var useSpec = this.health <= this.maxHealth * 0.5;
        var rawAttackR = useSpec ? this.specAttackRadius : this.attackRadius;
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(rawAttackR, this.patrolRadius);
        this.detectionGfx.clear();
        var inDetect = dist <= this.detectionRadius && inPatrol;
        this.detectionGfx.strokeColor = inDetect ? cc.color(255, 165, 0) : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        this.attackGfx.clear();
        var inRange = dist <= rawAttackR && inPatrol;
        this.attackGfx.strokeColor = inRange ? cc.color(128, 0, 128) : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
        // 4) attack state
        if (this.state !== SlimeState.Attack && inRange) {
            this.timer = 0;
            if (useSpec)
                this.startSpecAttack();
            else
                this.startAttack();
            return;
        }
        if (this.state === SlimeState.Attack)
            return;
        // 5) run state
        if (inDetect) {
            if (this.state !== SlimeState.Run)
                this.startRun();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.state === SlimeState.Run) {
            this.setIdle();
        }
        // 6) patrol fallback
        this.timer += dt;
        if (this.state === SlimeState.Idle && this.timer >= this.idleTime)
            this.startWalk();
        if (this.state === SlimeState.Walk)
            this.patrolMovement(dt);
    };
    // —— life‐bar updater ——  
    GreenBossAI.prototype.updateLife = function (delta, hp) {
        console.log("boss hp:", delta, "→", hp);
        if (!this.lifebar)
            return;
        this.lifebar.width = hp; // direct px = hp
        if (hp <= 50)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 100)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    GreenBossAI.prototype.takeDamage = function (amount) {
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0)
            this.die();
    };
    GreenBossAI.prototype.die = function () {
        this.node.destroy();
    };
    GreenBossAI.prototype.setIdle = function () {
        this.state = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreenBossIdle");
    };
    GreenBossAI.prototype.startWalk = function () {
        this.state = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() < 0.5 ? -1 : 1, Math.random() < 0.5 ? -1 : 1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreenBossWalkRight" : "GreenBossWalkLeft")
            : (this.direction.y > 0 ? "GreenBossWalkUp" : "GreenBossWalkDown");
        this.anim.play(clip);
    };
    GreenBossAI.prototype.startRun = function () {
        this.state = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenBossAI.prototype.startAttack = function () {
        var _this = this;
        this.state = SlimeState.Attack;
        this.anim.play("GreenBossIdle");
        this.scheduleOnce(function () { return _this.performAttack(_this.attackDamage, _this.attackRadius, "GreenBossAttack"); }, this.timeBeforeAttack);
    };
    GreenBossAI.prototype.startSpecAttack = function () {
        var _this = this;
        this.state = SlimeState.Attack;
        this.anim.play("GreenBossIdle");
        this.scheduleOnce(function () { return _this.performAttack(_this.specAttackDamage, _this.specAttackRadius, "GreenBossSpecAttack"); }, this.timeBeforeAttack);
    };
    GreenBossAI.prototype.performAttack = function (dmg, range, baseClip) {
        var _this = this;
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? baseClip + "Right" : baseClip + "Left")
            : (dir.y > 0 ? baseClip + "Up" : baseClip + "Down");
        this.anim.play(clip);
        // deal damage if still in range
        var bossW = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
        if (bossW.sub(playerW).mag() <= range) {
            var hc = this.player.getComponent("Health");
            if (hc === null || hc === void 0 ? void 0 : hc.takeDamage)
                hc.takeDamage(dmg);
        }
        this.scheduleOnce(function () { return _this.setIdle(); }, 1);
    };
    GreenBossAI.prototype.patrolMovement = function (dt) {
        var delta = this.direction.mul(this.walkSpeed * dt);
        var next = this.node.getPosition().add(delta);
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setIdle();
            return;
        }
        this.node.setPosition(next);
        if (this.timer >= this.walkTime)
            this.setIdle();
    };
    GreenBossAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossRunRight" : "GreenBossRunLeft")
            : (dir.y > 0 ? "GreenBossRunUp" : "GreenBossRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var next = this.node.getPosition().add(dir.mul(this.runSpeed * dt));
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setIdle();
            return;
        }
        this.node.setPosition(next);
    };
    GreenBossAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    __decorate([
        property({ tooltip: "Walk speed in pixels/sec" })
    ], GreenBossAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Run speed in pixels/sec" })
    ], GreenBossAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "Idle duration before moving (sec)" })
    ], GreenBossAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "Walk duration per direction (sec)" })
    ], GreenBossAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start (px)" })
    ], GreenBossAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection radius (px)" })
    ], GreenBossAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Normal attack radius (px)" })
    ], GreenBossAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Special attack radius when <50% HP (px)" })
    ], GreenBossAI.prototype, "specAttackRadius", void 0);
    __decorate([
        property({ tooltip: "Wind-up before any attack (sec)" })
    ], GreenBossAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage of normal attack" })
    ], GreenBossAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Damage of special attack" })
    ], GreenBossAI.prototype, "specAttackDamage", void 0);
    __decorate([
        property({ tooltip: "Max HP" })
    ], GreenBossAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current HP" })
    ], GreenBossAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenBossAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Health bar vertical offset (px)" })
    ], GreenBossAI.prototype, "barOffsetY", void 0);
    GreenBossAI = __decorate([
        ccclass
    ], GreenBossAI);
    return GreenBossAI;
}(cc.Component));
exports.default = GreenBossAI;

cc._RF.pop();