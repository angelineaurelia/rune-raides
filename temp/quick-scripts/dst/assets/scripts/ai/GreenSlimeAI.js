
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
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var GreeenSlimeAI = /** @class */ (function (_super) {
    __extends(GreeenSlimeAI, _super);
    function GreeenSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 100;
        _this.runSpeed = 200;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 50;
        _this.maxHealth = 100;
        _this.health = 100;
        _this.lifebar = null;
        _this.barOffsetY = 10;
        //@property({ type: cc.Node, tooltip: "Player node to detect" })
        //player: cc.Node = null;
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        return _this;
    }
    GreeenSlimeAI.prototype.onLoad = function () {
        if (!this.player) {
            // use the exact path under the scene root:
            this.player = cc.find("Canvas/MapManager/Actors/Player");
            if (!this.player) {
                cc.error("Couldn’t find Player at MapManager/Actors/Player");
            }
        }
    };
    GreeenSlimeAI.prototype.start = function () {
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
            this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            this.updateLife(0, this.health);
        }
        this.setToIdle();
    };
    GreeenSlimeAI.prototype.update = function (dt) {
        // 1) Compute distance to player
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        // 2) Check if player is still within patrol area
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos
            .sub(this.patrolCenter)
            .mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        // 3) Clamp radii for drawing
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
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
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        // Attack priority
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= 1)
                this.setToIdle();
            return;
        }
        // Running if detected
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        // Patrol logic
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
    // Life-bar update logic from Player
    GreeenSlimeAI.prototype.updateLife = function (delta, hp) {
        console.log("slime life change:", delta, "→", hp);
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
    GreeenSlimeAI.prototype.takeDamage = function (amount) {
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0)
            this.die();
    };
    GreeenSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreeenSlimeAI.prototype.die = function () {
        this.node.destroy();
    };
    GreeenSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreeenSlimeIdle");
    };
    GreeenSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreeenSlimeWalkRight" : "GreeenSlimeWalkLeft")
            : (this.direction.y > 0 ? "GreeenSlimeWalkUp" : "GreeenSlimeWalkDown");
        this.anim.play(clip);
    };
    GreeenSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreeenSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeAttackRight" : "GreeenSlimeAttackLeft")
            : (dir.y > 0 ? "GreeenSlimeAttackUp" : "GreeenSlimeAttackDown");
        this.anim.play(clip);
    };
    GreeenSlimeAI.prototype.runTowardsPlayer = function (dt) {
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
    GreeenSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], GreeenSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreeenSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreeenSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreeenSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreeenSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreeenSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreeenSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreeenSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreeenSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreeenSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreeenSlimeAI.prototype, "barOffsetY", void 0);
    GreeenSlimeAI = __decorate([
        ccclass
    ], GreeenSlimeAI);
    return GreeenSlimeAI;
}(cc.Component));
exports.default = GreeenSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEdyZWVuU2xpbWVBSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXFSQztRQW5SRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFHeEIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUdiLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFaEMsZ0VBQWdFO1FBQ2hFLHlCQUF5QjtRQUVsQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFTM0Isb0JBQWMsR0FBRyxF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USxDQUFDLEVBQUUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLENBQUM7b0RBQ3ZDO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLENBQUM7bURBQ3ZDO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdEQUF3RCxFQUFFLENBQUM7bURBQzNEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFEQUFxRCxFQUFFLENBQUM7bURBQ3hEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLENBQUM7dURBQ3RDO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLENBQUM7MERBQzVCO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUM7dURBQzdCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7b0RBQzdCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7aURBQ2hDO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQztxREFDNUM7SUFoQ2YsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXFSakM7SUFBRCxvQkFBQztDQXJSRCxBQXFSQyxDQXJSMEMsRUFBRSxDQUFDLFNBQVMsR0FxUnREO2tCQXJSb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIFNsaW1lU3RhdGUge1xyXG4gICAgSWRsZSxcclxuICAgIFdhbGssXHJcbiAgICBSdW4sXHJcbiAgICBBdHRhY2tcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZWVuU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHdhbGsgc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSBydW4gc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSBzdGF5cyBpZGxlIGJlZm9yZSB3YWxraW5nIChzZWNvbmRzKVwiIH0pXHJcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSB3YWxrcyBpbiBvbmUgZGlyZWN0aW9uIChzZWNvbmRzKVwiIH0pXHJcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhdHJvbCByYWRpdXMgZnJvbSBzdGFydCBwb2ludCAocGl4ZWxzKVwiIH0pXHJcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRldGVjdGlvbiBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcclxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQXR0YWNrIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkN1cnJlbnQgaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBoZWFsdGg6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXHJcbiAgICBwcml2YXRlIGJhck9mZnNldFk6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIC8vQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCJQbGF5ZXIgbm9kZSB0byBkZXRlY3RcIiB9KVxyXG4gICAgLy9wbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xyXG4gICAgcHJpdmF0ZSBwYXRyb2xDZW50ZXIgPSBjYy52MigwLCAwKTtcclxuXHJcbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGRldGVjdGlvbk5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGF0dGFja0dmeCE6IGNjLkdyYXBoaWNzO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcclxuICAgIHByaXZhdGUgY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgaWYgKCF0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICAvLyB1c2UgdGhlIGV4YWN0IHBhdGggdW5kZXIgdGhlIHNjZW5lIHJvb3Q6XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIik7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJDb3VsZG7igJl0IGZpbmQgUGxheWVyIGF0IE1hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAvLyBEcmF3IHBhdHJvbCBib3VuZGFyeVxyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnBhdHJvbENlbnRlcik7XHJcbiAgICAgICAgY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBwYXRyb2xHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICBwYXRyb2xHZnguc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG4gICAgICAgIHBhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIHBhdHJvbEdmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZWN0aW9uIGFyZWFcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2sgYXJlYVxyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgIC8vIEhlYWx0aCBiYXIgc2V0dXBcclxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZWJhci5zZXRQb3NpdGlvbigwLCB0aGlzLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuYmFyT2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlmZSgwLCB0aGlzLmhlYWx0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gMSkgQ29tcHV0ZSBkaXN0YW5jZSB0byBwbGF5ZXJcclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMikgQ2hlY2sgaWYgcGxheWVyIGlzIHN0aWxsIHdpdGhpbiBwYXRyb2wgYXJlYVxyXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcclxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zXHJcbiAgICAgICAgICAgIC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpXHJcbiAgICAgICAgICAgIC5tYWcoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xyXG5cclxuICAgICAgICAvLyAzKSBDbGFtcCByYWRpaSBmb3IgZHJhd2luZ1xyXG4gICAgICAgIGNvbnN0IGRyYXdEZXRlY3RSID0gTWF0aC5taW4odGhpcy5kZXRlY3Rpb25SYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcblxyXG4gICAgICAgIC8vIDQpIFJlZHJhdyBkZXRlY3Rpb24gY2lyY2xlXHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXHJcbiAgICAgICAgICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXHJcbiAgICAgICAgICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyA1KSBSZWRyYXcgYXR0YWNrIGNpcmNsZVxyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1c1xyXG4gICAgICAgICAgICA/IGNjLmNvbG9yKDEyOCwgMCwgMTI4KVxyXG4gICAgICAgICAgICA6IGNjLmNvbG9yKDAsIDAsIDI1NSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2lyY2xlKDAsIDAsIGRyYXdBdHRhY2tSKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHN0YXRlc1xyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2sgcHJpb3JpdHlcclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gMSkgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUnVubmluZyBpZiBkZXRlY3RlZFxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGF0cm9sIGxvZ2ljXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLklkbGUgJiYgdGhpcy50aW1lciA+PSB0aGlzLmlkbGVUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuV2Fsaykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3MgPSBwb3MuYWRkKG1vdmVEZWx0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy53YWxrVGltZSkgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlmZS1iYXIgdXBkYXRlIGxvZ2ljIGZyb20gUGxheWVyXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2xpbWUgbGlmZSBjaGFuZ2U6XCIsIGRlbHRhLCBcIuKGklwiLCBocCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpZmViYXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcclxuICAgICAgICBpZiAoaHAgPD0gMTApIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBlbHNlIGlmIChocCA8PSAyMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xyXG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMCkgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgtYW1vdW50LCB0aGlzLmhlYWx0aCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB0aGlzLmRpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IHRoaXMubWF4SGVhbHRoKSB0aGlzLmhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkdyZWVlblNsaW1lSWRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLldhbGs7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEsXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xXHJcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueCkgPiBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi55KVxyXG4gICAgICAgICAgICA/ICh0aGlzLmRpcmVjdGlvbi54ID4gMCA/IFwiR3JlZWVuU2xpbWVXYWxrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVXYWxrTGVmdFwiKVxyXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiR3JlZWVuU2xpbWVXYWxrVXBcIiA6IFwiR3JlZWVuU2xpbWVXYWxrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVlblNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVBdHRhY2tMZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiR3JlZWVuU2xpbWVBdHRhY2tVcFwiIDogXCJHcmVlZW5TbGltZUF0dGFja0Rvd25cIik7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW5Ub3dhcmRzUGxheWVyKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcclxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlZW5TbGltZVJ1blJpZ2h0XCIgOiBcIkdyZWVlblNsaW1lUnVuTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVlblNsaW1lUnVuVXBcIiA6IFwiR3JlZWVuU2xpbWVSdW5Eb3duXCIpO1xyXG4gICAgICAgIGlmIChjbGlwICE9PSB0aGlzLmN1cnJlbnRSdW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoZGlyLnggKiB0aGlzLnJ1blNwZWVkICogZHQsIGRpci55ICogdGhpcy5ydW5TcGVlZCAqIGR0KTtcclxuICAgICAgICBjb25zdCBuZXh0UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKG1vdmVEZWx0YSk7XHJcbiAgICAgICAgaWYgKG5leHRQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihsb2NhbFAueCAtIHRoaXMubm9kZS54LCBsb2NhbFAueSAtIHRoaXMubm9kZS55KS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=