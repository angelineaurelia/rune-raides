
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXFdhbmRlckFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFFNUIsa0RBQWlEO0FBQzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFNBQVMsbUJBQW1CLENBQUMsTUFBa0I7SUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtJQUMzQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBQ0Q7O0dBRUc7QUFFSDtJQUNZLCtCQUFLO0lBRGpCO1FBQUEscUVBcUVDO1FBakVHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUdmLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBVXRDLFlBQU0sR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdkMsY0FBUSxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQzs7UUFnQ3pDLGdDQUFnQztRQUNoQyxvRkFBb0Y7UUFDcEYsK0JBQStCO1FBQy9CLGlCQUFpQjtJQUNyQixDQUFDO0lBN0NHLHNCQUFXLHVDQUFjO2FBQXpCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRixzQkFBVyxxQ0FBWTthQUF2QjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFLRCw0RUFBNEU7SUFDNUUsZ0VBQWdFO0lBQ2hFLG1CQUFtQjtJQUNuQiw0RUFBNEU7SUFDNUUsb0NBQW9DO0lBQ3BDLG9FQUFvRTtJQUNwRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBRWxFLGlDQUFXLEdBQXJCLFVBQXNCLEVBQVU7UUFDNUIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLFlBQVk7SUFDaEIsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRixZQUFZO0lBQ2hCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsWUFBWTtJQUNoQixDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ0k7SUFuQk4sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFFL0I7SUFBRCxrQkFBQztDQXJFRCxBQXFFQyxDQXBFVyxlQUFLLEdBb0VoQjtrQkFyRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xyXG5pbXBvcnQgQWdlbnQgZnJvbSBcIi4vQWdlbnRcIjtcclxuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9zdHJhdGVnaWVzL0FnZW50U3RyYXRlZ3lcIjtcclxuaW1wb3J0IHsgV2FuZGVyZXIgfSBmcm9tIFwiLi9zdHJhdGVnaWVzL1dhbmRlcmVyXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5mdW5jdGlvbiByYW5kb21Qb2ludE9uQ2lyY2xlKHJhZGl1czogbnVtYmVyID0gMSkge1xyXG4gICAgbGV0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgcmV0dXJuIG5ldyBjYy5WZWMyKE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzKTtcclxufVxyXG4vKipcclxuICogQW4gYWdlbnQgdGhhdCBzaW1wbHkgd2FuZGVycyBhcm91bmQgbGlrZSBhIGN1dGUgYW5pbWFsLlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FuZGVyQWdlbnRcclxuICAgIGV4dGVuZHMgQWdlbnRcclxuICAgIGltcGxlbWVudHMgSUlucHV0Q29udHJvbHMge1xyXG5cclxuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCBtb3ZlIGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0b3BwaW5nIHRvIHdhaXQuICovXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlRHVyYXRpb24gPSAxLjA7XHJcbiAgICAvKiogVGhlIGFnZW50IHdpbGwgbW92ZSBhdCB0aGlzIHNwZWVkLiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZVNwZWVkID0gNS4wO1xyXG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIHdhaXQgZm9yIHRoaXMgbG9uZyBiZWZvcmUgc3RhcnRpbmcgdG8gbW92ZSBhZ2Fpbi4gKi9cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHdhaXREdXJhdGlvbiA9IDAuNTtcclxuICAgIC8qKiBUaGUgYWN0dWFsIHdhaXQgZHVyYXRpb24gd2lsbCBiZSByYW5kb21pemVkIGJ5IHRoaXMgZmFjdG9yLCBcclxuICAgICAqICBzdWNoIHRoYXQgdGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIGlzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuXHJcbiAgICAgKiAgd2FpdER1cmF0aW9uIHggKDEgLSB3YWl0UmFuZG9tRmFjdG9yKSBhbmQgXHJcbiAgICAgKiAgd2FpdER1cmF0aW9uIHggKDEgKyB3YWl0UmFuZG9tRmFjdG9yKS5cclxuICAgICovXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICB3YWl0UmFuZG9tRmFjdG9yID0gMC4xO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9zdHJhdGVneTogQUkuU3RyYXRlZ3kgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdHJhdGVneSkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5Lmhvcml6b250YWxBeGlzICogdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdHJhdGVneSkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5LnZlcnRpY2FsQXhpcyAqIHRoaXMubW92ZVNwZWVkO1xyXG4gICAgfVxyXG4gICAgYXR0YWNrOiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICBpbnRlcmFjdDogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xyXG5cclxuXHJcbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcclxuICAgIC8vIFRPRE8gKDIuNCk6IENvbXBsZXRlIFdhbmRlckFnZW50IHVzaW5nIHRoZSBXYW5kZXJlciBzdHJhdGVneS5cclxuICAgIC8vIFtTUEVDSUZJQ0FUSU9OU11cclxuICAgIC8vIC0gQXNzaWduIGEgbmV3IFdhbmRlcmVyIHRvIHRoaXMuc3RyYXRlZ3ksIHdpdGggV2FuZGVyZXJBZ2VudCdzIHByb3BlcnRpZXNcclxuICAgIC8vICAgYXMgdGhlIGNvbnN0cnVjdG9yJ3MgYXJndW1lbnRzLlxyXG4gICAgLy8gLSBJbnZva2UgaXRzIFwic3RhcnRcIiBtZXRob2QgaW5zaWRlIFdhbmRlckFnZW50J3MgXCJzdGFydFwiIG1ldGhvZC4gXHJcbiAgICAvLyAtIEludm9rZSBpdHMgXCJ1cGRhdGVcIiBtZXRob2QgaW5zaWRlIFdhbmRlckFnZW50J3MgXCJhZ2VudFVwZGF0ZVwiIG1ldGhvZC5cclxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxyXG5cclxuICAgIHByb3RlY3RlZCBhZ2VudFVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXHJcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kudXBkYXRlKGR0KTtcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXHJcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBuZXcgV2FuZGVyZXIodGhpcy5tb3ZlRHVyYXRpb24sIHRoaXMud2FpdER1cmF0aW9uLCB0aGlzLndhaXRSYW5kb21GYWN0b3IpO1xyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxyXG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5LnN0YXJ0KCk7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy8gISEhIERPIE5PVCBJTVBMRU1FTlQgXCJ1cGRhdGVcIlxyXG4gICAgLy8gISEhIElmIHlvdSB3YW50IHRvLCB5b3UnbGwgaGF2ZSB0byBjYWxsIHRoZSBwYXJlbnQgY2xhc3MncyB1cGRhdGUgbWV0aG9kIGFzIHdlbGwhXHJcbiAgICAvLyAhISEgVXNlIGFnZW50VXBkYXRlIGluc3RlYWQuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==