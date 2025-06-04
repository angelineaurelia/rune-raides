
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEdyZWVuQm9zc0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNiLDJDQUFJLENBQUE7SUFDSiwyQ0FBSSxDQUFBO0lBQ0oseUNBQUcsQ0FBQTtJQUNILCtDQUFNLENBQUE7QUFDUixDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUdEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa1JDO1FBaFJDLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFHaEIsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUdmLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFHYixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2Isa0JBQVksR0FBRyxHQUFHLENBQUM7UUFHbkIscUJBQWUsR0FBRyxHQUFHLENBQUM7UUFHdEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFHbEIsc0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBR3ZCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUdyQixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUdsQixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHdEIsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUdoQixZQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWIsK0JBQStCO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFFeEIsc0RBQXNEO1FBQ3RELHlCQUF5QjtRQUVsQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3hCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxD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LFFBQVEsRUFBRSxDQUFDO2tEQUNoQjtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQzsrQ0FDdkI7SUFJYjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLENBQUM7bURBQ2pDO0lBN0NMLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrUi9CO0lBQUQsa0JBQUM7Q0FsUkQsQUFrUkMsQ0FsUndDLEVBQUUsQ0FBQyxTQUFTLEdBa1JwRDtrQkFsUm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBTbGltZVN0YXRlIHtcclxuICBJZGxlLFxyXG4gIFdhbGssXHJcbiAgUnVuLFxyXG4gIEF0dGFja1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmVlbkJvc3NBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJXYWxrIHNwZWVkIGluIHBpeGVscy9zZWNcIiB9KVxyXG4gIHdhbGtTcGVlZCA9IDEwMDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJSdW4gc3BlZWQgaW4gcGl4ZWxzL3NlY1wiIH0pXHJcbiAgcnVuU3BlZWQgPSAyMDA7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSWRsZSBkdXJhdGlvbiBiZWZvcmUgbW92aW5nIChzZWMpXCIgfSlcclxuICBpZGxlVGltZSA9IDU7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiV2FsayBkdXJhdGlvbiBwZXIgZGlyZWN0aW9uIChzZWMpXCIgfSlcclxuICB3YWxrVGltZSA9IDU7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IChweClcIiB9KVxyXG4gIHBhdHJvbFJhZGl1cyA9IDIwMDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gcmFkaXVzIChweClcIiB9KVxyXG4gIGRldGVjdGlvblJhZGl1cyA9IDE1MDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJOb3JtYWwgYXR0YWNrIHJhZGl1cyAocHgpXCIgfSlcclxuICBhdHRhY2tSYWRpdXMgPSA1MDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTcGVjaWFsIGF0dGFjayByYWRpdXMgd2hlbiA8NTAlIEhQIChweClcIiB9KVxyXG4gIHNwZWNBdHRhY2tSYWRpdXMgPSAxMDA7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiV2luZC11cCBiZWZvcmUgYW55IGF0dGFjayAoc2VjKVwiIH0pXHJcbiAgdGltZUJlZm9yZUF0dGFjayA9IDE7XHJcblxyXG4gIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGFtYWdlIG9mIG5vcm1hbCBhdHRhY2tcIiB9KVxyXG4gIGF0dGFja0RhbWFnZSA9IDIwO1xyXG5cclxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRhbWFnZSBvZiBzcGVjaWFsIGF0dGFja1wiIH0pXHJcbiAgc3BlY0F0dGFja0RhbWFnZSA9IDQwO1xyXG5cclxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heCBIUFwiIH0pXHJcbiAgbWF4SGVhbHRoID0gMjAwO1xyXG5cclxuICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkN1cnJlbnQgSFBcIiB9KVxyXG4gIGhlYWx0aCA9IDIwMDtcclxuXHJcbiAgLy8g4oCU4oCUIG5ldyBsaWZlYmFyIHByb3BlcnR5IOKAlOKAlCAgXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIZWFsdGggYmFyIHZlcnRpY2FsIG9mZnNldCAocHgpXCIgfSlcclxuICBwcml2YXRlIGJhck9mZnNldFkgPSA2MDtcclxuXHJcbiAgLy9AcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIlBsYXllciBub2RlXCIgfSlcclxuICAvL3BsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgXHJcbiAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICBwcml2YXRlIHRpbWVyID0gMDtcclxuICBwcml2YXRlIGRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xyXG4gIHByaXZhdGUgcGF0cm9sQ2VudGVyITogY2MuVmVjMjtcclxuXHJcbiAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xyXG4gIHByaXZhdGUgZGV0ZWN0aW9uTm9kZSE6IGNjLk5vZGU7XHJcbiAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcclxuICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xyXG4gIHByaXZhdGUgYXR0YWNrR2Z4ITogY2MuR3JhcGhpY3M7XHJcblxyXG4gIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcclxuICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpIGFzIGNjLk5vZGU7XHJcbiAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcclxuICAgIHRoaXMucGF0cm9sQ2VudGVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuY2xvbmUoKTtcclxuXHJcbiAgICAvLyBkcmF3IHBhdHJvbCBib3VuZGFyeSAob3B0aW9uYWwpXHJcbiAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiQm91bmRhcnlcIik7XHJcbiAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcclxuICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcclxuICAgIGNvbnN0IGJHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgYkdmeC5saW5lV2lkdGggPSAyO1xyXG4gICAgYkdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICBiR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICBiR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vIGRldGVjdGlvbiBhcmVhIG5vZGVcclxuICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0XCIpO1xyXG4gICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgIHRoaXMuZGV0ZWN0aW9uR2Z4ID0gdGhpcy5kZXRlY3Rpb25Ob2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgIC8vIGF0dGFjayBhcmVhIG5vZGVcclxuICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrXCIpO1xyXG4gICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgIHRoaXMuYXR0YWNrR2Z4ID0gdGhpcy5hdHRhY2tOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgIC8vIOKAlOKAlCBoZWFsdGggYmFyIHNldHVwIOKAlOKAlCAgXHJcbiAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgIC8vIHBvc2l0aW9uIGJhciBhYm92ZSBib3NzXHJcbiAgICAgIHRoaXMubGlmZWJhci5zZXRQb3NpdGlvbigwLCB0aGlzLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuYmFyT2Zmc2V0WSk7XHJcbiAgICAgIC8vIGluaXRpYWxpemUgaXRzIHdpZHRoL2NvbG9yXHJcbiAgICAgIHRoaXMudXBkYXRlTGlmZSgwLCB0aGlzLmhlYWx0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRJZGxlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLnBsYXllcikgcmV0dXJuO1xyXG5cclxuICAgIC8vIDEpIHdvcmxkLXNwYWNlIGRpc3RhbmNlXHJcbiAgICBjb25zdCBib3NzVyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgY29uc3QgcGxheWVyVyA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgIGNvbnN0IGRpc3QgPSBib3NzVy5zdWIocGxheWVyVykubWFnKCk7XHJcblxyXG4gICAgLy8gMikgcGF0cm9sLWJvdW5kIGNoZWNrXHJcbiAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwbGF5ZXJXKTtcclxuICAgIGNvbnN0IGZyb21DZW50ZXIgPSBsb2NhbFAuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcclxuICAgIGNvbnN0IGluUGF0cm9sID0gZnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcclxuXHJcbiAgICAvLyAzKSBjaG9vc2UgcmFkaWkgJiBkcmF3IGNpcmNsZXNcclxuICAgIGNvbnN0IHVzZVNwZWMgPSB0aGlzLmhlYWx0aCA8PSB0aGlzLm1heEhlYWx0aCAqIDAuNTtcclxuICAgIGNvbnN0IHJhd0F0dGFja1IgPSB1c2VTcGVjID8gdGhpcy5zcGVjQXR0YWNrUmFkaXVzIDogdGhpcy5hdHRhY2tSYWRpdXM7XHJcbiAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHJhd0F0dGFja1IsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuXHJcbiAgICB0aGlzLmRldGVjdGlvbkdmeC5jbGVhcigpO1xyXG4gICAgY29uc3QgaW5EZXRlY3QgPSBkaXN0IDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIGluUGF0cm9sO1xyXG4gICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBpbkRldGVjdCA/IGNjLmNvbG9yKDI1NSwgMTY1LCAwKSA6IGNjLmNvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICB0aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xyXG4gICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgdGhpcy5hdHRhY2tHZnguY2xlYXIoKTtcclxuICAgIGNvbnN0IGluUmFuZ2UgPSBkaXN0IDw9IHJhd0F0dGFja1IgJiYgaW5QYXRyb2w7XHJcbiAgICB0aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGluUmFuZ2UgPyBjYy5jb2xvcigxMjgsIDAsIDEyOCkgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xyXG4gICAgdGhpcy5hdHRhY2tHZnguY2lyY2xlKDAsIDAsIGRyYXdBdHRhY2tSKTtcclxuICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vIDQpIGF0dGFjayBzdGF0ZVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrICYmIGluUmFuZ2UpIHtcclxuICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgIGlmICh1c2VTcGVjKSB0aGlzLnN0YXJ0U3BlY0F0dGFjaygpO1xyXG4gICAgICBlbHNlIHRoaXMuc3RhcnRBdHRhY2soKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFNsaW1lU3RhdGUuQXR0YWNrKSByZXR1cm47XHJcblxyXG4gICAgLy8gNSkgcnVuIHN0YXRlXHJcbiAgICBpZiAoaW5EZXRlY3QpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFNsaW1lU3RhdGUuUnVuKSB0aGlzLnN0YXJ0UnVuKCk7XHJcbiAgICAgIHRoaXMucnVuVG93YXJkc1BsYXllcihkdCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcclxuICAgICAgdGhpcy5zZXRJZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNikgcGF0cm9sIGZhbGxiYWNrXHJcbiAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHRoaXMuc3RhcnRXYWxrKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB0aGlzLnBhdHJvbE1vdmVtZW50KGR0KTtcclxuICB9XHJcblxyXG4gIC8vIOKAlOKAlCBsaWZl4oCQYmFyIHVwZGF0ZXIg4oCU4oCUICBcclxuICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJib3NzIGhwOlwiLCBkZWx0YSwgXCLihpJcIiwgaHApO1xyXG4gICAgaWYgKCF0aGlzLmxpZmViYXIpIHJldHVybjtcclxuICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpcmVjdCBweCA9IGhwXHJcbiAgICBpZiAoaHAgPD0gNTApICAgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgZWxzZSBpZiAoaHAgPD0gMTAwKSAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLk9SQU5HRTtcclxuICAgIGVsc2UgICAgICAgICAgICAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XHJcbiAgICBpZiAodGhpcy5oZWFsdGggPCAwKSB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB0aGlzLmRpZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaWUoKSB7XHJcbiAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJZGxlKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlbkJvc3NJZGxlXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFdhbGsoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xyXG4gICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKFxyXG4gICAgICBNYXRoLnJhbmRvbSgpIDwgMC41ID8gLTEgOiAxLFxyXG4gICAgICBNYXRoLnJhbmRvbSgpIDwgMC41ID8gLTEgOiAxXHJcbiAgICApLm5vcm1hbGl6ZSgpO1xyXG4gICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcclxuICAgICAgPyAodGhpcy5kaXJlY3Rpb24ueCA+IDAgPyBcIkdyZWVuQm9zc1dhbGtSaWdodFwiIDogXCJHcmVlbkJvc3NXYWxrTGVmdFwiKVxyXG4gICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiR3JlZW5Cb3NzV2Fsa1VwXCIgOiBcIkdyZWVuQm9zc1dhbGtEb3duXCIpO1xyXG4gICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0UnVuKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFNsaW1lU3RhdGUuUnVuO1xyXG4gICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlbkJvc3NJZGxlXCIpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoXHJcbiAgICAgICgpID0+IHRoaXMucGVyZm9ybUF0dGFjayh0aGlzLmF0dGFja0RhbWFnZSwgdGhpcy5hdHRhY2tSYWRpdXMsIFwiR3JlZW5Cb3NzQXR0YWNrXCIpLFxyXG4gICAgICB0aGlzLnRpbWVCZWZvcmVBdHRhY2tcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0U3BlY0F0dGFjaygpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBTbGltZVN0YXRlLkF0dGFjaztcclxuICAgIHRoaXMuYW5pbS5wbGF5KFwiR3JlZW5Cb3NzSWRsZVwiKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxyXG4gICAgICAoKSA9PiB0aGlzLnBlcmZvcm1BdHRhY2sodGhpcy5zcGVjQXR0YWNrRGFtYWdlLCB0aGlzLnNwZWNBdHRhY2tSYWRpdXMsIFwiR3JlZW5Cb3NzU3BlY0F0dGFja1wiKSxcclxuICAgICAgdGhpcy50aW1lQmVmb3JlQXR0YWNrXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKGRtZzogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBiYXNlQ2xpcDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xyXG4gICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICA/IChkaXIueCA+IDAgPyBgJHtiYXNlQ2xpcH1SaWdodGAgOiBgJHtiYXNlQ2xpcH1MZWZ0YClcclxuICAgICAgOiAoZGlyLnkgPiAwID8gYCR7YmFzZUNsaXB9VXBgICAgIDogYCR7YmFzZUNsaXB9RG93bmApO1xyXG4gICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcblxyXG4gICAgLy8gZGVhbCBkYW1hZ2UgaWYgc3RpbGwgaW4gcmFuZ2VcclxuICAgIGNvbnN0IGJvc3NXID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgaWYgKGJvc3NXLnN1YihwbGF5ZXJXKS5tYWcoKSA8PSByYW5nZSkge1xyXG4gICAgICBjb25zdCBoYzogYW55ID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiSGVhbHRoXCIpO1xyXG4gICAgICBpZiAoaGM/LnRha2VEYW1hZ2UpIGhjLnRha2VEYW1hZ2UoZG1nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNldElkbGUoKSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhdHJvbE1vdmVtZW50KGR0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5kaXJlY3Rpb24ubXVsKHRoaXMud2Fsa1NwZWVkICogZHQpO1xyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChkZWx0YSk7XHJcbiAgICBpZiAobmV4dC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgdGhpcy5zZXRJZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcclxuICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHRoaXMuc2V0SWRsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5Ub3dhcmRzUGxheWVyKGR0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgID8gKGRpci54ID4gMCA/IFwiR3JlZW5Cb3NzUnVuUmlnaHRcIiA6IFwiR3JlZW5Cb3NzUnVuTGVmdFwiKVxyXG4gICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVuQm9zc1J1blVwXCIgOiBcIkdyZWVuQm9zc1J1bkRvd25cIik7XHJcbiAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xyXG4gICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IGNsaXA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRpci5tdWwodGhpcy5ydW5TcGVlZCAqIGR0KSk7XHJcbiAgICBpZiAobmV4dC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgdGhpcy5zZXRJZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCk6IGNjLlZlYzIge1xyXG4gICAgY29uc3Qgd29ybGRQICA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgIGNvbnN0IGxvY2FsUCAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xyXG4gICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=