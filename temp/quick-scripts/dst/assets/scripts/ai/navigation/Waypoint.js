
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