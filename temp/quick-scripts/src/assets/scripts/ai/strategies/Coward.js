"use strict";
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