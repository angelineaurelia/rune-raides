
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/chest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb56d6Gb/dNLqqqC/gApn0D', 'chest');
// scripts/obj/chest.ts

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
var Chest = /** @class */ (function (_super) {
    __extends(Chest, _super);
    function Chest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.potionPrefab = null;
        _this.openSound = null;
        _this._animation = null;
        _this._isOpened = false;
        return _this;
    }
    Chest.prototype.onLoad = function () {
    };
    Chest.prototype.onCollisionEnter = function (other, self) {
        if (this._isOpened)
            return;
        if (other.node.name === "Player") {
            //播放開啟寶箱動畫animation
            this.openChest();
            this._isOpened = true;
        }
    };
    Chest.prototype.openChest = function () {
        var anim = this.getComponent(cc.Animation);
        if (anim)
            anim.play("chest_open");
        //藥水放在寶箱的節點之下
        this.scheduleOnce(function () { }, 0.5);
        var potion = cc.instantiate(this.potionPrefab);
        potion.parent = this.node;
        potion.setPosition(this.node.position);
    };
    __decorate([
        property(cc.Prefab)
    ], Chest.prototype, "potionPrefab", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Chest.prototype, "openSound", void 0);
    Chest = __decorate([
        ccclass
    ], Chest);
    return Chest;
}(cc.Component));
exports.default = Chest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcb2JqXFxjaGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWdDQztRQTlCRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUF1QnZDLENBQUM7SUFyQkcsc0JBQU0sR0FBTjtJQUNBLENBQUM7SUFDRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUM7WUFDN0IsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsQyxhQUFhO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFLLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNRO0lBTGQsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdDekI7SUFBRCxZQUFDO0NBaENELEFBZ0NDLENBaENrQyxFQUFFLENBQUMsU0FBUyxHQWdDOUM7a0JBaENvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwb3Rpb25QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG9wZW5Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9hbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKXtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuZWQpIHJldHVybjtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSBcIlBsYXllclwiKXtcclxuICAgICAgICAgICAgLy/mkq3mlL7plovllZ/lr7bnrrHli5XnlathbmltYXRpb25cclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hlc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5faXNPcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9wZW5DaGVzdCgpIHtcclxuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheShcImNoZXN0X29wZW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/ol6XmsLTmlL7lnKjlr7bnrrHnmoTnr4Dpu57kuYvkuItcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e30sMC41KTtcclxuICAgICAgICBjb25zdCBwb3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvdGlvblByZWZhYik7XHJcbiAgICAgICAgcG90aW9uLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwb3Rpb24uc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19