
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/AuthManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df599DLGEpEProbgXphfwt4', 'AuthManager');
// scripts/Menu/AuthManager.ts

"use strict";
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
var AuthManager = /** @class */ (function (_super) {
    __extends(AuthManager, _super);
    function AuthManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // These get wired automatically by find() in onLoad()
        _this.usernameEB = null;
        _this.emailEB = null;
        _this.pwdEB = null;
        _this.saveBtn = null;
        _this.exitBtn = null;
        _this.user = "";
        _this.auth = null;
        return _this;
    }
    AuthManager.prototype.onLoad = function () {
        var _this = this;
        this.usernameEB = cc.find("UserName", this.node).getComponent(cc.EditBox);
        this.emailEB = cc.find("Email", this.node).getComponent(cc.EditBox);
        this.pwdEB = cc.find("Password", this.node).getComponent(cc.EditBox);
        this.saveBtn = cc.find("Save", this.node).getComponent(cc.Button);
        this.exitBtn = cc.find("Exit", this.node).getComponent(cc.Button);
        this.saveBtn.node.on('click', this.onSaveClicked, this);
        this.exitBtn.node.on('click', function () { return _this.node.destroy(); }, this);
        // 3) Initialize Firebase Auth
        if (!window._firebaseInited) {
            cc.error("Firebase not initialized! Make sure FirebaseInit is in your scene.");
        }
        this.auth = firebase.auth();
    };
    AuthManager.prototype.onSaveClicked = function () {
        var _this = this;
        var isSigningUp = cc.find("Canvas/MenuMgr").getComponent("MenuMgr").isSigningUp;
        if (isSigningUp)
            this.signup();
        else
            this.login();
        var username = this.usernameEB.string.trim();
        var email = this.emailEB.string.trim();
        var password = this.pwdEB.string;
        this.user = username;
        if (!email || !password || !username) {
            cc.warn("All fields must be filled.");
            return;
        }
        // 4) Create user and set displayName
        this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (userCred) {
            return userCred.user.updateProfile({ displayName: username });
        })
            .then(function () {
            cc.log(text + " succeeded:", username);
            _this.showPopup(text + " Successful");
        })
            .catch(function (err) {
            cc.error(text + " error:", err.code, err.message);
        });
    };
    AuthManager.prototype.signup = function () {
        var _this = this;
        var username = this.usernameEB.string.trim();
        var email = this.emailEB.string.trim();
        var password = this.pwdEB.string;
        if (!email || !password || !username) {
            cc.warn("All fields must be filled.");
            return;
        }
        // 4) Create user and set displayName
        this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (userCred) {
            return userCred.user.updateProfile({ displayName: username });
        })
            .then(function () {
            cc.log("Signup succeeded:", username);
            _this.showPopup("Signup Successful");
        })
            .catch(function (err) {
            cc.error("Signup error:", err.code, err.message);
            _this.showPopup("\nSignup Failed: " + err.message);
        });
    };
    AuthManager.prototype.login = function () {
        var _this = this;
        var username = this.usernameEB.string.trim();
        var email = this.emailEB.string.trim();
        var password = this.pwdEB.string;
        if (!email || !password || !username) {
            cc.warn("All fields must be filled.");
            return;
        }
        this.auth.signInWithEmailAndPassword(email, password).then(function (userCred) {
            cc.log("Login succeeded:", username);
            _this.showPopup("\nLogin Successful");
        })
            .catch(function (err) {
            cc.error("Login error:", err.code, err.message);
            _this.showPopup("\nLogin Failed: " + err.message);
        });
    };
    AuthManager.prototype.showPopup = function (msg) {
        var _this = this;
        // Load and instantiate SuccessPopup
        cc.resources.load("prefabs/SuccessPopup", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load SuccessPopup:", err);
                return;
            }
            var popupNode = cc.instantiate(prefab);
            popupNode.setPosition(0, 0);
            popupNode.zIndex = 2000;
            cc.find("Canvas").addChild(popupNode);
            var popupComp = popupNode.getComponent("SuccessPopup");
            popupComp.messageLabel.string = msg;
            // When user clicks OK → destroy signup UI
            popupComp.onOk = function () {
                _this.node.destroy();
            };
        });
    };
    AuthManager = __decorate([
        ccclass('AuthManager')
    ], AuthManager);
    return AuthManager;
}(cc.Component));
exports.default = AuthManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcQXV0aE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2SEM7UUE1SEMsc0RBQXNEO1FBQ3RELGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFDM0IsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFbkIsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNqQixVQUFJLEdBQVEsSUFBSSxDQUFDOztJQW9IM0IsQ0FBQztJQWxIQyw0QkFBTSxHQUFOO1FBQUEsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxD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Q0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUVwQywwQ0FBMEM7WUFDMUMsU0FBUyxDQUFDLElBQUksR0FBRztnQkFDZixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVIa0IsV0FBVztRQUQvQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ0YsV0FBVyxDQTZIL0I7SUFBRCxrQkFBQztDQTdIRCxBQTZIQyxDQTdId0MsRUFBRSxDQUFDLFNBQVMsR0E2SHBEO2tCQTdIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL0F1dGhNYW5hZ2VyLnRzXHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLy8gRW5zdXJlIEZpcmViYXNlIGlzIGluaXRpYWxpemVkIGJlZm9yZSB1c2luZyBpdFxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBfZmlyZWJhc2VJbml0ZWQ/OiBib29sZWFuO1xyXG4gIH1cclxufVxyXG5AY2NjbGFzcygnQXV0aE1hbmFnZXInKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8gVGhlc2UgZ2V0IHdpcmVkIGF1dG9tYXRpY2FsbHkgYnkgZmluZCgpIGluIG9uTG9hZCgpXHJcbiAgdXNlcm5hbWVFQjogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgZW1haWxFQjogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgcHdkRUI6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gIHNhdmVCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgZXhpdEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHVzZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgcHJpdmF0ZSBhdXRoOiBhbnkgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gICAgdGhpcy51c2VybmFtZUVCID0gY2MuZmluZChcIlVzZXJOYW1lXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgdGhpcy5lbWFpbEVCICAgID0gY2MuZmluZChcIkVtYWlsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgdGhpcy5wd2RFQiAgICAgID0gY2MuZmluZChcIlBhc3N3b3JkXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG5cclxuICAgIHRoaXMuc2F2ZUJ0biA9IGNjLmZpbmQoXCJTYXZlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICB0aGlzLmV4aXRCdG4gPSBjYy5maW5kKFwiRXhpdFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgdGhpcy5zYXZlQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblNhdmVDbGlja2VkLCB0aGlzKTtcclxuICAgIHRoaXMuZXhpdEJ0bi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMubm9kZS5kZXN0cm95KCksIHRoaXMpO1xyXG5cclxuICAgIC8vIDMpIEluaXRpYWxpemUgRmlyZWJhc2UgQXV0aFxyXG4gICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgIGNjLmVycm9yKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkISBNYWtlIHN1cmUgRmlyZWJhc2VJbml0IGlzIGluIHlvdXIgc2NlbmUuXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNhdmVDbGlja2VkKCkge1xyXG4gICAgbGV0IGlzU2lnbmluZ1VwID0gY2MuZmluZChcIkNhbnZhcy9NZW51TWdyXCIpLmdldENvbXBvbmVudChcIk1lbnVNZ3JcIikuaXNTaWduaW5nVXA7XHJcbiAgICBpZiAoaXNTaWduaW5nVXApIHRoaXMuc2lnbnVwKCk7XHJcbiAgICBlbHNlIHRoaXMubG9naW4oKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZUVCLnN0cmluZy50cmltKCk7XHJcbiAgICBjb25zdCBlbWFpbCAgICA9IHRoaXMuZW1haWxFQi5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcclxuICAgIHRoaXMudXNlciA9IHVzZXJuYW1lO1xyXG5cclxuICAgIFxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXVzZXJuYW1lKSB7XHJcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQpIENyZWF0ZSB1c2VyIGFuZCBzZXQgZGlzcGxheU5hbWVcclxuICAgXHJcbiAgICB0aGlzLmF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJDcmVkLnVzZXIudXBkYXRlUHJvZmlsZSh7IGRpc3BsYXlOYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNjLmxvZyh0ZXh0ICsgXCIgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wdXAodGV4dCArIFwiIFN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICBjYy5lcnJvcih0ZXh0ICsgXCIgZXJyb3I6XCIsIGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaWdudXAoKXtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZUVCLnN0cmluZy50cmltKCk7XHJcbiAgICBjb25zdCBlbWFpbCAgICA9IHRoaXMuZW1haWxFQi5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhdXNlcm5hbWUpIHtcclxuICAgICAgY2Mud2FybihcIkFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNCkgQ3JlYXRlIHVzZXIgYW5kIHNldCBkaXNwbGF5TmFtZVxyXG4gICAgdGhpcy5hdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigodXNlckNyZWQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyQ3JlZC51c2VyLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdXNlcm5hbWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjYy5sb2coXCJTaWdudXAgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoXCJTaWdudXAgU3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNjLmVycm9yKFwiU2lnbnVwIGVycm9yOlwiLCBlcnIuY29kZSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcHVwKFwiXFxuU2lnbnVwIEZhaWxlZDogXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGxvZ2luKCl7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgZW1haWwgICAgPSB0aGlzLmVtYWlsRUIuc3RyaW5nLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wd2RFQi5zdHJpbmc7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXVzZXJuYW1lKSB7XHJcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigodXNlckNyZWQ6IGFueSkgPT4ge1xyXG4gICAgICBjYy5sb2coXCJMb2dpbiBzdWNjZWVkZWQ6XCIsIHVzZXJuYW1lKTtcclxuICAgICAgdGhpcy5zaG93UG9wdXAoXCJcXG5Mb2dpbiBTdWNjZXNzZnVsXCIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgY2MuZXJyb3IoXCJMb2dpbiBlcnJvcjpcIiwgZXJyLmNvZGUsIGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zaG93UG9wdXAoXCJcXG5Mb2dpbiBGYWlsZWQ6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dQb3B1cChtc2c6IHN0cmluZykge1xyXG4gICAgLy8gTG9hZCBhbmQgaW5zdGFudGlhdGUgU3VjY2Vzc1BvcHVwXHJcbiAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU3VjY2Vzc1BvcHVwXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU3VjY2Vzc1BvcHVwOlwiLCBlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwb3B1cE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICBwb3B1cE5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgIHBvcHVwTm9kZS56SW5kZXggPSAyMDAwO1xyXG4gICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKHBvcHVwTm9kZSk7XHJcblxyXG4gICAgICBjb25zdCBwb3B1cENvbXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFwiU3VjY2Vzc1BvcHVwXCIpIGFzIGFueTtcclxuICAgICAgcG9wdXBDb21wLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSBtc2c7XHJcblxyXG4gICAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIE9LIOKGkiBkZXN0cm95IHNpZ251cCBVSVxyXG4gICAgICBwb3B1cENvbXAub25PayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19