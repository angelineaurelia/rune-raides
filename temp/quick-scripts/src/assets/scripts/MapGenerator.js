"use strict";
cc._RF.push(module, 'c99a3fycmhINqcjJAb8dgD/', 'MapGenerator');
// scripts/MapGenerator.ts

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
var MapGeneratorCore_1 = require("./MapGeneratorCore");
var MapGenerator = /** @class */ (function (_super) {
    __extends(MapGenerator, _super);
    function MapGenerator() {
        /*@property(cc.Label)
        label: cc.Label = null;
    
        @property
        text: string = 'hello';*/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wallList = null;
        //Please set the Anchor of Prefab into (0,0) first
        _this.verticalWallPrefab = null;
        //Please set the Anchor of Prefab into (0,0) first
        _this.horizontalWallPrefab = null;
        _this.keyToNextLevel = null;
        _this.lockToNextLevel = null;
        _this.myMap = null;
        _this.Map_xmax = 10;
        _this.Map_ymax = 5;
        _this.blocksize_x = 100;
        _this.blocksize_y = 100;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(MapGenerator.prototype, "MapXmax", {
        get: function () {
            return this.Map_xmax * this.blocksize_x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapGenerator.prototype, "MapYmax", {
        get: function () {
            return this.Map_ymax * this.blocksize_y;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    MapGenerator.prototype.onLoad = function () {
        ;
    };
    MapGenerator.prototype.GeneratorMap = function () {
        this.myMap = new MapGeneratorCore_1.Map_Graph(this.Map_xmax, this.Map_ymax); // generate map
        //Please set the Anchor of Prefab into (0,0) first
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                if (this.myMap.mapBlock[_y][_x].up) {
                    var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
                if (this.myMap.mapBlock[_y][_x].left) {
                    var prefab_temp = cc.instantiate(this.verticalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
            }
        }
        for (var i = 0; i < this.Map_xmax; i++) {
            var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i * this.blocksize_x, this.Map_ymax * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        for (var i = 0; i < this.Map_ymax; i++) {
            var prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax * this.blocksize_x, i * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        this.generateKey_Lock();
    };
    MapGenerator.prototype.regenerateMap = function (level) {
        this.wallList.removeAllChildren();
        // Find Level
        this.Map_xmax = level * 4 + 6; // Level 1,2,3...，Map_xmax  = 10,14,18...
        this.Map_ymax = level * 2 + 3; // Level 1,2,3...，Map_ymax = 5,7,9...
        this.myMap = new MapGeneratorCore_1.Map_Graph(this.Map_xmax, this.Map_ymax);
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                if (this.myMap.mapBlock[_y][_x].up) {
                    var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
                if (this.myMap.mapBlock[_y][_x].left) {
                    var prefab_temp = cc.instantiate(this.verticalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
            }
        }
        for (var i = 0; i < this.Map_xmax; i++) {
            var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i * this.blocksize_x, this.Map_ymax * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        for (var i = 0; i < this.Map_ymax; i++) {
            var prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax * this.blocksize_x, i * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        this.generateKey_Lock();
    };
    MapGenerator.prototype.generateKey_Lock = function () {
        var _x = 0;
        var _y = 0;
        _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        var prefab_temp_0 = cc.instantiate(this.keyToNextLevel);
        prefab_temp_0.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
        this.wallList.addChild(prefab_temp_0, 1, 'key');
        console.log("Key at:", _x, _y);
        _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        var prefab_temp_1 = cc.instantiate(this.lockToNextLevel);
        prefab_temp_1.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
        this.wallList.addChild(prefab_temp_1, 1, 'lock');
        console.log("Lock at:", _x, _y);
    };
    __decorate([
        property(cc.Node)
    ], MapGenerator.prototype, "wallList", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "verticalWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "horizontalWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "keyToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "lockToNextLevel", void 0);
    MapGenerator = __decorate([
        ccclass
    ], MapGenerator);
    return MapGenerator;
}(cc.Component));
exports.default = MapGenerator;
/*
export class YourScriptName extends Component {

    @property(Prefab)
    ground0: Prefab = null!;

    start() {
        const groundNode = instantiate(this.ground0);
        groundNode.setPosition(new Vec3(0, 0, 0));
        this.node.addChild(groundNode);
    }
}
*/

cc._RF.pop();