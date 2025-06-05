
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
// Player.ts
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
        // You should update this value whenever your movement code changes direction.
        // Default is "down" if you don’t explicitly set it.
        _this.facing = "down";
        _this.isDead = false; //new
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
        // Use Space as the attack key (change if you prefer another key)
        if (event.keyCode === cc.macro.KEY.c || event.keyCode === cc.macro.KEY.z || event.keyCode === cc.macro.KEY.v) {
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
    // Runs attackHitDelay seconds into the swing to check for any slimes in range
    Player.prototype.applyAttackHit = function () {
        var _this = this;
        // 1) Convert the player's position to world space (Vec3) and then to Vec2
        var playerWorld3 = this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        // 2) Find all slimes under “Canvas/MapManager/Actors”
        var actorsRoot = cc.find("Canvas/MapManager/MonsterManager");
        if (!actorsRoot)
            return;
        actorsRoot.children.forEach(function (childNode) {
            var slimeComp = childNode.getComponent(BlueSlimeAI_1.default);
            if (!slimeComp)
                return; // skip non‐slime nodes
            // 3) Convert that slime’s position to world-space Vec2
            var slimeWorld3 = childNode.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
            // 4) Distance check
            var dist = playerWorld2.sub(slimeWorld2).mag();
            if (dist <= _this.attackRange) {
                // 5) Slash hits this slime → deal damage
                slimeComp.takeDamage(_this.attackPower);
                // (Optional) If you only want one slime per swing, uncomment:
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
        // (Optional) play a death sound here if you want
        // if (this.deathsound) cc.audioEngine.playEffect(this.deathsound, false);
        this.isDead = true;
        // 3) Delay the actual “freeze/game-over” until after the death animation finishes.
        //    Suppose each death clip is about 1.0 second long; adjust as needed.
        this.scheduleOnce(function () {
            _this.die();
        }, 1.0);
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
        this.node.setPosition(20, 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBSzNDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNlNDO1FBM1NHLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUdSLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRW5DLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBRXpCLCtEQUErRDtRQUUvRCxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6Qiw0RUFBNEU7UUFFNUUsb0JBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsaURBQWlEO1FBRWpELHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQVFuRSwrQ0FBK0M7UUFDL0MsOEVBQThFO1FBQzlFLG9EQUFvRDtRQUM1QyxZQUFNLEdBQW9CLE1BQU0sQ0FBQztRQUNqQyxZQUFNLEdBQVksS0FBSyxDQUFDLENBQUEsS0FBSzs7SUE2T3pDLENBQUM7SUEzT0csdUJB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QUMscUJBQVcsQ0FBQzsrQ0FDVTtJQVVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxDQUFDOytDQUNoRDtJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxDQUFDO2tEQUNuRDtJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO3NEQUN6QztJQWxEaEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZTMUI7SUFBRCxhQUFDO0NBN1NELEFBNlNDLENBN1NtQyxFQUFFLENBQUMsU0FBUyxHQTZTL0M7a0JBN1NvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxheWVyLnRzXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEJsdWVTbGltZUFJIGZyb20gXCIuL2FpL0JsdWVTbGltZUFJXCI7XHJcblxyXG50eXBlIEZhY2luZ0RpcmVjdGlvbiA9IFwidXBcIiB8IFwiZG93blwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmnIDlpKfooYDph49cIiB9KVxyXG4gICAgbWF4SHA6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5pS75pOK5YqbXCIgfSlcclxuICAgIGF0dGFja1Bvd2VyOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5Yid5aeL6KGA6YePXCIgfSlcclxuICAgIGhwOiBudW1iZXIgPSA0MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250cm9sbGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXR0YWNrMXNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdHRhY2syc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF0dGFjazNzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgaHVydHNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBoZWFsc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVNYW5hZ2VyKVxyXG4gICAgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaG9sZGluZ0tleTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIOKGkiBORVcgUFJPUEVSVElFUyDihpAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvLyBIb3cgZmFyIHRoZSBwbGF5ZXIncyBhdHRhY2sgcmVhY2hlcyAoaW4gcGl4ZWxzLCB3b3JsZC1zcGFjZSlcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwiUGxheWVyIGF0dGFjayByYW5nZSBpbiBwaXhlbHNcIiB9KVxyXG4gICAgYXR0YWNrUmFuZ2U6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIC8vIERlbGF5IChzZWNvbmRzKSBpbnRvIHRoZSBhdHRhY2sgYW5pbWF0aW9uIHdoZW4gZGFtYWdlIGlzIGFjdHVhbGx5IGFwcGxpZWRcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIldoZW4gKHNlYykgdG8gY2hlY2sgaGl0IGluIGF0dGFjayBhbmltXCIgfSlcclxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgLy8gVG90YWwgbGVuZ3RoIChzZWNvbmRzKSBvZiB0aGUgYXR0YWNrIGFuaW1hdGlvblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiTGVuZ3RoIG9mIFBsYXllckF0dGFjayBhbmltYXRpb25cIiB9KVxyXG4gICAgYXR0YWNrQW5pbUR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0F0dGFja2luZzogYm9vbGVhbiA9IGZhbHNlOyAvLyBQcmV2ZW50IG92ZXJsYXBwaW5nIHN3aW5nc1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIOKGkCBFTkQgTkVXIFBST1BTIOKGkiAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcclxuXHJcbiAgICAvLyBUcmFja3Mgd2hpY2ggZGlyZWN0aW9uIHRoZSBwbGF5ZXIgaXMgZmFjaW5nLlxyXG4gICAgLy8gWW91IHNob3VsZCB1cGRhdGUgdGhpcyB2YWx1ZSB3aGVuZXZlciB5b3VyIG1vdmVtZW50IGNvZGUgY2hhbmdlcyBkaXJlY3Rpb24uXHJcbiAgICAvLyBEZWZhdWx0IGlzIFwiZG93blwiIGlmIHlvdSBkb27igJl0IGV4cGxpY2l0bHkgc2V0IGl0LlxyXG4gICAgcHJpdmF0ZSBmYWNpbmc6IEZhY2luZ0RpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTsvL25ld1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG4gICAgICAgIC8vIENhcHR1cmUgdGhlIEFuaW1hdGlvbiBjb21wb25lbnQgb25jZVxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xyXG5cclxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGtleWJvYXJkIGlucHV0IHRvIHRyaWdnZXIgYXR0YWNrXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oXHJcbiAgICAgICAgICAgIGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcclxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBDbGVhbiB1cCBsaXN0ZW5lclxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihcclxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxyXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsbGVkIHdoZW4gYW55IGtleSBpcyBwcmVzc2VkXHJcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIC8vIFVzZSBTcGFjZSBhcyB0aGUgYXR0YWNrIGtleSAoY2hhbmdlIGlmIHlvdSBwcmVmZXIgYW5vdGhlciBrZXkpXHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5jIHx8IGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS56IHx8IGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS52KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5QXR0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGVtcHQgdG8gc3RhcnQgYW4gYXR0YWNrIChpZiBub3QgYWxyZWFkeSBpbiBvbmUpXHJcbiAgICBwcml2YXRlIHRyeUF0dGFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0F0dGFja2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAxKSBQbGF5IGF0dGFjayBhbmltYXRpb24gJiBzb3VuZFxyXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJQbGF5ZXJBdHRhY2tcIik7IC8vIGVuc3VyZSB5b3UgaGF2ZSBhIGNsaXAgbmFtZWQg4oCcUGxheWVyQXR0YWNr4oCdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMXNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyKSBTY2hlZHVsZSB0aGUgYWN0dWFsIOKAnGhpdOKAnSBtb21lbnRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcclxuXHJcbiAgICAgICAgLy8gMykgT25jZSB0aGUgZnVsbCBhbmltYXRpb24gaXMgZG9uZSwgYWxsb3cgYXR0YWNraW5nIGFnYWluXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcy5hdHRhY2tBbmltRHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJ1bnMgYXR0YWNrSGl0RGVsYXkgc2Vjb25kcyBpbnRvIHRoZSBzd2luZyB0byBjaGVjayBmb3IgYW55IHNsaW1lcyBpbiByYW5nZVxyXG4gICAgcHJpdmF0ZSBhcHBseUF0dGFja0hpdCgpIHtcclxuICAgICAgICAvLyAxKSBDb252ZXJ0IHRoZSBwbGF5ZXIncyBwb3NpdGlvbiB0byB3b3JsZCBzcGFjZSAoVmVjMykgYW5kIHRoZW4gdG8gVmVjMlxyXG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMiA9IGNjLnYyKHBsYXllcldvcmxkMy54LCBwbGF5ZXJXb3JsZDMueSk7XHJcblxyXG4gICAgICAgIC8vIDIpIEZpbmQgYWxsIHNsaW1lcyB1bmRlciDigJxDYW52YXMvTWFwTWFuYWdlci9BY3RvcnPigJ1cclxuICAgICAgICBjb25zdCBhY3RvcnNSb290ID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIGlmICghYWN0b3JzUm9vdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBhY3RvcnNSb290LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEJsdWVTbGltZUFJKTtcclxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHJldHVybjsgLy8gc2tpcCBub27igJBzbGltZSBub2Rlc1xyXG5cclxuICAgICAgICAgICAgLy8gMykgQ29udmVydCB0aGF0IHNsaW1l4oCZcyBwb3NpdGlvbiB0byB3b3JsZC1zcGFjZSBWZWMyXHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gY2hpbGROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XHJcblxyXG4gICAgICAgICAgICAvLyA0KSBEaXN0YW5jZSBjaGVja1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gcGxheWVyV29ybGQyLnN1YihzbGltZVdvcmxkMikubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIDUpIFNsYXNoIGhpdHMgdGhpcyBzbGltZSDihpIgZGVhbCBkYW1hZ2VcclxuICAgICAgICAgICAgICAgIHNsaW1lQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrUG93ZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gKE9wdGlvbmFsKSBJZiB5b3Ugb25seSB3YW50IG9uZSBzbGltZSBwZXIgc3dpbmcsIHVuY29tbWVudDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyDihpAgRVhJU1RJTkcgTUVUSE9EUyDihpIvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgd29ybGRQb3NpdGlvbigpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsb2NhbFBvc2l0aW9uKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhwIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5ocCA8IDApIHRoaXMuaHAgPSAwO1xyXG5cclxuICAgICAgICAvLyAxKSBJZiBzdGlsbCBhbGl2ZSDihpIgcGxheSDigJxodXJ04oCdIGFuaW1hdGlvbiBpbiB0aGUgY29ycmVjdCBkaXJlY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5ocCA+IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfZG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgaHVydF8ke3RoaXMuZmFjaW5nfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCBlYXJseSwgbm8gZGVhdGggbG9naWMgeWV0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDIpIEhQIGhhcyBkcm9wcGVkIHRvIHplcm8g4oaSIHBsYXkg4oCcZGVhdGjigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5mYWNpbmcpIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGBkZWF0aF8ke3RoaXMuZmFjaW5nfWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcclxuXHJcbiAgICAgICAgLy8gKE9wdGlvbmFsKSBwbGF5IGEgZGVhdGggc291bmQgaGVyZSBpZiB5b3Ugd2FudFxyXG4gICAgICAgIC8vIGlmICh0aGlzLmRlYXRoc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5kZWF0aHNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIDMpIERlbGF5IHRoZSBhY3R1YWwg4oCcZnJlZXplL2dhbWUtb3ZlcuKAnSB1bnRpbCBhZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzLlxyXG4gICAgICAgIC8vICAgIFN1cHBvc2UgZWFjaCBkZWF0aCBjbGlwIGlzIGFib3V0IDEuMCBzZWNvbmQgbG9uZzsgYWRqdXN0IGFzIG5lZWRlZC5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgfSwgMS4wKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhwICs9IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5ocCA+IHRoaXMubWF4SHApIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlbGlmZShhbW91bnQsIHRoaXMuaHApO1xyXG4gICAgICAgIHRoaXMucGxheWhlYWxzb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2sodGFyZ2V0OiBQbGF5ZXIpIHtcclxuICAgICAgICB0YXJnZXQudGFrZURhbWFnZSh0aGlzLmF0dGFja1Bvd2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGllKCkge1xyXG4gICAgICAgIC8vIEhhbmQgb3ZlciB0byB5b3VyIGdhbWXigJBvdmVyL2ZyZWV6ZSBsb2dpY1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRDb21wb25lbnQoXCJBY3RvckNvbnRyb2xsZXJcIikuZ29kaWUoKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVsaWZlKG51bTogbnVtYmVyLCBocDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gaHA7XHJcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLk9SQU5HRTtcclxuICAgICAgICBlbHNlIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5YXR0YWNrMXNvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2sxIHNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5YXR0YWNrMnNvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjazJzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazJzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2syIHNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5YXR0YWNrM3NvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjazNzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazNzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2szIHNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5aHVydHNvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBodXJ0c291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXloZWFsc291bmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaGVhbHNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGhlYWxzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0UGxheWVyKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICAvLyByZXNldCBwbGF5ZXIgcG9zaXRpb24gJiBIUFxyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgwLCB0aGlzLmhwKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMjAsIDIwKTtcclxuICAgICAgICB0aGlzLmhvbGRpbmdLZXkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJrZXlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmhvbGRpbmdLZXkgPSB0cnVlO1xyXG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcImxvY2tcIiAmJiB0aGlzLmhvbGRpbmdLZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KFwiTmV3Q2xhc3NcIik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIuR29OZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgfSwgMS4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==