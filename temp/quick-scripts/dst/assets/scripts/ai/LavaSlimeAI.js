
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
        _this.maxHealth = 100;
        _this.health = 100;
        _this.lifebar = null;
        _this.barOffsetY = 50;
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
        // Health bar setup (Player-style)
        if (this.lifebar) {
            this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            this.updateLife(0, this.health);
        }
        this.setToIdle();
    };
    LavaSlimeAI.prototype.update = function (dt) {
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
            ? cc.color(255, 165, 0) : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128) : cc.color(0, 0, 255);
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
        // finally patrol (idle→walk→idle)
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
    // —— Player-style life-bar updater ——  
    LavaSlimeAI.prototype.updateLife = function (delta, hp) {
        console.log("lava slime hp:", delta, "→", hp);
        if (!this.lifebar)
            return;
        // direct pixel width = hp (or scale as needed)
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    LavaSlimeAI.prototype.takeDamage = function (amount) {
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0)
            this.die();
    };
    LavaSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    LavaSlimeAI.prototype.die = function () {
        this.node.destroy();
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
        // wind-up animation
        this.anim.play("LavaSlimeIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    LavaSlimeAI.prototype.performAttack = function () {
        var _this = this;
        // actual attack animation + damage
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeAttackRight" : "LavaSlimeAttackLeft")
            : (dir.y > 0 ? "LavaSlimeAttackUp" : "LavaSlimeAttackDown");
        this.anim.play(clip);
        this.applyAttackDamage();
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
    LavaSlimeAI.prototype.applyAttackDamage = function () {
        if (!this.player)
            return;
        var healthComp = this.player.getComponent("Health");
        if (healthComp && typeof healthComp.takeDamage === "function") {
            healthComp.takeDamage(this.attackDamage);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0xhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNYLDJDQUFJLENBQUE7SUFDSiwyQ0FBSSxDQUFBO0lBQ0oseUNBQUcsQ0FBQTtJQUNILCtDQUFNLENBQUE7QUFDVixDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUdEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNlJDO1FBM1JHLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFHeEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUd2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IscUJBQWUsR0FBVyxHQUFHLENBQUM7UUFHOUIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFHMUIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRzdCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFHeEIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUdiLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFaEMsZ0VBQWdFO1FBQ2hFLHlCQUF5QjtRQUVsQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQUcsRUFBRSxDQUFDLEVB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QUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztxREFDMUI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQztrREFDN0I7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzsrQ0FDaEM7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvREFBb0QsRUFBRSxDQUFDO21EQUM1QztJQXRDZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNlIvQjtJQUFELGtCQUFDO0NBN1JELEFBNlJDLENBN1J3QyxFQUFFLENBQUMsU0FBUyxHQTZScEQ7a0JBN1JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBTbGltZVN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgUnVuLFxuICAgIEF0dGFja1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YVNsaW1lQUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTUwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVGltZSB0byB3YWl0IGJlZm9yZSBwZXJmb3JtaW5nIGF0dGFjayAoc2Vjb25kcylcIiB9KVxuICAgIHRpbWVCZWZvcmVBdHRhY2s6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRhbWFnZSBkZWFsdCBieSB0aGUgYXR0YWNrXCIgfSlcbiAgICBhdHRhY2tEYW1hZ2U6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJNYXhpbXVtIGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIG1heEhlYWx0aDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIGhlYWx0aDogbnVtYmVyID0gMTAwO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxuICAgIHByaXZhdGUgYmFyT2Zmc2V0WTogbnVtYmVyID0gNTA7XG5cbiAgICAvL0Bwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwiUGxheWVyIG5vZGUgdG8gZGV0ZWN0XCIgfSlcbiAgICAvL3BsYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb24gPSBjYy52MigwLCAwKTtcbiAgICBwcml2YXRlIHBhdHJvbENlbnRlciA9IGNjLnYyKDAsIDApO1xuXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgZGV0ZWN0aW9uTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgYXR0YWNrR2Z4ITogY2MuR3JhcGhpY3M7XG5cbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XG4gICAgcHJpdmF0ZSBjdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIC8vIERyYXcgcGF0cm9sIGJvdW5kYXJ5XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgcGF0cm9sR2Z4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHBhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIHBhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICBwYXRyb2xHZnguc3Ryb2tlKCk7XG5cbiAgICAgICAgLy8gRGV0ZWN0aW9uIGFyZWFcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlID0gbmV3IGNjLk5vZGUoXCJEZXRlY3Rpb25BcmVhXCIpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4ID0gdGhpcy5kZXRlY3Rpb25Ob2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCA9IDI7XG5cbiAgICAgICAgLy8gQXR0YWNrIGFyZWFcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlID0gbmV3IGNjLk5vZGUoXCJBdHRhY2tBcmVhXCIpO1xuICAgICAgICB0aGlzLmF0dGFja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4ID0gdGhpcy5hdHRhY2tOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XG5cbiAgICAgICAgLy8gSGVhbHRoIGJhciBzZXR1cCAoUGxheWVyLXN0eWxlKVxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XG4gICAgICAgICAgICB0aGlzLmxpZmViYXIuc2V0UG9zaXRpb24oMCwgdGhpcy5ub2RlLmhlaWdodCAvIDIgKyB0aGlzLmJhck9mZnNldFkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaWZlKDAsIHRoaXMuaGVhbHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgLy8gMSkgY29tcHV0ZSBkaXN0YW5jZSB0byBwbGF5ZXJcbiAgICAgICAgbGV0IGRpc3RUb1BsYXllciA9IEluZmluaXR5O1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMikgY2hlY2sgaWYgcGxheWVyIGlzIHN0aWxsIHdpdGhpbiBwYXRyb2wgcmFkaXVzXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcbiAgICAgICAgICAgIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGlzdEZyb21DZW50ZXIgPSBsb2NhbFBsYXllclBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpO1xuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xuXG4gICAgICAgIC8vIDMpIHJlZHJhdyBkZXRlY3Rpb24gY2lyY2xlXG4gICAgICAgIGNvbnN0IGRyYXdEZXRlY3RSID0gTWF0aC5taW4odGhpcy5kZXRlY3Rpb25SYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmRldGVjdGlvblJhZGl1c1xuICAgICAgICAgICAgPyBjYy5jb2xvcigyNTUsMTY1LDApIDogY2MuY29sb3IoMjU1LDAsMCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDQpIHJlZHJhdyBhdHRhY2sgY2lyY2xlXG4gICAgICAgIGNvbnN0IGRyYXdBdHRhY2tSID0gTWF0aC5taW4odGhpcy5hdHRhY2tSYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1c1xuICAgICAgICAgICAgPyBjYy5jb2xvcigxMjgsMCwxMjgpIDogY2MuY29sb3IoMCwwLDI1NSk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNpcmNsZSgwLCAwLCBkcmF3QXR0YWNrUik7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDUpIEFJIHN0YXRlIHRyYW5zaXRpb25zXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAgICAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMudGltZUJlZm9yZUF0dGFjayArIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlbiBydW5cbiAgICAgICAgaWYgKGluRGV0ZWN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcbiAgICAgICAgICAgIHRoaXMucnVuVG93YXJkc1BsYXllcihkdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmFsbHkgcGF0cm9sIChpZGxl4oaSd2Fsa+KGkmlkbGUpXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gcG9zLmFkZChkZWx0YSk7XG4gICAgICAgICAgICBpZiAobmV4dC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g4oCU4oCUIFBsYXllci1zdHlsZSBsaWZlLWJhciB1cGRhdGVyIOKAlOKAlCAgXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXZhIHNsaW1lIGhwOlwiLCBkZWx0YSwgXCLihpJcIiwgaHApO1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICAvLyBkaXJlY3QgcGl4ZWwgd2lkdGggPSBocCAob3Igc2NhbGUgYXMgbmVlZGVkKVxuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMCkgdGhpcy5oZWFsdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHRoaXMuZGllKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiB0aGlzLm1heEhlYWx0aCkgdGhpcy5oZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGllKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkxhdmFTbGltZUlkbGVcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xXG4gICAgICAgICkubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/ICh0aGlzLmRpcmVjdGlvbi54ID4gMCA/IFwiTGF2YVNsaW1lV2Fsa1JpZ2h0XCIgOiBcIkxhdmFTbGltZVdhbGtMZWZ0XCIpXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiTGF2YVNsaW1lV2Fsa1VwXCIgOiBcIkxhdmFTbGltZVdhbGtEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5SdW47XG4gICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRBdHRhY2soKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgLy8gd2luZC11cCBhbmltYXRpb25cbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJMYXZhU2xpbWVJZGxlXCIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnBlcmZvcm1BdHRhY2soKSwgdGhpcy50aW1lQmVmb3JlQXR0YWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1BdHRhY2soKSB7XG4gICAgICAgIC8vIGFjdHVhbCBhdHRhY2sgYW5pbWF0aW9uICsgZGFtYWdlXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiTGF2YVNsaW1lQXR0YWNrTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVBdHRhY2tVcFwiIDogXCJMYXZhU2xpbWVBdHRhY2tEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcbiAgICAgICAgdGhpcy5hcHBseUF0dGFja0RhbWFnZSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNldFRvSWRsZSgpLCAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkxhdmFTbGltZVJ1blJpZ2h0XCIgOiBcIkxhdmFTbGltZVJ1bkxlZnRcIilcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiTGF2YVNsaW1lUnVuVXBcIiA6IFwiTGF2YVNsaW1lUnVuRG93blwiKTtcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IGNsaXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xuICAgICAgICBjb25zdCBuZXh0ICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChkZWx0YSk7XG4gICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKTogY2MuVmVjMiB7XG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tEYW1hZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIpIHJldHVybjtcbiAgICAgICAgY29uc3QgaGVhbHRoQ29tcCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIkhlYWx0aFwiKTtcbiAgICAgICAgaWYgKGhlYWx0aENvbXAgJiYgdHlwZW9mIGhlYWx0aENvbXAudGFrZURhbWFnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAoaGVhbHRoQ29tcCBhcyBhbnkpLnRha2VEYW1hZ2UodGhpcy5hdHRhY2tEYW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19