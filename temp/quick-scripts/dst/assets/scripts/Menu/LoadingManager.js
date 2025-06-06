
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/LoadingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aec4WHPZxHE4ps/5MxYjR7', 'LoadingManager');
// scripts/Menu/LoadingManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var LoadingManager = /** @class */ (function (_super) {
    __extends(LoadingManager, _super);
    function LoadingManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.percentLabel = null;
        return _this;
    }
    LoadingManager.prototype.startLoading = function (targetScene) {
        var _this = this;
        this.progressBar.progress = 0;
        this.percentLabel.string = "0%";
        cc.director.preloadScene(targetScene, function (completedCount, totalCount, item) {
            var progress = completedCount / totalCount;
            // 預設最多到 0.9，預留補滿動畫
            if (progress > 0.9)
                progress = 0.9;
            _this.progressBar.progress = progress;
            _this.percentLabel.string = Math.floor(progress * 100) + "%";
        }, function () {
            // 預加載完成時，tween 補滿到 100%
            cc.tween(_this.progressBar)
                .to(0.3, { progress: 1 })
                .call(function () {
                _this.percentLabel.string = "100%";
                cc.director.loadScene(targetScene);
            })
                .start();
        });
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingManager.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingManager.prototype, "percentLabel", void 0);
    LoadingManager = __decorate([
        ccclass
    ], LoadingManager);
    return LoadingManager;
}(cc.Component));
exports.default = LoadingManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTG9hZGluZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUEvQkcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQTRCbEMsQ0FBQztJQTFCRyxxQ0FBWSxHQUFaLFVBQWEsV0FBbUI7UUFBaEMsaUJBdUJDO1FBdEJELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3BCLFdBQVcsRUFDWCxVQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSTtZQUM3QixJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQzNDLG1CQUFtQjtZQUNuQixJQUFJLFFBQVEsR0FBRyxHQUFHO2dCQUFFLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRSxDQUFDLEVBQ0Q7WUFDSSx3QkFBd0I7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNyQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN4QixJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVztJQUxiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQ2xDO0lBQUQscUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzJDLEVBQUUsQ0FBQyxTQUFTLEdBaUN2RDtrQkFqQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwZXJjZW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBzdGFydExvYWRpbmcodGFyZ2V0U2NlbmU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XHJcbiAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBcIjAlXCI7XHJcblxyXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxyXG4gICAgICAgIHRhcmdldFNjZW5lLFxyXG4gICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIC8vIOmgkOioreacgOWkmuWIsCAwLjnvvIzpoJDnlZnoo5zmu7/li5XnlatcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMC45KSBwcm9ncmVzcyA9IDAuOTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBNYXRoLmZsb29yKHByb2dyZXNzICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDpoJDliqDovInlrozmiJDmmYLvvIx0d2VlbiDoo5zmu7/liLAgMTAwJVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnByb2dyZXNzQmFyKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBwcm9ncmVzczogMSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0YXJnZXRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19