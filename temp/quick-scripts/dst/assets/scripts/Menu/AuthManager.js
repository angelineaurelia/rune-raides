
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvQXV0aE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2SEM7UUE1SEMsc0RBQXNEO1FBQ3RELGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFDM0IsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFbkIsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNqQixVQUFJLEdBQVEsSUFBSSxDQUFDOztJQW9IM0IsQ0FBQztJQWxIQyw0QkFBTSxHQUFOO1FBQUEsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFuQixDQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9ELDhCQUE4QjtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7U0FDaEY7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFBQSxpQkE2QkM7UUE1QkMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDaEYsSUFBSSxXQUFXO1lBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBTSxLQUFLLEdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFHckIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNSO1FBRUQscUNBQXFDO1FBRXJDLElBQUksQ0FBQyxJQUFJO2FBQ04sOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzthQUMvQyxJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2xCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDSixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUTtZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyw0QkFBTSxHQUFkO1FBQUEsaUJBd0JDO1FBdkJDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9DLElBQU0sS0FBSyxHQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQ3RDLE9BQU87U0FDUjtRQUVELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSTthQUNOLDhCQUE4QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDL0MsSUFBSSxDQUFDLFVBQUMsUUFBYTtZQUNsQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUTtZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNPLDJCQUFLLEdBQWI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBTSxLQUFLLEdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBYTtZQUN2RSxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFRO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sK0JBQVMsR0FBakIsVUFBa0IsR0FBVztRQUE3QixpQkFvQkM7UUFuQkMsb0NBQW9DO1FBQ3BDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBaUI7WUFDMUUsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUMsT0FBTzthQUNSO1lBQ0QsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV0QyxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBUSxDQUFDO1lBQ2hFLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUVwQywwQ0FBMEM7WUFDMUMsU0FBUyxDQUFDLElBQUksR0FBRztnQkFDZixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVIa0IsV0FBVztRQUQvQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ0YsV0FBVyxDQTZIL0I7SUFBRCxrQkFBQztDQTdIRCxBQTZIQyxDQTdId0MsRUFBRSxDQUFDLFNBQVMsR0E2SHBEO2tCQTdIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL0F1dGhNYW5hZ2VyLnRzXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLy8gRW5zdXJlIEZpcmViYXNlIGlzIGluaXRpYWxpemVkIGJlZm9yZSB1c2luZyBpdFxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfZmlyZWJhc2VJbml0ZWQ/OiBib29sZWFuO1xuICB9XG59XG5AY2NjbGFzcygnQXV0aE1hbmFnZXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAvLyBUaGVzZSBnZXQgd2lyZWQgYXV0b21hdGljYWxseSBieSBmaW5kKCkgaW4gb25Mb2FkKClcbiAgdXNlcm5hbWVFQjogY2MuRWRpdEJveCA9IG51bGw7XG4gIGVtYWlsRUI6IGNjLkVkaXRCb3ggPSBudWxsO1xuICBwd2RFQjogY2MuRWRpdEJveCA9IG51bGw7XG4gIHNhdmVCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIGV4aXRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgcHVibGljIHVzZXI6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgYXV0aDogYW55ID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG5cbiAgICB0aGlzLnVzZXJuYW1lRUIgPSBjYy5maW5kKFwiVXNlck5hbWVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgdGhpcy5lbWFpbEVCICAgID0gY2MuZmluZChcIkVtYWlsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xuICAgIHRoaXMucHdkRUIgICAgICA9IGNjLmZpbmQoXCJQYXNzd29yZFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcblxuICAgIHRoaXMuc2F2ZUJ0biA9IGNjLmZpbmQoXCJTYXZlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgdGhpcy5leGl0QnRuID0gY2MuZmluZChcIkV4aXRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB0aGlzLnNhdmVCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU2F2ZUNsaWNrZWQsIHRoaXMpO1xuICAgIHRoaXMuZXhpdEJ0bi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMubm9kZS5kZXN0cm95KCksIHRoaXMpO1xuXG4gICAgLy8gMykgSW5pdGlhbGl6ZSBGaXJlYmFzZSBBdXRoXG4gICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XG4gICAgICBjYy5lcnJvcihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZCEgTWFrZSBzdXJlIEZpcmViYXNlSW5pdCBpcyBpbiB5b3VyIHNjZW5lLlwiKTtcbiAgICB9XG4gICAgdGhpcy5hdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNhdmVDbGlja2VkKCkge1xuICAgIGxldCBpc1NpZ25pbmdVcCA9IGNjLmZpbmQoXCJDYW52YXMvTWVudU1nclwiKS5nZXRDb21wb25lbnQoXCJNZW51TWdyXCIpLmlzU2lnbmluZ1VwO1xuICAgIGlmIChpc1NpZ25pbmdVcCkgdGhpcy5zaWdudXAoKTtcbiAgICBlbHNlIHRoaXMubG9naW4oKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IGVtYWlsICAgID0gdGhpcy5lbWFpbEVCLnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcbiAgICB0aGlzLnVzZXIgPSB1c2VybmFtZTtcblxuICAgIFxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICF1c2VybmFtZSkge1xuICAgICAgY2Mud2FybihcIkFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIDQpIENyZWF0ZSB1c2VyIGFuZCBzZXQgZGlzcGxheU5hbWVcbiAgIFxuICAgIHRoaXMuYXV0aFxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigodXNlckNyZWQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNyZWQudXNlci51cGRhdGVQcm9maWxlKHsgZGlzcGxheU5hbWU6IHVzZXJuYW1lIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY2MubG9nKHRleHQgKyBcIiBzdWNjZWVkZWQ6XCIsIHVzZXJuYW1lKTtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAodGV4dCArIFwiIFN1Y2Nlc3NmdWxcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjYy5lcnJvcih0ZXh0ICsgXCIgZXJyb3I6XCIsIGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2lnbnVwKCl7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRUIuc3RyaW5nLnRyaW0oKTtcbiAgICBjb25zdCBlbWFpbCAgICA9IHRoaXMuZW1haWxFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wd2RFQi5zdHJpbmc7XG5cbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhdXNlcm5hbWUpIHtcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyA0KSBDcmVhdGUgdXNlciBhbmQgc2V0IGRpc3BsYXlOYW1lXG4gICAgdGhpcy5hdXRoXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ3JlZC51c2VyLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjYy5sb2coXCJTaWdudXAgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XG4gICAgICAgIHRoaXMuc2hvd1BvcHVwKFwiU2lnbnVwIFN1Y2Nlc3NmdWxcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjYy5lcnJvcihcIlNpZ251cCBlcnJvcjpcIiwgZXJyLmNvZGUsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoXCJcXG5TaWdudXAgRmFpbGVkOiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbG9naW4oKXtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IGVtYWlsICAgID0gdGhpcy5lbWFpbEVCLnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICF1c2VybmFtZSkge1xuICAgICAgY2Mud2FybihcIkFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XG4gICAgICBjYy5sb2coXCJMb2dpbiBzdWNjZWVkZWQ6XCIsIHVzZXJuYW1lKTtcbiAgICAgIHRoaXMuc2hvd1BvcHVwKFwiXFxuTG9naW4gU3VjY2Vzc2Z1bFwiKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgIGNjLmVycm9yKFwiTG9naW4gZXJyb3I6XCIsIGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLnNob3dQb3B1cChcIlxcbkxvZ2luIEZhaWxlZDogXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNob3dQb3B1cChtc2c6IHN0cmluZykge1xuICAgIC8vIExvYWQgYW5kIGluc3RhbnRpYXRlIFN1Y2Nlc3NQb3B1cFxuICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TdWNjZXNzUG9wdXBcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFN1Y2Nlc3NQb3B1cDpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9wdXBOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgIHBvcHVwTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgIHBvcHVwTm9kZS56SW5kZXggPSAyMDAwO1xuICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChwb3B1cE5vZGUpO1xuXG4gICAgICBjb25zdCBwb3B1cENvbXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFwiU3VjY2Vzc1BvcHVwXCIpIGFzIGFueTtcbiAgICAgIHBvcHVwQ29tcC5tZXNzYWdlTGFiZWwuc3RyaW5nID0gbXNnO1xuXG4gICAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIE9LIOKGkiBkZXN0cm95IHNpZ251cCBVSVxuICAgICAgcG9wdXBDb21wLm9uT2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59Il19