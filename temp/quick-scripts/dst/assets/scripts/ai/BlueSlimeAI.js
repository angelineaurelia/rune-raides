
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/BlueSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93c17LsWWNNMIhlPghgF2vo', 'BlueSlimeAI');
// scripts/ai/BlueSlimeAI.ts

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
var BlueSlimeAI = /** @class */ (function (_super) {
    __extends(BlueSlimeAI, _super);
    function BlueSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 100;
        _this.runSpeed = 200;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 50;
        _this.attackDamage = 10;
        _this.attackHitDelay = 0.3;
        _this.attackAnimDuration = 1.0;
        _this.maxHealth = 40;
        _this.health = 40;
        _this.lifebar = null;
        _this.barOffsetY = 10;
        _this.isDead = false;
        _this.isDeathAnimPlaying = false; // NEW: Tracks death animation
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        return _this;
    }
    BlueSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    BlueSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        var patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();
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
            this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    BlueSlimeAI.prototype.update = function (dt) {
        if (this.isDead)
            return; // Actually dead, nothing happens
        if (this.isDeathAnimPlaying) {
            // Let the death animation play, but skip AI
            return;
        }
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
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
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
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
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var moveDelta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var nextPos = pos.add(moveDelta);
            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);
            if (this.timer >= this.walkTime)
                this.setToIdle();
        }
    };
    BlueSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    BlueSlimeAI.prototype.takeDamage = function (amount) {
        if (this.isDead || this.isDeathAnimPlaying)
            return; // Already dead or anim playing
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var direction = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
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
    };
    BlueSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    BlueSlimeAI.prototype.die = function () {
        this.unscheduleAllCallbacks();
    };
    BlueSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("BlueSlimeIdle");
    };
    BlueSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "BlueSlimeWalkRight" : "BlueSlimeWalkLeft")
            : (this.direction.y > 0 ? "BlueSlimeWalkUp" : "BlueSlimeWalkDown");
        this.anim.play(clip);
    };
    BlueSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    BlueSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeAttackRight" : "BlueSlimeAttackLeft")
            : (dir.y > 0 ? "BlueSlimeAttackUp" : "BlueSlimeAttackDown");
        this.anim.play(clip);
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    };
    BlueSlimeAI.prototype.applyAttackHit = function () {
        if (this.slimeState !== SlimeState.Attack)
            return;
        var slimeWorld3 = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
        var playerWorld3 = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        var dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            var playerComp = this.player.getComponent(Player_1.default);
            if (playerComp) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
    };
    BlueSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeRunRight" : "BlueSlimeRunLeft")
            : (dir.y > 0 ? "BlueSlimeRunUp" : "BlueSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var moveDelta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var nextPos = this.node.getPosition().add(moveDelta);
        if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(nextPos);
    };
    BlueSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    BlueSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    BlueSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeDeathRight" : "BlueSlimeDeathLeft")
            : (direction.y > 0 ? "BlueSlimeDeathUp" : "BlueSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        this.slimeState = SlimeState.Idle;
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
        }, 1.0); // match to your animation's duration
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], BlueSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], BlueSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], BlueSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], BlueSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], BlueSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], BlueSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], BlueSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "How much damage the slime does per attack" })
    ], BlueSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    ], BlueSlimeAI.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    ], BlueSlimeAI.prototype, "attackAnimDuration", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], BlueSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], BlueSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], BlueSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], BlueSlimeAI.prototype, "barOffsetY", void 0);
    BlueSlimeAI = __decorate([
        ccclass
    ], BlueSlimeAI);
    return BlueSlimeAI;
}(cc.Component));
exports.default = BlueSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0JsdWVTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUMvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTJVQztRQXpVRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRzdCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUdqQyxlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDLENBQUMsOEJBQThCO1FBRXBFLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBZSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFB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O0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBekNmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyVS9CO0lBQUQsa0JBQUM7Q0EzVUQsQUEyVUMsQ0EzVXdDLEVBQUUsQ0FBQyxTQUFTLEdBMlVwRDtrQkEzVW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XG5lbnVtIFNsaW1lU3RhdGUge1xuICAgIElkbGUsXG4gICAgV2FsayxcbiAgICBSdW4sXG4gICAgQXR0YWNrXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVlU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNTA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDUwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbXVjaCBkYW1hZ2UgdGhlIHNsaW1lIGRvZXMgcGVyIGF0dGFja1wiIH0pXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIlNlY29uZHMgaW50byBhdHRhY2sgYW5pbSB0byBhcHBseSBkYW1hZ2VcIiB9KVxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJUb3RhbCBsZW5ndGggb2YgYXR0YWNrIGFuaW0gKHNlY29uZHMpXCIgfSlcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIGhlYWx0aDogbnVtYmVyID0gNDA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcblxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XG5cbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcblxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXA6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgcGF0cm9sR2Z4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHBhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIHBhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICBwYXRyb2xHZnguc3Ryb2tlKCk7XG5cbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlID0gbmV3IGNjLk5vZGUoXCJEZXRlY3Rpb25BcmVhXCIpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4ID0gdGhpcy5kZXRlY3Rpb25Ob2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCA9IDI7XG5cbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlID0gbmV3IGNjLk5vZGUoXCJBdHRhY2tBcmVhXCIpO1xuICAgICAgICB0aGlzLmF0dGFja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4ID0gdGhpcy5hdHRhY2tOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XG5cbiAgICAgICAgaWYgKHRoaXMubGlmZWJhcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47IC8vIEFjdHVhbGx5IGRlYWQsIG5vdGhpbmcgaGFwcGVuc1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xuICAgICAgICAgICAgLy8gTGV0IHRoZSBkZWF0aCBhbmltYXRpb24gcGxheSwgYnV0IHNraXAgQUlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XG5cbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXNcbiAgICAgICAgICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXG4gICAgICAgICAgICA6IGNjLmNvbG9yKDI1NSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXG4gICAgICAgICAgICA/IGNjLmNvbG9yKDEyOCwgMCwgMTI4KVxuICAgICAgICAgICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5zdHJva2UoKTtcblxuICAgICAgICBjb25zdCBpbkRldGVjdCA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmRldGVjdGlvblJhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcbiAgICAgICAgY29uc3QgaW5BdHRhY2sgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXMgJiYgcGxheWVySW5QYXRyb2w7XG5cbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuQXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5hdHRhY2tBbmltRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluRGV0ZWN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcbiAgICAgICAgICAgIHRoaXMucnVuVG93YXJkc1BsYXllcihkdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVEZWx0YSA9IGNjLnYyKFxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnggKiB0aGlzLndhbGtTcGVlZCAqIGR0LFxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbmV4dFBvcyA9IHBvcy5hZGQobW92ZURlbHRhKTtcblxuICAgICAgICAgICAgaWYgKG5leHRQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dFBvcyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47IC8vIEFscmVhZHkgZGVhZCBvciBhbmltIHBsYXlpbmdcblxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBzbGltZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBjb25zdCBodXJ0QW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJCbHVlU2xpbWVIdXJ0UmlnaHRcIiA6IFwiQmx1ZVNsaW1lSHVydExlZnRcIilcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiQmx1ZVNsaW1lSHVydFVwXCIgOiBcIkJsdWVTbGltZUh1cnREb3duXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcblxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb0lkbGUoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiQmx1ZVNsaW1lSWRsZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJCbHVlU2xpbWVXYWxrUmlnaHRcIiA6IFwiQmx1ZVNsaW1lV2Fsa0xlZnRcIilcbiAgICAgICAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJCbHVlU2xpbWVXYWxrVXBcIiA6IFwiQmx1ZVNsaW1lV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcblxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkJsdWVTbGltZUF0dGFja1JpZ2h0XCIgOiBcIkJsdWVTbGltZUF0dGFja0xlZnRcIilcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiQmx1ZVNsaW1lQXR0YWNrVXBcIiA6IFwiQmx1ZVNsaW1lQXR0YWNrRG93blwiKTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hcHBseUF0dGFja0hpdCwgdGhpcy5hdHRhY2tIaXREZWxheSk7XG4gICAgfVxuXG4gICAgXG4gICAgcHJpdmF0ZSBhcHBseUF0dGFja0hpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHJldHVybjtcblxuICAgICAgICBjb25zdCBzbGltZVdvcmxkMyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBzbGltZVdvcmxkMiA9IGNjLnYyKHNsaW1lV29ybGQzLngsIHNsaW1lV29ybGQzLnkpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMyA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xuXG4gICAgICAgIGNvbnN0IGRpc3QgPSBzbGltZVdvcmxkMi5zdWIocGxheWVyV29ybGQyKS5tYWcoKTtcbiAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrRGFtYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiQmx1ZVNsaW1lUnVuUmlnaHRcIiA6IFwiQmx1ZVNsaW1lUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJCbHVlU2xpbWVSdW5VcFwiIDogXCJCbHVlU2xpbWVSdW5Eb3duXCIpO1xuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3ZlRGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xuICAgICAgICBjb25zdCBuZXh0UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKG1vdmVEZWx0YSk7XG4gICAgICAgIGlmIChuZXh0UG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dFBvcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xuICAgICAgICByZXR1cm4gY2MudjIobG9jYWxQLnggLSB0aGlzLm5vZGUueCwgbG9jYWxQLnkgLSB0aGlzLm5vZGUueSkubm9ybWFsaXplKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkJsdWVTbGltZURlYXRoUmlnaHRcIiA6IFwiQmx1ZVNsaW1lRGVhdGhMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkJsdWVTbGltZURlYXRoVXBcIiA6IFwiQmx1ZVNsaW1lRGVhdGhEb3duXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxLjApOyAvLyBtYXRjaCB0byB5b3VyIGFuaW1hdGlvbidzIGR1cmF0aW9uXG4gICAgfVxufVxuIl19