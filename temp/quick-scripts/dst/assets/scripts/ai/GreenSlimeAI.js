
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/GreenSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83760YFIXRPyL+YhejhNquq', 'GreenSlimeAI');
// scripts/ai/GreenSlimeAI.ts

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
var GreenSlimeAI = /** @class */ (function (_super) {
    __extends(GreenSlimeAI, _super);
    function GreenSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 80;
        _this.attackDamage = 12;
        _this.attackHitDelay = 0.3;
        _this.attackAnimDuration = 1.0;
        _this.maxHealth = 15;
        _this.health = 15;
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
    GreenSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    GreenSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
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
    };
    GreenSlimeAI.prototype.update = function (dt) {
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
        //this.detectionGfx.lineWidth = 2;
        // this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
        //    ? cc.color(255, 165, 0)
        //    : cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        //this.detectionGfx.stroke();
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        //    ? cc.color(128, 0, 128)
        //    : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        //this.attackGfx.stroke();
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
    GreenSlimeAI.prototype.updateLife = function (delta, hp) {
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
    GreenSlimeAI.prototype.takeDamage = function (amount) {
        if (this.isDead || this.isDeathAnimPlaying)
            return; // Already dead or anim playing
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var direction = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreeenSlimeHurtRight" : "GreeenSlimeHurtLeft")
            : (direction.y > 0 ? "GreeenSlimeHurtUp" : "GreeenSlimeHurtDown");
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
    GreenSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreenSlimeAI.prototype.die = function () {
        this.unscheduleAllCallbacks();
    };
    GreenSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreeenSlimeIdle");
    };
    GreenSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreeenSlimeWalkRight" : "GreeenSlimeWalkLeft")
            : (this.direction.y > 0 ? "GreeenSlimeWalkUp" : "GreeenSlimeWalkDown");
        this.anim.play(clip);
    };
    GreenSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeAttackRight" : "GreeenSlimeAttackLeft")
            : (dir.y > 0 ? "GreeenSlimeAttackUp" : "GreeenSlimeAttackDown");
        this.anim.play(clip);
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    };
    GreenSlimeAI.prototype.applyAttackHit = function () {
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
    GreenSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeRunRight" : "GreeenSlimeRunLeft")
            : (dir.y > 0 ? "GreeenSlimeRunUp" : "GreeenSlimeRunDown");
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
    GreenSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    GreenSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    GreenSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreeenSlimeDeathRight" : "GreeenSlimeDeathLeft")
            : (direction.y > 0 ? "GreeenSlimeDeathUp" : "GreeenSlimeDeathDown");
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
    ], GreenSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreenSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreenSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreenSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreenSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreenSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreenSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "How much damage the slime does per attack" })
    ], GreenSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    ], GreenSlimeAI.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    ], GreenSlimeAI.prototype, "attackAnimDuration", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreenSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreenSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreenSlimeAI.prototype, "barOffsetY", void 0);
    GreenSlimeAI = __decorate([
        ccclass
    ], GreenSlimeAI);
    return GreenSlimeAI;
}(cc.Component));
exports.default = GreenSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0dyZWVuU2xpbWVBSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxvQ0FBK0I7QUFDL0IsSUFBSyxVQUtKO0FBTEQsV0FBSyxVQUFVO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLDJDQUFJLENBQUE7SUFDSix5Q0FBRyxDQUFBO0lBQ0gsK0NBQU0sQ0FBQTtBQUNWLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyVUM7UUF6VUcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUczQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUc5QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUc3Qix3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLHdCQUFrQixHQUFZLEtBQUssQ0FBQyxDQUFDLDhCQUE4QjtRQUVwRSxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQWUsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN6QyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVB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USxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7bURBQzlCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7Z0RBQ2pDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQztvREFDNUM7SUF6Q2YsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJVaEM7SUFBRCxtQkFBQztDQTNVRCxBQTJVQyxDQTNVeUMsRUFBRSxDQUFDLFNBQVMsR0EyVXJEO2tCQTNVb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcbmVudW0gU2xpbWVTdGF0ZSB7XG4gICAgSWRsZSxcbiAgICBXYWxrLFxuICAgIFJ1bixcbiAgICBBdHRhY2tcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWVuU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNTA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbXVjaCBkYW1hZ2UgdGhlIHNsaW1lIGRvZXMgcGVyIGF0dGFja1wiIH0pXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMjtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIlNlY29uZHMgaW50byBhdHRhY2sgYW5pbSB0byBhcHBseSBkYW1hZ2VcIiB9KVxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJUb3RhbCBsZW5ndGggb2YgYXR0YWNrIGFuaW0gKHNlY29uZHMpXCIgfSlcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDE1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIGhlYWx0aDogbnVtYmVyID0gMTU7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcblxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XG5cbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcblxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXA6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgLy9jb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvL3BhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0aW9uQXJlYVwiKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeCA9IHRoaXMuZGV0ZWN0aW9uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47IC8vIEFjdHVhbGx5IGRlYWQsIG5vdGhpbmcgaGFwcGVuc1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xuICAgICAgICAgICAgLy8gTGV0IHRoZSBkZWF0aCBhbmltYXRpb24gcGxheSwgYnV0IHNraXAgQUlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XG5cbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgIC8vIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXNcbiAgICAgICAgLy8gICAgPyBjYy5jb2xvcigxMjgsIDAsIDEyOClcbiAgICAgICAgLy8gICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LmNpcmNsZSgwLCAwLCBkcmF3QXR0YWNrUik7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguc3Ryb2tlKCk7XG5cbiAgICAgICAgY29uc3QgaW5EZXRlY3QgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXMgJiYgcGxheWVySW5QYXRyb2w7XG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuXG4gICAgICAgIGlmIChpbkF0dGFjayAmJiB0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLklkbGUgJiYgdGhpcy50aW1lciA+PSB0aGlzLmlkbGVUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuV2Fsaykge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlRGVsdGEgPSBjYy52MihcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy53YWxrU3BlZWQgKiBkdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3MgPSBwb3MuYWRkKG1vdmVEZWx0YSk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0UG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpZmViYXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gKGhwL3RoaXMubWF4SGVhbHRoKSo0MDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47IC8vIEFscmVhZHkgZGVhZCBvciBhbmltIHBsYXlpbmdcblxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBzbGltZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBjb25zdCBodXJ0QW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlZW5TbGltZUh1cnRSaWdodFwiIDogXCJHcmVlZW5TbGltZUh1cnRMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVlblNsaW1lSHVydFVwXCIgOiBcIkdyZWVlblNsaW1lSHVydERvd25cIik7XG5cbiAgICAgICAgdGhpcy5hbmltLnBsYXkoaHVydEFuaW0pO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gMDtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgtYW1vdW50LCB0aGlzLmhlYWx0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiB0aGlzLm1heEhlYWx0aCkgdGhpcy5oZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGllKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlZW5TbGltZUlkbGVcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xXG4gICAgICAgICkubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/ICh0aGlzLmRpcmVjdGlvbi54ID4gMCA/IFwiR3JlZWVuU2xpbWVXYWxrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVXYWxrTGVmdFwiKVxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVlblNsaW1lV2Fsa1VwXCIgOiBcIkdyZWVlblNsaW1lV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcblxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVlblNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVBdHRhY2tMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVlblNsaW1lQXR0YWNrVXBcIiA6IFwiR3JlZWVuU2xpbWVBdHRhY2tEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcbiAgICB9XG5cbiAgICBcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQzID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMiA9IGNjLnYyKHBsYXllcldvcmxkMy54LCBwbGF5ZXJXb3JsZDMueSk7XG5cbiAgICAgICAgY29uc3QgZGlzdCA9IHNsaW1lV29ybGQyLnN1YihwbGF5ZXJXb3JsZDIpLm1hZygpO1xuICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXIpO1xuICAgICAgICAgICAgaWYgKHBsYXllckNvbXApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDb21wLnRha2VEYW1hZ2UodGhpcy5hdHRhY2tEYW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBydW5Ub3dhcmRzUGxheWVyKGR0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlZW5TbGltZVJ1blJpZ2h0XCIgOiBcIkdyZWVlblNsaW1lUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlZW5TbGltZVJ1blVwXCIgOiBcIkdyZWVlblNsaW1lUnVuRG93blwiKTtcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IGNsaXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoZGlyLnggKiB0aGlzLnJ1blNwZWVkICogZHQsIGRpci55ICogdGhpcy5ydW5TcGVlZCAqIGR0KTtcbiAgICAgICAgY29uc3QgbmV4dFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChtb3ZlRGVsdGEpO1xuICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB3b3JsZFAgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGRlYXRoQW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlZW5TbGltZURlYXRoUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVEZWF0aExlZnRcIilcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiR3JlZWVuU2xpbWVEZWF0aFVwXCIgOiBcIkdyZWVlblNsaW1lRGVhdGhEb3duXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxLjApOyAvLyBtYXRjaCB0byB5b3VyIGFuaW1hdGlvbidzIGR1cmF0aW9uXG4gICAgfVxufVxuIl19