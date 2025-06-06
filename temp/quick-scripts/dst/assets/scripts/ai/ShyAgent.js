
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL1NoeUFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFDNUIsOENBQTZDO0FBQzdDLGtEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLE9BQU8sQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQVc7SUFDaEQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFHRDtJQUNZLDRCQUFLO0lBRGpCO1FBQUEscUVBMEdDO1FBdkdHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUkzQixZQUFNLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLGNBQVEsR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFFakMsaUJBQVcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O1FBeUVwQyxpQkFBaUI7SUFDckIsQ0FBQztJQWxGRyxzQkFBVyxvQ0FBYzthQUF6QixjQUE4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDekQsc0JBQVcsa0NBQVk7YUFBdkIsY0FBNEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBUzdDLDhCQUFXLEdBQXJCLFVBQXNCLEVBQVU7UUFDNUIsNEVBQTRFO1FBQzVFLDRFQUE0RTtRQUM1RSxtQkFBbUI7UUFDbkIsd0VBQXdFO1FBQ3hFLHlCQUF5QjtRQUN6Qix5RUFBeUU7UUFDekUsMkVBQTJFO1FBQzNFLG1EQUFtRDtRQUNuRCxzREFBc0Q7UUFDdEQsbUVBQW1FO1FBQ25FLDhEQUE4RDtRQUM5RCw2RUFBNkU7UUFDN0UsRUFBRTtRQUNGLG9FQUFvRTtRQUNwRSw0QkFBNEI7UUFDNUIscUVBQXFFO1FBQ3JFLHFDQUFxQztRQUNyQyw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDN0Msb0NBQW9DO1FBQ3BDLE1BQU07UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JGLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvRSxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDOUMsa0ZBQWtGO1lBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1NBQ25DO1FBQ0Qsb0NBQW9DO1FBQ3BDLE1BQU07UUFDTixnQ0FBZ0M7YUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFDRCxZQUFZO0lBQ2hCLENBQUM7SUFHRCx3QkFBd0I7SUFFeEIsNEVBQTRFO0lBQzVFLDhGQUE4RjtJQUM5RixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLG1DQUFtQztJQUNuQyxpRkFBaUY7SUFDakYsc0NBQXNDO0lBQ3RDLDRFQUE0RTtJQUM1RSx5QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsWUFBWTtJQUNoQixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWTtJQUNoQixDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNRO0lBdEJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRzVCO0lBQUQsZUFBQztDQTFHRCxBQTBHQyxDQXpHVyxlQUFLLEdBeUdoQjtrQkExR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBCdXR0b25TdGF0ZSwgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCBBZ2VudCBmcm9tIFwiLi9BZ2VudFwiO1xuaW1wb3J0IHsgQ293YXJkIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9Db3dhcmRcIjtcbmltcG9ydCB7IFdhbmRlcmVyIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9XYW5kZXJlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiBNaXhlcyB0d28gdmVjdG9ycy5cbiAqIFxuICogRXhhbXBsZTogYG1peFZlYzIoYSwgYiwgMC4yNSlgIChNYXRoZW1hdGljYWxseSBlcXVpdmFsZW50IHRvIGEgKiAwLjI1ICsgYiAqIDAuNzUpXG4gKiBAcGFyYW0gbWl4IEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxuICogQHJldHVybnMgVGhlIG1peGVkIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gbWl4VmVjMihhOiBjYy5WZWMyLCBiOiBjYy5WZWMyLCBtaXg6IG51bWJlcikge1xuICAgIHJldHVybiBhLm11bChtaXgpLmFkZChiLm11bCgxLjAgLSBtaXgpKVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h5QWdlbnRcbiAgICBleHRlbmRzIEFnZW50XG4gICAgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgZm9yIHRoaXMgbG9uZyBiZWZvcmUgc3RvcHBpbmcgdG8gd2FpdC4gKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbW92ZUR1cmF0aW9uID0gMS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCBtb3ZlIGF0IHRoaXMgc3BlZWQuICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1vdmVTcGVlZCA9IDEuMDtcbiAgICAvKiogVGhlIGFnZW50IHdpbGwgd2FpdCBmb3IgdGhpcyBsb25nIGJlZm9yZSBzdGFydGluZyB0byBtb3ZlIGFnYWluLiAqL1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICB3YWl0RHVyYXRpb24gPSAwLjU7XG4gICAgLyoqIFRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiB3aWxsIGJlIHJhbmRvbWl6ZWQgYnkgdGhpcyBmYWN0b3IsIFxuICAgICAqICBzdWNoIHRoYXQgdGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIGlzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxIC0gd2FpdFJhbmRvbUZhY3RvcikgYW5kIFxuICAgICAqICB3YWl0RHVyYXRpb24geCAoMSArIHdhaXRSYW5kb21GYWN0b3IpLlxuICAgICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHdhaXRSYW5kb21GYWN0b3IgPSAwLjE7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcnVuQXdheUZyb206IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBzYWZlRGlzdGFuY2U6IG51bWJlciA9IDUuMDtcblxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKSB7IHJldHVybiB0aGlzLl9tb3ZlQXhpczJELnggfVxuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCkgeyByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55IH1cbiAgICBhdHRhY2s6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBpbnRlcmFjdDogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRDogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcbiAgICBwcml2YXRlIF93YW5kZXJlcjogV2FuZGVyZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2Nvd2FyZDogQ293YXJkID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc1dhaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBhZ2VudFVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgICAgICAvLyBUT0RPICgzLjIpOiBDb21iaW5lIHRoZSB0d28gc3RyYXRlZ2llcyB0byBpbXBsZW1lbnQgU2h5QWdlbnQncyBiZWhhdmlvdXIuXG4gICAgICAgIC8vIFtTUEVDSUZJQ0FUSU9OU11cbiAgICAgICAgLy8gLSBUaGUgU2h5QWdlbnQgaXMgbGlrZSB0aGUgV2FuZGVyQWdlbnQsIGJ1dCB3aGVuIGl0IGlzIGFib3V0IHRvIG1vdmUsXG4gICAgICAgIC8vICAgdGhlcmUgYXJlIHR3byBjYXNlczpcbiAgICAgICAgLy8gICAgLSBJZiB0aGUgYWdlbnQncyBkaXN0YW5jZSB0byB0aGUgdGFyZ2V0IChydW5Bd2F5RnJvbSkgaXMgbGVzcyB0aGFuIFxuICAgICAgICAvLyAgICAgIHRoZSBzYWZlIGRpc3RhbmNlIChzYWZlRGlzdGFuY2UpLCBzZXQgdGhpcy5fbW92ZUF4aXMyRCBhcyBhIG1peCBvZiBcbiAgICAgICAgLy8gICAgICB0aGUgd2FuZGVyZXIncyBheGVzIGFuZCB0aGUgY293YXJkJ3MgYXhlcy4gXG4gICAgICAgIC8vICAgICAgUGxlYXNlIHVzZSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gbWl4VmVjMiB3aXRoIFxuICAgICAgICAvLyAgICAgIGEgPSB3YW5kZXJlck1vdmUsIGIgPSBjb3dhcmRNb3ZlLCBtaXggPSAwLjI1LiAoU2VlIGxpbmUgMjUpXG4gICAgICAgIC8vICAgIC0gT3RoZXJ3aXNlLCBzZXQgdGhpcy5tb3ZlQXhpczJEIGFzIHRoZSB3YW5kZXJlcidzIGF4ZXMuXG4gICAgICAgIC8vIC0gTm90ZSB0aGF0IHRoZSBhZ2VudCBzaG91bGQgTk9UIGJlIGFibGUgdG8gY2hhbmdlIGRpcmVjdGlvbiB3aGlsZSBtb3ZpbmcuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC0gSGludCAxOiBZb3UgY2FuIHVzZSB0aGlzLl9jb3dhcmQuZGlzdGFuY2VGcm9tVGFyZ2V0IHRvIGdldCB0aGUgXG4gICAgICAgIC8vICAgZGlzdGFuY2UgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLy8gLSBIaW50IDI6IFRyeSBtYWludGFpbmluZyB0aGlzLmlzV2FpdGluZyB0byBwcmV2ZW50IHRoZSBhZ2VudCBmcm9tXG4gICAgICAgIC8vICAgY2hhbmdpbmcgZGlyZWN0aW9uIHdoaWxlIG1vdmluZy5cbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgICAgIGlmICghdGhpcy5fd2FuZGVyZXIgfHwgIXRoaXMuX2Nvd2FyZCkgcmV0dXJuO1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnVwZGF0ZShkdCk7XG4gICAgICAgIHRoaXMuX2Nvd2FyZC51cGRhdGUoZHQpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICAgICAgbGV0IHdhbmRlcmVyTW92ZSA9IGNjLnYyKHRoaXMuX3dhbmRlcmVyLmhvcml6b250YWxBeGlzLCB0aGlzLl93YW5kZXJlci52ZXJ0aWNhbEF4aXMpO1xuICAgICAgICBsZXQgY293YXJkTW92ZSA9IGNjLnYyKHRoaXMuX2Nvd2FyZC5ob3Jpem9udGFsQXhpcywgdGhpcy5fY293YXJkLnZlcnRpY2FsQXhpcyk7XG4gICAgICAgIGlmICh3YW5kZXJlck1vdmUuZnV6enlFcXVhbHMoY2MuVmVjMi5aRVJPLCAwLjAxKSkge1xuICAgICAgICAgICAgLy8gV2FuZGVyZXIgaGFzIHN0b3BwZWQuIFRoZSBhZ2VudCBzaG91bGQgbW92ZSB0aGUgbW9tZW50IGl0IGlzIG5vIGxvbmdlciBzdG9wcGVkLlxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vdmVBeGlzMkQgPSB3YW5kZXJlck1vdmU7XG4gICAgICAgIH1cbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIC8vIC4uLlxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLl9pc3dhaXRpbmcpIC4uLlxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pc1dhaXRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb3dhcmQuZGlzdGFuY2VGcm9tVGFyZ2V0IDwgdGhpcy5zYWZlRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gbWl4VmVjMih3YW5kZXJlck1vdmUsIGNvd2FyZE1vdmUsIDAuMjUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gd2FuZGVyZXJNb3ZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgIC8vIFRPRE8gKDMuMSk6IEluaXRpYWxpemUgU2h5QWdlbnQncyB0d28gc3RyYXRlZ2llcyAodGhpcy53YW5kZXJlciBhbmQgdGhpcy5jb3dhcmQpIGNvcnJlY3RseS5cbiAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXG4gICAgLy8gLSBZb3UnbGwgbmVlZCBTaHlBZ2VudCdzIHByb3BlcnRpZXM6IG1vdmVEdXJhdGlvbiwgd2FpdER1cmF0aW9uLCBcbiAgICAvLyAgIHdhaXRSYW5kb21GYWN0b3IsIHJ1bkF3YXlGcm9tLlxuICAgIC8vIC0gWW91J2xsIGFsc28gbmVlZCB0byBwYXNzIGEgcmVmZXJlbmNlIHRvIHRoaXMgb2JqZWN0IHRvIHRoZSBDb3dhcmQgc3RyYXRlZ3kuIFxuICAgIC8vICAgdG8gY29uc3RydWN0IGl0IGNvcnJlY3RseS4gKEhvdz8pXG4gICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgdGhpcy5fd2FuZGVyZXIgPSBuZXcgV2FuZGVyZXIodGhpcy5tb3ZlRHVyYXRpb24sIHRoaXMud2FpdER1cmF0aW9uLCB0aGlzLndhaXRSYW5kb21GYWN0b3IpO1xuICAgICAgICB0aGlzLl9jb3dhcmQgPSBuZXcgQ293YXJkKHRoaXMsIHRoaXMucnVuQXdheUZyb20pO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX2Nvd2FyZC5zdGFydCgpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19