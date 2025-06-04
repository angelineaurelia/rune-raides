"use strict";
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