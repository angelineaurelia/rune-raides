
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FjdG9yQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUduRyxpREFBNEM7QUFDNUMseURBQXFFO0FBRy9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUssV0FTSjtBQVRELFdBQUssV0FBVztJQUNaLDZDQUFJLENBQUE7SUFDSiw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLG1EQUFPLENBQUE7SUFDUCxtREFBTyxDQUFBO0lBQ1AsNkNBQUksQ0FBQTtJQUNKLDJDQUFHLENBQUE7SUFDSCxtREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQVRJLFdBQVcsS0FBWCxXQUFXLFFBU2Y7QUFFRCxJQUFLLGVBS0o7QUFMRCxXQUFLLGVBQWU7SUFDaEIsdURBQUssQ0FBQTtJQUNMLHFEQUFJLENBQUE7SUFDSixpREFBRSxDQUFBO0lBQ0YscURBQUksQ0FBQTtBQUNSLENBQUMsRUFMSSxlQUFlLEtBQWYsZUFBZSxRQUtuQjtBQUVELFNBQVMsSUFBSSxDQUFDLENBQVM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVEOzs7R0FHRztBQUVIO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBK1RDO1FBN1RHLDRCQUFzQixHQUFHLGVBQWUsQ0FBQyxLQUFLLENB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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1k7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNKO0lBYWY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDTztJQXBHVCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBK1RuQztJQUFELHNCQUFDO0NBL1RELEFBK1RDLENBL1Q0QyxvQkFBVSxHQStUdEQ7a0JBL1RvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9pbnB1dC9Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBJSW5wdXRDb250cm9scywgQnV0dG9uU3RhdGUgfSBmcm9tIFwiLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xuaW1wb3J0ICBQbGF5ZXIgICAgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5lbnVtIFBsYXllclN0YXRle1xuICAgIElkbGUsXG4gICAgV2FsayxcbiAgICBBdHRhY2ssXG4gICAgQXR0YWNrMixcbiAgICBBdHRhY2szLFxuICAgIEh1cnQsXG4gICAgRGllICxcbiAgICBDb21ib18xXG59XG5cbmVudW0gRmFjaW5nRGlyZWN0aW9uIHtcbiAgICBSaWdodCxcbiAgICBMZWZ0LFxuICAgIFVwLFxuICAgIERvd25cbn1cblxuZnVuY3Rpb24gc2lnbih4OiBudW1iZXIpIHtcbiAgICByZXR1cm4geCA+IDAgPyAxIDogeCA8IDAgPyAtMSA6IDA7XG59XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzIG1vdmVtZW50IGFuZCBhY3Rpb25zIGZvciBlYWNoIGFjdG9yLlxuICogVG9nZ2xlIFwiVXNlIFBsYXllciBJbnB1dFwiIHRvIHJlYWQgZnJvbSBwbGF5ZXIgaW5wdXQuXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvckNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEZhY2luZ0RpcmVjdGlvbikgfSlcbiAgICBpbml0aWFsRmFjaW5nRGlyZWN0aW9uID0gRmFjaW5nRGlyZWN0aW9uLlJpZ2h0O1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcblxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIF9hbmltU3RhdGU6IGNjLkFuaW1hdGlvblN0YXRlID0gbnVsbDtcbiAgICBwcml2YXRlIF9yaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGlkbGVBbmltYXRpb25OYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBtb3ZlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIHByaXZhdGUgX2lkbGVBbmltU3RhdGU6IGNjLkFuaW1hdGlvblN0YXRlID0gbnVsbDtcbiAgICBwcml2YXRlIF9tb3ZlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICB3YWxrUmlnaHRBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfcmlnaHRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIHdhbGtMZWZ0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2xlZnRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIHdhbGtVcEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa191cFwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgd2Fsa0Rvd25BbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfZG93blwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBpZGxlQW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl9zdGFuZGJ5XCI7IFxuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfcmlnaHQ6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTFcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19sZWZ0OiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTFcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja191cDogc3RyaW5nID0gXCJhdHRhY2tfdXAtMVwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2Rvd246IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tMVwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfcmlnaHRfMjogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtMlwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2xlZnRfMjogc3RyaW5nID0gXCJhdHRhY2tfbGVmdC0yXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfdXBfMjogc3RyaW5nID0gXCJhdHRhY2tfdXAtMlwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2Rvd25fMjogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0yXCI7XG5cbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19yaWdodF8zOiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0zXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfbGVmdF8zOiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTNcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja191cF8zOiBzdHJpbmcgPSBcImF0dGFja191cC0zXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfZG93bl8zOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTNcIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgZGVhdGhfcmlnaHQ6IHN0cmluZyA9IFwiZGVhdGhfcmlnaHRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGRlYXRoX2xlZnQ6IHN0cmluZyA9IFwiZGVhdGhfbGVmdFwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgZGVhdGhfdXA6IHN0cmluZyA9IFwiZGVhdGhfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGRlYXRoX2Rvd246IHN0cmluZyA9IFwiZGVhdGhfZG93blwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBodXJ0X3JpZ2h0OiBzdHJpbmcgPSBcImh1cnRfcmlnaHRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGh1cnRfbGVmdDogc3RyaW5nID0gXCJodXJ0X2xlZnRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGh1cnRfdXA6IHN0cmluZyA9IFwiaHVydF91cFwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgaHVydF9kb3duOiBzdHJpbmcgPSBcImh1cnRfZG93blwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBjb21ib19yaWdodF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfcmlnaHRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGNvbWJvX2xlZnRfMTogc3RyaW5nID0gXCJjb21iby0xX2xlZnRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGNvbWJvX3VwXzE6IHN0cmluZyA9IFwiY29tYm8tMV91cFwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgY29tYm9fZG93bl8xOiBzdHJpbmcgPSBcImNvbWJvLTFfZG93blwiO1xuXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1vdmVTcGVlZCA9IDYwOyBcblxuICAgIHB1YmxpYyBtb3ZlQXhpc1ggPSAwO1xuICAgIHB1YmxpYyBtb3ZlQXhpc1kgPSAwO1xuXG4gICAgcHJpdmF0ZSBfcGxheWVyU3RhdGU6IFBsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcbiAgICBwcml2YXRlIF9mYWNpbmc6IEZhY2luZ0RpcmVjdGlvbiA9IEZhY2luZ0RpcmVjdGlvbi5Eb3duOyAvLyDpoJDoqK3mnJ3kuItcbiAgICBwcml2YXRlIF9sYXN0QW5pbTogc3RyaW5nID0gXCJcIjtcblxuICAgIHByaXZhdGUgY29tYm9zdGVwOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29tYm90aW1lcjogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBjb21ib0ludGVydmFsOiBudW1iZXIgPSAxO1xuXG4gICAgcHVibGljIGdldCBtb3ZlQXhpczJEKCkge1xuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5tb3ZlQXhpc1gsIHRoaXMubW92ZUF4aXNZKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKCF0aGlzLl9hbmltYXRpb24pIGNvbnNvbGUud2FybihgQWN0b3JDb250cm9sbGVyOiBDb21wb25lbnQgY2MuQW5pbWF0aW9uIG1pc3Npbmcgb24gbm9kZSAke3RoaXMubm9kZS5uYW1lfWApO1xuXG4gICAgICAgIHRoaXMuX3JpZ2lkYm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgaWYgKCF0aGlzLl9yaWdpZGJvZHkpIGNvbnNvbGUud2FybihgQWN0b3JDb250cm9sbGVyOiBDb21wb25lbnQgY2MuUmlnaWRCb2R5IG1pc3Npbmcgb24gbm9kZSAke3RoaXMubm9kZS5uYW1lfWApO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCAmJiBzdXBlci5zdGFydCgpO1xuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9pZGxlQW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuaWRsZUFuaW1hdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fbW92ZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLm1vdmVBbmltYXRpb25OYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5wbGF5KHRoaXMuaWRsZUFuaW1hdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLm9uKCdmaW5pc2hlZCcsIHRoaXMub25BbmltRmluaXNoZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkRpZSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5jb21ib3N0ZXAgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvdGltZXIgPj0gdGhpcy5jb21ib0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRTb3VyY2UgKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmNvbWJvKCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVBeGlzWCA9IHRoaXMuaW5wdXRTb3VyY2UuaG9yaXpvbnRhbEF4aXM7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQXhpc1kgPSB0aGlzLmlucHV0U291cmNlLnZlcnRpY2FsQXhpcztcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLm1vdmVBeGlzMkQubXVsKHRoaXMubW92ZVNwZWVkKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmlnaWRib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkYm9keS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBpc19wbGF5aW5nPSAodGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuX2xhc3RBbmltKSAmJiB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5fbGFzdEFuaW0pLmlzUGxheWluZylcblxuICAgICAgICAgICAgICAgIC8vIOeLgOaFi+apn++8muenu+WLlSBvciDpnZzmraJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlQXhpc1ggIT09IDAgfHwgdGhpcy5tb3ZlQXhpc1kgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5XYWxrO1xuICAgICAgICAgICAgICAgICAgICAvLyDmoLnmk5rovLjlhaXmm7TmlrDmnJ3lkJFcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubW92ZUF4aXNYKSA+IE1hdGguYWJzKHRoaXMubW92ZUF4aXNZKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFjaW5nID0gdGhpcy5tb3ZlQXhpc1ggPiAwID8gRmFjaW5nRGlyZWN0aW9uLlJpZ2h0IDogRmFjaW5nRGlyZWN0aW9uLkxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWSA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uVXAgOiBGYWNpbmdEaXJlY3Rpb24uRG93bjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzX3BsYXlpbmcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXN3YWxraW5nKCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIOmAmeijoeWPr+S7peagueaTmuaMiemNteinuOeZvOaUu+aTiuetieeLgOaFi1xuICAgICAgICAgICAgICAgIGlmKCFpc19wbGF5aW5nIHx8ICF0aGlzLmluY29tYm8oKSl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0U291cmNlLmF0dGFjaz09PUJ1dHRvblN0YXRlLlByZXNzZWQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazFzb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmlucHV0U291cmNlLmF0dGFjazI9PT1CdXR0b25TdGF0ZS5QcmVzc2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrMnNvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrMz09PUJ1dHRvblN0YXRlLlByZXNzZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2szO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2szc291bmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0U291cmNlLmdldGh1cnQ9PT1CdXR0b25TdGF0ZS5QcmVzc2VkKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5IdXJ0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS50YWtlRGFtYWdlKDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFNvdXJjZS5feEtleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvbWJvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOeLgOaFiyvmlrnlkJHmsbrlrprli5XnlatcbiAgICAgICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSB0aGlzLmdldEFuaW1OYW1lKHRoaXMuX3BsYXllclN0YXRlLCB0aGlzLl9mYWNpbmcpO1xuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pivY29tYm8g54uA5oWLIOaSreaUvuWLleeVq+ebtOWIsCBjb21ibyDntZDmnZ9cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uICYmIGFuaW1OYW1lICYmIGFuaW1OYW1lICE9PSB0aGlzLl9sYXN0QW5pbSAmJiAhdGhpcy5zdG9wdXBkYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbGFzdEFuaW0sYW5pbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24ucGxheShhbmltTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RBbmltID0gYW5pbU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3BsYXllclN0YXRlLHRoaXMuX2xhc3RBbmltICAsdGhpcy5jb21ib3N0ZXAsIHRoaXMuY29tYm90aW1lcik7XG5cbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZ2V0QW5pbU5hbWUoc3RhdGU6IFBsYXllclN0YXRlLCBmYWNpbmc6IEZhY2luZ0RpcmVjdGlvbik6IHN0cmluZyB7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5Db21ib18xOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmNvbWJvX3JpZ2h0XzE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuY29tYm9fbGVmdF8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmNvbWJvX3VwXzE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuY29tYm9fZG93bl8xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuV2FsazpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy53YWxrUmlnaHRBbmltYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMud2Fsa0xlZnRBbmltYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMud2Fsa1VwQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLndhbGtEb3duQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuSWRsZTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRsZUFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5hdHRhY2tfcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmF0dGFja19kb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2syOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodF8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0XzI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwXzI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd25fMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrMzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5hdHRhY2tfcmlnaHRfMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdF8zO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cF8zO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmF0dGFja19kb3duXzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkh1cnQ6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuaHVydF9yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5odXJ0X2xlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuaHVydF91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5odXJ0X2Rvd247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5EaWU6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuZGVhdGhfcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuZGVhdGhfbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5kZWF0aF91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5kZWF0aF9kb3duO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICBwcml2YXRlIG9uQW5pbUZpbmlzaGVkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjayB8fFxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazIgfHxcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2szIHx8XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuSHVydCB8fFxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEgXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xuICAgICAgICAgICAgdGhpcy5fbGFzdEFuaW0gPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3B1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1OYW1lcyA9IFtcbiAgICAgICAgICAgIHRoaXMuY29tYm9fdXBfMSxcbiAgICAgICAgICAgIHRoaXMuY29tYm9fZG93bl8xLFxuICAgICAgICAgICAgdGhpcy5jb21ib19sZWZ0XzEsXG4gICAgICAgICAgICB0aGlzLmNvbWJvX3JpZ2h0XzFcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYW5pbU5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pc1BsYXlpbmcpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5jb21ibygpe1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09UGxheWVyU3RhdGUuQXR0YWNrICkge1xuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAxO1xuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2syICYmIHRoaXMuY29tYm9zdGVwID09PSAxICYmIHRoaXMuY29tYm90aW1lciA8IHRoaXMuY29tYm9JbnRlcnZhbCl7XG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDI7XG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgJiYgdGhpcy5jb21ib3N0ZXAgPT09IDIgJiYgdGhpcy5jb21ib3RpbWVyIDwgdGhpcy5jb21ib0ludGVydmFsKXtcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMztcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkNvbWJvXzE7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzd2Fsa2luZygpe1xuICAgICAgICBjb25zdCBhbmltTmFtZXMgPSBbXG4gICAgICAgICAgICB0aGlzLndhbGtEb3duQW5pbWF0aW9uLHRoaXMud2Fsa0xlZnRBbmltYXRpb24sdGhpcy53YWxrUmlnaHRBbmltYXRpb24sdGhpcy53YWxrVXBBbmltYXRpb25cbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XG4gICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuaXNQbGF5aW5nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdvZGllKCl7XG4gICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuRGllO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgbGV0IE1nciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgICAgIE1nci5FbmRHYW1lKCk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICAgICAgXG59XG4gICAgXG5cbiJdfQ==