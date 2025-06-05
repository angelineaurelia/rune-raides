
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MonsterManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c8acFpplVH1LwjnyqGOWFp', 'MonsterManager');
// scripts/MonsterManager.ts

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
var MonsterType;
(function (MonsterType) {
    MonsterType[MonsterType["BlueSlime"] = 0] = "BlueSlime";
    MonsterType[MonsterType["GreenSlime"] = 1] = "GreenSlime";
    MonsterType[MonsterType["GreenBoss"] = 2] = "GreenBoss";
    MonsterType[MonsterType["LavaSlime"] = 3] = "LavaSlime";
})(MonsterType || (MonsterType = {}));
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 1;
        _this.monsterManager = null;
        _this.Map_xmax = 0;
        _this.Map_ymax = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.level = cc.find("GameManager").getComponent("GameManager").Level;
        //Initialize the monster manager
        this.monsterManager = cc.find("Canvas/MapManager/MonsterManager");
        console.log("Monster onload");
    };
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    NewClass.prototype.initMonster = function () {
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
        var monsterCount = Math.floor((this.Map_xmax / 100) * (this.Map_ymax / 100) / 9);
        console.log("monster Count = ", monsterCount);
        for (var i = 0; i < monsterCount; i++) {
            var randomType = Math.floor(Math.random() * 3.9999);
            console.log("Monster Type:", randomType);
            switch (randomType) {
                case MonsterType.BlueSlime:
                    this.initBlueSlime();
                    break;
                case MonsterType.GreenSlime:
                    this.initGreenSlime();
                    break;
                case MonsterType.GreenBoss:
                    this.initGreenBoss();
                    break;
                case MonsterType.LavaSlime:
                    this.initLavaSlime();
                    break;
                default:
                    cc.error("Unknown monster type:", randomType);
            }
        }
    };
    NewClass.prototype.initBlueSlime = function () {
        var _this = this;
        cc.resources.load("prefabs/Blue Slime", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Blue Slime:", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Blue Slime');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
        });
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    };
    NewClass.prototype.initGreenSlime = function () {
        var _this = this;
        cc.resources.load("prefabs/Green Slime", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Green Slime:", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Green Slime');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
            console.log("x=", x, "y=", y);
        });
    };
    NewClass.prototype.initGreenBoss = function () {
        var _this = this;
        cc.resources.load("prefabs/Green Boss", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Green Boss", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Green Boss');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
        });
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    };
    NewClass.prototype.initLavaSlime = function () {
        var _this = this;
        cc.resources.load("prefabs/Lava Slime", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Lava Slime:", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Lava Slime');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
        });
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    };
    NewClass.prototype.SetMonster = function (_level) {
        this.level = _level;
        var MapGEn = cc.find("GameManager").getComponent("GameManager");
        this.Map_xmax = Number((this.level * 4 + 6) * 100);
        this.Map_ymax = Number((this.level * 2 + 3) * 100);
        console.log("Level = ", this.level, typeof this.level);
        console.log("Map_xmax = ", this.Map_xmax, typeof this.Map_xmax);
        this.monsterManager.removeAllChildren();
        this.initMonster();
        console.log("set monster");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01vbnN0ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQUssV0FLSjtBQUxELFdBQUssV0FBVztJQUNaLHVEQUFTLENBQUE7SUFDVCx5REFBVSxDQUFBO0lBQ1YsdURBQVMsQ0FBQTtJQUNULHVEQUFTLENBQUE7QUFDYixDQUFDLEVBTEksV0FBVyxLQUFYLFdBQVcsUUFLZjtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0hDO1FBcEhXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQWlIakMsQ0FBQztJQTlHRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEUsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMs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SDVCO0lBQUQsZUFBQztDQXRIRCxBQXNIQyxDQXRIcUMsRUFBRSxDQUFDLFNBQVMsR0FzSGpEO2tCQXRIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmVudW0gTW9uc3RlclR5cGUge1xuICAgIEJsdWVTbGltZSxcbiAgICBHcmVlblNsaW1lLFxuICAgIEdyZWVuQm9zcyxcbiAgICBMYXZhU2xpbWVcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBtb25zdGVyTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBNYXBfeG1heDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIE1hcF95bWF4OiBudW1iZXIgPSAwO1xuXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikuTGV2ZWw7XG4gICAgICAgIC8vSW5pdGlhbGl6ZSB0aGUgbW9uc3RlciBtYW5hZ2VyXG4gICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBvbmxvYWRcIik7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgaW5pdE1vbnN0ZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPVwiLCB0aGlzLk1hcF94bWF4LCBcIk1hcF95bWF4ID1cIiwgdGhpcy5NYXBfeW1heCk7XG4gICAgICAgIGxldCBtb25zdGVyQ291bnQgPSBNYXRoLmZsb29yKCh0aGlzLk1hcF94bWF4LzEwMCkqKHRoaXMuTWFwX3ltYXgvMTAwKS85KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb25zdGVyIENvdW50ID0gXCIsbW9uc3RlckNvdW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25zdGVyQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbVR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMy45OTk5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBUeXBlOlwiLCByYW5kb21UeXBlKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTW9uc3RlclR5cGUuQmx1ZVNsaW1lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCbHVlU2xpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNb25zdGVyVHlwZS5HcmVlblNsaW1lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHcmVlblNsaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTW9uc3RlclR5cGUuR3JlZW5Cb3NzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHcmVlbkJvc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNb25zdGVyVHlwZS5MYXZhU2xpbWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdExhdmFTbGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIlVua25vd24gbW9uc3RlciB0eXBlOlwiLCByYW5kb21UeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdEJsdWVTbGltZSgpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0JsdWUgU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIEJsdWUgU2xpbWU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLDEsJ0JsdWUgU2xpbWUnKTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeW1heCArIDEpKSA7XG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9XCIsIHRoaXMuTWFwX3htYXgsIFwiTWFwX3ltYXggPVwiLCB0aGlzLk1hcF95bWF4KTtcbiAgICB9XG4gICAgaW5pdEdyZWVuU2xpbWUoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9HcmVlbiBTbGltZVwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgR3JlZW4gU2xpbWU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLCAxLCdHcmVlbiBTbGltZScpO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeG1heCArIDEpKSA7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF95bWF4ICsgMSkpIDtcbiAgICAgICAgICAgIFNsaW1lTm9kZS5zZXRQb3NpdGlvbih4LHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4PVwiLCB4LCBcInk9XCIseSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBpbml0R3JlZW5Cb3NzKCkge1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR3JlZW4gQm9zc1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgR3JlZW4gQm9zc1wiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFNsaW1lTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyLmFkZENoaWxkKFNsaW1lTm9kZSwgMSwgJ0dyZWVuIEJvc3MnKTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeW1heCArIDEpKSA7XG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9XCIsIHRoaXMuTWFwX3htYXgsIFwiTWFwX3ltYXggPVwiLCB0aGlzLk1hcF95bWF4KTtcbiAgICB9XG4gICAgaW5pdExhdmFTbGltZSgpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0xhdmEgU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIExhdmEgU2xpbWU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLCAxLCAnTGF2YSBTbGltZScpO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeG1heCArIDEpKSA7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF95bWF4ICsgMSkpIDtcbiAgICAgICAgICAgIFNsaW1lTm9kZS5zZXRQb3NpdGlvbih4LHkpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcF94bWF4ID1cIiwgdGhpcy5NYXBfeG1heCwgXCJNYXBfeW1heCA9XCIsIHRoaXMuTWFwX3ltYXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRNb25zdGVyKF9sZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBfbGV2ZWw7XG4gICAgICAgIGxldCBNYXBHRW4gPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIHRoaXMuTWFwX3htYXggPSBOdW1iZXIoKHRoaXMubGV2ZWwgKjQrNikqMTAwKTtcbiAgICAgICAgdGhpcy5NYXBfeW1heCA9IE51bWJlcigodGhpcy5sZXZlbCAqMiszKSoxMDApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsID0gXCIsIHRoaXMubGV2ZWwsIHR5cGVvZiB0aGlzLmxldmVsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9IFwiLCB0aGlzLk1hcF94bWF4LCB0eXBlb2YgdGhpcy5NYXBfeG1heCk7XG5cbiAgICAgICAgdGhpcy5tb25zdGVyTWFuYWdlci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmluaXRNb25zdGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0IG1vbnN0ZXJcIik7XG4gICAgfVxufVxuIl19