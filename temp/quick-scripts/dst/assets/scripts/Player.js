
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332a6gSxQ5LRb25rr5dLCw6', 'Player');
// scripts/Player.ts

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
var GameManager_1 = require("./GameManager");
var BlueSlimeAI_1 = require("./ai/BlueSlimeAI");
<<<<<<< Updated upstream
// ↓ Fix the typo here: it should be "GreenSlimeAI" (two “e”s), not "GreenSlimeAI"
var GreenSlimeAI_1 = require("./ai/GreenSlimeAI");
=======
var LavaSlimeAI_1 = require("./ai/LavaSlimeAI");
// ↓ Fix the typo here: it should be "GreenSlimeAI" (two “e”s), not "GreenSlimeAI"
var GreenSlimeAI_1 = require("./ai/GreenSlimeAI");
var GreenBossAI_1 = require("./ai/GreenBossAI");
>>>>>>> Stashed changes
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxHp = 40;
        _this.attackPower = 5;
        _this.hp = 40;
        _this.lifebar = null;
        _this.controller = null;
        _this.attack1sound = null;
        _this.attack2sound = null;
        _this.attack3sound = null;
        _this.hurtsound = null;
        _this.healsound = null;
        _this.gameManager = null;
        _this.holdingKey = false;
        /////////////////////////
        // → NEW PROPERTIES ← //
        /////////////////////////
        // How far the player's attack reaches (in pixels, world-space)
        _this.attackRange = 50;
        // Delay (seconds) into the attack animation when damage is actually applied
        _this.attackHitDelay = 0.2;
        // Total length (seconds) of the attack animation
        _this.attackAnimDuration = 0.5;
        _this.isAttacking = false; // Prevent overlapping swings
        // Tracks which direction the player is facing.
        _this.facing = "down";
        _this.isDead = false; // new
        return _this;
    }
    Player.prototype.onLoad = function () {
        this.gameManager = cc.find("GameManager").getComponent("GameManager");
        // Capture the Animation component once
        this.anim = this.getComponent(cc.Animation);
        // Listen for keyboard input to trigger attack
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    Player.prototype.onDestroy = function () {
        // Clean up listener
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    // Called when any key is pressed
    Player.prototype.onKeyDown = function (event) {
        // Use C, Z, or V as the attack key (you can adjust as needed)
        if (event.keyCode === cc.macro.KEY.c ||
            event.keyCode === cc.macro.KEY.z ||
            event.keyCode === cc.macro.KEY.v) {
            this.tryAttack();
        }
    };
    // Attempt to start an attack (if not already in one)
    Player.prototype.tryAttack = function () {
        var _this = this;
        if (this.isAttacking)
            return;
        this.isAttacking = true;
        // 1) Play attack animation & sound
        if (this.anim) {
            this.anim.play("PlayerAttack"); // ensure you have a clip named “PlayerAttack”
        }
        if (this.attack1sound) {
            cc.audioEngine.playEffect(this.attack1sound, false);
        }
        // 2) Schedule the actual “hit” moment
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
        // 3) Once the full animation is done, allow attacking again
        this.scheduleOnce(function () {
            _this.isAttacking = false;
        }, this.attackAnimDuration);
    };
    // ────────────────────────────────────────────────────────────────────────────
    // This method checks every child under “Canvas/MapManager/MonsterManager” for
    // either a BlueSlimeAI or a GreenSlimeAI, then applies damage if within range.
    // ────────────────────────────────────────────────────────────────────────────
    Player.prototype.applyAttackHit = function () {
        var _this = this;
        // 1) Convert the player's position to world space (Vec3) and then to Vec2
        var playerWorld3 = this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        // 2) Find all slimes under “Canvas/MapManager/MonsterManager”
        var actorsRoot = cc.find("Canvas/MapManager/MonsterManager");
        if (!actorsRoot)
            return;
        actorsRoot.children.forEach(function (childNode) {
            // 3a) Try to grab a BlueSlimeAI component
            var slimeComp = childNode.getComponent(BlueSlimeAI_1.default) || null;
            // 3b) If there was no BlueSlimeAI, try to grab a GreenSlimeAI instead
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenSlimeAI_1.default);
            }
<<<<<<< Updated upstream
=======
            if (!slimeComp) {
                slimeComp = childNode.getComponent(LavaSlimeAI_1.default);
            }
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenBossAI_1.default);
            }
>>>>>>> Stashed changes
            // 4) If this node has neither component, skip it
            if (!slimeComp) {
                return;
            }
            // 5) Convert that slime’s position (node’s anchor point) to world-space Vec3 → Vec2
            var slimeWorld3 = childNode.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
            // 6) Check distance from player
            var dist = playerWorld2.sub(slimeWorld2).mag();
            if (dist <= _this.attackRange) {
                // 7) We’re in range → deal damage
                slimeComp.takeDamage(_this.attackPower);
                // (Optional) If you want to hit only one slime per swing, uncomment:
                // return;
            }
        });
    };
    Object.defineProperty(Player.prototype, "worldPosition", {
        /////////////////////////
        // ← EXISTING METHODS →//
        /////////////////////////
        get: function () {
            return this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "localPosition", {
        get: function () {
            return this.node.position;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.takeDamage = function (amount) {
        var _this = this;
        this.hp -= amount;
        if (this.hp < 0)
            this.hp = 0;
        // 1) If still alive → play “hurt” animation in the correct direction
        if (this.hp > 0) {
            switch (this.facing) {
                case "up":
                    this.anim.play("hurt_up");
                    break;
                case "down":
                    this.anim.play("hurt_down");
                    break;
                case "left":
                    this.anim.play("hurt_left");
                    break;
                case "right":
                    this.anim.play("hurt_right");
                    break;
                default:
                    // fallback, just in case
                    this.anim.play("hurt_" + this.facing);
                    break;
            }
            this.updatelife(-amount, this.hp);
            if (this.hurtsound) {
                cc.audioEngine.playEffect(this.hurtsound, false);
            }
            return; // exit early, no death logic yet
        }
        // 2) HP has dropped to zero → play “death” animation in the correct direction
        switch (this.facing) {
            case "up":
                this.anim.play("death_up");
                break;
            case "down":
                this.anim.play("death_down");
                break;
            case "left":
                this.anim.play("death_left");
                break;
            case "right":
                this.anim.play("death_right");
                break;
            default:
                // fallback, just in case
                this.anim.play("death_" + this.facing);
                break;
        }
        this.updatelife(-amount, this.hp);
        this.isDead = true;
        // 3) Delay the actual “freeze/game-over” until after the death animation finishes.
        this.scheduleOnce(function () {
            _this.die();
        }, 1.0 // adjust this delay to match your death‐animation length
        );
    };
    Player.prototype.heal = function (amount) {
        this.hp += amount;
        if (this.hp > this.maxHp)
            this.hp = this.maxHp;
        this.updatelife(amount, this.hp);
        this.playhealsound();
    };
    Player.prototype.attack = function (target) {
        target.takeDamage(this.attackPower);
    };
    Player.prototype.die = function () {
        // Hand over to your game‐over/freeze logic
        this.controller.getComponent("ActorController").godie();
        this.unscheduleAllCallbacks();
    };
    Player.prototype.updatelife = function (num, hp) {
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    Player.prototype.playattack1sound = function () {
        if (this.attack1sound)
            cc.audioEngine.playEffect(this.attack1sound, false);
        else
            console.log("No attack1 sound");
    };
    Player.prototype.playattack2sound = function () {
        if (this.attack2sound)
            cc.audioEngine.playEffect(this.attack2sound, false);
        else
            console.log("No attack2 sound");
    };
    Player.prototype.playattack3sound = function () {
        if (this.attack3sound)
            cc.audioEngine.playEffect(this.attack3sound, false);
        else
            console.log("No attack3 sound");
    };
    Player.prototype.playhurtsound = function () {
        if (this.hurtsound)
            cc.audioEngine.playEffect(this.hurtsound, false);
        else
            console.log("No hurtsound");
    };
    Player.prototype.playhealsound = function () {
        if (this.healsound)
            cc.audioEngine.playEffect(this.healsound, false);
        else
            console.log("No healsound");
    };
    Player.prototype.SetPlayer = function (level) {
        // reset player position & HP
        this.hp = this.maxHp;
        this.updatelife(0, this.hp);
        this.holdingKey = false;
    };
    Player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        if (otherCollider.node.name == "key") {
            this.holdingKey = true;
            otherCollider.node.active = false;
        }
        if (otherCollider.node.name == "lock" && this.holdingKey) {
            var temp = otherCollider.getComponent("NewClass");
            if (temp) {
                temp.playAnim();
            }
            this.scheduleOnce(function () {
                if (otherCollider.node)
                    otherCollider.node.destroy();
                _this.gameManager.GoNextLevel();
            }, 1.2);
        }
    };
    Player.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ type: cc.Integer, tooltip: "最大血量" })
    ], Player.prototype, "maxHp", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "攻擊力" })
    ], Player.prototype, "attackPower", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "初始血量" })
    ], Player.prototype, "hp", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "lifebar", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "controller", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack1sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack2sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack3sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "hurtsound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "healsound", void 0);
    __decorate([
        property(GameManager_1.default)
    ], Player.prototype, "gameManager", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "Player attack range in pixels" })
    ], Player.prototype, "attackRange", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "When (sec) to check hit in attack anim" })
    ], Player.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Length of PlayerAttack animation" })
    ], Player.prototype, "attackAnimDuration", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBQzNDLGtGQUFrRjtBQUNsRixrREFBNkM7QUFLN0M7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFpVUM7UUEvVEcsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUd4QixRQUFFLEdBQVcsRUFBRSxDQUFDO1FBR1IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUdoQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFbkMseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFFekIsK0RBQStEO1FBRS9ELGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLDRFQUE0RTtRQUU1RSxvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3QixpREFBaUQ7UUFFakQsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRXpCLGlCQUFXLEdBQVksS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBUW5FLCtDQUErQztRQUN2QyxZQUFNLEdBQW9CLE1BQU0sQ0FBQztRQUNqQyxZQUFNLEdBQVksS0FBSyxDQUFDLENBQUMsTUFBTTs7SUFtUTNDLENBQUM7SUFqUUcsdUJBQU0sR0FBTjtRQUNJ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LENBQUM7NkNBQ1E7SUFHL0I7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzsrQ0FDVTtJQVVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxDQUFDOytDQUNoRDtJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxDQUFDO2tEQUNuRDtJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO3NEQUN6QztJQWxEaEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlVMUI7SUFBRCxhQUFDO0NBalVELEFBaVVDLENBalVtQyxFQUFFLENBQUMsU0FBUyxHQWlVL0M7a0JBalVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEJsdWVTbGltZUFJIGZyb20gXCIuL2FpL0JsdWVTbGltZUFJXCI7XG4vLyDihpMgRml4IHRoZSB0eXBvIGhlcmU6IGl0IHNob3VsZCBiZSBcIkdyZWVuU2xpbWVBSVwiICh0d28g4oCcZeKAnXMpLCBub3QgXCJHcmVlblNsaW1lQUlcIlxuaW1wb3J0IEdyZWVuU2xpbWVBSSBmcm9tIFwiLi9haS9HcmVlblNsaW1lQUlcIjtcblxudHlwZSBGYWNpbmdEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuacgOWkp+ihgOmHj1wiIH0pXG4gICAgbWF4SHA6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmlLvmk4rliptcIiB9KVxuICAgIGF0dGFja1Bvd2VyOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJ3lp4vooYDph49cIiB9KVxuICAgIGhwOiBudW1iZXIgPSA0MDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250cm9sbGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXR0YWNrMXNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBhdHRhY2syc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF0dGFjazNzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgaHVydHNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBoZWFsc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXG4gICAgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIHB1YmxpYyBob2xkaW5nS2V5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaSIE5FVyBQUk9QRVJUSUVTIOKGkCAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEhvdyBmYXIgdGhlIHBsYXllcidzIGF0dGFjayByZWFjaGVzIChpbiBwaXhlbHMsIHdvcmxkLXNwYWNlKVxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwiUGxheWVyIGF0dGFjayByYW5nZSBpbiBwaXhlbHNcIiB9KVxuICAgIGF0dGFja1JhbmdlOiBudW1iZXIgPSA1MDtcblxuICAgIC8vIERlbGF5IChzZWNvbmRzKSBpbnRvIHRoZSBhdHRhY2sgYW5pbWF0aW9uIHdoZW4gZGFtYWdlIGlzIGFjdHVhbGx5IGFwcGxpZWRcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJXaGVuIChzZWMpIHRvIGNoZWNrIGhpdCBpbiBhdHRhY2sgYW5pbVwiIH0pXG4gICAgYXR0YWNrSGl0RGVsYXk6IG51bWJlciA9IDAuMjtcblxuICAgIC8vIFRvdGFsIGxlbmd0aCAoc2Vjb25kcykgb2YgdGhlIGF0dGFjayBhbmltYXRpb25cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJMZW5ndGggb2YgUGxheWVyQXR0YWNrIGFuaW1hdGlvblwiIH0pXG4gICAgYXR0YWNrQW5pbUR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG5cbiAgICBwcml2YXRlIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgc3dpbmdzXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaQIEVORCBORVcgUFJPUFMg4oaSIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xuXG4gICAgLy8gVHJhY2tzIHdoaWNoIGRpcmVjdGlvbiB0aGUgcGxheWVyIGlzIGZhY2luZy5cbiAgICBwcml2YXRlIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gbmV3XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIENhcHR1cmUgdGhlIEFuaW1hdGlvbiBjb21wb25lbnQgb25jZVxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGtleWJvYXJkIGlucHV0IHRvIHRyaWdnZXIgYXR0YWNrXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyBDbGVhbiB1cCBsaXN0ZW5lclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhbnkga2V5IGlzIHByZXNzZWRcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICAvLyBVc2UgQywgWiwgb3IgViBhcyB0aGUgYXR0YWNrIGtleSAoeW91IGNhbiBhZGp1c3QgYXMgbmVlZGVkKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYyB8fFxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnogfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS52XG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy50cnlBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gc3RhcnQgYW4gYXR0YWNrIChpZiBub3QgYWxyZWFkeSBpbiBvbmUpXG4gICAgcHJpdmF0ZSB0cnlBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNraW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIDEpIFBsYXkgYXR0YWNrIGFuaW1hdGlvbiAmIHNvdW5kXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiUGxheWVyQXR0YWNrXCIpOyAvLyBlbnN1cmUgeW91IGhhdmUgYSBjbGlwIG5hbWVkIOKAnFBsYXllckF0dGFja+KAnVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMikgU2NoZWR1bGUgdGhlIGFjdHVhbCDigJxoaXTigJ0gbW9tZW50XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuYXBwbHlBdHRhY2tIaXQsIHRoaXMuYXR0YWNrSGl0RGVsYXkpO1xuXG4gICAgICAgIC8vIDMpIE9uY2UgdGhlIGZ1bGwgYW5pbWF0aW9uIGlzIGRvbmUsIGFsbG93IGF0dGFja2luZyBhZ2FpblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5hdHRhY2tBbmltRHVyYXRpb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgZXZlcnkgY2hpbGQgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ0gZm9yXG4gICAgLy8gZWl0aGVyIGEgQmx1ZVNsaW1lQUkgb3IgYSBHcmVlblNsaW1lQUksIHRoZW4gYXBwbGllcyBkYW1hZ2UgaWYgd2l0aGluIHJhbmdlLlxuICAgIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tIaXQoKSB7XG4gICAgICAgIC8vIDEpIENvbnZlcnQgdGhlIHBsYXllcidzIHBvc2l0aW9uIHRvIHdvcmxkIHNwYWNlIChWZWMzKSBhbmQgdGhlbiB0byBWZWMyXG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xuXG4gICAgICAgIC8vIDIpIEZpbmQgYWxsIHNsaW1lcyB1bmRlciDigJxDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlcuKAnVxuICAgICAgICBjb25zdCBhY3RvcnNSb290ID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpO1xuICAgICAgICBpZiAoIWFjdG9yc1Jvb3QpIHJldHVybjtcblxuICAgICAgICBhY3RvcnNSb290LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgLy8gM2EpIFRyeSB0byBncmFiIGEgQmx1ZVNsaW1lQUkgY29tcG9uZW50XG4gICAgICAgICAgICBsZXQgc2xpbWVDb21wOiBCbHVlU2xpbWVBSSB8IEdyZWVuU2xpbWVBSSB8IG51bGwgPVxuICAgICAgICAgICAgICAgIChjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEJsdWVTbGltZUFJKSBhcyBCbHVlU2xpbWVBSSkgfHwgbnVsbDtcblxuICAgICAgICAgICAgLy8gM2IpIElmIHRoZXJlIHdhcyBubyBCbHVlU2xpbWVBSSwgdHJ5IHRvIGdyYWIgYSBHcmVlblNsaW1lQUkgaW5zdGVhZFxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEdyZWVuU2xpbWVBSSkgYXMgR3JlZW5TbGltZUFJO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA0KSBJZiB0aGlzIG5vZGUgaGFzIG5laXRoZXIgY29tcG9uZW50LCBza2lwIGl0XG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNSkgQ29udmVydCB0aGF0IHNsaW1l4oCZcyBwb3NpdGlvbiAobm9kZeKAmXMgYW5jaG9yIHBvaW50KSB0byB3b3JsZC1zcGFjZSBWZWMzIOKGkiBWZWMyXG4gICAgICAgICAgICBjb25zdCBzbGltZVdvcmxkMyA9IGNoaWxkTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDIgPSBjYy52MihzbGltZVdvcmxkMy54LCBzbGltZVdvcmxkMy55KTtcblxuICAgICAgICAgICAgLy8gNikgQ2hlY2sgZGlzdGFuY2UgZnJvbSBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBwbGF5ZXJXb3JsZDIuc3ViKHNsaW1lV29ybGQyKS5tYWcoKTtcbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyA3KSBXZeKAmXJlIGluIHJhbmdlIOKGkiBkZWFsIGRhbWFnZVxuICAgICAgICAgICAgICAgIHNsaW1lQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrUG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gKE9wdGlvbmFsKSBJZiB5b3Ugd2FudCB0byBoaXQgb25seSBvbmUgc2xpbWUgcGVyIHN3aW5nLCB1bmNvbW1lbnQ6XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaQIEVYSVNUSU5HIE1FVEhPRFMg4oaSLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwdWJsaWMgZ2V0IHdvcmxkUG9zaXRpb24oKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsUG9zaXRpb24oKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ocCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhwIDwgMCkgdGhpcy5ocCA9IDA7XG5cbiAgICAgICAgLy8gMSkgSWYgc3RpbGwgYWxpdmUg4oaSIHBsYXkg4oCcaHVydOKAnSBhbmltYXRpb24gaW4gdGhlIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgICAgIGlmICh0aGlzLmhwID4gMCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfdXBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9kb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfbGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9yaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2ssIGp1c3QgaW4gY2FzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgaHVydF8ke3RoaXMuZmFjaW5nfWApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaHVydHNvdW5kKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuOyAvLyBleGl0IGVhcmx5LCBubyBkZWF0aCBsb2dpYyB5ZXRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIpIEhQIGhhcyBkcm9wcGVkIHRvIHplcm8g4oaSIHBsYXkg4oCcZGVhdGjigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3VwXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2Rvd25cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfbGVmdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgZGVhdGhfJHt0aGlzLmZhY2luZ31gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XG5cbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgICAgICAvLyAzKSBEZWxheSB0aGUgYWN0dWFsIOKAnGZyZWV6ZS9nYW1lLW92ZXLigJ0gdW50aWwgYWZ0ZXIgdGhlIGRlYXRoIGFuaW1hdGlvbiBmaW5pc2hlcy5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxLjAgLy8gYWRqdXN0IHRoaXMgZGVsYXkgdG8gbWF0Y2ggeW91ciBkZWF0aOKAkGFuaW1hdGlvbiBsZW5ndGhcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhwICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaHAgPiB0aGlzLm1heEhwKSB0aGlzLmhwID0gdGhpcy5tYXhIcDtcbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKGFtb3VudCwgdGhpcy5ocCk7XG4gICAgICAgIHRoaXMucGxheWhlYWxzb3VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2sodGFyZ2V0OiBQbGF5ZXIpIHtcbiAgICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRpZSgpIHtcbiAgICAgICAgLy8gSGFuZCBvdmVyIHRvIHlvdXIgZ2FtZeKAkG92ZXIvZnJlZXplIGxvZ2ljXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRDb21wb25lbnQoXCJBY3RvckNvbnRyb2xsZXJcIikuZ29kaWUoKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlbGlmZShudW06IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlhdHRhY2sxc291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMSBzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWF0dGFjazJzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMnNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMnNvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2syIHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5YXR0YWNrM3NvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2szc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2szc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazMgc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlodXJ0c291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gaHVydHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5aGVhbHNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5oZWFsc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGhlYWxzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0UGxheWVyKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uICYgSFBcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgwLCB0aGlzLmhwKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDIwLCAyMCk7XG4gICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJrZXlcIikge1xuICAgICAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBvdGhlckNvbGxpZGVyLmdldENvbXBvbmVudChcIk5ld0NsYXNzXCIpO1xuICAgICAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuR29OZXh0TGV2ZWwoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEuMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxufVxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLDZDQUF3QztBQUN4QyxnREFBMkM7QUFDM0MsZ0RBQTJDO0FBRzNDLGtGQUFrRjtBQUNsRixrREFBNkM7QUFDN0MsZ0RBQTJDO0FBSzNDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBc1VDO1FBcFVHLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUdSLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRW5DLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBRXpCLCtEQUErRDtRQUUvRCxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6Qiw0RUFBNEU7UUFFNUUsb0JBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsaURBQWlEO1FBRWpELHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQVFuRSwrQ0FBK0M7UUFDdkMsWUFBTSxHQUFvQixNQUFNLENBQUM7UUFDakMsWUFBTSxHQUFZLEtBQUssQ0FBQyxDQUFDLE1BQU07O0lBd1Ez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Z0RBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ1E7SUFHL0I7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzsrQ0FDVTtJQVVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxDQUFDOytDQUNoRDtJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxDQUFDO2tEQUNuRDtJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO3NEQUN6QztJQWxEaEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXNVMUI7SUFBRCxhQUFDO0NBdFVELEFBc1VDLENBdFVtQyxFQUFFLENBQUMsU0FBUyxHQXNVL0M7a0JBdFVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBCbHVlU2xpbWVBSSBmcm9tIFwiLi9haS9CbHVlU2xpbWVBSVwiO1xyXG5pbXBvcnQgTGF2YVNsaW1lQUkgZnJvbSBcIi4vYWkvTGF2YVNsaW1lQUlcIjtcclxuXHJcblxyXG4vLyDihpMgRml4IHRoZSB0eXBvIGhlcmU6IGl0IHNob3VsZCBiZSBcIkdyZWVuU2xpbWVBSVwiICh0d28g4oCcZeKAnXMpLCBub3QgXCJHcmVlblNsaW1lQUlcIlxyXG5pbXBvcnQgR3JlZW5TbGltZUFJIGZyb20gXCIuL2FpL0dyZWVuU2xpbWVBSVwiO1xyXG5pbXBvcnQgR3JlZW5Cb3NzQUkgZnJvbSBcIi4vYWkvR3JlZW5Cb3NzQUlcIjtcclxuXHJcbnR5cGUgRmFjaW5nRGlyZWN0aW9uID0gXCJ1cFwiIHwgXCJkb3duXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuacgOWkp+ihgOmHj1wiIH0pXHJcbiAgICBtYXhIcDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmlLvmk4rliptcIiB9KVxyXG4gICAgYXR0YWNrUG93ZXI6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJ3lp4vooYDph49cIiB9KVxyXG4gICAgaHA6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRyb2xsZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdHRhY2sxc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF0dGFjazJzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXR0YWNrM3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBodXJ0c291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhlYWxzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXHJcbiAgICBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob2xkaW5nS2V5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8g4oaSIE5FVyBQUk9QRVJUSUVTIOKGkCAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8vIEhvdyBmYXIgdGhlIHBsYXllcidzIGF0dGFjayByZWFjaGVzIChpbiBwaXhlbHMsIHdvcmxkLXNwYWNlKVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCJQbGF5ZXIgYXR0YWNrIHJhbmdlIGluIHBpeGVsc1wiIH0pXHJcbiAgICBhdHRhY2tSYW5nZTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgLy8gRGVsYXkgKHNlY29uZHMpIGludG8gdGhlIGF0dGFjayBhbmltYXRpb24gd2hlbiBkYW1hZ2UgaXMgYWN0dWFsbHkgYXBwbGllZFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiV2hlbiAoc2VjKSB0byBjaGVjayBoaXQgaW4gYXR0YWNrIGFuaW1cIiB9KVxyXG4gICAgYXR0YWNrSGl0RGVsYXk6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICAvLyBUb3RhbCBsZW5ndGggKHNlY29uZHMpIG9mIHRoZSBhdHRhY2sgYW5pbWF0aW9uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJMZW5ndGggb2YgUGxheWVyQXR0YWNrIGFuaW1hdGlvblwiIH0pXHJcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBwcml2YXRlIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgc3dpbmdzXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8g4oaQIEVORCBORVcgUFJPUFMg4oaSIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG5cclxuICAgIC8vIFRyYWNrcyB3aGljaCBkaXJlY3Rpb24gdGhlIHBsYXllciBpcyBmYWNpbmcuXHJcbiAgICBwcml2YXRlIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBuZXdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgQW5pbWF0aW9uIGNvbXBvbmVudCBvbmNlXHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XHJcblxyXG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5Ym9hcmQgaW5wdXQgdG8gdHJpZ2dlciBhdHRhY2tcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihcclxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxyXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIENsZWFuIHVwIGxpc3RlbmVyXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKFxyXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsZWQgd2hlbiBhbnkga2V5IGlzIHByZXNzZWRcclxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgLy8gVXNlIEMsIFosIG9yIFYgYXMgdGhlIGF0dGFjayBrZXkgKHlvdSBjYW4gYWRqdXN0IGFzIG5lZWRlZClcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5jIHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS56IHx8XHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS52XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QXR0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGVtcHQgdG8gc3RhcnQgYW4gYXR0YWNrIChpZiBub3QgYWxyZWFkeSBpbiBvbmUpXHJcbiAgICBwcml2YXRlIHRyeUF0dGFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0F0dGFja2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAxKSBQbGF5IGF0dGFjayBhbmltYXRpb24gJiBzb3VuZFxyXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJQbGF5ZXJBdHRhY2tcIik7IC8vIGVuc3VyZSB5b3UgaGF2ZSBhIGNsaXAgbmFtZWQg4oCcUGxheWVyQXR0YWNr4oCdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMXNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyKSBTY2hlZHVsZSB0aGUgYWN0dWFsIOKAnGhpdOKAnSBtb21lbnRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcclxuXHJcbiAgICAgICAgLy8gMykgT25jZSB0aGUgZnVsbCBhbmltYXRpb24gaXMgZG9uZSwgYWxsb3cgYXR0YWNraW5nIGFnYWluXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tBbmltRHVyYXRpb25cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG4gICAgLy8gVGhpcyBtZXRob2QgY2hlY2tzIGV2ZXJ5IGNoaWxkIHVuZGVyIOKAnENhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2Vy4oCdIGZvclxyXG4gICAgLy8gZWl0aGVyIGEgQmx1ZVNsaW1lQUkgb3IgYSBHcmVlblNsaW1lQUksIHRoZW4gYXBwbGllcyBkYW1hZ2UgaWYgd2l0aGluIHJhbmdlLlxyXG4gICAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xyXG4gICAgICAgIC8vIDEpIENvbnZlcnQgdGhlIHBsYXllcidzIHBvc2l0aW9uIHRvIHdvcmxkIHNwYWNlIChWZWMzKSBhbmQgdGhlbiB0byBWZWMyXHJcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQzID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQyID0gY2MudjIocGxheWVyV29ybGQzLngsIHBsYXllcldvcmxkMy55KTtcclxuXHJcbiAgICAgICAgLy8gMikgRmluZCBhbGwgc2xpbWVzIHVuZGVyIOKAnENhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2Vy4oCdXHJcbiAgICAgICAgY29uc3QgYWN0b3JzUm9vdCA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKTtcclxuICAgICAgICBpZiAoIWFjdG9yc1Jvb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgYWN0b3JzUm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gM2EpIFRyeSB0byBncmFiIGEgQmx1ZVNsaW1lQUkgY29tcG9uZW50XHJcbiAgICAgICAgICAgIGxldCBzbGltZUNvbXA6IEJsdWVTbGltZUFJIHwgR3JlZW5TbGltZUFJIHwgTGF2YVNsaW1lQUkgfCBHcmVlbkJvc3NBSSB8IG51bGwgPVxyXG4gICAgICAgICAgICAgICAgKGNoaWxkTm9kZS5nZXRDb21wb25lbnQoQmx1ZVNsaW1lQUkpIGFzIEJsdWVTbGltZUFJKSB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gM2IpIElmIHRoZXJlIHdhcyBubyBCbHVlU2xpbWVBSSwgdHJ5IHRvIGdyYWIgYSBHcmVlblNsaW1lQUkgaW5zdGVhZFxyXG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgc2xpbWVDb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChHcmVlblNsaW1lQUkpIGFzIEdyZWVuU2xpbWVBSTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgc2xpbWVDb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChMYXZhU2xpbWVBSSkgYXMgTGF2YVNsaW1lQUk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcclxuICAgICAgICAgICAgICAgIHNsaW1lQ29tcCA9IGNoaWxkTm9kZS5nZXRDb21wb25lbnQoR3JlZW5Cb3NzQUkpIGFzIEdyZWVuQm9zc0FJO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyA0KSBJZiB0aGlzIG5vZGUgaGFzIG5laXRoZXIgY29tcG9uZW50LCBza2lwIGl0XHJcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIDUpIENvbnZlcnQgdGhhdCBzbGltZeKAmXMgcG9zaXRpb24gKG5vZGXigJlzIGFuY2hvciBwb2ludCkgdG8gd29ybGQtc3BhY2UgVmVjMyDihpIgVmVjMlxyXG4gICAgICAgICAgICBjb25zdCBzbGltZVdvcmxkMyA9IGNoaWxkTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZVdvcmxkMiA9IGNjLnYyKHNsaW1lV29ybGQzLngsIHNsaW1lV29ybGQzLnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gNikgQ2hlY2sgZGlzdGFuY2UgZnJvbSBwbGF5ZXJcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IHBsYXllcldvcmxkMi5zdWIoc2xpbWVXb3JsZDIpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyA3KSBXZeKAmXJlIGluIHJhbmdlIOKGkiBkZWFsIGRhbWFnZVxyXG4gICAgICAgICAgICAgICAgc2xpbWVDb21wLnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gKE9wdGlvbmFsKSBJZiB5b3Ugd2FudCB0byBoaXQgb25seSBvbmUgc2xpbWUgcGVyIHN3aW5nLCB1bmNvbW1lbnQ6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyDihpAgRVhJU1RJTkcgTUVUSE9EUyDihpIvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgd29ybGRQb3NpdGlvbigpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsb2NhbFBvc2l0aW9uKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhwIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5ocCA8IDApIHRoaXMuaHAgPSAwO1xyXG5cclxuICAgICAgICAvLyAxKSBJZiBzdGlsbCBhbGl2ZSDihpIgcGxheSDigJxodXJ04oCdIGFuaW1hdGlvbiBpbiB0aGUgY29ycmVjdCBkaXJlY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5ocCA+IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfZG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgaHVydF8ke3RoaXMuZmFjaW5nfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCBlYXJseSwgbm8gZGVhdGggbG9naWMgeWV0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyKSBIUCBoYXMgZHJvcHBlZCB0byB6ZXJvIOKGkiBwbGF5IOKAnGRlYXRo4oCdIGFuaW1hdGlvbiBpbiB0aGUgY29ycmVjdCBkaXJlY3Rpb25cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmFjaW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkZWF0aF91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkZWF0aF9kb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBmYWxsYmFjaywganVzdCBpbiBjYXNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgZGVhdGhfJHt0aGlzLmZhY2luZ31gKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICAvLyAzKSBEZWxheSB0aGUgYWN0dWFsIOKAnGZyZWV6ZS9nYW1lLW92ZXLigJ0gdW50aWwgYWZ0ZXIgdGhlIGRlYXRoIGFuaW1hdGlvbiBmaW5pc2hlcy5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMS4wIC8vIGFkanVzdCB0aGlzIGRlbGF5IHRvIG1hdGNoIHlvdXIgZGVhdGjigJBhbmltYXRpb24gbGVuZ3RoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaHAgKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhwID4gdGhpcy5tYXhIcCkgdGhpcy5ocCA9IHRoaXMubWF4SHA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKGFtb3VudCwgdGhpcy5ocCk7XHJcbiAgICAgICAgdGhpcy5wbGF5aGVhbHNvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjayh0YXJnZXQ6IFBsYXllcikge1xyXG4gICAgICAgIHRhcmdldC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrUG93ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaWUoKSB7XHJcbiAgICAgICAgLy8gSGFuZCBvdmVyIHRvIHlvdXIgZ2FtZeKAkG92ZXIvZnJlZXplIGxvZ2ljXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldENvbXBvbmVudChcIkFjdG9yQ29udHJvbGxlclwiKS5nb2RpZSgpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZWxpZmUobnVtOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcclxuICAgICAgICBpZiAoaHAgPD0gMTApIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBlbHNlIGlmIChocCA8PSAyMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xyXG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlhdHRhY2sxc291bmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMXNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMXNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazEgc291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlhdHRhY2syc291bmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMnNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMnNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazIgc291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlhdHRhY2szc291bmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrM3NvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrM3NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazMgc291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlodXJ0c291bmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHVydHNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaHVydHNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGh1cnRzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWhlYWxzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5oZWFsc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gaGVhbHNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQbGF5ZXIobGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHJlc2V0IHBsYXllciBwb3NpdGlvbiAmIEhQXHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKDAsIHRoaXMuaHApO1xyXG4gICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcImtleVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IHRydWU7XHJcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBvdGhlckNvbGxpZGVyLmdldENvbXBvbmVudChcIk5ld0NsYXNzXCIpO1xyXG4gICAgICAgICAgICBpZiAodGVtcCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcC5wbGF5QW5pbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5Hb05leHRMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEuMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
>>>>>>> Stashed changes
