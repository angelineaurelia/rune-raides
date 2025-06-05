
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/SuccessPopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3764DDp7JFh4sQoYTrrh15', 'SuccessPopup');
// scripts/Menu/SuccessPopup.ts

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
var SuccessPopup = /** @class */ (function (_super) {
    __extends(SuccessPopup, _super);
    function SuccessPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.background = null;
        // Called by Menu code when OK is clicked
        _this.onOk = null;
        return _this;
    }
    SuccessPopup.prototype.onLoad = function () {
        var _this = this;
        var okBtn = cc.find("OKButton", this.node).getComponent(cc.Button);
        okBtn.node.on('click', function () {
            if (_this.onOk)
                _this.onOk();
            _this.node.destroy();
        });
    };
    __decorate([
        property(cc.Label)
    ], SuccessPopup.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], SuccessPopup.prototype, "background", void 0);
    SuccessPopup = __decorate([
        ccclass('SuccessPopup')
    ], SuccessPopup);
    return SuccessPopup;
}(cc.Component));
exports.default = SuccessPopup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvU3VjY2Vzc1BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBYUM7UUFacUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDOUMseUNBQXlDO1FBQ2xDLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVMxQyxDQUFDO0lBUEMsNkJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWG1CO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUErQjtJQUMvQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFBNEI7SUFGM0IsWUFBWTtRQURoQyxPQUFPLENBQUMsY0FBYyxDQUFDO09BQ0gsWUFBWSxDQWFoQztJQUFELG1CQUFDO0NBYkQsQUFhQyxDQWJ5QyxFQUFFLENBQUMsU0FBUyxHQWFyRDtrQkFib0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xuZGVjbGFyZSBjb25zdCBjYzogYW55O1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1N1Y2Nlc3NQb3B1cCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWNjZXNzUG9wdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSkgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XG4gIC8vIENhbGxlZCBieSBNZW51IGNvZGUgd2hlbiBPSyBpcyBjbGlja2VkXG4gIHB1YmxpYyBvbk9rOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgY29uc3Qgb2tCdG4gPSBjYy5maW5kKFwiT0tCdXR0b25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICBva0J0bi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9uT2spIHRoaXMub25PaygpO1xuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxufVxuIl19