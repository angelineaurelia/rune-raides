
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/ActorController');
require('./assets/scripts/GameManager');
require('./assets/scripts/LeaderboardManager');
require('./assets/scripts/MapGenerator');
require('./assets/scripts/MapGeneratorCore');
require('./assets/scripts/MapManager');
require('./assets/scripts/Menu/AuthManager');
require('./assets/scripts/Menu/FirebaseInit');
require('./assets/scripts/Menu/FirebaseManager');
require('./assets/scripts/Menu/GameOver');
require('./assets/scripts/Menu/LoadingManager');
require('./assets/scripts/Menu/LoginSignUp');
require('./assets/scripts/Menu/Menu');
require('./assets/scripts/Menu/MenuMgr');
require('./assets/scripts/Menu/SuccessPopup');
require('./assets/scripts/MonsterManager');
require('./assets/scripts/Player');
require('./assets/scripts/UIManager');
require('./assets/scripts/ai/Agent');
require('./assets/scripts/ai/BlueSlimeAI');
require('./assets/scripts/ai/GreenBossAI');
require('./assets/scripts/ai/GreenSlimeAI');
require('./assets/scripts/ai/LavaSlimeAI');
require('./assets/scripts/ai/ShyAgent');
require('./assets/scripts/ai/WanderAgent');
require('./assets/scripts/ai/navigation/Waypoint');
require('./assets/scripts/ai/strategies/AgentStrategy');
require('./assets/scripts/ai/strategies/Coward');
require('./assets/scripts/ai/strategies/Wanderer');
require('./assets/scripts/camera/CameraTransposer');
require('./assets/scripts/input/Controller');
require('./assets/scripts/input/IInputControls');
require('./assets/scripts/input/KeyboardControls');
require('./assets/scripts/obj/Key');
require('./assets/scripts/obj/Lock');
require('./assets/scripts/obj/Potion');
require('./assets/scripts/obj/chest');
require('./assets/scripts/utilities/ZSortOnLoad');
require('./assets/scripts/utilities/ZSorter');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd91e1lWAFJRIIlaJW6QkXH', 'GameOver');
// scripts/Menu/GameOver.ts

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
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onOk = null;
        return _this;
    }
    GameOver.prototype.onLoad = function () {
        var _this = this;
        var restartBtn = cc.find("Restart", this.node).getComponent(cc.Button);
        restartBtn.node.on('click', function () {
            if (_this.onOk)
                _this.onOk();
            _this.node.destroy();
        });
    };
    GameOver = __decorate([
        ccclass('GameOver')
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFXQztRQVZRLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVUxQyxDQUFDO0lBUkMseUJBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBVmtCLFFBQVE7UUFENUIsT0FBTyxDQUFDLFVBQVUsQ0FBQztPQUNDLFFBQVEsQ0FXNUI7SUFBRCxlQUFDO0NBWEQsQUFXQyxDQVhxQyxFQUFFLENBQUMsU0FBUyxHQVdqRDtrQkFYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xyXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZU92ZXInKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgcHVibGljIG9uT2s6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gY2MuZmluZChcIlJlc3RhcnRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIHJlc3RhcnRCdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm9uT2spIHRoaXMub25PaygpO1xyXG4gICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/navigation/Waypoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1fb9eQwYFFiaL2Pab25I/w', 'Waypoint');
// scripts/ai/navigation/Waypoint.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Waypoint = /** @class */ (function (_super) {
    __extends(Waypoint, _super);
    function Waypoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adjacentWaypoints = [];
        _this.distances = [];
        return _this;
        // update (dt) {}
    }
    Waypoint_1 = Waypoint;
    /**
     * Returns the distance to a given waypoint.
     * @param otherWaypoint The waypoint to compute the distance to.
     * @returns The distance to that waypoint.
     */
    Waypoint.prototype.distanceTo = function (otherWaypoint) {
        return this.distanceToNode(otherWaypoint.node);
    };
    Waypoint.prototype.distanceToNode = function (otherNode) {
        // Computes the magnitude of the vector (a - b)
        // Where "a" is the other waypoint's position, and
        // "b" is this waypoint's position.
        return otherNode.convertToWorldSpaceAR(cc.Vec2.ZERO)
            .sub(this.node.convertToWorldSpaceAR(cc.Vec2.ZERO))
            .mag();
    };
    Waypoint.prototype.addEdgeTo = function (otherWaypoint) {
        this.adjacentWaypoints.push(otherWaypoint);
        this.distances.push(this.distanceTo(otherWaypoint));
    };
    // LIFE-CYCLE CALLBACKS:
    Waypoint.prototype.onLoad = function () {
        for (var _i = 0, _a = this.adjacentWaypoints; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            this.distances.push(this.distanceTo(neighbor));
        }
    };
    Waypoint.prototype.start = function () {
    };
    var Waypoint_1;
    __decorate([
        property(Waypoint_1)
    ], Waypoint.prototype, "adjacentWaypoints", void 0);
    Waypoint = Waypoint_1 = __decorate([
        ccclass
    ], Waypoint);
    return Waypoint;
}(cc.Component));
exports.default = Waypoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL25hdmlnYXRpb24vV2F5cG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5Q0M7UUF0Q1ksdUJBQWlCLEdBQWUsRUFBRSxDQUFDO1FBQ25DLGVBQVMsR0FBYSxFQUFFLENBQUM7O1FBb0NsQyxpQkFBaUI7SUFDckIsQ0FBQztpQkF6Q29CLFFBQVE7SUFLekI7Ozs7T0FJRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLGFBQXVCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLGlDQUFjLEdBQXJCLFVBQXNCLFNBQWtCO1FBQ3BDLCtDQUErQztRQUMvQyxrREFBa0Q7UUFDbEQsbUNBQW1DO1FBQ25DLE9BQU8sU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sNEJBQVMsR0FBaEIsVUFBaUIsYUFBdUI7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksS0FBcUIsVUFBc0IsRUFBdEIsS0FBQSxJQUFJLENBQUMsaUJBQWlCLEVBQXRCLGNBQXNCLEVBQXRCLElBQXNCLEVBQUU7WUFBeEMsSUFBSSxRQUFRLFNBQUE7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7O0lBbkNEO1FBREMsUUFBUSxDQUFDLFVBQVEsQ0FBQzt1REFDeUI7SUFIM0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlDNUI7SUFBRCxlQUFDO0NBekNELEFBeUNDLENBekNxQyxFQUFFLENBQUMsU0FBUyxHQXlDakQ7a0JBekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXlwb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoV2F5cG9pbnQpXG4gICAgcmVhZG9ubHkgYWRqYWNlbnRXYXlwb2ludHM6IFdheXBvaW50W10gPSBbXTtcbiAgICByZWFkb25seSBkaXN0YW5jZXM6IG51bWJlcltdID0gW107XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgdG8gYSBnaXZlbiB3YXlwb2ludC5cbiAgICAgKiBAcGFyYW0gb3RoZXJXYXlwb2ludCBUaGUgd2F5cG9pbnQgdG8gY29tcHV0ZSB0aGUgZGlzdGFuY2UgdG8uXG4gICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIHRvIHRoYXQgd2F5cG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIGRpc3RhbmNlVG8ob3RoZXJXYXlwb2ludDogV2F5cG9pbnQpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlVG9Ob2RlKG90aGVyV2F5cG9pbnQubm9kZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3RhbmNlVG9Ob2RlKG90aGVyTm9kZTogY2MuTm9kZSk6IG51bWJlcntcbiAgICAgICAgLy8gQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yIChhIC0gYilcbiAgICAgICAgLy8gV2hlcmUgXCJhXCIgaXMgdGhlIG90aGVyIHdheXBvaW50J3MgcG9zaXRpb24sIGFuZFxuICAgICAgICAvLyBcImJcIiBpcyB0aGlzIHdheXBvaW50J3MgcG9zaXRpb24uXG4gICAgICAgIHJldHVybiBvdGhlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTylcbiAgICAgICAgICAgIC5zdWIodGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pKVxuICAgICAgICAgICAgLm1hZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFZGdlVG8ob3RoZXJXYXlwb2ludDogV2F5cG9pbnQpOiB2b2lke1xuICAgICAgICB0aGlzLmFkamFjZW50V2F5cG9pbnRzLnB1c2gob3RoZXJXYXlwb2ludCk7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VzLnB1c2godGhpcy5kaXN0YW5jZVRvKG90aGVyV2F5cG9pbnQpKTtcbiAgICB9XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZm9yIChsZXQgbmVpZ2hib3Igb2YgdGhpcy5hZGphY2VudFdheXBvaW50cykge1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZXMucHVzaCh0aGlzLmRpc3RhbmNlVG8obmVpZ2hib3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LeaderboardManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de4a44WtYpKCIDssSp+W90p', 'LeaderboardManager');
// scripts/LeaderboardManager.ts

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
// assets/scripts/LeaderboardManager.ts
var ccclass = cc._decorator.ccclass;
var LeaderboardManager = /** @class */ (function (_super) {
    __extends(LeaderboardManager, _super);
    function LeaderboardManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeaderboardManager.prototype.onLoad = function () {
        if (!window._firebaseInited) {
            cc.error("Firebase not initialized. Make sure FirebaseInit.ts is in the scene and active.");
            return;
        }
    };
    // Call this when player finishes a level
    LeaderboardManager.prototype.saveProgress = function (level) {
        var user = firebase.auth().currentUser;
        if (!user) {
            cc.warn("No logged-in user; cannot save leaderboard progress.");
            return;
        }
        var db = firebase.firestore();
        var userRef = db.collection("leaderboard").doc(user.uid);
        userRef.get().then(function (doc) {
            var prev = doc.exists ? doc.data().highestLevel : 0;
            if (level > prev) {
                userRef.set({
                    username: user.displayName || "Unknown",
                    highestLevel: level
                });
                cc.log("Progress updated for " + user.displayName + " to level " + level);
            }
        }).catch(function (err) {
            cc.error("Error accessing leaderboard:", err);
        });
    };
    // Call this to display top players (e.g., in leaderboard screen)
    LeaderboardManager.prototype.loadLeaderboard = function (limit) {
        if (limit === void 0) { limit = 10; }
        var db = firebase.firestore();
        db.collection("leaderboard")
            .orderBy("highestLevel", "desc")
            .limit(limit)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                var data = doc.data();
                cc.log(data.username + ": Level " + data.highestLevel);
                // You can add logic here to populate your leaderboard UI
            });
        })
            .catch(function (err) {
            cc.error("Failed to load leaderboard:", err);
        });
    };
    LeaderboardManager = __decorate([
        ccclass
    ], LeaderboardManager);
    return LeaderboardManager;
}(cc.Component));
exports.default = LeaderboardManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGVhZGVyYm9hcmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUMvQixJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUlsQztJQUFnRCxzQ0FBWTtJQUE1RDs7SUFvREEsQ0FBQztJQWxEQyxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1lBQzVGLE9BQU87U0FDUjtJQUNILENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMseUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDaEUsT0FBTztTQUNSO1FBRUQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzRCxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNwQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDO29CQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVM7b0JBQ3ZDLFlBQVksRUFBRSxLQUFLO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsSUFBSSxDQUFDLFdBQVcsa0JBQWEsS0FBTyxDQUFDLENBQUM7YUFDdEU7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpRUFBaUU7SUFDMUQsNENBQWUsR0FBdEIsVUFBdUIsS0FBa0I7UUFBbEIsc0JBQUEsRUFBQSxVQUFrQjtRQUN2QyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7YUFDekIsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7YUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLEdBQUcsRUFBRTthQUNMLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDbEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixFQUFFLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxRQUFRLGdCQUFXLElBQUksQ0FBQyxZQUFjLENBQUMsQ0FBQztnQkFDdkQseURBQXlEO1lBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkRrQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQW9EdEM7SUFBRCx5QkFBQztDQXBERCxBQW9EQyxDQXBEK0MsRUFBRSxDQUFDLFNBQVMsR0FvRDNEO2tCQXBEb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvTGVhZGVyYm9hcmRNYW5hZ2VyLnRzXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyYm9hcmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgIGNjLmVycm9yKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLiBNYWtlIHN1cmUgRmlyZWJhc2VJbml0LnRzIGlzIGluIHRoZSBzY2VuZSBhbmQgYWN0aXZlLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCB0aGlzIHdoZW4gcGxheWVyIGZpbmlzaGVzIGEgbGV2ZWxcclxuICBwdWJsaWMgc2F2ZVByb2dyZXNzKGxldmVsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgY2Mud2FybihcIk5vIGxvZ2dlZC1pbiB1c2VyOyBjYW5ub3Qgc2F2ZSBsZWFkZXJib2FyZCBwcm9ncmVzcy5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3QgdXNlclJlZiA9IGRiLmNvbGxlY3Rpb24oXCJsZWFkZXJib2FyZFwiKS5kb2ModXNlci51aWQpO1xyXG5cclxuICAgIHVzZXJSZWYuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2ID0gZG9jLmV4aXN0cyA/IGRvYy5kYXRhKCkuaGlnaGVzdExldmVsIDogMDtcclxuICAgICAgaWYgKGxldmVsID4gcHJldikge1xyXG4gICAgICAgIHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgaGlnaGVzdExldmVsOiBsZXZlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmxvZyhgUHJvZ3Jlc3MgdXBkYXRlZCBmb3IgJHt1c2VyLmRpc3BsYXlOYW1lfSB0byBsZXZlbCAke2xldmVsfWApO1xyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjYy5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBsZWFkZXJib2FyZDpcIiwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCB0aGlzIHRvIGRpc3BsYXkgdG9wIHBsYXllcnMgKGUuZy4sIGluIGxlYWRlcmJvYXJkIHNjcmVlbilcclxuICBwdWJsaWMgbG9hZExlYWRlcmJvYXJkKGxpbWl0OiBudW1iZXIgPSAxMCkge1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJsZWFkZXJib2FyZFwiKVxyXG4gICAgICAub3JkZXJCeShcImhpZ2hlc3RMZXZlbFwiLCBcImRlc2NcIilcclxuICAgICAgLmxpbWl0KGxpbWl0KVxyXG4gICAgICAuZ2V0KClcclxuICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgY2MubG9nKGAke2RhdGEudXNlcm5hbWV9OiBMZXZlbCAke2RhdGEuaGlnaGVzdExldmVsfWApO1xyXG4gICAgICAgICAgLy8gWW91IGNhbiBhZGQgbG9naWMgaGVyZSB0byBwb3B1bGF0ZSB5b3VyIGxlYWRlcmJvYXJkIFVJXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbGVhZGVyYm9hcmQ6XCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/camera/CameraTransposer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fc95uBgoFEs6B7ArEyrT0Q', 'CameraTransposer');
// scripts/camera/CameraTransposer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CameraTransposer = /** @class */ (function (_super) {
    __extends(CameraTransposer, _super);
    function CameraTransposer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.followTarget = null;
        _this.followX = true;
        _this.followY = true;
        // @property(cc.Float)
        _this.minX = -2147483647;
        // @property(cc.Float)
        _this.minY = -2147483647;
        // @property(cc.Float)
        _this.maxX = 2147483647;
        // @property(cc.Float)
        _this.maxY = 2147483647;
        // @property(cc.Float)
        _this.offsetX = 0;
        // @property(cc.Float)
        _this.offsetY = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    CameraTransposer.prototype.onLoad = function () {
    };
    CameraTransposer.prototype.start = function () {
    };
    CameraTransposer.prototype.update = function (dt) {
        // Not using convertToWorldSpaceAR + convertToNodeSpaceAR because
        // they are inaccurate and causes camera jitter. :(
        var cameraLocalTransform = cc.mat4();
        this.node.getLocalMatrix(cameraLocalTransform);
        var targetWorldTransform = cc.mat4();
        this.followTarget.getWorldMatrix(targetWorldTransform);
        var targetWorldTranslation = cc.v3(0, 0, 0);
        targetWorldTransform.getTranslation(targetWorldTranslation);
        var transformed = cc.v4(targetWorldTranslation.x, targetWorldTranslation.y, targetWorldTranslation.z).transformMat4(cameraLocalTransform);
        var targetPosition = cc.v2(transformed.x, transformed.y).add(cc.v2(-cc.view.getDesignResolutionSize().width / 2, -cc.view.getDesignResolutionSize().height / 2));
        targetPosition = cc.v2(clamp(this.followX ? targetPosition.x : this.node.position.x, this.minX, this.maxX), clamp(this.followY ? targetPosition.y : this.node.position.y, this.minY, this.maxY));
        this.node.position = targetPosition;
    };
    __decorate([
        property(cc.Node)
    ], CameraTransposer.prototype, "followTarget", void 0);
    __decorate([
        property(cc.Boolean)
    ], CameraTransposer.prototype, "followX", void 0);
    __decorate([
        property(cc.Boolean)
    ], CameraTransposer.prototype, "followY", void 0);
    CameraTransposer = __decorate([
        ccclass
    ], CameraTransposer);
    return CameraTransposer;
}(cc.Component));
exports.default = CameraTransposer;
function clamp(x, a, b) {
    if (x < a)
        return a;
    if (x > b)
        return b;
    return x;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbWVyYS9DYW1lcmFUcmFuc3Bvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBZ0RDO1FBN0NHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixzQkFBc0I7UUFDdEIsVUFBSSxHQUFXLENBQUMsVUFBVSxDQUFDO1FBQzNCLHNCQUFzQjtRQUN0QixVQUFJLEdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDM0Isc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxVQUFVLENBQUM7UUFDMUIsc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxVQUFVLENBQUM7UUFDMUIsc0JBQXNCO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsc0JBQXNCO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBNkJ4QixDQUFDO0lBM0JHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpRUFBaUU7UUFDakUsbURBQW1EO1FBQ25ELElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RCxJQUFJLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUksSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pLLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNuRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN0RixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3FEQUNHO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cURBQ0c7SUFQUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWdEcEM7SUFBRCx1QkFBQztDQWhERCxBQWdEQyxDQWhENkMsRUFBRSxDQUFDLFNBQVMsR0FnRHpEO2tCQWhEb0IsZ0JBQWdCO0FBa0RyQyxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYVRyYW5zcG9zZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZm9sbG93VGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBmb2xsb3dYOiBib29sZWFuID0gdHJ1ZTtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBmb2xsb3dZOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbWluWDogbnVtYmVyID0gLTIxNDc0ODM2NDc7XG4gICAgLy8gQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1pblk6IG51bWJlciA9IC0yMTQ3NDgzNjQ3O1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtYXhYOiBudW1iZXIgPSAyMTQ3NDgzNjQ3O1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtYXhZOiBudW1iZXIgPSAyMTQ3NDgzNjQ3O1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAwO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBvZmZzZXRZOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIE5vdCB1c2luZyBjb252ZXJ0VG9Xb3JsZFNwYWNlQVIgKyBjb252ZXJ0VG9Ob2RlU3BhY2VBUiBiZWNhdXNlXG4gICAgICAgIC8vIHRoZXkgYXJlIGluYWNjdXJhdGUgYW5kIGNhdXNlcyBjYW1lcmEgaml0dGVyLiA6KFxuICAgICAgICBsZXQgY2FtZXJhTG9jYWxUcmFuc2Zvcm0gPSBjYy5tYXQ0KCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRMb2NhbE1hdHJpeChjYW1lcmFMb2NhbFRyYW5zZm9ybSk7XG4gICAgICAgIGxldCB0YXJnZXRXb3JsZFRyYW5zZm9ybSA9IGNjLm1hdDQoKTtcbiAgICAgICAgdGhpcy5mb2xsb3dUYXJnZXQuZ2V0V29ybGRNYXRyaXgodGFyZ2V0V29ybGRUcmFuc2Zvcm0pO1xuICAgICAgICBsZXQgdGFyZ2V0V29ybGRUcmFuc2xhdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICB0YXJnZXRXb3JsZFRyYW5zZm9ybS5nZXRUcmFuc2xhdGlvbih0YXJnZXRXb3JsZFRyYW5zbGF0aW9uKTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVkID0gY2MudjQodGFyZ2V0V29ybGRUcmFuc2xhdGlvbi54LCB0YXJnZXRXb3JsZFRyYW5zbGF0aW9uLnksIHRhcmdldFdvcmxkVHJhbnNsYXRpb24ueikudHJhbnNmb3JtTWF0NChjYW1lcmFMb2NhbFRyYW5zZm9ybSk7XG4gICAgICAgIGxldCB0YXJnZXRQb3NpdGlvbiA9IGNjLnYyKHRyYW5zZm9ybWVkLngsIHRyYW5zZm9ybWVkLnkpLmFkZChjYy52MigtY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoIC8gMiwgLWNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQgLyAyKSk7XG4gICAgICAgIHRhcmdldFBvc2l0aW9uID0gY2MudjIoXG4gICAgICAgICAgICBjbGFtcCh0aGlzLmZvbGxvd1ggPyB0YXJnZXRQb3NpdGlvbi54IDogdGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubWluWCwgdGhpcy5tYXhYKSxcbiAgICAgICAgICAgIGNsYW1wKHRoaXMuZm9sbG93WSA/IHRhcmdldFBvc2l0aW9uLnkgOiB0aGlzLm5vZGUucG9zaXRpb24ueSwgdGhpcy5taW5ZLCB0aGlzLm1heFkpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xhbXAoeDogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIGlmICh4IDwgYSkgcmV0dXJuIGE7XG4gICAgaWYgKHggPiBiKSByZXR1cm4gYjtcbiAgICByZXR1cm4geDtcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/Lock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '968b4LLZBJDy78DLuhX3gwV', 'Lock');
// scripts/obj/Lock.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.anim = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    NewClass.prototype.playAnim = function () {
        if (!this.anim.getAnimationState('Lock-pink').isPlaying) {
            this.anim.play('Lock-pink');
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9Mb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUVmLFVBQUksR0FBaUIsSUFBSSxDQUFDOztRQWdCbEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QjVCO0lBQUQsZUFBQztDQXpCRCxBQXlCQyxDQXpCcUMsRUFBRSxDQUFDLFNBQVMsR0F5QmpEO2tCQXpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlBbmltKCl7XG4gICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoJ0xvY2stcGluaycpLmlzUGxheWluZyl7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgnTG9jay1waW5rJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/IInputControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cb1e/x681EIqL7dYrX+sTd', 'IInputControls');
// scripts/input/IInputControls.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImplementedInputControls = exports.ButtonState = void 0;
/**
 * The state of a button-like variable during a single frame.
 */
var ButtonState;
(function (ButtonState) {
    /** The button is in its natural (inactive) state. */
    ButtonState[ButtonState["Rest"] = 0] = "Rest";
    /** The button is pressed down this frame. */
    ButtonState[ButtonState["Pressed"] = 1] = "Pressed";
    /** The button is held down. */
    ButtonState[ButtonState["Held"] = 2] = "Held";
    /** The button is released this frame. */
    ButtonState[ButtonState["Released"] = 3] = "Released";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
function hasImplementedInputControls(obj) {
    return obj &&
        (obj.horizontalAxis !== undefined) &&
        (obj.verticalAxis !== undefined) &&
        (obj.attack !== undefined) &&
        (obj.interact !== undefined) &&
        (obj.gethurt !== undefined) &&
        (obj.attack2 !== undefined) &&
        (obj.attack3 !== undefined);
}
exports.hasImplementedInputControls = hasImplementedInputControls;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0lJbnB1dENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztHQUVHO0FBQ0gsSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ25CLHFEQUFxRDtJQUNyRCw2Q0FBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLG1EQUFPLENBQUE7SUFDUCwrQkFBK0I7SUFDL0IsNkNBQUksQ0FBQTtJQUNKLHlDQUF5QztJQUN6QyxxREFBUSxDQUFBO0FBQ1osQ0FBQyxFQVRXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBU3RCO0FBZ0JELFNBQWdCLDJCQUEyQixDQUFDLEdBQVE7SUFDaEQsT0FBTyxHQUFHO1FBQ1YsQ0FBQyxHQUFHLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQztRQUNsQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO1FBQ2hDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQztRQUM1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO1FBQzNCLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7UUFDM0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFURCxrRUFTQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBUaGUgc3RhdGUgb2YgYSBidXR0b24tbGlrZSB2YXJpYWJsZSBkdXJpbmcgYSBzaW5nbGUgZnJhbWUuXG4gKi9cbmV4cG9ydCBlbnVtIEJ1dHRvblN0YXRle1xuICAgIC8qKiBUaGUgYnV0dG9uIGlzIGluIGl0cyBuYXR1cmFsIChpbmFjdGl2ZSkgc3RhdGUuICovXG4gICAgUmVzdCxcbiAgICAvKiogVGhlIGJ1dHRvbiBpcyBwcmVzc2VkIGRvd24gdGhpcyBmcmFtZS4gKi9cbiAgICBQcmVzc2VkLFxuICAgIC8qKiBUaGUgYnV0dG9uIGlzIGhlbGQgZG93bi4gKi9cbiAgICBIZWxkLFxuICAgIC8qKiBUaGUgYnV0dG9uIGlzIHJlbGVhc2VkIHRoaXMgZnJhbWUuICovXG4gICAgUmVsZWFzZWQsXG59XG5leHBvcnQgdHlwZSBBeGlzMUQgPSBudW1iZXI7XG4vKipcbiAqIEludGVyZmFjZSBmb3Igb2JqZWN0cyB0aGF0IGNhbiBzdXBwb3J0IGNvbnRyb2wgaW5wdXRzLlxuICogWW91IGNhbiBjb25zaWRlciB0aGlzIGFzIGFuIGFic3RyYWN0aW9uIG92ZXIgZGlmZmVyZW50IGtpbmRzIG9mIGlucHV0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRDb250cm9scyB7XG4gICAgcmVhZG9ubHkgaG9yaXpvbnRhbEF4aXM6IEF4aXMxRDtcbiAgICByZWFkb25seSB2ZXJ0aWNhbEF4aXM6IEF4aXMxRDtcbiAgICByZWFkb25seSBhdHRhY2s6IEJ1dHRvblN0YXRlO1xuICAgIHJlYWRvbmx5IGdldGh1cnQ6IEJ1dHRvblN0YXRlO1xuICAgIHJlYWRvbmx5IGludGVyYWN0OiBCdXR0b25TdGF0ZTtcbiAgICByZWFkb25seSBhdHRhY2syOiBCdXR0b25TdGF0ZTtcbiAgICByZWFkb25seSBhdHRhY2szOiBCdXR0b25TdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ltcGxlbWVudGVkSW5wdXRDb250cm9scyhvYmo6IGFueSk6IG9iaiBpcyBJSW5wdXRDb250cm9sc3tcbiAgICByZXR1cm4gb2JqICYmIFxuICAgIChvYmouaG9yaXpvbnRhbEF4aXMgIT09IHVuZGVmaW5lZCkgJiZcbiAgICAob2JqLnZlcnRpY2FsQXhpcyAhPT0gdW5kZWZpbmVkKSAmJlxuICAgIChvYmouYXR0YWNrICE9PSB1bmRlZmluZWQpICYmXG4gICAgKG9iai5pbnRlcmFjdCAhPT0gdW5kZWZpbmVkKSAmJlxuICAgIChvYmouZ2V0aHVydCAhPT0gdW5kZWZpbmVkKSAmJlxuICAgIChvYmouYXR0YWNrMiAhPT0gdW5kZWZpbmVkKSYmXG4gICAgKG9iai5hdHRhY2szICE9PSB1bmRlZmluZWQpOyBcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utilities/ZSorter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99e25O3dctP9r6blHhMnMae', 'ZSorter');
// scripts/utilities/ZSorter.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * A component that makes a node render in a way such that it appears behind nodes
 * that are located below it.
 */
var ZSorter = /** @class */ (function (_super) {
    __extends(ZSorter, _super);
    function ZSorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZSorter.prototype.update = function (dt) {
        this.node.zIndex = 10000 + -this.node.y;
    };
    ZSorter = __decorate([
        ccclass
    ], ZSorter);
    return ZSorter;
}(cc.Component));
exports.default = ZSorter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxpdGllcy9aU29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDOzs7R0FHRztBQUVIO0lBQXFDLDJCQUFZO0lBQWpEOztJQUlBLENBQUM7SUFIRyx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFIZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQUkzQjtJQUFELGNBQUM7Q0FKRCxBQUlDLENBSm9DLEVBQUUsQ0FBQyxTQUFTLEdBSWhEO2tCQUpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBhIG5vZGUgcmVuZGVyIGluIGEgd2F5IHN1Y2ggdGhhdCBpdCBhcHBlYXJzIGJlaGluZCBub2Rlc1xuICogdGhhdCBhcmUgbG9jYXRlZCBiZWxvdyBpdC5cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpTb3J0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDAgKyAtdGhpcy5ub2RlLnk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/strategies/Coward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f1e55DmctOVp8eQg/uquO9', 'Coward');
// scripts/ai/strategies/Coward.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coward = void 0;
var AgentStrategy_1 = require("./AgentStrategy");
var Coward = /** @class */ (function (_super) {
    __extends(Coward, _super);
    /**
     *
     * @param _agent The agent using the strategy.
     * @param _runAwayFrom The node for the agent to run away from.
     */
    function Coward(_agent, _runAwayFrom) {
        var _this = _super.call(this) || this;
        _this._agent = null;
        _this._runAwayFrom = null;
        _this._moveAxis2D = cc.Vec2.ZERO;
        _this._agent = _agent;
        _this._runAwayFrom = _runAwayFrom;
        return _this;
    }
    Object.defineProperty(Coward.prototype, "awayFromTarget", {
        get: function () {
            return this._agent.node.position.sub(this._runAwayFrom.position).normalize();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "distanceFromTarget", {
        get: function () {
            return this._runAwayFrom.position.sub(this._agent.node.position).mag();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "horizontalAxis", {
        get: function () {
            return this._moveAxis2D.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "verticalAxis", {
        get: function () {
            return this._moveAxis2D.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "attack", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "interact", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Coward.prototype.start = function () {
    };
    Coward.prototype.update = function (dt) {
        this._moveAxis2D = this.awayFromTarget;
    };
    return Coward;
}(AgentStrategy_1.AI.Strategy));
exports.Coward = Coward;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL3N0cmF0ZWdpZXMvQ293YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpREFBcUM7QUFFckM7SUFBNEIsMEJBQVc7SUFHbkM7Ozs7T0FJRztJQUNILGdCQUFZLE1BQWEsRUFBRSxZQUFxQjtRQUFoRCxZQUNJLGlCQUFPLFNBR1Y7UUFYTyxZQUFNLEdBQVUsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBWTdCLGlCQUFXLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFKeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7O0lBQ3JDLENBQUM7SUFJRCxzQkFBVyxrQ0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pGLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQWtCO2FBQTdCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDMUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxnQ0FBWTthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywwQkFBTTthQUFqQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFRO2FBQW5CO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ00sc0JBQUssR0FBWjtJQUVBLENBQUM7SUFDTSx1QkFBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0MsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQTNDQSxBQTJDQyxDQTNDMkIsa0JBQUUsQ0FBQyxRQUFRLEdBMkN0QztBQTNDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblN0YXRlIH0gZnJvbSBcIi4uLy4uL2lucHV0L0lJbnB1dENvbnRyb2xzXCI7XG5pbXBvcnQgQWdlbnQgZnJvbSBcIi4uL0FnZW50XCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL0FnZW50U3RyYXRlZ3lcIjtcblxuZXhwb3J0IGNsYXNzIENvd2FyZCBleHRlbmRzIEFJLlN0cmF0ZWd5e1xuICAgIHByaXZhdGUgX2FnZW50OiBBZ2VudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcnVuQXdheUZyb206IGNjLk5vZGUgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBfYWdlbnQgVGhlIGFnZW50IHVzaW5nIHRoZSBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0gX3J1bkF3YXlGcm9tIFRoZSBub2RlIGZvciB0aGUgYWdlbnQgdG8gcnVuIGF3YXkgZnJvbS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfYWdlbnQ6IEFnZW50LCBfcnVuQXdheUZyb206IGNjLk5vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYWdlbnQgPSBfYWdlbnQ7XG4gICAgICAgIHRoaXMuX3J1bkF3YXlGcm9tID0gX3J1bkF3YXlGcm9tO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vdmVBeGlzMkQ6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG5cbiAgICBwdWJsaWMgZ2V0IGF3YXlGcm9tVGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWdlbnQubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5fcnVuQXdheUZyb20ucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGlzdGFuY2VGcm9tVGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuQXdheUZyb20ucG9zaXRpb24uc3ViKHRoaXMuX2FnZW50Lm5vZGUucG9zaXRpb24pLm1hZygpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueDtcbiAgICB9XG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbW92ZUF4aXMyRCA9IHRoaXMuYXdheUZyb21UYXJnZXQ7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkcsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBb0NDO1FBN0JHLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQVksSUFBSSxDQUFDOztRQTBCL0IsaUJBQWlCO0lBQ3JCLENBQUM7bUJBcENvQixVQUFVO0lBRzNCLHNCQUFrQixzQkFBUTthQUExQjtZQUNJLE9BQU8sWUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQU9ELHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsWUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQWMsRUFBRSxDQUFDO1FBQzNCLEtBQWtCLFVBQTRCLEVBQTVCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQTVCLGNBQTRCLEVBQTVCLElBQTRCLEVBQUU7WUFBM0MsSUFBSSxLQUFLLFNBQUE7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDVixnRkFBZ0Y7WUFDaEYsd0RBQXdEO1lBQ3hELGFBQWE7WUFDYixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUN4RTtJQUNMLENBQUM7O0lBL0JjLG1CQUFRLEdBQWUsSUFBSSxDQUFDO0lBSzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDYTtJQVRkLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FvQzlCO0lBQUQsaUJBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBb0NuRDtrQkFwQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgWlNvcnRPbkxvYWQgZnJvbSBcIi4vdXRpbGl0aWVzL1pTb3J0T25Mb2FkXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWFwTWFuYWdlciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiBNYXBNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvYmplY3RMYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdG9yTGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgTWFwTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMub2JqZWN0TGF5ZXJOb2RlLmFkZENvbXBvbmVudChaU29ydE9uTG9hZCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBhY3RvcnM6IGNjLk5vZGVbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhY3RvciBvZiB0aGlzLmFjdG9yTGF5ZXJOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBhY3RvcnMucHVzaChhY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgYWN0b3Igb2YgYWN0b3JzKSB7XG4gICAgICAgICAgICAvLyBQb3NzaWJseSBhbiBlbmdpbmUgYnVnOiBBIG5vZGUncyB3b3JsZCBwb3NpdGlvbiBjYW4gY2hhbmdlIGFmdGVyIHJlcGFyZW50aW5nLlxuICAgICAgICAgICAgLy8gVGhhdCdzIHdoeSB3ZSBoYXZlIHRvIGZpeCB0aGUgcG9zaXRpb24gbWFudWFsbHkgaGVyZS5cbiAgICAgICAgICAgIC8vIEJhZCBBUEkgOihcbiAgICAgICAgICAgIGxldCB3b3JsZFBvc0JlZm9yZSA9IGFjdG9yLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgYWN0b3Iuc2V0UGFyZW50KHRoaXMub2JqZWN0TGF5ZXJOb2RlKTtcbiAgICAgICAgICAgIGFjdG9yLnNldFBvc2l0aW9uKGFjdG9yLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvc0JlZm9yZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01vbnN0ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQUssV0FLSjtBQUxELFdBQUssV0FBVztJQUNaLHVEQUFTLENBQUE7SUFDVCx5REFBVSxDQUFBO0lBQ1YsdURBQVMsQ0FBQTtJQUNULHVEQUFTLENBQUE7QUFDYixDQUFDLEVBTEksV0FBVyxLQUFYLFdBQVcsUUFLZjtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0hDO1FBcEhXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQWlIakMsQ0FBQztJQTlHRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEUsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsOEJBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsVUFBVSxFQUFFO2dCQUNoQixLQUFLLFdBQVcsQ0FBQyxTQUFTO29CQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBQ1YsS0FBSyxXQUFXLENBQUMsVUFBVTtvQkFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNWLEtBQUssV0FBVyxDQUFDLFNBQVM7b0JBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDVixLQUFLLFdBQVcsQ0FBQyxTQUFTO29CQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBQ1Y7b0JBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNyRDtTQUNKO0lBRUwsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFBQSxpQkFhQztRQVpHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUMzRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPO2FBQ1Y7WUFDRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDekQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUM1RCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1Y7WUFDRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDekQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFDRCxnQ0FBYSxHQUFiO1FBQUEsaUJBYUM7UUFaRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDM0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0MsT0FBTzthQUNWO1lBQ0QsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ3pELFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxnQ0FBYSxHQUFiO1FBQUEsaUJBYUM7UUFaRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDM0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDNUMsT0FBTzthQUNWO1lBQ0QsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ3pELFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixNQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFySGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzSDVCO0lBQUQsZUFBQztDQXRIRCxBQXNIQyxDQXRIcUMsRUFBRSxDQUFDLFNBQVMsR0FzSGpEO2tCQXRIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmVudW0gTW9uc3RlclR5cGUge1xuICAgIEJsdWVTbGltZSxcbiAgICBHcmVlblNsaW1lLFxuICAgIEdyZWVuQm9zcyxcbiAgICBMYXZhU2xpbWVcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBtb25zdGVyTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBNYXBfeG1heDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIE1hcF95bWF4OiBudW1iZXIgPSAwO1xuXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikuTGV2ZWw7XG4gICAgICAgIC8vSW5pdGlhbGl6ZSB0aGUgbW9uc3RlciBtYW5hZ2VyXG4gICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBvbmxvYWRcIik7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgaW5pdE1vbnN0ZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPVwiLCB0aGlzLk1hcF94bWF4LCBcIk1hcF95bWF4ID1cIiwgdGhpcy5NYXBfeW1heCk7XG4gICAgICAgIGxldCBtb25zdGVyQ291bnQgPSBNYXRoLmZsb29yKCh0aGlzLk1hcF94bWF4LzEwMCkqKHRoaXMuTWFwX3ltYXgvMTAwKS85KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb25zdGVyIENvdW50ID0gXCIsbW9uc3RlckNvdW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25zdGVyQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbVR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMy45OTk5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBUeXBlOlwiLCByYW5kb21UeXBlKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTW9uc3RlclR5cGUuQmx1ZVNsaW1lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCbHVlU2xpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNb25zdGVyVHlwZS5HcmVlblNsaW1lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHcmVlblNsaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTW9uc3RlclR5cGUuR3JlZW5Cb3NzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHcmVlbkJvc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNb25zdGVyVHlwZS5MYXZhU2xpbWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdExhdmFTbGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIlVua25vd24gbW9uc3RlciB0eXBlOlwiLCByYW5kb21UeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdEJsdWVTbGltZSgpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0JsdWUgU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIEJsdWUgU2xpbWU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLDEsJ0JsdWUgU2xpbWUnKTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeW1heCArIDEpKSA7XG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9XCIsIHRoaXMuTWFwX3htYXgsIFwiTWFwX3ltYXggPVwiLCB0aGlzLk1hcF95bWF4KTtcbiAgICB9XG4gICAgaW5pdEdyZWVuU2xpbWUoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9HcmVlbiBTbGltZVwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgR3JlZW4gU2xpbWU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLCAxLCdHcmVlbiBTbGltZScpO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeG1heCArIDEpKSA7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF95bWF4ICsgMSkpIDtcbiAgICAgICAgICAgIFNsaW1lTm9kZS5zZXRQb3NpdGlvbih4LHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4PVwiLCB4LCBcInk9XCIseSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBpbml0R3JlZW5Cb3NzKCkge1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR3JlZW4gQm9zc1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgR3JlZW4gQm9zc1wiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFNsaW1lTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyLmFkZENoaWxkKFNsaW1lTm9kZSwgMSwgJ0dyZWVuIEJvc3MnKTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeW1heCArIDEpKSA7XG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9XCIsIHRoaXMuTWFwX3htYXgsIFwiTWFwX3ltYXggPVwiLCB0aGlzLk1hcF95bWF4KTtcbiAgICB9XG4gICAgaW5pdExhdmFTbGltZSgpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0xhdmEgU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIExhdmEgU2xpbWU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLCAxLCAnTGF2YSBTbGltZScpO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeG1heCArIDEpKSA7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF95bWF4ICsgMSkpIDtcbiAgICAgICAgICAgIFNsaW1lTm9kZS5zZXRQb3NpdGlvbih4LHkpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcF94bWF4ID1cIiwgdGhpcy5NYXBfeG1heCwgXCJNYXBfeW1heCA9XCIsIHRoaXMuTWFwX3ltYXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRNb25zdGVyKF9sZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBfbGV2ZWw7XG4gICAgICAgIGxldCBNYXBHRW4gPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIHRoaXMuTWFwX3htYXggPSBOdW1iZXIoKHRoaXMubGV2ZWwgKjQrNikqMTAwKTtcbiAgICAgICAgdGhpcy5NYXBfeW1heCA9IE51bWJlcigodGhpcy5sZXZlbCAqMiszKSoxMDApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsID0gXCIsIHRoaXMubGV2ZWwsIHR5cGVvZiB0aGlzLmxldmVsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9IFwiLCB0aGlzLk1hcF94bWF4LCB0eXBlb2YgdGhpcy5NYXBfeG1heCk7XG5cbiAgICAgICAgdGhpcy5tb25zdGVyTWFuYWdlci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmluaXRNb25zdGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0IG1vbnN0ZXJcIik7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapGeneratorCore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67e35QjBHdNv7coHUqfA/Sf', 'MapGeneratorCore');
// scripts/MapGeneratorCore.ts

"use strict";
/*
function init(){
    console.log("myscript.ts line 2");
    document.getElementById("text0").innerHTML = "Hello World!";
    document.getElementById("controlBtn0").addEventListener('click',drawMap);
}
*/
/*class _GraphNode{
    nodeNumber : number;
    edgeList : number[];
    constructor(_nodeNumber){
        this.nodeNumber = _nodeNumber;
    }
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map_Graph = exports.mapRoomUnit = exports.Map_selected_edge = exports.Map_edge = exports.Map_node = void 0;
var Map_node = /** @class */ (function () {
    function Map_node(_ip) {
        this.disjoint_set_height = 1;
        this.disjoint_set_ptr = _ip;
    }
    return Map_node;
}()); // able to modify (have to modify related code, too)
exports.Map_node = Map_node;
var Map_edge = /** @class */ (function () {
    function Map_edge(_f, _t) {
        this.from = _f;
        this.to = _t;
        this.weight = Math.random();
    }
    return Map_edge;
}());
exports.Map_edge = Map_edge;
var Map_selected_edge = /** @class */ (function () {
    function Map_selected_edge(_f, _t) {
        this.from = _f;
        this.to = _t;
    }
    return Map_selected_edge;
}());
exports.Map_selected_edge = Map_selected_edge;
var mapRoomUnit = /** @class */ (function () {
    function mapRoomUnit(_init) {
        this.up = _init;
        this.down = _init;
        this.right = _init;
        this.left = _init;
    }
    return mapRoomUnit;
}());
exports.mapRoomUnit = mapRoomUnit;
var Map_Graph = /** @class */ (function () {
    function Map_Graph(_xmax, _ymax) {
        /*
        _blockWidth : number;
        _LineWidth : number;
        */
        this.vertexList = new Map();
        this.edgeList = [];
        this.selectedEdgeList = [];
        this.mapBlock = []; // mapBlock[_y][_x] // true -> wall
        this.ymax = _ymax;
        this.xmax = _xmax;
        //this.vertexList = new Map<number,Map_node>();
        for (var _y = 0; _y < this.ymax; _y += 1) {
            this.mapBlock[_y] = [];
            for (var _x = 0; _x < this.xmax; _x += 1) {
                this.mapBlock[_y][_x] = new mapRoomUnit(true);
            }
        }
        this.initializeGraph();
    }
    Map_Graph.prototype.disjoint_set_top = function (_ip) {
        while (true) {
            if (this.vertexList.get(_ip) === undefined) {
                return -1;
            }
            if (_ip === this.vertexList.get(_ip).disjoint_set_ptr) {
                return _ip;
            }
            _ip = this.vertexList.get(_ip).disjoint_set_ptr;
        }
    };
    Map_Graph.prototype.initializeGraph = function () {
        var totalVertex = 0;
        //initialize vertex
        for (var _x = 0; _x < this.xmax; _x += 1) {
            for (var _y = 0; _y < this.ymax; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                var nodeProperty = new Map_node(nodeNum);
                this.vertexList.set(nodeNum, nodeProperty);
                totalVertex += 1;
            }
        }
        //initialize horizontal edge
        for (var _x = 0; _x < this.xmax - 1; _x += 1) {
            for (var _y = 0; _y < this.ymax; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                if ((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum + 1) === undefined)) {
                    continue;
                }
                var newEdge = new Map_edge(nodeNum, nodeNum + 1);
                this.edgeList.push(newEdge);
            }
        }
        //initialize virtical edge
        for (var _x = 0; _x < this.xmax; _x += 1) {
            for (var _y = 0; _y < this.ymax - 1; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                if ((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum + this.xmax) === undefined)) {
                    continue;
                }
                var newEdge = new Map_edge(nodeNum, nodeNum + this.xmax);
                this.edgeList.push(newEdge);
            }
        }
        //initialize edgeList
        this.edgeList.sort(function (ipa, ipb) { return ipa.weight - ipb.weight; });
        /*for(let i:number =0;i<this.edgeList.length;i++){
            //this.edgeList[i].disjoint_set_ptr = i;//wrong
        }*/
        //
        this.calculateMinimumSpanningTree(); //totalVertex-1
        this.calculate_block();
    };
    Map_Graph.prototype.calculate_block = function () {
        for (var i = 0; i < this.selectedEdgeList.length; i++) {
            if ((this.selectedEdgeList[i].to - this.selectedEdgeList[i].from) === 1) {
                //horizontal
                var _x = this.selectedEdgeList[i].from % this.xmax;
                var _y = (this.selectedEdgeList[i].from - _x) / this.xmax;
                this.mapBlock[_y][_x].right = false;
                this.mapBlock[_y][_x + 1].left = false;
            }
            else {
                //vertical
                var _x = this.selectedEdgeList[i].from % this.xmax;
                var _y = (this.selectedEdgeList[i].from - _x) / this.xmax;
                this.mapBlock[_y][_x].down = false;
                this.mapBlock[_y + 1][_x].up = false;
            }
        }
    };
    Map_Graph.prototype.calculateMinimumSpanningTree = function () {
        for (var i = 0; i < this.edgeList.length; i++) {
            if (this.disjoint_set_top(this.edgeList[i].from) === this.disjoint_set_top(this.edgeList[i].to)) {
                continue;
            }
            var newE = new Map_selected_edge(this.edgeList[i].from, this.edgeList[i].to);
            this.selectedEdgeList.push(newE);
            var setA_id = this.disjoint_set_top(this.edgeList[i].from);
            var setB_id = this.disjoint_set_top(this.edgeList[i].to);
            if (this.vertexList.get(setA_id).disjoint_set_height === this.vertexList.get(setB_id).disjoint_set_height) {
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
                this.vertexList.get(setA_id).disjoint_set_height += 1;
            }
            else if (this.vertexList.get(setA_id).disjoint_set_height > this.vertexList.get(setB_id).disjoint_set_height) {
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
            }
            else {
                this.vertexList.get(setA_id).disjoint_set_ptr = setB_id;
            }
            /*treeEdges -= 1;
            if(treeEdges === 0){
                break;
            }*/
        }
    };
    return Map_Graph;
}());
exports.Map_Graph = Map_Graph;
/*
function drawMap(){
    //console.log("onClick");
    var mapSize = 10;
    var myMap : Map_Graph = new Map_Graph(mapSize,mapSize);
    var _blockWidth : number = 40;
    var _LineWidth : number = 2;
    const myCanvas : any = document.getElementById("canvas0");
    const ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#000000';
    // ctx.clearRect
    // ctx.fillRect
    //initialize vertex
    console.log("myscript.ts line 147");
    ctx.clearRect(0,0,512,512);
    for(let _y:number = 0;_y<mapSize;_y += 1){
        for(let _x:number = 0;_x<mapSize;_x += 1){
            if(myMap.mapBlock[_y][_x].up){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth,_blockWidth,_LineWidth);
            }
            if(myMap.mapBlock[_y][_x].left){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth,_LineWidth,_blockWidth);
            }
            if(myMap.mapBlock[_y][_x].down){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth+_blockWidth-_LineWidth,_blockWidth,_LineWidth);
            }
            if(myMap.mapBlock[_y][_x].right){
                ctx.fillRect(_x*_blockWidth+_blockWidth-_LineWidth,_y*_blockWidth,_LineWidth,_blockWidth);
            }
        }
    }
    /*
    for(let _x:number = 0;_x<=mapSize;_x += 1){
        for(let _y:number = 0;_y<=mapSize;_y += 1){
            ctx.fillRect(_blockWidth*_x,_blockWidth*_y,_LineWidth,_LineWidth);
        }
    }
    //initialize horizontal edge
    for(let _x:number = -1;_x<mapSize;_x += 1){
        for(let _y:number = 0;_y<mapSize;_y += 1){
            ctx.fillRect(_blockWidth+_blockWidth*_x,_blockWidth*_y,_LineWidth,_blockWidth);
        }
    }
    //initialize virtical edge
    for(let _x:number = 0;_x<mapSize;_x += 1){
        for(let _y:number = -1;_y<mapSize;_y += 1){
            ctx.fillRect(_blockWidth*_x,_blockWidth+_blockWidth*_y,_blockWidth,_LineWidth);
        }
    }
    for(let i:number=0;i<myMap.selectedEdgeList.length;i+=1){
        var _x :number = myMap.selectedEdgeList[i].from % mapSize;
        var _y :number = (myMap.selectedEdgeList[i].from-_x) / mapSize;
        if((myMap.selectedEdgeList[i].to-myMap.selectedEdgeList[i].from) === 1){
            ctx.clearRect(_blockWidth+_blockWidth*_x,+_blockWidth*_y,_LineWidth,_blockWidth);
        }else{
            ctx.clearRect(_blockWidth*_x,_blockWidth+_blockWidth*_y,_blockWidth,_LineWidth);
        }
    }
}

*/
/*
init();
console.log("myscript.ts line 7");*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcEdlbmVyYXRvckNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7RUFNRTtBQUNGOzs7Ozs7R0FNRzs7O0FBRUg7SUFHSSxrQkFBWSxHQUFVO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBUEEsQUFPQyxJQUFBLENBQUEsb0RBQW9EO0FBUHhDLDRCQUFRO0FBUXJCO0lBSUksa0JBQVksRUFBRSxFQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRCQUFRO0FBVXJCO0lBR0ksMkJBQVksRUFBRSxFQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCx3QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksOENBQWlCO0FBUTlCO0lBS0kscUJBQVksS0FBZTtRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGtDQUFXO0FBYXhCO0lBV0ksbUJBQVksS0FBSyxFQUFDLEtBQUs7UUFSdkI7OztVQUdFO1FBQ0YsZUFBVSxHQUEwQixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUMvRCxhQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUMzQixxQkFBZ0IsR0FBeUIsRUFBRSxDQUFDO1FBQzVDLGFBQVEsR0FBcUIsRUFBRSxDQUFDLENBQUMsbUNBQW1DO1FBRWhFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLCtDQUErQztRQUMvQyxLQUFJLElBQUksRUFBRSxHQUFVLENBQUMsRUFBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxFQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksSUFBSSxFQUFFLEdBQVUsQ0FBQyxFQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakQ7U0FDSjtRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCLFVBQWlCLEdBQVk7UUFDekIsT0FBTSxJQUFJLEVBQUM7WUFDUCxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBQztnQkFDdEMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNiO1lBQ0QsSUFBRyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUM7Z0JBQ2pELE9BQU8sR0FBRyxDQUFDO2FBQ2Q7WUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBQ0QsbUNBQWUsR0FBZjtRQUNJLElBQUksV0FBVyxHQUFVLENBQUMsQ0FBQztRQUMzQixtQkFBbUI7UUFDbkIsS0FBSSxJQUFJLEVBQUUsR0FBVSxDQUFDLEVBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsRUFBQztZQUN2QyxLQUFJLElBQUksRUFBRSxHQUFVLENBQUMsRUFBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxFQUFDO2dCQUN2QyxJQUFJLE9BQU8sR0FBWSxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUksWUFBWSxHQUFjLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLFdBQVcsSUFBRSxDQUFDLENBQUM7YUFDbEI7U0FDSjtRQUNELDRCQUE0QjtRQUM1QixLQUFJLElBQUksRUFBRSxHQUFVLENBQUMsRUFBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsRUFBQztZQUN6QyxLQUFJLElBQUksRUFBRSxHQUFVLENBQUMsRUFBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxFQUFDO2dCQUN2QyxJQUFJLE9BQU8sR0FBWSxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZDLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsRUFBQztvQkFDOUYsU0FBUztpQkFDWjtnQkFDRCxJQUFJLE9BQU8sR0FBYyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBQ0QsMEJBQTBCO1FBQzFCLEtBQUksSUFBSSxFQUFFLEdBQVUsQ0FBQyxFQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7WUFDdkMsS0FBSSxJQUFJLEVBQUUsR0FBVSxDQUFDLEVBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQ3pDLElBQUksT0FBTyxHQUFZLEVBQUUsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkMsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsRUFBQztvQkFDdEcsU0FBUztpQkFDWjtnQkFDRCxJQUFJLE9BQU8sR0FBYyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7U0FDSjtRQUNELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBQyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUM5RDs7V0FFRztRQUNILEVBQUU7UUFDRixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFBLGVBQWU7UUFDbkQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxtQ0FBZSxHQUFmO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBUyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztnQkFDakUsWUFBWTtnQkFDWixJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzNELElBQUksRUFBRSxHQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDeEM7aUJBQUk7Z0JBQ0QsVUFBVTtnQkFDVixJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzNELElBQUksRUFBRSxHQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7YUFDdEM7U0FDSjtJQUNMLENBQUM7SUFDRCxnREFBNEIsR0FBNUI7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFTLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDM0MsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQztnQkFDM0YsU0FBUzthQUNaO1lBQ0QsSUFBSSxJQUFJLEdBQXVCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ3JHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDO2FBQ3pEO2lCQUFLLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ3pHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzthQUMzRDtpQkFBSTtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7YUFDM0Q7WUFDRDs7O2VBR0c7U0FDTjtJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBcEhBLEFBb0hDLElBQUE7QUFwSFksOEJBQVM7QUFxSHRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE0REU7QUFDRjs7b0NBRW9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMlwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQwXCIpLmlubmVySFRNTCA9IFwiSGVsbG8gV29ybGQhXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sQnRuMFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJhd01hcCk7XG59XG4qL1xuLypjbGFzcyBfR3JhcGhOb2Rle1xuICAgIG5vZGVOdW1iZXIgOiBudW1iZXI7XG4gICAgZWRnZUxpc3QgOiBudW1iZXJbXTtcbiAgICBjb25zdHJ1Y3Rvcihfbm9kZU51bWJlcil7XG4gICAgICAgIHRoaXMubm9kZU51bWJlciA9IF9ub2RlTnVtYmVyO1xuICAgIH1cbn0qL1xuXG5leHBvcnQgY2xhc3MgTWFwX25vZGV7XG4gICAgZGlzam9pbnRfc2V0X3B0ciA6IG51bWJlcjtcbiAgICBkaXNqb2ludF9zZXRfaGVpZ2h0IDogbnVtYmVyXG4gICAgY29uc3RydWN0b3IoX2lwOm51bWJlcil7XG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X2hlaWdodCA9IDE7XG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X3B0ciA9IF9pcDtcbiAgICB9XG59Ly8gYWJsZSB0byBtb2RpZnkgKGhhdmUgdG8gbW9kaWZ5IHJlbGF0ZWQgY29kZSwgdG9vKVxuZXhwb3J0IGNsYXNzIE1hcF9lZGdle1xuICAgIGZyb20gOiBudW1iZXI7XG4gICAgdG8gOiBudW1iZXI7XG4gICAgd2VpZ2h0IDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF9mLF90KXtcbiAgICAgICAgdGhpcy5mcm9tID0gX2Y7XG4gICAgICAgIHRoaXMudG8gPSBfdDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXBfc2VsZWN0ZWRfZWRnZXtcbiAgICBmcm9tIDogbnVtYmVyO1xuICAgIHRvIDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF9mLF90KXtcbiAgICAgICAgdGhpcy5mcm9tID0gX2Y7XG4gICAgICAgIHRoaXMudG8gPSBfdDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgbWFwUm9vbVVuaXR7Ly8gdHJ1ZSAtPiB3YWxsXG4gICAgdXAgOiBib29sZWFuO1xuICAgIGRvd24gOiBib29sZWFuO1xuICAgIHJpZ2h0IDogYm9vbGVhbjtcbiAgICBsZWZ0IDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihfaW5pdCA6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLnVwID0gX2luaXQ7XG4gICAgICAgIHRoaXMuZG93biA9IF9pbml0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gX2luaXQ7XG4gICAgICAgIHRoaXMubGVmdCA9IF9pbml0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcF9HcmFwaHtcbiAgICB4bWF4IDogbnVtYmVyO1xuICAgIHltYXggOiBudW1iZXI7XG4gICAgLypcbiAgICBfYmxvY2tXaWR0aCA6IG51bWJlcjtcbiAgICBfTGluZVdpZHRoIDogbnVtYmVyO1xuICAgICovXG4gICAgdmVydGV4TGlzdCA6IE1hcDxudW1iZXIsTWFwX25vZGU+ID0gbmV3IE1hcDxudW1iZXIsTWFwX25vZGU+KCk7XG4gICAgZWRnZUxpc3QgOiBNYXBfZWRnZVtdID0gW107XG4gICAgc2VsZWN0ZWRFZGdlTGlzdCA6IE1hcF9zZWxlY3RlZF9lZGdlW10gPSBbXTtcbiAgICBtYXBCbG9jayA6IG1hcFJvb21Vbml0W11bXSA9IFtdOyAvLyBtYXBCbG9ja1tfeV1bX3hdIC8vIHRydWUgLT4gd2FsbFxuICAgIGNvbnN0cnVjdG9yKF94bWF4LF95bWF4KXtcbiAgICAgICAgdGhpcy55bWF4ID0gX3ltYXg7XG4gICAgICAgIHRoaXMueG1heCA9IF94bWF4O1xuICAgICAgICAvL3RoaXMudmVydGV4TGlzdCA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xuICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV0gPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdID0gbmV3IG1hcFJvb21Vbml0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdyYXBoKCk7XG4gICAgfVxuICAgIGRpc2pvaW50X3NldF90b3AoX2lwIDogbnVtYmVyKTogbnVtYmVye1xuICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihfaXAgPT09IHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKS5kaXNqb2ludF9zZXRfcHRyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2lwID0gdGhpcy52ZXJ0ZXhMaXN0LmdldChfaXApLmRpc2pvaW50X3NldF9wdHI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZUdyYXBoKCkge1xuICAgICAgICBsZXQgdG90YWxWZXJ0ZXg6bnVtYmVyID0gMDtcbiAgICAgICAgLy9pbml0aWFsaXplIHZlcnRleFxuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8dGhpcy54bWF4O194ICs9IDEpe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heDtfeSArPSAxKXtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZU51bSA6IG51bWJlciA9IF94K195KnRoaXMueG1heDtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVByb3BlcnR5IDogTWFwX25vZGUgPSBuZXcgTWFwX25vZGUobm9kZU51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LnNldChub2RlTnVtLG5vZGVQcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdG90YWxWZXJ0ZXgrPTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9pbml0aWFsaXplIGhvcml6b250YWwgZWRnZVxuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8dGhpcy54bWF4LTE7X3ggKz0gMSl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xuICAgICAgICAgICAgICAgIGxldCBub2RlTnVtIDogbnVtYmVyID0gX3grX3kqdGhpcy54bWF4O1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnZlcnRleExpc3QuZ2V0KG5vZGVOdW0pID09PSB1bmRlZmluZWQpIHx8ICh0aGlzLnZlcnRleExpc3QuZ2V0KG5vZGVOdW0rMSkgPT09IHVuZGVmaW5lZCkpe1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5ld0VkZ2UgOiBNYXBfZWRnZSA9IG5ldyBNYXBfZWRnZShub2RlTnVtLG5vZGVOdW0rMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaW5pdGlhbGl6ZSB2aXJ0aWNhbCBlZGdlXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4LTE7X3kgKz0gMSl7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMudmVydGV4TGlzdC5nZXQobm9kZU51bSkgPT09IHVuZGVmaW5lZCkgfHwgKHRoaXMudmVydGV4TGlzdC5nZXQobm9kZU51bSt0aGlzLnhtYXgpID09PSB1bmRlZmluZWQpKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuZXdFZGdlIDogTWFwX2VkZ2UgPSBuZXcgTWFwX2VkZ2Uobm9kZU51bSxub2RlTnVtK3RoaXMueG1heCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBlZGdlTGlzdFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNvcnQoKGlwYSxpcGIpPT57cmV0dXJuIGlwYS53ZWlnaHQtaXBiLndlaWdodH0pO1xuICAgICAgICAvKmZvcihsZXQgaTpudW1iZXIgPTA7aTx0aGlzLmVkZ2VMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy90aGlzLmVkZ2VMaXN0W2ldLmRpc2pvaW50X3NldF9wdHIgPSBpOy8vd3JvbmdcbiAgICAgICAgfSovXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTWluaW11bVNwYW5uaW5nVHJlZSgpOy8vdG90YWxWZXJ0ZXgtMVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZV9ibG9jaygpO1xuICAgIH1cbiAgICBjYWxjdWxhdGVfYmxvY2soKXtcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0udG8tdGhpcy5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20pID09PSAxKXtcbiAgICAgICAgICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgICAgICAgICB2YXIgX3ggOm51bWJlciA9IHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgdGhpcy54bWF4O1xuICAgICAgICAgICAgICAgIHZhciBfeSA6bnVtYmVyID0gKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIHRoaXMueG1heDtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeF0ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeCsxXS5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsXG4gICAgICAgICAgICAgICAgdmFyIF94IDpudW1iZXIgPSB0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSAlIHRoaXMueG1heDtcbiAgICAgICAgICAgICAgICB2YXIgX3kgOm51bWJlciA9ICh0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbS1feCkgLyB0aGlzLnhtYXg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195KzFdW194XS51cCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGN1bGF0ZU1pbmltdW1TcGFubmluZ1RyZWUoKXsvL3RyZWVFZGdlcyA6IG51bWJlclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0wO2k8dGhpcy5lZGdlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pID09PSB0aGlzLmRpc2pvaW50X3NldF90b3AodGhpcy5lZGdlTGlzdFtpXS50bykpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld0UgOiBNYXBfc2VsZWN0ZWRfZWRnZSA9IG5ldyBNYXBfc2VsZWN0ZWRfZWRnZSh0aGlzLmVkZ2VMaXN0W2ldLmZyb20sdGhpcy5lZGdlTGlzdFtpXS50byk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZUxpc3QucHVzaChuZXdFKTtcbiAgICAgICAgICAgIGxldCBzZXRBX2lkID0gdGhpcy5kaXNqb2ludF9zZXRfdG9wKHRoaXMuZWRnZUxpc3RbaV0uZnJvbSk7XG4gICAgICAgICAgICBsZXQgc2V0Ql9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLnRvKTtcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCA9PT0gdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRBX2lkO1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCArPSAxO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0ID4gdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRBX2lkO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0Ql9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qdHJlZUVkZ2VzIC09IDE7XG4gICAgICAgICAgICBpZih0cmVlRWRnZXMgPT09IDApe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cbiAgICB9XG59XG4vKlxuZnVuY3Rpb24gZHJhd01hcCgpe1xuICAgIC8vY29uc29sZS5sb2coXCJvbkNsaWNrXCIpO1xuICAgIHZhciBtYXBTaXplID0gMTA7XG4gICAgdmFyIG15TWFwIDogTWFwX0dyYXBoID0gbmV3IE1hcF9HcmFwaChtYXBTaXplLG1hcFNpemUpO1xuICAgIHZhciBfYmxvY2tXaWR0aCA6IG51bWJlciA9IDQwO1xuICAgIHZhciBfTGluZVdpZHRoIDogbnVtYmVyID0gMjtcbiAgICBjb25zdCBteUNhbnZhcyA6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMFwiKTtcbiAgICBjb25zdCBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgLy8gY3R4LmNsZWFyUmVjdFxuICAgIC8vIGN0eC5maWxsUmVjdFxuICAgIC8vaW5pdGlhbGl6ZSB2ZXJ0ZXhcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMTQ3XCIpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwwLDUxMiw1MTIpO1xuICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTxtYXBTaXplO195ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8bWFwU2l6ZTtfeCArPSAxKXtcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCxfeSpfYmxvY2tXaWR0aCxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoLF95Kl9ibG9ja1dpZHRoLF9MaW5lV2lkdGgsX2Jsb2NrV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobXlNYXAubWFwQmxvY2tbX3ldW194XS5kb3duKXtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoX3gqX2Jsb2NrV2lkdGgsX3kqX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgtX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ucmlnaHQpe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aC1fTGluZVdpZHRoLF95Kl9ibG9ja1dpZHRoLF9MaW5lV2lkdGgsX2Jsb2NrV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PD1tYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8PW1hcFNpemU7X3kgKz0gMSl7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgaG9yaXpvbnRhbCBlZGdlXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAtMTtfeDxtYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8bWFwU2l6ZTtfeSArPSAxKXtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCxfYmxvY2tXaWR0aCpfeSxfTGluZVdpZHRoLF9ibG9ja1dpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgdmlydGljYWwgZWRnZVxuICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDxtYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IC0xO195PG1hcFNpemU7X3kgKz0gMSl7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3ksX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpOm51bWJlcj0wO2k8bXlNYXAuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSs9MSl7XG4gICAgICAgIHZhciBfeCA6bnVtYmVyID0gbXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgbWFwU2l6ZTtcbiAgICAgICAgdmFyIF95IDpudW1iZXIgPSAobXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIG1hcFNpemU7XG4gICAgICAgIGlmKChteU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLnRvLW15TWFwLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSkgPT09IDEpe1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCwrX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCpfeCxfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeSxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKi9cbi8qXG5pbml0KCk7XG5jb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgN1wiKTsqL1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22a1002ZNBB7bNqwt8XPmZL', 'UIManager');
// scripts/UIManager.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
    };
    NewClass.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWNBLENBQUM7SUFaRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFHbkQsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FjNUI7SUFBRCxlQUFDO0NBZEQsQUFjQyxDQWRxQyxFQUFFLENBQUMsU0FBUyxHQWNqRDtrQkFkb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/LoginSignUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c55e5C+eUhOeZ3fY8Q0UFHf', 'LoginSignUp');
// scripts/Menu/LoginSignUp.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// assets/scripts/LoginManager.ts
/*import { auth } from "./FirebaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginManager extends cc.Component {
    @property(cc.EditBox)
    emailEditBox: cc.EditBox = null;

    @property(cc.EditBox)
    passwordEditBox: cc.EditBox = null;

    @property(cc.Label)
    infoLabel: cc.Label = null;

  // Email 註冊
    onRegister() {
        const email = this.emailEditBox.string;
        const password = this.passwordEditBox.string;
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                this.infoLabel.string = "註冊成功：" + userCredential.user.email;
            })
        .catch(error => {
            this.infoLabel.string = "註冊失敗：" + error.message;
        });
    }

  // Email 登入
    onLogin() {
        const email = this.emailEditBox.string;
        const password = this.passwordEditBox.string;
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            this.infoLabel.string = "登入成功：" + userCredential.user.email;
        })
        .catch(error => {
            this.infoLabel.string = "登入失敗：" + error.message;
        });
    }

  // Google 登入
    onGoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then(result => {
            this.infoLabel.string = "Google 登入成功：" + result.user.email;
        })
        .catch(error => {
            this.infoLabel.string = "Google 登入失敗：" + error.message;
        });
    }
}*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTG9naW5TaWduVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFFbEYsaUNBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuLy8gYXNzZXRzL3NjcmlwdHMvTG9naW5NYW5hZ2VyLnRzXHJcbi8qaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL0ZpcmViYXNlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVtYWlsRWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwYXNzd29yZEVkaXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGluZm9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyBFbWFpbCDoqLvlhopcclxuICAgIG9uUmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyQ3JlZGVudGlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIuiou+WGiuaIkOWKn++8mlwiICsgdXNlckNyZWRlbnRpYWwudXNlci5lbWFpbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIuiou+WGiuWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gRW1haWwg55m75YWlXHJcbiAgICBvbkxvZ2luKCkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5lbWFpbEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKHVzZXJDcmVkZW50aWFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvTGFiZWwuc3RyaW5nID0gXCLnmbvlhaXmiJDlip/vvJpcIiArIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIueZu+WFpeWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gR29vZ2xlIOeZu+WFpVxyXG4gICAgb25Hb29nbGVMb2dpbigpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwiR29vZ2xlIOeZu+WFpeaIkOWKn++8mlwiICsgcmVzdWx0LnVzZXIuZW1haWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIkdvb2dsZSDnmbvlhaXlpLHmlZfvvJpcIiArIGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0qL1xyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/LoadingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aec4WHPZxHE4ps/5MxYjR7', 'LoadingManager');
// scripts/Menu/LoadingManager.ts

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
var LoadingManager = /** @class */ (function (_super) {
    __extends(LoadingManager, _super);
    function LoadingManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.percentLabel = null;
        return _this;
    }
    LoadingManager.prototype.startLoading = function (targetScene) {
        var _this = this;
        this.progressBar.progress = 0;
        this.percentLabel.string = "0%";
        cc.director.preloadScene(targetScene, function (completedCount, totalCount, item) {
            var progress = completedCount / totalCount;
            // 預設最多到 0.9，預留補滿動畫
            if (progress > 0.9)
                progress = 0.9;
            _this.progressBar.progress = progress;
            _this.percentLabel.string = Math.floor(progress * 100) + "%";
        }, function () {
            // 預加載完成時，tween 補滿到 100%
            cc.tween(_this.progressBar)
                .to(0.3, { progress: 1 })
                .call(function () {
                _this.percentLabel.string = "100%";
                cc.director.loadScene(targetScene);
            })
                .start();
        });
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingManager.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingManager.prototype, "percentLabel", void 0);
    LoadingManager = __decorate([
        ccclass
    ], LoadingManager);
    return LoadingManager;
}(cc.Component));
exports.default = LoadingManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTG9hZGluZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUEvQkcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQTRCbEMsQ0FBQztJQTFCRyxxQ0FBWSxHQUFaLFVBQWEsV0FBbUI7UUFBaEMsaUJBdUJDO1FBdEJELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3BCLFdBQVcsRUFDWCxVQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSTtZQUM3QixJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQzNDLG1CQUFtQjtZQUNuQixJQUFJLFFBQVEsR0FBRyxHQUFHO2dCQUFFLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRSxDQUFDLEVBQ0Q7WUFDSSx3QkFBd0I7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNyQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN4QixJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVztJQUxiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQ2xDO0lBQUQscUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzJDLEVBQUUsQ0FBQyxTQUFTLEdBaUN2RDtrQkFqQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwZXJjZW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHN0YXJ0TG9hZGluZyh0YXJnZXRTY2VuZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gXCIwJVwiO1xuXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxuICAgICAgICB0YXJnZXRTY2VuZSxcbiAgICAgICAgKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XG4gICAgICAgICAgICAvLyDpoJDoqK3mnIDlpJrliLAgMC4577yM6aCQ55WZ6KOc5ru/5YuV55WrXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwLjkpIHByb2dyZXNzID0gMC45O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgLy8g6aCQ5Yqg6LyJ5a6M5oiQ5pmC77yMdHdlZW4g6KOc5ru/5YiwIDEwMCVcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucHJvZ3Jlc3NCYXIpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0YXJnZXRTY2VuZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/MenuMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfc9apDJ+1PsaY2ZhPv7xhx', 'MenuMgr');
// scripts/Menu/MenuMgr.ts

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
var AuthManager_1 = require("./AuthManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Firebase v9+ 的例子
var MenuMgr = /** @class */ (function (_super) {
    __extends(MenuMgr, _super);
    function MenuMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VolumnValue = 0.5;
        _this.isSigningUp = false;
        _this.authComp = null;
        _this.startGameButton = null;
        return _this;
    }
    MenuMgr.prototype.onLoad = function () {
        // Hook up OptionButton → ShowSetting
        var OptionButton = new cc.Component.EventHandler();
        OptionButton.target = this.node;
        OptionButton.component = "MenuMgr";
        OptionButton.handler = "ShowSetting";
        cc.find("Canvas/background/OptionButton").getComponent(cc.Button).clickEvents.push(OptionButton);
        cc.log("Is Firebase initialized?", window._firebaseInited);
    };
    MenuMgr.prototype.ShowSetting = function () {
        var _this = this;
        // Setting is a prefab
        cc.resources.load("prefabs/Setting", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Setting prefab: ", err);
                return;
            }
            var settingNode = cc.instantiate(prefab);
            settingNode.setPosition(0, 0);
            settingNode.scaleX = 2;
            settingNode.scaleY = 2;
            cc.find("Canvas").addChild(settingNode);
            settingNode.name = "Setting";
            _this.initSettingButton();
        });
    };
    MenuMgr.prototype.initSettingButton = function () {
        //ExitSettingButton is a biutton in Setting prefab
        var ExitSettingButton = new cc.Component.EventHandler();
        ExitSettingButton.target = this.node;
        ExitSettingButton.component = "MenuMgr";
        ExitSettingButton.handler = "ExitSetting";
        cc.find("Canvas/Setting/ExitSetting").getComponent(cc.Button).clickEvents.push(ExitSettingButton);
        //Sign up
        var SignUpButton = new cc.Component.EventHandler();
        SignUpButton.target = this.node;
        SignUpButton.component = "MenuMgr";
        SignUpButton.handler = "SignUp";
        cc.find("Canvas/Setting/SignUp").getComponent(cc.Button).clickEvents.push(SignUpButton);
        //Login
        var LoginButton = new cc.Component.EventHandler();
        LoginButton.target = this.node;
        LoginButton.component = "MenuMgr";
        LoginButton.handler = "Login";
        cc.find("Canvas/Setting/Login").getComponent(cc.Button).clickEvents.push(LoginButton);
        //Volumnslider
        var Volumnslider = cc.find("Canvas/Setting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            Volumnslider.progress = Number(savedVolumn);
        else
            Volumnslider.progress = 0.5;
        Volumnslider.node.on('slide', this.onVolumnChange, this);
    };
    MenuMgr.prototype.ExitSetting = function () {
        var settingNode = cc.find("Canvas/Setting");
        if (settingNode)
            settingNode.destroy();
    };
    MenuMgr.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    MenuMgr.prototype.SignUp = function () {
        this.isSigningUp = true;
        this.openSignupLoginPanel();
    };
    MenuMgr.prototype.Login = function () {
        this.isSigningUp = false;
        this.openSignupLoginPanel();
    };
    MenuMgr.prototype.openSignupLoginPanel = function () {
        var _this = this;
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, function (err, asset) {
            if (err) {
                cc.error("Failed to load SignupLogin prefab:", err);
                return;
            }
            // Cast the loaded asset to cc.Prefab:
            var prefab = asset;
            // Now instantiate a Node from that prefab
            var signupLoginNode = cc.instantiate(prefab);
            signupLoginNode.setPosition(0, 0);
            signupLoginNode.scaleX = 0.5;
            signupLoginNode.scaleY = 0.5;
            signupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(signupLoginNode);
            signupLoginNode.name = "SignupLogin";
            // grab the AuthManager component from the newly‐created Node
            _this.authComp = signupLoginNode.getComponent(AuthManager_1.default);
            if (!_this.authComp) {
                cc.error("AuthManager component not found on SignupLogin prefab!");
                return;
            }
            _this.initSignupLogin();
        });
    };
    MenuMgr.prototype.initSignupLogin = function () {
        // “Exit” button wiring (unchanged)…
        var ExitSignupLoginButton = new cc.Component.EventHandler();
        ExitSignupLoginButton.target = this.node;
        ExitSignupLoginButton.component = "MenuMgr";
        ExitSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Exit").getComponent(cc.Button).clickEvents.push(ExitSignupLoginButton);
        // “Save” button now calls either authComp.SignUp or authComp.Login
        var SaveSignupLoginButton = new cc.Component.EventHandler();
        SaveSignupLoginButton.target = this.authComp.node;
        SaveSignupLoginButton.component = "AuthManager";
        SaveSignupLoginButton.handler = this.isSigningUp ? "SignUp" : "Login";
        cc.find("Canvas/Setting/SignupLogin/Save").getComponent(cc.Button).clickEvents.push(SaveSignupLoginButton);
    };
    MenuMgr.prototype.ExitSignupLogin = function () {
        var T_Node = cc.find("Canvas/Setting/SignupLogin");
        if (T_Node) {
            T_Node.destroy();
        }
    };
    MenuMgr.prototype.enableStartButton = function () {
        if (this.startGameButton) {
            this.startGameButton.node.active = true;
        }
    };
    __decorate([
        property(cc.Button)
    ], MenuMgr.prototype, "startGameButton", void 0);
    MenuMgr = __decorate([
        ccclass
    ], MenuMgr);
    return MenuMgr;
}(cc.Component));
exports.default = MenuMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsbUJBQW1CO0FBSW5CO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0pDO1FBOUlVLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFlLEdBQWMsSUFBSSxDQUFDOztJQTJJM0QsQ0FBQztJQXpJRyx3QkFBTSxHQUFOO1FBQ0kscUNBQXFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRyxFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyxzQkFBc0I7UUFDdEIsRUFBRSxDQUFD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QixDQUFDLENBQUM7UUFFM0csbUVBQW1FO1FBQ25FLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQztRQUNuRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hELHFCQUFxQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkQsSUFBRyxNQUFNLEVBQUU7WUFDUCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBMUlvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBbUM7SUFMdEMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdKM0I7SUFBRCxjQUFDO0NBaEpELEFBZ0pDLENBaEpvQyxFQUFFLENBQUMsU0FBUyxHQWdKaEQ7a0JBaEpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEF1dGhNYW5hZ2VyIGZyb20gJy4vQXV0aE1hbmFnZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuLy8gRmlyZWJhc2UgdjkrIOeahOS+i+WtkFxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZTogbnVtYmVyID0gMC41O1xyXG4gICAgcHVibGljIGlzU2lnbmluZ1VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGF1dGhDb21wOiBBdXRoTWFuYWdlciB8IG51bGwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RhcnRHYW1lQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBIb29rIHVwIE9wdGlvbkJ1dHRvbiDihpIgU2hvd1NldHRpbmdcclxuICAgICAgICBsZXQgT3B0aW9uQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBPcHRpb25CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIE9wdGlvbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBPcHRpb25CdXR0b24uaGFuZGxlciA9IFwiU2hvd1NldHRpbmdcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvT3B0aW9uQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goT3B0aW9uQnV0dG9uKTtcclxuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1NldHRpbmcoKSB7XHJcbiAgICAgICAgLy8gU2V0dGluZyBpcyBhIHByZWZhYlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TZXR0aW5nXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU2V0dGluZyBwcmVmYWI6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgc2V0dGluZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWCA9IDI7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWSA9IDI7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoc2V0dGluZ05vZGUpO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5uYW1lID0gXCJTZXR0aW5nXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5pbml0U2V0dGluZ0J1dHRvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0U2V0dGluZ0J1dHRvbigpe1xyXG4gICAgICAgIC8vRXhpdFNldHRpbmdCdXR0b24gaXMgYSBiaXV0dG9uIGluIFNldHRpbmcgcHJlZmFiXHJcbiAgICAgICAgbGV0IEV4aXRTZXR0aW5nQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uaGFuZGxlciA9IFwiRXhpdFNldHRpbmdcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvRXhpdFNldHRpbmdcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0U2V0dGluZ0J1dHRvbik7XHJcblxyXG4gICAgICAgIC8vU2lnbiB1cFxyXG4gICAgICAgIGxldCBTaWduVXBCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgU2lnblVwQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi5oYW5kbGVyID0gXCJTaWduVXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnblVwXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU2lnblVwQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy9Mb2dpblxyXG4gICAgICAgIGxldCBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0xvZ2luXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goTG9naW5CdXR0b24pO1xyXG5cclxuICAgICAgICAvL1ZvbHVtbnNsaWRlclxyXG4gICAgICAgIGxldCBWb2x1bW5zbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIFZvbHVtbnNsaWRlci5wcm9ncmVzcyA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XHJcbiAgICAgICAgVm9sdW1uc2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgRXhpdFNldHRpbmcoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nXCIpO1xyXG4gICAgICAgIGlmKHNldHRpbmdOb2RlKSBzZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2lnblVwKCl7XHJcbiAgICAgICAgdGhpcy5pc1NpZ25pbmdVcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcGVuU2lnbnVwTG9naW5QYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIExvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaWduaW5nVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5TaWdudXBMb2dpblBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuU2lnbnVwTG9naW5QYW5lbCgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBhc3NldCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBTaWdudXBMb2dpbiBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2FzdCB0aGUgbG9hZGVkIGFzc2V0IHRvIGNjLlByZWZhYjpcclxuICAgICAgICBjb25zdCBwcmVmYWIgPSBhc3NldCBhcyBjYy5QcmVmYWI7XHJcblxyXG4gICAgICAgIC8vIE5vdyBpbnN0YW50aWF0ZSBhIE5vZGUgZnJvbSB0aGF0IHByZWZhYlxyXG4gICAgICAgIGNvbnN0IHNpZ251cExvZ2luTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5zY2FsZVggPSAwLjU7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNjYWxlWSA9IDAuNTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUuekluZGV4ID0gMTAwMDtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIikuYWRkQ2hpbGQoc2lnbnVwTG9naW5Ob2RlKTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUubmFtZSA9IFwiU2lnbnVwTG9naW5cIjtcclxuXHJcbiAgICAgICAgLy8gZ3JhYiB0aGUgQXV0aE1hbmFnZXIgY29tcG9uZW50IGZyb20gdGhlIG5ld2x54oCQY3JlYXRlZCBOb2RlXHJcbiAgICAgICAgdGhpcy5hdXRoQ29tcCA9IHNpZ251cExvZ2luTm9kZS5nZXRDb21wb25lbnQoQXV0aE1hbmFnZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5hdXRoQ29tcCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIkF1dGhNYW5hZ2VyIGNvbXBvbmVudCBub3QgZm91bmQgb24gU2lnbnVwTG9naW4gcHJlZmFiIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0U2lnbnVwTG9naW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2lnbnVwTG9naW4oKSB7XHJcbiAgICAgICAgLy8g4oCcRXhpdOKAnSBidXR0b24gd2lyaW5nICh1bmNoYW5nZWQp4oCmXHJcbiAgICAgICAgbGV0IEV4aXRTaWdudXBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkV4aXRTaWdudXBMb2dpblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9FeGl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNpZ251cExvZ2luQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8g4oCcU2F2ZeKAnSBidXR0b24gbm93IGNhbGxzIGVpdGhlciBhdXRoQ29tcC5TaWduVXAgb3IgYXV0aENvbXAuTG9naW5cclxuICAgICAgICBsZXQgU2F2ZVNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5hdXRoQ29tcCEubm9kZTtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJBdXRoTWFuYWdlclwiO1xyXG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gdGhpcy5pc1NpZ25pbmdVcCA/IFwiU2lnblVwXCIgOiBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luL1NhdmVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTYXZlU2lnbnVwTG9naW5CdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIEV4aXRTaWdudXBMb2dpbigpIHtcclxuICAgICAgICBsZXQgVF9Ob2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luXCIpO1xyXG4gICAgICAgIGlmKFRfTm9kZSkge1xyXG4gICAgICAgICAgICBUX05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5hYmxlU3RhcnRCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332a6gSxQ5LRb25rr5dLCw6', 'Player');
// scripts/Player.ts

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
var GameManager_1 = require("./GameManager");
var BlueSlimeAI_1 = require("./ai/BlueSlimeAI");
var LavaSlimeAI_1 = require("./ai/LavaSlimeAI");
// ↓ Fix the typo here: it should be "GreenSlimeAI" (two “e”s), not "GreenSlimeAI"
var GreenSlimeAI_1 = require("./ai/GreenSlimeAI");
var GreenBossAI_1 = require("./ai/GreenBossAI");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxHp = 40;
        _this.attackPower = 5;
        _this.hp = 40;
        _this.lifebar = null;
        _this.controller = null;
        _this.attack1sound = null;
        _this.attack2sound = null;
        _this.attack3sound = null;
        _this.hurtsound = null;
        _this.healsound = null;
        _this.gameManager = null;
        _this.holdingKey = false;
        /////////////////////////
        // → NEW PROPERTIES ← //
        /////////////////////////
        // How far the player's attack reaches (in pixels, world-space)
        _this.attackRange = 50;
        // Delay (seconds) into the attack animation when damage is actually applied
        _this.attackHitDelay = 0.2;
        // Total length (seconds) of the attack animation
        _this.attackAnimDuration = 0.5;
        _this.isAttacking = false; // Prevent overlapping swings
        // Tracks which direction the player is facing.
        _this.facing = "down";
        _this.isDead = false; // new
        return _this;
    }
    Player.prototype.onLoad = function () {
        this.gameManager = cc.find("GameManager").getComponent("GameManager");
        // Capture the Animation component once
        this.anim = this.getComponent(cc.Animation);
        // Listen for keyboard input to trigger attack
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    Player.prototype.update = function (dt) {
        cc.find("Canvas/Main Camera/UI/Key").active = this.holdingKey;
    };
    Player.prototype.onDestroy = function () {
        // Clean up listener
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    // Called when any key is pressed
    Player.prototype.onKeyDown = function (event) {
        // Use C, Z, or V as the attack key (you can adjust as needed)
        if (event.keyCode === cc.macro.KEY.c ||
            event.keyCode === cc.macro.KEY.z ||
            event.keyCode === cc.macro.KEY.v) {
            this.tryAttack();
        }
    };
    // Attempt to start an attack (if not already in one)
    Player.prototype.tryAttack = function () {
        var _this = this;
        if (this.isAttacking)
            return;
        this.isAttacking = true;
        // 1) Play attack animation & sound
        if (this.anim) {
            this.anim.play("PlayerAttack"); // ensure you have a clip named “PlayerAttack”
        }
        if (this.attack1sound) {
            cc.audioEngine.playEffect(this.attack1sound, false);
        }
        // 2) Schedule the actual “hit” moment
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
        // 3) Once the full animation is done, allow attacking again
        this.scheduleOnce(function () {
            _this.isAttacking = false;
        }, this.attackAnimDuration);
    };
    // ────────────────────────────────────────────────────────────────────────────
    // This method checks every child under “Canvas/MapManager/MonsterManager” for
    // either a BlueSlimeAI or a GreenSlimeAI, then applies damage if within range.
    // ────────────────────────────────────────────────────────────────────────────
    Player.prototype.applyAttackHit = function () {
        var _this = this;
        // 1) Convert the player's position to world space (Vec3) and then to Vec2
        var playerWorld3 = this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        // 2) Find all slimes under “Canvas/MapManager/MonsterManager”
        var actorsRoot = cc.find("Canvas/MapManager/MonsterManager");
        if (!actorsRoot)
            return;
        actorsRoot.children.forEach(function (childNode) {
            // 3a) Try to grab a BlueSlimeAI component
            var slimeComp = childNode.getComponent(BlueSlimeAI_1.default) || null;
            // 3b) If there was no BlueSlimeAI, try to grab a GreenSlimeAI instead
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenSlimeAI_1.default);
            }
            if (!slimeComp) {
                slimeComp = childNode.getComponent(LavaSlimeAI_1.default);
            }
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenBossAI_1.default);
            }
            // 4) If this node has neither component, skip it
            if (!slimeComp) {
                return;
            }
            // 5) Convert that slime’s position (node’s anchor point) to world-space Vec3 → Vec2
            var slimeWorld3 = childNode.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
            // 6) Check distance from player
            var dist = playerWorld2.sub(slimeWorld2).mag();
            if (dist <= _this.attackRange) {
                // 7) We’re in range → deal damage
                slimeComp.takeDamage(_this.attackPower);
                // (Optional) If you want to hit only one slime per swing, uncomment:
                // return;
            }
        });
    };
    Object.defineProperty(Player.prototype, "worldPosition", {
        /////////////////////////
        // ← EXISTING METHODS →//
        /////////////////////////
        get: function () {
            return this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "localPosition", {
        get: function () {
            return this.node.position;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.takeDamage = function (amount) {
        var _this = this;
        this.hp -= amount;
        if (this.hp < 0)
            this.hp = 0;
        // 1) If still alive → play “hurt” animation in the correct direction
        if (this.hp > 0) {
            switch (this.facing) {
                case "up":
                    this.anim.play("hurt_up");
                    break;
                case "down":
                    this.anim.play("hurt_down");
                    break;
                case "left":
                    this.anim.play("hurt_left");
                    break;
                case "right":
                    this.anim.play("hurt_right");
                    break;
                default:
                    // fallback, just in case
                    this.anim.play("hurt_" + this.facing);
                    break;
            }
            this.updatelife(-amount, this.hp);
            if (this.hurtsound) {
                cc.audioEngine.playEffect(this.hurtsound, false);
            }
            return; // exit early, no death logic yet
        }
        // 2) HP has dropped to zero → play “death” animation in the correct direction
        switch (this.facing) {
            case "up":
                this.anim.play("death_up");
                break;
            case "down":
                this.anim.play("death_down");
                break;
            case "left":
                this.anim.play("death_left");
                break;
            case "right":
                this.anim.play("death_right");
                break;
            default:
                // fallback, just in case
                this.anim.play("death_" + this.facing);
                break;
        }
        this.updatelife(-amount, this.hp);
        this.isDead = true;
        // 3) Delay the actual “freeze/game-over” until after the death animation finishes.
        this.scheduleOnce(function () {
            _this.die();
        }, 1.0 // adjust this delay to match your death‐animation length
        );
    };
    Player.prototype.heal = function (amount) {
        this.hp += amount;
        if (this.hp > this.maxHp)
            this.hp = this.maxHp;
        this.updatelife(amount, this.hp);
        this.playhealsound();
    };
    Player.prototype.attack = function (target) {
        target.takeDamage(this.attackPower);
    };
    Player.prototype.die = function () {
        // Hand over to your game‐over/freeze logic
        this.controller.getComponent("ActorController").godie();
        this.unscheduleAllCallbacks();
    };
    Player.prototype.updatelife = function (num, hp) {
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    Player.prototype.playattack1sound = function () {
        if (this.attack1sound)
            cc.audioEngine.playEffect(this.attack1sound, false);
        else
            console.log("No attack1 sound");
    };
    Player.prototype.playattack2sound = function () {
        if (this.attack2sound)
            cc.audioEngine.playEffect(this.attack2sound, false);
        else
            console.log("No attack2 sound");
    };
    Player.prototype.playattack3sound = function () {
        if (this.attack3sound)
            cc.audioEngine.playEffect(this.attack3sound, false);
        else
            console.log("No attack3 sound");
    };
    Player.prototype.playhurtsound = function () {
        if (this.hurtsound)
            cc.audioEngine.playEffect(this.hurtsound, false);
        else
            console.log("No hurtsound");
    };
    Player.prototype.playhealsound = function () {
        if (this.healsound)
            cc.audioEngine.playEffect(this.healsound, false);
        else
            console.log("No healsound");
    };
    Player.prototype.SetPlayer = function (level) {
        // reset player position & HP
        this.hp = this.maxHp;
        this.updatelife(0, this.hp);
        this.holdingKey = false;
    };
    Player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        if (otherCollider.node.name == "key") {
            this.holdingKey = true;
            otherCollider.node.active = false;
        }
        if (otherCollider.node.name == "lock" && this.holdingKey) {
            var temp = otherCollider.getComponent("Lock");
            if (temp) {
                temp.playAnim();
            }
            this.scheduleOnce(function () {
                if (otherCollider.node) {
                    otherCollider.node.destroy();
                }
                else {
                    cc.log("can't deal with otherCollider.node.destroy(); properly");
                }
                _this.gameManager = cc.find("GameManager").getComponent("GameManager");
                _this.gameManager.GoNextLevel();
            }, 1.2);
        }
    };
    Player.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ type: cc.Integer, tooltip: "最大血量" })
    ], Player.prototype, "maxHp", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "攻擊力" })
    ], Player.prototype, "attackPower", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "初始血量" })
    ], Player.prototype, "hp", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "lifebar", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "controller", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack1sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack2sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack3sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "hurtsound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "healsound", void 0);
    __decorate([
        property(GameManager_1.default)
    ], Player.prototype, "gameManager", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "Player attack range in pixels" })
    ], Player.prototype, "attackRange", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "When (sec) to check hit in attack anim" })
    ], Player.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Length of PlayerAttack animation" })
    ], Player.prototype, "attackAnimDuration", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUczQyxrRkFBa0Y7QUFDbEYsa0RBQTZDO0FBQzdDLGdEQUEyQztBQUszQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZVQztRQTNVRyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLFFBQUUsR0FBVyxFQUFFLENBQUM7UUFHUixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUV6QiwrREFBK0Q7UUFFL0QsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsNEVBQTRFO1FBRTVFLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCLGlEQUFpRDtRQUVqRCx3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFRbkUsK0NBQStDO1FBQ3ZDLFlBQU0sR0FBb0IsTUFBTSxDQUFDO1FBQ2pDLFlBQU0sR0FBWSxLQUFLLENBQUMsQ0FBQyxNQUFNOztJQStRM0Ms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QTdVRCxBQTZVQyxDQTdVbUMsRUFBRSxDQUFDLFNBQVMsR0E2VS9DO2tCQTdVb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBCbHVlU2xpbWVBSSBmcm9tIFwiLi9haS9CbHVlU2xpbWVBSVwiO1xuaW1wb3J0IExhdmFTbGltZUFJIGZyb20gXCIuL2FpL0xhdmFTbGltZUFJXCI7XG5cblxuLy8g4oaTIEZpeCB0aGUgdHlwbyBoZXJlOiBpdCBzaG91bGQgYmUgXCJHcmVlblNsaW1lQUlcIiAodHdvIOKAnGXigJ1zKSwgbm90IFwiR3JlZW5TbGltZUFJXCJcbmltcG9ydCBHcmVlblNsaW1lQUkgZnJvbSBcIi4vYWkvR3JlZW5TbGltZUFJXCI7XG5pbXBvcnQgR3JlZW5Cb3NzQUkgZnJvbSBcIi4vYWkvR3JlZW5Cb3NzQUlcIjtcblxudHlwZSBGYWNpbmdEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuacgOWkp+ihgOmHj1wiIH0pXG4gICAgbWF4SHA6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmlLvmk4rliptcIiB9KVxuICAgIGF0dGFja1Bvd2VyOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJ3lp4vooYDph49cIiB9KVxuICAgIGhwOiBudW1iZXIgPSA0MDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250cm9sbGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXR0YWNrMXNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBhdHRhY2syc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF0dGFjazNzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgaHVydHNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBoZWFsc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXG4gICAgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIHB1YmxpYyBob2xkaW5nS2V5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaSIE5FVyBQUk9QRVJUSUVTIOKGkCAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEhvdyBmYXIgdGhlIHBsYXllcidzIGF0dGFjayByZWFjaGVzIChpbiBwaXhlbHMsIHdvcmxkLXNwYWNlKVxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwiUGxheWVyIGF0dGFjayByYW5nZSBpbiBwaXhlbHNcIiB9KVxuICAgIGF0dGFja1JhbmdlOiBudW1iZXIgPSA1MDtcblxuICAgIC8vIERlbGF5IChzZWNvbmRzKSBpbnRvIHRoZSBhdHRhY2sgYW5pbWF0aW9uIHdoZW4gZGFtYWdlIGlzIGFjdHVhbGx5IGFwcGxpZWRcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJXaGVuIChzZWMpIHRvIGNoZWNrIGhpdCBpbiBhdHRhY2sgYW5pbVwiIH0pXG4gICAgYXR0YWNrSGl0RGVsYXk6IG51bWJlciA9IDAuMjtcblxuICAgIC8vIFRvdGFsIGxlbmd0aCAoc2Vjb25kcykgb2YgdGhlIGF0dGFjayBhbmltYXRpb25cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJMZW5ndGggb2YgUGxheWVyQXR0YWNrIGFuaW1hdGlvblwiIH0pXG4gICAgYXR0YWNrQW5pbUR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG5cbiAgICBwcml2YXRlIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgc3dpbmdzXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaQIEVORCBORVcgUFJPUFMg4oaSIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xuXG4gICAgLy8gVHJhY2tzIHdoaWNoIGRpcmVjdGlvbiB0aGUgcGxheWVyIGlzIGZhY2luZy5cbiAgICBwcml2YXRlIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gbmV3XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgIC8vIENhcHR1cmUgdGhlIEFuaW1hdGlvbiBjb21wb25lbnQgb25jZVxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGtleWJvYXJkIGlucHV0IHRvIHRyaWdnZXIgYXR0YWNrXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9LZXlcIikuYWN0aXZlID0gdGhpcy5ob2xkaW5nS2V5O1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8gQ2xlYW4gdXAgbGlzdGVuZXJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKFxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIHdoZW4gYW55IGtleSBpcyBwcmVzc2VkXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgLy8gVXNlIEMsIFosIG9yIFYgYXMgdGhlIGF0dGFjayBrZXkgKHlvdSBjYW4gYWRqdXN0IGFzIG5lZWRlZClcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmMgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS56IHx8XG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMudHJ5QXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHRvIHN0YXJ0IGFuIGF0dGFjayAoaWYgbm90IGFscmVhZHkgaW4gb25lKVxuICAgIHByaXZhdGUgdHJ5QXR0YWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc0F0dGFja2luZykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyAxKSBQbGF5IGF0dGFjayBhbmltYXRpb24gJiBzb3VuZFxuICAgICAgICBpZiAodGhpcy5hbmltKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlBsYXllckF0dGFja1wiKTsgLy8gZW5zdXJlIHlvdSBoYXZlIGEgY2xpcCBuYW1lZCDigJxQbGF5ZXJBdHRhY2vigJ1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdHRhY2sxc291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIpIFNjaGVkdWxlIHRoZSBhY3R1YWwg4oCcaGl04oCdIG1vbWVudFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcblxuICAgICAgICAvLyAzKSBPbmNlIHRoZSBmdWxsIGFuaW1hdGlvbiBpcyBkb25lLCBhbGxvdyBhdHRhY2tpbmcgYWdhaW5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gICAgLy8gVGhpcyBtZXRob2QgY2hlY2tzIGV2ZXJ5IGNoaWxkIHVuZGVyIOKAnENhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2Vy4oCdIGZvclxuICAgIC8vIGVpdGhlciBhIEJsdWVTbGltZUFJIG9yIGEgR3JlZW5TbGltZUFJLCB0aGVuIGFwcGxpZXMgZGFtYWdlIGlmIHdpdGhpbiByYW5nZS5cbiAgICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xuICAgICAgICAvLyAxKSBDb252ZXJ0IHRoZSBwbGF5ZXIncyBwb3NpdGlvbiB0byB3b3JsZCBzcGFjZSAoVmVjMykgYW5kIHRoZW4gdG8gVmVjMlxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQyID0gY2MudjIocGxheWVyV29ybGQzLngsIHBsYXllcldvcmxkMy55KTtcblxuICAgICAgICAvLyAyKSBGaW5kIGFsbCBzbGltZXMgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ1cbiAgICAgICAgY29uc3QgYWN0b3JzUm9vdCA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKTtcbiAgICAgICAgaWYgKCFhY3RvcnNSb290KSByZXR1cm47XG5cbiAgICAgICAgYWN0b3JzUm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIC8vIDNhKSBUcnkgdG8gZ3JhYiBhIEJsdWVTbGltZUFJIGNvbXBvbmVudFxuICAgICAgICAgICAgbGV0IHNsaW1lQ29tcDogQmx1ZVNsaW1lQUkgfCBHcmVlblNsaW1lQUkgfCBMYXZhU2xpbWVBSSB8IEdyZWVuQm9zc0FJIHwgbnVsbCA9XG4gICAgICAgICAgICAgICAgKGNoaWxkTm9kZS5nZXRDb21wb25lbnQoQmx1ZVNsaW1lQUkpIGFzIEJsdWVTbGltZUFJKSB8fCBudWxsO1xuXG4gICAgICAgICAgICAvLyAzYikgSWYgdGhlcmUgd2FzIG5vIEJsdWVTbGltZUFJLCB0cnkgdG8gZ3JhYiBhIEdyZWVuU2xpbWVBSSBpbnN0ZWFkXG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHNsaW1lQ29tcCA9IGNoaWxkTm9kZS5nZXRDb21wb25lbnQoR3JlZW5TbGltZUFJKSBhcyBHcmVlblNsaW1lQUk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHNsaW1lQ29tcCA9IGNoaWxkTm9kZS5nZXRDb21wb25lbnQoTGF2YVNsaW1lQUkpIGFzIExhdmFTbGltZUFJO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEdyZWVuQm9zc0FJKSBhcyBHcmVlbkJvc3NBSTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNCkgSWYgdGhpcyBub2RlIGhhcyBuZWl0aGVyIGNvbXBvbmVudCwgc2tpcCBpdFxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDUpIENvbnZlcnQgdGhhdCBzbGltZeKAmXMgcG9zaXRpb24gKG5vZGXigJlzIGFuY2hvciBwb2ludCkgdG8gd29ybGQtc3BhY2UgVmVjMyDihpIgVmVjMlxuICAgICAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDMgPSBjaGlsZE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XG5cbiAgICAgICAgICAgIC8vIDYpIENoZWNrIGRpc3RhbmNlIGZyb20gcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gcGxheWVyV29ybGQyLnN1YihzbGltZVdvcmxkMikubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gNykgV2XigJlyZSBpbiByYW5nZSDihpIgZGVhbCBkYW1hZ2VcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja1Bvd2VyKTtcblxuICAgICAgICAgICAgICAgIC8vIChPcHRpb25hbCkgSWYgeW91IHdhbnQgdG8gaGl0IG9ubHkgb25lIHNsaW1lIHBlciBzd2luZywgdW5jb21tZW50OlxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIOKGkCBFWElTVElORyBNRVRIT0RTIOKGki8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHVibGljIGdldCB3b3JsZFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsb2NhbFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5ocCA8IDApIHRoaXMuaHAgPSAwO1xuXG4gICAgICAgIC8vIDEpIElmIHN0aWxsIGFsaXZlIOKGkiBwbGF5IOKAnGh1cnTigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxuICAgICAgICBpZiAodGhpcy5ocCA+IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5mYWNpbmcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X3VwXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJodXJ0X2xlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoYGh1cnRfJHt0aGlzLmZhY2luZ31gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCBlYXJseSwgbm8gZGVhdGggbG9naWMgeWV0XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyKSBIUCBoYXMgZHJvcHBlZCB0byB6ZXJvIOKGkiBwbGF5IOKAnGRlYXRo4oCdIGFuaW1hdGlvbiBpbiB0aGUgY29ycmVjdCBkaXJlY3Rpb25cbiAgICAgICAgc3dpdGNoICh0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkZWF0aF91cFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkZWF0aF9kb3duXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2xlZnRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3JpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBmYWxsYmFjaywganVzdCBpbiBjYXNlXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoYGRlYXRoXyR7dGhpcy5mYWNpbmd9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKC1hbW91bnQsIHRoaXMuaHApO1xuXG4gICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcbiAgICAgICAgLy8gMykgRGVsYXkgdGhlIGFjdHVhbCDigJxmcmVlemUvZ2FtZS1vdmVy4oCdIHVudGlsIGFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMS4wIC8vIGFkanVzdCB0aGlzIGRlbGF5IHRvIG1hdGNoIHlvdXIgZGVhdGjigJBhbmltYXRpb24gbGVuZ3RoXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ocCArPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhwID4gdGhpcy5tYXhIcCkgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIHRoaXMudXBkYXRlbGlmZShhbW91bnQsIHRoaXMuaHApO1xuICAgICAgICB0aGlzLnBsYXloZWFsc291bmQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXR0YWNrKHRhcmdldDogUGxheWVyKSB7XG4gICAgICAgIHRhcmdldC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrUG93ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaWUoKSB7XG4gICAgICAgIC8vIEhhbmQgb3ZlciB0byB5b3VyIGdhbWXigJBvdmVyL2ZyZWV6ZSBsb2dpY1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiQWN0b3JDb250cm9sbGVyXCIpLmdvZGllKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIHVwZGF0ZWxpZmUobnVtOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gaHA7XG4gICAgICAgIGlmIChocCA8PSAxMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICBlbHNlIGlmIChocCA8PSAyMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgICAgICBlbHNlIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5YXR0YWNrMXNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2sxc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazEgc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlhdHRhY2syc291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazJzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazJzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMiBzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWF0dGFjazNzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrM3NvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrM3NvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2szIHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5aHVydHNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5odXJ0c291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGh1cnRzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWhlYWxzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaGVhbHNvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBoZWFsc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFBsYXllcihsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHJlc2V0IHBsYXllciBwb3NpdGlvbiAmIEhQXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoMCwgdGhpcy5ocCk7XG4gICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJrZXlcIikge1xuICAgICAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb2NrXCIgJiYgdGhpcy5ob2xkaW5nS2V5KSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoXCJMb2NrXCIpO1xuICAgICAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGRlYWwgd2l0aCBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpOyBwcm9wZXJseVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLkdvTmV4dExldmVsKCk7XG4gICAgICAgICAgICB9LDEuMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/BlueSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93c17LsWWNNMIhlPghgF2vo', 'BlueSlimeAI');
// scripts/ai/BlueSlimeAI.ts

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
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var BlueSlimeAI = /** @class */ (function (_super) {
    __extends(BlueSlimeAI, _super);
    function BlueSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 180;
        _this.attackRadius = 80;
        _this.attackDamage = 10;
        _this.attackHitDelay = 0.3;
        _this.attackAnimDuration = 1.0;
        _this.maxHealth = 40;
        _this.health = 40;
        _this.lifebar = null;
        _this.barOffsetY = 10;
        _this.isDead = false;
        _this.isDeathAnimPlaying = false; // NEW: Tracks death animation
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        return _this;
    }
    BlueSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    BlueSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        var patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        if (this.lifebar) {
            this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    BlueSlimeAI.prototype.update = function (dt) {
        if (this.isDead)
            return; // Actually dead, nothing happens
        if (this.isDeathAnimPlaying) {
            // Let the death animation play, but skip AI
            return;
        }
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= this.attackAnimDuration) {
                this.setToIdle();
            }
            return;
        }
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var moveDelta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var nextPos = pos.add(moveDelta);
            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);
            if (this.timer >= this.walkTime)
                this.setToIdle();
        }
    };
    BlueSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    BlueSlimeAI.prototype.takeDamage = function (amount) {
        if (this.isDead || this.isDeathAnimPlaying)
            return; // Already dead or anim playing
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var direction = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeHurtRight" : "BlueSlimeHurtLeft")
            : (direction.y > 0 ? "BlueSlimeHurtUp" : "BlueSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            if (!this.isDeathAnimPlaying) {
                this.isDeathAnimPlaying = true;
                this.playDeathAnimation(direction);
            }
        }
        this.updateLife(-amount, this.health);
    };
    BlueSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    BlueSlimeAI.prototype.die = function () {
        this.unscheduleAllCallbacks();
    };
    BlueSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("BlueSlimeIdle");
    };
    BlueSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "BlueSlimeWalkRight" : "BlueSlimeWalkLeft")
            : (this.direction.y > 0 ? "BlueSlimeWalkUp" : "BlueSlimeWalkDown");
        this.anim.play(clip);
    };
    BlueSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    BlueSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeAttackRight" : "BlueSlimeAttackLeft")
            : (dir.y > 0 ? "BlueSlimeAttackUp" : "BlueSlimeAttackDown");
        this.anim.play(clip);
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    };
    BlueSlimeAI.prototype.applyAttackHit = function () {
        if (this.slimeState !== SlimeState.Attack)
            return;
        var slimeWorld3 = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
        var playerWorld3 = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        var dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            var playerComp = this.player.getComponent(Player_1.default);
            if (playerComp) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
    };
    BlueSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeRunRight" : "BlueSlimeRunLeft")
            : (dir.y > 0 ? "BlueSlimeRunUp" : "BlueSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var moveDelta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var nextPos = this.node.getPosition().add(moveDelta);
        if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(nextPos);
    };
    BlueSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    BlueSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    BlueSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeDeathRight" : "BlueSlimeDeathLeft")
            : (direction.y > 0 ? "BlueSlimeDeathUp" : "BlueSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        this.slimeState = SlimeState.Idle;
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
        }, 1.0); // match to your animation's duration
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], BlueSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], BlueSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], BlueSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], BlueSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], BlueSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], BlueSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], BlueSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "How much damage the slime does per attack" })
    ], BlueSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    ], BlueSlimeAI.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    ], BlueSlimeAI.prototype, "attackAnimDuration", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], BlueSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], BlueSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], BlueSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], BlueSlimeAI.prototype, "barOffsetY", void 0);
    BlueSlimeAI = __decorate([
        ccclass
    ], BlueSlimeAI);
    return BlueSlimeAI;
}(cc.Component));
exports.default = BlueSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEJsdWVTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUMvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTJVQztRQXpVRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRzdCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUdqQyxlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDLENBQUMsOEJBQThCO1FBRXBFLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBZSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIs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QUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBekNmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyVS9CO0lBQUQsa0JBQUM7Q0EzVUQsQUEyVUMsQ0EzVXdDLEVBQUUsQ0FBQyxTQUFTLEdBMlVwRDtrQkEzVW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuZW51bSBTbGltZVN0YXRlIHtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgUnVuLFxyXG4gICAgQXR0YWNrXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsdWVTbGltZUFJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcclxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcclxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcclxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxODA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXHJcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IG11Y2ggZGFtYWdlIHRoZSBzbGltZSBkb2VzIHBlciBhdHRhY2tcIiB9KVxyXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJTZWNvbmRzIGludG8gYXR0YWNrIGFuaW0gdG8gYXBwbHkgZGFtYWdlXCIgfSlcclxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiVG90YWwgbGVuZ3RoIG9mIGF0dGFjayBhbmltIChzZWNvbmRzKVwiIH0pXHJcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIGhlYWx0aDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxyXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXHJcblxyXG4gICAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcclxuXHJcbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUuc2V0UG9zaXRpb24odGhpcy5wYXRyb2xDZW50ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBhdHJvbEdmeCA9IHRoaXMuYm91bmRhcnlOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgcGF0cm9sR2Z4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgcGF0cm9sR2Z4LnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcclxuICAgICAgICBwYXRyb2xHZnguY2lyY2xlKDAsIDAsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICBwYXRyb2xHZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0aW9uQXJlYVwiKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeCA9IHRoaXMuZGV0ZWN0aW9uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjsgLy8gQWN0dWFsbHkgZGVhZCwgbm90aGluZyBoYXBwZW5zXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGRlYXRoIGFuaW1hdGlvbiBwbGF5LCBidXQgc2tpcCBBSVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxyXG4gICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQ2VudGVyID0gbG9jYWxQbGF5ZXJQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xyXG5cclxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgY29uc3QgZHJhd0F0dGFja1IgPSBNYXRoLm1pbih0aGlzLmF0dGFja1JhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG5cclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXNcclxuICAgICAgICAgICAgPyBjYy5jb2xvcigyNTUsIDE2NSwgMClcclxuICAgICAgICAgICAgOiBjYy5jb2xvcigyNTUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1c1xyXG4gICAgICAgICAgICA/IGNjLmNvbG9yKDEyOCwgMCwgMTI4KVxyXG4gICAgICAgICAgICA6IGNjLmNvbG9yKDAsIDAsIDI1NSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2lyY2xlKDAsIDAsIGRyYXdBdHRhY2tSKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5EZXRlY3QgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXMgJiYgcGxheWVySW5QYXRyb2w7XHJcbiAgICAgICAgY29uc3QgaW5BdHRhY2sgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXMgJiYgcGxheWVySW5QYXRyb2w7XHJcblxyXG4gICAgICAgIGlmIChpbkF0dGFjayAmJiB0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5hdHRhY2tBbmltRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluRGV0ZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuUnVuKSB0aGlzLnN0YXJ0UnVubmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuUnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGtpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlRGVsdGEgPSBjYy52MihcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnggKiB0aGlzLndhbGtTcGVlZCAqIGR0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFBvcyA9IHBvcy5hZGQobW92ZURlbHRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0UG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dFBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5saWZlYmFyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gaHA7XHJcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLk9SQU5HRTtcclxuICAgICAgICBlbHNlIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47IC8vIEFscmVhZHkgZGVhZCBvciBhbmltIHBsYXlpbmdcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBzbGltZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBodXJ0QW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxyXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkJsdWVTbGltZUh1cnRSaWdodFwiIDogXCJCbHVlU2xpbWVIdXJ0TGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkJsdWVTbGltZUh1cnRVcFwiIDogXCJCbHVlU2xpbWVIdXJ0RG93blwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoaHVydEFuaW0pO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IHRoaXMubWF4SGVhbHRoKSB0aGlzLmhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJCbHVlU2xpbWVJZGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRXYWxraW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcclxuICAgICAgICApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJCbHVlU2xpbWVXYWxrUmlnaHRcIiA6IFwiQmx1ZVNsaW1lV2Fsa0xlZnRcIilcclxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkJsdWVTbGltZVdhbGtVcFwiIDogXCJCbHVlU2xpbWVXYWxrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcclxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJCbHVlU2xpbWVBdHRhY2tSaWdodFwiIDogXCJCbHVlU2xpbWVBdHRhY2tMZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiQmx1ZVNsaW1lQXR0YWNrVXBcIiA6IFwiQmx1ZVNsaW1lQXR0YWNrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hcHBseUF0dGFja0hpdCwgdGhpcy5hdHRhY2tIaXREZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDIgPSBjYy52MihzbGltZVdvcmxkMy54LCBzbGltZVdvcmxkMy55KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQzID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQyID0gY2MudjIocGxheWVyV29ybGQzLngsIHBsYXllcldvcmxkMy55KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IHNsaW1lV29ybGQyLnN1YihwbGF5ZXJXb3JsZDIpLm1hZygpO1xyXG4gICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW5Ub3dhcmRzUGxheWVyKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcclxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJCbHVlU2xpbWVSdW5SaWdodFwiIDogXCJCbHVlU2xpbWVSdW5MZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiQmx1ZVNsaW1lUnVuVXBcIiA6IFwiQmx1ZVNsaW1lUnVuRG93blwiKTtcclxuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IGNsaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1vdmVEZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XHJcbiAgICAgICAgY29uc3QgbmV4dFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChtb3ZlRGVsdGEpO1xyXG4gICAgICAgIGlmIChuZXh0UG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0UG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB3b3JsZFAgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihsb2NhbFAueCAtIHRoaXMubm9kZS54LCBsb2NhbFAueSAtIHRoaXMubm9kZS55KS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiQmx1ZVNsaW1lRGVhdGhSaWdodFwiIDogXCJCbHVlU2xpbWVEZWF0aExlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJCbHVlU2xpbWVEZWF0aFVwXCIgOiBcIkJsdWVTbGltZURlYXRoRG93blwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoZGVhdGhBbmltKTtcclxuXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAxLjApOyAvLyBtYXRjaCB0byB5b3VyIGFuaW1hdGlvbidzIGR1cmF0aW9uXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/GreenSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83760YFIXRPyL+YhejhNquq', 'GreenSlimeAI');
// scripts/ai/GreenSlimeAI.ts

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
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var GreenSlimeAI = /** @class */ (function (_super) {
    __extends(GreenSlimeAI, _super);
    function GreenSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 80;
        _this.attackDamage = 12;
        _this.attackHitDelay = 0.3;
        _this.attackAnimDuration = 1.0;
        _this.maxHealth = 40;
        _this.health = 40;
        _this.lifebar = null;
        _this.barOffsetY = 10;
        _this.isDead = false;
        _this.isDeathAnimPlaying = false; // NEW: Tracks death animation
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        return _this;
    }
    GreenSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    GreenSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        var patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        if (this.lifebar) {
            this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    GreenSlimeAI.prototype.update = function (dt) {
        if (this.isDead)
            return; // Actually dead, nothing happens
        if (this.isDeathAnimPlaying) {
            // Let the death animation play, but skip AI
            return;
        }
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= this.attackAnimDuration) {
                this.setToIdle();
            }
            return;
        }
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var moveDelta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var nextPos = pos.add(moveDelta);
            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);
            if (this.timer >= this.walkTime)
                this.setToIdle();
        }
    };
    GreenSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    GreenSlimeAI.prototype.takeDamage = function (amount) {
        if (this.isDead || this.isDeathAnimPlaying)
            return; // Already dead or anim playing
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var direction = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreeenSlimeHurtRight" : "GreeenSlimeHurtLeft")
            : (direction.y > 0 ? "GreeenSlimeHurtUp" : "GreeenSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            if (!this.isDeathAnimPlaying) {
                this.isDeathAnimPlaying = true;
                this.playDeathAnimation(direction);
            }
        }
        this.updateLife(-amount, this.health);
    };
    GreenSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreenSlimeAI.prototype.die = function () {
        this.unscheduleAllCallbacks();
    };
    GreenSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreeenSlimeIdle");
    };
    GreenSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreeenSlimeWalkRight" : "GreeenSlimeWalkLeft")
            : (this.direction.y > 0 ? "GreeenSlimeWalkUp" : "GreeenSlimeWalkDown");
        this.anim.play(clip);
    };
    GreenSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeAttackRight" : "GreeenSlimeAttackLeft")
            : (dir.y > 0 ? "GreeenSlimeAttackUp" : "GreeenSlimeAttackDown");
        this.anim.play(clip);
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    };
    GreenSlimeAI.prototype.applyAttackHit = function () {
        if (this.slimeState !== SlimeState.Attack)
            return;
        var slimeWorld3 = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
        var playerWorld3 = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        var dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            var playerComp = this.player.getComponent(Player_1.default);
            if (playerComp) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
    };
    GreenSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeRunRight" : "GreeenSlimeRunLeft")
            : (dir.y > 0 ? "GreeenSlimeRunUp" : "GreeenSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var moveDelta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var nextPos = this.node.getPosition().add(moveDelta);
        if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(nextPos);
    };
    GreenSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    GreenSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    GreenSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreeenSlimeDeathRight" : "GreeenSlimeDeathLeft")
            : (direction.y > 0 ? "GreeenSlimeDeathUp" : "GreeenSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        this.slimeState = SlimeState.Idle;
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
        }, 1.0); // match to your animation's duration
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], GreenSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreenSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreenSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreenSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreenSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreenSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreenSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "How much damage the slime does per attack" })
    ], GreenSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    ], GreenSlimeAI.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    ], GreenSlimeAI.prototype, "attackAnimDuration", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreenSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreenSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreenSlimeAI.prototype, "barOffsetY", void 0);
    GreenSlimeAI = __decorate([
        ccclass
    ], GreenSlimeAI);
    return GreenSlimeAI;
}(cc.Component));
exports.default = GreenSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEdyZWVuU2xpbWVBSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxvQ0FBK0I7QUFDL0IsSUFBSyxVQUtKO0FBTEQsV0FBSyxVQUFVO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLDJDQUFJLENBQUE7SUFDSix5Q0FBRyxDQUFBO0lBQ0gsK0NBQU0sQ0FBQTtBQUNWLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyVUM7UUF6VUcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUczQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUc5QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUc3Qix3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLHdCQUFrQixHQUFZLEtBQUssQ0FBQyxDQUFDLDhCQUE4QjtRQUVwRSxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQWUsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN6QyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xC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O2lEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7b0RBQzVDO0lBekNmLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyVWhDO0lBQUQsbUJBQUM7Q0EzVUQsQUEyVUMsQ0EzVXlDLEVBQUUsQ0FBQyxTQUFTLEdBMlVyRDtrQkEzVW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuZW51bSBTbGltZVN0YXRlIHtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgUnVuLFxyXG4gICAgQXR0YWNrXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWVuU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHdhbGsgc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMjA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSBydW4gc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDI0MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSBzdGF5cyBpZGxlIGJlZm9yZSB3YWxraW5nIChzZWNvbmRzKVwiIH0pXHJcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSB3YWxrcyBpbiBvbmUgZGlyZWN0aW9uIChzZWNvbmRzKVwiIH0pXHJcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhdHJvbCByYWRpdXMgZnJvbSBzdGFydCBwb2ludCAocGl4ZWxzKVwiIH0pXHJcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRldGVjdGlvbiBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcclxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQXR0YWNrIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA4MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBtdWNoIGRhbWFnZSB0aGUgc2xpbWUgZG9lcyBwZXIgYXR0YWNrXCIgfSlcclxuICAgIGF0dGFja0RhbWFnZTogbnVtYmVyID0gMTI7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiU2Vjb25kcyBpbnRvIGF0dGFjayBhbmltIHRvIGFwcGx5IGRhbWFnZVwiIH0pXHJcbiAgICBhdHRhY2tIaXREZWxheTogbnVtYmVyID0gMC4zO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIlRvdGFsIGxlbmd0aCBvZiBhdHRhY2sgYW5pbSAoc2Vjb25kcylcIiB9KVxyXG4gICAgYXR0YWNrQW5pbUR1cmF0aW9uOiBudW1iZXIgPSAxLjA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJNYXhpbXVtIGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxyXG4gICAgbWF4SGVhbHRoOiBudW1iZXIgPSA0MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkN1cnJlbnQgaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBoZWFsdGg6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlZlcnRpY2FsIG9mZnNldCBvZiBoZWFsdGggYmFyIGFib3ZlIHNsaW1lIChwaXhlbHMpXCIgfSlcclxuICAgIHByaXZhdGUgYmFyT2Zmc2V0WTogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNEZWF0aEFuaW1QbGF5aW5nOiBib29sZWFuID0gZmFsc2U7IC8vIE5FVzogVHJhY2tzIGRlYXRoIGFuaW1hdGlvblxyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzbGltZVN0YXRlOiBTbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcbiAgICBwcml2YXRlIHBhdHJvbENlbnRlcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xyXG5cclxuICAgIHByaXZhdGUgYm91bmRhcnlOb2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uTm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tOb2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgYXR0YWNrR2Z4ITogY2MuR3JhcGhpY3M7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UnVuQ2xpcDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXA6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpIGFzIGNjLk5vZGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgY2MuZXJyb3IoXCJQbGF5ZXIgbm9kZSBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xyXG4gICAgICAgIHRoaXMucGF0cm9sQ2VudGVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUgPSBuZXcgY2MuTm9kZShcIlBhdHJvbEJvdW5kYXJ5XCIpO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcclxuICAgICAgICBjb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHBhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIHBhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICAgICAgcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgcGF0cm9sR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlmZSgwLCA0MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47IC8vIEFjdHVhbGx5IGRlYWQsIG5vdGhpbmcgaGFwcGVuc1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gTGV0IHRoZSBkZWF0aCBhbmltYXRpb24gcGxheSwgYnV0IHNraXAgQUlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpc3RUb1BsYXllciA9IEluZmluaXR5O1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZVcgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyVyA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZGlzdFRvUGxheWVyID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcclxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySW5QYXRyb2wgPSBkaXN0RnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcclxuXHJcbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIGNvbnN0IGRyYXdBdHRhY2tSID0gTWF0aC5taW4odGhpcy5hdHRhY2tSYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXHJcbiAgICAgICAgICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXHJcbiAgICAgICAgICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXNcclxuICAgICAgICAgICAgPyBjYy5jb2xvcigxMjgsIDAsIDEyOClcclxuICAgICAgICAgICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNpcmNsZSgwLCAwLCBkcmF3QXR0YWNrUik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuQXR0YWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLklkbGUgJiYgdGhpcy50aW1lciA+PSB0aGlzLmlkbGVUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuV2Fsaykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3MgPSBwb3MuYWRkKG1vdmVEZWx0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy53YWxrVGltZSkgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwO1xyXG4gICAgICAgIGlmIChocCA8PSAxMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XHJcbiAgICAgICAgZWxzZSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGFrZURhbWFnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCB8fCB0aGlzLmlzRGVhdGhBbmltUGxheWluZykgcmV0dXJuOyAvLyBBbHJlYWR5IGRlYWQgb3IgYW5pbSBwbGF5aW5nXHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgc2xpbWVQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaHVydEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlZW5TbGltZUh1cnRSaWdodFwiIDogXCJHcmVlZW5TbGltZUh1cnRMZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiR3JlZWVuU2xpbWVIdXJ0VXBcIiA6IFwiR3JlZWVuU2xpbWVIdXJ0RG93blwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoaHVydEFuaW0pO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IHRoaXMubWF4SGVhbHRoKSB0aGlzLmhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlZW5TbGltZUlkbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMVxyXG4gICAgICAgICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAodGhpcy5kaXJlY3Rpb24ueCA+IDAgPyBcIkdyZWVlblNsaW1lV2Fsa1JpZ2h0XCIgOiBcIkdyZWVlblNsaW1lV2Fsa0xlZnRcIilcclxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVlblNsaW1lV2Fsa1VwXCIgOiBcIkdyZWVlblNsaW1lV2Fsa0Rvd25cIik7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFJ1bm5pbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5SdW47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLkF0dGFjaztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiR3JlZWVuU2xpbWVBdHRhY2tSaWdodFwiIDogXCJHcmVlZW5TbGltZUF0dGFja0xlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlZW5TbGltZUF0dGFja1VwXCIgOiBcIkdyZWVlblNsaW1lQXR0YWNrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hcHBseUF0dGFja0hpdCwgdGhpcy5hdHRhY2tIaXREZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDIgPSBjYy52MihzbGltZVdvcmxkMy54LCBzbGltZVdvcmxkMy55KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQzID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQyID0gY2MudjIocGxheWVyV29ybGQzLngsIHBsYXllcldvcmxkMy55KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IHNsaW1lV29ybGQyLnN1YihwbGF5ZXJXb3JsZDIpLm1hZygpO1xyXG4gICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBydW5Ub3dhcmRzUGxheWVyKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcclxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlZW5TbGltZVJ1blJpZ2h0XCIgOiBcIkdyZWVlblNsaW1lUnVuTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVlblNsaW1lUnVuVXBcIiA6IFwiR3JlZWVuU2xpbWVSdW5Eb3duXCIpO1xyXG4gICAgICAgIGlmIChjbGlwICE9PSB0aGlzLmN1cnJlbnRSdW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoZGlyLnggKiB0aGlzLnJ1blNwZWVkICogZHQsIGRpci55ICogdGhpcy5ydW5TcGVlZCAqIGR0KTtcclxuICAgICAgICBjb25zdCBuZXh0UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKG1vdmVEZWx0YSk7XHJcbiAgICAgICAgaWYgKG5leHRQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsUCA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUCk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlZW5TbGltZURlYXRoUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVEZWF0aExlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlZW5TbGltZURlYXRoVXBcIiA6IFwiR3JlZWVuU2xpbWVEZWF0aERvd25cIik7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMS4wKTsgLy8gbWF0Y2ggdG8geW91ciBhbmltYXRpb24ncyBkdXJhdGlvblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/LavaSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8da08N+F15AyKvgv89aNhm3', 'LavaSlimeAI');
// scripts/ai/LavaSlimeAI.ts

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
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var LavaSlimeAI = /** @class */ (function (_super) {
    __extends(LavaSlimeAI, _super);
    function LavaSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 170;
        _this.attackRadius = 80;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 13;
        _this.maxHealth = 40;
        _this.health = 40;
        _this.lifebar = null;
        _this.barOffsetY = 50;
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        _this.isDead = false;
        _this.isDeathAnimPlaying = false;
        return _this;
    }
    LavaSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    LavaSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        // Draw patrol boundary
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        var patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();
        // Detection area
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        // Attack area
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        // Health bar setup
        if (this.lifebar) {
            //this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            this.updateLife(0, this.health);
        }
        this.setToIdle();
    };
    LavaSlimeAI.prototype.update = function (dt) {
        // If already marked dead, skip AI
        if (this.isDead)
            return;
        if (this.isDeathAnimPlaying) {
            // Let death animation play; do nothing else until it's over
            return;
        }
        // 1) compute distance to player
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        // 2) check if player is still within patrol radius
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        // 3) redraw detection circle
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
        // 5) AI state transitions
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        // attack first
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            // Wait through wind-up + attack anim (wind-up = timeBeforeAttack, attackAnim assumed 1s)
            if (this.timer >= this.timeBeforeAttack + 1) {
                this.setToIdle();
            }
            return;
        }
        // then run
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        // patrol (idle → walk → idle)
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var delta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var next = pos.add(delta);
            if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(next);
            if (this.timer >= this.walkTime) {
                this.setToIdle();
            }
        }
    };
    // —— Health‐bar updater ——
    LavaSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    LavaSlimeAI.prototype.takeDamage = function (amount) {
        if (this.health <= 0 || this.isDeathAnimPlaying)
            return;
        // play hurt animation based on direction to player
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var dir = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeHurtRight" : "LavaSlimeHurtLeft")
            : (dir.y > 0 ? "LavaSlimeHurtUp" : "LavaSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0) {
            this.startDeathSequence(dir);
        }
    };
    LavaSlimeAI.prototype.heal = function (amount) {
        if (this.health <= 0)
            return;
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    LavaSlimeAI.prototype.startDeathSequence = function (direction) {
        this.isDeathAnimPlaying = true;
        this.slimeState = SlimeState.Idle; // freeze other AI
        this.playDeathAnimation(direction);
    };
    LavaSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "LavaSlimeDeathRight" : "LavaSlimeDeathLeft")
            : (direction.y > 0 ? "LavaSlimeDeathUp" : "LavaSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        // After the death animation finishes (assume 1s), mark as fully dead
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
            // Do NOT destroy the node—just leave the dead pose in place
        }, 1);
    };
    LavaSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("LavaSlimeIdle");
    };
    LavaSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "LavaSlimeWalkRight" : "LavaSlimeWalkLeft")
            : (this.direction.y > 0 ? "LavaSlimeWalkUp" : "LavaSlimeWalkDown");
        this.anim.play(clip);
    };
    LavaSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    LavaSlimeAI.prototype.startAttack = function () {
        var _this = this;
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        // Wind‐up: play idle (or a custom wind‐up anim)
        this.anim.play("LavaSlimeIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    LavaSlimeAI.prototype.performAttack = function () {
        var _this = this;
        // Play attack clip based on direction to player
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeAttackRight" : "LavaSlimeAttackLeft")
            : (dir.y > 0 ? "LavaSlimeAttackUp" : "LavaSlimeAttackDown");
        this.anim.play(clip);
        // Apply damage if player still within radius
        var playerComp = this.player.getComponent(Player_1.default);
        if (playerComp) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            var dist = slimeW.sub(playerW).mag();
            if (dist <= this.attackRadius) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
        // After attack anim (~1s), go back to idle
        this.scheduleOnce(function () { return _this.setToIdle(); }, 1);
    };
    LavaSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeRunRight" : "LavaSlimeRunLeft")
            : (dir.y > 0 ? "LavaSlimeRunUp" : "LavaSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var delta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var next = this.node.getPosition().add(delta);
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(next);
    };
    LavaSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    LavaSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], LavaSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], LavaSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], LavaSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], LavaSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], LavaSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], LavaSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], LavaSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Time to wait before performing attack (seconds)" })
    ], LavaSlimeAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage dealt by the attack" })
    ], LavaSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], LavaSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], LavaSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], LavaSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], LavaSlimeAI.prototype, "barOffsetY", void 0);
    LavaSlimeAI = __decorate([
        ccclass
    ], LavaSlimeAI);
    return LavaSlimeAI;
}(cc.Component));
exports.default = LavaSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXExhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENB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RUFBRSw2QkFBNkIsRUFBRSxDQUFDO2tEQUM5QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDOytDQUNqQztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBdENmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpVi9CO0lBQUQsa0JBQUM7Q0FqVkQsQUFpVkMsQ0FqVndDLEVBQUUsQ0FBQyxTQUFTLEdBaVZwRDtrQkFqVm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuXHJcbmVudW0gU2xpbWVTdGF0ZSB7XHJcbiAgICBJZGxlLFxyXG4gICAgV2FsayxcclxuICAgIFJ1bixcclxuICAgIEF0dGFja1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHdhbGsgc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMjA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSBydW4gc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDI0MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSBzdGF5cyBpZGxlIGJlZm9yZSB3YWxraW5nIChzZWNvbmRzKVwiIH0pXHJcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSB3YWxrcyBpbiBvbmUgZGlyZWN0aW9uIChzZWNvbmRzKVwiIH0pXHJcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhdHJvbCByYWRpdXMgZnJvbSBzdGFydCBwb2ludCAocGl4ZWxzKVwiIH0pXHJcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRldGVjdGlvbiBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcclxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTcwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQXR0YWNrIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA4MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlRpbWUgdG8gd2FpdCBiZWZvcmUgcGVyZm9ybWluZyBhdHRhY2sgKHNlY29uZHMpXCIgfSlcclxuICAgIHRpbWVCZWZvcmVBdHRhY2s6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEYW1hZ2UgZGVhbHQgYnkgdGhlIGF0dGFja1wiIH0pXHJcbiAgICBhdHRhY2tEYW1hZ2U6IG51bWJlciA9IDEzO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIG1heEhlYWx0aDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxyXG4gICAgaGVhbHRoOiBudW1iZXIgPSA0MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXHJcbiAgICBwcml2YXRlIGJhck9mZnNldFk6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xyXG4gICAgcHJpdmF0ZSBwYXRyb2xDZW50ZXIgPSBjYy52MigwLCAwKTtcclxuXHJcbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGRldGVjdGlvbk5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGF0dGFja0dmeCE6IGNjLkdyYXBoaWNzO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcclxuICAgIHByaXZhdGUgY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNEZWF0aEFuaW1QbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpIGFzIGNjLk5vZGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgY2MuZXJyb3IoXCJQbGF5ZXIgbm9kZSBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xyXG4gICAgICAgIHRoaXMucGF0cm9sQ2VudGVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgLy8gRHJhdyBwYXRyb2wgYm91bmRhcnlcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUuc2V0UG9zaXRpb24odGhpcy5wYXRyb2xDZW50ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBhdHJvbEdmeCA9IHRoaXMuYm91bmRhcnlOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgcGF0cm9sR2Z4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgcGF0cm9sR2Z4LnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcclxuICAgICAgICBwYXRyb2xHZnguY2lyY2xlKDAsIDAsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICBwYXRyb2xHZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIERldGVjdGlvbiBhcmVhXHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlID0gbmV3IGNjLk5vZGUoXCJEZXRlY3Rpb25BcmVhXCIpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4ID0gdGhpcy5kZXRlY3Rpb25Ob2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcclxuXHJcbiAgICAgICAgLy8gQXR0YWNrIGFyZWFcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICAvLyBIZWFsdGggYmFyIHNldHVwXHJcbiAgICAgICAgaWYgKHRoaXMubGlmZWJhcikge1xyXG4gICAgICAgICAgICAvL3RoaXMubGlmZWJhci5zZXRQb3NpdGlvbigwLCB0aGlzLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuYmFyT2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlmZSgwLCB0aGlzLmhlYWx0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBtYXJrZWQgZGVhZCwgc2tpcCBBSVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyBMZXQgZGVhdGggYW5pbWF0aW9uIHBsYXk7IGRvIG5vdGhpbmcgZWxzZSB1bnRpbCBpdCdzIG92ZXJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMSkgY29tcHV0ZSBkaXN0YW5jZSB0byBwbGF5ZXJcclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyVyA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZGlzdFRvUGxheWVyID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIpIGNoZWNrIGlmIHBsYXllciBpcyBzdGlsbCB3aXRoaW4gcGF0cm9sIHJhZGl1c1xyXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcclxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySW5QYXRyb2wgPSBkaXN0RnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcclxuXHJcbiAgICAgICAgLy8gMykgcmVkcmF3IGRldGVjdGlvbiBjaXJjbGVcclxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggICA9IDI7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXNcclxuICAgICAgICAgICAgPyBjYy5jb2xvcigyNTUsIDE2NSwgMClcclxuICAgICAgICAgICAgOiBjYy5jb2xvcigyNTUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIDQpIHJlZHJhdyBhdHRhY2sgY2lyY2xlXHJcbiAgICAgICAgY29uc3QgZHJhd0F0dGFja1IgPSBNYXRoLm1pbih0aGlzLmF0dGFja1JhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXHJcbiAgICAgICAgICAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXHJcbiAgICAgICAgICAgIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyA1KSBBSSBzdGF0ZSB0cmFuc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgLy8gV2FpdCB0aHJvdWdoIHdpbmQtdXAgKyBhdHRhY2sgYW5pbSAod2luZC11cCA9IHRpbWVCZWZvcmVBdHRhY2ssIGF0dGFja0FuaW0gYXNzdW1lZCAxcylcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lQmVmb3JlQXR0YWNrICsgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGVuIHJ1blxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGF0cm9sIChpZGxlIOKGkiB3YWxrIOKGkiBpZGxlKVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHQgID0gcG9zLmFkZChkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4oCU4oCUIEhlYWx0aOKAkGJhciB1cGRhdGVyIOKAlOKAlFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwO1xyXG4gICAgICAgIGlmIChocCA8PSAxMCkgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xyXG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCB8fCB0aGlzLmlzRGVhdGhBbmltUGxheWluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBwbGF5IGh1cnQgYW5pbWF0aW9uIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcclxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHNsaW1lUG9zICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpciAgICAgICA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGh1cnRBbmltICA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkxhdmFTbGltZUh1cnRSaWdodFwiIDogXCJMYXZhU2xpbWVIdXJ0TGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUh1cnRVcFwiIDogXCJMYXZhU2xpbWVIdXJ0RG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShodXJ0QW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwKSB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKC1hbW91bnQsIHRoaXMuaGVhbHRoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWF0aFNlcXVlbmNlKGRpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREZWF0aFNlcXVlbmNlKGRpcmVjdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7IC8vIGZyZWV6ZSBvdGhlciBBSVxyXG4gICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiTGF2YVNsaW1lRGVhdGhSaWdodFwiIDogXCJMYXZhU2xpbWVEZWF0aExlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJMYXZhU2xpbWVEZWF0aFVwXCIgOiBcIkxhdmFTbGltZURlYXRoRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShkZWF0aEFuaW0pO1xyXG5cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAvLyBBZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzIChhc3N1bWUgMXMpLCBtYXJrIGFzIGZ1bGx5IGRlYWRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJMYXZhU2xpbWVJZGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRXYWxraW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcclxuICAgICAgICApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJMYXZhU2xpbWVXYWxrUmlnaHRcIiA6IFwiTGF2YVNsaW1lV2Fsa0xlZnRcIilcclxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkxhdmFTbGltZVdhbGtVcFwiIDogXCJMYXZhU2xpbWVXYWxrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIC8vIFdpbmTigJB1cDogcGxheSBpZGxlIChvciBhIGN1c3RvbSB3aW5k4oCQdXAgYW5pbSlcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkxhdmFTbGltZUlkbGVcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xyXG4gICAgICAgIC8vIFBsYXkgYXR0YWNrIGNsaXAgYmFzZWQgb24gZGlyZWN0aW9uIHRvIHBsYXllclxyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkxhdmFTbGltZUF0dGFja1JpZ2h0XCIgOiBcIkxhdmFTbGltZUF0dGFja0xlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVBdHRhY2tVcFwiIDogXCJMYXZhU2xpbWVBdHRhY2tEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG5cclxuICAgICAgICAvLyBBcHBseSBkYW1hZ2UgaWYgcGxheWVyIHN0aWxsIHdpdGhpbiByYWRpdXNcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpbWVXICAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgICAgID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFmdGVyIGF0dGFjayBhbmltICh+MXMpLCBnbyBiYWNrIHRvIGlkbGVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNldFRvSWRsZSgpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkxhdmFTbGltZVJ1blJpZ2h0XCIgOiBcIkxhdmFTbGltZVJ1bkxlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVSdW5VcFwiIDogXCJMYXZhU2xpbWVSdW5Eb3duXCIpO1xyXG4gICAgICAgIGlmIChjbGlwICE9PSB0aGlzLmN1cnJlbnRSdW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcclxuICAgICAgICBpZiAobmV4dC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihsb2NhbFAueCAtIHRoaXMubm9kZS54LCBsb2NhbFAueSAtIHRoaXMubm9kZS55KS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/ShyAgent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b710El2DRDKqoljmM7gWCo', 'ShyAgent');
// scripts/ai/ShyAgent.ts

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
var IInputControls_1 = require("../input/IInputControls");
var Agent_1 = require("./Agent");
var Coward_1 = require("./strategies/Coward");
var Wanderer_1 = require("./strategies/Wanderer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * Mixes two vectors.
 *
 * Example: `mixVec2(a, b, 0.25)` (Mathematically equivalent to a * 0.25 + b * 0.75)
 * @param mix A value between 0 and 1.
 * @returns The mixed result.
 */
function mixVec2(a, b, mix) {
    return a.mul(mix).add(b.mul(1.0 - mix));
}
var ShyAgent = /** @class */ (function (_super) {
    __extends(ShyAgent, _super);
    function ShyAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** The agent will move for this long before stopping to wait. */
        _this.moveDuration = 1.0;
        /** The agent will move at this speed. */
        _this.moveSpeed = 1.0;
        /** The agent will wait for this long before starting to move again. */
        _this.waitDuration = 0.5;
        /** The actual wait duration will be randomized by this factor,
         *  such that the actual wait duration is a random number between
         *  waitDuration x (1 - waitRandomFactor) and
         *  waitDuration x (1 + waitRandomFactor).
        */
        _this.waitRandomFactor = 0.1;
        _this.runAwayFrom = null;
        _this.safeDistance = 5.0;
        _this.attack = IInputControls_1.ButtonState.Rest;
        _this.interact = IInputControls_1.ButtonState.Rest;
        _this._moveAxis2D = cc.Vec2.ZERO;
        _this._wanderer = null;
        _this._coward = null;
        _this._isWaiting = false;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(ShyAgent.prototype, "horizontalAxis", {
        get: function () { return this._moveAxis2D.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShyAgent.prototype, "verticalAxis", {
        get: function () { return this._moveAxis2D.y; },
        enumerable: false,
        configurable: true
    });
    ShyAgent.prototype.agentUpdate = function (dt) {
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        // TODO (3.2): Combine the two strategies to implement ShyAgent's behaviour.
        // [SPECIFICATIONS]
        // - The ShyAgent is like the WanderAgent, but when it is about to move,
        //   there are two cases:
        //    - If the agent's distance to the target (runAwayFrom) is less than 
        //      the safe distance (safeDistance), set this._moveAxis2D as a mix of 
        //      the wanderer's axes and the coward's axes. 
        //      Please use the provided function mixVec2 with 
        //      a = wandererMove, b = cowardMove, mix = 0.25. (See line 25)
        //    - Otherwise, set this.moveAxis2D as the wanderer's axes.
        // - Note that the agent should NOT be able to change direction while moving.
        //
        // - Hint 1: You can use this._coward.distanceFromTarget to get the 
        //   distance to the target.
        // - Hint 2: Try maintaining this.isWaiting to prevent the agent from
        //   changing direction while moving.
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        if (!this._wanderer || !this._coward)
            return;
        //#region [YOUR IMPLEMENTATION HERE]
        // ...
        this._wanderer.update(dt);
        this._coward.update(dt);
        //#endregion
        var wandererMove = cc.v2(this._wanderer.horizontalAxis, this._wanderer.verticalAxis);
        var cowardMove = cc.v2(this._coward.horizontalAxis, this._coward.verticalAxis);
        if (wandererMove.fuzzyEquals(cc.Vec2.ZERO, 0.01)) {
            // Wanderer has stopped. The agent should move the moment it is no longer stopped.
            this._isWaiting = true;
            this._moveAxis2D = wandererMove;
        }
        //#region [YOUR IMPLEMENTATION HERE]
        // ...
        // else if (this._iswaiting) ...
        else if (this._isWaiting) {
            if (this._coward.distanceFromTarget < this.safeDistance) {
                this._moveAxis2D = mixVec2(wandererMove, cowardMove, 0.25);
            }
            else {
                this._moveAxis2D = wandererMove;
            }
            this._isWaiting = false;
        }
        //#endregion
    };
    // LIFE-CYCLE CALLBACKS:
    //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
    // TODO (3.1): Initialize ShyAgent's two strategies (this.wanderer and this.coward) correctly.
    // [SPECIFICATIONS]
    // - You'll need ShyAgent's properties: moveDuration, waitDuration, 
    //   waitRandomFactor, runAwayFrom.
    // - You'll also need to pass a reference to this object to the Coward strategy. 
    //   to construct it correctly. (How?)
    //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
    ShyAgent.prototype.onLoad = function () {
        //#region [YOUR IMPLEMENTATION HERE]
        this._wanderer = new Wanderer_1.Wanderer(this.moveDuration, this.waitDuration, this.waitRandomFactor);
        this._coward = new Coward_1.Coward(this, this.runAwayFrom);
        //#endregion
    };
    ShyAgent.prototype.start = function () {
        //#region [YOUR IMPLEMENTATION HERE]
        this._wanderer.start();
        this._coward.start();
        //#endregion
    };
    __decorate([
        property(cc.Float)
    ], ShyAgent.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], ShyAgent.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], ShyAgent.prototype, "waitDuration", void 0);
    __decorate([
        property(cc.Float)
    ], ShyAgent.prototype, "waitRandomFactor", void 0);
    __decorate([
        property(cc.Node)
    ], ShyAgent.prototype, "runAwayFrom", void 0);
    __decorate([
        property(cc.Float)
    ], ShyAgent.prototype, "safeDistance", void 0);
    ShyAgent = __decorate([
        ccclass
    ], ShyAgent);
    return ShyAgent;
}(Agent_1.default));
exports.default = ShyAgent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL1NoeUFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFDNUIsOENBQTZDO0FBQzdDLGtEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLE9BQU8sQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQVc7SUFDaEQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFHRDtJQUNZLDRCQUFLO0lBRGpCO1FBQUEscUVBMEdDO1FBdkdHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUkzQixZQUFNLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLGNBQVEsR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFFakMsaUJBQVcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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LG9DQUFvQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWTtJQUNoQixDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNRO0lBdEJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRzVCO0lBQUQsZUFBQztDQTFHRCxBQTBHQyxDQXpHVyxlQUFLLEdBeUdoQjtrQkExR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBCdXR0b25TdGF0ZSwgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCBBZ2VudCBmcm9tIFwiLi9BZ2VudFwiO1xuaW1wb3J0IHsgQ293YXJkIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9Db3dhcmRcIjtcbmltcG9ydCB7IFdhbmRlcmVyIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9XYW5kZXJlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiBNaXhlcyB0d28gdmVjdG9ycy5cbiAqIFxuICogRXhhbXBsZTogYG1peFZlYzIoYSwgYiwgMC4yNSlgIChNYXRoZW1hdGljYWxseSBlcXVpdmFsZW50IHRvIGEgKiAwLjI1ICsgYiAqIDAuNzUpXG4gKiBAcGFyYW0gbWl4IEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxuICogQHJldHVybnMgVGhlIG1peGVkIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gbWl4VmVjMihhOiBjYy5WZWMyLCBiOiBjYy5WZWMyLCBtaXg6IG51bWJlcikge1xuICAgIHJldHVybiBhLm11bChtaXgpLmFkZChiLm11bCgxLjAgLSBtaXgpKVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h5QWdlbnRcbiAgICBleHRlbmRzIEFnZW50XG4gICAgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgZm9yIHRoaXMgbG9uZyBiZWZvcmUgc3RvcHBpbmcgdG8gd2FpdC4gKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbW92ZUR1cmF0aW9uID0gMS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCBtb3ZlIGF0IHRoaXMgc3BlZWQuICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1vdmVTcGVlZCA9IDEuMDtcbiAgICAvKiogVGhlIGFnZW50IHdpbGwgd2FpdCBmb3IgdGhpcyBsb25nIGJlZm9yZSBzdGFydGluZyB0byBtb3ZlIGFnYWluLiAqL1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICB3YWl0RHVyYXRpb24gPSAwLjU7XG4gICAgLyoqIFRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiB3aWxsIGJlIHJhbmRvbWl6ZWQgYnkgdGhpcyBmYWN0b3IsIFxuICAgICAqICBzdWNoIHRoYXQgdGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIGlzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxIC0gd2FpdFJhbmRvbUZhY3RvcikgYW5kIFxuICAgICAqICB3YWl0RHVyYXRpb24geCAoMSArIHdhaXRSYW5kb21GYWN0b3IpLlxuICAgICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHdhaXRSYW5kb21GYWN0b3IgPSAwLjE7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcnVuQXdheUZyb206IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBzYWZlRGlzdGFuY2U6IG51bWJlciA9IDUuMDtcblxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKSB7IHJldHVybiB0aGlzLl9tb3ZlQXhpczJELnggfVxuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCkgeyByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55IH1cbiAgICBhdHRhY2s6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBpbnRlcmFjdDogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRDogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcbiAgICBwcml2YXRlIF93YW5kZXJlcjogV2FuZGVyZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2Nvd2FyZDogQ293YXJkID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc1dhaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBhZ2VudFVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgICAgICAvLyBUT0RPICgzLjIpOiBDb21iaW5lIHRoZSB0d28gc3RyYXRlZ2llcyB0byBpbXBsZW1lbnQgU2h5QWdlbnQncyBiZWhhdmlvdXIuXG4gICAgICAgIC8vIFtTUEVDSUZJQ0FUSU9OU11cbiAgICAgICAgLy8gLSBUaGUgU2h5QWdlbnQgaXMgbGlrZSB0aGUgV2FuZGVyQWdlbnQsIGJ1dCB3aGVuIGl0IGlzIGFib3V0IHRvIG1vdmUsXG4gICAgICAgIC8vICAgdGhlcmUgYXJlIHR3byBjYXNlczpcbiAgICAgICAgLy8gICAgLSBJZiB0aGUgYWdlbnQncyBkaXN0YW5jZSB0byB0aGUgdGFyZ2V0IChydW5Bd2F5RnJvbSkgaXMgbGVzcyB0aGFuIFxuICAgICAgICAvLyAgICAgIHRoZSBzYWZlIGRpc3RhbmNlIChzYWZlRGlzdGFuY2UpLCBzZXQgdGhpcy5fbW92ZUF4aXMyRCBhcyBhIG1peCBvZiBcbiAgICAgICAgLy8gICAgICB0aGUgd2FuZGVyZXIncyBheGVzIGFuZCB0aGUgY293YXJkJ3MgYXhlcy4gXG4gICAgICAgIC8vICAgICAgUGxlYXNlIHVzZSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gbWl4VmVjMiB3aXRoIFxuICAgICAgICAvLyAgICAgIGEgPSB3YW5kZXJlck1vdmUsIGIgPSBjb3dhcmRNb3ZlLCBtaXggPSAwLjI1LiAoU2VlIGxpbmUgMjUpXG4gICAgICAgIC8vICAgIC0gT3RoZXJ3aXNlLCBzZXQgdGhpcy5tb3ZlQXhpczJEIGFzIHRoZSB3YW5kZXJlcidzIGF4ZXMuXG4gICAgICAgIC8vIC0gTm90ZSB0aGF0IHRoZSBhZ2VudCBzaG91bGQgTk9UIGJlIGFibGUgdG8gY2hhbmdlIGRpcmVjdGlvbiB3aGlsZSBtb3ZpbmcuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC0gSGludCAxOiBZb3UgY2FuIHVzZSB0aGlzLl9jb3dhcmQuZGlzdGFuY2VGcm9tVGFyZ2V0IHRvIGdldCB0aGUgXG4gICAgICAgIC8vICAgZGlzdGFuY2UgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLy8gLSBIaW50IDI6IFRyeSBtYWludGFpbmluZyB0aGlzLmlzV2FpdGluZyB0byBwcmV2ZW50IHRoZSBhZ2VudCBmcm9tXG4gICAgICAgIC8vICAgY2hhbmdpbmcgZGlyZWN0aW9uIHdoaWxlIG1vdmluZy5cbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgICAgIGlmICghdGhpcy5fd2FuZGVyZXIgfHwgIXRoaXMuX2Nvd2FyZCkgcmV0dXJuO1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnVwZGF0ZShkdCk7XG4gICAgICAgIHRoaXMuX2Nvd2FyZC51cGRhdGUoZHQpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICAgICAgbGV0IHdhbmRlcmVyTW92ZSA9IGNjLnYyKHRoaXMuX3dhbmRlcmVyLmhvcml6b250YWxBeGlzLCB0aGlzLl93YW5kZXJlci52ZXJ0aWNhbEF4aXMpO1xuICAgICAgICBsZXQgY293YXJkTW92ZSA9IGNjLnYyKHRoaXMuX2Nvd2FyZC5ob3Jpem9udGFsQXhpcywgdGhpcy5fY293YXJkLnZlcnRpY2FsQXhpcyk7XG4gICAgICAgIGlmICh3YW5kZXJlck1vdmUuZnV6enlFcXVhbHMoY2MuVmVjMi5aRVJPLCAwLjAxKSkge1xuICAgICAgICAgICAgLy8gV2FuZGVyZXIgaGFzIHN0b3BwZWQuIFRoZSBhZ2VudCBzaG91bGQgbW92ZSB0aGUgbW9tZW50IGl0IGlzIG5vIGxvbmdlciBzdG9wcGVkLlxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vdmVBeGlzMkQgPSB3YW5kZXJlck1vdmU7XG4gICAgICAgIH1cbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIC8vIC4uLlxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLl9pc3dhaXRpbmcpIC4uLlxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pc1dhaXRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb3dhcmQuZGlzdGFuY2VGcm9tVGFyZ2V0IDwgdGhpcy5zYWZlRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gbWl4VmVjMih3YW5kZXJlck1vdmUsIGNvd2FyZE1vdmUsIDAuMjUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gd2FuZGVyZXJNb3ZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgIC8vIFRPRE8gKDMuMSk6IEluaXRpYWxpemUgU2h5QWdlbnQncyB0d28gc3RyYXRlZ2llcyAodGhpcy53YW5kZXJlciBhbmQgdGhpcy5jb3dhcmQpIGNvcnJlY3RseS5cbiAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXG4gICAgLy8gLSBZb3UnbGwgbmVlZCBTaHlBZ2VudCdzIHByb3BlcnRpZXM6IG1vdmVEdXJhdGlvbiwgd2FpdER1cmF0aW9uLCBcbiAgICAvLyAgIHdhaXRSYW5kb21GYWN0b3IsIHJ1bkF3YXlGcm9tLlxuICAgIC8vIC0gWW91J2xsIGFsc28gbmVlZCB0byBwYXNzIGEgcmVmZXJlbmNlIHRvIHRoaXMgb2JqZWN0IHRvIHRoZSBDb3dhcmQgc3RyYXRlZ3kuIFxuICAgIC8vICAgdG8gY29uc3RydWN0IGl0IGNvcnJlY3RseS4gKEhvdz8pXG4gICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgdGhpcy5fd2FuZGVyZXIgPSBuZXcgV2FuZGVyZXIodGhpcy5tb3ZlRHVyYXRpb24sIHRoaXMud2FpdER1cmF0aW9uLCB0aGlzLndhaXRSYW5kb21GYWN0b3IpO1xuICAgICAgICB0aGlzLl9jb3dhcmQgPSBuZXcgQ293YXJkKHRoaXMsIHRoaXMucnVuQXdheUZyb20pO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX2Nvd2FyZC5zdGFydCgpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/Agent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39ba77Ddy1EMpTOy+FEUQJ4', 'Agent');
// scripts/ai/Agent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * Abstract class for all AI components.
 * You can think of this as an organized API.
 * If you want to implement the update method, you have to call the
 * super method first!
 */
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Agent.prototype.update = function (dt) {
        this.agentUpdate(dt);
    };
    return Agent;
}(cc.Component));
exports.default = Agent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0FnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDOzs7OztHQUtHO0FBQ0g7SUFBNEMseUJBQVk7SUFBeEQ7O0lBYUEsQ0FBQztJQUxHLHdCQUF3QjtJQUVkLHNCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsWUFBQztBQUFELENBYkEsQUFhQyxDQWIyQyxFQUFFLENBQUMsU0FBUyxHQWF2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZvciBhbGwgQUkgY29tcG9uZW50cy5cbiAqIFlvdSBjYW4gdGhpbmsgb2YgdGhpcyBhcyBhbiBvcmdhbml6ZWQgQVBJLlxuICogSWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IHRoZSB1cGRhdGUgbWV0aG9kLCB5b3UgaGF2ZSB0byBjYWxsIHRoZVxuICogc3VwZXIgbWV0aG9kIGZpcnN0IVxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBZ2VudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXBkYXRlIG1ldGhvZCB3cmFwcGVyIGZvciBBZ2VudCBjbGFzc2VzLlxuICAgICAqIEBwYXJhbSBkdCBUaW1lIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgYWdlbnRVcGRhdGUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGFnZW50VXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hZ2VudFVwZGF0ZShkdCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/WanderAgent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a05fAQ2UJPQIurJewep8gS', 'WanderAgent');
// scripts/ai/WanderAgent.ts

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
var IInputControls_1 = require("../input/IInputControls");
var Agent_1 = require("./Agent");
var Wanderer_1 = require("./strategies/Wanderer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
function randomPointOnCircle(radius) {
    if (radius === void 0) { radius = 1; }
    var angle = Math.random() * Math.PI * 2;
    return new cc.Vec2(Math.cos(angle) * radius, Math.sin(angle) * radius);
}
/**
 * An agent that simply wanders around like a cute animal.
 */
var WanderAgent = /** @class */ (function (_super) {
    __extends(WanderAgent, _super);
    function WanderAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** The agent will move for this long before stopping to wait. */
        _this.moveDuration = 1.0;
        /** The agent will move at this speed. */
        _this.moveSpeed = 5.0;
        /** The agent will wait for this long before starting to move again. */
        _this.waitDuration = 0.5;
        /** The actual wait duration will be randomized by this factor,
         *  such that the actual wait duration is a random number between
         *  waitDuration x (1 - waitRandomFactor) and
         *  waitDuration x (1 + waitRandomFactor).
        */
        _this.waitRandomFactor = 0.1;
        _this._strategy = null;
        _this.attack = IInputControls_1.ButtonState.Rest;
        _this.interact = IInputControls_1.ButtonState.Rest;
        return _this;
        // !!! DO NOT IMPLEMENT "update"
        // !!! If you want to, you'll have to call the parent class's update method as well!
        // !!! Use agentUpdate instead.
        // update (dt) {}
    }
    Object.defineProperty(WanderAgent.prototype, "horizontalAxis", {
        get: function () {
            if (!this._strategy)
                return 0;
            return this._strategy.horizontalAxis * this.moveSpeed;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WanderAgent.prototype, "verticalAxis", {
        get: function () {
            if (!this._strategy)
                return 0;
            return this._strategy.verticalAxis * this.moveSpeed;
        },
        enumerable: false,
        configurable: true
    });
    //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
    // TODO (2.4): Complete WanderAgent using the Wanderer strategy.
    // [SPECIFICATIONS]
    // - Assign a new Wanderer to this.strategy, with WandererAgent's properties
    //   as the constructor's arguments.
    // - Invoke its "start" method inside WanderAgent's "start" method. 
    // - Invoke its "update" method inside WanderAgent's "agentUpdate" method.
    //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
    WanderAgent.prototype.agentUpdate = function (dt) {
        //#region [YOUR IMPLEMENTATION HERE]
        this._strategy.update(dt);
        //#endregion
    };
    // LIFE-CYCLE CALLBACKS:
    WanderAgent.prototype.onLoad = function () {
        //#region [YOUR IMPLEMENTATION HERE]
        this._strategy = new Wanderer_1.Wanderer(this.moveDuration, this.waitDuration, this.waitRandomFactor);
        //#endregion
    };
    WanderAgent.prototype.start = function () {
        //#region [YOUR IMPLEMENTATION HERE]
        this._strategy.start();
        //#endregion
    };
    __decorate([
        property(cc.Float)
    ], WanderAgent.prototype, "moveDuration", void 0);
    __decorate([
        property(cc.Float)
    ], WanderAgent.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], WanderAgent.prototype, "waitDuration", void 0);
    __decorate([
        property(cc.Float)
    ], WanderAgent.prototype, "waitRandomFactor", void 0);
    WanderAgent = __decorate([
        ccclass
    ], WanderAgent);
    return WanderAgent;
}(Agent_1.default));
exports.default = WanderAgent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL1dhbmRlckFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFFNUIsa0RBQWlEO0FBQzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFNBQVMsbUJBQW1CLENBQUMsTUFBa0I7SUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtJQUMzQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBQ0Q7O0dBRUc7QUFFSDtJQUNZLCtCQUFLO0lBRGpCO1FBQUEscUVBcUVDO1FBakVHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUdmLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBVXRDLFlBQU0sR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdkMsY0FBUSxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQzs7UUFnQ3pDLGdDQUFnQztRQUNoQyxvRkFBb0Y7UUFDcEYsK0JBQStCO1FBQy9CLGlCQUFpQjtJQUNyQixDQUFDO0lBN0NHLHNCQUFXLHVDQUFjO2FBQXpCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRixzQkFBVyxxQ0FBWTthQUF2QjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFLRCw0RUFBNEU7SUFDNUUsZ0VBQWdFO0lBQ2hFLG1CQUFtQjtJQUNuQiw0RUFBNEU7SUFDNUUsb0NBQW9DO0lBQ3BDLG9FQUFvRTtJQUNwRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBRWxFLGlDQUFXLEdBQXJCLFVBQXNCLEVBQVU7UUFDNUIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLFlBQVk7SUFDaEIsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRixZQUFZO0lBQ2hCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsWUFBWTtJQUNoQixDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ0k7SUFuQk4sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFFL0I7SUFBRCxrQkFBQztDQXJFRCxBQXFFQyxDQXBFVyxlQUFLLEdBb0VoQjtrQkFyRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBCdXR0b25TdGF0ZSwgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCBBZ2VudCBmcm9tIFwiLi9BZ2VudFwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9zdHJhdGVnaWVzL0FnZW50U3RyYXRlZ3lcIjtcbmltcG9ydCB7IFdhbmRlcmVyIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9XYW5kZXJlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZnVuY3Rpb24gcmFuZG9tUG9pbnRPbkNpcmNsZShyYWRpdXM6IG51bWJlciA9IDEpIHtcbiAgICBsZXQgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgcmV0dXJuIG5ldyBjYy5WZWMyKE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzKTtcbn1cbi8qKlxuICogQW4gYWdlbnQgdGhhdCBzaW1wbHkgd2FuZGVycyBhcm91bmQgbGlrZSBhIGN1dGUgYW5pbWFsLlxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FuZGVyQWdlbnRcbiAgICBleHRlbmRzIEFnZW50XG4gICAgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XG5cbiAgICAvKiogVGhlIGFnZW50IHdpbGwgbW92ZSBmb3IgdGhpcyBsb25nIGJlZm9yZSBzdG9wcGluZyB0byB3YWl0LiAqL1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtb3ZlRHVyYXRpb24gPSAxLjA7XG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgYXQgdGhpcyBzcGVlZC4gKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbW92ZVNwZWVkID0gNS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCB3YWl0IGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUgYWdhaW4uICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHdhaXREdXJhdGlvbiA9IDAuNTtcbiAgICAvKiogVGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIHdpbGwgYmUgcmFuZG9taXplZCBieSB0aGlzIGZhY3RvciwgXG4gICAgICogIHN1Y2ggdGhhdCB0aGUgYWN0dWFsIHdhaXQgZHVyYXRpb24gaXMgYSByYW5kb20gbnVtYmVyIGJldHdlZW5cbiAgICAgKiAgd2FpdER1cmF0aW9uIHggKDEgLSB3YWl0UmFuZG9tRmFjdG9yKSBhbmQgXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxICsgd2FpdFJhbmRvbUZhY3RvcikuXG4gICAgKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgd2FpdFJhbmRvbUZhY3RvciA9IDAuMTtcblxuXG4gICAgcHJpdmF0ZSBfc3RyYXRlZ3k6IEFJLlN0cmF0ZWd5ID0gbnVsbDtcblxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5fc3RyYXRlZ3kpIHJldHVybiAwO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyYXRlZ3kuaG9yaXpvbnRhbEF4aXMgKiB0aGlzLm1vdmVTcGVlZDtcbiAgICB9O1xuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3N0cmF0ZWd5KSByZXR1cm4gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5LnZlcnRpY2FsQXhpcyAqIHRoaXMubW92ZVNwZWVkO1xuICAgIH1cbiAgICBhdHRhY2s6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBpbnRlcmFjdDogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuXG5cbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcbiAgICAvLyBUT0RPICgyLjQpOiBDb21wbGV0ZSBXYW5kZXJBZ2VudCB1c2luZyB0aGUgV2FuZGVyZXIgc3RyYXRlZ3kuXG4gICAgLy8gW1NQRUNJRklDQVRJT05TXVxuICAgIC8vIC0gQXNzaWduIGEgbmV3IFdhbmRlcmVyIHRvIHRoaXMuc3RyYXRlZ3ksIHdpdGggV2FuZGVyZXJBZ2VudCdzIHByb3BlcnRpZXNcbiAgICAvLyAgIGFzIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50cy5cbiAgICAvLyAtIEludm9rZSBpdHMgXCJzdGFydFwiIG1ldGhvZCBpbnNpZGUgV2FuZGVyQWdlbnQncyBcInN0YXJ0XCIgbWV0aG9kLiBcbiAgICAvLyAtIEludm9rZSBpdHMgXCJ1cGRhdGVcIiBtZXRob2QgaW5zaWRlIFdhbmRlckFnZW50J3MgXCJhZ2VudFVwZGF0ZVwiIG1ldGhvZC5cbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcblxuICAgIHByb3RlY3RlZCBhZ2VudFVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICB0aGlzLl9zdHJhdGVneS51cGRhdGUoZHQpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gbmV3IFdhbmRlcmVyKHRoaXMubW92ZUR1cmF0aW9uLCB0aGlzLndhaXREdXJhdGlvbiwgdGhpcy53YWl0UmFuZG9tRmFjdG9yKTtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICB0aGlzLl9zdHJhdGVneS5zdGFydCgpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyAhISEgRE8gTk9UIElNUExFTUVOVCBcInVwZGF0ZVwiXG4gICAgLy8gISEhIElmIHlvdSB3YW50IHRvLCB5b3UnbGwgaGF2ZSB0byBjYWxsIHRoZSBwYXJlbnQgY2xhc3MncyB1cGRhdGUgbWV0aG9kIGFzIHdlbGwhXG4gICAgLy8gISEhIFVzZSBhZ2VudFVwZGF0ZSBpbnN0ZWFkLlxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQStEQztRQTdERyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUF3RHJDLENBQUM7SUF0REcscUJBQU0sR0FBTjtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsS0FBSyxJQUFJO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV4RSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxF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QUxaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0ErRHhCO0lBQUQsV0FBQztDQS9ERCxBQStEQyxDQS9EaUMsRUFBRSxDQUFDLFNBQVMsR0ErRDdDO2tCQS9Eb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgRXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgTWVudWJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWU6IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIHRoaXMuVm9sdW1uVmFsdWUgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgdGhpcy5Wb2x1bW5WYWx1ZSA9IDAuNTtcclxuICAgICAgICB0aGlzLnBsYXliZ20oKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMuVm9sdW1uVmFsdWUpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGxldCBleGl0SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXhpdEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGV4aXRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGV4aXRIYW5kbGVyLmhhbmRsZXIgPSBcIkV4aXRCdXR0b25FdmVudFwiO1xyXG4gICAgICAgIHRoaXMuRXhpdEJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGV4aXRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBTdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgU3RhcnRCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIkxvYWRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL1N0YXJ0QnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU3RhcnRCdXR0b24pO1xyXG5cclxuICAgICAgICBsZXQgTWFwQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBNYXBCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIE1hcEJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBNYXBCdXR0b24uaGFuZGxlciA9IFwiTG9hZE1hcFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9NYXBCdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChNYXBCdXR0b24pO1xyXG4gICAgfVxyXG4gICAgTG9hZEdhbWUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwiZGVtb1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkTWFwKCl7XHJcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gY2MuZmluZChcIkNhbnZhcy9NZW51TWdyXCIpLmdldENvbXBvbmVudChcIk1lbnVNZ3JcIikuYXV0aENvbXA/LnVzZXIgfHwgXCJHdWVzdFwiO1xyXG4gICAgICAgIGlmKHVzZXJuYW1lKSBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odXNlcm5hbWUsIDApO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9hZGluZ01hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0xvYWRpbmdNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkxvYWRpbmdNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBsb2FkaW5nTWFuYWdlci5zdGFydExvYWRpbmcoXCJkZW1vX3Rlc3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBFeGl0QnV0dG9uRXZlbnQoKXtcclxuICAgICAgICBjYy5nYW1lLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgcGxheWJnbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLk1lbnViZ20pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuTWVudWJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJCR00gbm90IGFzc2lnbmVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/FirebaseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2c1agQNjlDVKAs/wbgiLpU', 'FirebaseManager');
// scripts/Menu/FirebaseManager.ts

// assets/scripts/FirebaseManager.ts
/*import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
  authDomain: "rune-raids.firebaseapp.com",
  databaseURL: "https://rune-raids-default-rtdb.firebaseio.com",
  projectId: "rune-raids",
  storageBucket: "rune-raids.firebasestorage.app",
  messagingSenderId: "530514360843",
  appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
  measurementId: "G-B1C5FG1YSN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcRmlyZWJhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWtCc0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvc2NyaXB0cy9GaXJlYmFzZU1hbmFnZXIudHNcclxuLyppbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcnVuZS1yYWlkcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTMwNTE0MzYwODQzXCIsXHJcbiAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbn07XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpOyovXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/KeyboardControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ff4dcmThZMKKaXEWb71524', 'KeyboardControls');
// scripts/input/KeyboardControls.ts

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
var IInputControls_1 = require("./IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KeyboardControls = /** @class */ (function (_super) {
    __extends(KeyboardControls, _super);
    function KeyboardControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hAxis = 0;
        _this._vAxis = 0;
        _this._zKey = IInputControls_1.ButtonState.Rest;
        _this._xKey = IInputControls_1.ButtonState.Rest;
        _this._cKey = IInputControls_1.ButtonState.Rest;
        _this._vKey = IInputControls_1.ButtonState.Rest;
        return _this;
    }
    Object.defineProperty(KeyboardControls.prototype, "horizontalAxis", {
        get: function () { return this._hAxis; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "verticalAxis", {
        get: function () { return this._vAxis; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack", {
        get: function () { return this._zKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "interact", {
        get: function () { return this._zKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "gethurt", {
        get: function () { return this._xKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack2", {
        get: function () { return this._cKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack3", {
        get: function () { return this._vKey; },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    KeyboardControls.prototype.onLoad = function () { };
    KeyboardControls.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    // update (dt) {}
    KeyboardControls.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis = -1;
                break;
            case cc.macro.KEY.d:
                this._hAxis = 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis = 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis = -1;
                break;
            case cc.macro.KEY.z:
                if (this._zKey === IInputControls_1.ButtonState.Rest || this._zKey === IInputControls_1.ButtonState.Released) {
                    this._zKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._zKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.x:
                if (this._xKey === IInputControls_1.ButtonState.Rest || this._xKey === IInputControls_1.ButtonState.Released) {
                    this._xKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._xKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.c:
                if (this._cKey === IInputControls_1.ButtonState.Rest || this._cKey === IInputControls_1.ButtonState.Released) {
                    this._cKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._cKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.v:
                if (this._vKey === IInputControls_1.ButtonState.Rest || this._vKey === IInputControls_1.ButtonState.Released) {
                    this._vKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._vKey = IInputControls_1.ButtonState.Held;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    };
    KeyboardControls.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis += 1;
                break;
            case cc.macro.KEY.d:
                this._hAxis -= 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis -= 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis += 1;
                break;
            case cc.macro.KEY.z:
                if (this._zKey === IInputControls_1.ButtonState.Pressed || this._zKey === IInputControls_1.ButtonState.Held) {
                    this._zKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._zKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.x:
                if (this._xKey === IInputControls_1.ButtonState.Pressed || this._xKey === IInputControls_1.ButtonState.Held) {
                    this._xKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._xKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.c:
                if (this._cKey === IInputControls_1.ButtonState.Pressed || this._cKey === IInputControls_1.ButtonState.Held) {
                    this._cKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._cKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.v:
                if (this._vKey === IInputControls_1.ButtonState.Pressed || this._vKey === IInputControls_1.ButtonState.Held) {
                    this._vKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._vKey = IInputControls_1.ButtonState.Rest;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    };
    KeyboardControls = __decorate([
        ccclass
    ], KeyboardControls);
    return KeyboardControls;
}(cc.Component));
exports.default = KeyboardControls;
function clamp(value, a, b) {
    if (a === void 0) { a = -1; }
    if (b === void 0) { b = 1; }
    if (value < a)
        return a;
    if (value > b)
        return b;
    return value;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5wdXRcXEtleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkcsbURBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQ1ksb0NBQVk7SUFEeEI7UUFBQSxxRUFpSUM7UUE3SFcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUduQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFJdEMsV0FBSyxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQztRQUd0QyxXQUFLLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBR3RDLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBNkdsRCxDQUFDO0lBNUhHLHNCQUFXLDRDQUFjO2FBQXpCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRzFELHNCQUFXLDBDQUFZO2FBQXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLG9DQUFNO2FBQWpCLGNBQW1DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3RELHNCQUFXLHNDQUFRO2FBQW5CLGNBQXFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3ZELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3ZELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRXZELHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLGdDQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLG9DQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNuQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFFcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQS9IZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FpSXBDO0lBQUQsdUJBQUM7Q0FqSUQsQUFpSUMsQ0FoSVcsRUFBRSxDQUFDLFNBQVMsR0FnSXZCO2tCQWpJb0IsZ0JBQWdCO0FBbUlyQyxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsQ0FBYyxFQUFFLENBQWE7SUFBN0Isa0JBQUEsRUFBQSxLQUFhLENBQUM7SUFBRSxrQkFBQSxFQUFBLEtBQWE7SUFDdkQsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRDb250cm9sc1xyXG4gICAgZXh0ZW5kcyBjYy5Db21wb25lbnRcclxuICAgIGltcGxlbWVudHMgSUlucHV0Q29udHJvbHMge1xyXG5cclxuICAgIHByaXZhdGUgX2hBeGlzOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faEF4aXMgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZBeGlzOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3ZBeGlzIH1cclxuXHJcbiAgICBwcml2YXRlIF96S2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl96S2V5IH1cclxuICAgIHB1YmxpYyBnZXQgaW50ZXJhY3QoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5fektleSB9XHJcblxyXG4gICAgcHJpdmF0ZSBfeEtleTogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xyXG4gICAgcHVibGljIGdldCBnZXRodXJ0KCk6IEJ1dHRvblN0YXRlIHsgcmV0dXJuIHRoaXMuX3hLZXkgfVxyXG5cclxuICAgIHByaXZhdGUgX2NLZXk6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrMigpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9jS2V5IH1cclxuXHJcbiAgICBwcml2YXRlIF92S2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjazMoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5fdktleSB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5faEF4aXMgPSAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5faEF4aXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZBeGlzID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuejogXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fektleSA9PT0gQnV0dG9uU3RhdGUuUmVzdCB8fCB0aGlzLl96S2V5ID09PSBCdXR0b25TdGF0ZS5SZWxlYXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl96S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS54OiBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl94S2V5ID09PSBCdXR0b25TdGF0ZS5SZXN0IHx8IHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlJlbGVhc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmM6IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5fY0tleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jS2V5ID0gQnV0dG9uU3RhdGUuUHJlc3NlZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY0tleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudjogXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdktleSA9PT0gQnV0dG9uU3RhdGUuUmVzdCB8fCB0aGlzLl92S2V5ID09PSBCdXR0b25TdGF0ZS5SZWxlYXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92QXhpcyA9IGNsYW1wKHRoaXMuX3ZBeGlzKTtcclxuICAgICAgICB0aGlzLl9oQXhpcyA9IGNsYW1wKHRoaXMuX2hBeGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLno6IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fektleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fektleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDogXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCB0aGlzLl94S2V5ID09PSBCdXR0b25TdGF0ZS5IZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlJlbGVhc2VkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl94S2V5ID0gQnV0dG9uU3RhdGUuUmVzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5jOiBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jS2V5ID09PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IHRoaXMuX2NLZXkgPT09IEJ1dHRvblN0YXRlLkhlbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NLZXkgPSBCdXR0b25TdGF0ZS5SZXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnY6IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fdktleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdktleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdkF4aXMgPSBjbGFtcCh0aGlzLl92QXhpcyk7XHJcbiAgICAgICAgdGhpcy5faEF4aXMgPSBjbGFtcCh0aGlzLl9oQXhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBhOiBudW1iZXIgPSAtMSwgYjogbnVtYmVyID0gMSkge1xyXG4gICAgaWYgKHZhbHVlIDwgYSkgcmV0dXJuIGE7XHJcbiAgICBpZiAodmFsdWUgPiBiKSByZXR1cm4gYjtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28ae2OQzsFN+6aNxTuvpevg', 'Controller');
// scripts/input/Controller.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var IInputControls_1 = require("./IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputSource = null;
        return _this;
    }
    Controller.prototype.start = function () {
        this.registerInput(this.node.getComponents(cc.Component).find(function (component) { return IInputControls_1.hasImplementedInputControls(component); }));
    };
    Controller.prototype.registerInput = function (input) {
        if (input !== null)
            this.inputSource = input;
    };
    return Controller;
}(cc.Component));
exports.default = Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7QUFFbkcsbURBQStFO0FBRXpFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWlELDhCQUFZO0lBQTdEO1FBQUEscUVBV0M7UUFUYSxpQkFBVyxHQUFtQixJQUFJLENBQUM7O0lBU2pELENBQUM7SUFSRywwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsNENBQTJCLENBQU0sU0FBUyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFDTSxrQ0FBYSxHQUFwQixVQUFxQixLQUFxQjtRQUN0QyxJQUFHLEtBQUssS0FBSyxJQUFJO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWGdELEVBQUUsQ0FBQyxTQUFTLEdBVzVEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgaGFzSW1wbGVtZW50ZWRJbnB1dENvbnRyb2xzLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByb3RlY3RlZCBpbnB1dFNvdXJjZTogSUlucHV0Q29udHJvbHMgPSBudWxsO1xuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoPGFueT50aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpLmZpbmQoY29tcG9uZW50ID0+IGhhc0ltcGxlbWVudGVkSW5wdXRDb250cm9scyg8YW55PmNvbXBvbmVudCkpKTtcbiAgICB9XG4gICAgcHVibGljIHJlZ2lzdGVySW5wdXQoaW5wdXQ6IElJbnB1dENvbnRyb2xzKSB7XG4gICAgICAgIGlmKGlucHV0ICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5pbnB1dFNvdXJjZSA9IGlucHV0O1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89a10c6NgNMSaSJuLQEf/RT', 'GameManager');
// scripts/GameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.LevelLabel = null;
        _this.usernameLabel = null;
        _this.maxhp = 10;
        _this.player = null;
        _this.VolumnValue = null;
        _this.Level = 1;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        var pauseBtnNode = cc.find("Canvas/Main Camera/UI/Pause");
        if (pauseBtnNode) {
            var PauseButton = new cc.Component.EventHandler();
            PauseButton.target = this.node;
            PauseButton.component = "GameManager";
            PauseButton.handler = "PauseGame";
            pauseBtnNode.getComponent(cc.Button).clickEvents.push(PauseButton);
        }
        else {
            cc.error("Pause 按鈕節點找不到，請檢查 Canvas/Main Camera/UI/Pause 是否存在！");
        }
        // Initialize the level label
        this.LevelLabel = cc.find("Canvas/Main Camera/UI/Level").getComponent(cc.Label);
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level label not found");
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        //assign blank space for next level
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.log("Is Firebase initialized?", window._firebaseInited);
        /*const firebaseConfig = {
            apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
            authDomain: "rune-raids.firebaseapp.com",
            projectId: "rune-raids",
            storageBucket: "rune-raids.firebasestorage.app",
            messagingSenderId: "530514360843",
            appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
            measurementId: "G-B1C5FG1YSN"
        };*/
        if (!window._firebaseInited) {
            firebase.initializeApp(firebaseConfig);
            window._firebaseInited = true;
            cc.log("✅ Firebase initialized in GameManager.ts");
        }
        else {
            cc.log("ℹ️ Firebase already initialized");
        }
        //firebase 取得username
        var user = firebase.auth().currentUser;
        if (user) {
            this.usernameLabel.string = user.displayName || "Guest";
            console.log("User logged in:", user.displayName);
        }
        else
            console.log("User not logged in");
    };
    GameManager.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.space) {
            this.GoNextLevel();
        }
    };
    GameManager.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            this.VolumnValue = Number(savedVolumn);
        else
            this.VolumnValue = 0.5;
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        this.playMusic();
        this.startGame();
    };
    GameManager.prototype.PauseGame = function () {
        var _this = this;
        console.log("Pause prefab load");
        //Pausesetting is a prefab
        cc.resources.load("prefabs/PauseSetting", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load PauseSetting prefab:", err);
                return;
            }
            var PauseNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            Canvas.addChild(PauseNode);
            PauseNode.name = "PauseSetting";
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                PauseNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                PauseNode.setPosition(0, 0);
            }
            PauseNode.scaleX = 1;
            PauseNode.scaleY = 1;
            //Pause the game，停止鍵盤事件
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, _this.onKeyDown, _this);
            cc.director.getScheduler().setTimeScale(0);
            cc.director.getPhysicsManager().enabled = false;
            var Canvas = cc.find("Canvas");
            _this.PauseAllAnimation(Canvas);
            _this.initPause();
        });
        console.log("Pause prefab load...");
    };
    GameManager.prototype.initPause = function () {
        //Resume button
        var ResumeButton = new cc.Component.EventHandler();
        ResumeButton.target = this.node;
        ResumeButton.component = "GameManager";
        ResumeButton.handler = "ResumeGame";
        cc.find("Canvas/PauseSetting/Resume").getComponent(cc.Button).clickEvents.push(ResumeButton);
        //Volumn slider
        var VolumnSlider = cc.find("Canvas/PauseSetting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            VolumnSlider.progress = Number(savedVolumn);
        else
            VolumnSlider.progress = 0.5;
        VolumnSlider.node.on('slide', this.onVolumnChange, this);
        //Restart button
        var RestartButton = new cc.Component.EventHandler();
        RestartButton.target = this.node;
        RestartButton.component = "GameManager";
        RestartButton.handler = "RestartGame";
        cc.find("Canvas/PauseSetting/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
        //
        var DescButton = new cc.Component.EventHandler();
        DescButton.target = this.node;
        DescButton.component = "GameManager";
        DescButton.handler = "showDesc";
        cc.find("Canvas/PauseSetting/How").getComponent(cc.Button).clickEvents.push(DescButton);
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
        var ExitDescButton = new cc.Component.EventHandler();
        ExitDescButton.target = this.node;
        ExitDescButton.component = "GameManager";
        ExitDescButton.handler = "HideDesc";
        cc.find("Canvas/PauseSetting/Description/Exit").getComponent(cc.Button).clickEvents.push(ExitDescButton);
    };
    GameManager.prototype.HideDesc = function () {
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
    };
    GameManager.prototype.showDesc = function () {
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = true;
    };
    GameManager.prototype.RestartGame = function () {
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        var Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("menu");
        });
        //Destroy Pausetting node if it exists
        //let PauseSettingNode = cc.find("Canvas/Pausetting");
        //if (PauseSettingNode) PauseSettingNode.destroy();
        //else cc.error("PauseSetting node not found");
    };
    GameManager.prototype.ResumeGame = function () {
        var PauseSettingNode = cc.find("Canvas/PauseSetting");
        if (PauseSettingNode)
            PauseSettingNode.destroy();
        else
            cc.error("PauseSetting node not found");
        //Resume the game
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        var Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);
    };
    GameManager.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    GameManager.prototype.PauseAllAnimation = function (node) {
        var anims = node.getComponentsInChildren(cc.Animation);
        for (var _i = 0, anims_1 = anims; _i < anims_1.length; _i++) {
            var anim = anims_1[_i];
            if (anim)
                anim.pause();
            else
                cc.error("Animation component not found on node:", node.name);
        }
        var children = node.children;
        for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
            var child = children_1[_a];
            this.PauseAllAnimation(child);
        }
    };
    GameManager.prototype.ResumeAllAnimation = function (node) {
        var anims = node.getComponentsInChildren(cc.Animation);
        for (var _i = 0, anims_2 = anims; _i < anims_2.length; _i++) {
            var anim = anims_2[_i];
            if (anim)
                anim.resume();
            else
                cc.error("Animation component not found on node:", node.name);
        }
        var children = node.children;
        for (var _a = 0, children_2 = children; _a < children_2.length; _a++) {
            var child = children_2[_a];
            this.ResumeAllAnimation(child);
        }
    };
    GameManager.prototype.playMusic = function () {
        if (this.bgm)
            cc.audioEngine.playMusic(this.bgm, true);
        else
            cc.error("BGM not assigned!");
    };
    GameManager.prototype.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    GameManager.prototype.resumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    GameManager.prototype.startGame = function () {
        //Initialize the game state
        this.Level = 1;
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level Label not found");
        //set player position
        this.player.getComponent("Player").SetPlayer(this.Level);
        //set Map
        var GenMap = cc.find("GameManager").getComponent("MapGenerator");
        GenMap.GeneratorMap();
        //set monster
        var MonsterMgr = cc.find("Canvas/MapManager/MonsterManager").getComponent("MonsterManager");
        MonsterMgr.SetMonster(this.Level);
    };
    GameManager.prototype.GoNextLevel = function () {
        var _a, _b, _c, _d;
        this.Level++;
        this.saveProgress(this.Level);
        if (this.LevelLabel) {
            this.LevelLabel.string = "Level: " + this.Level;
        }
        else {
            cc.error("Level label not found");
        }
        // regenerate the map
        var mapGen = (_a = cc.find("GameManager")) === null || _a === void 0 ? void 0 : _a.getComponent("MapGenerator");
        if (mapGen) {
            mapGen.regenerateMap(this.Level);
        }
        else {
            cc.error("MapGenerator component not found");
        }
        // reset player position
        var playerComp = (_b = this.player) === null || _b === void 0 ? void 0 : _b.getComponent("Player");
        if (playerComp) {
            playerComp.SetPlayer(this.Level);
        }
        else {
            cc.error("Player component not found");
        }
        // reset monster
        var monsterMgr = (_c = cc.find("Canvas/MapManager/MonsterManager")) === null || _c === void 0 ? void 0 : _c.getComponent("MonsterManager");
        if (monsterMgr) {
            monsterMgr.SetMonster(this.Level);
        }
        // adjust camera zoom and UI scaling
        var camera = (_d = cc.find("Canvas/Main Camera")) === null || _d === void 0 ? void 0 : _d.getComponent(cc.Camera);
        if (camera) {
            camera.zoomRatio *= 0.99;
            var UI = cc.find("Canvas/Main Camera/UI");
            if (UI) {
                UI.setPosition(0, 0);
                UI.scaleX = 1 / camera.zoomRatio;
                UI.scaleY = 1 / camera.zoomRatio;
            }
            else {
                cc.log("UI not found");
            }
        }
    };
    GameManager.prototype.EndGame = function () {
        var _this = this;
        cc.resources.load("prefabs/GameOver", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load GameOver prefab:", err);
                return;
            }
            var GameOverNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            Canvas.addChild(GameOverNode, 1, 'GameOver');
            //視窗正中間
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                GameOverNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                GameOverNode.setPosition(0, 0);
            }
            var RestartButton = new cc.Component.EventHandler();
            RestartButton.target = _this.node;
            RestartButton.component = "GameManager";
            RestartButton.handler = "RestartGame";
            cc.find("Canvas/GameOver/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
            var end = cc.find("Canvas/GameOver/player").getComponent(cc.Animation);
            //game over animation
            _this.scheduleOnce(function () {
                end.play("gameover");
            });
        });
    };
    GameManager.prototype.saveProgress = function (level) {
        cc.log("Saving progress for level:", level);
        if (!window._firebaseInited) {
            cc.warn("Firebase not initialized.");
            return;
        }
        var user = firebase.auth().currentUser;
        if (!user) {
            cc.warn("User not logged in.");
            return;
        }
        var userRef = firebase.database().ref("leaderboard/" + user.uid);
        userRef.once("value").then(function (snapshot) {
            var existing = snapshot.val();
            var previousLevel = (existing === null || existing === void 0 ? void 0 : existing.highestLevel) || 0;
            if (level > previousLevel) {
                userRef.set({
                    username: user.displayName || "Unknown",
                    highestLevel: level,
                    lastUpdate: firebase.database.ServerValue.TIMESTAMP
                }).then(function () {
                    cc.log("\u2705 Updated Realtime DB for " + (user.displayName || "Unknown") + ": Level " + level);
                }).catch(function (err) {
                    cc.error("❌ Failed to write to Realtime DB:", err);
                });
            }
            else {
                cc.log("No update needed — previous level is higher or equal.");
            }
        }).catch(function (err) {
            cc.error("❌ Failed to read from Realtime DB:", err);
        });
    };
    GameManager.prototype.loadLeaderboard = function () {
        var dbRef = firebase.database().ref("leaderboard");
        dbRef.once("value")
            .then(function (snapshot) {
            var data = snapshot.val();
            if (!data) {
                cc.log("Leaderboard is empty.");
                return;
            }
            var sorted = Object.values(data)
                .sort(function (a, b) { return b.highestLevel - a.highestLevel; })
                .slice(0, 10);
            sorted.forEach(function (entry, index) {
                cc.log("#" + (index + 1) + " " + entry.username + ": Level " + entry.highestLevel);
            });
        })
            .catch(function (err) {
            cc.error("❌ Failed to load leaderboard from Realtime DB:", err);
        });
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "LevelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "usernameLabel", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFZNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUErWEM7UUE3WFUsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFOUIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBa1g3QixDQUFDO0lBaFhHLDRCQUFNLEdBQU47UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUNuRTtRQUNELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJB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RCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTVYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7NENBQ0Q7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDbUI7SUFSckIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQStYL0I7SUFBRCxrQkFBQztDQS9YRCxBQStYQyxDQS9Yd0MsRUFBRSxDQUFDLFNBQVMsR0ErWHBEO2tCQS9Yb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBMb2FkaW5nTWFuYWdlciBmcm9tIFwiLi9NZW51L0xvYWRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuLy9mb3IgRmlyZWJhc2UgaW5pdGlhbGl6YXRpb25cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgX2ZpcmViYXNlSW5pdGVkPzogYm9vbGVhbjtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwdWJsaWMgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGljIHVzZXJuYW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1heGhwOiBudW1iZXIgPSAxMDtcclxuICAgIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZSA6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgTGV2ZWw6IG51bWJlciA9IDE7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgbGV0IHBhdXNlQnRuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUGF1c2VcIik7IFxyXG4gICAgICAgIGlmIChwYXVzZUJ0bk5vZGUpIHtcclxuICAgICAgICAgICAgbGV0IFBhdXNlQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgUGF1c2VCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBQYXVzZUJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLmhhbmRsZXIgPSBcIlBhdXNlR2FtZVwiO1xyXG4gICAgICAgICAgICBwYXVzZUJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChQYXVzZUJ1dHRvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJQYXVzZSDmjInpiJXnr4Dpu57mib7kuI3liLDvvIzoq4vmqqLmn6UgQ2FudmFzL01haW4gQ2FtZXJhL1VJL1BhdXNlIOaYr+WQpuWtmOWcqO+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgbGV2ZWwgbGFiZWxcclxuICAgICAgICB0aGlzLkxldmVsTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL0xldmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiICsgdGhpcy5MZXZlbDtcclxuICAgICAgICBlbHNlIGNjLmVycm9yKFwiTGV2ZWwgbGFiZWwgbm90IGZvdW5kXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpO1xyXG5cclxuICAgICAgICAvL2Fzc2lnbiBibGFuayBzcGFjZSBmb3IgbmV4dCBsZXZlbFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLmxvZyhcIklzIEZpcmViYXNlIGluaXRpYWxpemVkP1wiLCB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKTtcclxuXHJcbiAgICAgICAgLypjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeURGVzQtZW1XZEkxZ2hnWldXR3Axd3FvV3ZBdlR3QXFyUVwiLFxyXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgICAgIHByb2plY3RJZDogXCJydW5lLXJhaWRzXCIsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxyXG4gICAgICAgICAgICBhcHBJZDogXCIxOjUzMDUxNDM2MDg0Mzp3ZWI6MWNkZGE5ZDcyYmI0YjUyOTMyMjUwZVwiLFxyXG4gICAgICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbiAgICAgICAgfTsqL1xyXG5cclxuICAgICAgICBpZiAoIXdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fZmlyZWJhc2VJbml0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLinIUgRmlyZWJhc2UgaW5pdGlhbGl6ZWQgaW4gR2FtZU1hbmFnZXIudHNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi4oS577iPIEZpcmViYXNlIGFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZmlyZWJhc2Ug5Y+W5b6XdXNlcm5hbWVcclxuICAgICAgICBjb25zdCB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWVMYWJlbC5zdHJpbmcgPSB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiR3Vlc3RcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGxvZ2dlZCBpbjpcIiwgdXNlci5kaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiVXNlciBub3QgbG9nZ2VkIGluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLkdvTmV4dExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4hPT1udWxsKSB0aGlzLlZvbHVtblZhbHVlID0gTnVtYmVyKHNhdmVkVm9sdW1uKTtcclxuICAgICAgICBlbHNlIHRoaXMuVm9sdW1uVmFsdWUgPSAwLjU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcclxuICAgICAgICB0aGlzLnBsYXlNdXNpYygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFBhdXNlR2FtZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlIHByZWZhYiBsb2FkXCIpO1xyXG4gICAgICAgIC8vUGF1c2VzZXR0aW5nIGlzIGEgcHJlZmFiXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL1BhdXNlU2V0dGluZ1wiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFBhdXNlU2V0dGluZyBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IFBhdXNlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIGNvbnN0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIENhbnZhcy5hZGRDaGlsZChQYXVzZU5vZGUpO1xyXG4gICAgICAgICAgICBQYXVzZU5vZGUubmFtZSA9IFwiUGF1c2VTZXR0aW5nXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FtZXJhTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gQ2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgICAgIFBhdXNlTm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5om+5LiN5YiwIE1haW4gQ2FtZXJhLCDkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xyXG4gICAgICAgICAgICAgICAgUGF1c2VOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBQYXVzZU5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWSA9IDE7XHJcbiAgICAgICAgICAgIC8vUGF1c2UgdGhlIGdhbWXvvIzlgZzmraLpjbXnm6Tkuovku7ZcclxuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5QYXVzZUFsbEFuaW1hdGlvbihDYW52YXMpOyBcclxuICAgICAgICAgICAgdGhpcy5pbml0UGF1c2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF1c2UgcHJlZmFiIGxvYWQuLi5cIik7XHJcblxyXG4gICAgfVxyXG4gICAgaW5pdFBhdXNlKCkge1xyXG4gICAgICAgIC8vUmVzdW1lIGJ1dHRvblxyXG4gICAgICAgIGxldCBSZXN1bWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFJlc3VtZUJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgUmVzdW1lQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN1bWVCdXR0b24uaGFuZGxlciA9IFwiUmVzdW1lR2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3VtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3VtZUJ1dHRvbik7XHJcbiAgICAgICAgLy9Wb2x1bW4gc2xpZGVyXHJcbiAgICAgICAgbGV0IFZvbHVtblNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1ZvbHVtbi9Wb2x1bW5TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uICE9PSBudWxsKSBWb2x1bW5TbGlkZXIucHJvZ3Jlc3M9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSBWb2x1bW5TbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XHJcbiAgICAgICAgVm9sdW1uU2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XHJcbiAgICAgICAgLy9SZXN0YXJ0IGJ1dHRvblxyXG4gICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvUmVzdGFydFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFJlc3RhcnRCdXR0b24pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IERlc2NCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIERlc2NCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIERlc2NCdXR0b24uaGFuZGxlciA9IFwic2hvd0Rlc2NcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Ib3dcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChEZXNjQnV0dG9uKTtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IEV4aXREZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBFeGl0RGVzY0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgRXhpdERlc2NCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmhhbmRsZXIgPSBcIkhpZGVEZXNjXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb24vRXhpdFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKEV4aXREZXNjQnV0dG9uKTtcclxuICAgIH1cclxuICAgIEhpZGVEZXNjKCkge1xyXG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgRGVzYy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNob3dEZXNjKCkge1xyXG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgRGVzYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgUmVzdGFydEdhbWUoKSB7Ly9SZXN0YXJ0IHRoZSBnYW1lID0+IGJhY2sgdG8gbWVudVxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihDYW52YXMpOyAgICBcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwibWVudVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0Rlc3Ryb3kgUGF1c2V0dGluZyBub2RlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIC8vbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNldHRpbmdcIik7XHJcbiAgICAgICAgLy9pZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy9lbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIFJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZ1wiKTtcclxuICAgICAgICBpZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIlBhdXNlU2V0dGluZyBub2RlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvL1Jlc3VtZSB0aGUgZ2FtZVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7IFxyXG4gICAgfVxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBQYXVzZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGF1c2UoKTtcclxuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlBhdXNlQWxsQW5pbWF0aW9uKGNoaWxkKTtcclxuICAgIH1cclxuICAgIFJlc3VtZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGVsc2UgIGNjLmVycm9yKFwiQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgb24gbm9kZTpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlNdXNpYygpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkJHTSBub3QgYXNzaWduZWQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZU11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgLy9Jbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXHJcbiAgICAgICAgdGhpcy5MZXZlbCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBMYWJlbCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgLy9zZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLlNldFBsYXllcih0aGlzLkxldmVsKTtcclxuICAgICAgICAvL3NldCBNYXBcclxuICAgICAgICBsZXQgR2VuTWFwID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1hcEdlbmVyYXRvclwiKTtcclxuICAgICAgICBHZW5NYXAuR2VuZXJhdG9yTWFwKCk7XHJcbiAgICAgICAgLy9zZXQgbW9uc3RlclxyXG4gICAgICAgIGxldCBNb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIE1vbnN0ZXJNZ3IuU2V0TW9uc3Rlcih0aGlzLkxldmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdvTmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMuTGV2ZWwrKztcclxuICAgICAgICB0aGlzLnNhdmVQcm9ncmVzcyh0aGlzLkxldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTGV2ZWwgbGFiZWwgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVnZW5lcmF0ZSB0aGUgbWFwXHJcbiAgICAgICAgY29uc3QgbWFwR2VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XHJcbiAgICAgICAgaWYgKG1hcEdlbikge1xyXG4gICAgICAgICAgICBtYXBHZW4ucmVnZW5lcmF0ZU1hcCh0aGlzLkxldmVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIk1hcEdlbmVyYXRvciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyPy5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgcGxheWVyQ29tcC5TZXRQbGF5ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJQbGF5ZXIgY29tcG9uZW50IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vbnN0ZXJcclxuICAgICAgICBjb25zdCBtb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcclxuICAgICAgICBpZiAobW9uc3Rlck1ncikge1xyXG4gICAgICAgICAgICBtb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGp1c3QgY2FtZXJhIHpvb20gYW5kIFVJIHNjYWxpbmdcclxuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpPy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBpZiAoY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYS56b29tUmF0aW8gKj0gMC45OTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFVJID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKTtcclxuICAgICAgICAgICAgaWYgKFVJKSB7XHJcbiAgICAgICAgICAgICAgICBVSS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgIFVJLnNjYWxlWCA9IDEgLyBjYW1lcmEuem9vbVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgVUkuc2NhbGVZID0gMSAvIGNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJVSSBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRW5kR2FtZSgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR2FtZU92ZXJcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBHYW1lT3ZlciBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgR2FtZU92ZXJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgQ2FudmFzLmFkZENoaWxkKEdhbWVPdmVyTm9kZSwxLCdHYW1lT3ZlcicpO1xyXG4gICAgICAgICAgICAvL+imlueql+ato+S4remWk1xyXG4gICAgICAgICAgICBsZXQgY2FtZXJhTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gQ2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgICAgIEdhbWVPdmVyTm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5om+5LiN5YiwIE1haW4gQ2FtZXJhLCDkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xyXG4gICAgICAgICAgICAgICAgR2FtZU92ZXJOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9HYW1lT3Zlci9SZXN0YXJ0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUmVzdGFydEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGxldCBlbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVPdmVyL3BsYXllclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAvL2dhbWUgb3ZlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+eyBcclxuICAgICAgICAgICAgZW5kLnBsYXkoXCJnYW1lb3ZlclwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2F2ZVByb2dyZXNzKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICBjYy5sb2coXCJTYXZpbmcgcHJvZ3Jlc3MgZm9yIGxldmVsOlwiLCBsZXZlbCk7XHJcblxyXG4gICAgICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIlVzZXIgbm90IGxvZ2dlZCBpbi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkL1wiICsgdXNlci51aWQpO1xyXG5cclxuICAgICAgICB1c2VyUmVmLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTGV2ZWwgPSBleGlzdGluZz8uaGlnaGVzdExldmVsIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPiBwcmV2aW91c0xldmVsKSB7XHJcbiAgICAgICAgICAgIHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgaGlnaGVzdExldmVsOiBsZXZlbCxcclxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGU6IGZpcmViYXNlLmRhdGFiYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhg4pyFIFVwZGF0ZWQgUmVhbHRpbWUgREIgZm9yICR7dXNlci5kaXNwbGF5TmFtZSB8fCBcIlVua25vd25cIn06IExldmVsICR7bGV2ZWx9YCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIHdyaXRlIHRvIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiTm8gdXBkYXRlIG5lZWRlZCDigJQgcHJldmlvdXMgbGV2ZWwgaXMgaGlnaGVyIG9yIGVxdWFsLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCBGYWlsZWQgdG8gcmVhZCBmcm9tIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkTGVhZGVyYm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgZGJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkXCIpO1xyXG4gICAgICAgIGRiUmVmLm9uY2UoXCJ2YWx1ZVwiKVxyXG4gICAgICAgICAgICAudGhlbigoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiTGVhZGVyYm9hcmQgaXMgZW1wdHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBPYmplY3QudmFsdWVzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIuaGlnaGVzdExldmVsIC0gYS5oaWdoZXN0TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKGVudHJ5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgIyR7aW5kZXggKyAxfSAke2VudHJ5LnVzZXJuYW1lfTogTGV2ZWwgJHtlbnRyeS5oaWdoZXN0TGV2ZWx9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIEZhaWxlZCB0byBsb2FkIGxlYWRlcmJvYXJkIGZyb20gUmVhbHRpbWUgREI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utilities/ZSortOnLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1855dXZEzdGf7iIoaoAeRs6', 'ZSortOnLoad');
// scripts/utilities/ZSortOnLoad.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * A component that makes every node below the node it is attached to render in a way
 * such that it appears behind nodes that are located below it.
 */
var ZSortOnLoad = /** @class */ (function (_super) {
    __extends(ZSortOnLoad, _super);
    function ZSortOnLoad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    ZSortOnLoad.prototype.onLoad = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var node = _a[_i];
            node.zIndex = 10000 + -node.y;
        }
    };
    ZSortOnLoad = __decorate([
        ccclass
    ], ZSortOnLoad);
    return ZSortOnLoad;
}(cc.Component));
exports.default = ZSortOnLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxpdGllcy9aU29ydE9uTG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7O0dBR0c7QUFFSDtJQUF5QywrQkFBWTtJQUFyRDs7SUFlQSxDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLDRCQUFNLEdBQU47UUFDSSxLQUFpQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQWhDLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQVJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZS9CO0lBQUQsa0JBQUM7Q0FmRCxBQWVDLENBZndDLEVBQUUsQ0FBQyxTQUFTLEdBZXBEO2tCQWZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBldmVyeSBub2RlIGJlbG93IHRoZSBub2RlIGl0IGlzIGF0dGFjaGVkIHRvIHJlbmRlciBpbiBhIHdheSBcbiAqIHN1Y2ggdGhhdCBpdCBhcHBlYXJzIGJlaGluZCBub2RlcyB0aGF0IGFyZSBsb2NhdGVkIGJlbG93IGl0LlxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlNvcnRPbkxvYWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMDAwMCArIC1ub2RlLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdGFydCAoKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/chest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb56d6Gb/dNLqqqC/gApn0D', 'chest');
// scripts/obj/chest.ts

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
var Chest = /** @class */ (function (_super) {
    __extends(Chest, _super);
    function Chest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.potionPrefab = null;
        _this.openSound = null;
        _this._animation = null;
        _this._isOpened = false;
        return _this;
    }
    Chest.prototype.onLoad = function () {
    };
    Chest.prototype.onCollisionEnter = function (other, self) {
        if (this._isOpened)
            return;
        if (other.node.name === "Player") {
            //播放開啟寶箱動畫animation
            this.openChest();
            this._isOpened = true;
        }
    };
    Chest.prototype.openChest = function () {
        var anim = this.getComponent(cc.Animation);
        if (anim)
            anim.play("chest_open");
        //藥水放在寶箱的節點之下
        this.scheduleOnce(function () { }, 0.5);
        var potion = cc.instantiate(this.potionPrefab);
        potion.parent = this.node;
        potion.setPosition(this.node.position);
    };
    __decorate([
        property(cc.Prefab)
    ], Chest.prototype, "potionPrefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Chest.prototype, "openSound", void 0);
    Chest = __decorate([
        ccclass
    ], Chest);
    return Chest;
}(cc.Component));
exports.default = Chest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9jaGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWdDQztRQTlCRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUF1QnZDLENBQUM7SUFyQkcsc0JBQU0sR0FBTjtJQUNBLENBQUM7SUFDRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUM7WUFDN0IsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsQyxhQUFhO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFLLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNRO0lBTGQsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdDekI7SUFBRCxZQUFDO0NBaENELEFBZ0NDLENBaENrQyxFQUFFLENBQUMsU0FBUyxHQWdDOUM7a0JBaENvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwb3Rpb25QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIG9wZW5Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2lzT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpe1xuICAgICAgICBpZiAodGhpcy5faXNPcGVuZWQpIHJldHVybjtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZSA9PT0gXCJQbGF5ZXJcIil7XG4gICAgICAgICAgICAvL+aSreaUvumWi+WVn+WvtueuseWLleeVq2FuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hlc3QoKTtcbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcGVuQ2hlc3QoKSB7XG4gICAgICAgIGxldCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheShcImNoZXN0X29wZW5cIik7XG4gICAgICAgIFxuICAgICAgICAvL+iXpeawtOaUvuWcqOWvtueuseeahOevgOm7nuS5i+S4i1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e30sMC41KTtcbiAgICAgICAgY29uc3QgcG90aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wb3Rpb25QcmVmYWIpO1xuICAgICAgICBwb3Rpb24ucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBwb3Rpb24uc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uKTtcblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/strategies/Wanderer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f7aasmeZhNIoYFA83XzaqQ', 'Wanderer');
// scripts/ai/strategies/Wanderer.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wanderer = void 0;
var AgentStrategy_1 = require("./AgentStrategy");
/**
 * An AI strategy that describes a "wandering" behaviour.
 */
var Wanderer = /** @class */ (function (_super) {
    __extends(Wanderer, _super);
    function Wanderer(moveDuration, waitDuration, waitRandomFactor) {
        var _this = _super.call(this) || this;
        /** The agent will move for this long before stopping to wait. */
        _this._moveDuration = 1.0;
        /** The agent will wait for this long before starting to move again. */
        _this._waitDuration = 0.5;
        /** The actual wait duration will be randomized by this factor,
         *  such that the actual wait duration is a random number between
         *  waitDuration x (1 - waitRandomFactor) and
         *  waitDuration x (1 + waitRandomFactor).
        */
        _this._waitRandomFactor = 0.1;
        /** The time point after which the agent should wait. */
        _this._nextWaitTime = 0;
        /** The time point after which the agent should move again. */
        _this._nextMoveTime = 0;
        /** The velocity (vector with magnitude) at which the agent should move. */
        _this._wanderVelocity = cc.Vec2.ZERO;
        /** The agent's output to IInput. */
        _this._moveAxis2D = cc.Vec2.ZERO;
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        // TODO (2.1): Complete the constructor.
        // [SPECIFICATIONS]
        // - Initialize the four private variables above properly.
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        //#region [YOUR IMPLEMENTATION HERE]
        _this._moveDuration = moveDuration;
        _this._waitDuration = waitDuration;
        _this._waitRandomFactor = waitRandomFactor;
        return _this;
        //#endregion
    }
    Object.defineProperty(Wanderer.prototype, "horizontalAxis", {
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        // TODO (2.2): Map moveAxis2D to horizontal and vertical axes.
        // [SPECIFICATIONS]
        // - moveAxis2D.x should be mapped to the horizontal axis.
        // - moveAxis2D.y should be mapped to the vertical axis.
        // - You can leave the remaining unimplemented.
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        get: function () {
            //#region [YOUR IMPLEMENTATION HERE]
            return this._moveAxis2D.x;
            //#endregion
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wanderer.prototype, "verticalAxis", {
        get: function () {
            //#region [YOUR IMPLEMENTATION HERE]
            return this._moveAxis2D.y;
            //#endregion
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wanderer.prototype, "attack", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wanderer.prototype, "interact", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Wanderer.prototype.start = function () {
        this._nextMoveTime = cc.director.getTotalTime() / 1000.0;
        this._nextWaitTime = this._nextMoveTime - this._waitDuration;
    };
    Wanderer.prototype.update = function (dt) {
        /** The current time in the game in seconds. */
        var currentTime = cc.director.getTotalTime() / 1000.0;
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        // TODO (2.3): Implement the behaviour of a wandering agent.
        // [SPECIFICATIONS]
        // 1. The agent should recompute its wandering direction when the
        //    current time (curTime) reaches the next move time (this.nextMoveTime)
        //     - When this happens, recompute the next move time and the next wait 
        //       time.
        //     - Compute the wandering direction as a random 2D vector using the
        //       provided function "randomPointOnCircle".
        // 2. The agent's movement axes (this.moveAxis2D)
        //    should be equal to the wander velocity (this.wanderVelocity) before
        //    the next wait time (this.nextWaitTime). 
        //    OTHERWISE it should be equal to cc.Vec2.ZERO.
        //*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*\\
        //#region [YOUR IMPLEMENTATION HERE]
        if (currentTime >= this._nextMoveTime) {
            this._nextWaitTime = currentTime + this._moveDuration;
            this._nextMoveTime = this._nextWaitTime + this._waitDuration * (1.0 * this._waitRandomFactor * (Math.random() - 2.0 * 1.0));
            this._wanderVelocity = randomPointOnUnitCircle();
        }
        this._moveAxis2D = (currentTime < this._nextWaitTime) ? this._wanderVelocity : cc.Vec2.ZERO;
        //#endregion
    };
    return Wanderer;
}(AgentStrategy_1.AI.Strategy));
exports.Wanderer = Wanderer;
function randomPointOnUnitCircle() {
    var angle = Math.random() * Math.PI * 2;
    return new cc.Vec2(Math.cos(angle), Math.sin(angle));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL3N0cmF0ZWdpZXMvV2FuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlEQUFxQztBQUVyQzs7R0FFRztBQUNIO0lBQThCLDRCQUFXO0lBWXJDLGtCQUFZLFlBQW9CLEVBQUUsWUFBb0IsRUFBRSxnQkFBd0I7UUFBaEYsWUFDSSxpQkFBTyxTQVdWO1FBdkJELGlFQUFpRTtRQUN6RCxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUM1Qix1RUFBdUU7UUFDL0QsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFDNUI7Ozs7VUFJRTtRQUNNLHVCQUFpQixHQUFHLEdBQUcsQ0FBQztRQWdCaEMsd0RBQXdEO1FBQ2hELG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLDhEQUE4RDtRQUN0RCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUMxQiwyRUFBMkU7UUFDbkUscUJBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QyxvQ0FBb0M7UUFDNUIsaUJBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQW5CL0IsNEVBQTRFO1FBQzVFLHdDQUF3QztRQUN4QyxtQkFBbUI7UUFDbkIsMERBQTBEO1FBQzFELDRFQUE0RTtRQUM1RSxvQ0FBb0M7UUFDcEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDOztRQUMxQyxZQUFZO0lBQ2hCLENBQUM7SUFrQkQsc0JBQVcsb0NBQWM7UUFQekIsNEVBQTRFO1FBQzVFLDhEQUE4RDtRQUM5RCxtQkFBbUI7UUFDbkIsMERBQTBEO1FBQzFELHdEQUF3RDtRQUN4RCwrQ0FBK0M7UUFDL0MsNEVBQTRFO2FBQzVFO1lBQ0ksb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsWUFBWTtRQUNoQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGtDQUFZO2FBQXZCO1lBQ0ksb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsWUFBWTtRQUNoQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFNO2FBQWpCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsOEJBQVE7YUFBbkI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFTSx3QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNqRSxDQUFDO0lBQ00seUJBQU0sR0FBYixVQUFjLEVBQVU7UUFDcEIsK0NBQStDO1FBQy9DLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRXRELDRFQUE0RTtRQUM1RSw0REFBNEQ7UUFDNUQsbUJBQW1CO1FBQ25CLGlFQUFpRTtRQUNqRSwyRUFBMkU7UUFDM0UsMkVBQTJFO1FBQzNFLGNBQWM7UUFDZCx3RUFBd0U7UUFDeEUsaURBQWlEO1FBQ2pELGlEQUFpRDtRQUNqRCx5RUFBeUU7UUFDekUsOENBQThDO1FBQzlDLG1EQUFtRDtRQUNuRCw0RUFBNEU7UUFFNUUsb0NBQW9DO1FBQ3BDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFNUgsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsRUFBRSxDQUFBO1NBQ25EO1FBRUQsSUFBSSxDQUFFLFdBQVcsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdGLFlBQVk7SUFDaEIsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTlGQSxBQThGQyxDQTlGNkIsa0JBQUUsQ0FBQyxRQUFRLEdBOEZ4QztBQTlGWSw0QkFBUTtBQWdHckIsU0FBUyx1QkFBdUI7SUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25TdGF0ZSB9IGZyb20gXCIuLi8uLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xuaW1wb3J0IEFnZW50IGZyb20gXCIuLi9BZ2VudFwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9BZ2VudFN0cmF0ZWd5XCI7XG5cbi8qKlxuICogQW4gQUkgc3RyYXRlZ3kgdGhhdCBkZXNjcmliZXMgYSBcIndhbmRlcmluZ1wiIGJlaGF2aW91ci5cbiAqL1xuZXhwb3J0IGNsYXNzIFdhbmRlcmVyIGV4dGVuZHMgQUkuU3RyYXRlZ3kge1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCBtb3ZlIGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0b3BwaW5nIHRvIHdhaXQuICovXG4gICAgcHJpdmF0ZSBfbW92ZUR1cmF0aW9uID0gMS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCB3YWl0IGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUgYWdhaW4uICovXG4gICAgcHJpdmF0ZSBfd2FpdER1cmF0aW9uID0gMC41O1xuICAgIC8qKiBUaGUgYWN0dWFsIHdhaXQgZHVyYXRpb24gd2lsbCBiZSByYW5kb21pemVkIGJ5IHRoaXMgZmFjdG9yLCBcbiAgICAgKiAgc3VjaCB0aGF0IHRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiBpcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlblxuICAgICAqICB3YWl0RHVyYXRpb24geCAoMSAtIHdhaXRSYW5kb21GYWN0b3IpIGFuZCBcbiAgICAgKiAgd2FpdER1cmF0aW9uIHggKDEgKyB3YWl0UmFuZG9tRmFjdG9yKS5cbiAgICAqL1xuICAgIHByaXZhdGUgX3dhaXRSYW5kb21GYWN0b3IgPSAwLjE7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3ZlRHVyYXRpb246IG51bWJlciwgd2FpdER1cmF0aW9uOiBudW1iZXIsIHdhaXRSYW5kb21GYWN0b3I6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcbiAgICAgICAgLy8gVE9ETyAoMi4xKTogQ29tcGxldGUgdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXG4gICAgICAgIC8vIC0gSW5pdGlhbGl6ZSB0aGUgZm91ciBwcml2YXRlIHZhcmlhYmxlcyBhYm92ZSBwcm9wZXJseS5cbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICB0aGlzLl9tb3ZlRHVyYXRpb24gPSBtb3ZlRHVyYXRpb247XG4gICAgICAgIHRoaXMuX3dhaXREdXJhdGlvbiA9IHdhaXREdXJhdGlvbjtcbiAgICAgICAgdGhpcy5fd2FpdFJhbmRvbUZhY3RvciA9IHdhaXRSYW5kb21GYWN0b3I7XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH1cblxuICAgIC8qKiBUaGUgdGltZSBwb2ludCBhZnRlciB3aGljaCB0aGUgYWdlbnQgc2hvdWxkIHdhaXQuICovXG4gICAgcHJpdmF0ZSBfbmV4dFdhaXRUaW1lID0gMDtcbiAgICAvKiogVGhlIHRpbWUgcG9pbnQgYWZ0ZXIgd2hpY2ggdGhlIGFnZW50IHNob3VsZCBtb3ZlIGFnYWluLiAqL1xuICAgIHByaXZhdGUgX25leHRNb3ZlVGltZSA9IDA7XG4gICAgLyoqIFRoZSB2ZWxvY2l0eSAodmVjdG9yIHdpdGggbWFnbml0dWRlKSBhdCB3aGljaCB0aGUgYWdlbnQgc2hvdWxkIG1vdmUuICovXG4gICAgcHJpdmF0ZSBfd2FuZGVyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XG4gICAgLyoqIFRoZSBhZ2VudCdzIG91dHB1dCB0byBJSW5wdXQuICovXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRCA9IGNjLlZlYzIuWkVSTztcblxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgIC8vIFRPRE8gKDIuMik6IE1hcCBtb3ZlQXhpczJEIHRvIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGF4ZXMuXG4gICAgLy8gW1NQRUNJRklDQVRJT05TXVxuICAgIC8vIC0gbW92ZUF4aXMyRC54IHNob3VsZCBiZSBtYXBwZWQgdG8gdGhlIGhvcml6b250YWwgYXhpcy5cbiAgICAvLyAtIG1vdmVBeGlzMkQueSBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICAgIC8vIC0gWW91IGNhbiBsZWF2ZSB0aGUgcmVtYWluaW5nIHVuaW1wbGVtZW50ZWQuXG4gICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpOiBudW1iZXIge1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueDtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCk6IG51bWJlciB7XG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55O1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fbmV4dE1vdmVUaW1lID0gY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwLjA7XG4gICAgICAgIHRoaXMuX25leHRXYWl0VGltZSA9IHRoaXMuX25leHRNb3ZlVGltZSAtIHRoaXMuX3dhaXREdXJhdGlvbjtcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIC8qKiBUaGUgY3VycmVudCB0aW1lIGluIHRoZSBnYW1lIGluIHNlY29uZHMuICovXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IGNjLmRpcmVjdG9yLmdldFRvdGFsVGltZSgpIC8gMTAwMC4wO1xuXG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgICAgICAvLyBUT0RPICgyLjMpOiBJbXBsZW1lbnQgdGhlIGJlaGF2aW91ciBvZiBhIHdhbmRlcmluZyBhZ2VudC5cbiAgICAgICAgLy8gW1NQRUNJRklDQVRJT05TXVxuICAgICAgICAvLyAxLiBUaGUgYWdlbnQgc2hvdWxkIHJlY29tcHV0ZSBpdHMgd2FuZGVyaW5nIGRpcmVjdGlvbiB3aGVuIHRoZVxuICAgICAgICAvLyAgICBjdXJyZW50IHRpbWUgKGN1clRpbWUpIHJlYWNoZXMgdGhlIG5leHQgbW92ZSB0aW1lICh0aGlzLm5leHRNb3ZlVGltZSlcbiAgICAgICAgLy8gICAgIC0gV2hlbiB0aGlzIGhhcHBlbnMsIHJlY29tcHV0ZSB0aGUgbmV4dCBtb3ZlIHRpbWUgYW5kIHRoZSBuZXh0IHdhaXQgXG4gICAgICAgIC8vICAgICAgIHRpbWUuXG4gICAgICAgIC8vICAgICAtIENvbXB1dGUgdGhlIHdhbmRlcmluZyBkaXJlY3Rpb24gYXMgYSByYW5kb20gMkQgdmVjdG9yIHVzaW5nIHRoZVxuICAgICAgICAvLyAgICAgICBwcm92aWRlZCBmdW5jdGlvbiBcInJhbmRvbVBvaW50T25DaXJjbGVcIi5cbiAgICAgICAgLy8gMi4gVGhlIGFnZW50J3MgbW92ZW1lbnQgYXhlcyAodGhpcy5tb3ZlQXhpczJEKVxuICAgICAgICAvLyAgICBzaG91bGQgYmUgZXF1YWwgdG8gdGhlIHdhbmRlciB2ZWxvY2l0eSAodGhpcy53YW5kZXJWZWxvY2l0eSkgYmVmb3JlXG4gICAgICAgIC8vICAgIHRoZSBuZXh0IHdhaXQgdGltZSAodGhpcy5uZXh0V2FpdFRpbWUpLiBcbiAgICAgICAgLy8gICAgT1RIRVJXSVNFIGl0IHNob3VsZCBiZSBlcXVhbCB0byBjYy5WZWMyLlpFUk8uXG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICBpZiAoY3VycmVudFRpbWUgPj0gdGhpcy5fbmV4dE1vdmVUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0V2FpdFRpbWUgPSBjdXJyZW50VGltZSArIHRoaXMuX21vdmVEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX25leHRNb3ZlVGltZSA9IHRoaXMuX25leHRXYWl0VGltZSArIHRoaXMuX3dhaXREdXJhdGlvbiAqICgxLjAgKiB0aGlzLl93YWl0UmFuZG9tRmFjdG9yICogKE1hdGgucmFuZG9tKCkgLSAyLjAgKiAxLjApKTtcblxuICAgICAgICAgICAgdGhpcy5fd2FuZGVyVmVsb2NpdHkgPSByYW5kb21Qb2ludE9uVW5pdENpcmNsZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzIC5fbW92ZUF4aXMyRCA9IChjdXJyZW50VGltZSA8IHRoaXMuX25leHRXYWl0VGltZSkgPyB0aGlzLl93YW5kZXJWZWxvY2l0eSA6IGNjLlZlYzIuWkVSTztcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJhbmRvbVBvaW50T25Vbml0Q2lyY2xlKCkge1xuICAgIGxldCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICByZXR1cm4gbmV3IGNjLlZlYzIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/Key.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '793feh1sfZEEYJ5zYzkepR2', 'Key');
// scripts/obj/Key.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.anim = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    NewClass.prototype.update = function (dt) {
        if (!this.anim.getAnimationState('key-gold').isPlaying) {
            this.anim.play('key-gold');
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9LZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWYsVUFBSSxHQUFpQixJQUFJLENBQUM7O0lBZ0J0QyxDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdCNUI7SUFBRCxlQUFDO0NBeEJELEFBd0JDLENBeEJxQyxFQUFFLENBQUMsU0FBUyxHQXdCakQ7a0JBeEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgna2V5LWdvbGQnKS5pc1BsYXlpbmcpe1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2tleS1nb2xkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/SuccessPopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3764DDp7JFh4sQoYTrrh15', 'SuccessPopup');
// scripts/Menu/SuccessPopup.ts

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
var SuccessPopup = /** @class */ (function (_super) {
    __extends(SuccessPopup, _super);
    function SuccessPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.background = null;
        // Called by Menu code when OK is clicked
        _this.onOk = null;
        return _this;
    }
    SuccessPopup.prototype.onLoad = function () {
        var _this = this;
        var okBtn = cc.find("OKButton", this.node).getComponent(cc.Button);
        okBtn.node.on('click', function () {
            if (_this.onOk)
                _this.onOk();
            _this.node.destroy();
        });
    };
    __decorate([
        property(cc.Label)
    ], SuccessPopup.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], SuccessPopup.prototype, "background", void 0);
    SuccessPopup = __decorate([
        ccclass('SuccessPopup')
    ], SuccessPopup);
    return SuccessPopup;
}(cc.Component));
exports.default = SuccessPopup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcU3VjY2Vzc1BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBYUM7UUFacUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDOUMseUNBQXlDO1FBQ2xDLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVMxQyxDQUFDO0lBUEMsNkJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWG1CO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUErQjtJQUMvQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFBNEI7SUFGM0IsWUFBWTtRQURoQyxPQUFPLENBQUMsY0FBYyxDQUFDO09BQ0gsWUFBWSxDQWFoQztJQUFELG1CQUFDO0NBYkQsQUFhQyxDQWJ5QyxFQUFFLENBQUMsU0FBUyxHQWFyRDtrQkFib0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xyXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnU3VjY2Vzc1BvcHVwJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VjY2Vzc1BvcHVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAvLyBDYWxsZWQgYnkgTWVudSBjb2RlIHdoZW4gT0sgaXMgY2xpY2tlZFxyXG4gIHB1YmxpYyBvbk9rOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3Qgb2tCdG4gPSBjYy5maW5kKFwiT0tCdXR0b25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIG9rQnRuLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vbk9rKSB0aGlzLm9uT2soKTtcclxuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ActorController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a55dft7PvVIPIFEJDrlEbfj', 'ActorController');
// scripts/ActorController.ts

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
var Controller_1 = require("./input/Controller");
var IInputControls_1 = require("./input/IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Idle"] = 0] = "Idle";
    PlayerState[PlayerState["Walk"] = 1] = "Walk";
    PlayerState[PlayerState["Attack"] = 2] = "Attack";
    PlayerState[PlayerState["Attack2"] = 3] = "Attack2";
    PlayerState[PlayerState["Attack3"] = 4] = "Attack3";
    PlayerState[PlayerState["Hurt"] = 5] = "Hurt";
    PlayerState[PlayerState["Die"] = 6] = "Die";
    PlayerState[PlayerState["Combo_1"] = 7] = "Combo_1";
})(PlayerState || (PlayerState = {}));
var FacingDirection;
(function (FacingDirection) {
    FacingDirection[FacingDirection["Right"] = 0] = "Right";
    FacingDirection[FacingDirection["Left"] = 1] = "Left";
    FacingDirection[FacingDirection["Up"] = 2] = "Up";
    FacingDirection[FacingDirection["Down"] = 3] = "Down";
})(FacingDirection || (FacingDirection = {}));
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
/**
 * A component that implements movement and actions for each actor.
 * Toggle "Use Player Input" to read from player input.
 */
var ActorController = /** @class */ (function (_super) {
    __extends(ActorController, _super);
    function ActorController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialFacingDirection = FacingDirection.Right;
        _this.player = null;
        _this._animation = null;
        _this._animState = null;
        _this._rigidbody = null;
        _this.idleAnimationName = "";
        _this.moveAnimationName = "";
        _this._idleAnimState = null;
        _this._moveAnimState = null;
        _this.walkRightAnimation = "player_walk_right";
        _this.walkLeftAnimation = "player_walk_left";
        _this.walkUpAnimation = "player_walk_up";
        _this.walkDownAnimation = "player_walk_down";
        _this.idleAnimation = "player_standby";
        _this.attack_right = "attack_right-1";
        _this.attack_left = "attack_left-1";
        _this.attack_up = "attack_up-1";
        _this.attack_down = "attack_down-1";
        _this.attack_right_2 = "attack_right-2";
        _this.attack_left_2 = "attack_left-2";
        _this.attack_up_2 = "attack_up-2";
        _this.attack_down_2 = "attack_down-2";
        _this.attack_right_3 = "attack_right-3";
        _this.attack_left_3 = "attack_left-3";
        _this.attack_up_3 = "attack_up-3";
        _this.attack_down_3 = "attack_down-3";
        _this.death_right = "death_right";
        _this.death_left = "death_left";
        _this.death_up = "death_up";
        _this.death_down = "death_down";
        _this.hurt_right = "hurt_right";
        _this.hurt_left = "hurt_left";
        _this.hurt_up = "hurt_up";
        _this.hurt_down = "hurt_down";
        _this.combo_right_1 = "combo-1_right";
        _this.combo_left_1 = "combo-1_left";
        _this.combo_up_1 = "combo-1_up";
        _this.combo_down_1 = "combo-1_down";
        _this.moveSpeed = 60;
        _this.moveAxisX = 0;
        _this.moveAxisY = 0;
        _this._playerState = PlayerState.Idle;
        _this._facing = FacingDirection.Down; // 預設朝下
        _this._lastAnim = "";
        _this.combostep = 0;
        _this.combotimer = 0;
        _this.comboInterval = 1;
        return _this;
    }
    Object.defineProperty(ActorController.prototype, "moveAxis2D", {
        get: function () {
            return new cc.Vec2(this.moveAxisX, this.moveAxisY);
        },
        enumerable: false,
        configurable: true
    });
    ActorController.prototype.onLoad = function () {
        this._animation = this.node.getComponent(cc.Animation);
        if (!this._animation)
            console.warn("ActorController: Component cc.Animation missing on node " + this.node.name);
        this._rigidbody = this.node.getComponent(cc.RigidBody);
        if (!this._rigidbody)
            console.warn("ActorController: Component cc.RigidBody missing on node " + this.node.name);
    };
    ActorController.prototype.start = function () {
        _super.prototype.start && _super.prototype.start.call(this);
        if (this._animation) {
            this._idleAnimState = this._animation.getAnimationState(this.idleAnimationName);
            this._moveAnimState = this._animation.getAnimationState(this.moveAnimationName);
            this._animState = this._animation.play(this.idleAnimationName);
            this._animation.on('finished', this.onAnimFinished, this);
        }
    };
    ActorController.prototype.update = function (dt) {
        if (this._playerState === PlayerState.Die)
            return;
        if (this.combostep > 0) {
            this.combotimer += dt;
            if (this.combotimer >= this.comboInterval) {
                this.combostep = 0;
            }
        }
        if (this.inputSource) {
            if (this.incombo())
                return;
            this.moveAxisX = this.inputSource.horizontalAxis;
            this.moveAxisY = this.inputSource.verticalAxis;
            var velocity = this.moveAxis2D.mul(this.moveSpeed);
            if (this._rigidbody) {
                this._rigidbody.linearVelocity = velocity;
            }
            var is_playing = (this._animation.getAnimationState(this._lastAnim) && this._animation.getAnimationState(this._lastAnim).isPlaying);
            // 狀態機：移動 or 靜止
            if (this.moveAxisX !== 0 || this.moveAxisY !== 0) {
                this._playerState = PlayerState.Walk;
                // 根據輸入更新朝向
                if (Math.abs(this.moveAxisX) > Math.abs(this.moveAxisY)) {
                    this._facing = this.moveAxisX > 0 ? FacingDirection.Right : FacingDirection.Left;
                }
                else {
                    this._facing = this.moveAxisY > 0 ? FacingDirection.Up : FacingDirection.Down;
                }
            }
            else if (!is_playing) {
                this._playerState = PlayerState.Idle;
            }
            else if (this.iswalking()) {
                this._playerState = PlayerState.Idle;
            }
            // 這裡可以根據按鍵觸發攻擊等狀態
            if (!is_playing || !this.incombo()) {
                if (this.inputSource.attack === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack;
                    this.player.getComponent("Player").playattack1sound();
                }
                else if (this.inputSource.attack2 === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack2;
                    this.player.getComponent("Player").playattack2sound();
                }
                else if (this.inputSource.attack3 === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack3;
                    this.player.getComponent("Player").playattack3sound();
                }
                else if (this.inputSource.gethurt === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Hurt;
                    this.player.getComponent("Player").takeDamage(5);
                    this.inputSource._xKey = IInputControls_1.ButtonState.Held;
                }
                this.incombo();
            }
            // 狀態+方向決定動畫
            var animName = this.getAnimName(this._playerState, this._facing);
            //如果是combo 狀態 播放動畫直到 combo 結束
            if (this._animation && animName && animName !== this._lastAnim && !this.stopupdate()) {
                console.log(this._lastAnim, animName);
                this._animState = this._animation.play(animName);
                this._lastAnim = animName;
            }
            console.log(this._playerState, this._lastAnim, this.combostep, this.combotimer);
        }
    };
    ActorController.prototype.getAnimName = function (state, facing) {
        switch (state) {
            case PlayerState.Combo_1:
                switch (facing) {
                    case FacingDirection.Right: return this.combo_right_1;
                    case FacingDirection.Left: return this.combo_left_1;
                    case FacingDirection.Up: return this.combo_up_1;
                    case FacingDirection.Down: return this.combo_down_1;
                }
                break;
            case PlayerState.Walk:
                switch (facing) {
                    case FacingDirection.Right: return this.walkRightAnimation;
                    case FacingDirection.Left: return this.walkLeftAnimation;
                    case FacingDirection.Up: return this.walkUpAnimation;
                    case FacingDirection.Down: return this.walkDownAnimation;
                }
                break;
            case PlayerState.Idle:
                return this.idleAnimation;
            case PlayerState.Attack:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right;
                    case FacingDirection.Left: return this.attack_left;
                    case FacingDirection.Up: return this.attack_up;
                    case FacingDirection.Down: return this.attack_down;
                }
                break;
            case PlayerState.Attack2:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right_2;
                    case FacingDirection.Left: return this.attack_left_2;
                    case FacingDirection.Up: return this.attack_up_2;
                    case FacingDirection.Down: return this.attack_down_2;
                }
                break;
            case PlayerState.Attack3:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right_3;
                    case FacingDirection.Left: return this.attack_left_3;
                    case FacingDirection.Up: return this.attack_up_3;
                    case FacingDirection.Down: return this.attack_down_3;
                }
                break;
            case PlayerState.Hurt:
                switch (facing) {
                    case FacingDirection.Right: return this.hurt_right;
                    case FacingDirection.Left: return this.hurt_left;
                    case FacingDirection.Up: return this.hurt_up;
                    case FacingDirection.Down: return this.hurt_down;
                }
                break;
            case PlayerState.Die:
                switch (facing) {
                    case FacingDirection.Right: return this.death_right;
                    case FacingDirection.Left: return this.death_left;
                    case FacingDirection.Up: return this.death_up;
                    case FacingDirection.Down: return this.death_down;
                }
                break;
        }
        return "";
    };
    ActorController.prototype.onAnimFinished = function () {
        console.log("finish");
        if (this._playerState === PlayerState.Attack ||
            this._playerState === PlayerState.Attack2 ||
            this._playerState === PlayerState.Attack3 ||
            this._playerState === PlayerState.Hurt ||
            this._playerState === PlayerState.Combo_1) {
            this._playerState = PlayerState.Idle;
            this._lastAnim = "";
        }
    };
    ActorController.prototype.stopupdate = function () {
        var animNames = [
            this.combo_up_1,
            this.combo_down_1,
            this.combo_left_1,
            this.combo_right_1
        ];
        for (var _i = 0, animNames_1 = animNames; _i < animNames_1.length; _i++) {
            var name = animNames_1[_i];
            var state = this._animation.getAnimationState(name);
            if (state && state.isPlaying)
                return true;
        }
        return false;
    };
    ActorController.prototype.incombo = function () {
        if (this._playerState === PlayerState.Combo_1)
            return true;
        if (this._playerState === PlayerState.Attack) {
            this.combostep = 1;
            this.combotimer = 0;
            return false;
        }
        else if (this._playerState === PlayerState.Attack2 && this.combostep === 1 && this.combotimer < this.comboInterval) {
            this.combostep = 2;
            this.combotimer = 0;
            return false;
        }
        else if (this._playerState === PlayerState.Attack3 && this.combostep === 2 && this.combotimer < this.comboInterval) {
            this.combostep = 3;
            this.combotimer = 0;
            this._playerState = PlayerState.Combo_1;
            return true;
        }
        return false;
    };
    ActorController.prototype.iswalking = function () {
        var animNames = [
            this.walkDownAnimation, this.walkLeftAnimation, this.walkRightAnimation, this.walkUpAnimation
        ];
        for (var _i = 0, animNames_2 = animNames; _i < animNames_2.length; _i++) {
            var name = animNames_2[_i];
            var state = this._animation.getAnimationState(name);
            if (state && state.isPlaying)
                return true;
        }
        return false;
    };
    ActorController.prototype.godie = function () {
        this._playerState = PlayerState.Die;
        this.scheduleOnce(function () {
            var Mgr = cc.find("GameManager").getComponent("GameManager");
            Mgr.EndGame();
        }, 1);
    };
    __decorate([
        property({ type: cc.Enum(FacingDirection) })
    ], ActorController.prototype, "initialFacingDirection", void 0);
    __decorate([
        property(cc.Node)
    ], ActorController.prototype, "player", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "idleAnimationName", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "moveAnimationName", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkRightAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkLeftAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkUpAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkDownAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "idleAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_right_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_left_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_up_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_down_1", void 0);
    __decorate([
        property(cc.Float)
    ], ActorController.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], ActorController.prototype, "comboInterval", void 0);
    ActorController = __decorate([
        ccclass
    ], ActorController);
    return ActorController;
}(Controller_1.default));
exports.default = ActorController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQWN0b3JDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25HLGlEQUE0QztBQUM1Qyx5REFBcUU7QUFHL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSyxXQVNKO0FBVEQsV0FBSyxXQUFXO0lBQ1osNkNBQUksQ0FBQTtJQUNKLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sbURBQU8sQ0FBQTtJQUNQLG1EQUFPLENBQUE7SUFDUCw2Q0FBSSxDQUFBO0lBQ0osMkNBQUcsQ0FBQTtJQUNILG1EQUFPLENBQUE7QUFDWCxDQUFDLEVBVEksV0FBVyxLQUFYLFdBQVcsUUFTZjtBQUVELElBQUssZUFLSjtBQUxELFdBQUssZUFBZTtJQUNoQix1REFBSyxDQUFBO0lBQ0wscURBQUksQ0FBQTtJQUNKLGlEQUFFLENBQUE7SUFDRixxREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxJLGVBQWUsS0FBZixlQUFlLFFBS25CO0FBRUQsU0FBUyxJQUFJLENBQUMsQ0FBUztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQ7OztHQUdHO0FBRUg7SUFBNkMsbUNBQVU7SUFBdkQ7UUFBQSxxRUErVEM7UUE3VEcsNEJBQXNCLEdBQUcsZUFBZSxDQUFDLEtBQUss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QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0o7SUFhZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNPO0lBcEdULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0ErVG5DO0lBQUQsc0JBQUM7Q0EvVEQsQUErVEMsQ0EvVDRDLG9CQUFVLEdBK1R0RDtrQkEvVG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9pbnB1dC9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzLCBCdXR0b25TdGF0ZSB9IGZyb20gXCIuL2lucHV0L0lJbnB1dENvbnRyb2xzXCI7XHJcbmltcG9ydCAgUGxheWVyICAgIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZW51bSBQbGF5ZXJTdGF0ZXtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgQXR0YWNrLFxyXG4gICAgQXR0YWNrMixcclxuICAgIEF0dGFjazMsXHJcbiAgICBIdXJ0LFxyXG4gICAgRGllICxcclxuICAgIENvbWJvXzFcclxufVxyXG5cclxuZW51bSBGYWNpbmdEaXJlY3Rpb24ge1xyXG4gICAgUmlnaHQsXHJcbiAgICBMZWZ0LFxyXG4gICAgVXAsXHJcbiAgICBEb3duXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ24oeDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4geCA+IDAgPyAxIDogeCA8IDAgPyAtMSA6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHMgbW92ZW1lbnQgYW5kIGFjdGlvbnMgZm9yIGVhY2ggYWN0b3IuXHJcbiAqIFRvZ2dsZSBcIlVzZSBQbGF5ZXIgSW5wdXRcIiB0byByZWFkIGZyb20gcGxheWVyIGlucHV0LlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3JDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEZhY2luZ0RpcmVjdGlvbikgfSlcclxuICAgIGluaXRpYWxGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGlkbGVBbmltYXRpb25OYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBtb3ZlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIF9pZGxlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9tb3ZlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgd2Fsa1JpZ2h0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgd2Fsa0xlZnRBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtVcEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa191cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtEb3duQW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaWRsZUFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfc3RhbmRieVwiOyBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0OiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0xXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2xlZnQ6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja191cDogc3RyaW5nID0gXCJhdHRhY2tfdXAtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0XzI6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfbGVmdF8yOiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfdXBfMjogc3RyaW5nID0gXCJhdHRhY2tfdXAtMlwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duXzI6IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tMlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfcmlnaHRfMzogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19sZWZ0XzM6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja191cF8zOiBzdHJpbmcgPSBcImF0dGFja191cC0zXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2Rvd25fMzogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0zXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGRlYXRoX3JpZ2h0OiBzdHJpbmcgPSBcImRlYXRoX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfbGVmdDogc3RyaW5nID0gXCJkZWF0aF9sZWZ0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfdXA6IHN0cmluZyA9IFwiZGVhdGhfdXBcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBkZWF0aF9kb3duOiBzdHJpbmcgPSBcImRlYXRoX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaHVydF9yaWdodDogc3RyaW5nID0gXCJodXJ0X3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaHVydF9sZWZ0OiBzdHJpbmcgPSBcImh1cnRfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfdXA6IHN0cmluZyA9IFwiaHVydF91cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfZG93bjogc3RyaW5nID0gXCJodXJ0X2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgY29tYm9fcmlnaHRfMTogc3RyaW5nID0gXCJjb21iby0xX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgY29tYm9fbGVmdF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX3VwXzE6IHN0cmluZyA9IFwiY29tYm8tMV91cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX2Rvd25fMTogc3RyaW5nID0gXCJjb21iby0xX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlU3BlZWQgPSA2MDsgXHJcblxyXG4gICAgcHVibGljIG1vdmVBeGlzWCA9IDA7XHJcbiAgICBwdWJsaWMgbW92ZUF4aXNZID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9wbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSBfZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uRG93bjsgLy8g6aCQ6Kit5pyd5LiLXHJcbiAgICBwcml2YXRlIF9sYXN0QW5pbTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIGNvbWJvc3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29tYm90aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBjb21ib0ludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbW92ZUF4aXMyRCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5tb3ZlQXhpc1gsIHRoaXMubW92ZUF4aXNZKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uKSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLkFuaW1hdGlvbiBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmlnaWRib2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5fcmlnaWRib2R5KSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLlJpZ2lkQm9keSBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCAmJiBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5faWRsZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmlkbGVBbmltYXRpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLm1vdmVBbmltYXRpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLnBsYXkodGhpcy5pZGxlQW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vbignZmluaXNoZWQnLCB0aGlzLm9uQW5pbUZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkRpZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvc3RlcCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvdGltZXIgPj0gdGhpcy5jb21ib0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0U291cmNlICkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmNvbWJvKCkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNYID0gdGhpcy5pbnB1dFNvdXJjZS5ob3Jpem9udGFsQXhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNZID0gdGhpcy5pbnB1dFNvdXJjZS52ZXJ0aWNhbEF4aXM7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMubW92ZUF4aXMyRC5tdWwodGhpcy5tb3ZlU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2lkYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkYm9keS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc19wbGF5aW5nPSAodGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuX2xhc3RBbmltKSAmJiB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5fbGFzdEFuaW0pLmlzUGxheWluZylcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDni4DmhYvmqZ/vvJrnp7vli5Ugb3Ig6Z2c5q2iXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlQXhpc1ggIT09IDAgfHwgdGhpcy5tb3ZlQXhpc1kgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLldhbGs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55pOa6Ly45YWl5pu05paw5pyd5ZCRXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubW92ZUF4aXNYKSA+IE1hdGguYWJzKHRoaXMubW92ZUF4aXNZKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWCA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uUmlnaHQgOiBGYWNpbmdEaXJlY3Rpb24uTGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWSA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uVXAgOiBGYWNpbmdEaXJlY3Rpb24uRG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc19wbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc3dhbGtpbmcoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyDpgJnoo6Hlj6/ku6XmoLnmk5rmjInpjbXop7jnmbzmlLvmk4rnrYnni4DmhYtcclxuICAgICAgICAgICAgICAgIGlmKCFpc19wbGF5aW5nIHx8ICF0aGlzLmluY29tYm8oKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrPT09QnV0dG9uU3RhdGUuUHJlc3NlZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2s7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazFzb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrMj09PUJ1dHRvblN0YXRlLlByZXNzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrMnNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5pbnB1dFNvdXJjZS5hdHRhY2szPT09QnV0dG9uU3RhdGUuUHJlc3NlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2szc291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRTb3VyY2UuZ2V0aHVydD09PUJ1dHRvblN0YXRlLlByZXNzZWQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSHVydDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS50YWtlRGFtYWdlKDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0U291cmNlLl94S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvbWJvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDni4DmhYsr5pa55ZCR5rG65a6a5YuV55WrXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSB0aGlzLmdldEFuaW1OYW1lKHRoaXMuX3BsYXllclN0YXRlLCB0aGlzLl9mYWNpbmcpO1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK9jb21ibyDni4DmhYsg5pKt5pS+5YuV55Wr55u05YiwIGNvbWJvIOe1kOadn1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbiAmJiBhbmltTmFtZSAmJiBhbmltTmFtZSAhPT0gdGhpcy5fbGFzdEFuaW0gJiYgIXRoaXMuc3RvcHVwZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbGFzdEFuaW0sYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0QW5pbSA9IGFuaW1OYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fcGxheWVyU3RhdGUsdGhpcy5fbGFzdEFuaW0gICx0aGlzLmNvbWJvc3RlcCwgdGhpcy5jb21ib3RpbWVyKTtcclxuXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0QW5pbU5hbWUoc3RhdGU6IFBsYXllclN0YXRlLCBmYWNpbmc6IEZhY2luZ0RpcmVjdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQ29tYm9fMTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuY29tYm9fcmlnaHRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmNvbWJvX2xlZnRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmNvbWJvX3VwXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5jb21ib19kb3duXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5XYWxrOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy53YWxrUmlnaHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy53YWxrTGVmdEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLndhbGtVcEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLndhbGtEb3duQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuSWRsZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZGxlQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2s6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrMjpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuYXR0YWNrX3JpZ2h0XzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdF8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5hdHRhY2tfZG93bl8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodF8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnRfMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cF8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd25fMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5IdXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5odXJ0X3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuaHVydF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuaHVydF91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmh1cnRfZG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkRpZTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuZGVhdGhfcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5kZWF0aF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuZGVhdGhfdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5kZWF0aF9kb3duO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICBwcml2YXRlIG9uQW5pbUZpbmlzaGVkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2sgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazIgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkh1cnQgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEgXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdEFuaW0gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3B1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbU5hbWVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX3VwXzEsXHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9fZG93bl8xLFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX2xlZnRfMSxcclxuICAgICAgICAgICAgdGhpcy5jb21ib19yaWdodF8xXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGluY29tYm8oKXtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT1QbGF5ZXJTdGF0ZS5BdHRhY2sgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMiAmJiB0aGlzLmNvbWJvc3RlcCA9PT0gMSAmJiB0aGlzLmNvbWJvdGltZXIgPCB0aGlzLmNvbWJvSW50ZXJ2YWwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgJiYgdGhpcy5jb21ib3N0ZXAgPT09IDIgJiYgdGhpcy5jb21ib3RpbWVyIDwgdGhpcy5jb21ib0ludGVydmFsKXtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkNvbWJvXzE7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc3dhbGtpbmcoKXtcclxuICAgICAgICBjb25zdCBhbmltTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMud2Fsa0Rvd25BbmltYXRpb24sdGhpcy53YWxrTGVmdEFuaW1hdGlvbix0aGlzLndhbGtSaWdodEFuaW1hdGlvbix0aGlzLndhbGtVcEFuaW1hdGlvblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29kaWUoKXtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkRpZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICBsZXQgTWdyID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBNZ3IuRW5kR2FtZSgpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcbiAgICBcclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/strategies/AgentStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ea0em2sJxENZ80TS3fnUNO', 'AgentStrategy');
// scripts/ai/strategies/AgentStrategy.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
var AI;
(function (AI) {
    /**
     * An abstraction over AI strategies.
     * An Agent can combine several strategies to create new strategies.
     * Remember to call their start and update methods.
     *
     * This is a technique called "object composition".
     */
    var Strategy = /** @class */ (function () {
        function Strategy() {
        }
        return Strategy;
    }());
    AI.Strategy = Strategy;
})(AI = exports.AI || (exports.AI = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL3N0cmF0ZWdpZXMvQWdlbnRTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFpQixFQUFFLENBdUJsQjtBQXZCRCxXQUFpQixFQUFFO0lBQ2Y7Ozs7OztPQU1HO0lBQ0g7UUFBQTtRQWNBLENBQUM7UUFBRCxlQUFDO0lBQUQsQ0FkQSxBQWNDLElBQUE7SUFkcUIsV0FBUSxXQWM3QixDQUFBO0FBQ0wsQ0FBQyxFQXZCZ0IsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBdUJsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuLi8uLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xuZXhwb3J0IG5hbWVzcGFjZSBBSXtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBvdmVyIEFJIHN0cmF0ZWdpZXMuXG4gICAgICogQW4gQWdlbnQgY2FuIGNvbWJpbmUgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIGNyZWF0ZSBuZXcgc3RyYXRlZ2llcy5cbiAgICAgKiBSZW1lbWJlciB0byBjYWxsIHRoZWlyIHN0YXJ0IGFuZCB1cGRhdGUgbWV0aG9kcy5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGlzIGEgdGVjaG5pcXVlIGNhbGxlZCBcIm9iamVjdCBjb21wb3NpdGlvblwiLlxuICAgICAqL1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJhdGVneSBpbXBsZW1lbnRzIElJbnB1dENvbnRyb2xze1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGhvcml6b250YWxBeGlzKCk6IG51bWJlcjtcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyO1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGF0dGFjaygpOiBCdXR0b25TdGF0ZTtcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEltcGxlbWVudHMgaW5pdGlhbGl6YXRpb24gb2YgdGhlIHN0cmF0ZWd5LlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IHN0YXJ0KCk6IHZvaWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbXBsZW1lbnRzIHVwZGF0aW5nIG9mIHRoZSBzdHJhdGVneS5cbiAgICAgICAgICogQHBhcmFtIGR0IFRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IHVwZGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCB1cGRhdGUoZHQ6IG51bWJlcik6dm9pZDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/GreenBossAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddc97pf6D9J5rfmdoSlPhAP', 'GreenBossAI');
// scripts/ai/GreenBossAI.ts

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
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var GreenBossAI = /** @class */ (function (_super) {
    __extends(GreenBossAI, _super);
    function GreenBossAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 100;
        _this.runSpeed = 200;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 50;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 20;
        _this.maxHealth = 40;
        _this.health = 40;
        _this.lifebar = null;
        _this.barOffsetY = 50;
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        _this.isDead = false;
        _this.isDeathAnimPlaying = false;
        return _this;
    }
    GreenBossAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    GreenBossAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        // Draw patrol boundary
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        var patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        patrolGfx.lineWidth = 2;
        patrolGfx.strokeColor = cc.color(0, 255, 0);
        patrolGfx.circle(0, 0, this.patrolRadius);
        patrolGfx.stroke();
        // Detection area
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        // Attack area
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        // Health bar setup
        if (this.lifebar) {
            //this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            this.updateLife(0, this.health);
        }
        this.setToIdle();
    };
    GreenBossAI.prototype.update = function (dt) {
        // If already marked dead, skip AI
        if (this.isDead)
            return;
        if (this.isDeathAnimPlaying) {
            // Let death animation play; do nothing else until it's over
            return;
        }
        // 1) compute distance to player
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        // 2) check if player is still within patrol radius
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        // 3) redraw detection circle
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
            ? cc.color(255, 165, 0)
            : cc.color(255, 0, 0);
        this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
            ? cc.color(128, 0, 128)
            : cc.color(0, 0, 255);
        this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
        // 5) AI state transitions
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        // attack first
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            // Wait through wind-up + attack anim (wind-up = timeBeforeAttack, attackAnim assumed 1s)
            if (this.timer >= this.timeBeforeAttack + 1) {
                this.setToIdle();
            }
            return;
        }
        // then run
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        // patrol (idle → walk → idle)
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var delta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var next = pos.add(delta);
            if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(next);
            if (this.timer >= this.walkTime) {
                this.setToIdle();
            }
        }
    };
    // —— Health‐bar updater ——
    GreenBossAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    GreenBossAI.prototype.takeDamage = function (amount) {
        if (this.health <= 0 || this.isDeathAnimPlaying)
            return;
        // play hurt animation based on direction to player
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var dir = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossHurtRight" : "GreenBossHurtLeft")
            : (dir.y > 0 ? "GreenBossHurtUp" : "GreenBossHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0) {
            this.startDeathSequence(dir);
        }
    };
    GreenBossAI.prototype.heal = function (amount) {
        if (this.health <= 0)
            return;
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreenBossAI.prototype.startDeathSequence = function (direction) {
        this.isDeathAnimPlaying = true;
        this.slimeState = SlimeState.Idle; // freeze other AI
        this.playDeathAnimation(direction);
    };
    GreenBossAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreenBossDeathRight" : "GreenBossDeathLeft")
            : (direction.y > 0 ? "GreenBossDeathUp" : "GreenBossDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        // After the death animation finishes (assume 1s), mark as fully dead
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
            // Do NOT destroy the node—just leave the dead pose in place
        }, 1);
    };
    GreenBossAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreenBossIdle");
    };
    GreenBossAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreenBossWalkRight" : "GreenBossWalkLeft")
            : (this.direction.y > 0 ? "GreenBossWalkUp" : "GreenBossWalkDown");
        this.anim.play(clip);
    };
    GreenBossAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenBossAI.prototype.startAttack = function () {
        var _this = this;
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        // Wind‐up: play idle (or a custom wind‐up anim)
        this.anim.play("GreenBossIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    GreenBossAI.prototype.performAttack = function () {
        var _this = this;
        // Play attack clip based on direction to player
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossAttackRight" : "GreenBossAttackLeft")
            : (dir.y > 0 ? "GreenBossAttackUp" : "GreenBossAttackDown");
        this.anim.play(clip);
        // Apply damage if player still within radius
        var playerComp = this.player.getComponent(Player_1.default);
        if (playerComp) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            var dist = slimeW.sub(playerW).mag();
            if (dist <= this.attackRadius) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
        // After attack anim (~1s), go back to idle
        this.scheduleOnce(function () { return _this.setToIdle(); }, 1);
    };
    GreenBossAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossRunRight" : "GreenBossRunLeft")
            : (dir.y > 0 ? "GreenBossRunUp" : "GreenBossRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var delta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var next = this.node.getPosition().add(delta);
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(next);
    };
    GreenBossAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    GreenBossAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], GreenBossAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreenBossAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreenBossAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreenBossAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreenBossAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreenBossAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreenBossAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Time to wait before performing attack (seconds)" })
    ], GreenBossAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage dealt by the attack" })
    ], GreenBossAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreenBossAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreenBossAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenBossAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreenBossAI.prototype, "barOffsetY", void 0);
    GreenBossAI = __decorate([
        ccclass
    ], GreenBossAI);
    return GreenBossAI;
}(cc.Component));
exports.default = GreenBossAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEdyZWVuQm9zc0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENB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RUFBRSw2QkFBNkIsRUFBRSxDQUFDO2tEQUM5QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDOytDQUNqQztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBdENmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpVi9CO0lBQUQsa0JBQUM7Q0FqVkQsQUFpVkMsQ0FqVndDLEVBQUUsQ0FBQyxTQUFTLEdBaVZwRDtrQkFqVm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuXHJcbmVudW0gU2xpbWVTdGF0ZSB7XHJcbiAgICBJZGxlLFxyXG4gICAgV2FsayxcclxuICAgIFJ1bixcclxuICAgIEF0dGFja1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmVlbkJvc3NBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHdhbGsgc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSBydW4gc3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcIiB9KVxyXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSBzdGF5cyBpZGxlIGJlZm9yZSB3YWxraW5nIChzZWNvbmRzKVwiIH0pXHJcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkhvdyBsb25nIHRoZSBzbGltZSB3YWxrcyBpbiBvbmUgZGlyZWN0aW9uIChzZWNvbmRzKVwiIH0pXHJcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlBhdHJvbCByYWRpdXMgZnJvbSBzdGFydCBwb2ludCAocGl4ZWxzKVwiIH0pXHJcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRldGVjdGlvbiBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcclxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQXR0YWNrIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlRpbWUgdG8gd2FpdCBiZWZvcmUgcGVyZm9ybWluZyBhdHRhY2sgKHNlY29uZHMpXCIgfSlcclxuICAgIHRpbWVCZWZvcmVBdHRhY2s6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEYW1hZ2UgZGVhbHQgYnkgdGhlIGF0dGFja1wiIH0pXHJcbiAgICBhdHRhY2tEYW1hZ2U6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIG1heEhlYWx0aDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxyXG4gICAgaGVhbHRoOiBudW1iZXIgPSA0MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXHJcbiAgICBwcml2YXRlIGJhck9mZnNldFk6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbiA9IGNjLnYyKDAsIDApO1xyXG4gICAgcHJpdmF0ZSBwYXRyb2xDZW50ZXIgPSBjYy52MigwLCAwKTtcclxuXHJcbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGRldGVjdGlvbk5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGF0dGFja0dmeCE6IGNjLkdyYXBoaWNzO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcclxuICAgIHByaXZhdGUgY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNEZWF0aEFuaW1QbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpIGFzIGNjLk5vZGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgY2MuZXJyb3IoXCJQbGF5ZXIgbm9kZSBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xyXG4gICAgICAgIHRoaXMucGF0cm9sQ2VudGVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgLy8gRHJhdyBwYXRyb2wgYm91bmRhcnlcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUuc2V0UG9zaXRpb24odGhpcy5wYXRyb2xDZW50ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBhdHJvbEdmeCA9IHRoaXMuYm91bmRhcnlOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgcGF0cm9sR2Z4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgcGF0cm9sR2Z4LnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcclxuICAgICAgICBwYXRyb2xHZnguY2lyY2xlKDAsIDAsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICBwYXRyb2xHZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIERldGVjdGlvbiBhcmVhXHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlID0gbmV3IGNjLk5vZGUoXCJEZXRlY3Rpb25BcmVhXCIpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4ID0gdGhpcy5kZXRlY3Rpb25Ob2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcclxuXHJcbiAgICAgICAgLy8gQXR0YWNrIGFyZWFcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICAvLyBIZWFsdGggYmFyIHNldHVwXHJcbiAgICAgICAgaWYgKHRoaXMubGlmZWJhcikge1xyXG4gICAgICAgICAgICAvL3RoaXMubGlmZWJhci5zZXRQb3NpdGlvbigwLCB0aGlzLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuYmFyT2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlmZSgwLCB0aGlzLmhlYWx0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBtYXJrZWQgZGVhZCwgc2tpcCBBSVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyBMZXQgZGVhdGggYW5pbWF0aW9uIHBsYXk7IGRvIG5vdGhpbmcgZWxzZSB1bnRpbCBpdCdzIG92ZXJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMSkgY29tcHV0ZSBkaXN0YW5jZSB0byBwbGF5ZXJcclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyVyA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZGlzdFRvUGxheWVyID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIpIGNoZWNrIGlmIHBsYXllciBpcyBzdGlsbCB3aXRoaW4gcGF0cm9sIHJhZGl1c1xyXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcclxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySW5QYXRyb2wgPSBkaXN0RnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcclxuXHJcbiAgICAgICAgLy8gMykgcmVkcmF3IGRldGVjdGlvbiBjaXJjbGVcclxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggICA9IDI7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXNcclxuICAgICAgICAgICAgPyBjYy5jb2xvcigyNTUsIDE2NSwgMClcclxuICAgICAgICAgICAgOiBjYy5jb2xvcigyNTUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIDQpIHJlZHJhdyBhdHRhY2sgY2lyY2xlXHJcbiAgICAgICAgY29uc3QgZHJhd0F0dGFja1IgPSBNYXRoLm1pbih0aGlzLmF0dGFja1JhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXHJcbiAgICAgICAgICAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXHJcbiAgICAgICAgICAgIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyA1KSBBSSBzdGF0ZSB0cmFuc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgLy8gV2FpdCB0aHJvdWdoIHdpbmQtdXAgKyBhdHRhY2sgYW5pbSAod2luZC11cCA9IHRpbWVCZWZvcmVBdHRhY2ssIGF0dGFja0FuaW0gYXNzdW1lZCAxcylcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lQmVmb3JlQXR0YWNrICsgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGVuIHJ1blxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGF0cm9sIChpZGxlIOKGkiB3YWxrIOKGkiBpZGxlKVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHQgID0gcG9zLmFkZChkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4oCU4oCUIEhlYWx0aOKAkGJhciB1cGRhdGVyIOKAlOKAlFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwO1xyXG4gICAgICAgIGlmIChocCA8PSAxMCkgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xyXG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCB8fCB0aGlzLmlzRGVhdGhBbmltUGxheWluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBwbGF5IGh1cnQgYW5pbWF0aW9uIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcclxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHNsaW1lUG9zICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpciAgICAgICA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGh1cnRBbmltICA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc0h1cnRSaWdodFwiIDogXCJHcmVlbkJvc3NIdXJ0TGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVuQm9zc0h1cnRVcFwiIDogXCJHcmVlbkJvc3NIdXJ0RG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShodXJ0QW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwKSB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKC1hbW91bnQsIHRoaXMuaGVhbHRoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWF0aFNlcXVlbmNlKGRpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREZWF0aFNlcXVlbmNlKGRpcmVjdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7IC8vIGZyZWV6ZSBvdGhlciBBSVxyXG4gICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiR3JlZW5Cb3NzRGVhdGhSaWdodFwiIDogXCJHcmVlbkJvc3NEZWF0aExlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NEZWF0aFVwXCIgOiBcIkdyZWVuQm9zc0RlYXRoRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShkZWF0aEFuaW0pO1xyXG5cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAvLyBBZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzIChhc3N1bWUgMXMpLCBtYXJrIGFzIGZ1bGx5IGRlYWRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlbkJvc3NJZGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRXYWxraW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcclxuICAgICAgICApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlbkJvc3NXYWxrUmlnaHRcIiA6IFwiR3JlZW5Cb3NzV2Fsa0xlZnRcIilcclxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVuQm9zc1dhbGtVcFwiIDogXCJHcmVlbkJvc3NXYWxrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIC8vIFdpbmTigJB1cDogcGxheSBpZGxlIChvciBhIGN1c3RvbSB3aW5k4oCQdXAgYW5pbSlcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkdyZWVuQm9zc0lkbGVcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xyXG4gICAgICAgIC8vIFBsYXkgYXR0YWNrIGNsaXAgYmFzZWQgb24gZGlyZWN0aW9uIHRvIHBsYXllclxyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc0F0dGFja1JpZ2h0XCIgOiBcIkdyZWVuQm9zc0F0dGFja0xlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NBdHRhY2tVcFwiIDogXCJHcmVlbkJvc3NBdHRhY2tEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG5cclxuICAgICAgICAvLyBBcHBseSBkYW1hZ2UgaWYgcGxheWVyIHN0aWxsIHdpdGhpbiByYWRpdXNcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpbWVXICAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgICAgID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFmdGVyIGF0dGFjayBhbmltICh+MXMpLCBnbyBiYWNrIHRvIGlkbGVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNldFRvSWRsZSgpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc1J1blJpZ2h0XCIgOiBcIkdyZWVuQm9zc1J1bkxlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NSdW5VcFwiIDogXCJHcmVlbkJvc3NSdW5Eb3duXCIpO1xyXG4gICAgICAgIGlmIChjbGlwICE9PSB0aGlzLmN1cnJlbnRSdW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcclxuICAgICAgICBpZiAobmV4dC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihsb2NhbFAueCAtIHRoaXMubm9kZS54LCBsb2NhbFAueSAtIHRoaXMubm9kZS55KS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/Potion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99797thkEZDgY+hxJ3aSYzY', 'Potion');
// scripts/obj/Potion.ts

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
var Potion = /** @class */ (function (_super) {
    __extends(Potion, _super);
    function Potion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healAmount = 10;
        return _this;
    }
    Potion.prototype.onLoad = function () {
        // 開啟時 播放pot_out動畫
        var anim = this.getComponent(cc.Animation);
        console.log("pot");
        if (anim) {
            anim.play("pot_out");
        }
        else {
            console.log("pot no show");
        }
        // 撥放完 改成pot_idle動畫
        this.scheduleOnce(function () {
            if (anim)
                anim.play("pot_idle");
        }, 0.5);
    };
    Potion.prototype.onPickup = function () {
        // 取得玩家並回復血量
        var player = cc.find("Canvas/MapManager/Actors/Player");
        console.log("pickup");
        if (player) {
            player.getComponent("Player").heal(this.healAmount);
        }
        this.node.destroy();
    };
    Potion.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name === "Player") {
            this.onPickup();
        }
    };
    __decorate([
        property({ type: cc.Integer })
    ], Potion.prototype, "healAmount", void 0);
    Potion = __decorate([
        ccclass
    ], Potion);
    return Potion;
}(cc.Component));
exports.default = Potion;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9Qb3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFpQ0M7UUEvQkcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7O0lBK0I1QixDQUFDO0lBN0JHLHVCQUFNLEdBQU47UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksRUFBQztZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUI7UUFDRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksWUFBWTtRQUNaLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDOzhDQUNMO0lBRlAsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlDMUI7SUFBRCxhQUFDO0NBakNELEFBaUNDLENBakNtQyxFQUFFLENBQUMsU0FBUyxHQWlDL0M7a0JBakNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuSW50ZWdlcn0pXG4gICAgaGVhbEFtb3VudDogbnVtYmVyID0gMTA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOmWi+WVn+aZgiDmkq3mlL5wb3Rfb3V05YuV55WrXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3RcIik7XG4gICAgICAgIGlmIChhbmltKXtcbiAgICAgICAgICAgIGFuaW0ucGxheShcInBvdF9vdXRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvdCBubyBzaG93XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaSpeaUvuWujCDmlLnmiJBwb3RfaWRsZeWLleeVq1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PntcbiAgICAgICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoXCJwb3RfaWRsZVwiKTsgICAgICAgIFxuICAgICAgICB9LCAwLjUpO1xuICAgIH1cblxuICAgIG9uUGlja3VwKCkge1xuICAgICAgICAvLyDlj5blvpfnjqnlrrbkuKblm57lvqnooYDph49cbiAgICAgICAgbGV0IHBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJwaWNrdXBcIilcbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgcGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5oZWFsKHRoaXMuaGVhbEFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSBcIlBsYXllclwiKSB7XG4gICAgICAgICAgICB0aGlzLm9uUGlja3VwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19
//------QC-SOURCE-SPLIT------
