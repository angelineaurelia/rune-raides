
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
        _this.openSound = null;
        // Called by Menu code when OK is clicked
        _this.onOk = null;
        return _this;
    }
    SuccessPopup.prototype.onLoad = function () {
        var _this = this;
        if (this.openSound) {
            cc.audioEngine.playEffect(this.openSound, false);
        }
        else {
            cc.error("SuccessPopup.openSound is not assigned!");
        }
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
    __decorate([
        property(cc.AudioClip)
    ], SuccessPopup.prototype, "openSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvU3VjY2Vzc1BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUJDO1FBbEJxQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUN2RCx5Q0FBeUM7UUFDbEMsVUFBSSxHQUF3QixJQUFJLENBQUM7O0lBYzFDLENBQUM7SUFaQyw2QkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFWQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakJtQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFBK0I7SUFDL0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQTRCO0lBQ3RCO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUFnQztJQUhwQyxZQUFZO1FBRGhDLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDSCxZQUFZLENBbUJoQztJQUFELG1CQUFDO0NBbkJELEFBbUJDLENBbkJ5QyxFQUFFLENBQUMsU0FBUyxHQW1CckQ7a0JBbkJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvU3VjY2Vzc1BvcHVwLnRzXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU3VjY2Vzc1BvcHVwJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1Y2Nlc3NQb3B1cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgbWVzc2FnZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgb3BlblNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAvLyBDYWxsZWQgYnkgTWVudSBjb2RlIHdoZW4gT0sgaXMgY2xpY2tlZFxuICBwdWJsaWMgb25PazogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIGlmICh0aGlzLm9wZW5Tb3VuZCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMub3BlblNvdW5kLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZXJyb3IoXCJTdWNjZXNzUG9wdXAub3BlblNvdW5kIGlzIG5vdCBhc3NpZ25lZCFcIik7XG4gICAgfVxuICAgIGNvbnN0IG9rQnRuID0gY2MuZmluZChcIk9LQnV0dG9uXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgb2tCdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbk9rKSB0aGlzLm9uT2soKTtcbiAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==