"use strict";
cc._RF.push(module, '99797thkEZDgY+hxJ3aSYzY', 'Potion');
// scripts/obj/Potion.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Potion = /** @class */ (function (_super) {
    __extends(Potion, _super);
    function Potion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.healAmount = 10;
        return _this;
    }
    Potion.prototype.onLoad = function () {
        // 開啟時 播放pot_out動畫
        var anim = this.getComponent(cc.Animation);
        console.log("pot");
        if (anim) {
            anim.play("pot_out");
        }
        else {
            console.log("pot no show");
        }
        // 撥放完 改成pot_idle動畫
        this.scheduleOnce(function () {
            if (anim)
                anim.play("pot_idle");
        }, 0.5);
    };
    Potion.prototype.onPickup = function () {
        // 取得玩家並回復血量
        var player = cc.find("Canvas/MapManager/Actors/Player");
        console.log("pickup");
        if (player) {
            player.getComponent("Player").heal(this.healAmount);
        }
        this.node.destroy();
    };
    Potion.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name === "Player") {
            this.onPickup();
        }
    };
    __decorate([
        property({ type: cc.Integer })
    ], Potion.prototype, "healAmount", void 0);
    Potion = __decorate([
        ccclass
    ], Potion);
    return Potion;
}(cc.Component));
exports.default = Potion;

cc._RF.pop();