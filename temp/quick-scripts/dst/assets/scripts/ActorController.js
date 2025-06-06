
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ActorController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a55dft7PvVIPIFEJDrlEbfj', 'ActorController');
// scripts/ActorController.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Controller_1 = require("./input/Controller");
var IInputControls_1 = require("./input/IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Idle"] = 0] = "Idle";
    PlayerState[PlayerState["Walk"] = 1] = "Walk";
    PlayerState[PlayerState["Attack"] = 2] = "Attack";
    PlayerState[PlayerState["Attack2"] = 3] = "Attack2";
    PlayerState[PlayerState["Attack3"] = 4] = "Attack3";
    PlayerState[PlayerState["Hurt"] = 5] = "Hurt";
    PlayerState[PlayerState["Die"] = 6] = "Die";
    PlayerState[PlayerState["Combo_1"] = 7] = "Combo_1";
})(PlayerState || (PlayerState = {}));
var FacingDirection;
(function (FacingDirection) {
    FacingDirection[FacingDirection["Right"] = 0] = "Right";
    FacingDirection[FacingDirection["Left"] = 1] = "Left";
    FacingDirection[FacingDirection["Up"] = 2] = "Up";
    FacingDirection[FacingDirection["Down"] = 3] = "Down";
})(FacingDirection || (FacingDirection = {}));
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
/**
 * A component that implements movement and actions for each actor.
 * Toggle "Use Player Input" to read from player input.
 */
var ActorController = /** @class */ (function (_super) {
    __extends(ActorController, _super);
    function ActorController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialFacingDirection = FacingDirection.Right;
        _this.player = null;
        _this._animation = null;
        _this._animState = null;
        _this._rigidbody = null;
        _this.idleAnimationName = "";
        _this.moveAnimationName = "";
        _this._idleAnimState = null;
        _this._moveAnimState = null;
        _this.walkRightAnimation = "player_walk_right";
        _this.walkLeftAnimation = "player_walk_left";
        _this.walkUpAnimation = "player_walk_up";
        _this.walkDownAnimation = "player_walk_down";
        _this.idleAnimation = "player_standby";
        _this.attack_right = "attack_right-1";
        _this.attack_left = "attack_left-1";
        _this.attack_up = "attack_up-1";
        _this.attack_down = "attack_down-1";
        _this.attack_right_2 = "attack_right-2";
        _this.attack_left_2 = "attack_left-2";
        _this.attack_up_2 = "attack_up-2";
        _this.attack_down_2 = "attack_down-2";
        _this.attack_right_3 = "attack_right-3";
        _this.attack_left_3 = "attack_left-3";
        _this.attack_up_3 = "attack_up-3";
        _this.attack_down_3 = "attack_down-3";
        _this.death_right = "death_right";
        _this.death_left = "death_left";
        _this.death_up = "death_up";
        _this.death_down = "death_down";
        _this.hurt_right = "hurt_right";
        _this.hurt_left = "hurt_left";
        _this.hurt_up = "hurt_up";
        _this.hurt_down = "hurt_down";
        _this.combo_right_1 = "combo-1_right";
        _this.combo_left_1 = "combo-1_left";
        _this.combo_up_1 = "combo-1_up";
        _this.combo_down_1 = "combo-1_down";
        _this.moveSpeed = 60;
        _this.moveAxisX = 0;
        _this.moveAxisY = 0;
        _this._playerState = PlayerState.Idle;
        _this._facing = FacingDirection.Down; // 預設朝下
        _this._lastAnim = "";
        _this.combostep = 0;
        _this.combotimer = 0;
        _this.comboInterval = 1;
        return _this;
    }
    Object.defineProperty(ActorController.prototype, "moveAxis2D", {
        get: function () {
            return new cc.Vec2(this.moveAxisX, this.moveAxisY);
        },
        enumerable: false,
        configurable: true
    });
    ActorController.prototype.onLoad = function () {
        this._animation = this.node.getComponent(cc.Animation);
        if (!this._animation)
            console.warn("ActorController: Component cc.Animation missing on node " + this.node.name);
        this._rigidbody = this.node.getComponent(cc.RigidBody);
        if (!this._rigidbody)
            console.warn("ActorController: Component cc.RigidBody missing on node " + this.node.name);
    };
    ActorController.prototype.start = function () {
        _super.prototype.start && _super.prototype.start.call(this);
        if (this._animation) {
            this._idleAnimState = this._animation.getAnimationState(this.idleAnimationName);
            this._moveAnimState = this._animation.getAnimationState(this.moveAnimationName);
            this._animState = this._animation.play(this.idleAnimationName);
            this._animation.on('finished', this.onAnimFinished, this);
        }
    };
    ActorController.prototype.update = function (dt) {
        if (this._playerState === PlayerState.Die)
            return;
        if (this.combostep > 0) {
            this.combotimer += dt;
            if (this.combotimer >= this.comboInterval) {
                this.combostep = 0;
            }
        }
        if (this.inputSource) {
            if (this.incombo())
                return;
            this.moveAxisX = this.inputSource.horizontalAxis;
            this.moveAxisY = this.inputSource.verticalAxis;
            var velocity = this.moveAxis2D.mul(this.moveSpeed);
            if (this._rigidbody) {
                this._rigidbody.linearVelocity = velocity;
            }
            var is_playing = (this._animation.getAnimationState(this._lastAnim) && this._animation.getAnimationState(this._lastAnim).isPlaying);
            // 狀態機：移動 or 靜止
            if (this.moveAxisX !== 0 || this.moveAxisY !== 0) {
                this._playerState = PlayerState.Walk;
                // 根據輸入更新朝向
                if (Math.abs(this.moveAxisX) > Math.abs(this.moveAxisY)) {
                    this._facing = this.moveAxisX > 0 ? FacingDirection.Right : FacingDirection.Left;
                }
                else {
                    this._facing = this.moveAxisY > 0 ? FacingDirection.Up : FacingDirection.Down;
                }
            }
            else if (!is_playing) {
                this._playerState = PlayerState.Idle;
            }
            else if (this.iswalking()) {
                this._playerState = PlayerState.Idle;
            }
            // 這裡可以根據按鍵觸發攻擊等狀態
            if (!is_playing || !this.incombo()) {
                if (this.inputSource.attack === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack;
                    this.player.getComponent("Player").playattack1sound();
                }
                else if (this.inputSource.attack2 === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack2;
                    this.player.getComponent("Player").playattack2sound();
                }
                else if (this.inputSource.attack3 === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack3;
                    this.player.getComponent("Player").playattack3sound();
                }
                else if (this.inputSource.gethurt === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Hurt;
                    this.player.getComponent("Player").takeDamage(5);
                    this.inputSource._xKey = IInputControls_1.ButtonState.Held;
                }
                this.incombo();
            }
            // 狀態+方向決定動畫
            var animName = this.getAnimName(this._playerState, this._facing);
            //如果是combo 狀態 播放動畫直到 combo 結束
            if (this._animation && animName && animName !== this._lastAnim && !this.stopupdate()) {
                console.log(this._lastAnim, animName);
                this._animState = this._animation.play(animName);
                this._lastAnim = animName;
            }
            console.log(this._playerState, this._lastAnim, this.combostep, this.combotimer);
        }
    };
    ActorController.prototype.getAnimName = function (state, facing) {
        switch (state) {
            case PlayerState.Combo_1:
                switch (facing) {
                    case FacingDirection.Right: return this.combo_right_1;
                    case FacingDirection.Left: return this.combo_left_1;
                    case FacingDirection.Up: return this.combo_up_1;
                    case FacingDirection.Down: return this.combo_down_1;
                }
                break;
            case PlayerState.Walk:
                switch (facing) {
                    case FacingDirection.Right: return this.walkRightAnimation;
                    case FacingDirection.Left: return this.walkLeftAnimation;
                    case FacingDirection.Up: return this.walkUpAnimation;
                    case FacingDirection.Down: return this.walkDownAnimation;
                }
                break;
            case PlayerState.Idle:
                return this.idleAnimation;
            case PlayerState.Attack:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right;
                    case FacingDirection.Left: return this.attack_left;
                    case FacingDirection.Up: return this.attack_up;
                    case FacingDirection.Down: return this.attack_down;
                }
                break;
            case PlayerState.Attack2:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right_2;
                    case FacingDirection.Left: return this.attack_left_2;
                    case FacingDirection.Up: return this.attack_up_2;
                    case FacingDirection.Down: return this.attack_down_2;
                }
                break;
            case PlayerState.Attack3:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right_3;
                    case FacingDirection.Left: return this.attack_left_3;
                    case FacingDirection.Up: return this.attack_up_3;
                    case FacingDirection.Down: return this.attack_down_3;
                }
                break;
            case PlayerState.Hurt:
                switch (facing) {
                    case FacingDirection.Right: return this.hurt_right;
                    case FacingDirection.Left: return this.hurt_left;
                    case FacingDirection.Up: return this.hurt_up;
                    case FacingDirection.Down: return this.hurt_down;
                }
                break;
            case PlayerState.Die:
                switch (facing) {
                    case FacingDirection.Right: return this.death_right;
                    case FacingDirection.Left: return this.death_left;
                    case FacingDirection.Up: return this.death_up;
                    case FacingDirection.Down: return this.death_down;
                }
                break;
        }
        return "";
    };
    ActorController.prototype.onAnimFinished = function () {
        console.log("finish");
        if (this._playerState === PlayerState.Attack ||
            this._playerState === PlayerState.Attack2 ||
            this._playerState === PlayerState.Attack3 ||
            this._playerState === PlayerState.Hurt ||
            this._playerState === PlayerState.Combo_1) {
            this._playerState = PlayerState.Idle;
            this._lastAnim = "";
        }
    };
    ActorController.prototype.stopupdate = function () {
        var animNames = [
            this.combo_up_1,
            this.combo_down_1,
            this.combo_left_1,
            this.combo_right_1
        ];
        for (var _i = 0, animNames_1 = animNames; _i < animNames_1.length; _i++) {
            var name = animNames_1[_i];
            var state = this._animation.getAnimationState(name);
            if (state && state.isPlaying)
                return true;
        }
        return false;
    };
    ActorController.prototype.incombo = function () {
        if (this._playerState === PlayerState.Combo_1)
            return true;
        if (this._playerState === PlayerState.Attack) {
            this.combostep = 1;
            this.combotimer = 0;
            return false;
        }
        else if (this._playerState === PlayerState.Attack2 && this.combostep === 1 && this.combotimer < this.comboInterval) {
            this.combostep = 2;
            this.combotimer = 0;
            return false;
        }
        else if (this._playerState === PlayerState.Attack3 && this.combostep === 2 && this.combotimer < this.comboInterval) {
            this.combostep = 3;
            this.combotimer = 0;
            this._playerState = PlayerState.Combo_1;
            return true;
        }
        return false;
    };
    ActorController.prototype.iswalking = function () {
        var animNames = [
            this.walkDownAnimation, this.walkLeftAnimation, this.walkRightAnimation, this.walkUpAnimation
        ];
        for (var _i = 0, animNames_2 = animNames; _i < animNames_2.length; _i++) {
            var name = animNames_2[_i];
            var state = this._animation.getAnimationState(name);
            if (state && state.isPlaying)
                return true;
        }
        return false;
    };
    ActorController.prototype.godie = function () {
        this._playerState = PlayerState.Die;
        this.scheduleOnce(function () {
            var Mgr = cc.find("GameManager").getComponent("GameManager");
            Mgr.EndGame();
        }, 1);
    };
    __decorate([
        property({ type: cc.Enum(FacingDirection) })
    ], ActorController.prototype, "initialFacingDirection", void 0);
    __decorate([
        property(cc.Node)
    ], ActorController.prototype, "player", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "idleAnimationName", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "moveAnimationName", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkRightAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkLeftAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkUpAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkDownAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "idleAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_right_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_left_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_up_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_down_1", void 0);
    __decorate([
        property(cc.Float)
    ], ActorController.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], ActorController.prototype, "comboInterval", void 0);
    ActorController = __decorate([
        ccclass
    ], ActorController);
    return ActorController;
}(Controller_1.default));
exports.default = ActorController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQWN0b3JDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25HLGlEQUE0QztBQUM1Qyx5REFBcUU7QUFHL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSyxXQVNKO0FBVEQsV0FBSyxXQUFXO0lBQ1osNkNBQUksQ0FBQTtJQUNKLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sbURBQU8sQ0FBQTtJQUNQLG1EQUFPLENBQUE7SUFDUCw2Q0FBSSxDQUFBO0lBQ0osMkNBQUcsQ0FBQTtJQUNILG1EQUFPLENBQUE7QUFDWCxDQUFDLEVBVEksV0FBVyxLQUFYLFdBQVcsUUFTZjtBQUVELElBQUssZUFLSjtBQUxELFdBQUssZUFBZTtJQUNoQix1REFBSyxDQUFBO0lBQ0wscURBQUksQ0FBQTtJQUNKLGlEQUFFLENBQUE7SUFDRixxREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxJLGVBQWUsS0FBZixlQUFlLFFBS25CO0FBRUQsU0FBUyxJQUFJLENBQUMsQ0FBUztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQ7OztHQUdHO0FBRUg7SUFBNkMsbUNBQVU7SUFBdkQ7UUFBQSxxRUErVEM7UUE3VEcsNEJBQXNCLEdBQUcsZUFBZSxDQUFDLEtBQUss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QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0o7SUFhZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNPO0lBcEdULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0ErVG5DO0lBQUQsc0JBQUM7Q0EvVEQsQUErVEMsQ0EvVDRDLG9CQUFVLEdBK1R0RDtrQkEvVG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9pbnB1dC9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzLCBCdXR0b25TdGF0ZSB9IGZyb20gXCIuL2lucHV0L0lJbnB1dENvbnRyb2xzXCI7XHJcbmltcG9ydCAgUGxheWVyICAgIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZW51bSBQbGF5ZXJTdGF0ZXtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgQXR0YWNrLFxyXG4gICAgQXR0YWNrMixcclxuICAgIEF0dGFjazMsXHJcbiAgICBIdXJ0LFxyXG4gICAgRGllICxcclxuICAgIENvbWJvXzFcclxufVxyXG5cclxuZW51bSBGYWNpbmdEaXJlY3Rpb24ge1xyXG4gICAgUmlnaHQsXHJcbiAgICBMZWZ0LFxyXG4gICAgVXAsXHJcbiAgICBEb3duXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ24oeDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4geCA+IDAgPyAxIDogeCA8IDAgPyAtMSA6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHMgbW92ZW1lbnQgYW5kIGFjdGlvbnMgZm9yIGVhY2ggYWN0b3IuXHJcbiAqIFRvZ2dsZSBcIlVzZSBQbGF5ZXIgSW5wdXRcIiB0byByZWFkIGZyb20gcGxheWVyIGlucHV0LlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3JDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEZhY2luZ0RpcmVjdGlvbikgfSlcclxuICAgIGluaXRpYWxGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGlkbGVBbmltYXRpb25OYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBtb3ZlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIF9pZGxlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9tb3ZlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgd2Fsa1JpZ2h0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgd2Fsa0xlZnRBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtVcEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa191cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtEb3duQW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaWRsZUFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfc3RhbmRieVwiOyBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0OiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0xXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2xlZnQ6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja191cDogc3RyaW5nID0gXCJhdHRhY2tfdXAtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0XzI6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfbGVmdF8yOiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfdXBfMjogc3RyaW5nID0gXCJhdHRhY2tfdXAtMlwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duXzI6IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tMlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfcmlnaHRfMzogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19sZWZ0XzM6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja191cF8zOiBzdHJpbmcgPSBcImF0dGFja191cC0zXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2Rvd25fMzogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0zXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGRlYXRoX3JpZ2h0OiBzdHJpbmcgPSBcImRlYXRoX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfbGVmdDogc3RyaW5nID0gXCJkZWF0aF9sZWZ0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfdXA6IHN0cmluZyA9IFwiZGVhdGhfdXBcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBkZWF0aF9kb3duOiBzdHJpbmcgPSBcImRlYXRoX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaHVydF9yaWdodDogc3RyaW5nID0gXCJodXJ0X3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaHVydF9sZWZ0OiBzdHJpbmcgPSBcImh1cnRfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfdXA6IHN0cmluZyA9IFwiaHVydF91cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfZG93bjogc3RyaW5nID0gXCJodXJ0X2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgY29tYm9fcmlnaHRfMTogc3RyaW5nID0gXCJjb21iby0xX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgY29tYm9fbGVmdF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX3VwXzE6IHN0cmluZyA9IFwiY29tYm8tMV91cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX2Rvd25fMTogc3RyaW5nID0gXCJjb21iby0xX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlU3BlZWQgPSA2MDsgXHJcblxyXG4gICAgcHVibGljIG1vdmVBeGlzWCA9IDA7XHJcbiAgICBwdWJsaWMgbW92ZUF4aXNZID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9wbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSBfZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uRG93bjsgLy8g6aCQ6Kit5pyd5LiLXHJcbiAgICBwcml2YXRlIF9sYXN0QW5pbTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIGNvbWJvc3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29tYm90aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBjb21ib0ludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbW92ZUF4aXMyRCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5tb3ZlQXhpc1gsIHRoaXMubW92ZUF4aXNZKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uKSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLkFuaW1hdGlvbiBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmlnaWRib2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5fcmlnaWRib2R5KSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLlJpZ2lkQm9keSBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCAmJiBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5faWRsZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmlkbGVBbmltYXRpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLm1vdmVBbmltYXRpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLnBsYXkodGhpcy5pZGxlQW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vbignZmluaXNoZWQnLCB0aGlzLm9uQW5pbUZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkRpZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvc3RlcCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvdGltZXIgPj0gdGhpcy5jb21ib0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0U291cmNlICkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmNvbWJvKCkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNYID0gdGhpcy5pbnB1dFNvdXJjZS5ob3Jpem9udGFsQXhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNZID0gdGhpcy5pbnB1dFNvdXJjZS52ZXJ0aWNhbEF4aXM7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMubW92ZUF4aXMyRC5tdWwodGhpcy5tb3ZlU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2lkYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkYm9keS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc19wbGF5aW5nPSAodGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuX2xhc3RBbmltKSAmJiB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5fbGFzdEFuaW0pLmlzUGxheWluZylcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDni4DmhYvmqZ/vvJrnp7vli5Ugb3Ig6Z2c5q2iXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlQXhpc1ggIT09IDAgfHwgdGhpcy5tb3ZlQXhpc1kgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLldhbGs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55pOa6Ly45YWl5pu05paw5pyd5ZCRXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubW92ZUF4aXNYKSA+IE1hdGguYWJzKHRoaXMubW92ZUF4aXNZKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWCA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uUmlnaHQgOiBGYWNpbmdEaXJlY3Rpb24uTGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWSA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uVXAgOiBGYWNpbmdEaXJlY3Rpb24uRG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc19wbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc3dhbGtpbmcoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyDpgJnoo6Hlj6/ku6XmoLnmk5rmjInpjbXop7jnmbzmlLvmk4rnrYnni4DmhYtcclxuICAgICAgICAgICAgICAgIGlmKCFpc19wbGF5aW5nIHx8ICF0aGlzLmluY29tYm8oKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrPT09QnV0dG9uU3RhdGUuUHJlc3NlZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2s7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazFzb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrMj09PUJ1dHRvblN0YXRlLlByZXNzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrMnNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5pbnB1dFNvdXJjZS5hdHRhY2szPT09QnV0dG9uU3RhdGUuUHJlc3NlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2szc291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRTb3VyY2UuZ2V0aHVydD09PUJ1dHRvblN0YXRlLlByZXNzZWQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSHVydDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS50YWtlRGFtYWdlKDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0U291cmNlLl94S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvbWJvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDni4DmhYsr5pa55ZCR5rG65a6a5YuV55WrXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSB0aGlzLmdldEFuaW1OYW1lKHRoaXMuX3BsYXllclN0YXRlLCB0aGlzLl9mYWNpbmcpO1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK9jb21ibyDni4DmhYsg5pKt5pS+5YuV55Wr55u05YiwIGNvbWJvIOe1kOadn1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbiAmJiBhbmltTmFtZSAmJiBhbmltTmFtZSAhPT0gdGhpcy5fbGFzdEFuaW0gJiYgIXRoaXMuc3RvcHVwZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbGFzdEFuaW0sYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0QW5pbSA9IGFuaW1OYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fcGxheWVyU3RhdGUsdGhpcy5fbGFzdEFuaW0gICx0aGlzLmNvbWJvc3RlcCwgdGhpcy5jb21ib3RpbWVyKTtcclxuXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0QW5pbU5hbWUoc3RhdGU6IFBsYXllclN0YXRlLCBmYWNpbmc6IEZhY2luZ0RpcmVjdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQ29tYm9fMTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuY29tYm9fcmlnaHRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmNvbWJvX2xlZnRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmNvbWJvX3VwXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5jb21ib19kb3duXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5XYWxrOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy53YWxrUmlnaHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy53YWxrTGVmdEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLndhbGtVcEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLndhbGtEb3duQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuSWRsZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZGxlQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2s6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrMjpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuYXR0YWNrX3JpZ2h0XzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdF8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5hdHRhY2tfZG93bl8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodF8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnRfMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cF8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd25fMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5IdXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5odXJ0X3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuaHVydF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuaHVydF91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmh1cnRfZG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkRpZTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuZGVhdGhfcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5kZWF0aF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuZGVhdGhfdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5kZWF0aF9kb3duO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICBwcml2YXRlIG9uQW5pbUZpbmlzaGVkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2sgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazIgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkh1cnQgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEgXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdEFuaW0gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3B1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbU5hbWVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX3VwXzEsXHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9fZG93bl8xLFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX2xlZnRfMSxcclxuICAgICAgICAgICAgdGhpcy5jb21ib19yaWdodF8xXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGluY29tYm8oKXtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT1QbGF5ZXJTdGF0ZS5BdHRhY2sgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMiAmJiB0aGlzLmNvbWJvc3RlcCA9PT0gMSAmJiB0aGlzLmNvbWJvdGltZXIgPCB0aGlzLmNvbWJvSW50ZXJ2YWwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgJiYgdGhpcy5jb21ib3N0ZXAgPT09IDIgJiYgdGhpcy5jb21ib3RpbWVyIDwgdGhpcy5jb21ib0ludGVydmFsKXtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkNvbWJvXzE7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc3dhbGtpbmcoKXtcclxuICAgICAgICBjb25zdCBhbmltTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMud2Fsa0Rvd25BbmltYXRpb24sdGhpcy53YWxrTGVmdEFuaW1hdGlvbix0aGlzLndhbGtSaWdodEFuaW1hdGlvbix0aGlzLndhbGtVcEFuaW1hdGlvblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29kaWUoKXtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkRpZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICBsZXQgTWdyID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBNZ3IuRW5kR2FtZSgpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcbiAgICBcclxuXHJcbiJdfQ==