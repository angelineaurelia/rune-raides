
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXHN0cmF0ZWdpZXNcXENvd2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaURBQXFDO0FBRXJDO0lBQTRCLDBCQUFXO0lBR25DOzs7O09BSUc7SUFDSCxnQkFBWSxNQUFhLEVBQUUsWUFBcUI7UUFBaEQsWUFDSSxpQkFBTyxTQUdWO1FBWE8sWUFBTSxHQUFVLElBQUksQ0FBQztRQUNyQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQVk3QixpQkFBVyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBSnhDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztJQUNyQyxDQUFDO0lBSUQsc0JBQVcsa0NBQWM7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqRixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFrQjthQUE3QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzFFLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0NBQWM7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsZ0NBQVk7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsMEJBQU07YUFBakI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNNLHNCQUFLLEdBQVo7SUFFQSxDQUFDO0lBQ00sdUJBQU0sR0FBYixVQUFjLEVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzNDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsQ0EzQzJCLGtCQUFFLENBQUMsUUFBUSxHQTJDdEM7QUEzQ1ksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25TdGF0ZSB9IGZyb20gXCIuLi8uLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xyXG5pbXBvcnQgQWdlbnQgZnJvbSBcIi4uL0FnZW50XCI7XHJcbmltcG9ydCB7IEFJIH0gZnJvbSBcIi4vQWdlbnRTdHJhdGVneVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvd2FyZCBleHRlbmRzIEFJLlN0cmF0ZWd5e1xyXG4gICAgcHJpdmF0ZSBfYWdlbnQ6IEFnZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3J1bkF3YXlGcm9tOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gX2FnZW50IFRoZSBhZ2VudCB1c2luZyB0aGUgc3RyYXRlZ3kuXHJcbiAgICAgKiBAcGFyYW0gX3J1bkF3YXlGcm9tIFRoZSBub2RlIGZvciB0aGUgYWdlbnQgdG8gcnVuIGF3YXkgZnJvbS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX2FnZW50OiBBZ2VudCwgX3J1bkF3YXlGcm9tOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9hZ2VudCA9IF9hZ2VudDtcclxuICAgICAgICB0aGlzLl9ydW5Bd2F5RnJvbSA9IF9ydW5Bd2F5RnJvbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlQXhpczJEOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgYXdheUZyb21UYXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FnZW50Lm5vZGUucG9zaXRpb24uc3ViKHRoaXMuX3J1bkF3YXlGcm9tLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpc3RhbmNlRnJvbVRhcmdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcnVuQXdheUZyb20ucG9zaXRpb24uc3ViKHRoaXMuX2FnZW50Lm5vZGUucG9zaXRpb24pLm1hZygpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC54O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gdGhpcy5hd2F5RnJvbVRhcmdldDtcclxuICAgIH1cclxuXHJcbn0iXX0=