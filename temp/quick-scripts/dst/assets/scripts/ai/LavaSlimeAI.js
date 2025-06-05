
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
        _this.walkSpeed = 100;
        _this.runSpeed = 200;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 50;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 20;
        _this.maxHealth = 40;
        _this.health = 40;
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
        var patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
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
            //this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            this.updateLife(0, this.health);
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
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
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
        this.lifebar.width = hp;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0xhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMs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RSw2QkFBNkIsRUFBRSxDQUFDO2tEQUM5QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDOytDQUNqQztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBdENmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpVi9CO0lBQUQsa0JBQUM7Q0FqVkQsQUFpVkMsQ0FqVndDLEVBQUUsQ0FBQyxTQUFTLEdBaVZwRDtrQkFqVm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XG5cbmVudW0gU2xpbWVTdGF0ZSB7XG4gICAgSWRsZSxcbiAgICBXYWxrLFxuICAgIFJ1bixcbiAgICBBdHRhY2tcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdmFTbGltZUFJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHdhbGsgc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxuICAgIHdhbGtTcGVlZDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSBydW4gc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxuICAgIHJ1blNwZWVkOiBudW1iZXIgPSAyMDA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSBzdGF5cyBpZGxlIGJlZm9yZSB3YWxraW5nIChzZWNvbmRzKVwiIH0pXG4gICAgaWRsZVRpbWU6IG51bWJlciA9IDU7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSB3YWxrcyBpbiBvbmUgZGlyZWN0aW9uIChzZWNvbmRzKVwiIH0pXG4gICAgd2Fsa1RpbWU6IG51bWJlciA9IDU7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhdHJvbCByYWRpdXMgZnJvbSBzdGFydCBwb2ludCAocGl4ZWxzKVwiIH0pXG4gICAgcGF0cm9sUmFkaXVzOiBudW1iZXIgPSAyMDA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRldGVjdGlvbiBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBkZXRlY3Rpb25SYWRpdXM6IG51bWJlciA9IDE1MDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQXR0YWNrIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxuICAgIGF0dGFja1JhZGl1czogbnVtYmVyID0gNTA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlRpbWUgdG8gd2FpdCBiZWZvcmUgcGVyZm9ybWluZyBhdHRhY2sgKHNlY29uZHMpXCIgfSlcbiAgICB0aW1lQmVmb3JlQXR0YWNrOiBudW1iZXIgPSAxO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEYW1hZ2UgZGVhbHQgYnkgdGhlIGF0dGFja1wiIH0pXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAyMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIGhlYWx0aDogbnVtYmVyID0gNDA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSA1MDtcblxuICAgIHB1YmxpYyBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICBwcml2YXRlIHRpbWVyID0gMDtcbiAgICBwcml2YXRlIGRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyID0gY2MudjIoMCwgMCk7XG5cbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcblxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwID0gXCJcIjtcbiAgICBwcml2YXRlIGN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcblxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpIGFzIGNjLk5vZGU7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIpIGNjLmVycm9yKFwiUGxheWVyIG5vZGUgbm90IGZvdW5kXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xuICAgICAgICB0aGlzLnBhdHJvbENlbnRlciA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmNsb25lKCk7XG5cbiAgICAgICAgLy8gRHJhdyBwYXRyb2wgYm91bmRhcnlcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUgPSBuZXcgY2MuTm9kZShcIlBhdHJvbEJvdW5kYXJ5XCIpO1xuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUuc2V0UG9zaXRpb24odGhpcy5wYXRyb2xDZW50ZXIpO1xuICAgICAgICBjb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBwYXRyb2xHZngubGluZVdpZHRoID0gMjtcbiAgICAgICAgcGF0cm9sR2Z4LnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcbiAgICAgICAgcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIHBhdHJvbEdmeC5zdHJva2UoKTtcblxuICAgICAgICAvLyBEZXRlY3Rpb24gYXJlYVxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcblxuICAgICAgICAvLyBBdHRhY2sgYXJlYVxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcblxuICAgICAgICAvLyBIZWFsdGggYmFyIHNldHVwXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy5saWZlYmFyLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5iYXJPZmZzZXRZKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlmZSgwLCB0aGlzLmhlYWx0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIC8vIElmIGFscmVhZHkgbWFya2VkIGRlYWQsIHNraXAgQUlcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xuICAgICAgICAgICAgLy8gTGV0IGRlYXRoIGFuaW1hdGlvbiBwbGF5OyBkbyBub3RoaW5nIGVsc2UgdW50aWwgaXQncyBvdmVyXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAxKSBjb21wdXRlIGRpc3RhbmNlIHRvIHBsYXllclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgICAgICAgY29uc3Qgc2xpbWVXICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyVyA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGRpc3RUb1BsYXllciA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyKSBjaGVjayBpZiBwbGF5ZXIgaXMgc3RpbGwgd2l0aGluIHBhdHJvbCByYWRpdXNcbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XG5cbiAgICAgICAgLy8gMykgcmVkcmF3IGRldGVjdGlvbiBjaXJjbGVcbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jbGVhcigpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggICA9IDI7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXG4gICAgICAgICAgICA/IGNjLmNvbG9yKDI1NSwgMTY1LCAwKVxuICAgICAgICAgICAgOiBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5zdHJva2UoKTtcblxuICAgICAgICAvLyA0KSByZWRyYXcgYXR0YWNrIGNpcmNsZVxuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCAgID0gMjtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXNcbiAgICAgICAgICAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXG4gICAgICAgICAgICA6IGNjLmNvbG9yKDAsIDAsIDI1NSk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNpcmNsZSgwLCAwLCBkcmF3QXR0YWNrUik7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDUpIEFJIHN0YXRlIHRyYW5zaXRpb25zXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIC8vIFdhaXQgdGhyb3VnaCB3aW5kLXVwICsgYXR0YWNrIGFuaW0gKHdpbmQtdXAgPSB0aW1lQmVmb3JlQXR0YWNrLCBhdHRhY2tBbmltIGFzc3VtZWQgMXMpXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnRpbWVCZWZvcmVBdHRhY2sgKyAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gcnVuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXRyb2wgKGlkbGUg4oaSIHdhbGsg4oaSIGlkbGUpXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ICA9IHBvcy5hZGQoZGVsdGEpO1xuICAgICAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKAlOKAlCBIZWFsdGjigJBiYXIgdXBkYXRlciDigJTigJRcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gcGxheSBodXJ0IGFuaW1hdGlvbiBiYXNlZCBvbiBkaXJlY3Rpb24gdG8gcGxheWVyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHNsaW1lUG9zICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXIgICAgICAgPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgaHVydEFuaW0gID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkxhdmFTbGltZUh1cnRSaWdodFwiIDogXCJMYXZhU2xpbWVIdXJ0TGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVIdXJ0VXBcIiA6IFwiTGF2YVNsaW1lSHVydERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcblxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDApIHRoaXMuaGVhbHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKC1hbW91bnQsIHRoaXMuaGVhbHRoKTtcblxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWF0aFNlcXVlbmNlKGRpcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IHRoaXMubWF4SGVhbHRoKSB0aGlzLmhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoYW1vdW50LCB0aGlzLmhlYWx0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydERlYXRoU2VxdWVuY2UoZGlyZWN0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlOyAvLyBmcmVlemUgb3RoZXIgQUlcbiAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkxhdmFTbGltZURlYXRoUmlnaHRcIiA6IFwiTGF2YVNsaW1lRGVhdGhMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkxhdmFTbGltZURlYXRoVXBcIiA6IFwiTGF2YVNsaW1lRGVhdGhEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShkZWF0aEFuaW0pO1xuXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAvLyBBZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzIChhc3N1bWUgMXMpLCBtYXJrIGFzIGZ1bGx5IGRlYWRcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIERvIE5PVCBkZXN0cm95IHRoZSBub2Rl4oCUanVzdCBsZWF2ZSB0aGUgZGVhZCBwb3NlIGluIHBsYWNlXG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkxhdmFTbGltZUlkbGVcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xXG4gICAgICAgICkubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/ICh0aGlzLmRpcmVjdGlvbi54ID4gMCA/IFwiTGF2YVNsaW1lV2Fsa1JpZ2h0XCIgOiBcIkxhdmFTbGltZVdhbGtMZWZ0XCIpXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiTGF2YVNsaW1lV2Fsa1VwXCIgOiBcIkxhdmFTbGltZVdhbGtEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5SdW47XG4gICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRBdHRhY2soKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgLy8gV2luZOKAkHVwOiBwbGF5IGlkbGUgKG9yIGEgY3VzdG9tIHdpbmTigJB1cCBhbmltKVxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkxhdmFTbGltZUlkbGVcIik7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMucGVyZm9ybUF0dGFjaygpLCB0aGlzLnRpbWVCZWZvcmVBdHRhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVyZm9ybUF0dGFjaygpIHtcbiAgICAgICAgLy8gUGxheSBhdHRhY2sgY2xpcCBiYXNlZCBvbiBkaXJlY3Rpb24gdG8gcGxheWVyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiTGF2YVNsaW1lQXR0YWNrTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVBdHRhY2tVcFwiIDogXCJMYXZhU2xpbWVBdHRhY2tEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcblxuICAgICAgICAvLyBBcHBseSBkYW1hZ2UgaWYgcGxheWVyIHN0aWxsIHdpdGhpbiByYWRpdXNcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXIpO1xuICAgICAgICBpZiAocGxheWVyQ29tcCkge1xuICAgICAgICAgICAgY29uc3Qgc2xpbWVXICAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgZGlzdCAgICAgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDb21wLnRha2VEYW1hZ2UodGhpcy5hdHRhY2tEYW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWZ0ZXIgYXR0YWNrIGFuaW0gKH4xcyksIGdvIGJhY2sgdG8gaWRsZVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNldFRvSWRsZSgpLCAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkxhdmFTbGltZVJ1blJpZ2h0XCIgOiBcIkxhdmFTbGltZVJ1bkxlZnRcIilcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiTGF2YVNsaW1lUnVuVXBcIiA6IFwiTGF2YVNsaW1lUnVuRG93blwiKTtcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IGNsaXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xuICAgICAgICBjb25zdCBuZXh0ICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChkZWx0YSk7XG4gICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKTogY2MuVmVjMiB7XG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGxvY2FsUCA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUCk7XG4gICAgICAgIHJldHVybiBjYy52Mihsb2NhbFAueCAtIHRoaXMubm9kZS54LCBsb2NhbFAueSAtIHRoaXMubm9kZS55KS5ub3JtYWxpemUoKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbn1cbiJdfQ==