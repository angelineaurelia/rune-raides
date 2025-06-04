
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
        if (event.keyCode === cc.macro.KEY.c) {
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
        if (otherCollider.node.name == "lock") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUszQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTRTQztRQTFTRyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLFFBQUUsR0FBVyxFQUFFLENBQUM7UUFHUixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUV6QiwrREFBK0Q7UUFFL0QsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsNEVBQTRFO1FBRTVFLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCLGlEQUFpRDtRQUVqRCx3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFRbkUsK0NBQStDO1FBQy9DLDhFQUE4RTtRQUM5RSxvREFBb0Q7UUFDNUMsWUFBTSxHQUFvQixNQUFNLENBQUM7UUFDakMsWUFBTSxHQUFZLEtBQUssQ0FBQyxDQUFBLEtBQUs7O0lBNE96QyxDQUFDO0lBMU9HLHVCQUFNLEdBQU47UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUU3Qyw4Q0FBOEM7UUFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUNqQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxvQkFBb0I7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUNqQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVELGlDQUFpQztJQUN6QiwwQkFBUyxHQUFqQixVQUFrQixLQUE2QjtRQUMzQyxpRUFBaUU7UUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQscURBQXFEO0lBQzdDLDBCQUFTLEdBQWpCO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztTQUNqRjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUQsNERBQTREO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDhFQUE4RTtJQUN0RSwrQkFBYyxHQUF0QjtRQUFBLGlCQTJCQztRQTFCRywwRUFBMEU7UUFDMUUsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNELHNEQUFzRDtRQUN0RCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXhCLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNsQyxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLENBQUMsdUJBQXVCO1lBRS9DLHVEQUF1RDtZQUN2RCxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RCxvQkFBb0I7WUFDcEIsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqRCxJQUFJLElBQUksSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMxQix5Q0FBeUM7Z0JBQ3pDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2Qyw4REFBOEQ7Z0JBQzlELFVBQVU7YUFDYjtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU1ELHNCQUFXLGlDQUFhO1FBSnhCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO2FBRXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaUNBQWE7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsTUFBYztRQUFoQyxpQkE2REM7UUE1REcsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3QixxRUFBcUU7UUFDckUsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNiLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxJQUFJO29CQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQixNQUFNO2dCQUNWLEtBQUssTUFBTTtvQkFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDNUIsTUFBTTtnQkFDVixLQUFLLE1BQU07b0JBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1YsS0FBSyxPQUFPO29CQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3QixNQUFNO2dCQUNWO29CQUNJLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07YUFDYjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWxDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUNELE9BQU8sQ0FBQyxpQ0FBaUM7U0FDNUM7UUFFRCw4RUFBOEU7UUFDOUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWO2dCQUNJLHlCQUF5QjtnQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBUyxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLGlEQUFpRDtRQUNqRCwwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsbUZBQW1GO1FBQ25GLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUdNLHFCQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1QkFBTSxHQUFiLFVBQWMsTUFBYztRQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sb0JBQUcsR0FBVjtRQUNJLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsR0FBVyxFQUFFLEVBQVU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksRUFBRSxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUMzQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSw4QkFBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSw4QkFBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixLQUFhO1FBQzFCLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsK0JBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUFuRCxpQkFlQztRQWRHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQztRQUNELElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ25DLElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO0lBQ0wsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBelNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lDQUM3QjtJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDdkI7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7c0NBQ2hDO0lBR2hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ1E7SUFHL0I7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzsrQ0FDVTtJQVVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxDQUFDOytDQUNoRDtJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxDQUFDO2tEQUNuRDtJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO3NEQUN6QztJQWxEaEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTRTMUI7SUFBRCxhQUFDO0NBNVNELEFBNFNDLENBNVNtQyxFQUFFLENBQUMsU0FBUyxHQTRTL0M7a0JBNVNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxheWVyLnRzXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBCbHVlU2xpbWVBSSBmcm9tIFwiLi9haS9CbHVlU2xpbWVBSVwiO1xuXG50eXBlIEZhY2luZ0RpcmVjdGlvbiA9IFwidXBcIiB8IFwiZG93blwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5pyA5aSn6KGA6YePXCIgfSlcbiAgICBtYXhIcDogbnVtYmVyID0gNDA7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuaUu+aTiuWKm1wiIH0pXG4gICAgYXR0YWNrUG93ZXI6IG51bWJlciA9IDU7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuWIneWni+ihgOmHj1wiIH0pXG4gICAgaHA6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRyb2xsZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBhdHRhY2sxc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF0dGFjazJzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXR0YWNrM3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBodXJ0c291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGhlYWxzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShHYW1lTWFuYWdlcilcbiAgICBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHVibGljIGhvbGRpbmdLZXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyDihpIgTkVXIFBST1BFUlRJRVMg4oaQIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gSG93IGZhciB0aGUgcGxheWVyJ3MgYXR0YWNrIHJlYWNoZXMgKGluIHBpeGVscywgd29ybGQtc3BhY2UpXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCJQbGF5ZXIgYXR0YWNrIHJhbmdlIGluIHBpeGVsc1wiIH0pXG4gICAgYXR0YWNrUmFuZ2U6IG51bWJlciA9IDUwO1xuXG4gICAgLy8gRGVsYXkgKHNlY29uZHMpIGludG8gdGhlIGF0dGFjayBhbmltYXRpb24gd2hlbiBkYW1hZ2UgaXMgYWN0dWFsbHkgYXBwbGllZFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIldoZW4gKHNlYykgdG8gY2hlY2sgaGl0IGluIGF0dGFjayBhbmltXCIgfSlcbiAgICBhdHRhY2tIaXREZWxheTogbnVtYmVyID0gMC4yO1xuXG4gICAgLy8gVG90YWwgbGVuZ3RoIChzZWNvbmRzKSBvZiB0aGUgYXR0YWNrIGFuaW1hdGlvblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIkxlbmd0aCBvZiBQbGF5ZXJBdHRhY2sgYW5pbWF0aW9uXCIgfSlcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDAuNTtcblxuICAgIHByaXZhdGUgaXNBdHRhY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gUHJldmVudCBvdmVybGFwcGluZyBzd2luZ3NcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyDihpAgRU5EIE5FVyBQUk9QUyDihpIgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XG5cbiAgICAvLyBUcmFja3Mgd2hpY2ggZGlyZWN0aW9uIHRoZSBwbGF5ZXIgaXMgZmFjaW5nLlxuICAgIC8vIFlvdSBzaG91bGQgdXBkYXRlIHRoaXMgdmFsdWUgd2hlbmV2ZXIgeW91ciBtb3ZlbWVudCBjb2RlIGNoYW5nZXMgZGlyZWN0aW9uLlxuICAgIC8vIERlZmF1bHQgaXMgXCJkb3duXCIgaWYgeW91IGRvbuKAmXQgZXhwbGljaXRseSBzZXQgaXQuXG4gICAgcHJpdmF0ZSBmYWNpbmc6IEZhY2luZ0RpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7Ly9uZXdcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgQW5pbWF0aW9uIGNvbXBvbmVudCBvbmNlXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5Ym9hcmQgaW5wdXQgdG8gdHJpZ2dlciBhdHRhY2tcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIENsZWFuIHVwIGxpc3RlbmVyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihcbiAgICAgICAgICAgIGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duLFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuIGFueSBrZXkgaXMgcHJlc3NlZFxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIC8vIFVzZSBTcGFjZSBhcyB0aGUgYXR0YWNrIGtleSAoY2hhbmdlIGlmIHlvdSBwcmVmZXIgYW5vdGhlciBrZXkpXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYykge1xuICAgICAgICAgICAgdGhpcy50cnlBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gc3RhcnQgYW4gYXR0YWNrIChpZiBub3QgYWxyZWFkeSBpbiBvbmUpXG4gICAgcHJpdmF0ZSB0cnlBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNraW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIDEpIFBsYXkgYXR0YWNrIGFuaW1hdGlvbiAmIHNvdW5kXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiUGxheWVyQXR0YWNrXCIpOyAvLyBlbnN1cmUgeW91IGhhdmUgYSBjbGlwIG5hbWVkIOKAnFBsYXllckF0dGFja+KAnVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMikgU2NoZWR1bGUgdGhlIGFjdHVhbCDigJxoaXTigJ0gbW9tZW50XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuYXBwbHlBdHRhY2tIaXQsIHRoaXMuYXR0YWNrSGl0RGVsYXkpO1xuXG4gICAgICAgIC8vIDMpIE9uY2UgdGhlIGZ1bGwgYW5pbWF0aW9uIGlzIGRvbmUsIGFsbG93IGF0dGFja2luZyBhZ2FpblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSdW5zIGF0dGFja0hpdERlbGF5IHNlY29uZHMgaW50byB0aGUgc3dpbmcgdG8gY2hlY2sgZm9yIGFueSBzbGltZXMgaW4gcmFuZ2VcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xuICAgICAgICAvLyAxKSBDb252ZXJ0IHRoZSBwbGF5ZXIncyBwb3NpdGlvbiB0byB3b3JsZCBzcGFjZSAoVmVjMykgYW5kIHRoZW4gdG8gVmVjMlxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQyID0gY2MudjIocGxheWVyV29ybGQzLngsIHBsYXllcldvcmxkMy55KTtcblxuICAgICAgICAvLyAyKSBGaW5kIGFsbCBzbGltZXMgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvQWN0b3Jz4oCdXG4gICAgICAgIGNvbnN0IGFjdG9yc1Jvb3QgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXJcIik7XG4gICAgICAgIGlmICghYWN0b3JzUm9vdCkgcmV0dXJuO1xuXG4gICAgICAgIGFjdG9yc1Jvb3QuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEJsdWVTbGltZUFJKTtcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSByZXR1cm47IC8vIHNraXAgbm9u4oCQc2xpbWUgbm9kZXNcblxuICAgICAgICAgICAgLy8gMykgQ29udmVydCB0aGF0IHNsaW1l4oCZcyBwb3NpdGlvbiB0byB3b3JsZC1zcGFjZSBWZWMyXG4gICAgICAgICAgICBjb25zdCBzbGltZVdvcmxkMyA9IGNoaWxkTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDIgPSBjYy52MihzbGltZVdvcmxkMy54LCBzbGltZVdvcmxkMy55KTtcblxuICAgICAgICAgICAgLy8gNCkgRGlzdGFuY2UgY2hlY2tcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBwbGF5ZXJXb3JsZDIuc3ViKHNsaW1lV29ybGQyKS5tYWcoKTtcbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyA1KSBTbGFzaCBoaXRzIHRoaXMgc2xpbWUg4oaSIGRlYWwgZGFtYWdlXG4gICAgICAgICAgICAgICAgc2xpbWVDb21wLnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XG4gICAgICAgICAgICAgICAgLy8gKE9wdGlvbmFsKSBJZiB5b3Ugb25seSB3YW50IG9uZSBzbGltZSBwZXIgc3dpbmcsIHVuY29tbWVudDpcbiAgICAgICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIOKGkCBFWElTVElORyBNRVRIT0RTIOKGki8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHVibGljIGdldCB3b3JsZFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsb2NhbFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5ocCA8IDApIHRoaXMuaHAgPSAwO1xuXG4gICAgICAgIC8vIDEpIElmIHN0aWxsIGFsaXZlIOKGkiBwbGF5IOKAnGh1cnTigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxuICAgICAgICBpZiAodGhpcy5ocCA+IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5mYWNpbmcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X3VwXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X2xlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoYGh1cnRfJHt0aGlzLmZhY2luZ31gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCBlYXJseSwgbm8gZGVhdGggbG9naWMgeWV0XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIDIpIEhQIGhhcyBkcm9wcGVkIHRvIHplcm8g4oaSIHBsYXkg4oCcZGVhdGjigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3VwXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2Rvd25cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfbGVmdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgZGVhdGhfJHt0aGlzLmZhY2luZ31gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XG5cbiAgICAgICAgLy8gKE9wdGlvbmFsKSBwbGF5IGEgZGVhdGggc291bmQgaGVyZSBpZiB5b3Ugd2FudFxuICAgICAgICAvLyBpZiAodGhpcy5kZWF0aHNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGVhdGhzb3VuZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgIC8vIDMpIERlbGF5IHRoZSBhY3R1YWwg4oCcZnJlZXplL2dhbWUtb3ZlcuKAnSB1bnRpbCBhZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzLlxuICAgICAgICAvLyAgICBTdXBwb3NlIGVhY2ggZGVhdGggY2xpcCBpcyBhYm91dCAxLjAgc2Vjb25kIGxvbmc7IGFkanVzdCBhcyBuZWVkZWQuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgIH0sIDEuMCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhwICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaHAgPiB0aGlzLm1heEhwKSB0aGlzLmhwID0gdGhpcy5tYXhIcDtcbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKGFtb3VudCwgdGhpcy5ocCk7XG4gICAgICAgIHRoaXMucGxheWhlYWxzb3VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2sodGFyZ2V0OiBQbGF5ZXIpIHtcbiAgICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRpZSgpIHtcbiAgICAgICAgLy8gSGFuZCBvdmVyIHRvIHlvdXIgZ2FtZeKAkG92ZXIvZnJlZXplIGxvZ2ljXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRDb21wb25lbnQoXCJBY3RvckNvbnRyb2xsZXJcIikuZ29kaWUoKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlbGlmZShudW06IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlhdHRhY2sxc291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMSBzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWF0dGFjazJzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMnNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMnNvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2syIHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5YXR0YWNrM3NvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2szc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2szc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazMgc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlodXJ0c291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gaHVydHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5aGVhbHNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5oZWFsc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGhlYWxzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0UGxheWVyKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uICYgSFBcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgwLCB0aGlzLmhwKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDIwLCAyMCk7XG4gICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJrZXlcIikge1xuICAgICAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBvdGhlckNvbGxpZGVyLmdldENvbXBvbmVudChcIk5ld0NsYXNzXCIpO1xuICAgICAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLkdvTmV4dExldmVsKCk7XG4gICAgICAgICAgICB9LCAxLjIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG59XG4iXX0=