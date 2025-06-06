
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/KeyboardControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this._kKey = IInputControls_1.ButtonState.Rest;
        _this._xKey = IInputControls_1.ButtonState.Rest;
        _this._jKey = IInputControls_1.ButtonState.Rest;
        _this._lKey = IInputControls_1.ButtonState.Rest;
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
        get: function () { return this._kKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "interact", {
        get: function () { return this._kKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "gethurt", {
        get: function () { return this._xKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack2", {
        get: function () { return this._jKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack3", {
        get: function () { return this._lKey; },
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
                if (this._kKey === IInputControls_1.ButtonState.Rest || this._kKey === IInputControls_1.ButtonState.Released) {
                    this._kKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._kKey = IInputControls_1.ButtonState.Held;
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
                if (this._jKey === IInputControls_1.ButtonState.Rest || this._jKey === IInputControls_1.ButtonState.Released) {
                    this._jKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._jKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.v:
                if (this._lKey === IInputControls_1.ButtonState.Rest || this._lKey === IInputControls_1.ButtonState.Released) {
                    this._lKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._lKey = IInputControls_1.ButtonState.Held;
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
                if (this._kKey === IInputControls_1.ButtonState.Pressed || this._kKey === IInputControls_1.ButtonState.Held) {
                    this._kKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._kKey = IInputControls_1.ButtonState.Rest;
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
                if (this._jKey === IInputControls_1.ButtonState.Pressed || this._jKey === IInputControls_1.ButtonState.Held) {
                    this._jKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._jKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.v:
                if (this._lKey === IInputControls_1.ButtonState.Pressed || this._lKey === IInputControls_1.ButtonState.Held) {
                    this._lKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._lKey = IInputControls_1.ButtonState.Rest;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0tleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkcsbURBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQ1ksb0NBQVk7SUFEeEI7UUFBQSxxRUFpSUM7UUE3SFcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUduQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFJdEMsV0FBSyxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQztRQUd0QyxXQUFLLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBR3RDLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBNkdsRCxDQUFDO0lBNUhHLHNCQUFXLDRDQUFjO2FBQXpCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRzFELHNCQUFXLDBDQUFZO2FBQXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLG9DQUFNO2FBQWpCLGNBQW1DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3RELHNCQUFXLHNDQUFRO2FBQW5CLGNBQXFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3ZELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3ZELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRXZELHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLGdDQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLG9DQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNuQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFFcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQS9IZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FpSXBDO0lBQUQsdUJBQUM7Q0FqSUQsQUFpSUMsQ0FoSVcsRUFBRSxDQUFDLFNBQVMsR0FnSXZCO2tCQWpJb0IsZ0JBQWdCO0FBbUlyQyxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsQ0FBYyxFQUFFLENBQWE7SUFBN0Isa0JBQUEsRUFBQSxLQUFhLENBQUM7SUFBRSxrQkFBQSxFQUFBLEtBQWE7SUFDdkQsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgQnV0dG9uU3RhdGUsIElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkQ29udHJvbHNcbiAgICBleHRlbmRzIGNjLkNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgSUlucHV0Q29udHJvbHMge1xuXG4gICAgcHJpdmF0ZSBfaEF4aXM6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faEF4aXMgfVxuXG4gICAgcHJpdmF0ZSBfdkF4aXM6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3ZBeGlzIH1cblxuICAgIHByaXZhdGUgX2tLZXk6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9rS2V5IH1cbiAgICBwdWJsaWMgZ2V0IGludGVyYWN0KCk6IEJ1dHRvblN0YXRlIHsgcmV0dXJuIHRoaXMuX2tLZXkgfVxuXG4gICAgcHJpdmF0ZSBfeEtleTogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuICAgIHB1YmxpYyBnZXQgZ2V0aHVydCgpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl94S2V5IH1cblxuICAgIHByaXZhdGUgX2pLZXk6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBwdWJsaWMgZ2V0IGF0dGFjazIoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5faktleSB9XG5cbiAgICBwcml2YXRlIF9sS2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgcHVibGljIGdldCBhdHRhY2szKCk6IEJ1dHRvblN0YXRlIHsgcmV0dXJuIHRoaXMuX2xLZXkgfVxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7IH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgICAgIHRoaXMuX3ZBeGlzID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgdGhpcy5fdkF4aXMgPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLno6IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9rS2V5ID09PSBCdXR0b25TdGF0ZS5SZXN0IHx8IHRoaXMuX2tLZXkgPT09IEJ1dHRvblN0YXRlLlJlbGVhc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLng6IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl94S2V5ID09PSBCdXR0b25TdGF0ZS5SZXN0IHx8IHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlJlbGVhc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl94S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5jOiBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faktleSA9PT0gQnV0dG9uU3RhdGUuUmVzdCB8fCB0aGlzLl9qS2V5ID09PSBCdXR0b25TdGF0ZS5SZWxlYXNlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9qS2V5ID0gQnV0dG9uU3RhdGUuUHJlc3NlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9qS2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS52OiBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbEtleSA9PT0gQnV0dG9uU3RhdGUuUmVzdCB8fCB0aGlzLl9sS2V5ID09PSBCdXR0b25TdGF0ZS5SZWxlYXNlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sS2V5ID0gQnV0dG9uU3RhdGUuUHJlc3NlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sS2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdkF4aXMgPSBjbGFtcCh0aGlzLl92QXhpcyk7XG4gICAgICAgIHRoaXMuX2hBeGlzID0gY2xhbXAodGhpcy5faEF4aXMpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hBeGlzICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hBeGlzIC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgICAgIHRoaXMuX3ZBeGlzIC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgICAgIHRoaXMuX3ZBeGlzICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS56OiBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fa0tleSA9PT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCB0aGlzLl9rS2V5ID09PSBCdXR0b25TdGF0ZS5IZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rS2V5ID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS54OiBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCB0aGlzLl94S2V5ID09PSBCdXR0b25TdGF0ZS5IZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl94S2V5ID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5jOiBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faktleSA9PT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCB0aGlzLl9qS2V5ID09PSBCdXR0b25TdGF0ZS5IZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2pLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9qS2V5ID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS52OiBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbEtleSA9PT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCB0aGlzLl9sS2V5ID09PSBCdXR0b25TdGF0ZS5IZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sS2V5ID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdkF4aXMgPSBjbGFtcCh0aGlzLl92QXhpcyk7XG4gICAgICAgIHRoaXMuX2hBeGlzID0gY2xhbXAodGhpcy5faEF4aXMpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBhOiBudW1iZXIgPSAtMSwgYjogbnVtYmVyID0gMSkge1xuICAgIGlmICh2YWx1ZSA8IGEpIHJldHVybiBhO1xuICAgIGlmICh2YWx1ZSA+IGIpIHJldHVybiBiO1xuICAgIHJldHVybiB2YWx1ZTtcbn0iXX0=