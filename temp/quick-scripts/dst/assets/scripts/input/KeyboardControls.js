
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
    KeyboardControls.prototype.closeInput = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    KeyboardControls.prototype.openInput = function () {
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
            case cc.macro.KEY.j:
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
            case cc.macro.KEY.k:
                if (this._jKey === IInputControls_1.ButtonState.Rest || this._jKey === IInputControls_1.ButtonState.Released) {
                    this._jKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._jKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.l:
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
            case cc.macro.KEY.j:
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
            case cc.macro.KEY.k:
                if (this._jKey === IInputControls_1.ButtonState.Pressed || this._jKey === IInputControls_1.ButtonState.Held) {
                    this._jKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._jKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.l:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0tleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkcsbURBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQ1ksb0NBQVk7SUFEeEI7UUFBQSxxRUF3SUM7UUFwSVcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUduQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFJdEMsV0FBSyxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQztRQUd0QyxXQUFLLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBR3RDLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBb0hsRCxDQUFDO0lBbklHLHNCQUFXLDRDQUFjO2FBQXpCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRzFELHNCQUFXLDBDQUFZO2FBQXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLG9DQUFNO2FBQWpCLGNBQW1DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3RELHNCQUFXLHNDQUFRO2FBQW5CLGNBQXFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8s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LEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1NBQ2I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF0SWdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBd0lwQztJQUFELHVCQUFDO0NBeElELEFBd0lDLENBdklXLEVBQUUsQ0FBQyxTQUFTLEdBdUl2QjtrQkF4SW9CLGdCQUFnQjtBQTBJckMsU0FBUyxLQUFLLENBQUMsS0FBYSxFQUFFLENBQWMsRUFBRSxDQUFhO0lBQTdCLGtCQUFBLEVBQUEsS0FBYSxDQUFDO0lBQUUsa0JBQUEsRUFBQSxLQUFhO0lBQ3ZELElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEIsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZENvbnRyb2xzXG4gICAgZXh0ZW5kcyBjYy5Db21wb25lbnRcbiAgICBpbXBsZW1lbnRzIElJbnB1dENvbnRyb2xzIHtcblxuICAgIHByaXZhdGUgX2hBeGlzOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2hBeGlzIH1cblxuICAgIHByaXZhdGUgX3ZBeGlzOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl92QXhpcyB9XG5cbiAgICBwcml2YXRlIF9rS2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5fa0tleSB9XG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9rS2V5IH1cblxuICAgIHByaXZhdGUgX3hLZXk6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBwdWJsaWMgZ2V0IGdldGh1cnQoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5feEtleSB9XG5cbiAgICBwcml2YXRlIF9qS2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgcHVibGljIGdldCBhdHRhY2syKCk6IEJ1dHRvblN0YXRlIHsgcmV0dXJuIHRoaXMuX2pLZXkgfVxuXG4gICAgcHJpdmF0ZSBfbEtleTogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuICAgIHB1YmxpYyBnZXQgYXR0YWNrMygpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9sS2V5IH1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkgeyB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuICAgIGNsb3NlSW5wdXQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuICAgIG9wZW5JbnB1dCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hBeGlzID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hBeGlzID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XG4gICAgICAgICAgICAgICAgdGhpcy5fdkF4aXMgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuajogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5fa0tleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa0tleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa0tleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLms6IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9qS2V5ID09PSBCdXR0b25TdGF0ZS5SZXN0IHx8IHRoaXMuX2pLZXkgPT09IEJ1dHRvblN0YXRlLlJlbGVhc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2pLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2pLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmw6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5fbEtleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbEtleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbEtleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZBeGlzID0gY2xhbXAodGhpcy5fdkF4aXMpO1xuICAgICAgICB0aGlzLl9oQXhpcyA9IGNsYW1wKHRoaXMuX2hBeGlzKTtcbiAgICB9XG5cbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuajogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fa0tleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa0tleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl94S2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuazogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2pLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5faktleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9qS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faktleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubDogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fbEtleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbEtleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZBeGlzID0gY2xhbXAodGhpcy5fdkF4aXMpO1xuICAgICAgICB0aGlzLl9oQXhpcyA9IGNsYW1wKHRoaXMuX2hBeGlzKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgYTogbnVtYmVyID0gLTEsIGI6IG51bWJlciA9IDEpIHtcbiAgICBpZiAodmFsdWUgPCBhKSByZXR1cm4gYTtcbiAgICBpZiAodmFsdWUgPiBiKSByZXR1cm4gYjtcbiAgICByZXR1cm4gdmFsdWU7XG59Il19