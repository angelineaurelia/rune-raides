
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FjdG9yQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUduRyxpREFBNEM7QUFDNUMseURBQXFFO0FBRy9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUssV0FTSjtBQVRELFdBQUssV0FBVztJQUNaLDZDQUFJLENBQUE7SUFDSiw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLG1EQUFPLENBQUE7SUFDUCxtREFBTyxDQUFBO0lBQ1AsNkNBQUksQ0FBQTtJQUNKLDJDQUFHLENBQUE7SUFDSCxtREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQVRJLFdBQVcsS0FBWCxXQUFXLFFBU2Y7QUFFRCxJQUFLLGVBS0o7QUFMRCxXQUFLLGVBQWU7SUFDaEIsdURBQUssQ0FBQTtJQUNMLHFEQUFJLENBQUE7SUFDSixpREFBRSxDQUFBO0lBQ0YscURBQUksQ0FBQTtBQUNSLENBQUMsRUFMSSxlQUFlLEtBQWYsZUFBZSxRQUtuQjtBQUVELFNBQVMsSUFBSSxDQUFDLENBQVM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVEOzs7R0FHRztBQUVIO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBMlRDO1FBelRHLDRCQUFzQixHQUFHLGVBQWUsQ0FBQyxLQUFLLENB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QUFNLENBQUM7MERBQ29CO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSjtJQWFmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ087SUFwR1QsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTJUbkM7SUFBRCxzQkFBQztDQTNURCxBQTJUQyxDQTNUNEMsb0JBQVUsR0EyVHREO2tCQTNUb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vaW5wdXQvQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMsIEJ1dHRvblN0YXRlIH0gZnJvbSBcIi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCAgUGxheWVyICAgIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZW51bSBQbGF5ZXJTdGF0ZXtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgQXR0YWNrLFxuICAgIEF0dGFjazIsXG4gICAgQXR0YWNrMyxcbiAgICBIdXJ0LFxuICAgIERpZSAsXG4gICAgQ29tYm9fMVxufVxuXG5lbnVtIEZhY2luZ0RpcmVjdGlvbiB7XG4gICAgUmlnaHQsXG4gICAgTGVmdCxcbiAgICBVcCxcbiAgICBEb3duXG59XG5cbmZ1bmN0aW9uIHNpZ24oeDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHggPiAwID8gMSA6IHggPCAwID8gLTEgOiAwO1xufVxuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgaW1wbGVtZW50cyBtb3ZlbWVudCBhbmQgYWN0aW9ucyBmb3IgZWFjaCBhY3Rvci5cbiAqIFRvZ2dsZSBcIlVzZSBQbGF5ZXIgSW5wdXRcIiB0byByZWFkIGZyb20gcGxheWVyIGlucHV0LlxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3JDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShGYWNpbmdEaXJlY3Rpb24pIH0pXG4gICAgaW5pdGlhbEZhY2luZ0RpcmVjdGlvbiA9IEZhY2luZ0RpcmVjdGlvbi5SaWdodDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgXG5cbiAgICBwcml2YXRlIF9hbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBpZGxlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgbW92ZUFuaW1hdGlvbk5hbWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIF9pZGxlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbW92ZUFuaW1TdGF0ZTogY2MuQW5pbWF0aW9uU3RhdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgd2Fsa1JpZ2h0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICB3YWxrTGVmdEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa19sZWZ0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICB3YWxrVXBBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIHdhbGtEb3duQW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgaWRsZUFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfc3RhbmRieVwiOyBcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX3JpZ2h0OiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0xXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfbGVmdDogc3RyaW5nID0gXCJhdHRhY2tfbGVmdC0xXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfdXA6IHN0cmluZyA9IFwiYXR0YWNrX3VwLTFcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19kb3duOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTFcIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX3JpZ2h0XzI6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTJcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19sZWZ0XzI6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtMlwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX3VwXzI6IHN0cmluZyA9IFwiYXR0YWNrX3VwLTJcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19kb3duXzI6IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tMlwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfcmlnaHRfMzogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtM1wiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2xlZnRfMzogc3RyaW5nID0gXCJhdHRhY2tfbGVmdC0zXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfdXBfMzogc3RyaW5nID0gXCJhdHRhY2tfdXAtM1wiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2Rvd25fMzogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0zXCI7XG5cbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGRlYXRoX3JpZ2h0OiBzdHJpbmcgPSBcImRlYXRoX3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBkZWF0aF9sZWZ0OiBzdHJpbmcgPSBcImRlYXRoX2xlZnRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGRlYXRoX3VwOiBzdHJpbmcgPSBcImRlYXRoX3VwXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBkZWF0aF9kb3duOiBzdHJpbmcgPSBcImRlYXRoX2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgaHVydF9yaWdodDogc3RyaW5nID0gXCJodXJ0X3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBodXJ0X2xlZnQ6IHN0cmluZyA9IFwiaHVydF9sZWZ0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBodXJ0X3VwOiBzdHJpbmcgPSBcImh1cnRfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGh1cnRfZG93bjogc3RyaW5nID0gXCJodXJ0X2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgY29tYm9fcmlnaHRfMTogc3RyaW5nID0gXCJjb21iby0xX3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBjb21ib19sZWZ0XzE6IHN0cmluZyA9IFwiY29tYm8tMV9sZWZ0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBjb21ib191cF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGNvbWJvX2Rvd25fMTogc3RyaW5nID0gXCJjb21iby0xX2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtb3ZlU3BlZWQgPSAyMDsgXG5cbiAgICBwdWJsaWMgbW92ZUF4aXNYID0gMDtcbiAgICBwdWJsaWMgbW92ZUF4aXNZID0gMDtcblxuICAgIHByaXZhdGUgX3BsYXllclN0YXRlOiBQbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSBfZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uRG93bjsgLy8g6aCQ6Kit5pyd5LiLXG4gICAgcHJpdmF0ZSBfbGFzdEFuaW06IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIGNvbWJvc3RlcDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbWJvdGltZXI6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgY29tYm9JbnRlcnZhbDogbnVtYmVyID0gMTtcblxuICAgIHB1YmxpYyBnZXQgbW92ZUF4aXMyRCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubW92ZUF4aXNYLCB0aGlzLm1vdmVBeGlzWSk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uKSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLkFuaW1hdGlvbiBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcblxuICAgICAgICB0aGlzLl9yaWdpZGJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmICghdGhpcy5fcmlnaWRib2R5KSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLlJpZ2lkQm9keSBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQgJiYgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5faWRsZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmlkbGVBbmltYXRpb25OYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX21vdmVBbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5tb3ZlQW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9hbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24ucGxheSh0aGlzLmlkbGVBbmltYXRpb25OYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vbignZmluaXNoZWQnLCB0aGlzLm9uQW5pbUZpbmlzaGVkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5EaWUpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuY29tYm9zdGVwID4gMCl7XG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgKz0gZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21ib3RpbWVyID49IHRoaXMuY29tYm9JbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlucHV0U291cmNlICkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5jb21ibygpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQXhpc1ggPSB0aGlzLmlucHV0U291cmNlLmhvcml6b250YWxBeGlzO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNZID0gdGhpcy5pbnB1dFNvdXJjZS52ZXJ0aWNhbEF4aXM7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gdGhpcy5tb3ZlQXhpczJELm11bCh0aGlzLm1vdmVTcGVlZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2lkYm9keSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yaWdpZGJvZHkubGluZWFyVmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaXNfcGxheWluZz0gKHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLl9sYXN0QW5pbSkgJiYgdGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuX2xhc3RBbmltKS5pc1BsYXlpbmcpXG5cbiAgICAgICAgICAgICAgICAvLyDni4DmhYvmqZ/vvJrnp7vli5Ugb3Ig6Z2c5q2iXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZUF4aXNYICE9PSAwIHx8IHRoaXMubW92ZUF4aXNZICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuV2FsaztcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55pOa6Ly45YWl5pu05paw5pyd5ZCRXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLm1vdmVBeGlzWCkgPiBNYXRoLmFicyh0aGlzLm1vdmVBeGlzWSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhY2luZyA9IHRoaXMubW92ZUF4aXNYID4gMCA/IEZhY2luZ0RpcmVjdGlvbi5SaWdodCA6IEZhY2luZ0RpcmVjdGlvbi5MZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFjaW5nID0gdGhpcy5tb3ZlQXhpc1kgPiAwID8gRmFjaW5nRGlyZWN0aW9uLlVwIDogRmFjaW5nRGlyZWN0aW9uLkRvd247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc19wbGF5aW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzd2Fsa2luZygpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAvLyDpgJnoo6Hlj6/ku6XmoLnmk5rmjInpjbXop7jnmbzmlLvmk4rnrYnni4DmhYtcbiAgICAgICAgICAgICAgICBpZighaXNfcGxheWluZyB8fCAhdGhpcy5pbmNvbWJvKCkpe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dFNvdXJjZS5hdHRhY2s9PT1CdXR0b25TdGF0ZS5QcmVzc2VkKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2s7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2sxc291bmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5pbnB1dFNvdXJjZS5hdHRhY2syPT09QnV0dG9uU3RhdGUuUHJlc3NlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazJzb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmlucHV0U291cmNlLmF0dGFjazM9PT1CdXR0b25TdGF0ZS5QcmVzc2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrM3NvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFNvdXJjZS5nZXRodXJ0PT09QnV0dG9uU3RhdGUuUHJlc3NlZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSHVydDsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikudGFrZURhbWFnZSg1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTb3VyY2UuX3hLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jb21ibygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDni4DmhYsr5pa55ZCR5rG65a6a5YuV55WrXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1OYW1lID0gdGhpcy5nZXRBbmltTmFtZSh0aGlzLl9wbGF5ZXJTdGF0ZSwgdGhpcy5fZmFjaW5nKTtcbiAgICAgICAgICAgICAgICAvL+WmguaenOaYr2NvbWJvIOeLgOaFiyDmkq3mlL7li5Xnlavnm7TliLAgY29tYm8g57WQ5p2fXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbiAmJiBhbmltTmFtZSAmJiBhbmltTmFtZSAhPT0gdGhpcy5fbGFzdEFuaW0gJiYgIXRoaXMuc3RvcHVwZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2xhc3RBbmltLGFuaW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLnBsYXkoYW5pbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0QW5pbSA9IGFuaW1OYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9wbGF5ZXJTdGF0ZSx0aGlzLl9sYXN0QW5pbSAgLHRoaXMuY29tYm9zdGVwLCB0aGlzLmNvbWJvdGltZXIpO1xuXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGdldEFuaW1OYW1lKHN0YXRlOiBQbGF5ZXJTdGF0ZSwgZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24pOiBzdHJpbmcge1xuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQ29tYm9fMTpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5jb21ib19yaWdodF8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmNvbWJvX2xlZnRfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5jb21ib191cF8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmNvbWJvX2Rvd25fMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLldhbGs6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMud2Fsa1JpZ2h0QW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLndhbGtMZWZ0QW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLndhbGtVcEFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy53YWxrRG93bkFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLklkbGU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkbGVBbmltYXRpb247XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2s6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuYXR0YWNrX3JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5hdHRhY2tfZG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrMjpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5hdHRhY2tfcmlnaHRfMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdF8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cF8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmF0dGFja19kb3duXzI7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazM6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuYXR0YWNrX3JpZ2h0XzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnRfMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5hdHRhY2tfdXBfMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5hdHRhY2tfZG93bl8zO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5IdXJ0OlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmh1cnRfcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuaHVydF9sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmh1cnRfdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuaHVydF9kb3duO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuRGllOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmRlYXRoX3JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmRlYXRoX2xlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuZGVhdGhfdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuZGVhdGhfZG93bjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgcHJpdmF0ZSBvbkFuaW1GaW5pc2hlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2sgfHxcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2syIHx8XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMyB8fFxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkh1cnQgfHxcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5Db21ib18xIFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RBbmltID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBhbmltTmFtZXMgPSBbXG4gICAgICAgICAgICB0aGlzLmNvbWJvX3VwXzEsXG4gICAgICAgICAgICB0aGlzLmNvbWJvX2Rvd25fMSxcbiAgICAgICAgICAgIHRoaXMuY29tYm9fbGVmdF8xLFxuICAgICAgICAgICAgdGhpcy5jb21ib19yaWdodF8xXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XG4gICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuaXNQbGF5aW5nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGluY29tYm8oKXtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5Db21ib18xKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PVBsYXllclN0YXRlLkF0dGFjayApIHtcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMTtcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMiAmJiB0aGlzLmNvbWJvc3RlcCA9PT0gMSAmJiB0aGlzLmNvbWJvdGltZXIgPCB0aGlzLmNvbWJvSW50ZXJ2YWwpe1xuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAyO1xuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2szICYmIHRoaXMuY29tYm9zdGVwID09PSAyICYmIHRoaXMuY29tYm90aW1lciA8IHRoaXMuY29tYm9JbnRlcnZhbCl7XG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDM7XG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5Db21ib18xO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc3dhbGtpbmcoKXtcbiAgICAgICAgY29uc3QgYW5pbU5hbWVzID0gW1xuICAgICAgICAgICAgdGhpcy53YWxrRG93bkFuaW1hdGlvbix0aGlzLndhbGtMZWZ0QW5pbWF0aW9uLHRoaXMud2Fsa1JpZ2h0QW5pbWF0aW9uLHRoaXMud2Fsa1VwQW5pbWF0aW9uXG4gICAgICAgIF07XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBhbmltTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb2RpZSgpe1xuICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkRpZTtcbiAgICB9XG4gICAgICAgIFxufVxuICAgIFxuXG4iXX0=