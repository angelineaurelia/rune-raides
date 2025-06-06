
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0xhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMs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LEVBQUUsQ0FBQztxREFDN0I7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsaURBQWlELEVBQUUsQ0FBQzt5REFDNUM7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztxREFDMUI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQztrREFDOUI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzsrQ0FDakM7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvREFBb0QsRUFBRSxDQUFDO21EQUM1QztJQXRDZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaVYvQjtJQUFELGtCQUFDO0NBalZELEFBaVZDLENBalZ3QyxFQUFFLENBQUMsU0FBUyxHQWlWcEQ7a0JBalZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xuXG5lbnVtIFNsaW1lU3RhdGUge1xuICAgIElkbGUsXG4gICAgV2FsayxcbiAgICBSdW4sXG4gICAgQXR0YWNrXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNzA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJUaW1lIHRvIHdhaXQgYmVmb3JlIHBlcmZvcm1pbmcgYXR0YWNrIChzZWNvbmRzKVwiIH0pXG4gICAgdGltZUJlZm9yZUF0dGFjazogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGFtYWdlIGRlYWx0IGJ5IHRoZSBhdHRhY2tcIiB9KVxuICAgIGF0dGFja0RhbWFnZTogbnVtYmVyID0gMTM7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXG4gICAgbWF4SGVhbHRoOiBudW1iZXIgPSAxMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBoZWFsdGg6IG51bWJlciA9IDEwO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxuICAgIHByaXZhdGUgYmFyT2Zmc2V0WTogbnVtYmVyID0gNTA7XG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb24gPSBjYy52MigwLCAwKTtcbiAgICBwcml2YXRlIHBhdHJvbENlbnRlciA9IGNjLnYyKDAsIDApO1xuXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgZGV0ZWN0aW9uTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgYXR0YWNrR2Z4ITogY2MuR3JhcGhpY3M7XG5cbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XG4gICAgcHJpdmF0ZSBjdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XG5cbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNEZWF0aEFuaW1QbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIC8vIERyYXcgcGF0cm9sIGJvdW5kYXJ5XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgLy9jb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvL3BhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIERldGVjdGlvbiBhcmVhXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0aW9uQXJlYVwiKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeCA9IHRoaXMuZGV0ZWN0aW9uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIC8vIEF0dGFjayBhcmVhXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIC8vIEhlYWx0aCBiYXIgc2V0dXBcbiAgICAgICAgaWYgKHRoaXMubGlmZWJhcikge1xuICAgICAgICAgICAgLy90aGlzLmxpZmViYXIuc2V0UG9zaXRpb24oMCwgdGhpcy5ub2RlLmhlaWdodCAvIDIgKyB0aGlzLmJhck9mZnNldFkpO1xuICAgICAgICAgICAgLy90aGlzLnVwZGF0ZUxpZmUoMCwgNDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICAvLyBJZiBhbHJlYWR5IG1hcmtlZCBkZWFkLCBza2lwIEFJXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcbiAgICAgICAgICAgIC8vIExldCBkZWF0aCBhbmltYXRpb24gcGxheTsgZG8gbm90aGluZyBlbHNlIHVudGlsIGl0J3Mgb3ZlclxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMSkgY29tcHV0ZSBkaXN0YW5jZSB0byBwbGF5ZXJcbiAgICAgICAgbGV0IGRpc3RUb1BsYXllciA9IEluZmluaXR5O1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMikgY2hlY2sgaWYgcGxheWVyIGlzIHN0aWxsIHdpdGhpbiBwYXRyb2wgcmFkaXVzXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcbiAgICAgICAgICAgIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGlzdEZyb21DZW50ZXIgPSBsb2NhbFBsYXllclBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpO1xuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xuXG4gICAgICAgIC8vIDMpIHJlZHJhdyBkZXRlY3Rpb24gY2lyY2xlXG4gICAgICAgIGNvbnN0IGRyYXdEZXRlY3RSID0gTWF0aC5taW4odGhpcy5kZXRlY3Rpb25SYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDQpIHJlZHJhdyBhdHRhY2sgY2lyY2xlXG4gICAgICAgIGNvbnN0IGRyYXdBdHRhY2tSID0gTWF0aC5taW4odGhpcy5hdHRhY2tSYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXG4gICAgICAgICAvLyAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXG4gICAgICAgICAvLyAgIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDUpIEFJIHN0YXRlIHRyYW5zaXRpb25zXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIC8vIFdhaXQgdGhyb3VnaCB3aW5kLXVwICsgYXR0YWNrIGFuaW0gKHdpbmQtdXAgPSB0aW1lQmVmb3JlQXR0YWNrLCBhdHRhY2tBbmltIGFzc3VtZWQgMXMpXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnRpbWVCZWZvcmVBdHRhY2sgKyAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gcnVuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXRyb2wgKGlkbGUg4oaSIHdhbGsg4oaSIGlkbGUpXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ICA9IHBvcy5hZGQoZGVsdGEpO1xuICAgICAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKAlOKAlCBIZWFsdGjigJBiYXIgdXBkYXRlciDigJTigJRcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSAoaHAvdGhpcy5tYXhIZWFsdGgpKjQwO1xuICAgICAgICBpZiAoaHAgPD0gMTApICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDAgfHwgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHJldHVybjtcblxuICAgICAgICAvLyBwbGF5IGh1cnQgYW5pbWF0aW9uIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3Qgc2xpbWVQb3MgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRpciAgICAgICA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xuICAgICAgICBjb25zdCBodXJ0QW5pbSAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lSHVydFJpZ2h0XCIgOiBcIkxhdmFTbGltZUh1cnRMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUh1cnRVcFwiIDogXCJMYXZhU2xpbWVIdXJ0RG93blwiKTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoaHVydEFuaW0pO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMCkgdGhpcy5oZWFsdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydERlYXRoU2VxdWVuY2UoZGlyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0RGVhdGhTZXF1ZW5jZShkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7IC8vIGZyZWV6ZSBvdGhlciBBSVxuICAgICAgICB0aGlzLnBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbjogY2MuVmVjMikge1xuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiTGF2YVNsaW1lRGVhdGhSaWdodFwiIDogXCJMYXZhU2xpbWVEZWF0aExlZnRcIilcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiTGF2YVNsaW1lRGVhdGhVcFwiIDogXCJMYXZhU2xpbWVEZWF0aERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIC8vIEFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMgKGFzc3VtZSAxcyksIG1hcmsgYXMgZnVsbHkgZGVhZFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb0lkbGUoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiTGF2YVNsaW1lSWRsZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJMYXZhU2xpbWVXYWxrUmlnaHRcIiA6IFwiTGF2YVNsaW1lV2Fsa0xlZnRcIilcbiAgICAgICAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJMYXZhU2xpbWVXYWxrVXBcIiA6IFwiTGF2YVNsaW1lV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAvLyBXaW5k4oCQdXA6IHBsYXkgaWRsZSAob3IgYSBjdXN0b20gd2luZOKAkHVwIGFuaW0pXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiTGF2YVNsaW1lSWRsZVwiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xuICAgICAgICAvLyBQbGF5IGF0dGFjayBjbGlwIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJMYXZhU2xpbWVBdHRhY2tSaWdodFwiIDogXCJMYXZhU2xpbWVBdHRhY2tMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUF0dGFja1VwXCIgOiBcIkxhdmFTbGltZUF0dGFja0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuXG4gICAgICAgIC8vIEFwcGx5IGRhbWFnZSBpZiBwbGF5ZXIgc3RpbGwgd2l0aGluIHJhZGl1c1xuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XG4gICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBkaXN0ICAgICA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZnRlciBhdHRhY2sgYW5pbSAofjFzKSwgZ28gYmFjayB0byBpZGxlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0VG9JZGxlKCksIDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lUnVuUmlnaHRcIiA6IFwiTGF2YVNsaW1lUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVSdW5VcFwiIDogXCJMYXZhU2xpbWVSdW5Eb3duXCIpO1xuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcbiAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpOiBjYy5WZWMyIHtcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxufVxuIl19