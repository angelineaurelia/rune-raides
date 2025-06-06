
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/LavaSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8da08N+F15AyKvgv89aNhm3', 'LavaSlimeAI');
// scripts/ai/LavaSlimeAI.ts

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
var LavaSlimeAI = /** @class */ (function (_super) {
    __extends(LavaSlimeAI, _super);
    function LavaSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 170;
        _this.attackRadius = 80;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 13;
        _this.maxHealth = 10;
        _this.health = 10;
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
    LavaSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    LavaSlimeAI.prototype.start = function () {
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
            //this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    LavaSlimeAI.prototype.update = function (dt) {
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
        this.attackGfx.lineWidth = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        //   ? cc.color(128, 0, 128)
        //   : cc.color(0, 0, 255);
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
    LavaSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = (hp / this.maxHealth) * 40;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    LavaSlimeAI.prototype.takeDamage = function (amount) {
        if (this.health <= 0 || this.isDeathAnimPlaying)
            return;
        // play hurt animation based on direction to player
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var dir = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeHurtRight" : "LavaSlimeHurtLeft")
            : (dir.y > 0 ? "LavaSlimeHurtUp" : "LavaSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0) {
            this.startDeathSequence(dir);
        }
    };
    LavaSlimeAI.prototype.heal = function (amount) {
        if (this.health <= 0)
            return;
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    LavaSlimeAI.prototype.startDeathSequence = function (direction) {
        this.isDeathAnimPlaying = true;
        this.slimeState = SlimeState.Idle; // freeze other AI
        this.playDeathAnimation(direction);
    };
    LavaSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "LavaSlimeDeathRight" : "LavaSlimeDeathLeft")
            : (direction.y > 0 ? "LavaSlimeDeathUp" : "LavaSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        // After the death animation finishes (assume 1s), mark as fully dead
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
            // Do NOT destroy the node—just leave the dead pose in place
        }, 1);
    };
    LavaSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("LavaSlimeIdle");
    };
    LavaSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "LavaSlimeWalkRight" : "LavaSlimeWalkLeft")
            : (this.direction.y > 0 ? "LavaSlimeWalkUp" : "LavaSlimeWalkDown");
        this.anim.play(clip);
    };
    LavaSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    LavaSlimeAI.prototype.startAttack = function () {
        var _this = this;
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        // Wind‐up: play idle (or a custom wind‐up anim)
        this.anim.play("LavaSlimeIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    LavaSlimeAI.prototype.performAttack = function () {
        var _this = this;
        // Play attack clip based on direction to player
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeAttackRight" : "LavaSlimeAttackLeft")
            : (dir.y > 0 ? "LavaSlimeAttackUp" : "LavaSlimeAttackDown");
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
    LavaSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeRunRight" : "LavaSlimeRunLeft")
            : (dir.y > 0 ? "LavaSlimeRunUp" : "LavaSlimeRunDown");
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
    LavaSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    LavaSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], LavaSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], LavaSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], LavaSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], LavaSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], LavaSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], LavaSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], LavaSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Time to wait before performing attack (seconds)" })
    ], LavaSlimeAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage dealt by the attack" })
    ], LavaSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], LavaSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], LavaSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], LavaSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], LavaSlimeAI.prototype, "barOffsetY", void 0);
    LavaSlimeAI = __decorate([
        ccclass
    ], LavaSlimeAI);
    return LavaSlimeAI;
}(cc.Component));
exports.default = LavaSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXExhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENB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QStCLEVBQUUsQ0FBQztxREFDN0I7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsaURBQWlELEVBQUUsQ0FBQzt5REFDNUM7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztxREFDMUI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQztrREFDOUI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzsrQ0FDakM7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvREFBb0QsRUFBRSxDQUFDO21EQUM1QztJQXRDZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaVYvQjtJQUFELGtCQUFDO0NBalZELEFBaVZDLENBalZ3QyxFQUFFLENBQUMsU0FBUyxHQWlWcEQ7a0JBalZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5lbnVtIFNsaW1lU3RhdGUge1xyXG4gICAgSWRsZSxcclxuICAgIFdhbGssXHJcbiAgICBSdW4sXHJcbiAgICBBdHRhY2tcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YVNsaW1lQUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcclxuICAgIHdhbGtTcGVlZDogbnVtYmVyID0gMTIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcclxuICAgIHJ1blNwZWVkOiBudW1iZXIgPSAyNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxyXG4gICAgaWRsZVRpbWU6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxyXG4gICAgd2Fsa1RpbWU6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxyXG4gICAgcGF0cm9sUmFkaXVzOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXHJcbiAgICBkZXRlY3Rpb25SYWRpdXM6IG51bWJlciA9IDE3MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcclxuICAgIGF0dGFja1JhZGl1czogbnVtYmVyID0gODA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJUaW1lIHRvIHdhaXQgYmVmb3JlIHBlcmZvcm1pbmcgYXR0YWNrIChzZWNvbmRzKVwiIH0pXHJcbiAgICB0aW1lQmVmb3JlQXR0YWNrOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGFtYWdlIGRlYWx0IGJ5IHRoZSBhdHRhY2tcIiB9KVxyXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMztcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIGhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxyXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgIHByaXZhdGUgdGltZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb24gPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcclxuXHJcbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xyXG5cclxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzRGVhdGhBbmltUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIpIGNjLmVycm9yKFwiUGxheWVyIG5vZGUgbm90IGZvdW5kXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcclxuICAgICAgICB0aGlzLnBhdHJvbENlbnRlciA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmNsb25lKCk7XHJcblxyXG4gICAgICAgIC8vIERyYXcgcGF0cm9sIGJvdW5kYXJ5XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUgPSBuZXcgY2MuTm9kZShcIlBhdHJvbEJvdW5kYXJ5XCIpO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcclxuICAgICAgICAvL2NvbnN0IHBhdHJvbEdmeCA9IHRoaXMuYm91bmRhcnlOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgLy9wYXRyb2xHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICAgICAgLy9wYXRyb2xHZnguY2lyY2xlKDAsIDAsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZWN0aW9uIGFyZWFcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2sgYXJlYVxyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgIC8vIEhlYWx0aCBiYXIgc2V0dXBcclxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5saWZlYmFyLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5iYXJPZmZzZXRZKTtcclxuICAgICAgICAgICAgLy90aGlzLnVwZGF0ZUxpZmUoMCwgNDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIElmIGFscmVhZHkgbWFya2VkIGRlYWQsIHNraXAgQUlcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gTGV0IGRlYXRoIGFuaW1hdGlvbiBwbGF5OyBkbyBub3RoaW5nIGVsc2UgdW50aWwgaXQncyBvdmVyXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDEpIGNvbXB1dGUgZGlzdGFuY2UgdG8gcGxheWVyXHJcbiAgICAgICAgbGV0IGRpc3RUb1BsYXllciA9IEluZmluaXR5O1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZVcgID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGRpc3RUb1BsYXllciA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyKSBjaGVjayBpZiBwbGF5ZXIgaXMgc3RpbGwgd2l0aGluIHBhdHJvbCByYWRpdXNcclxuICAgICAgICBjb25zdCBsb2NhbFBsYXllclBvcyA9IHRoaXMubm9kZS5wYXJlbnQhXHJcbiAgICAgICAgICAgIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGlzdEZyb21DZW50ZXIgPSBsb2NhbFBsYXllclBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XHJcblxyXG4gICAgICAgIC8vIDMpIHJlZHJhdyBkZXRlY3Rpb24gY2lyY2xlXHJcbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoICAgPSAyO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXNcclxuICAgICAgICAvLyAgICA/IGNjLmNvbG9yKDI1NSwgMTY1LCAwKVxyXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcclxuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XHJcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gNCkgcmVkcmF3IGF0dGFjayBjaXJjbGVcclxuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggICA9IDI7XHJcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1c1xyXG4gICAgICAgICAvLyAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXHJcbiAgICAgICAgIC8vICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xyXG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguY2lyY2xlKDAsIDAsIGRyYXdBdHRhY2tSKTtcclxuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyA1KSBBSSBzdGF0ZSB0cmFuc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgLy8gV2FpdCB0aHJvdWdoIHdpbmQtdXAgKyBhdHRhY2sgYW5pbSAod2luZC11cCA9IHRpbWVCZWZvcmVBdHRhY2ssIGF0dGFja0FuaW0gYXNzdW1lZCAxcylcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lQmVmb3JlQXR0YWNrICsgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGVuIHJ1blxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGF0cm9sIChpZGxlIOKGkiB3YWxrIOKGkiBpZGxlKVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHQgID0gcG9zLmFkZChkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4oCU4oCUIEhlYWx0aOKAkGJhciB1cGRhdGVyIOKAlOKAlFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IChocC90aGlzLm1heEhlYWx0aCkqNDA7XHJcbiAgICAgICAgaWYgKGhwIDw9IDEwKSAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XHJcbiAgICAgICAgZWxzZSAgICAgICAgICAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGFrZURhbWFnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHBsYXkgaHVydCBhbmltYXRpb24gYmFzZWQgb24gZGlyZWN0aW9uIHRvIHBsYXllclxyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgc2xpbWVQb3MgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZGlyICAgICAgID0gcGxheWVyUG9zLnN1YihzbGltZVBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgaHVydEFuaW0gID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lSHVydFJpZ2h0XCIgOiBcIkxhdmFTbGltZUh1cnRMZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiTGF2YVNsaW1lSHVydFVwXCIgOiBcIkxhdmFTbGltZUh1cnREb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDApIHRoaXMuaGVhbHRoID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydERlYXRoU2VxdWVuY2UoZGlyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoICs9IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiB0aGlzLm1heEhlYWx0aCkgdGhpcy5oZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoYW1vdW50LCB0aGlzLmhlYWx0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydERlYXRoU2VxdWVuY2UoZGlyZWN0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTsgLy8gZnJlZXplIG90aGVyIEFJXHJcbiAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJMYXZhU2xpbWVEZWF0aFJpZ2h0XCIgOiBcIkxhdmFTbGltZURlYXRoTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkxhdmFTbGltZURlYXRoVXBcIiA6IFwiTGF2YVNsaW1lRGVhdGhEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIC8vIEFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMgKGFzc3VtZSAxcyksIG1hcmsgYXMgZnVsbHkgZGVhZFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBEbyBOT1QgZGVzdHJveSB0aGUgbm9kZeKAlGp1c3QgbGVhdmUgdGhlIGRlYWQgcG9zZSBpbiBwbGFjZVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkxhdmFTbGltZUlkbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMVxyXG4gICAgICAgICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAodGhpcy5kaXJlY3Rpb24ueCA+IDAgPyBcIkxhdmFTbGltZVdhbGtSaWdodFwiIDogXCJMYXZhU2xpbWVXYWxrTGVmdFwiKVxyXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiTGF2YVNsaW1lV2Fsa1VwXCIgOiBcIkxhdmFTbGltZVdhbGtEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuUnVuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRBdHRhY2soKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgLy8gV2luZOKAkHVwOiBwbGF5IGlkbGUgKG9yIGEgY3VzdG9tIHdpbmTigJB1cCBhbmltKVxyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiTGF2YVNsaW1lSWRsZVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnBlcmZvcm1BdHRhY2soKSwgdGhpcy50aW1lQmVmb3JlQXR0YWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlcmZvcm1BdHRhY2soKSB7XHJcbiAgICAgICAgLy8gUGxheSBhdHRhY2sgY2xpcCBiYXNlZCBvbiBkaXJlY3Rpb24gdG8gcGxheWVyXHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiTGF2YVNsaW1lQXR0YWNrTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUF0dGFja1VwXCIgOiBcIkxhdmFTbGltZUF0dGFja0Rvd25cIik7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IGRhbWFnZSBpZiBwbGF5ZXIgc3RpbGwgd2l0aGluIHJhZGl1c1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICBpZiAocGxheWVyQ29tcCkge1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZVcgICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXICA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCAgICAgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrRGFtYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWZ0ZXIgYXR0YWNrIGFuaW0gKH4xcyksIGdvIGJhY2sgdG8gaWRsZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0VG9JZGxlKCksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lUnVuUmlnaHRcIiA6IFwiTGF2YVNsaW1lUnVuTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZVJ1blVwXCIgOiBcIkxhdmFTbGltZVJ1bkRvd25cIik7XHJcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBjbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XHJcbiAgICAgICAgY29uc3QgbmV4dCAgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoZGVsdGEpO1xyXG4gICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCB3b3JsZFAgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsUCA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUCk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxufVxyXG4iXX0=