
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