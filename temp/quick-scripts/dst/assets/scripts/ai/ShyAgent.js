
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXFNoeUFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFDNUIsOENBQTZDO0FBQzdDLGtEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLE9BQU8sQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQVc7SUFDaEQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFHRDtJQUNZLDRCQUFLO0lBRGpCO1FBQUEscUVBMEdDO1FBdkdHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUkzQixZQUFNLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLGNBQVEsR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFFakMsaUJBQVcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUks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QUNJLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWTtJQUNoQixDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNRO0lBdEJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRzVCO0lBQUQsZUFBQztDQTFHRCxBQTBHQyxDQXpHVyxlQUFLLEdBeUdoQjtrQkExR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xyXG5pbXBvcnQgQWdlbnQgZnJvbSBcIi4vQWdlbnRcIjtcclxuaW1wb3J0IHsgQ293YXJkIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9Db3dhcmRcIjtcclxuaW1wb3J0IHsgV2FuZGVyZXIgfSBmcm9tIFwiLi9zdHJhdGVnaWVzL1dhbmRlcmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICogTWl4ZXMgdHdvIHZlY3RvcnMuXHJcbiAqIFxyXG4gKiBFeGFtcGxlOiBgbWl4VmVjMihhLCBiLCAwLjI1KWAgKE1hdGhlbWF0aWNhbGx5IGVxdWl2YWxlbnQgdG8gYSAqIDAuMjUgKyBiICogMC43NSlcclxuICogQHBhcmFtIG1peCBBIHZhbHVlIGJldHdlZW4gMCBhbmQgMS5cclxuICogQHJldHVybnMgVGhlIG1peGVkIHJlc3VsdC5cclxuICovXHJcbmZ1bmN0aW9uIG1peFZlYzIoYTogY2MuVmVjMiwgYjogY2MuVmVjMiwgbWl4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhLm11bChtaXgpLmFkZChiLm11bCgxLjAgLSBtaXgpKVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHlBZ2VudFxyXG4gICAgZXh0ZW5kcyBBZ2VudFxyXG4gICAgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XHJcbiAgICAvKiogVGhlIGFnZW50IHdpbGwgbW92ZSBmb3IgdGhpcyBsb25nIGJlZm9yZSBzdG9wcGluZyB0byB3YWl0LiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbW92ZUR1cmF0aW9uID0gMS4wO1xyXG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgYXQgdGhpcyBzcGVlZC4gKi9cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1vdmVTcGVlZCA9IDEuMDtcclxuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCB3YWl0IGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUgYWdhaW4uICovXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICB3YWl0RHVyYXRpb24gPSAwLjU7XHJcbiAgICAvKiogVGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIHdpbGwgYmUgcmFuZG9taXplZCBieSB0aGlzIGZhY3RvciwgXHJcbiAgICAgKiAgc3VjaCB0aGF0IHRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiBpcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlblxyXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxIC0gd2FpdFJhbmRvbUZhY3RvcikgYW5kIFxyXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxICsgd2FpdFJhbmRvbUZhY3RvcikuXHJcbiAgICAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgd2FpdFJhbmRvbUZhY3RvciA9IDAuMTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcnVuQXdheUZyb206IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgc2FmZURpc3RhbmNlOiBudW1iZXIgPSA1LjA7XHJcblxyXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpIHsgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueCB9XHJcbiAgICBwdWJsaWMgZ2V0IHZlcnRpY2FsQXhpcygpIHsgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueSB9XHJcbiAgICBhdHRhY2s6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcclxuICAgIGludGVyYWN0OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcblxyXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRDogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByaXZhdGUgX3dhbmRlcmVyOiBXYW5kZXJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9jb3dhcmQ6IENvd2FyZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pc1dhaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYWdlbnRVcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxyXG4gICAgICAgIC8vIFRPRE8gKDMuMik6IENvbWJpbmUgdGhlIHR3byBzdHJhdGVnaWVzIHRvIGltcGxlbWVudCBTaHlBZ2VudCdzIGJlaGF2aW91ci5cclxuICAgICAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXHJcbiAgICAgICAgLy8gLSBUaGUgU2h5QWdlbnQgaXMgbGlrZSB0aGUgV2FuZGVyQWdlbnQsIGJ1dCB3aGVuIGl0IGlzIGFib3V0IHRvIG1vdmUsXHJcbiAgICAgICAgLy8gICB0aGVyZSBhcmUgdHdvIGNhc2VzOlxyXG4gICAgICAgIC8vICAgIC0gSWYgdGhlIGFnZW50J3MgZGlzdGFuY2UgdG8gdGhlIHRhcmdldCAocnVuQXdheUZyb20pIGlzIGxlc3MgdGhhbiBcclxuICAgICAgICAvLyAgICAgIHRoZSBzYWZlIGRpc3RhbmNlIChzYWZlRGlzdGFuY2UpLCBzZXQgdGhpcy5fbW92ZUF4aXMyRCBhcyBhIG1peCBvZiBcclxuICAgICAgICAvLyAgICAgIHRoZSB3YW5kZXJlcidzIGF4ZXMgYW5kIHRoZSBjb3dhcmQncyBheGVzLiBcclxuICAgICAgICAvLyAgICAgIFBsZWFzZSB1c2UgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG1peFZlYzIgd2l0aCBcclxuICAgICAgICAvLyAgICAgIGEgPSB3YW5kZXJlck1vdmUsIGIgPSBjb3dhcmRNb3ZlLCBtaXggPSAwLjI1LiAoU2VlIGxpbmUgMjUpXHJcbiAgICAgICAgLy8gICAgLSBPdGhlcndpc2UsIHNldCB0aGlzLm1vdmVBeGlzMkQgYXMgdGhlIHdhbmRlcmVyJ3MgYXhlcy5cclxuICAgICAgICAvLyAtIE5vdGUgdGhhdCB0aGUgYWdlbnQgc2hvdWxkIE5PVCBiZSBhYmxlIHRvIGNoYW5nZSBkaXJlY3Rpb24gd2hpbGUgbW92aW5nLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLSBIaW50IDE6IFlvdSBjYW4gdXNlIHRoaXMuX2Nvd2FyZC5kaXN0YW5jZUZyb21UYXJnZXQgdG8gZ2V0IHRoZSBcclxuICAgICAgICAvLyAgIGRpc3RhbmNlIHRvIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgLy8gLSBIaW50IDI6IFRyeSBtYWludGFpbmluZyB0aGlzLmlzV2FpdGluZyB0byBwcmV2ZW50IHRoZSBhZ2VudCBmcm9tXHJcbiAgICAgICAgLy8gICBjaGFuZ2luZyBkaXJlY3Rpb24gd2hpbGUgbW92aW5nLlxyXG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxyXG4gICAgICAgIGlmICghdGhpcy5fd2FuZGVyZXIgfHwgIXRoaXMuX2Nvd2FyZCkgcmV0dXJuO1xyXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnVwZGF0ZShkdCk7XHJcbiAgICAgICAgdGhpcy5fY293YXJkLnVwZGF0ZShkdCk7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICAgICAgbGV0IHdhbmRlcmVyTW92ZSA9IGNjLnYyKHRoaXMuX3dhbmRlcmVyLmhvcml6b250YWxBeGlzLCB0aGlzLl93YW5kZXJlci52ZXJ0aWNhbEF4aXMpO1xyXG4gICAgICAgIGxldCBjb3dhcmRNb3ZlID0gY2MudjIodGhpcy5fY293YXJkLmhvcml6b250YWxBeGlzLCB0aGlzLl9jb3dhcmQudmVydGljYWxBeGlzKTtcclxuICAgICAgICBpZiAod2FuZGVyZXJNb3ZlLmZ1enp5RXF1YWxzKGNjLlZlYzIuWkVSTywgMC4wMSkpIHtcclxuICAgICAgICAgICAgLy8gV2FuZGVyZXIgaGFzIHN0b3BwZWQuIFRoZSBhZ2VudCBzaG91bGQgbW92ZSB0aGUgbW9tZW50IGl0IGlzIG5vIGxvbmdlciBzdG9wcGVkLlxyXG4gICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gd2FuZGVyZXJNb3ZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cclxuICAgICAgICAvLyAuLi5cclxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLl9pc3dhaXRpbmcpIC4uLlxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2lzV2FpdGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY293YXJkLmRpc3RhbmNlRnJvbVRhcmdldCA8IHRoaXMuc2FmZURpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gbWl4VmVjMih3YW5kZXJlck1vdmUsIGNvd2FyZE1vdmUsIDAuMjUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUF4aXMyRCA9IHdhbmRlcmVyTW92ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxyXG4gICAgLy8gVE9ETyAoMy4xKTogSW5pdGlhbGl6ZSBTaHlBZ2VudCdzIHR3byBzdHJhdGVnaWVzICh0aGlzLndhbmRlcmVyIGFuZCB0aGlzLmNvd2FyZCkgY29ycmVjdGx5LlxyXG4gICAgLy8gW1NQRUNJRklDQVRJT05TXVxyXG4gICAgLy8gLSBZb3UnbGwgbmVlZCBTaHlBZ2VudCdzIHByb3BlcnRpZXM6IG1vdmVEdXJhdGlvbiwgd2FpdER1cmF0aW9uLCBcclxuICAgIC8vICAgd2FpdFJhbmRvbUZhY3RvciwgcnVuQXdheUZyb20uXHJcbiAgICAvLyAtIFlvdSdsbCBhbHNvIG5lZWQgdG8gcGFzcyBhIHJlZmVyZW5jZSB0byB0aGlzIG9iamVjdCB0byB0aGUgQ293YXJkIHN0cmF0ZWd5LiBcclxuICAgIC8vICAgdG8gY29uc3RydWN0IGl0IGNvcnJlY3RseS4gKEhvdz8pXHJcbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cclxuICAgICAgICB0aGlzLl93YW5kZXJlciA9IG5ldyBXYW5kZXJlcih0aGlzLm1vdmVEdXJhdGlvbiwgdGhpcy53YWl0RHVyYXRpb24sIHRoaXMud2FpdFJhbmRvbUZhY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fY293YXJkID0gbmV3IENvd2FyZCh0aGlzLCB0aGlzLnJ1bkF3YXlGcm9tKTtcclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cclxuICAgICAgICB0aGlzLl93YW5kZXJlci5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuX2Nvd2FyZC5zdGFydCgpO1xyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19