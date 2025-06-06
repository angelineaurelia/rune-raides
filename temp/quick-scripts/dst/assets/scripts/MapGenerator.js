
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.chestWallPrefab = null;
        _this.keyToNextLevel = null;
        _this.lockToNextLevel = null;
        _this.groundPrefab = null;
        _this.myMap = null;
        _this.Map_xmax = 10;
        _this.Map_ymax = 5;
        _this.chestboxes = 2;
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
                var prefab_temp = cc.instantiate(this.groundPrefab);
                prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                this.wallList.addChild(prefab_temp, 0, 'ground');
            }
        }
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
        // Generate the outer walls
        for (var i = 0; i < this.Map_xmax; i++) {
            var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i * this.blocksize_x, this.Map_ymax * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        // Generate the vertical walls
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
        this.chestboxes = level * 2 + 1;
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
        var _x0 = 0;
        _x0 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        var _y0 = 0;
        _y0 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        var _x1 = 0;
        _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        var _y1 = 0;
        _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        while ((_x0 === _x1) && (_y0 === _y1)) {
            _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        }
        var mapBlocks = []; // mapBlocks[_y][_x] mapBlocks[_i][_j]
        for (var _i = 0; _i < this.MapYmax; _i += 1) {
            mapBlocks[_i] = [];
            for (var _j = 0; _j < this.MapXmax; _j += 1) {
                mapBlocks[_i][_j] = false;
            }
        }
        mapBlocks[Math.floor(_y0)][Math.floor(_x0)] = true;
        mapBlocks[Math.floor(_y1)][Math.floor(_x1)] = true;
        for (var i = 0; i < this.chestboxes; i += 1) {
            var _x = 0;
            _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            var _y = 0;
            _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            while (mapBlocks[Math.floor(_y)][Math.floor(_x)]) {
                _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
                _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            }
            mapBlocks[Math.floor(_y)][Math.floor(_x)] = true;
            //=====================================================================
            var prefab_temp_2 = cc.instantiate(this.chestWallPrefab);
            prefab_temp_2.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
            this.wallList.addChild(prefab_temp_2, 1, 'chest');
            console.log("chest at:", _x, _y);
        }
        var prefab_temp_0 = cc.instantiate(this.keyToNextLevel);
        prefab_temp_0.setPosition(_x0 * this.blocksize_x, _y0 * this.blocksize_y);
        this.wallList.addChild(prefab_temp_0, 1, 'key');
        console.log("Key at:", _x0, _y0);
        var prefab_temp_1 = cc.instantiate(this.lockToNextLevel);
        prefab_temp_1.setPosition(_x1 * this.blocksize_x, _y1 * this.blocksize_y);
        this.wallList.addChild(prefab_temp_1, 1, 'lock');
        console.log("Lock at:", _x1, _y1);
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
    ], MapGenerator.prototype, "chestWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "keyToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "lockToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "groundPrefab", void 0);
    MapGenerator = __decorate([
        ccclass
    ], MapGenerator);
    return MapGenerator;
}(cc.Component));
exports.default = MapGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLHVEQUFpRztBQUdqRztJQUEwQyxnQ0FBWTtJQUF0RDtRQUVJOzs7O2lDQUl5QjtRQU43QixxRUE0S0M7UUFuS0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrREFBa0Q7UUFFbEQsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRXJDLGtEQUFrRDtRQUVsRCwwQkFBb0IsR0FBYyxJQUFJLENBQUM7UUFHdkMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGNBQVEsR0FBWSxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBWSxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBWSxHQUFHLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxHQUFHLENBQUM7O1FBdUluQyxpQkFBaUI7SUFDckIsQ0FBQztJQXZJRyxzQkFBVyxpQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1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akM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNXO0lBN0JkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0S2hDO0lBQUQsbUJBQUM7Q0E1S0QsQUE0S0MsQ0E1S3lDLEVBQUUsQ0FBQyxTQUFTLEdBNEtyRDtrQkE1S29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCB7TWFwX25vZGUsIE1hcF9lZGdlLCBNYXBfc2VsZWN0ZWRfZWRnZSwgbWFwUm9vbVVuaXQsIE1hcF9HcmFwaH0gZnJvbSAnLi9NYXBHZW5lcmF0b3JDb3JlJztcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEdlbmVyYXRvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLypAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJzsqL1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FsbExpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdmVydGljYWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgaG9yaXpvbnRhbFdhbGxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZXN0V2FsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAga2V5VG9OZXh0TGV2ZWw6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxvY2tUb05leHRMZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ3JvdW5kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbXlNYXAgOiBNYXBfR3JhcGggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBNYXBfeG1heCA6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBNYXBfeW1heCA6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIGNoZXN0Ym94ZXMgOiBudW1iZXIgPSAyO1xyXG4gICAgcHJpdmF0ZSBibG9ja3NpemVfeCA6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgYmxvY2tzaXplX3kgOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgZ2V0IE1hcFhtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5NYXBfeG1heCogdGhpcy5ibG9ja3NpemVfeDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgTWFwWW1heCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk1hcF95bWF4ICogdGhpcy5ibG9ja3NpemVfeTtcclxuICAgIH1cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRvck1hcCAoKSB7XHJcbiAgICAgICAgdGhpcy5teU1hcCA9IG5ldyBNYXBfR3JhcGgodGhpcy5NYXBfeG1heCx0aGlzLk1hcF95bWF4KTsvLyBnZW5lcmF0ZSBtYXBcclxuICAgICAgICAvL1BsZWFzZSBzZXQgdGhlIEFuY2hvciBvZiBQcmVmYWIgaW50byAoMCwwKSBmaXJzdFxyXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMCwnZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMuTWFwX3htYXg7X3grKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTx0aGlzLk1hcF95bWF4O195Kyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZlcnRpY2FsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgb3V0ZXIgd2FsbHNcclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDtpPHRoaXMuTWFwX3htYXg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oaSp0aGlzLmJsb2Nrc2l6ZV94LHRoaXMuTWFwX3ltYXgqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIHZlcnRpY2FsIHdhbGxzXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbih0aGlzLk1hcF94bWF4KnRoaXMuYmxvY2tzaXplX3gsaSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlfTG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2VuZXJhdGVNYXAobGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2FsbExpc3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAvLyBGaW5kIExldmVsXHJcbiAgICAgICAgdGhpcy5NYXBfeG1heCA9IGxldmVsKjQgKyA2IDsgLy8gTGV2ZWwgMSwyLDMuLi7vvIxNYXBfeG1heCAgPSAxMCwxNCwxOC4uLlxyXG4gICAgICAgIHRoaXMuTWFwX3ltYXggPSBsZXZlbCoyICsgMyA7IC8vIExldmVsIDEsMiwzLi4u77yMTWFwX3ltYXggPSA1LDcsOS4uLlxyXG4gICAgICAgIHRoaXMuY2hlc3Rib3hlcyA9IGxldmVsKjIgKyAxIDtcclxuXHJcbiAgICAgICAgdGhpcy5teU1hcCA9IG5ldyBNYXBfR3JhcGgodGhpcy5NYXBfeG1heCwgdGhpcy5NYXBfeW1heCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlNYXAubWFwQmxvY2tbX3ldW194XS51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF94bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy5ob3Jpem9udGFsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKGkqdGhpcy5ibG9ja3NpemVfeCx0aGlzLk1hcF95bWF4KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbih0aGlzLk1hcF94bWF4KnRoaXMuYmxvY2tzaXplX3gsaSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlfTG9jaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZW5lcmF0ZUtleV9Mb2NrKCl7XHJcbiAgICAgICAgbGV0IF94MDpudW1iZXIgPSAwO194MCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3htYXgpICsgMC41O1xyXG4gICAgICAgIGxldCBfeTA6bnVtYmVyID0gMDtfeTAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF95bWF4KSArIDAuNTtcclxuICAgICAgICBsZXQgX3gxOm51bWJlciA9IDA7X3gxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XHJcbiAgICAgICAgbGV0IF95MTpudW1iZXIgPSAwO195MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xyXG5cclxuICAgICAgICB3aGlsZSgoX3gwID09PSBfeDEpICYmIChfeTAgPT09IF95MSkpe1xyXG4gICAgICAgICAgICBfeDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcclxuICAgICAgICAgICAgX3kxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwQmxvY2tzIDogYm9vbGVhbltdW10gPSBbXTsgLy8gbWFwQmxvY2tzW195XVtfeF0gbWFwQmxvY2tzW19pXVtfal1cclxuICAgICAgICBmb3IobGV0IF9pOm51bWJlciA9IDA7X2k8dGhpcy5NYXBZbWF4O19pICs9IDEpe1xyXG4gICAgICAgICAgICBtYXBCbG9ja3NbX2ldID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgX2o6bnVtYmVyID0gMDtfajx0aGlzLk1hcFhtYXg7X2ogKz0gMSl7XHJcbiAgICAgICAgICAgICAgICBtYXBCbG9ja3NbX2ldW19qXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95MCldW01hdGguZmxvb3IoX3gwKV0gPSB0cnVlO1xyXG4gICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95MSldW01hdGguZmxvb3IoX3gxKV0gPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyPTA7aTx0aGlzLmNoZXN0Ym94ZXM7aSs9MSl7XHJcbiAgICAgICAgICAgIGxldCBfeDpudW1iZXIgPSAwO194ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XHJcbiAgICAgICAgICAgIGxldCBfeTpudW1iZXIgPSAwO195ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XHJcbiAgICAgICAgICAgIHdoaWxlKG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95KV1bTWF0aC5mbG9vcihfeCldKXtcclxuICAgICAgICAgICAgICAgIF94ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICBfeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95KV1bTWF0aC5mbG9vcihfeCldID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXBfMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlc3RXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgcHJlZmFiX3RlbXBfMi5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzIsMSwnY2hlc3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVzdCBhdDpcIixfeCwgX3kpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcmVmYWJfdGVtcF8wID0gY2MuaW5zdGFudGlhdGUodGhpcy5rZXlUb05leHRMZXZlbCk7XHJcbiAgICAgICAgcHJlZmFiX3RlbXBfMC5zZXRQb3NpdGlvbihfeDAqdGhpcy5ibG9ja3NpemVfeCxfeTAqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcF8wLDEsJ2tleScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2V5IGF0OlwiLF94MCwgX3kwKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJlZmFiX3RlbXBfMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubG9ja1RvTmV4dExldmVsKTtcclxuICAgICAgICBwcmVmYWJfdGVtcF8xLnNldFBvc2l0aW9uKF94MSp0aGlzLmJsb2Nrc2l6ZV94LF95MSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzEsMSwnbG9jaycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jayBhdDpcIixfeDEsIF95MSk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59Il19