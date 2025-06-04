"use strict";
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