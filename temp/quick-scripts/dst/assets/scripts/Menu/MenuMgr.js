
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
var AuthManager_1 = require("./AuthManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Firebase v9+ 的例子
var MenuMgr = /** @class */ (function (_super) {
    __extends(MenuMgr, _super);
    function MenuMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VolumnValue = 0.5;
        _this.isSigningUp = false;
        _this.authComp = null;
        _this.startGameButton = null;
        return _this;
    }
    MenuMgr.prototype.onLoad = function () {
        // Hook up OptionButton → ShowSetting
        var OptionButton = new cc.Component.EventHandler();
        OptionButton.target = this.node;
        OptionButton.component = "MenuMgr";
        OptionButton.handler = "ShowSetting";
        cc.find("Canvas/background/OptionButton").getComponent(cc.Button).clickEvents.push(OptionButton);
        cc.log("Is Firebase initialized?", window._firebaseInited);
    };
    MenuMgr.prototype.ShowSetting = function () {
        var _this = this;
        // Setting is a prefab
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
    MenuMgr.prototype.initSettingButton = function () {
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
        //Volumnslider
        var Volumnslider = cc.find("Canvas/Setting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            Volumnslider.progress = Number(savedVolumn);
        else
            Volumnslider.progress = 0.5;
        Volumnslider.node.on('slide', this.onVolumnChange, this);
    };
    MenuMgr.prototype.ExitSetting = function () {
        var settingNode = cc.find("Canvas/Setting");
        if (settingNode)
            settingNode.destroy();
    };
    MenuMgr.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    MenuMgr.prototype.SignUp = function () {
        this.isSigningUp = true;
        this.openSignupLoginPanel();
    };
    MenuMgr.prototype.Login = function () {
        this.isSigningUp = false;
        this.openSignupLoginPanel();
    };
    MenuMgr.prototype.openSignupLoginPanel = function () {
        var _this = this;
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, function (err, asset) {
            if (err) {
                cc.error("Failed to load SignupLogin prefab:", err);
                return;
            }
            // Cast the loaded asset to cc.Prefab:
            var prefab = asset;
            // Now instantiate a Node from that prefab
            var signupLoginNode = cc.instantiate(prefab);
            signupLoginNode.setPosition(0, 0);
            signupLoginNode.scaleX = 0.5;
            signupLoginNode.scaleY = 0.5;
            signupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(signupLoginNode);
            signupLoginNode.name = "SignupLogin";
            // grab the AuthManager component from the newly‐created Node
            _this.authComp = signupLoginNode.getComponent(AuthManager_1.default);
            if (!_this.authComp) {
                cc.error("AuthManager component not found on SignupLogin prefab!");
                return;
            }
            _this.initSignupLogin();
        });
    };
    MenuMgr.prototype.initSignupLogin = function () {
        // “Exit” button wiring (unchanged)…
        var ExitSignupLoginButton = new cc.Component.EventHandler();
        ExitSignupLoginButton.target = this.node;
        ExitSignupLoginButton.component = "MenuMgr";
        ExitSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Exit").getComponent(cc.Button).clickEvents.push(ExitSignupLoginButton);
        // “Save” button now calls either authComp.SignUp or authComp.Login
        var SaveSignupLoginButton = new cc.Component.EventHandler();
        SaveSignupLoginButton.target = this.authComp.node;
        SaveSignupLoginButton.component = "AuthManager";
        SaveSignupLoginButton.handler = this.isSigningUp ? "SignUp" : "Login";
        cc.find("Canvas/Setting/SignupLogin/Save").getComponent(cc.Button).clickEvents.push(SaveSignupLoginButton);
    };
    MenuMgr.prototype.ExitSignupLogin = function () {
        var T_Node = cc.find("Canvas/Setting/SignupLogin");
        if (T_Node) {
            T_Node.destroy();
        }
    };
    MenuMgr.prototype.enableStartButton = function () {
        if (this.startGameButton) {
            this.startGameButton.node.active = true;
        }
    };
    __decorate([
        property(cc.Button)
    ], MenuMgr.prototype, "startGameButton", void 0);
    MenuMgr = __decorate([
        ccclass
    ], MenuMgr);
    return MenuMgr;
}(cc.Component));
exports.default = MenuMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsbUJBQW1CO0FBSW5CO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0pDO1FBOUlVLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFlLEdBQWMsSUFBSSxDQUFDOztJQTJJM0QsQ0FBQztJQXpJRyx3QkFBTSxHQUFOO1FBQ0kscUNBQXFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRyxFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyxzQkFBc0I7UUFDdEIsRUFBRSxDQUFD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QixDQUFDLENBQUM7UUFFM0csbUVBQW1FO1FBQ25FLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQztRQUNuRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hELHFCQUFxQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkQsSUFBRyxNQUFNLEVBQUU7WUFDUCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBMUlvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBbUM7SUFMdEMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdKM0I7SUFBRCxjQUFDO0NBaEpELEFBZ0pDLENBaEpvQyxFQUFFLENBQUMsU0FBUyxHQWdKaEQ7a0JBaEpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEF1dGhNYW5hZ2VyIGZyb20gJy4vQXV0aE1hbmFnZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuLy8gRmlyZWJhc2UgdjkrIOeahOS+i+WtkFxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZTogbnVtYmVyID0gMC41O1xyXG4gICAgcHVibGljIGlzU2lnbmluZ1VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGF1dGhDb21wOiBBdXRoTWFuYWdlciB8IG51bGwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RhcnRHYW1lQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBIb29rIHVwIE9wdGlvbkJ1dHRvbiDihpIgU2hvd1NldHRpbmdcclxuICAgICAgICBsZXQgT3B0aW9uQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBPcHRpb25CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIE9wdGlvbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBPcHRpb25CdXR0b24uaGFuZGxlciA9IFwiU2hvd1NldHRpbmdcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvT3B0aW9uQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goT3B0aW9uQnV0dG9uKTtcclxuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1NldHRpbmcoKSB7XHJcbiAgICAgICAgLy8gU2V0dGluZyBpcyBhIHByZWZhYlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TZXR0aW5nXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU2V0dGluZyBwcmVmYWI6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgc2V0dGluZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWCA9IDI7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWSA9IDI7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoc2V0dGluZ05vZGUpO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5uYW1lID0gXCJTZXR0aW5nXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5pbml0U2V0dGluZ0J1dHRvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0U2V0dGluZ0J1dHRvbigpe1xyXG4gICAgICAgIC8vRXhpdFNldHRpbmdCdXR0b24gaXMgYSBiaXV0dG9uIGluIFNldHRpbmcgcHJlZmFiXHJcbiAgICAgICAgbGV0IEV4aXRTZXR0aW5nQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uaGFuZGxlciA9IFwiRXhpdFNldHRpbmdcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvRXhpdFNldHRpbmdcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0U2V0dGluZ0J1dHRvbik7XHJcblxyXG4gICAgICAgIC8vU2lnbiB1cFxyXG4gICAgICAgIGxldCBTaWduVXBCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgU2lnblVwQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi5oYW5kbGVyID0gXCJTaWduVXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnblVwXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU2lnblVwQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy9Mb2dpblxyXG4gICAgICAgIGxldCBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0xvZ2luXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goTG9naW5CdXR0b24pO1xyXG5cclxuICAgICAgICAvL1ZvbHVtbnNsaWRlclxyXG4gICAgICAgIGxldCBWb2x1bW5zbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIFZvbHVtbnNsaWRlci5wcm9ncmVzcyA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XHJcbiAgICAgICAgVm9sdW1uc2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgRXhpdFNldHRpbmcoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nXCIpO1xyXG4gICAgICAgIGlmKHNldHRpbmdOb2RlKSBzZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2lnblVwKCl7XHJcbiAgICAgICAgdGhpcy5pc1NpZ25pbmdVcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcGVuU2lnbnVwTG9naW5QYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIExvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaWduaW5nVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5TaWdudXBMb2dpblBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuU2lnbnVwTG9naW5QYW5lbCgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBhc3NldCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBTaWdudXBMb2dpbiBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2FzdCB0aGUgbG9hZGVkIGFzc2V0IHRvIGNjLlByZWZhYjpcclxuICAgICAgICBjb25zdCBwcmVmYWIgPSBhc3NldCBhcyBjYy5QcmVmYWI7XHJcblxyXG4gICAgICAgIC8vIE5vdyBpbnN0YW50aWF0ZSBhIE5vZGUgZnJvbSB0aGF0IHByZWZhYlxyXG4gICAgICAgIGNvbnN0IHNpZ251cExvZ2luTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5zY2FsZVggPSAwLjU7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNjYWxlWSA9IDAuNTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUuekluZGV4ID0gMTAwMDtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIikuYWRkQ2hpbGQoc2lnbnVwTG9naW5Ob2RlKTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUubmFtZSA9IFwiU2lnbnVwTG9naW5cIjtcclxuXHJcbiAgICAgICAgLy8gZ3JhYiB0aGUgQXV0aE1hbmFnZXIgY29tcG9uZW50IGZyb20gdGhlIG5ld2x54oCQY3JlYXRlZCBOb2RlXHJcbiAgICAgICAgdGhpcy5hdXRoQ29tcCA9IHNpZ251cExvZ2luTm9kZS5nZXRDb21wb25lbnQoQXV0aE1hbmFnZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5hdXRoQ29tcCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIkF1dGhNYW5hZ2VyIGNvbXBvbmVudCBub3QgZm91bmQgb24gU2lnbnVwTG9naW4gcHJlZmFiIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0U2lnbnVwTG9naW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2lnbnVwTG9naW4oKSB7XHJcbiAgICAgICAgLy8g4oCcRXhpdOKAnSBidXR0b24gd2lyaW5nICh1bmNoYW5nZWQp4oCmXHJcbiAgICAgICAgbGV0IEV4aXRTaWdudXBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkV4aXRTaWdudXBMb2dpblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9FeGl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNpZ251cExvZ2luQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8g4oCcU2F2ZeKAnSBidXR0b24gbm93IGNhbGxzIGVpdGhlciBhdXRoQ29tcC5TaWduVXAgb3IgYXV0aENvbXAuTG9naW5cclxuICAgICAgICBsZXQgU2F2ZVNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5hdXRoQ29tcCEubm9kZTtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJBdXRoTWFuYWdlclwiO1xyXG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gdGhpcy5pc1NpZ25pbmdVcCA/IFwiU2lnblVwXCIgOiBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luL1NhdmVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTYXZlU2lnbnVwTG9naW5CdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIEV4aXRTaWdudXBMb2dpbigpIHtcclxuICAgICAgICBsZXQgVF9Ob2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luXCIpO1xyXG4gICAgICAgIGlmKFRfTm9kZSkge1xyXG4gICAgICAgICAgICBUX05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5hYmxlU3RhcnRCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=