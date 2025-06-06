
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd91e1lWAFJRIIlaJW6QkXH', 'GameOver');
// scripts/Menu/GameOver.ts

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
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onOk = null;
        return _this;
    }
    GameOver.prototype.onLoad = function () {
        var _this = this;
        var restartBtn = cc.find("Restart", this.node).getComponent(cc.Button);
        restartBtn.node.on('click', function () {
            if (_this.onOk)
                _this.onOk();
            _this.node.destroy();
        });
    };
    GameOver = __decorate([
        ccclass('GameOver')
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFXQztRQVZRLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVUxQyxDQUFDO0lBUkMseUJBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBVmtCLFFBQVE7UUFENUIsT0FBTyxDQUFDLFVBQVUsQ0FBQztPQUNDLFFBQVEsQ0FXNUI7SUFBRCxlQUFDO0NBWEQsQUFXQyxDQVhxQyxFQUFFLENBQUMsU0FBUyxHQVdqRDtrQkFYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xyXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZU92ZXInKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgcHVibGljIG9uT2s6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gY2MuZmluZChcIlJlc3RhcnRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIHJlc3RhcnRCdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm9uT2spIHRoaXMub25PaygpO1xyXG4gICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbn0iXX0=