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
var Player_1 = require("../Player");
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
        _this.attackRadius = 60;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 20;
        _this.maxHealth = 48;
        _this.health = 48;
        _this.lifebar = null;
        _this.barOffsetY = 50;
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        _this.isDead = false;
        _this.isDeathAnimPlaying = false;
        return _this;
    }
    GreenBossAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    GreenBossAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        // Draw patrol boundary
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        //const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        //patrolGfx.lineWidth = 2;
        //patrolGfx.strokeColor = cc.color(0, 255, 0);
        //patrolGfx.circle(0, 0, this.patrolRadius);
        //patrolGfx.stroke();
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
            //this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            //this.updateLife(0, this.health);
        }
        this.setToIdle();
    };
    GreenBossAI.prototype.update = function (dt) {
        // If already marked dead, skip AI
        if (this.isDead)
            return;
        if (this.isDeathAnimPlaying) {
            // Let death animation play; do nothing else until it's over
            return;
        }
        // 1) compute distance to player
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        // 2) check if player is still within patrol radius
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        // 3) redraw detection circle
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        //this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
        //    ? cc.color(255, 165, 0)
        //    : cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        //this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        //this.attackGfx.lineWidth   = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        //    ? cc.color(128, 0, 128)
        //    : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        //this.attackGfx.stroke();
        // 5) AI state transitions
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        // attack first
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            // Wait through wind-up + attack anim (wind-up = timeBeforeAttack, attackAnim assumed 1s)
            if (this.timer >= this.timeBeforeAttack + 1) {
                this.setToIdle();
            }
            return;
        }
        // then run
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        // patrol (idle → walk → idle)
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var delta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var next = pos.add(delta);
            if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(next);
            if (this.timer >= this.walkTime) {
                this.setToIdle();
            }
        }
    };
    // —— Health‐bar updater ——
    GreenBossAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = (hp / this.maxHealth) * 40;
        ;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    GreenBossAI.prototype.takeDamage = function (amount) {
        if (this.health <= 0 || this.isDeathAnimPlaying)
            return;
        // play hurt animation based on direction to player
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var dir = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossHurtRight" : "GreenBossHurtLeft")
            : (dir.y > 0 ? "GreenBossHurtUp" : "GreenBossHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0) {
            this.startDeathSequence(dir);
        }
    };
    GreenBossAI.prototype.heal = function (amount) {
        if (this.health <= 0)
            return;
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreenBossAI.prototype.startDeathSequence = function (direction) {
        this.isDeathAnimPlaying = true;
        this.slimeState = SlimeState.Idle; // freeze other AI
        this.playDeathAnimation(direction);
    };
    GreenBossAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreenBossDeadRight" : "GreenBossDeadLeft")
            : (direction.y > 0 ? "GreenBossDeadUp" : "GreenBossDeadDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        // After the death animation finishes (assume 1s), mark as fully dead
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
            // Do NOT destroy the node—just leave the dead pose in place
        }, 1);
    };
    GreenBossAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreenBossIdle");
    };
    GreenBossAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreenBossWalkRight" : "GreenBossWalkLeft")
            : (this.direction.y > 0 ? "GreenBossWalkUp" : "GreenBossWalkDown");
        this.anim.play(clip);
    };
    GreenBossAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenBossAI.prototype.startAttack = function () {
        var _this = this;
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        // Wind‐up: play idle (or a custom wind‐up anim)
        this.anim.play("GreenBossIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    GreenBossAI.prototype.performAttack = function () {
        var _this = this;
        // Play attack clip based on direction to player
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossAttackRight" : "GreenBossAttackLeft")
            : (dir.y > 0 ? "GreenBossAttackUp" : "GreenBossAttackDown");
        this.anim.play(clip);
        // Apply damage if player still within radius
        var playerComp = this.player.getComponent(Player_1.default);
        if (playerComp) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            var dist = slimeW.sub(playerW).mag();
            if (dist <= this.attackRadius) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
        // After attack anim (~1s), go back to idle
        this.scheduleOnce(function () { return _this.setToIdle(); }, 1);
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
        var delta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var next = this.node.getPosition().add(delta);
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(next);
    };
    GreenBossAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    GreenBossAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], GreenBossAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreenBossAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreenBossAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreenBossAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreenBossAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreenBossAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreenBossAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Time to wait before performing attack (seconds)" })
    ], GreenBossAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage dealt by the attack" })
    ], GreenBossAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreenBossAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreenBossAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenBossAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreenBossAI.prototype, "barOffsetY", void 0);
    GreenBossAI = __decorate([
        ccclass
    ], GreenBossAI);
    return GreenBossAI;
}(cc.Component));
exports.default = GreenBossAI;

cc._RF.pop();