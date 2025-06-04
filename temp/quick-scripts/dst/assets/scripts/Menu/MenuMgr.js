
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/MenuMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfc9apDJ+1PsaY2ZhPv7xhx', 'MenuMgr');
// scripts/Menu/MenuMgr.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VolumnValue = 0.5;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var OptionButton = new cc.Component.EventHandler();
        OptionButton.target = this.node;
        OptionButton.component = "MenuMgr";
        OptionButton.handler = "ShowSetting";
        cc.find("Canvas/background/OptionButton").getComponent(cc.Button).clickEvents.push(OptionButton);
        //Load VolumnValue from localStorage
    };
    NewClass.prototype.ShowSetting = function () {
        var _this = this;
        //Setting is a prefab
        cc.resources.load("prefabs/Setting", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Setting prefab: ", err);
                return;
            }
            var settingNode = cc.instantiate(prefab);
            settingNode.setPosition(0, 0);
            settingNode.scaleX = 2;
            settingNode.scaleY = 2;
            cc.find("Canvas").addChild(settingNode);
            settingNode.name = "Setting";
            _this.initSettingButton();
        });
    };
    NewClass.prototype.initSettingButton = function () {
        //ExitSettingButton is a biutton in Setting prefab
        var ExitSettingButton = new cc.Component.EventHandler();
        ExitSettingButton.target = this.node;
        ExitSettingButton.component = "MenuMgr";
        ExitSettingButton.handler = "ExitSetting";
        cc.find("Canvas/Setting/ExitSetting").getComponent(cc.Button).clickEvents.push(ExitSettingButton);
        //Sign up
        var SignUpButton = new cc.Component.EventHandler();
        SignUpButton.target = this.node;
        SignUpButton.component = "MenuMgr";
        SignUpButton.handler = "SignUp";
        cc.find("Canvas/Setting/SignUp").getComponent(cc.Button).clickEvents.push(SignUpButton);
        //Login
        var LoginButton = new cc.Component.EventHandler();
        LoginButton.target = this.node;
        LoginButton.component = "MenuMgr";
        LoginButton.handler = "Login";
        cc.find("Canvas/Setting/Login").getComponent(cc.Button).clickEvents.push(LoginButton);
        //Volumnslider?
        var Volumnslider = cc.find("Canvas/Setting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            Volumnslider.progress = Number(savedVolumn);
        else
            Volumnslider.progress = 0.5;
        Volumnslider.node.on('slide', this.onVolumnChange, this);
    };
    NewClass.prototype.ExitSetting = function () {
        var settingNode = cc.find("Canvas/Setting");
        if (settingNode) {
            settingNode.destroy();
        }
    };
    NewClass.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    NewClass.prototype.SignUp = function () {
        var _this = this;
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load SignupLogin ", err);
                return;
            }
            var SignupLoginNode = cc.instantiate(prefab);
            SignupLoginNode.setPosition(0, 0);
            SignupLoginNode.scaleX = 0.5;
            SignupLoginNode.scaleY = 0.5;
            SignupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(SignupLoginNode);
            SignupLoginNode.name = "SignupLogin";
            _this.initSignupLogin();
        });
    };
    NewClass.prototype.Login = function () {
        var _this = this;
        //SignupLogin is a prefab
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load SignupLOgin ", err);
                return;
            }
            var SignupLoginNode = cc.instantiate(prefab);
            SignupLoginNode.setPosition(0, 0);
            SignupLoginNode.scaleX = 0.5;
            SignupLoginNode.scaleY = 0.5;
            SignupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(SignupLoginNode);
            SignupLoginNode.name = "SignupLogin";
            _this.initSignupLogin();
        });
    };
    NewClass.prototype.initSignupLogin = function () {
        var ExitSignupLoginButton = new cc.Component.EventHandler();
        ExitSignupLoginButton.target = this.node;
        ExitSignupLoginButton.component = "MenuMgr";
        ExitSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Exit").getComponent(cc.Button).clickEvents.push(ExitSignupLoginButton);
        //save
        var SaveSignupLoginButton = new cc.Component.EventHandler();
        SaveSignupLoginButton.target = this.node;
        SaveSignupLoginButton.component = "MenuMgr";
        SaveSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Save").getComponent(cc.Button).clickEvents.push(SaveSignupLoginButton);
    };
    NewClass.prototype.ExitSignupLogin = function () {
        var T_Node = cc.find("Canvas/Setting/SignupLogin");
        if (T_Node) {
            T_Node.destroy();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdJQztRQTlIVSxpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUE4SHJDLENBQUM7SUE1SEcseUJBQU0sR0FBTjtRQUNJLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRyxvQ0FBb0M7SUFFeEMsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFBQSxpQkFpQkM7UUFoQkcscUJBQXFCO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUN4RCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPO2FBQ1Y7WUFDRCxJ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QUFxQixDQUFDLENBQUM7UUFFM0csTUFBTTtRQUNOLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUMscUJBQXFCLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO1FBQ2xELEVBQUUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUUvRyxDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNuRCxJQUFHLE1BQU0sRUFBRTtZQUNQLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUE5SGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnSTVCO0lBQUQsZUFBQztDQWhJRCxBQWdJQyxDQWhJcUMsRUFBRSxDQUFDLFNBQVMsR0FnSWpEO2tCQWhJb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZTogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGxldCBPcHRpb25CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIE9wdGlvbkJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgT3B0aW9uQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIE9wdGlvbkJ1dHRvbi5oYW5kbGVyID0gXCJTaG93U2V0dGluZ1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9PcHRpb25CdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChPcHRpb25CdXR0b24pO1xyXG5cclxuICAgICAgICAvL0xvYWQgVm9sdW1uVmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBTaG93U2V0dGluZygpIHtcclxuICAgICAgICAvL1NldHRpbmcgaXMgYSBwcmVmYWJcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2V0dGluZ1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFNldHRpbmcgcHJlZmFiOiBcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zY2FsZVggPSAyICAgO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zY2FsZVkgPSAyOyBcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChzZXR0aW5nTm9kZSk7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLm5hbWUgPSBcIlNldHRpbmdcIjtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmluaXRTZXR0aW5nQnV0dG9uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXRTZXR0aW5nQnV0dG9uKCl7XHJcbiAgICAgICAgLy9FeGl0U2V0dGluZ0J1dHRvbiBpcyBhIGJpdXR0b24gaW4gU2V0dGluZyBwcmVmYWJcclxuICAgICAgICBsZXQgRXhpdFNldHRpbmdCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIEV4aXRTZXR0aW5nQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi5oYW5kbGVyID0gXCJFeGl0U2V0dGluZ1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9FeGl0U2V0dGluZ1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKEV4aXRTZXR0aW5nQnV0dG9uKTtcclxuICAgICAgICAvL1NpZ24gdXBcclxuICAgICAgICBsZXQgU2lnblVwQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTaWduVXBCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBTaWduVXBCdXR0b24uaGFuZGxlciA9IFwiU2lnblVwXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFNpZ25VcEJ1dHRvbik7XHJcbiAgICAgICAgLy9Mb2dpblxyXG4gICAgICAgIGxldCBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0xvZ2luXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goTG9naW5CdXR0b24pO1xyXG4gICAgICAgIC8vVm9sdW1uc2xpZGVyP1xyXG4gICAgICAgIGxldCBWb2x1bW5zbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIFZvbHVtbnNsaWRlci5wcm9ncmVzcyA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XHJcbiAgICAgICAgVm9sdW1uc2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBFeGl0U2V0dGluZygpIHtcclxuICAgICAgICBsZXQgc2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIik7XHJcbiAgICAgICAgaWYoc2V0dGluZ05vZGUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVm9sdW1uQ2hhbmdlKHNsaWRlcjogY2MuU2xpZGVyKXtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTsgLy8gMH4xXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpO1xyXG4gICAgICAgIHRoaXMuVm9sdW1uVmFsdWUgPSBzbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVm9sdW1uVmFsdWVcIiwgdGhpcy5Wb2x1bW5WYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBTaWduVXAoKXtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yIChcIkZhaWxlZCB0byBsb2FkIFNpZ251cExvZ2luIFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IFNpZ251cExvZ2luTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgU2lnbnVwTG9naW5Ob2RlLnNjYWxlWCA9IDAuNTtcclxuICAgICAgICAgICAgU2lnbnVwTG9naW5Ob2RlLnNjYWxlWSA9IDAuNTtcclxuICAgICAgICAgICAgU2lnbnVwTG9naW5Ob2RlLnpJbmRleCA9IDEwMDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZ1wiKS5hZGRDaGlsZChTaWdudXBMb2dpbk5vZGUpO1xyXG4gICAgICAgICAgICBTaWdudXBMb2dpbk5vZGUubmFtZSA9IFwiU2lnbnVwTG9naW5cIjtcclxuICAgICAgICAgICB0aGlzLmluaXRTaWdudXBMb2dpbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBMb2dpbigpIHtcclxuICAgICAgICAvL1NpZ251cExvZ2luIGlzIGEgcHJlZmFiXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL1NpZ251cExvZ2luXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvciAoXCJGYWlsZWQgdG8gbG9hZCBTaWdudXBMT2dpbiBcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBTaWdudXBMb2dpbk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBTaWdudXBMb2dpbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zY2FsZVggPSAwLjU7XHJcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zY2FsZVkgPSAwLjU7XHJcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS56SW5kZXggPSAxMDAwO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIikuYWRkQ2hpbGQoU2lnbnVwTG9naW5Ob2RlKTtcclxuICAgICAgICAgICAgU2lnbnVwTG9naW5Ob2RlLm5hbWUgPSBcIlNpZ251cExvZ2luXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFNpZ251cExvZ2luKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGluaXRTaWdudXBMb2dpbigpIHtcclxuICAgICAgICBsZXQgRXhpdFNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIEV4aXRTaWdudXBMb2dpbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24uaGFuZGxlciA9IFwiRXhpdFNpZ251cExvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luL0V4aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0U2lnbnVwTG9naW5CdXR0b24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vc2F2ZVxyXG4gICAgICAgIGxldCBTYXZlU2lnbnVwTG9naW5CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgU2F2ZVNpZ251cExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gXCJFeGl0U2lnbnVwTG9naW5cIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnbnVwTG9naW4vU2F2ZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFNhdmVTaWdudXBMb2dpbkJ1dHRvbik7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBFeGl0U2lnbnVwTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IFRfTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpblwiKTtcclxuICAgICAgICBpZihUX05vZGUpIHtcclxuICAgICAgICAgICAgVF9Ob2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=