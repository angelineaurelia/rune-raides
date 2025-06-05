"use strict";
cc._RF.push(module, 'c55e5C+eUhOeZ3fY8Q0UFHf', 'LoginSignUp');
// scripts/Menu/LoginSignUp.ts

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
// assets/scripts/LoginManager.ts
var FirebaseManager_1 = require("./FirebaseManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginManager = /** @class */ (function (_super) {
    __extends(LoginManager, _super);
    function LoginManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emailEditBox = null;
        _this.passwordEditBox = null;
        _this.infoLabel = null;
        return _this;
    }
    // Email 註冊
    LoginManager.prototype.onRegister = function () {
        var _this = this;
        var email = this.emailEditBox.string;
        var password = this.passwordEditBox.string;
        FirebaseManager_1.auth.createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            _this.infoLabel.string = "註冊成功：" + userCredential.user.email;
        })
            .catch(function (error) {
            _this.infoLabel.string = "註冊失敗：" + error.message;
        });
    };
    // Email 登入
    LoginManager.prototype.onLogin = function () {
        var _this = this;
        var email = this.emailEditBox.string;
        var password = this.passwordEditBox.string;
        FirebaseManager_1.auth.signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            _this.infoLabel.string = "登入成功：" + userCredential.user.email;
        })
            .catch(function (error) {
            _this.infoLabel.string = "登入失敗：" + error.message;
        });
    };
    // Google 登入
    LoginManager.prototype.onGoogleLogin = function () {
        var _this = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        FirebaseManager_1.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.infoLabel.string = "Google 登入成功：" + result.user.email;
        })
            .catch(function (error) {
            _this.infoLabel.string = "Google 登入失敗：" + error.message;
        });
    };
    __decorate([
        property(cc.EditBox)
    ], LoginManager.prototype, "emailEditBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], LoginManager.prototype, "passwordEditBox", void 0);
    __decorate([
        property(cc.Label)
    ], LoginManager.prototype, "infoLabel", void 0);
    LoginManager = __decorate([
        ccclass
    ], LoginManager);
    return LoginManager;
}(cc.Component));
exports.default = LoginManager;

cc._RF.pop();