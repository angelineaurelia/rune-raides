"use strict";
cc._RF.push(module, '2ff4dcmThZMKKaXEWb71524', 'KeyboardControls');
// scripts/input/KeyboardControls.ts

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
var IInputControls_1 = require("./IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KeyboardControls = /** @class */ (function (_super) {
    __extends(KeyboardControls, _super);
    function KeyboardControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hAxis = 0;
        _this._vAxis = 0;
        _this._zKey = IInputControls_1.ButtonState.Rest;
        _this._xKey = IInputControls_1.ButtonState.Rest;
        _this._cKey = IInputControls_1.ButtonState.Rest;
        _this._vKey = IInputControls_1.ButtonState.Rest;
        return _this;
    }
    Object.defineProperty(KeyboardControls.prototype, "horizontalAxis", {
        get: function () { return this._hAxis; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "verticalAxis", {
        get: function () { return this._vAxis; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack", {
        get: function () { return this._zKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "interact", {
        get: function () { return this._zKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "gethurt", {
        get: function () { return this._xKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack2", {
        get: function () { return this._cKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack3", {
        get: function () { return this._vKey; },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    KeyboardControls.prototype.onLoad = function () { };
    KeyboardControls.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    // update (dt) {}
    KeyboardControls.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis = -1;
                break;
            case cc.macro.KEY.d:
                this._hAxis = 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis = 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis = -1;
                break;
            case cc.macro.KEY.z:
                if (this._zKey === IInputControls_1.ButtonState.Rest || this._zKey === IInputControls_1.ButtonState.Released) {
                    this._zKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._zKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.x:
                if (this._xKey === IInputControls_1.ButtonState.Rest || this._xKey === IInputControls_1.ButtonState.Released) {
                    this._xKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._xKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.c:
                if (this._cKey === IInputControls_1.ButtonState.Rest || this._cKey === IInputControls_1.ButtonState.Released) {
                    this._cKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._cKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.v:
                if (this._vKey === IInputControls_1.ButtonState.Rest || this._vKey === IInputControls_1.ButtonState.Released) {
                    this._vKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._vKey = IInputControls_1.ButtonState.Held;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    };
    KeyboardControls.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis += 1;
                break;
            case cc.macro.KEY.d:
                this._hAxis -= 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis -= 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis += 1;
                break;
            case cc.macro.KEY.z:
                if (this._zKey === IInputControls_1.ButtonState.Pressed || this._zKey === IInputControls_1.ButtonState.Held) {
                    this._zKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._zKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.x:
                if (this._xKey === IInputControls_1.ButtonState.Pressed || this._xKey === IInputControls_1.ButtonState.Held) {
                    this._xKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._xKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.c:
                if (this._cKey === IInputControls_1.ButtonState.Pressed || this._cKey === IInputControls_1.ButtonState.Held) {
                    this._cKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._cKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.v:
                if (this._vKey === IInputControls_1.ButtonState.Pressed || this._vKey === IInputControls_1.ButtonState.Held) {
                    this._vKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._vKey = IInputControls_1.ButtonState.Rest;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    };
    KeyboardControls = __decorate([
        ccclass
    ], KeyboardControls);
    return KeyboardControls;
}(cc.Component));
exports.default = KeyboardControls;
function clamp(value, a, b) {
    if (a === void 0) { a = -1; }
    if (b === void 0) { b = 1; }
    if (value < a)
        return a;
    if (value > b)
        return b;
    return value;
}

cc._RF.pop();