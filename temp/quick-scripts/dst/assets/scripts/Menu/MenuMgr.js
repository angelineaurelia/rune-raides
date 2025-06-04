
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdJQztRQTlIVSxpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUE4SHJDLENBQUM7SUE1SEcseUJBQU0sR0FBTjtRQUNJLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRyxvQ0FBb0M7SUFFeEMsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFBQSxpQkFpQkM7UUFoQkcscUJBQXFCO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUN4RCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPO2FBQ1Y7WUFDRCxJQUFN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QixDQUFDLENBQUM7UUFFM0csTUFBTTtRQUNOLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUMscUJBQXFCLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO1FBQ2xELEVBQUUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUUvRyxDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNuRCxJQUFHLE1BQU0sRUFBRTtZQUNQLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUE5SGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnSTVCO0lBQUQsZUFBQztDQWhJRCxBQWdJQyxDQWhJcUMsRUFBRSxDQUFDLFNBQVMsR0FnSWpEO2tCQWhJb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZTogbnVtYmVyID0gMC41O1xuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIGxldCBPcHRpb25CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBPcHRpb25CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBPcHRpb25CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XG4gICAgICAgIE9wdGlvbkJ1dHRvbi5oYW5kbGVyID0gXCJTaG93U2V0dGluZ1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvT3B0aW9uQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goT3B0aW9uQnV0dG9uKTtcblxuICAgICAgICAvL0xvYWQgVm9sdW1uVmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgXG4gICAgfVxuXG4gICAgU2hvd1NldHRpbmcoKSB7XG4gICAgICAgIC8vU2V0dGluZyBpcyBhIHByZWZhYlxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2V0dGluZ1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU2V0dGluZyBwcmVmYWI6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgc2V0dGluZ05vZGUuc2NhbGVYID0gMiAgIDtcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWSA9IDI7IFxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChzZXR0aW5nTm9kZSk7XG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5uYW1lID0gXCJTZXR0aW5nXCI7XG4gICAgXG4gICAgICAgICAgICB0aGlzLmluaXRTZXR0aW5nQnV0dG9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBpbml0U2V0dGluZ0J1dHRvbigpe1xuICAgICAgICAvL0V4aXRTZXR0aW5nQnV0dG9uIGlzIGEgYml1dHRvbiBpbiBTZXR0aW5nIHByZWZhYlxuICAgICAgICBsZXQgRXhpdFNldHRpbmdCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIEV4aXRTZXR0aW5nQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi5oYW5kbGVyID0gXCJFeGl0U2V0dGluZ1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvRXhpdFNldHRpbmdcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0U2V0dGluZ0J1dHRvbik7XG4gICAgICAgIC8vU2lnbiB1cFxuICAgICAgICBsZXQgU2lnblVwQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgU2lnblVwQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgU2lnblVwQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBTaWduVXBCdXR0b24uaGFuZGxlciA9IFwiU2lnblVwXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWduVXBcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTaWduVXBCdXR0b24pO1xuICAgICAgICAvL0xvZ2luXG4gICAgICAgIGxldCBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XG4gICAgICAgIExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkxvZ2luXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9Mb2dpblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKExvZ2luQnV0dG9uKTtcbiAgICAgICAgLy9Wb2x1bW5zbGlkZXI/XG4gICAgICAgIGxldCBWb2x1bW5zbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiAhPT0gbnVsbCkgVm9sdW1uc2xpZGVyLnByb2dyZXNzID0gTnVtYmVyKHNhdmVkVm9sdW1uKTtcbiAgICAgICAgZWxzZSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XG4gICAgICAgIFZvbHVtbnNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xuICAgIH1cbiAgICBFeGl0U2V0dGluZygpIHtcbiAgICAgICAgbGV0IHNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nXCIpO1xuICAgICAgICBpZihzZXR0aW5nTm9kZSkge1xuICAgICAgICAgICAgc2V0dGluZ05vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uVm9sdW1uQ2hhbmdlKHNsaWRlcjogY2MuU2xpZGVyKXtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpOyAvLyAwfjFcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiLCB0aGlzLlZvbHVtblZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIFNpZ25VcCgpe1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IgKFwiRmFpbGVkIHRvIGxvYWQgU2lnbnVwTG9naW4gXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2lnbnVwTG9naW5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zY2FsZVggPSAwLjU7XG4gICAgICAgICAgICBTaWdudXBMb2dpbk5vZGUuc2NhbGVZID0gMC41O1xuICAgICAgICAgICAgU2lnbnVwTG9naW5Ob2RlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIikuYWRkQ2hpbGQoU2lnbnVwTG9naW5Ob2RlKTtcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5uYW1lID0gXCJTaWdudXBMb2dpblwiO1xuICAgICAgICAgICB0aGlzLmluaXRTaWdudXBMb2dpbigpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBMb2dpbigpIHtcbiAgICAgICAgLy9TaWdudXBMb2dpbiBpcyBhIHByZWZhYlxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIgKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IgKFwiRmFpbGVkIHRvIGxvYWQgU2lnbnVwTE9naW4gXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2lnbnVwTG9naW5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5zY2FsZVggPSAwLjU7XG4gICAgICAgICAgICBTaWdudXBMb2dpbk5vZGUuc2NhbGVZID0gMC41O1xuICAgICAgICAgICAgU2lnbnVwTG9naW5Ob2RlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIikuYWRkQ2hpbGQoU2lnbnVwTG9naW5Ob2RlKTtcbiAgICAgICAgICAgIFNpZ251cExvZ2luTm9kZS5uYW1lID0gXCJTaWdudXBMb2dpblwiO1xuICAgICAgICAgICAgdGhpcy5pbml0U2lnbnVwTG9naW4oKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaW5pdFNpZ251cExvZ2luKCkge1xuICAgICAgICBsZXQgRXhpdFNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24uaGFuZGxlciA9IFwiRXhpdFNpZ251cExvZ2luXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9FeGl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNpZ251cExvZ2luQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vc2F2ZVxuICAgICAgICBsZXQgU2F2ZVNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgU2F2ZVNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgU2F2ZVNpZ251cExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uaGFuZGxlciA9IFwiRXhpdFNpZ251cExvZ2luXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9TYXZlXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU2F2ZVNpZ251cExvZ2luQnV0dG9uKTtcbiAgICAgXG4gICAgfVxuICAgIEV4aXRTaWdudXBMb2dpbigpIHtcbiAgICAgICAgbGV0IFRfTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpblwiKTtcbiAgICAgICAgaWYoVF9Ob2RlKSB7XG4gICAgICAgICAgICBUX05vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuIl19