
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
        _this.moveSpeed = 20;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQWN0b3JDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25HLGlEQUE0QztBQUM1Qyx5REFBcUU7QUFHL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSyxXQVNKO0FBVEQsV0FBSyxXQUFXO0lBQ1osNkNBQUksQ0FBQTtJQUNKLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sbURBQU8sQ0FBQTtJQUNQLG1EQUFPLENBQUE7SUFDUCw2Q0FBSSxDQUFBO0lBQ0osMkNBQUcsQ0FBQTtJQUNILG1EQUFPLENBQUE7QUFDWCxDQUFDLEVBVEksV0FBVyxLQUFYLFdBQVcsUUFTZjtBQUVELElBQUssZUFLSjtBQUxELFdBQUssZUFBZTtJQUNoQix1REFBSyxDQUFBO0lBQ0wscURBQUksQ0FBQTtJQUNKLGlEQUFFLENBQUE7SUFDRixxREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxJLGVBQWUsS0FBZixlQUFlLFFBS25CO0FBRUQsU0FBUyxJQUFJLENBQUMsQ0FBUztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQ7OztHQUdHO0FBRUg7SUFBNkMsbUNBQVU7SUFBdkQ7UUFBQSxxRUEyVEM7UUF6VEcsNEJBQXNCLEdBQUcsZUFBZSxDQUFDLEtBQUss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LE1BQU0sQ0FBQzswREFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNKO0lBYWY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDTztJQXBHVCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBMlRuQztJQUFELHNCQUFDO0NBM1RELEFBMlRDLENBM1Q0QyxvQkFBVSxHQTJUdEQ7a0JBM1RvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vaW5wdXQvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBJSW5wdXRDb250cm9scywgQnV0dG9uU3RhdGUgfSBmcm9tIFwiLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xyXG5pbXBvcnQgIFBsYXllciAgICBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmVudW0gUGxheWVyU3RhdGV7XHJcbiAgICBJZGxlLFxyXG4gICAgV2FsayxcclxuICAgIEF0dGFjayxcclxuICAgIEF0dGFjazIsXHJcbiAgICBBdHRhY2szLFxyXG4gICAgSHVydCxcclxuICAgIERpZSAsXHJcbiAgICBDb21ib18xXHJcbn1cclxuXHJcbmVudW0gRmFjaW5nRGlyZWN0aW9uIHtcclxuICAgIFJpZ2h0LFxyXG4gICAgTGVmdCxcclxuICAgIFVwLFxyXG4gICAgRG93blxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduKHg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHggPiAwID8gMSA6IHggPCAwID8gLTEgOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzIG1vdmVtZW50IGFuZCBhY3Rpb25zIGZvciBlYWNoIGFjdG9yLlxyXG4gKiBUb2dnbGUgXCJVc2UgUGxheWVyIElucHV0XCIgdG8gcmVhZCBmcm9tIHBsYXllciBpbnB1dC5cclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShGYWNpbmdEaXJlY3Rpb24pIH0pXHJcbiAgICBpbml0aWFsRmFjaW5nRGlyZWN0aW9uID0gRmFjaW5nRGlyZWN0aW9uLlJpZ2h0O1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2FuaW1TdGF0ZTogY2MuQW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBpZGxlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgbW92ZUFuaW1hdGlvbk5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBfaWRsZUFuaW1TdGF0ZTogY2MuQW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbW92ZUFuaW1TdGF0ZTogY2MuQW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtSaWdodEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa19yaWdodFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtMZWZ0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2xlZnRcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICB3YWxrVXBBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfdXBcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICB3YWxrRG93bkFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa19kb3duXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGlkbGVBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3N0YW5kYnlcIjsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19yaWdodDogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19sZWZ0OiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTFcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfdXA6IHN0cmluZyA9IFwiYXR0YWNrX3VwLTFcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfZG93bjogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0xXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19yaWdodF8yOiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0yXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2xlZnRfMjogc3RyaW5nID0gXCJhdHRhY2tfbGVmdC0yXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3VwXzI6IHN0cmluZyA9IFwiYXR0YWNrX3VwLTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfZG93bl8yOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTJcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0XzM6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTNcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfbGVmdF8zOiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTNcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfdXBfMzogc3RyaW5nID0gXCJhdHRhY2tfdXAtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duXzM6IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tM1wiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBkZWF0aF9yaWdodDogc3RyaW5nID0gXCJkZWF0aF9yaWdodFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGRlYXRoX2xlZnQ6IHN0cmluZyA9IFwiZGVhdGhfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGRlYXRoX3VwOiBzdHJpbmcgPSBcImRlYXRoX3VwXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfZG93bjogc3RyaW5nID0gXCJkZWF0aF9kb3duXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfcmlnaHQ6IHN0cmluZyA9IFwiaHVydF9yaWdodFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfbGVmdDogc3RyaW5nID0gXCJodXJ0X2xlZnRcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBodXJ0X3VwOiBzdHJpbmcgPSBcImh1cnRfdXBcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBodXJ0X2Rvd246IHN0cmluZyA9IFwiaHVydF9kb3duXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX3JpZ2h0XzE6IHN0cmluZyA9IFwiY29tYm8tMV9yaWdodFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX2xlZnRfMTogc3RyaW5nID0gXCJjb21iby0xX2xlZnRcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBjb21ib191cF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfdXBcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBjb21ib19kb3duXzE6IHN0cmluZyA9IFwiY29tYm8tMV9kb3duXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZVNwZWVkID0gMjA7IFxyXG5cclxuICAgIHB1YmxpYyBtb3ZlQXhpc1ggPSAwO1xyXG4gICAgcHVibGljIG1vdmVBeGlzWSA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGxheWVyU3RhdGU6IFBsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcclxuICAgIHByaXZhdGUgX2ZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gRmFjaW5nRGlyZWN0aW9uLkRvd247IC8vIOmgkOioreacneS4i1xyXG4gICAgcHJpdmF0ZSBfbGFzdEFuaW06IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb21ib3N0ZXA6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvbWJvdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgY29tYm9JbnRlcnZhbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1vdmVBeGlzMkQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubW92ZUF4aXNYLCB0aGlzLm1vdmVBeGlzWSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2FuaW1hdGlvbikgY29uc29sZS53YXJuKGBBY3RvckNvbnRyb2xsZXI6IENvbXBvbmVudCBjYy5BbmltYXRpb24gbWlzc2luZyBvbiBub2RlICR7dGhpcy5ub2RlLm5hbWV9YCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JpZ2lkYm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXRoaXMuX3JpZ2lkYm9keSkgY29uc29sZS53YXJuKGBBY3RvckNvbnRyb2xsZXI6IENvbXBvbmVudCBjYy5SaWdpZEJvZHkgbWlzc2luZyBvbiBub2RlICR7dGhpcy5ub2RlLm5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQgJiYgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkbGVBbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5pZGxlQW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdmVBbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5tb3ZlQW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5wbGF5KHRoaXMuaWRsZUFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24ub24oJ2ZpbmlzaGVkJywgdGhpcy5vbkFuaW1GaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5EaWUpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jb21ib3N0ZXAgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21ib3RpbWVyID49IHRoaXMuY29tYm9JbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dFNvdXJjZSApIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5jb21ibygpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVBeGlzWCA9IHRoaXMuaW5wdXRTb3VyY2UuaG9yaXpvbnRhbEF4aXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVBeGlzWSA9IHRoaXMuaW5wdXRTb3VyY2UudmVydGljYWxBeGlzO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLm1vdmVBeGlzMkQubXVsKHRoaXMubW92ZVNwZWVkKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yaWdpZGJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yaWdpZGJvZHkubGluZWFyVmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXNfcGxheWluZz0gKHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLl9sYXN0QW5pbSkgJiYgdGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuX2xhc3RBbmltKS5pc1BsYXlpbmcpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g54uA5oWL5qmf77ya56e75YuVIG9yIOmdnOatolxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZUF4aXNYICE9PSAwIHx8IHRoaXMubW92ZUF4aXNZICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5XYWxrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaTmui8uOWFpeabtOaWsOacneWQkVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLm1vdmVBeGlzWCkgPiBNYXRoLmFicyh0aGlzLm1vdmVBeGlzWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFjaW5nID0gdGhpcy5tb3ZlQXhpc1ggPiAwID8gRmFjaW5nRGlyZWN0aW9uLlJpZ2h0IDogRmFjaW5nRGlyZWN0aW9uLkxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFjaW5nID0gdGhpcy5tb3ZlQXhpc1kgPiAwID8gRmFjaW5nRGlyZWN0aW9uLlVwIDogRmFjaW5nRGlyZWN0aW9uLkRvd247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNfcGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXN3YWxraW5nKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g6YCZ6KOh5Y+v5Lul5qC55pOa5oyJ6Y216Ke455m85pS75pOK562J54uA5oWLXHJcbiAgICAgICAgICAgICAgICBpZighaXNfcGxheWluZyB8fCAhdGhpcy5pbmNvbWJvKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0U291cmNlLmF0dGFjaz09PUJ1dHRvblN0YXRlLlByZXNzZWQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2sxc291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmlucHV0U291cmNlLmF0dGFjazI9PT1CdXR0b25TdGF0ZS5QcmVzc2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2syO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazJzb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrMz09PUJ1dHRvblN0YXRlLlByZXNzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrM3NvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0U291cmNlLmdldGh1cnQ9PT1CdXR0b25TdGF0ZS5QcmVzc2VkKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkh1cnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikudGFrZURhbWFnZSg1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFNvdXJjZS5feEtleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jb21ibygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g54uA5oWLK+aWueWQkeaxuuWumuWLleeVq1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1OYW1lID0gdGhpcy5nZXRBbmltTmFtZSh0aGlzLl9wbGF5ZXJTdGF0ZSwgdGhpcy5fZmFjaW5nKTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pivY29tYm8g54uA5oWLIOaSreaUvuWLleeVq+ebtOWIsCBjb21ibyDntZDmnZ9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24gJiYgYW5pbU5hbWUgJiYgYW5pbU5hbWUgIT09IHRoaXMuX2xhc3RBbmltICYmICF0aGlzLnN0b3B1cGRhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xhc3RBbmltLGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24ucGxheShhbmltTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdEFuaW0gPSBhbmltTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3BsYXllclN0YXRlLHRoaXMuX2xhc3RBbmltICAsdGhpcy5jb21ib3N0ZXAsIHRoaXMuY29tYm90aW1lcik7XHJcblxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdldEFuaW1OYW1lKHN0YXRlOiBQbGF5ZXJTdGF0ZSwgZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkNvbWJvXzE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmNvbWJvX3JpZ2h0XzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5jb21ib19sZWZ0XzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5jb21ib191cF8xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuY29tYm9fZG93bl8xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuV2FsazpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMud2Fsa1JpZ2h0QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMud2Fsa0xlZnRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy53YWxrVXBBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy53YWxrRG93bkFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLklkbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5hdHRhY2tfcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmF0dGFja19kb3duO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodF8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnRfMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cF8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd25fMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2szOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5hdHRhY2tfcmlnaHRfMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0XzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5hdHRhY2tfdXBfMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmF0dGFja19kb3duXzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuSHVydDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuaHVydF9yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmh1cnRfbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmh1cnRfdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5odXJ0X2Rvd247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5EaWU6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmRlYXRoX3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuZGVhdGhfbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmRlYXRoX3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuZGVhdGhfZG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgcHJpdmF0ZSBvbkFuaW1GaW5pc2hlZCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2syIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2szIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5IdXJ0IHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5Db21ib18xIFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RBbmltID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdG9wdXBkYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1OYW1lcyA9IFtcclxuICAgICAgICAgICAgdGhpcy5jb21ib191cF8xLFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX2Rvd25fMSxcclxuICAgICAgICAgICAgdGhpcy5jb21ib19sZWZ0XzEsXHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9fcmlnaHRfMVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBhbmltTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pc1BsYXlpbmcpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpbmNvbWJvKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5Db21ib18xKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09UGxheWVyU3RhdGUuQXR0YWNrICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazIgJiYgdGhpcy5jb21ib3N0ZXAgPT09IDEgJiYgdGhpcy5jb21ib3RpbWVyIDwgdGhpcy5jb21ib0ludGVydmFsKXtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2szICYmIHRoaXMuY29tYm9zdGVwID09PSAyICYmIHRoaXMuY29tYm90aW1lciA8IHRoaXMuY29tYm9JbnRlcnZhbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMztcclxuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5Db21ib18xO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXN3YWxraW5nKCl7XHJcbiAgICAgICAgY29uc3QgYW5pbU5hbWVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLndhbGtEb3duQW5pbWF0aW9uLHRoaXMud2Fsa0xlZnRBbmltYXRpb24sdGhpcy53YWxrUmlnaHRBbmltYXRpb24sdGhpcy53YWxrVXBBbmltYXRpb25cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBhbmltTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pc1BsYXlpbmcpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvZGllKCl7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5EaWU7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbn1cclxuICAgIFxyXG5cclxuIl19