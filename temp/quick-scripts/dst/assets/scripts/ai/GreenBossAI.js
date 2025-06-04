
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0dyZWVuQm9zc0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNiLDJDQUFJLENBQUE7SUFDSiwyQ0FBSSxDQUFBO0lBQ0oseUNBQUcsQ0FBQTtJQUNILCtDQUFNLENBQUE7QUFDUixDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUdEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa1JDO1FBaFJDLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFHaEIsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUdmLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFHYixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2Isa0JBQVksR0FBRyxHQUFHLENBQUM7UUFHbkIscUJBQWUsR0FBRyxHQUFHLENBQUM7UUFHdEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFHbEIsc0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBR3ZCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUdyQixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUdsQixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHdEIsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUdoQixZQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWIsK0JBQStCO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFFeEIsc0RBQXNEO1FBQ3RELHlCQUF5QjtRQUVsQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3hCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFD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QVEsRUFBRSxDQUFDO2tEQUNoQjtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQzsrQ0FDdkI7SUFJYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLENBQUM7bURBQ2pDO0lBN0NMLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrUi9CO0lBQUQsa0JBQUM7Q0FsUkQsQUFrUkMsQ0FsUndDLEVBQUUsQ0FBQyxTQUFTLEdBa1JwRDtrQkFsUm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIFNsaW1lU3RhdGUge1xuICBJZGxlLFxuICBXYWxrLFxuICBSdW4sXG4gIEF0dGFja1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZW5Cb3NzQUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIldhbGsgc3BlZWQgaW4gcGl4ZWxzL3NlY1wiIH0pXG4gIHdhbGtTcGVlZCA9IDEwMDtcblxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlJ1biBzcGVlZCBpbiBwaXhlbHMvc2VjXCIgfSlcbiAgcnVuU3BlZWQgPSAyMDA7XG5cbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJJZGxlIGR1cmF0aW9uIGJlZm9yZSBtb3ZpbmcgKHNlYylcIiB9KVxuICBpZGxlVGltZSA9IDU7XG5cbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJXYWxrIGR1cmF0aW9uIHBlciBkaXJlY3Rpb24gKHNlYylcIiB9KVxuICB3YWxrVGltZSA9IDU7XG5cbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgKHB4KVwiIH0pXG4gIHBhdHJvbFJhZGl1cyA9IDIwMDtcblxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRldGVjdGlvbiByYWRpdXMgKHB4KVwiIH0pXG4gIGRldGVjdGlvblJhZGl1cyA9IDE1MDtcblxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk5vcm1hbCBhdHRhY2sgcmFkaXVzIChweClcIiB9KVxuICBhdHRhY2tSYWRpdXMgPSA1MDtcblxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNwZWNpYWwgYXR0YWNrIHJhZGl1cyB3aGVuIDw1MCUgSFAgKHB4KVwiIH0pXG4gIHNwZWNBdHRhY2tSYWRpdXMgPSAxMDA7XG5cbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJXaW5kLXVwIGJlZm9yZSBhbnkgYXR0YWNrIChzZWMpXCIgfSlcbiAgdGltZUJlZm9yZUF0dGFjayA9IDE7XG5cbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEYW1hZ2Ugb2Ygbm9ybWFsIGF0dGFja1wiIH0pXG4gIGF0dGFja0RhbWFnZSA9IDIwO1xuXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGFtYWdlIG9mIHNwZWNpYWwgYXR0YWNrXCIgfSlcbiAgc3BlY0F0dGFja0RhbWFnZSA9IDQwO1xuXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4IEhQXCIgfSlcbiAgbWF4SGVhbHRoID0gMjAwO1xuXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBIUFwiIH0pXG4gIGhlYWx0aCA9IDIwMDtcblxuICAvLyDigJTigJQgbmV3IGxpZmViYXIgcHJvcGVydHkg4oCU4oCUICBcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIZWFsdGggYmFyIHZlcnRpY2FsIG9mZnNldCAocHgpXCIgfSlcbiAgcHJpdmF0ZSBiYXJPZmZzZXRZID0gNjA7XG5cbiAgLy9AcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIlBsYXllciBub2RlXCIgfSlcbiAgLy9wbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICBcbiAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gIHByaXZhdGUgc3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gIHByaXZhdGUgdGltZXIgPSAwO1xuICBwcml2YXRlIGRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xuICBwcml2YXRlIHBhdHJvbENlbnRlciE6IGNjLlZlYzI7XG5cbiAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xuICBwcml2YXRlIGRldGVjdGlvbk5vZGUhOiBjYy5Ob2RlO1xuICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xuICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xuICBwcml2YXRlIGF0dGFja0dmeCE6IGNjLkdyYXBoaWNzO1xuXG4gIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcbiAgcHJpdmF0ZSBjdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgIGlmICghdGhpcy5wbGF5ZXIpIGNjLmVycm9yKFwiUGxheWVyIG5vZGUgbm90IGZvdW5kXCIpO1xuXG4gICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XG4gICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgLy8gZHJhdyBwYXRyb2wgYm91bmRhcnkgKG9wdGlvbmFsKVxuICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJCb3VuZGFyeVwiKTtcbiAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcbiAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnBhdHJvbENlbnRlcik7XG4gICAgY29uc3QgYkdmeCA9IHRoaXMuYm91bmRhcnlOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgYkdmeC5saW5lV2lkdGggPSAyO1xuICAgIGJHZnguc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xuICAgIGJHZnguY2lyY2xlKDAsIDAsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICBiR2Z4LnN0cm9rZSgpO1xuXG4gICAgLy8gZGV0ZWN0aW9uIGFyZWEgbm9kZVxuICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0XCIpO1xuICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgLy8gYXR0YWNrIGFyZWEgbm9kZVxuICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrXCIpO1xuICAgIHRoaXMuYXR0YWNrTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgLy8g4oCU4oCUIGhlYWx0aCBiYXIgc2V0dXAg4oCU4oCUICBcbiAgICBpZiAodGhpcy5saWZlYmFyKSB7XG4gICAgICAvLyBwb3NpdGlvbiBiYXIgYWJvdmUgYm9zc1xuICAgICAgdGhpcy5saWZlYmFyLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5iYXJPZmZzZXRZKTtcbiAgICAgIC8vIGluaXRpYWxpemUgaXRzIHdpZHRoL2NvbG9yXG4gICAgICB0aGlzLnVwZGF0ZUxpZmUoMCwgdGhpcy5oZWFsdGgpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SWRsZSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKSByZXR1cm47XG5cbiAgICAvLyAxKSB3b3JsZC1zcGFjZSBkaXN0YW5jZVxuICAgIGNvbnN0IGJvc3NXID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgY29uc3QgcGxheWVyVyA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICBjb25zdCBkaXN0ID0gYm9zc1cuc3ViKHBsYXllclcpLm1hZygpO1xuXG4gICAgLy8gMikgcGF0cm9sLWJvdW5kIGNoZWNrXG4gICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIocGxheWVyVyk7XG4gICAgY29uc3QgZnJvbUNlbnRlciA9IGxvY2FsUC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpO1xuICAgIGNvbnN0IGluUGF0cm9sID0gZnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcblxuICAgIC8vIDMpIGNob29zZSByYWRpaSAmIGRyYXcgY2lyY2xlc1xuICAgIGNvbnN0IHVzZVNwZWMgPSB0aGlzLmhlYWx0aCA8PSB0aGlzLm1heEhlYWx0aCAqIDAuNTtcbiAgICBjb25zdCByYXdBdHRhY2tSID0gdXNlU3BlYyA/IHRoaXMuc3BlY0F0dGFja1JhZGl1cyA6IHRoaXMuYXR0YWNrUmFkaXVzO1xuICAgIGNvbnN0IGRyYXdEZXRlY3RSID0gTWF0aC5taW4odGhpcy5kZXRlY3Rpb25SYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHJhd0F0dGFja1IsIHRoaXMucGF0cm9sUmFkaXVzKTtcblxuICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNsZWFyKCk7XG4gICAgY29uc3QgaW5EZXRlY3QgPSBkaXN0IDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIGluUGF0cm9sO1xuICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gaW5EZXRlY3QgPyBjYy5jb2xvcigyNTUsIDE2NSwgMCkgOiBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XG4gICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XG5cbiAgICB0aGlzLmF0dGFja0dmeC5jbGVhcigpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBkaXN0IDw9IHJhd0F0dGFja1IgJiYgaW5QYXRyb2w7XG4gICAgdGhpcy5hdHRhY2tHZnguc3Ryb2tlQ29sb3IgPSBpblJhbmdlID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICB0aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xuICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgLy8gNCkgYXR0YWNrIHN0YXRlXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrICYmIGluUmFuZ2UpIHtcbiAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgaWYgKHVzZVNwZWMpIHRoaXMuc3RhcnRTcGVjQXR0YWNrKCk7XG4gICAgICBlbHNlIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFNsaW1lU3RhdGUuQXR0YWNrKSByZXR1cm47XG5cbiAgICAvLyA1KSBydW4gc3RhdGVcbiAgICBpZiAoaW5EZXRlY3QpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bigpO1xuICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNsaW1lU3RhdGUuUnVuKSB7XG4gICAgICB0aGlzLnNldElkbGUoKTtcbiAgICB9XG5cbiAgICAvLyA2KSBwYXRyb2wgZmFsbGJhY2tcbiAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTbGltZVN0YXRlLklkbGUgJiYgdGhpcy50aW1lciA+PSB0aGlzLmlkbGVUaW1lKSB0aGlzLnN0YXJ0V2FsaygpO1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHRoaXMucGF0cm9sTW92ZW1lbnQoZHQpO1xuICB9XG5cbiAgLy8g4oCU4oCUIGxpZmXigJBiYXIgdXBkYXRlciDigJTigJQgIFxuICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKFwiYm9zcyBocDpcIiwgZGVsdGEsIFwi4oaSXCIsIGhwKTtcbiAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpcmVjdCBweCA9IGhwXG4gICAgaWYgKGhwIDw9IDUwKSAgICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICBlbHNlIGlmIChocCA8PSAxMDApICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgIGVsc2UgICAgICAgICAgICAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgfVxuXG4gIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5oZWFsdGggLT0gYW1vdW50O1xuICAgIGlmICh0aGlzLmhlYWx0aCA8IDApIHRoaXMuaGVhbHRoID0gMDtcbiAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgIGlmICh0aGlzLmhlYWx0aCA9PT0gMCkgdGhpcy5kaWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZGllKCkge1xuICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIHNldElkbGUoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB0aGlzLmFuaW0ucGxheShcIkdyZWVuQm9zc0lkbGVcIik7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0V2FsaygpIHtcbiAgICB0aGlzLnN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXG4gICAgICBNYXRoLnJhbmRvbSgpIDwgMC41ID8gLTEgOiAxLFxuICAgICAgTWF0aC5yYW5kb20oKSA8IDAuNSA/IC0xIDogMVxuICAgICkubm9ybWFsaXplKCk7XG4gICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlbkJvc3NXYWxrUmlnaHRcIiA6IFwiR3JlZW5Cb3NzV2Fsa0xlZnRcIilcbiAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NXYWxrVXBcIiA6IFwiR3JlZW5Cb3NzV2Fsa0Rvd25cIik7XG4gICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0UnVuKCkge1xuICAgIHRoaXMuc3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRBdHRhY2soKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xuICAgIHRoaXMuYW5pbS5wbGF5KFwiR3JlZW5Cb3NzSWRsZVwiKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShcbiAgICAgICgpID0+IHRoaXMucGVyZm9ybUF0dGFjayh0aGlzLmF0dGFja0RhbWFnZSwgdGhpcy5hdHRhY2tSYWRpdXMsIFwiR3JlZW5Cb3NzQXR0YWNrXCIpLFxuICAgICAgdGhpcy50aW1lQmVmb3JlQXR0YWNrXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRTcGVjQXR0YWNrKCkge1xuICAgIHRoaXMuc3RhdGUgPSBTbGltZVN0YXRlLkF0dGFjaztcbiAgICB0aGlzLmFuaW0ucGxheShcIkdyZWVuQm9zc0lkbGVcIik7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoXG4gICAgICAoKSA9PiB0aGlzLnBlcmZvcm1BdHRhY2sodGhpcy5zcGVjQXR0YWNrRGFtYWdlLCB0aGlzLnNwZWNBdHRhY2tSYWRpdXMsIFwiR3JlZW5Cb3NzU3BlY0F0dGFja1wiKSxcbiAgICAgIHRoaXMudGltZUJlZm9yZUF0dGFja1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHBlcmZvcm1BdHRhY2soZG1nOiBudW1iZXIsIHJhbmdlOiBudW1iZXIsIGJhc2VDbGlwOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgID8gKGRpci54ID4gMCA/IGAke2Jhc2VDbGlwfVJpZ2h0YCA6IGAke2Jhc2VDbGlwfUxlZnRgKVxuICAgICAgOiAoZGlyLnkgPiAwID8gYCR7YmFzZUNsaXB9VXBgICAgIDogYCR7YmFzZUNsaXB9RG93bmApO1xuICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuXG4gICAgLy8gZGVhbCBkYW1hZ2UgaWYgc3RpbGwgaW4gcmFuZ2VcbiAgICBjb25zdCBib3NzVyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgaWYgKGJvc3NXLnN1YihwbGF5ZXJXKS5tYWcoKSA8PSByYW5nZSkge1xuICAgICAgY29uc3QgaGM6IGFueSA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIkhlYWx0aFwiKTtcbiAgICAgIGlmIChoYz8udGFrZURhbWFnZSkgaGMudGFrZURhbWFnZShkbWcpO1xuICAgIH1cblxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0SWRsZSgpLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgcGF0cm9sTW92ZW1lbnQoZHQ6IG51bWJlcikge1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5kaXJlY3Rpb24ubXVsKHRoaXMud2Fsa1NwZWVkICogZHQpO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoZGVsdGEpO1xuICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgdGhpcy5zZXRJZGxlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB0aGlzLnNldElkbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc1J1blJpZ2h0XCIgOiBcIkdyZWVuQm9zc1J1bkxlZnRcIilcbiAgICAgIDogKGRpci55ID4gMCA/IFwiR3JlZW5Cb3NzUnVuVXBcIiA6IFwiR3JlZW5Cb3NzUnVuRG93blwiKTtcbiAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICB9XG4gICAgY29uc3QgbmV4dCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChkaXIubXVsKHRoaXMucnVuU3BlZWQgKiBkdCkpO1xuICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgdGhpcy5zZXRJZGxlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCk6IGNjLlZlYzIge1xuICAgIGNvbnN0IHdvcmxkUCAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgY29uc3QgbG9jYWxQICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUCk7XG4gICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICB9XG59XG4iXX0=