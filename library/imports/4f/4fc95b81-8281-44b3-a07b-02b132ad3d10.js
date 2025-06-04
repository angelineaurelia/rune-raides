"use strict";
cc._RF.push(module, '4fc95uBgoFEs6B7ArEyrT0Q', 'CameraTransposer');
// scripts/camera/CameraTransposer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CameraTransposer = /** @class */ (function (_super) {
    __extends(CameraTransposer, _super);
    function CameraTransposer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.followTarget = null;
        _this.followX = true;
        _this.followY = true;
        // @property(cc.Float)
        _this.minX = -2147483647;
        // @property(cc.Float)
        _this.minY = -2147483647;
        // @property(cc.Float)
        _this.maxX = 2147483647;
        // @property(cc.Float)
        _this.maxY = 2147483647;
        // @property(cc.Float)
        _this.offsetX = 0;
        // @property(cc.Float)
        _this.offsetY = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    CameraTransposer.prototype.onLoad = function () {
    };
    CameraTransposer.prototype.start = function () {
    };
    CameraTransposer.prototype.update = function (dt) {
        // Not using convertToWorldSpaceAR + convertToNodeSpaceAR because
        // they are inaccurate and causes camera jitter. :(
        var cameraLocalTransform = cc.mat4();
        this.node.getLocalMatrix(cameraLocalTransform);
        var targetWorldTransform = cc.mat4();
        this.followTarget.getWorldMatrix(targetWorldTransform);
        var targetWorldTranslation = cc.v3(0, 0, 0);
        targetWorldTransform.getTranslation(targetWorldTranslation);
        var transformed = cc.v4(targetWorldTranslation.x, targetWorldTranslation.y, targetWorldTranslation.z).transformMat4(cameraLocalTransform);
        var targetPosition = cc.v2(transformed.x, transformed.y).add(cc.v2(-cc.view.getDesignResolutionSize().width / 2, -cc.view.getDesignResolutionSize().height / 2));
        targetPosition = cc.v2(clamp(this.followX ? targetPosition.x : this.node.position.x, this.minX, this.maxX), clamp(this.followY ? targetPosition.y : this.node.position.y, this.minY, this.maxY));
        this.node.position = targetPosition;
    };
    __decorate([
        property(cc.Node)
    ], CameraTransposer.prototype, "followTarget", void 0);
    __decorate([
        property(cc.Boolean)
    ], CameraTransposer.prototype, "followX", void 0);
    __decorate([
        property(cc.Boolean)
    ], CameraTransposer.prototype, "followY", void 0);
    CameraTransposer = __decorate([
        ccclass
    ], CameraTransposer);
    return CameraTransposer;
}(cc.Component));
exports.default = CameraTransposer;
function clamp(x, a, b) {
    if (x < a)
        return a;
    if (x > b)
        return b;
    return x;
}

cc._RF.pop();