
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFDbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUMsSUFBTSxjQUFjLEdBQUc7SUFDbkIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xELGFBQWEsRUFBRSxjQUFjO0NBQ2hDLENBQUM7QUFJRjtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTBKQztRQXhKVSxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFRLEdBQXVCLElBQUksQ0FBQztRQUN2QixxQkFBZSxHQUFjLElBQUksQ0FBQzs7SUFxSjNELENBQUM7SUFuSkcsd0JBQU0sR0FBTjtRQUNJLHFDQUFxQztRQUNyQyxJQUFJLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0s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QUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBcEpvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBbUM7SUFMdEMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBKM0I7SUFBRCxjQUFDO0NBMUpELEFBMEpDLENBMUpvQyxFQUFFLENBQUMsU0FBUyxHQTBKaEQ7a0JBMUpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEF1dGhNYW5hZ2VyIGZyb20gJy4vQXV0aE1hbmFnZXInO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJydW5lLXJhaWRzLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1CMUM1RkcxWVNOXCJcclxufTtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWU6IG51bWJlciA9IDAuNTtcclxuICAgIHB1YmxpYyBpc1NpZ25pbmdVcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBhdXRoQ29tcDogQXV0aE1hbmFnZXIgfCBudWxsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHN0YXJ0R2FtZUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gSG9vayB1cCBPcHRpb25CdXR0b24g4oaSIFNob3dTZXR0aW5nXHJcbiAgICAgICAgbGV0IE9wdGlvbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgT3B0aW9uQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBPcHRpb25CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgT3B0aW9uQnV0dG9uLmhhbmRsZXIgPSBcIlNob3dTZXR0aW5nXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL09wdGlvbkJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKE9wdGlvbkJ1dHRvbik7XHJcbiAgICAgICAgY2MubG9nKFwiSXMgRmlyZWJhc2UgaW5pdGlhbGl6ZWQ/XCIsIHdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9nKFwi4pyFIEZpcmViYXNlIGluaXRpYWxpemVkIGluIE1lbnVNZ3JcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi4oS577iPIEZpcmViYXNlIGFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vTG9hZCBWb2x1bW5WYWx1ZSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgfVxyXG5cclxuICAgIFNob3dTZXR0aW5nKCkge1xyXG4gICAgICAgIC8vIFNldHRpbmcgaXMgYSBwcmVmYWJcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2V0dGluZ1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFNldHRpbmcgcHJlZmFiOiBcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zY2FsZVggPSAyO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zY2FsZVkgPSAyO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKHNldHRpbmdOb2RlKTtcclxuICAgICAgICAgICAgc2V0dGluZ05vZGUubmFtZSA9IFwiU2V0dGluZ1wiO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFNldHRpbmdCdXR0b24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdFNldHRpbmdCdXR0b24oKXtcclxuICAgICAgICAvL0V4aXRTZXR0aW5nQnV0dG9uIGlzIGEgYml1dHRvbiBpbiBTZXR0aW5nIHByZWZhYlxyXG4gICAgICAgIGxldCBFeGl0U2V0dGluZ0J1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIEV4aXRTZXR0aW5nQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIEV4aXRTZXR0aW5nQnV0dG9uLmhhbmRsZXIgPSBcIkV4aXRTZXR0aW5nXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0V4aXRTZXR0aW5nXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNldHRpbmdCdXR0b24pO1xyXG5cclxuICAgICAgICAvL1NpZ24gdXBcclxuICAgICAgICBsZXQgU2lnblVwQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTaWduVXBCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBTaWduVXBCdXR0b24uaGFuZGxlciA9IFwiU2lnblVwXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFNpZ25VcEJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vTG9naW5cclxuICAgICAgICBsZXQgTG9naW5CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBMb2dpbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gXCJMb2dpblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9Mb2dpblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKExvZ2luQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy9Wb2x1bW5zbGlkZXJcclxuICAgICAgICBsZXQgVm9sdW1uc2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1ZvbHVtbi9Wb2x1bW5TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uICE9PSBudWxsKSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgVm9sdW1uc2xpZGVyLnByb2dyZXNzID0gMC41O1xyXG4gICAgICAgIFZvbHVtbnNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEV4aXRTZXR0aW5nKCkge1xyXG4gICAgICAgIGxldCBzZXR0aW5nTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZ1wiKTtcclxuICAgICAgICBpZihzZXR0aW5nTm9kZSkgc2V0dGluZ05vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVm9sdW1uQ2hhbmdlKHNsaWRlcjogY2MuU2xpZGVyKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpOyAvLyAwfjFcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7XHJcbiAgICAgICAgdGhpcy5Wb2x1bW5WYWx1ZSA9IHNsaWRlci5wcm9ncmVzcztcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiLCB0aGlzLlZvbHVtblZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIFNpZ25VcCgpe1xyXG4gICAgICAgIHRoaXMuaXNTaWduaW5nVXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3BlblNpZ251cExvZ2luUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBMb2dpbigpIHtcclxuICAgICAgICB0aGlzLmlzU2lnbmluZ1VwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcGVuU2lnbnVwTG9naW5QYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlblNpZ251cExvZ2luUGFuZWwoKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL1NpZ251cExvZ2luXCIsIGNjLlByZWZhYiwgKGVyciwgYXNzZXQpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU2lnbnVwTG9naW4gcHJlZmFiOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENhc3QgdGhlIGxvYWRlZCBhc3NldCB0byBjYy5QcmVmYWI6XHJcbiAgICAgICAgY29uc3QgcHJlZmFiID0gYXNzZXQgYXMgY2MuUHJlZmFiO1xyXG5cclxuICAgICAgICAvLyBOb3cgaW5zdGFudGlhdGUgYSBOb2RlIGZyb20gdGhhdCBwcmVmYWJcclxuICAgICAgICBjb25zdCBzaWdudXBMb2dpbk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUuc2NhbGVYID0gMC41O1xyXG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5zY2FsZVkgPSAwLjU7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnpJbmRleCA9IDEwMDA7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nXCIpLmFkZENoaWxkKHNpZ251cExvZ2luTm9kZSk7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLm5hbWUgPSBcIlNpZ251cExvZ2luXCI7XHJcblxyXG4gICAgICAgIC8vIGdyYWIgdGhlIEF1dGhNYW5hZ2VyIGNvbXBvbmVudCBmcm9tIHRoZSBuZXdseeKAkGNyZWF0ZWQgTm9kZVxyXG4gICAgICAgIHRoaXMuYXV0aENvbXAgPSBzaWdudXBMb2dpbk5vZGUuZ2V0Q29tcG9uZW50KEF1dGhNYW5hZ2VyKTtcclxuICAgICAgICBpZiAoIXRoaXMuYXV0aENvbXApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJBdXRoTWFuYWdlciBjb21wb25lbnQgbm90IGZvdW5kIG9uIFNpZ251cExvZ2luIHByZWZhYiFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFNpZ251cExvZ2luKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNpZ251cExvZ2luKCkge1xyXG4gICAgICAgIC8vIOKAnEV4aXTigJ0gYnV0dG9uIHdpcmluZyAodW5jaGFuZ2VkKeKAplxyXG4gICAgICAgIGxldCBFeGl0U2lnbnVwTG9naW5CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIEV4aXRTaWdudXBMb2dpbkJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIEV4aXRTaWdudXBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gXCJFeGl0U2lnbnVwTG9naW5cIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnbnVwTG9naW4vRXhpdFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKEV4aXRTaWdudXBMb2dpbkJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vIOKAnFNhdmXigJ0gYnV0dG9uIG5vdyBjYWxscyBlaXRoZXIgYXV0aENvbXAuU2lnblVwIG9yIGF1dGhDb21wLkxvZ2luXHJcbiAgICAgICAgbGV0IFNhdmVTaWdudXBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgU2F2ZVNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMuYXV0aENvbXAhLm5vZGU7XHJcbiAgICAgICAgU2F2ZVNpZ251cExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiQXV0aE1hbmFnZXJcIjtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uaGFuZGxlciA9IHRoaXMuaXNTaWduaW5nVXAgPyBcIlNpZ25VcFwiIDogXCJMb2dpblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9TYXZlXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU2F2ZVNpZ251cExvZ2luQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBFeGl0U2lnbnVwTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IFRfTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpblwiKTtcclxuICAgICAgICBpZihUX05vZGUpIHtcclxuICAgICAgICAgICAgVF9Ob2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZVN0YXJ0QnV0dG9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0R2FtZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19