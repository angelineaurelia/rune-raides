"use strict";
cc._RF.push(module, 'f3634jeIXpK057N1J8pdaI+', 'MapManager');
// scripts/MapManager.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var ZSortOnLoad_1 = require("./utilities/ZSortOnLoad");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapManager = /** @class */ (function (_super) {
    __extends(MapManager, _super);
    function MapManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objectLayerNode = null;
        _this.actorLayerNode = null;
        return _this;
        // update (dt) {}
    }
    MapManager_1 = MapManager;
    Object.defineProperty(MapManager, "Instance", {
        get: function () {
            return MapManager_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    MapManager.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        MapManager_1.instance = this;
        this.objectLayerNode.addComponent(ZSortOnLoad_1.default);
    };
    MapManager.prototype.start = function () {
        var actors = [];
        for (var _i = 0, _a = this.actorLayerNode.children; _i < _a.length; _i++) {
            var actor = _a[_i];
            actors.push(actor);
        }
        for (var _b = 0, actors_1 = actors; _b < actors_1.length; _b++) {
            var actor = actors_1[_b];
            // Possibly an engine bug: A node's world position can change after reparenting.
            // That's why we have to fix the position manually here.
            // Bad API :(
            var worldPosBefore = actor.convertToWorldSpaceAR(cc.Vec2.ZERO);
            actor.setParent(this.objectLayerNode);
            actor.setPosition(actor.parent.convertToNodeSpaceAR(worldPosBefore));
        }
    };
    var MapManager_1;
    MapManager.instance = null;
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "objectLayerNode", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "actorLayerNode", void 0);
    MapManager = MapManager_1 = __decorate([
        ccclass
    ], MapManager);
    return MapManager;
}(cc.Component));
exports.default = MapManager;

cc._RF.pop();