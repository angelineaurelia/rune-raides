
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