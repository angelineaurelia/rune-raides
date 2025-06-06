
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
var LavaSlimeAI_1 = require("./ai/LavaSlimeAI");
// ↓ Fix the typo here: it should be "GreenSlimeAI" (two “e”s), not "GreenSlimeAI"
var GreenSlimeAI_1 = require("./ai/GreenSlimeAI");
var GreenBossAI_1 = require("./ai/GreenBossAI");
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
    Player.prototype.update = function (dt) {
        cc.find("Canvas/Main Camera/UI/Key").active = this.holdingKey;
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
            if (!slimeComp) {
                slimeComp = childNode.getComponent(LavaSlimeAI_1.default);
            }
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenBossAI_1.default);
            }
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
            var temp = otherCollider.getComponent("Lock");
            if (temp) {
                temp.playAnim();
            }
            this.scheduleOnce(function () {
                if (otherCollider.node) {
                    otherCollider.node.destroy();
                }
                else {
                    cc.log("can't deal with otherCollider.node.destroy(); properly");
                }
                _this.gameManager = cc.find("GameManager").getComponent("GameManager");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLDZDQUF3QztBQUN4QyxnREFBMkM7QUFDM0MsZ0RBQTJDO0FBRzNDLGtGQUFrRjtBQUNsRixrREFBNkM7QUFDN0MsZ0RBQTJDO0FBSzNDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNlVDO1FBM1VHLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUdSLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRW5DLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBRXpCLCtEQUErRDtRQUUvRCxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6Qiw0RUFBNEU7UUFFNUUsb0JBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsaURBQWlEO1FBRWpELHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQVFuRSwrQ0FBK0M7UUFDdkMsWUFBTSxHQUFvQixNQUFNLENBQUM7UUFDakMsWUFBTSxHQUFZLEtBQUssQ0FBQyxDQUFDLE1BQU07O0lBK1Ez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O0NBN1VELEFBNlVDLENBN1VtQyxFQUFFLENBQUMsU0FBUyxHQTZVL0M7a0JBN1VvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBCbHVlU2xpbWVBSSBmcm9tIFwiLi9haS9CbHVlU2xpbWVBSVwiO1xyXG5pbXBvcnQgTGF2YVNsaW1lQUkgZnJvbSBcIi4vYWkvTGF2YVNsaW1lQUlcIjtcclxuXHJcblxyXG4vLyDihpMgRml4IHRoZSB0eXBvIGhlcmU6IGl0IHNob3VsZCBiZSBcIkdyZWVuU2xpbWVBSVwiICh0d28g4oCcZeKAnXMpLCBub3QgXCJHcmVlblNsaW1lQUlcIlxyXG5pbXBvcnQgR3JlZW5TbGltZUFJIGZyb20gXCIuL2FpL0dyZWVuU2xpbWVBSVwiO1xyXG5pbXBvcnQgR3JlZW5Cb3NzQUkgZnJvbSBcIi4vYWkvR3JlZW5Cb3NzQUlcIjtcclxuXHJcbnR5cGUgRmFjaW5nRGlyZWN0aW9uID0gXCJ1cFwiIHwgXCJkb3duXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuacgOWkp+ihgOmHj1wiIH0pXHJcbiAgICBtYXhIcDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmlLvmk4rliptcIiB9KVxyXG4gICAgYXR0YWNrUG93ZXI6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJ3lp4vooYDph49cIiB9KVxyXG4gICAgaHA6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRyb2xsZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdHRhY2sxc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF0dGFjazJzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXR0YWNrM3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBodXJ0c291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhlYWxzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXHJcbiAgICBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob2xkaW5nS2V5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8g4oaSIE5FVyBQUk9QRVJUSUVTIOKGkCAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8vIEhvdyBmYXIgdGhlIHBsYXllcidzIGF0dGFjayByZWFjaGVzIChpbiBwaXhlbHMsIHdvcmxkLXNwYWNlKVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCJQbGF5ZXIgYXR0YWNrIHJhbmdlIGluIHBpeGVsc1wiIH0pXHJcbiAgICBhdHRhY2tSYW5nZTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgLy8gRGVsYXkgKHNlY29uZHMpIGludG8gdGhlIGF0dGFjayBhbmltYXRpb24gd2hlbiBkYW1hZ2UgaXMgYWN0dWFsbHkgYXBwbGllZFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiV2hlbiAoc2VjKSB0byBjaGVjayBoaXQgaW4gYXR0YWNrIGFuaW1cIiB9KVxyXG4gICAgYXR0YWNrSGl0RGVsYXk6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICAvLyBUb3RhbCBsZW5ndGggKHNlY29uZHMpIG9mIHRoZSBhdHRhY2sgYW5pbWF0aW9uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJMZW5ndGggb2YgUGxheWVyQXR0YWNrIGFuaW1hdGlvblwiIH0pXHJcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBwcml2YXRlIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgc3dpbmdzXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8g4oaQIEVORCBORVcgUFJPUFMg4oaSIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG5cclxuICAgIC8vIFRyYWNrcyB3aGljaCBkaXJlY3Rpb24gdGhlIHBsYXllciBpcyBmYWNpbmcuXHJcbiAgICBwcml2YXRlIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBuZXdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcclxuICAgICAgICAvLyBDYXB0dXJlIHRoZSBBbmltYXRpb24gY29tcG9uZW50IG9uY2VcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcclxuXHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBrZXlib2FyZCBpbnB1dCB0byB0cmlnZ2VyIGF0dGFja1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFxyXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvS2V5XCIpLmFjdGl2ZSA9IHRoaXMuaG9sZGluZ0tleTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgbGlzdGVuZXJcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXHJcbiAgICAgICAgICAgIGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcclxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGxlZCB3aGVuIGFueSBrZXkgaXMgcHJlc3NlZFxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICAvLyBVc2UgQywgWiwgb3IgViBhcyB0aGUgYXR0YWNrIGtleSAoeW91IGNhbiBhZGp1c3QgYXMgbmVlZGVkKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnogfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnZcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cnlBdHRhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0ZW1wdCB0byBzdGFydCBhbiBhdHRhY2sgKGlmIG5vdCBhbHJlYWR5IGluIG9uZSlcclxuICAgIHByaXZhdGUgdHJ5QXR0YWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNraW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIDEpIFBsYXkgYXR0YWNrIGFuaW1hdGlvbiAmIHNvdW5kXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlBsYXllckF0dGFja1wiKTsgLy8gZW5zdXJlIHlvdSBoYXZlIGEgY2xpcCBuYW1lZCDigJxQbGF5ZXJBdHRhY2vigJ1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMXNvdW5kKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIpIFNjaGVkdWxlIHRoZSBhY3R1YWwg4oCcaGl04oCdIG1vbWVudFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuYXBwbHlBdHRhY2tIaXQsIHRoaXMuYXR0YWNrSGl0RGVsYXkpO1xyXG5cclxuICAgICAgICAvLyAzKSBPbmNlIHRoZSBmdWxsIGFuaW1hdGlvbiBpcyBkb25lLCBhbGxvdyBhdHRhY2tpbmcgYWdhaW5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLmF0dGFja0FuaW1EdXJhdGlvblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgZXZlcnkgY2hpbGQgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ0gZm9yXHJcbiAgICAvLyBlaXRoZXIgYSBCbHVlU2xpbWVBSSBvciBhIEdyZWVuU2xpbWVBSSwgdGhlbiBhcHBsaWVzIGRhbWFnZSBpZiB3aXRoaW4gcmFuZ2UuXHJcbiAgICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tIaXQoKSB7XHJcbiAgICAgICAgLy8gMSkgQ29udmVydCB0aGUgcGxheWVyJ3MgcG9zaXRpb24gdG8gd29ybGQgc3BhY2UgKFZlYzMpIGFuZCB0aGVuIHRvIFZlYzJcclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xyXG5cclxuICAgICAgICAvLyAyKSBGaW5kIGFsbCBzbGltZXMgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ1cclxuICAgICAgICBjb25zdCBhY3RvcnNSb290ID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIGlmICghYWN0b3JzUm9vdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBhY3RvcnNSb290LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAzYSkgVHJ5IHRvIGdyYWIgYSBCbHVlU2xpbWVBSSBjb21wb25lbnRcclxuICAgICAgICAgICAgbGV0IHNsaW1lQ29tcDogQmx1ZVNsaW1lQUkgfCBHcmVlblNsaW1lQUkgfCBMYXZhU2xpbWVBSSB8IEdyZWVuQm9zc0FJIHwgbnVsbCA9XHJcbiAgICAgICAgICAgICAgICAoY2hpbGROb2RlLmdldENvbXBvbmVudChCbHVlU2xpbWVBSSkgYXMgQmx1ZVNsaW1lQUkpIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyAzYikgSWYgdGhlcmUgd2FzIG5vIEJsdWVTbGltZUFJLCB0cnkgdG8gZ3JhYiBhIEdyZWVuU2xpbWVBSSBpbnN0ZWFkXHJcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XHJcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEdyZWVuU2xpbWVBSSkgYXMgR3JlZW5TbGltZUFJO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XHJcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KExhdmFTbGltZUFJKSBhcyBMYXZhU2xpbWVBSTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgc2xpbWVDb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChHcmVlbkJvc3NBSSkgYXMgR3JlZW5Cb3NzQUk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIDQpIElmIHRoaXMgbm9kZSBoYXMgbmVpdGhlciBjb21wb25lbnQsIHNraXAgaXRcclxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gNSkgQ29udmVydCB0aGF0IHNsaW1l4oCZcyBwb3NpdGlvbiAobm9kZeKAmXMgYW5jaG9yIHBvaW50KSB0byB3b3JsZC1zcGFjZSBWZWMzIOKGkiBWZWMyXHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gY2hpbGROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XHJcblxyXG4gICAgICAgICAgICAvLyA2KSBDaGVjayBkaXN0YW5jZSBmcm9tIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gcGxheWVyV29ybGQyLnN1YihzbGltZVdvcmxkMikubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIDcpIFdl4oCZcmUgaW4gcmFuZ2Ug4oaSIGRlYWwgZGFtYWdlXHJcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja1Bvd2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAoT3B0aW9uYWwpIElmIHlvdSB3YW50IHRvIGhpdCBvbmx5IG9uZSBzbGltZSBwZXIgc3dpbmcsIHVuY29tbWVudDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIOKGkCBFWElTVElORyBNRVRIT0RTIOKGki8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcHVibGljIGdldCB3b3JsZFBvc2l0aW9uKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxvY2FsUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGFrZURhbWFnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaHAgLT0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhwIDwgMCkgdGhpcy5ocCA9IDA7XHJcblxyXG4gICAgICAgIC8vIDEpIElmIHN0aWxsIGFsaXZlIOKGkiBwbGF5IOKAnGh1cnTigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmhwID4gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfdXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9kb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2ssIGp1c3QgaW4gY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGBodXJ0XyR7dGhpcy5mYWNpbmd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVsaWZlKC1hbW91bnQsIHRoaXMuaHApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaHVydHNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaHVydHNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBleGl0IGVhcmx5LCBubyBkZWF0aCBsb2dpYyB5ZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIpIEhQIGhhcyBkcm9wcGVkIHRvIHplcm8g4oaSIHBsYXkg4oCcZGVhdGjigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5mYWNpbmcpIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGBkZWF0aF8ke3RoaXMuZmFjaW5nfWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIDMpIERlbGF5IHRoZSBhY3R1YWwg4oCcZnJlZXplL2dhbWUtb3ZlcuKAnSB1bnRpbCBhZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzLlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxLjAgLy8gYWRqdXN0IHRoaXMgZGVsYXkgdG8gbWF0Y2ggeW91ciBkZWF0aOKAkGFuaW1hdGlvbiBsZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ocCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPiB0aGlzLm1heEhwKSB0aGlzLmhwID0gdGhpcy5tYXhIcDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoYW1vdW50LCB0aGlzLmhwKTtcclxuICAgICAgICB0aGlzLnBsYXloZWFsc291bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNrKHRhcmdldDogUGxheWVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpZSgpIHtcclxuICAgICAgICAvLyBIYW5kIG92ZXIgdG8geW91ciBnYW1l4oCQb3Zlci9mcmVlemUgbG9naWNcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiQWN0b3JDb250cm9sbGVyXCIpLmdvZGllKCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlbGlmZShudW06IG51bWJlciwgaHA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwO1xyXG4gICAgICAgIGlmIChocCA8PSAxMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XHJcbiAgICAgICAgZWxzZSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWF0dGFjazFzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2sxc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMSBzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWF0dGFjazJzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2syc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2syc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMiBzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWF0dGFjazNzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2szc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2szc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMyBzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWh1cnRzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5odXJ0c291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gaHVydHNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5aGVhbHNvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWxzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhlYWxzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBoZWFsc291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFBsYXllcihsZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uICYgSFBcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhIcDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoMCwgdGhpcy5ocCk7XHJcbiAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwia2V5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb2NrXCIgJiYgdGhpcy5ob2xkaW5nS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBvdGhlckNvbGxpZGVyLmdldENvbXBvbmVudChcIkxvY2tcIik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGRlYWwgd2l0aCBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpOyBwcm9wZXJseVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLkdvTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgIH0sMS4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG59Il19