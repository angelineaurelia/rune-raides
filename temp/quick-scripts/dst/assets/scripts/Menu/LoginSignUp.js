
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/LoginSignUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c55e5C+eUhOeZ3fY8Q0UFHf', 'LoginSignUp');
// scripts/Menu/LoginSignUp.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// assets/scripts/LoginManager.ts
/*import { auth } from "./FirebaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginManager extends cc.Component {
    @property(cc.EditBox)
    emailEditBox: cc.EditBox = null;

    @property(cc.EditBox)
    passwordEditBox: cc.EditBox = null;

    @property(cc.Label)
    infoLabel: cc.Label = null;

  // Email 註冊
    onRegister() {
        const email = this.emailEditBox.string;
        const password = this.passwordEditBox.string;
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                this.infoLabel.string = "註冊成功：" + userCredential.user.email;
            })
        .catch(error => {
            this.infoLabel.string = "註冊失敗：" + error.message;
        });
    }

  // Email 登入
    onLogin() {
        const email = this.emailEditBox.string;
        const password = this.passwordEditBox.string;
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            this.infoLabel.string = "登入成功：" + userCredential.user.email;
        })
        .catch(error => {
            this.infoLabel.string = "登入失敗：" + error.message;
        });
    }

  // Google 登入
    onGoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then(result => {
            this.infoLabel.string = "Google 登入成功：" + result.user.email;
        })
        .catch(error => {
            this.infoLabel.string = "Google 登入失敗：" + error.message;
        });
    }
}*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTG9naW5TaWduVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFFbEYsaUNBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuLy8gYXNzZXRzL3NjcmlwdHMvTG9naW5NYW5hZ2VyLnRzXHJcbi8qaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL0ZpcmViYXNlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVtYWlsRWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwYXNzd29yZEVkaXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGluZm9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyBFbWFpbCDoqLvlhopcclxuICAgIG9uUmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyQ3JlZGVudGlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIuiou+WGiuaIkOWKn++8mlwiICsgdXNlckNyZWRlbnRpYWwudXNlci5lbWFpbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIuiou+WGiuWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gRW1haWwg55m75YWlXHJcbiAgICBvbkxvZ2luKCkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5lbWFpbEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKHVzZXJDcmVkZW50aWFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvTGFiZWwuc3RyaW5nID0gXCLnmbvlhaXmiJDlip/vvJpcIiArIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIueZu+WFpeWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gR29vZ2xlIOeZu+WFpVxyXG4gICAgb25Hb29nbGVMb2dpbigpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwiR29vZ2xlIOeZu+WFpeaIkOWKn++8mlwiICsgcmVzdWx0LnVzZXIuZW1haWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIkdvb2dsZSDnmbvlhaXlpLHmlZfvvJpcIiArIGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0qL1xyXG5cclxuIl19