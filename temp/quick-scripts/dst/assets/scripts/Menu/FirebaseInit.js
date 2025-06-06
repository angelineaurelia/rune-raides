
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/FirebaseInit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1a17JHHO1CcJy04wT2g108', 'FirebaseInit');
// scripts/Menu/FirebaseInit.ts

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
var ccclass = cc._decorator.ccclass;
var FirebaseInit = /** @class */ (function (_super) {
    __extends(FirebaseInit, _super);
    function FirebaseInit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseInit.prototype.onLoad = function () {
        if (!window._firebaseInited) {
            var config = {
                apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
                authDomain: "rune-raids.firebaseapp.com",
                projectId: "rune-raids",
                storageBucket: "rune-raids.firebasestorage.app",
                messagingSenderId: "530514360843",
                appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
                measurementId: "G-B1C5FG1YSN"
            };
            firebase.initializeApp(config);
            firebase.firestore();
            firebase.auth();
            window._firebaseInited = true;
            cc.log("Firebase initialized");
        }
        cc.game.addPersistRootNode(this.node);
    };
    FirebaseInit = __decorate([
        ccclass('FirebaseInit')
    ], FirebaseInit);
    return FirebaseInit;
}(cc.Component));
exports.default = FirebaseInit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcRmlyZWJhc2VJbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQTBDLGdDQUFZO0lBQXREOztJQW9CQSxDQUFDO0lBbkJDLDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMzQixJQUFNLE1BQU0sR0FBRztnQkFDYixNQUFNLEVBQUUseUNBQXlDO2dCQUNqRCxVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxTQUFTLEVBQUUsWUFBWTtnQkFDdkIsYUFBYSxFQUFFLGdDQUFnQztnQkFDL0MsaUJBQWlCLEVBQUUsY0FBYztnQkFDakMsS0FBSyxFQUFFLDJDQUEyQztnQkFDbEQsYUFBYSxFQUFFLGNBQWM7YUFDOUIsQ0FBQztZQUNGLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDaEM7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBbkJrQixZQUFZO1FBRGhDLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDSCxZQUFZLENBb0JoQztJQUFELG1CQUFDO0NBcEJELEFBb0JDLENBcEJ5QyxFQUFFLENBQUMsU0FBUyxHQW9CckQ7a0JBcEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvRmlyZWJhc2VJbml0LnRzXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIF9maXJlYmFzZUluaXRlZD86IGJvb2xlYW47XHJcbiAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdGaXJlYmFzZUluaXQnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlYmFzZUluaXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeURGVzQtZW1XZEkxZ2hnWldXR3Axd3FvV3ZBdlR3QXFyUVwiLFxyXG4gICAgICAgIGF1dGhEb21haW46IFwicnVuZS1yYWlkcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTMwNTE0MzYwODQzXCIsXHJcbiAgICAgICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbiAgICAgIH07XHJcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICAgIGZpcmViYXNlLmF1dGgoKTtcclxuICAgICAgd2luZG93Ll9maXJlYmFzZUluaXRlZCA9IHRydWU7XHJcbiAgICAgIGNjLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgfVxyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICB9XHJcbn0iXX0=