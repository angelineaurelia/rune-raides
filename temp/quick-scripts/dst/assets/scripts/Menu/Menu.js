
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4999co+59BDVK7wwshiNS5K', 'Menu');
// scripts/Menu/Menu.ts

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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ExitButton = null;
        _this.Menubgm = null;
        _this.VolumnValue = 0.5;
        return _this;
    }
    Menu.prototype.onLoad = function () {
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            this.VolumnValue = Number(savedVolumn);
        else
            this.VolumnValue = 0.5;
        this.playbgm();
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
        var exitHandler = new cc.Component.EventHandler();
        exitHandler.target = this.node;
        exitHandler.component = "Menu";
        exitHandler.handler = "ExitButtonEvent";
        this.ExitButton.clickEvents.push(exitHandler);
    };
    Menu.prototype.start = function () {
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "Menu";
        StartButton.handler = "LoadGame";
        cc.find("Canvas/background/StartButton").getComponent(cc.Button).clickEvents.push(StartButton);
        var MapButton = new cc.Component.EventHandler();
        MapButton.target = this.node;
        MapButton.component = "Menu";
        MapButton.handler = "LoadMap";
        cc.find("Canvas/background/MapButton").getComponent(cc.Button).clickEvents.push(MapButton);
    };
    Menu.prototype.LoadGame = function () {
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo");
        });
    };
    Menu.prototype.LoadMap = function () {
        var _a;
        var username = ((_a = cc.find("Canvas/MenuMgr").getComponent("MenuMgr").authComp) === null || _a === void 0 ? void 0 : _a.user) || "Guest";
        if (username)
            cc.sys.localStorage.setItem(username, 0);
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo_test");
        });
    };
    Menu.prototype.ExitButtonEvent = function () {
        cc.game.end();
    };
    Menu.prototype.playbgm = function () {
        if (this.Menubgm) {
            cc.audioEngine.playMusic(this.Menubgm, true);
        }
        else {
            cc.error("BGM not assigned!");
        }
    };
    __decorate([
        property(cc.Button)
    ], Menu.prototype, "ExitButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Menu.prototype, "Menubgm", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQStEQztRQTdERyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUF3RHJDLENBQUM7SUF0REcscUJBQU0sR0FBTjtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsS0FBSyxJQUFJO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV4RSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxF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QUxaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErRHhCO0lBQUQsV0FBQztDQS9ERCxBQStEQyxDQS9EaUMsRUFBRSxDQUFDLFNBQVMsR0ErRDdDO2tCQS9Eb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgRXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgTWVudWJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWU6IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIHRoaXMuVm9sdW1uVmFsdWUgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgdGhpcy5Wb2x1bW5WYWx1ZSA9IDAuNTtcclxuICAgICAgICB0aGlzLnBsYXliZ20oKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMuVm9sdW1uVmFsdWUpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGxldCBleGl0SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXhpdEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGV4aXRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGV4aXRIYW5kbGVyLmhhbmRsZXIgPSBcIkV4aXRCdXR0b25FdmVudFwiO1xyXG4gICAgICAgIHRoaXMuRXhpdEJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGV4aXRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBTdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgU3RhcnRCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIkxvYWRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL1N0YXJ0QnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU3RhcnRCdXR0b24pO1xyXG5cclxuICAgICAgICBsZXQgTWFwQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBNYXBCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIE1hcEJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBNYXBCdXR0b24uaGFuZGxlciA9IFwiTG9hZE1hcFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9NYXBCdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChNYXBCdXR0b24pO1xyXG4gICAgfVxyXG4gICAgTG9hZEdhbWUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwiZGVtb1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkTWFwKCl7XHJcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gY2MuZmluZChcIkNhbnZhcy9NZW51TWdyXCIpLmdldENvbXBvbmVudChcIk1lbnVNZ3JcIikuYXV0aENvbXA/LnVzZXIgfHwgXCJHdWVzdFwiO1xyXG4gICAgICAgIGlmKHVzZXJuYW1lKSBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odXNlcm5hbWUsIDApO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9hZGluZ01hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0xvYWRpbmdNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkxvYWRpbmdNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBsb2FkaW5nTWFuYWdlci5zdGFydExvYWRpbmcoXCJkZW1vX3Rlc3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBFeGl0QnV0dG9uRXZlbnQoKXtcclxuICAgICAgICBjYy5nYW1lLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgcGxheWJnbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLk1lbnViZ20pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuTWVudWJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJCR00gbm90IGFzc2lnbmVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19