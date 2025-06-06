
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXHN0cmF0ZWdpZXNcXFdhbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpREFBcUM7QUFFckM7O0dBRUc7QUFDSDtJQUE4Qiw0QkFBVztJQVlyQyxrQkFBWSxZQUFvQixFQUFFLFlBQW9CLEVBQUUsZ0JBQXdCO1FBQWhGLFlBQ0ksaUJBQU8sU0FXVjtRQXZCRCxpRUFBaUU7UUFDekQsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFDNUIsdUVBQXVFO1FBQy9ELG1CQUFhLEdBQUcsR0FBRyxDQUFDO1FBQzVCOzs7O1VBSUU7UUFDTSx1QkFBaUIsR0FBRyxHQUFHLENBQUM7UUFnQmhDLHdEQUF3RDtRQUNoRCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUMxQiw4REFBOEQ7UUFDdEQsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDMUIsMkVBQTJFO1FBQ25FLHFCQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkMsb0NBQW9DO1FBQzVCLGlCQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFuQi9CLDRFQUE0RTtRQUM1RSx3Q0FBd0M7UUFDeEMsbUJBQW1CO1FBQ25CLDBEQUEwRDtRQUMxRCw0RUFBNEU7UUFDNUUsb0NBQW9DO1FBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQzs7UUFDMUMsWUFBWTtJQUNoQixDQUFDO0lBa0JELHNCQUFXLG9DQUFjO1FBUHpCLDRFQUE0RTtRQUM1RSw4REFBOEQ7UUFDOUQsbUJBQW1CO1FBQ25CLDBEQUEwRDtRQUMxRCx3REFBd0Q7UUFDeEQsK0NBQStDO1FBQy9DLDRFQUE0RTthQUM1RTtZQUNJLG9DQUFvQztZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFlBQVk7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxrQ0FBWTthQUF2QjtZQUNJLG9DQUFvQztZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFlBQVk7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyw0QkFBTTthQUFqQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDhCQUFRO2FBQW5CO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBRU0sd0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDakUsQ0FBQztJQUNNLHlCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLCtDQUErQztRQUMvQyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUV0RCw0RUFBNEU7UUFDNUUsNERBQTREO1FBQzVELG1CQUFtQjtRQUNuQixpRUFBaUU7UUFDakUsMkVBQTJFO1FBQzNFLDJFQUEyRTtRQUMzRSxjQUFjO1FBQ2Qsd0VBQXdFO1FBQ3hFLGlEQUFpRDtRQUNqRCxpREFBaUQ7UUFDakQseUVBQXlFO1FBQ3pFLDhDQUE4QztRQUM5QyxtREFBbUQ7UUFDbkQsNEVBQTRFO1FBRTVFLG9DQUFvQztRQUNwQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTVILElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLEVBQUUsQ0FBQTtTQUNuRDtRQUVELElBQUksQ0FBRSxXQUFXLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RixZQUFZO0lBQ2hCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0E5RkEsQUE4RkMsQ0E5RjZCLGtCQUFFLENBQUMsUUFBUSxHQThGeEM7QUE5RlksNEJBQVE7QUFnR3JCLFNBQVMsdUJBQXVCO0lBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uU3RhdGUgfSBmcm9tIFwiLi4vLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcclxuaW1wb3J0IEFnZW50IGZyb20gXCIuLi9BZ2VudFwiO1xyXG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL0FnZW50U3RyYXRlZ3lcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBBSSBzdHJhdGVneSB0aGF0IGRlc2NyaWJlcyBhIFwid2FuZGVyaW5nXCIgYmVoYXZpb3VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdhbmRlcmVyIGV4dGVuZHMgQUkuU3RyYXRlZ3kge1xyXG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgZm9yIHRoaXMgbG9uZyBiZWZvcmUgc3RvcHBpbmcgdG8gd2FpdC4gKi9cclxuICAgIHByaXZhdGUgX21vdmVEdXJhdGlvbiA9IDEuMDtcclxuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCB3YWl0IGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUgYWdhaW4uICovXHJcbiAgICBwcml2YXRlIF93YWl0RHVyYXRpb24gPSAwLjU7XHJcbiAgICAvKiogVGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIHdpbGwgYmUgcmFuZG9taXplZCBieSB0aGlzIGZhY3RvciwgXHJcbiAgICAgKiAgc3VjaCB0aGF0IHRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiBpcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlblxyXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxIC0gd2FpdFJhbmRvbUZhY3RvcikgYW5kIFxyXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxICsgd2FpdFJhbmRvbUZhY3RvcikuXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfd2FpdFJhbmRvbUZhY3RvciA9IDAuMTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb3ZlRHVyYXRpb246IG51bWJlciwgd2FpdER1cmF0aW9uOiBudW1iZXIsIHdhaXRSYW5kb21GYWN0b3I6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXHJcbiAgICAgICAgLy8gVE9ETyAoMi4xKTogQ29tcGxldGUgdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgIC8vIFtTUEVDSUZJQ0FUSU9OU11cclxuICAgICAgICAvLyAtIEluaXRpYWxpemUgdGhlIGZvdXIgcHJpdmF0ZSB2YXJpYWJsZXMgYWJvdmUgcHJvcGVybHkuXHJcbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXHJcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXHJcbiAgICAgICAgdGhpcy5fbW92ZUR1cmF0aW9uID0gbW92ZUR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuX3dhaXREdXJhdGlvbiA9IHdhaXREdXJhdGlvbjtcclxuICAgICAgICB0aGlzLl93YWl0UmFuZG9tRmFjdG9yID0gd2FpdFJhbmRvbUZhY3RvcjtcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgIH1cclxuXHJcbiAgICAvKiogVGhlIHRpbWUgcG9pbnQgYWZ0ZXIgd2hpY2ggdGhlIGFnZW50IHNob3VsZCB3YWl0LiAqL1xyXG4gICAgcHJpdmF0ZSBfbmV4dFdhaXRUaW1lID0gMDtcclxuICAgIC8qKiBUaGUgdGltZSBwb2ludCBhZnRlciB3aGljaCB0aGUgYWdlbnQgc2hvdWxkIG1vdmUgYWdhaW4uICovXHJcbiAgICBwcml2YXRlIF9uZXh0TW92ZVRpbWUgPSAwO1xyXG4gICAgLyoqIFRoZSB2ZWxvY2l0eSAodmVjdG9yIHdpdGggbWFnbml0dWRlKSBhdCB3aGljaCB0aGUgYWdlbnQgc2hvdWxkIG1vdmUuICovXHJcbiAgICBwcml2YXRlIF93YW5kZXJWZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcclxuICAgIC8qKiBUaGUgYWdlbnQncyBvdXRwdXQgdG8gSUlucHV0LiAqL1xyXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRCA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcclxuICAgIC8vIFRPRE8gKDIuMik6IE1hcCBtb3ZlQXhpczJEIHRvIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGF4ZXMuXHJcbiAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXHJcbiAgICAvLyAtIG1vdmVBeGlzMkQueCBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSBob3Jpem9udGFsIGF4aXMuXHJcbiAgICAvLyAtIG1vdmVBeGlzMkQueSBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSB2ZXJ0aWNhbCBheGlzLlxyXG4gICAgLy8gLSBZb3UgY2FuIGxlYXZlIHRoZSByZW1haW5pbmcgdW5pbXBsZW1lbnRlZC5cclxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxyXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpOiBudW1iZXIge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlQXhpczJELng7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHZlcnRpY2FsQXhpcygpOiBudW1iZXIge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlQXhpczJELnk7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBCdXR0b25TdGF0ZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGludGVyYWN0KCk6IEJ1dHRvblN0YXRlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dE1vdmVUaW1lID0gY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwLjA7XHJcbiAgICAgICAgdGhpcy5fbmV4dFdhaXRUaW1lID0gdGhpcy5fbmV4dE1vdmVUaW1lIC0gdGhpcy5fd2FpdER1cmF0aW9uO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLyoqIFRoZSBjdXJyZW50IHRpbWUgaW4gdGhlIGdhbWUgaW4gc2Vjb25kcy4gKi9cclxuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKSAvIDEwMDAuMDtcclxuXHJcbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXHJcbiAgICAgICAgLy8gVE9ETyAoMi4zKTogSW1wbGVtZW50IHRoZSBiZWhhdmlvdXIgb2YgYSB3YW5kZXJpbmcgYWdlbnQuXHJcbiAgICAgICAgLy8gW1NQRUNJRklDQVRJT05TXVxyXG4gICAgICAgIC8vIDEuIFRoZSBhZ2VudCBzaG91bGQgcmVjb21wdXRlIGl0cyB3YW5kZXJpbmcgZGlyZWN0aW9uIHdoZW4gdGhlXHJcbiAgICAgICAgLy8gICAgY3VycmVudCB0aW1lIChjdXJUaW1lKSByZWFjaGVzIHRoZSBuZXh0IG1vdmUgdGltZSAodGhpcy5uZXh0TW92ZVRpbWUpXHJcbiAgICAgICAgLy8gICAgIC0gV2hlbiB0aGlzIGhhcHBlbnMsIHJlY29tcHV0ZSB0aGUgbmV4dCBtb3ZlIHRpbWUgYW5kIHRoZSBuZXh0IHdhaXQgXHJcbiAgICAgICAgLy8gICAgICAgdGltZS5cclxuICAgICAgICAvLyAgICAgLSBDb21wdXRlIHRoZSB3YW5kZXJpbmcgZGlyZWN0aW9uIGFzIGEgcmFuZG9tIDJEIHZlY3RvciB1c2luZyB0aGVcclxuICAgICAgICAvLyAgICAgICBwcm92aWRlZCBmdW5jdGlvbiBcInJhbmRvbVBvaW50T25DaXJjbGVcIi5cclxuICAgICAgICAvLyAyLiBUaGUgYWdlbnQncyBtb3ZlbWVudCBheGVzICh0aGlzLm1vdmVBeGlzMkQpXHJcbiAgICAgICAgLy8gICAgc2hvdWxkIGJlIGVxdWFsIHRvIHRoZSB3YW5kZXIgdmVsb2NpdHkgKHRoaXMud2FuZGVyVmVsb2NpdHkpIGJlZm9yZVxyXG4gICAgICAgIC8vICAgIHRoZSBuZXh0IHdhaXQgdGltZSAodGhpcy5uZXh0V2FpdFRpbWUpLiBcclxuICAgICAgICAvLyAgICBPVEhFUldJU0UgaXQgc2hvdWxkIGJlIGVxdWFsIHRvIGNjLlZlYzIuWkVSTy5cclxuICAgICAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcclxuXHJcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lID49IHRoaXMuX25leHRNb3ZlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXh0V2FpdFRpbWUgPSBjdXJyZW50VGltZSArIHRoaXMuX21vdmVEdXJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5fbmV4dE1vdmVUaW1lID0gdGhpcy5fbmV4dFdhaXRUaW1lICsgdGhpcy5fd2FpdER1cmF0aW9uICogKDEuMCAqIHRoaXMuX3dhaXRSYW5kb21GYWN0b3IgKiAoTWF0aC5yYW5kb20oKSAtIDIuMCAqIDEuMCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fd2FuZGVyVmVsb2NpdHkgPSByYW5kb21Qb2ludE9uVW5pdENpcmNsZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzIC5fbW92ZUF4aXMyRCA9IChjdXJyZW50VGltZSA8IHRoaXMuX25leHRXYWl0VGltZSkgPyB0aGlzLl93YW5kZXJWZWxvY2l0eSA6IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVBvaW50T25Vbml0Q2lyY2xlKCkge1xyXG4gICAgbGV0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgcmV0dXJuIG5ldyBjYy5WZWMyKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKTtcclxufSJdfQ==