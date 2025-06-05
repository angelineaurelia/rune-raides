
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AuthManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df599DLGEpEProbgXphfwt4', 'AuthManager');
// scripts/AuthManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1dGhNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEVDO1FBekVDLHNEQUFzRDtRQUN0RCxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUM5QixhQUFPLEdBQWUsSUFBSSxDQUFDO1FBQzNCLFdBQUssR0FBZSxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRWxCLFVBQUksR0FBUSxJQUFJLENBQUM7O0lBa0UzQixDQUFDO0lBaEVDLDRCQUFNLEdBQU47UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxPQUFPLEdBQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xF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R0FBRyxDQUFDO1lBRXBDLDBDQUEwQztZQUMxQyxTQUFTLENBQUMsSUFBSSxHQUFHO2dCQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBekVrQixXQUFXO1FBRC9CLE9BQU8sQ0FBQyxhQUFhLENBQUM7T0FDRixXQUFXLENBMEUvQjtJQUFELGtCQUFDO0NBMUVELEFBMEVDLENBMUV3QyxFQUFFLENBQUMsU0FBUyxHQTBFcEQ7a0JBMUVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvQXV0aE1hbmFnZXIudHNcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdBdXRoTWFuYWdlcicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIFRoZXNlIGdldCB3aXJlZCBhdXRvbWF0aWNhbGx5IGJ5IGZpbmQoKSBpbiBvbkxvYWQoKVxuICB1c2VybmFtZUVCOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgZW1haWxFQjogY2MuRWRpdEJveCA9IG51bGw7XG4gIHB3ZEVCOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgc2F2ZUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgZXhpdEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBwcml2YXRlIGF1dGg6IGFueSA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudXNlcm5hbWVFQiA9IGNjLmZpbmQoXCJVc2VyTmFtZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICB0aGlzLmVtYWlsRUIgICAgPSBjYy5maW5kKFwiRW1haWxcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgdGhpcy5wd2RFQiAgICAgID0gY2MuZmluZChcIlBhc3N3b3JkXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xuXG4gICAgdGhpcy5zYXZlQnRuID0gY2MuZmluZChcIlNhdmVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB0aGlzLmV4aXRCdG4gPSBjYy5maW5kKFwiRXhpdFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgIFxuICAgIHRoaXMuc2F2ZUJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25TYXZlQ2xpY2tlZCwgdGhpcyk7XG4gICAgdGhpcy5leGl0QnRuLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5ub2RlLmRlc3Ryb3koKSwgdGhpcyk7XG5cbiAgICAvLyAzKSBJbml0aWFsaXplIEZpcmViYXNlIEF1dGhcbiAgICBpZiAoIXdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpIHtcbiAgICAgIGNjLmVycm9yKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkISBNYWtlIHN1cmUgRmlyZWJhc2VJbml0IGlzIGluIHlvdXIgc2NlbmUuXCIpO1xuICAgIH1cbiAgICB0aGlzLmF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG4gIH1cblxuICBwcml2YXRlIG9uU2F2ZUNsaWNrZWQoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRUIuc3RyaW5nLnRyaW0oKTtcbiAgICBjb25zdCBlbWFpbCAgICA9IHRoaXMuZW1haWxFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wd2RFQi5zdHJpbmc7XG5cbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhdXNlcm5hbWUpIHtcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyA0KSBDcmVhdGUgdXNlciBhbmQgc2V0IGRpc3BsYXlOYW1lXG4gICAgdGhpcy5hdXRoXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ3JlZC51c2VyLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjYy5sb2coXCJTaWdudXAgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XG4gICAgICAgIHRoaXMuc2hvd1BvcHVwKFwiU2lnbnVwIFN1Y2Nlc3NmdWxcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjYy5lcnJvcihcIlNpZ251cCBlcnJvcjpcIiwgZXJyLmNvZGUsIGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93UG9wdXAobXNnOiBzdHJpbmcpIHtcbiAgICAvLyBMb2FkIGFuZCBpbnN0YW50aWF0ZSBTdWNjZXNzUG9wdXBcbiAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU3VjY2Vzc1BvcHVwXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBTdWNjZXNzUG9wdXA6XCIsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvcHVwTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICBwb3B1cE5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICBwb3B1cE5vZGUuekluZGV4ID0gMjAwMDtcbiAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQocG9wdXBOb2RlKTtcblxuICAgICAgY29uc3QgcG9wdXBDb21wID0gcG9wdXBOb2RlLmdldENvbXBvbmVudChcIlN1Y2Nlc3NQb3B1cFwiKSBhcyBhbnk7XG4gICAgICBwb3B1cENvbXAubWVzc2FnZUxhYmVsLnN0cmluZyA9IG1zZztcblxuICAgICAgLy8gV2hlbiB1c2VyIGNsaWNrcyBPSyDihpIgZGVzdHJveSBzaWdudXAgVUlcbiAgICAgIHBvcHVwQ29tcC5vbk9rID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufSJdfQ==