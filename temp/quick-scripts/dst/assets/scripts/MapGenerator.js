
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLHVEQUFpRztBQUdqRztJQUEwQyxnQ0FBWTtJQUF0RDtRQUVJOzs7O2lDQUl5QjtRQU43QixxRUE2SEM7UUFwSEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrREFBa0Q7UUFFbEQsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRXJDLGtEQUFrRDtRQUVsRCwwQkFBb0IsR0FBYyxJQUFJLENBQUM7UUFHdkMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFFMUIsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGNBQVEsR0FBWSxDQUFDLENBQUM7UUFDdEIsaUJBQVcsR0FBWSxHQUFHLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxHQUFHLENBQUM7O1FBK0ZuQyxpQkFBaUI7SUFDckIsQ0FBQztJQS9GRyxzQkFBVyxpQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUNELHdCQUF3QjtJQUV4Qiw2QkFBTSxHQUFOO1FBQ0ksQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FB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QyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2lCO0lBSXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDYztJQXZCakIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTZIaEM7SUFBRCxtQkFBQztDQTdIRCxBQTZIQyxDQTdIeUMsRUFBRSxDQUFDLFNBQVMsR0E2SHJEO2tCQTdIb0IsWUFBWTtBQStIakM7Ozs7Ozs7Ozs7OztFQVlFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQge01hcF9ub2RlLCBNYXBfZWRnZSwgTWFwX3NlbGVjdGVkX2VkZ2UsIG1hcFJvb21Vbml0LCBNYXBfR3JhcGh9IGZyb20gJy4vTWFwR2VuZXJhdG9yQ29yZSc7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBHZW5lcmF0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8qQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7Ki9cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhbGxMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL1BsZWFzZSBzZXQgdGhlIEFuY2hvciBvZiBQcmVmYWIgaW50byAoMCwwKSBmaXJzdFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHZlcnRpY2FsV2FsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvL1BsZWFzZSBzZXQgdGhlIEFuY2hvciBvZiBQcmVmYWIgaW50byAoMCwwKSBmaXJzdFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGhvcml6b250YWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBrZXlUb05leHRMZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbG9ja1RvTmV4dExldmVsOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbXlNYXAgOiBNYXBfR3JhcGggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBNYXBfeG1heCA6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBNYXBfeW1heCA6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIGJsb2Nrc2l6ZV94IDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBibG9ja3NpemVfeSA6IG51bWJlciA9IDEwMDtcclxuICAgIHB1YmxpYyBnZXQgTWFwWG1heCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk1hcF94bWF4KiB0aGlzLmJsb2Nrc2l6ZV94O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBNYXBZbWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuTWFwX3ltYXggKiB0aGlzLmJsb2Nrc2l6ZV95O1xyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICA7XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdG9yTWFwICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm15TWFwID0gbmV3IE1hcF9HcmFwaCh0aGlzLk1hcF94bWF4LHRoaXMuTWFwX3ltYXgpOy8vIGdlbmVyYXRlIG1hcFxyXG4gICAgICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMuTWFwX3htYXg7X3grKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTx0aGlzLk1hcF95bWF4O195Kyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZlcnRpY2FsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDtpPHRoaXMuTWFwX3htYXg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oaSp0aGlzLmJsb2Nrc2l6ZV94LHRoaXMuTWFwX3ltYXgqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDtpPHRoaXMuTWFwX3ltYXg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZlcnRpY2FsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKHRoaXMuTWFwX3htYXgqdGhpcy5ibG9ja3NpemVfeCxpKnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUtleV9Mb2NrKCk7XHJcbiAgICB9XHJcbiAgICByZWdlbmVyYXRlTWFwKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndhbGxMaXN0LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgLy8gRmluZCBMZXZlbFxyXG4gICAgICAgIHRoaXMuTWFwX3htYXggPSBsZXZlbCo0ICsgNiA7IC8vIExldmVsIDEsMiwzLi4u77yMTWFwX3htYXggID0gMTAsMTQsMTguLi5cclxuICAgICAgICB0aGlzLk1hcF95bWF4ID0gbGV2ZWwqMiArIDMgOyAvLyBMZXZlbCAxLDIsMy4uLu+8jE1hcF95bWF4ID0gNSw3LDkuLi5cclxuXHJcbiAgICAgICAgdGhpcy5teU1hcCA9IG5ldyBNYXBfR3JhcGgodGhpcy5NYXBfeG1heCwgdGhpcy5NYXBfeW1heCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlNYXAubWFwQmxvY2tbX3ldW194XS51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF94bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy5ob3Jpem9udGFsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKGkqdGhpcy5ibG9ja3NpemVfeCx0aGlzLk1hcF95bWF4KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbih0aGlzLk1hcF94bWF4KnRoaXMuYmxvY2tzaXplX3gsaSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlfTG9jaygpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVLZXlfTG9jaygpe1xyXG4gICAgICAgIGxldCBfeDpudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBfeTpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBfeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3htYXgpICsgMC41O1xyXG4gICAgICAgIF95ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XHJcbiAgICAgICAgY29uc3QgcHJlZmFiX3RlbXBfMCA9IGNjLmluc3RhbnRpYXRlKHRoaXMua2V5VG9OZXh0TGV2ZWwpO1xyXG4gICAgICAgIHByZWZhYl90ZW1wXzAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzAsMSwna2V5Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgYXQ6XCIsX3gsIF95KTtcclxuXHJcbiAgICAgICAgX3ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcclxuICAgICAgICBfeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xyXG4gICAgICAgIGNvbnN0IHByZWZhYl90ZW1wXzEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxvY2tUb05leHRMZXZlbCk7XHJcbiAgICAgICAgcHJlZmFiX3RlbXBfMS5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXBfMSwxLCdsb2NrJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2NrIGF0OlwiLF94LCBfeSk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcblxyXG4vKlxyXG5leHBvcnQgY2xhc3MgWW91clNjcmlwdE5hbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShQcmVmYWIpXHJcbiAgICBncm91bmQwOiBQcmVmYWIgPSBudWxsITtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBncm91bmROb2RlID0gaW5zdGFudGlhdGUodGhpcy5ncm91bmQwKTtcclxuICAgICAgICBncm91bmROb2RlLnNldFBvc2l0aW9uKG5ldyBWZWMzKDAsIDAsIDApKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ3JvdW5kTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuKi9cclxuIl19