
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUczQyxrRkFBa0Y7QUFDbEYsa0RBQTZDO0FBQzdDLGdEQUEyQztBQUszQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZVQztRQTNVRyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLFFBQUUsR0FBVyxFQUFFLENBQUM7UUFHUixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUV6QiwrREFBK0Q7UUFFL0QsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsNEVBQTRFO1FBRTVFLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCLGlEQUFpRDtRQUVqRCx3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFRbkUsK0NBQStDO1FBQ3ZDLFlBQU0sR0FBb0IsTUFBTSxDQUFDO1FBQ2pDLFlBQU0sR0FBWSxLQUFLLENBQUMsQ0FBQyxNQUFNOztJQStRM0MsQ0FBQztJQTdRRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUU3Qyw4Q0FBOEM7UUFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUNqQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xFLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0ksb0JBQW9CO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFDakMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQ1AsQ0FBQztJQUNOLENBQUM7SUFFRCxpQ0FBaUM7SUFDekIsMEJBQVMsR0FBakIsVUFBa0IsS0FBNkI7UUFDM0MsOERBQThEO1FBQzlELElBQ0ksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDbEM7WUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQscURBQXFEO0lBQzdDLDBCQUFTLEdBQWpCO1FBQUEsaUJBc0JDO1FBckJHLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztTQUNqRjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUQsNERBQTREO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQ2I7WUFDSSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUMxQixDQUFDO0lBQ04sQ0FBQztJQUVELCtFQUErRTtJQUMvRSw4RUFBOEU7SUFDOUUsK0VBQStFO0lBQy9FLCtFQUErRTtJQUN2RSwrQkFBYyxHQUF0QjtRQUFBLGlCQTRDQztRQTNDRywwRUFBMEU7UUFDMUUsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNELDhEQUE4RDtRQUM5RCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXhCLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNsQywwQ0FBMEM7WUFDMUMsSUFBSSxTQUFTLEdBQ1IsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFpQixJQUFJLElBQUksQ0FBQztZQUVqRSxzRUFBc0U7WUFDdEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFpQixDQUFDO2FBQ3BFO1lBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFnQixDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFnQixDQUFDO2FBQ2xFO1lBRUQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ1osT0FBTzthQUNWO1lBRUQsb0ZBQW9GO1lBQ3BGLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhELGdDQUFnQztZQUNoQyxJQUFNLElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pELElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLGtDQUFrQztnQkFDbEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXZDLHFFQUFxRTtnQkFDckUsVUFBVTthQUNiO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQsc0JBQVcsaUNBQWE7UUFKeEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7YUFFekI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQ0FBYTthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFTSwyQkFBVSxHQUFqQixVQUFrQixNQUFjO1FBQWhDLGlCQTZEQztRQTVERyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLHFFQUFxRTtRQUNyRSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixLQUFLLElBQUk7b0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFCLE1BQU07Z0JBQ1YsS0FBSyxNQUFNO29CQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1QixNQUFNO2dCQUNWLEtBQUssTUFBTTtvQkFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDNUIsTUFBTTtnQkFDVixLQUFLLE9BQU87b0JBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzdCLE1BQU07Z0JBQ1Y7b0JBQ0kseUJBQXlCO29CQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztvQkFDdEMsTUFBTTthQUNiO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsT0FBTyxDQUFDLGlDQUFpQztTQUM1QztRQUVELDhFQUE4RTtRQUM5RSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1Y7Z0JBQ0kseUJBQXlCO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFTLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsbUZBQW1GO1FBQ25GLElBQUksQ0FBQyxZQUFZLENBQ2I7WUFDSSxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQ0QsR0FBRyxDQUFDLHlEQUF5RDtTQUNoRSxDQUFDO0lBQ04sQ0FBQztJQUVNLHFCQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1QkFBTSxHQUFiLFVBQWMsTUFBYztRQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sb0JBQUcsR0FBVjtRQUNJLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsR0FBVyxFQUFFLEVBQVU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksRUFBRSxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUMzQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSw4QkFBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSw4QkFBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixLQUFhO1FBQzFCLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhO1FBQW5ELGlCQW9CQztRQW5CRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7UUFDRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RELElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUM7b0JBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2hDO3FCQUFJO29CQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQztpQkFDcEU7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7U0FDVjtJQUNMLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQTFVRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5Q0FDN0I7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7K0NBQ3ZCO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3NDQUNoQztJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7K0NBQ1U7SUFVaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsQ0FBQzsrQ0FDaEQ7SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsQ0FBQztrREFDbkQ7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQztzREFDekM7SUFsRGhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E2VTFCO0lBQUQsYUFBQztDQTdVRCxBQTZVQyxDQTdVbUMsRUFBRSxDQUFDLFNBQVMsR0E2VS9DO2tCQTdVb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBCbHVlU2xpbWVBSSBmcm9tIFwiLi9haS9CbHVlU2xpbWVBSVwiO1xuaW1wb3J0IExhdmFTbGltZUFJIGZyb20gXCIuL2FpL0xhdmFTbGltZUFJXCI7XG5cblxuLy8g4oaTIEZpeCB0aGUgdHlwbyBoZXJlOiBpdCBzaG91bGQgYmUgXCJHcmVlblNsaW1lQUlcIiAodHdvIOKAnGXigJ1zKSwgbm90IFwiR3JlZW5TbGltZUFJXCJcbmltcG9ydCBHcmVlblNsaW1lQUkgZnJvbSBcIi4vYWkvR3JlZW5TbGltZUFJXCI7XG5pbXBvcnQgR3JlZW5Cb3NzQUkgZnJvbSBcIi4vYWkvR3JlZW5Cb3NzQUlcIjtcblxudHlwZSBGYWNpbmdEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuacgOWkp+ihgOmHj1wiIH0pXG4gICAgbWF4SHA6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmlLvmk4rliptcIiB9KVxuICAgIGF0dGFja1Bvd2VyOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJ3lp4vooYDph49cIiB9KVxuICAgIGhwOiBudW1iZXIgPSA0MDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250cm9sbGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXR0YWNrMXNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBhdHRhY2syc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF0dGFjazNzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgaHVydHNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBoZWFsc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXG4gICAgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIHB1YmxpYyBob2xkaW5nS2V5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaSIE5FVyBQUk9QRVJUSUVTIOKGkCAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEhvdyBmYXIgdGhlIHBsYXllcidzIGF0dGFjayByZWFjaGVzIChpbiBwaXhlbHMsIHdvcmxkLXNwYWNlKVxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwiUGxheWVyIGF0dGFjayByYW5nZSBpbiBwaXhlbHNcIiB9KVxuICAgIGF0dGFja1JhbmdlOiBudW1iZXIgPSA1MDtcblxuICAgIC8vIERlbGF5IChzZWNvbmRzKSBpbnRvIHRoZSBhdHRhY2sgYW5pbWF0aW9uIHdoZW4gZGFtYWdlIGlzIGFjdHVhbGx5IGFwcGxpZWRcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJXaGVuIChzZWMpIHRvIGNoZWNrIGhpdCBpbiBhdHRhY2sgYW5pbVwiIH0pXG4gICAgYXR0YWNrSGl0RGVsYXk6IG51bWJlciA9IDAuMjtcblxuICAgIC8vIFRvdGFsIGxlbmd0aCAoc2Vjb25kcykgb2YgdGhlIGF0dGFjayBhbmltYXRpb25cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJMZW5ndGggb2YgUGxheWVyQXR0YWNrIGFuaW1hdGlvblwiIH0pXG4gICAgYXR0YWNrQW5pbUR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG5cbiAgICBwcml2YXRlIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgc3dpbmdzXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaQIEVORCBORVcgUFJPUFMg4oaSIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xuXG4gICAgLy8gVHJhY2tzIHdoaWNoIGRpcmVjdGlvbiB0aGUgcGxheWVyIGlzIGZhY2luZy5cbiAgICBwcml2YXRlIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gbmV3XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIC8vIENhcHR1cmUgdGhlIEFuaW1hdGlvbiBjb21wb25lbnQgb25jZVxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGtleWJvYXJkIGlucHV0IHRvIHRyaWdnZXIgYXR0YWNrXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9LZXlcIikuYWN0aXZlID0gdGhpcy5ob2xkaW5nS2V5O1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8gQ2xlYW4gdXAgbGlzdGVuZXJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKFxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIHdoZW4gYW55IGtleSBpcyBwcmVzc2VkXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgLy8gVXNlIEMsIFosIG9yIFYgYXMgdGhlIGF0dGFjayBrZXkgKHlvdSBjYW4gYWRqdXN0IGFzIG5lZWRlZClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmMgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS56IHx8XG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMudHJ5QXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHRvIHN0YXJ0IGFuIGF0dGFjayAoaWYgbm90IGFscmVhZHkgaW4gb25lKVxuICAgIHByaXZhdGUgdHJ5QXR0YWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc0F0dGFja2luZykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyAxKSBQbGF5IGF0dGFjayBhbmltYXRpb24gJiBzb3VuZFxuICAgICAgICBpZiAodGhpcy5hbmltKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlBsYXllckF0dGFja1wiKTsgLy8gZW5zdXJlIHlvdSBoYXZlIGEgY2xpcCBuYW1lZCDigJxQbGF5ZXJBdHRhY2vigJ1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdHRhY2sxc291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIpIFNjaGVkdWxlIHRoZSBhY3R1YWwg4oCcaGl04oCdIG1vbWVudFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcblxuICAgICAgICAvLyAzKSBPbmNlIHRoZSBmdWxsIGFuaW1hdGlvbiBpcyBkb25lLCBhbGxvdyBhdHRhY2tpbmcgYWdhaW5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgLy8gVGhpcyBtZXRob2QgY2hlY2tzIGV2ZXJ5IGNoaWxkIHVuZGVyIOKAnENhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2Vy4oCdIGZvclxuICAgIC8vIGVpdGhlciBhIEJsdWVTbGltZUFJIG9yIGEgR3JlZW5TbGltZUFJLCB0aGVuIGFwcGxpZXMgZGFtYWdlIGlmIHdpdGhpbiByYW5nZS5cbiAgICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xuICAgICAgICAvLyAxKSBDb252ZXJ0IHRoZSBwbGF5ZXIncyBwb3NpdGlvbiB0byB3b3JsZCBzcGFjZSAoVmVjMykgYW5kIHRoZW4gdG8gVmVjMlxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQyID0gY2MudjIocGxheWVyV29ybGQzLngsIHBsYXllcldvcmxkMy55KTtcblxuICAgICAgICAvLyAyKSBGaW5kIGFsbCBzbGltZXMgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ1cbiAgICAgICAgY29uc3QgYWN0b3JzUm9vdCA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKTtcbiAgICAgICAgaWYgKCFhY3RvcnNSb290KSByZXR1cm47XG5cbiAgICAgICAgYWN0b3JzUm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIC8vIDNhKSBUcnkgdG8gZ3JhYiBhIEJsdWVTbGltZUFJIGNvbXBvbmVudFxuICAgICAgICAgICAgbGV0IHNsaW1lQ29tcDogQmx1ZVNsaW1lQUkgfCBHcmVlblNsaW1lQUkgfCBMYXZhU2xpbWVBSSB8IEdyZWVuQm9zc0FJIHwgbnVsbCA9XG4gICAgICAgICAgICAgICAgKGNoaWxkTm9kZS5nZXRDb21wb25lbnQoQmx1ZVNsaW1lQUkpIGFzIEJsdWVTbGltZUFJKSB8fCBudWxsO1xuXG4gICAgICAgICAgICAvLyAzYikgSWYgdGhlcmUgd2FzIG5vIEJsdWVTbGltZUFJLCB0cnkgdG8gZ3JhYiBhIEdyZWVuU2xpbWVBSSBpbnN0ZWFkXG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHNsaW1lQ29tcCA9IGNoaWxkTm9kZS5nZXRDb21wb25lbnQoR3JlZW5TbGltZUFJKSBhcyBHcmVlblNsaW1lQUk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHNsaW1lQ29tcCA9IGNoaWxkTm9kZS5nZXRDb21wb25lbnQoTGF2YVNsaW1lQUkpIGFzIExhdmFTbGltZUFJO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEdyZWVuQm9zc0FJKSBhcyBHcmVlbkJvc3NBSTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNCkgSWYgdGhpcyBub2RlIGhhcyBuZWl0aGVyIGNvbXBvbmVudCwgc2tpcCBpdFxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDUpIENvbnZlcnQgdGhhdCBzbGltZeKAmXMgcG9zaXRpb24gKG5vZGXigJlzIGFuY2hvciBwb2ludCkgdG8gd29ybGQtc3BhY2UgVmVjMyDihpIgVmVjMlxuICAgICAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDMgPSBjaGlsZE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XG5cbiAgICAgICAgICAgIC8vIDYpIENoZWNrIGRpc3RhbmNlIGZyb20gcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gcGxheWVyV29ybGQyLnN1YihzbGltZVdvcmxkMikubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gNykgV2XigJlyZSBpbiByYW5nZSDihpIgZGVhbCBkYW1hZ2VcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja1Bvd2VyKTtcblxuICAgICAgICAgICAgICAgIC8vIChPcHRpb25hbCkgSWYgeW91IHdhbnQgdG8gaGl0IG9ubHkgb25lIHNsaW1lIHBlciBzd2luZywgdW5jb21tZW50OlxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIOKGkCBFWElTVElORyBNRVRIT0RTIOKGki8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHVibGljIGdldCB3b3JsZFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsb2NhbFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5ocCA8IDApIHRoaXMuaHAgPSAwO1xuXG4gICAgICAgIC8vIDEpIElmIHN0aWxsIGFsaXZlIOKGkiBwbGF5IOKAnGh1cnTigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxuICAgICAgICBpZiAodGhpcy5ocCA+IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5mYWNpbmcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X3VwXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X2xlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoYGh1cnRfJHt0aGlzLmZhY2luZ31gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCBlYXJseSwgbm8gZGVhdGggbG9naWMgeWV0XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyKSBIUCBoYXMgZHJvcHBlZCB0byB6ZXJvIOKGkiBwbGF5IOKAnGRlYXRo4oCdIGFuaW1hdGlvbiBpbiB0aGUgY29ycmVjdCBkaXJlY3Rpb25cbiAgICAgICAgc3dpdGNoICh0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkZWF0aF91cFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkZWF0aF9kb3duXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2xlZnRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3JpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBmYWxsYmFjaywganVzdCBpbiBjYXNlXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoYGRlYXRoXyR7dGhpcy5mYWNpbmd9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKC1hbW91bnQsIHRoaXMuaHApO1xuXG4gICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcbiAgICAgICAgLy8gMykgRGVsYXkgdGhlIGFjdHVhbCDigJxmcmVlemUvZ2FtZS1vdmVy4oCdIHVudGlsIGFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMS4wIC8vIGFkanVzdCB0aGlzIGRlbGF5IHRvIG1hdGNoIHlvdXIgZGVhdGjigJBhbmltYXRpb24gbGVuZ3RoXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ocCArPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhwID4gdGhpcy5tYXhIcCkgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIHRoaXMudXBkYXRlbGlmZShhbW91bnQsIHRoaXMuaHApO1xuICAgICAgICB0aGlzLnBsYXloZWFsc291bmQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXR0YWNrKHRhcmdldDogUGxheWVyKSB7XG4gICAgICAgIHRhcmdldC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrUG93ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaWUoKSB7XG4gICAgICAgIC8vIEhhbmQgb3ZlciB0byB5b3VyIGdhbWXigJBvdmVyL2ZyZWV6ZSBsb2dpY1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiQWN0b3JDb250cm9sbGVyXCIpLmdvZGllKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIHVwZGF0ZWxpZmUobnVtOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gaHA7XG4gICAgICAgIGlmIChocCA8PSAxMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICBlbHNlIGlmIChocCA8PSAyMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgICAgICBlbHNlIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5YXR0YWNrMXNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2sxc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazEgc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlhdHRhY2syc291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazJzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazJzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMiBzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWF0dGFjazNzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrM3NvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrM3NvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2szIHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5aHVydHNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5odXJ0c291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGh1cnRzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWhlYWxzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaGVhbHNvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBoZWFsc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFBsYXllcihsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHJlc2V0IHBsYXllciBwb3NpdGlvbiAmIEhQXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoMCwgdGhpcy5ocCk7XG4gICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJrZXlcIikge1xuICAgICAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb2NrXCIgJiYgdGhpcy5ob2xkaW5nS2V5KSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoXCJMb2NrXCIpO1xuICAgICAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGRlYWwgd2l0aCBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpOyBwcm9wZXJseVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLkdvTmV4dExldmVsKCk7XG4gICAgICAgICAgICB9LDEuMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbn0iXX0=