
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTG9naW5TaWduVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFFbEYsaUNBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbi8vIGFzc2V0cy9zY3JpcHRzL0xvZ2luTWFuYWdlci50c1xuLyppbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vRmlyZWJhc2VNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVtYWlsRWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwYXNzd29yZEVkaXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGluZm9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gIC8vIEVtYWlsIOiou+WGilxuICAgIG9uUmVnaXN0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5lbWFpbEVkaXRCb3guc3RyaW5nO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRFZGl0Qm94LnN0cmluZztcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4odXNlckNyZWRlbnRpYWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwi6Ki75YaK5oiQ5Yqf77yaXCIgKyB1c2VyQ3JlZGVudGlhbC51c2VyLmVtYWlsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwi6Ki75YaK5aSx5pWX77yaXCIgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLy8gRW1haWwg55m75YWlXG4gICAgb25Mb2dpbigpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsRWRpdEJveC5zdHJpbmc7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEVkaXRCb3guc3RyaW5nO1xuICAgICAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4odXNlckNyZWRlbnRpYWwgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbmZvTGFiZWwuc3RyaW5nID0gXCLnmbvlhaXmiJDlip/vvJpcIiArIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIueZu+WFpeWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8vIEdvb2dsZSDnmbvlhaVcbiAgICBvbkdvb2dsZUxvZ2luKCkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgICAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwiR29vZ2xlIOeZu+WFpeaIkOWKn++8mlwiICsgcmVzdWx0LnVzZXIuZW1haWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIkdvb2dsZSDnmbvlhaXlpLHmlZfvvJpcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0qL1xuXG4iXX0=