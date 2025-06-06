"use strict";
cc._RF.push(module, '4999co+59BDVK7wwshiNS5K', 'Menu');
// scripts/Menu/Menu.ts

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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ExitButton = null;
        _this.Menubgm = null;
        _this.VolumnValue = 0.5;
        return _this;
    }
    Menu.prototype.onLoad = function () {
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            this.VolumnValue = Number(savedVolumn);
        else
            this.VolumnValue = 0.5;
        this.playbgm();
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
        var exitHandler = new cc.Component.EventHandler();
        exitHandler.target = this.node;
        exitHandler.component = "Menu";
        exitHandler.handler = "ExitButtonEvent";
        this.ExitButton.clickEvents.push(exitHandler);
    };
    Menu.prototype.start = function () {
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "Menu";
        StartButton.handler = "LoadGame";
        cc.find("Canvas/background/StartButton").getComponent(cc.Button).clickEvents.push(StartButton);
        var MapButton = new cc.Component.EventHandler();
        MapButton.target = this.node;
        MapButton.component = "Menu";
        MapButton.handler = "LoadMap";
        cc.find("Canvas/background/MapButton").getComponent(cc.Button).clickEvents.push(MapButton);
    };
    Menu.prototype.LoadGame = function () {
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo");
        });
    };
    Menu.prototype.LoadMap = function () {
        var _a;
        var username = ((_a = cc.find("Canvas/MenuMgr").getComponent("MenuMgr").authComp) === null || _a === void 0 ? void 0 : _a.user) || "Guest";
        if (username)
            cc.sys.localStorage.setItem(username, 0);
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo_test");
        });
    };
    Menu.prototype.ExitButtonEvent = function () {
        cc.game.end();
    };
    Menu.prototype.playbgm = function () {
        if (this.Menubgm) {
            cc.audioEngine.playMusic(this.Menubgm, true);
        }
        else {
            cc.error("BGM not assigned!");
        }
    };
    __decorate([
        property(cc.Button)
    ], Menu.prototype, "ExitButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Menu.prototype, "Menubgm", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

cc._RF.pop();