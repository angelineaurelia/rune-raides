
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/GreenBossAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.attackRadius = 50;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0dyZWVuQm9zc0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMs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O1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLENBQUM7eURBQzVDO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUM7cURBQzFCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7a0RBQzlCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7K0NBQ2pDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQzttREFDNUM7SUF0Q2YsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWlWL0I7SUFBRCxrQkFBQztDQWpWRCxBQWlWQyxDQWpWd0MsRUFBRSxDQUFDLFNBQVMsR0FpVnBEO2tCQWpWb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcblxuZW51bSBTbGltZVN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgUnVuLFxuICAgIEF0dGFja1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZW5Cb3NzQUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTUwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVGltZSB0byB3YWl0IGJlZm9yZSBwZXJmb3JtaW5nIGF0dGFjayAoc2Vjb25kcylcIiB9KVxuICAgIHRpbWVCZWZvcmVBdHRhY2s6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRhbWFnZSBkZWFsdCBieSB0aGUgYXR0YWNrXCIgfSlcbiAgICBhdHRhY2tEYW1hZ2U6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJNYXhpbXVtIGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIG1heEhlYWx0aDogbnVtYmVyID0gNDg7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkN1cnJlbnQgaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXG4gICAgaGVhbHRoOiBudW1iZXIgPSA0ODtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlZlcnRpY2FsIG9mZnNldCBvZiBoZWFsdGggYmFyIGFib3ZlIHNsaW1lIChwaXhlbHMpXCIgfSlcbiAgICBwcml2YXRlIGJhck9mZnNldFk6IG51bWJlciA9IDUwO1xuXG4gICAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xuICAgIHByaXZhdGUgdGltZXIgPSAwO1xuICAgIHByaXZhdGUgZGlyZWN0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgcHJpdmF0ZSBwYXRyb2xDZW50ZXIgPSBjYy52MigwLCAwKTtcblxuICAgIHByaXZhdGUgYm91bmRhcnlOb2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbk5vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XG4gICAgcHJpdmF0ZSBhdHRhY2tOb2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGF0dGFja0dmeCE6IGNjLkdyYXBoaWNzO1xuXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xuICAgIHByaXZhdGUgY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xuXG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzRGVhdGhBbmltUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgY2MuZXJyb3IoXCJQbGF5ZXIgbm9kZSBub3QgZm91bmRcIik7XG5cbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XG4gICAgICAgIHRoaXMucGF0cm9sQ2VudGVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuY2xvbmUoKTtcblxuICAgICAgICAvLyBEcmF3IHBhdHJvbCBib3VuZGFyeVxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnBhdHJvbENlbnRlcik7XG4gICAgICAgIC8vY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgLy9wYXRyb2xHZngubGluZVdpZHRoID0gMjtcbiAgICAgICAgLy9wYXRyb2xHZnguc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xuICAgICAgICAvL3BhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2UoKTtcblxuICAgICAgICAvLyBEZXRlY3Rpb24gYXJlYVxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcblxuICAgICAgICAvLyBBdHRhY2sgYXJlYVxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcblxuICAgICAgICAvLyBIZWFsdGggYmFyIHNldHVwXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy5saWZlYmFyLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5iYXJPZmZzZXRZKTtcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIHRoaXMuaGVhbHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBtYXJrZWQgZGVhZCwgc2tpcCBBSVxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XG4gICAgICAgICAgICAvLyBMZXQgZGVhdGggYW5pbWF0aW9uIHBsYXk7IGRvIG5vdGhpbmcgZWxzZSB1bnRpbCBpdCdzIG92ZXJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEpIGNvbXB1dGUgZGlzdGFuY2UgdG8gcGxheWVyXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgZGlzdFRvUGxheWVyID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIpIGNoZWNrIGlmIHBsYXllciBpcyBzdGlsbCB3aXRoaW4gcGF0cm9sIHJhZGl1c1xuICAgICAgICBjb25zdCBsb2NhbFBsYXllclBvcyA9IHRoaXMubm9kZS5wYXJlbnQhXG4gICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQ2VudGVyID0gbG9jYWxQbGF5ZXJQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcbiAgICAgICAgY29uc3QgcGxheWVySW5QYXRyb2wgPSBkaXN0RnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcblxuICAgICAgICAvLyAzKSByZWRyYXcgZGV0ZWN0aW9uIGNpcmNsZVxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCAgID0gMjtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmRldGVjdGlvblJhZGl1c1xuICAgICAgICAvLyAgICA/IGNjLmNvbG9yKDI1NSwgMTY1LCAwKVxuICAgICAgICAvLyAgICA6IGNjLmNvbG9yKDI1NSwgMCwgMCk7XG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZnguY2lyY2xlKDAsIDAsIGRyYXdEZXRlY3RSKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5zdHJva2UoKTtcblxuICAgICAgICAvLyA0KSByZWRyYXcgYXR0YWNrIGNpcmNsZVxuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDUpIEFJIHN0YXRlIHRyYW5zaXRpb25zXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIC8vIFdhaXQgdGhyb3VnaCB3aW5kLXVwICsgYXR0YWNrIGFuaW0gKHdpbmQtdXAgPSB0aW1lQmVmb3JlQXR0YWNrLCBhdHRhY2tBbmltIGFzc3VtZWQgMXMpXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnRpbWVCZWZvcmVBdHRhY2sgKyAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gcnVuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXRyb2wgKGlkbGUg4oaSIHdhbGsg4oaSIGlkbGUpXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ICA9IHBvcy5hZGQoZGVsdGEpO1xuICAgICAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKAlOKAlCBIZWFsdGjigJBiYXIgdXBkYXRlciDigJTigJRcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSAoaHAvdGhpcy5tYXhIZWFsdGgpKjQwOztcbiAgICAgICAgaWYgKGhwIDw9IDEwKSAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gcGxheSBodXJ0IGFuaW1hdGlvbiBiYXNlZCBvbiBkaXJlY3Rpb24gdG8gcGxheWVyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHNsaW1lUG9zICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXIgICAgICAgPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgaHVydEFuaW0gID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc0h1cnRSaWdodFwiIDogXCJHcmVlbkJvc3NIdXJ0TGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NIdXJ0VXBcIiA6IFwiR3JlZW5Cb3NzSHVydERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcblxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDApIHRoaXMuaGVhbHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKC1hbW91bnQsIHRoaXMuaGVhbHRoKTtcblxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWF0aFNlcXVlbmNlKGRpcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IHRoaXMubWF4SGVhbHRoKSB0aGlzLmhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoYW1vdW50LCB0aGlzLmhlYWx0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydERlYXRoU2VxdWVuY2UoZGlyZWN0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlOyAvLyBmcmVlemUgb3RoZXIgQUlcbiAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkdyZWVuQm9zc0RlYWRSaWdodFwiIDogXCJHcmVlbkJvc3NEZWFkTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NEZWFkVXBcIiA6IFwiR3JlZW5Cb3NzRGVhZERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIC8vIEFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMgKGFzc3VtZSAxcyksIG1hcmsgYXMgZnVsbHkgZGVhZFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb0lkbGUoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiR3JlZW5Cb3NzSWRsZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlbkJvc3NXYWxrUmlnaHRcIiA6IFwiR3JlZW5Cb3NzV2Fsa0xlZnRcIilcbiAgICAgICAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NXYWxrVXBcIiA6IFwiR3JlZW5Cb3NzV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAvLyBXaW5k4oCQdXA6IHBsYXkgaWRsZSAob3IgYSBjdXN0b20gd2luZOKAkHVwIGFuaW0pXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiR3JlZW5Cb3NzSWRsZVwiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xuICAgICAgICAvLyBQbGF5IGF0dGFjayBjbGlwIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlbkJvc3NBdHRhY2tSaWdodFwiIDogXCJHcmVlbkJvc3NBdHRhY2tMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVuQm9zc0F0dGFja1VwXCIgOiBcIkdyZWVuQm9zc0F0dGFja0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuXG4gICAgICAgIC8vIEFwcGx5IGRhbWFnZSBpZiBwbGF5ZXIgc3RpbGwgd2l0aGluIHJhZGl1c1xuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XG4gICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBkaXN0ICAgICA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZnRlciBhdHRhY2sgYW5pbSAofjFzKSwgZ28gYmFjayB0byBpZGxlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0VG9JZGxlKCksIDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiR3JlZW5Cb3NzUnVuUmlnaHRcIiA6IFwiR3JlZW5Cb3NzUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NSdW5VcFwiIDogXCJHcmVlbkJvc3NSdW5Eb3duXCIpO1xuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcbiAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpOiBjYy5WZWMyIHtcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxufVxuIl19