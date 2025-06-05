
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
var firebaseConfig = {
    apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
    authDomain: "rune-raids.firebaseapp.com",
    projectId: "rune-raids",
    storageBucket: "rune-raids.firebasestorage.app",
    messagingSenderId: "530514360843",
    appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
    measurementId: "G-B1C5FG1YSN"
};
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
        if (!window._firebaseInited) {
            firebase.initializeApp(firebaseConfig);
            window._firebaseInited = true;
            cc.log("✅ Firebase initialized in MenuMgr");
        }
        else {
            cc.log("ℹ️ Firebase already initialized");
        }
        //Load VolumnValue from localStorage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFDbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUMsSUFBTSxjQUFjLEdBQUc7SUFDbkIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xELGFBQWEsRUFBRSxjQUFjO0NBQ2hDLENBQUM7QUFJRjtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTBKQztRQXhKVSxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFRLEdBQXVCLElBQUksQ0FBQztRQUN2QixxQkFBZSxHQUFjLElBQUksQ0FBQzs7SUFxSjNELENBQUM7SUFuSkcsd0JBQU0sR0FBTjtRQUNJLHFDQUFxQztRQUNyQyxJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakcsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFHM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDekIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNILEVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUM3QztRQUNELG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyxzQkFBc0I7UUFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3hELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE9BQU87YUFDVjtZQUNELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFFN0IsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0QsbUNBQWlCLEdBQWpCO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDeEMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEcsU0FBUztRQUNULElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4RixPQUFPO1FBQ1AsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRGLGNBQWM7UUFDZCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSTtZQUFFLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUNqRSxZQUFZLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNqQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxJQUFHLFdBQVc7WUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNDQUFvQixHQUE1QjtRQUFBLGlCQTJCQztRQTFCRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDL0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBQ0Qsc0NBQXNDO1lBQ3RDLElBQU0sTUFBTSxHQUFHLEtBQWtCLENBQUM7WUFFbEMsMENBQTBDO1lBQzFDLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDN0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDN0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxlQUFlLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUVyQyw2REFBNkQ7WUFDN0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPO2FBQ1Y7WUFFRCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNJLG9DQUFvQztRQUNwQyxJQUFJLHFCQUFxQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVDLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0csbUVBQW1FO1FBQ25FLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQztRQUNuRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hELHFCQUFxQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkQsSUFBRyxNQUFNLEVBQUU7WUFDUCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBcEpvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBbUM7SUFMdEMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBKM0I7SUFBRCxjQUFDO0NBMUpELEFBMEpDLENBMUpvQyxFQUFFLENBQUMsU0FBUyxHQTBKaEQ7a0JBMUpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBBdXRoTWFuYWdlciBmcm9tICcuL0F1dGhNYW5hZ2VyJztcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXG4gICAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJydW5lLXJhaWRzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJydW5lLXJhaWRzLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MzA1MTQzNjA4NDNcIixcbiAgICBhcHBJZDogXCIxOjUzMDUxNDM2MDg0Mzp3ZWI6MWNkZGE5ZDcyYmI0YjUyOTMyMjUwZVwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1CMUM1RkcxWVNOXCJcbn07XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIFZvbHVtblZhbHVlOiBudW1iZXIgPSAwLjU7XG4gICAgcHVibGljIGlzU2lnbmluZ1VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoQ29tcDogQXV0aE1hbmFnZXIgfCBudWxsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBzdGFydEdhbWVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIEhvb2sgdXAgT3B0aW9uQnV0dG9uIOKGkiBTaG93U2V0dGluZ1xuICAgICAgICBsZXQgT3B0aW9uQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgT3B0aW9uQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgT3B0aW9uQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBPcHRpb25CdXR0b24uaGFuZGxlciA9IFwiU2hvd1NldHRpbmdcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL09wdGlvbkJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKE9wdGlvbkJ1dHRvbik7XG4gICAgICAgIGNjLmxvZyhcIklzIEZpcmViYXNlIGluaXRpYWxpemVkP1wiLCB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKTtcblxuXG4gICAgICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xuICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuKchSBGaXJlYmFzZSBpbml0aWFsaXplZCBpbiBNZW51TWdyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwi4oS577iPIEZpcmViYXNlIGFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy9Mb2FkIFZvbHVtblZhbHVlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgfVxuXG4gICAgU2hvd1NldHRpbmcoKSB7XG4gICAgICAgIC8vIFNldHRpbmcgaXMgYSBwcmVmYWJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL1NldHRpbmdcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFNldHRpbmcgcHJlZmFiOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWCA9IDI7XG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zY2FsZVkgPSAyO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChzZXR0aW5nTm9kZSk7XG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5uYW1lID0gXCJTZXR0aW5nXCI7XG4gICAgXG4gICAgICAgICAgICB0aGlzLmluaXRTZXR0aW5nQnV0dG9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBpbml0U2V0dGluZ0J1dHRvbigpe1xuICAgICAgICAvL0V4aXRTZXR0aW5nQnV0dG9uIGlzIGEgYml1dHRvbiBpbiBTZXR0aW5nIHByZWZhYlxuICAgICAgICBsZXQgRXhpdFNldHRpbmdCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIEV4aXRTZXR0aW5nQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi5oYW5kbGVyID0gXCJFeGl0U2V0dGluZ1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvRXhpdFNldHRpbmdcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0U2V0dGluZ0J1dHRvbik7XG5cbiAgICAgICAgLy9TaWduIHVwXG4gICAgICAgIGxldCBTaWduVXBCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBTaWduVXBCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBTaWduVXBCdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XG4gICAgICAgIFNpZ25VcEJ1dHRvbi5oYW5kbGVyID0gXCJTaWduVXBcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFNpZ25VcEJ1dHRvbik7XG5cbiAgICAgICAgLy9Mb2dpblxuICAgICAgICBsZXQgTG9naW5CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBMb2dpbkJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gXCJMb2dpblwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvTG9naW5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChMb2dpbkJ1dHRvbik7XG5cbiAgICAgICAgLy9Wb2x1bW5zbGlkZXJcbiAgICAgICAgbGV0IFZvbHVtbnNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9Wb2x1bW4vVm9sdW1uU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uICE9PSBudWxsKSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xuICAgICAgICBlbHNlIFZvbHVtbnNsaWRlci5wcm9ncmVzcyA9IDAuNTtcbiAgICAgICAgVm9sdW1uc2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgRXhpdFNldHRpbmcoKSB7XG4gICAgICAgIGxldCBzZXR0aW5nTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZ1wiKTtcbiAgICAgICAgaWYoc2V0dGluZ05vZGUpIHNldHRpbmdOb2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvblZvbHVtbkNoYW5nZShzbGlkZXI6IGNjLlNsaWRlcil7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuVm9sdW1uVmFsdWUgPSBzbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgU2lnblVwKCl7XG4gICAgICAgIHRoaXMuaXNTaWduaW5nVXAgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wZW5TaWdudXBMb2dpblBhbmVsKCk7XG4gICAgfVxuXG4gICAgTG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNTaWduaW5nVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcGVuU2lnbnVwTG9naW5QYW5lbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlblNpZ251cExvZ2luUGFuZWwoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TaWdudXBMb2dpblwiLCBjYy5QcmVmYWIsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU2lnbnVwTG9naW4gcHJlZmFiOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhc3QgdGhlIGxvYWRlZCBhc3NldCB0byBjYy5QcmVmYWI6XG4gICAgICAgIGNvbnN0IHByZWZhYiA9IGFzc2V0IGFzIGNjLlByZWZhYjtcblxuICAgICAgICAvLyBOb3cgaW5zdGFudGlhdGUgYSBOb2RlIGZyb20gdGhhdCBwcmVmYWJcbiAgICAgICAgY29uc3Qgc2lnbnVwTG9naW5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICBzaWdudXBMb2dpbk5vZGUuc2NhbGVYID0gMC41O1xuICAgICAgICBzaWdudXBMb2dpbk5vZGUuc2NhbGVZID0gMC41O1xuICAgICAgICBzaWdudXBMb2dpbk5vZGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nXCIpLmFkZENoaWxkKHNpZ251cExvZ2luTm9kZSk7XG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5uYW1lID0gXCJTaWdudXBMb2dpblwiO1xuXG4gICAgICAgIC8vIGdyYWIgdGhlIEF1dGhNYW5hZ2VyIGNvbXBvbmVudCBmcm9tIHRoZSBuZXdseeKAkGNyZWF0ZWQgTm9kZVxuICAgICAgICB0aGlzLmF1dGhDb21wID0gc2lnbnVwTG9naW5Ob2RlLmdldENvbXBvbmVudChBdXRoTWFuYWdlcik7XG4gICAgICAgIGlmICghdGhpcy5hdXRoQ29tcCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJBdXRoTWFuYWdlciBjb21wb25lbnQgbm90IGZvdW5kIG9uIFNpZ251cExvZ2luIHByZWZhYiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRTaWdudXBMb2dpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U2lnbnVwTG9naW4oKSB7XG4gICAgICAgIC8vIOKAnEV4aXTigJ0gYnV0dG9uIHdpcmluZyAodW5jaGFuZ2VkKeKAplxuICAgICAgICBsZXQgRXhpdFNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24uaGFuZGxlciA9IFwiRXhpdFNpZ251cExvZ2luXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9FeGl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNpZ251cExvZ2luQnV0dG9uKTtcblxuICAgICAgICAvLyDigJxTYXZl4oCdIGJ1dHRvbiBub3cgY2FsbHMgZWl0aGVyIGF1dGhDb21wLlNpZ25VcCBvciBhdXRoQ29tcC5Mb2dpblxuICAgICAgICBsZXQgU2F2ZVNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgU2F2ZVNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMuYXV0aENvbXAhLm5vZGU7XG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi5jb21wb25lbnQgPSBcIkF1dGhNYW5hZ2VyXCI7XG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gdGhpcy5pc1NpZ25pbmdVcCA/IFwiU2lnblVwXCIgOiBcIkxvZ2luXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9TYXZlXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU2F2ZVNpZ251cExvZ2luQnV0dG9uKTtcbiAgICB9XG5cbiAgICBFeGl0U2lnbnVwTG9naW4oKSB7XG4gICAgICAgIGxldCBUX05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnbnVwTG9naW5cIik7XG4gICAgICAgIGlmKFRfTm9kZSkge1xuICAgICAgICAgICAgVF9Ob2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVTdGFydEJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59Il19