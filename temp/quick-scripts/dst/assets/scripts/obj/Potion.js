
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/Potion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9Qb3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFpQ0M7UUEvQkcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7O0lBK0I1QixDQUFDO0lBN0JHLHVCQUFNLEdBQU47UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksRUFBQztZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUI7UUFDRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksWUFBWTtRQUNaLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDOzhDQUNMO0lBRlAsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlDMUI7SUFBRCxhQUFDO0NBakNELEFBaUNDLENBakNtQyxFQUFFLENBQUMsU0FBUyxHQWlDL0M7a0JBakNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuSW50ZWdlcn0pXG4gICAgaGVhbEFtb3VudDogbnVtYmVyID0gMTA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOmWi+WVn+aZgiDmkq3mlL5wb3Rfb3V05YuV55WrXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3RcIik7XG4gICAgICAgIGlmIChhbmltKXtcbiAgICAgICAgICAgIGFuaW0ucGxheShcInBvdF9vdXRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvdCBubyBzaG93XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaSpeaUvuWujCDmlLnmiJBwb3RfaWRsZeWLleeVq1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PntcbiAgICAgICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoXCJwb3RfaWRsZVwiKTsgICAgICAgIFxuICAgICAgICB9LCAwLjUpO1xuICAgIH1cblxuICAgIG9uUGlja3VwKCkge1xuICAgICAgICAvLyDlj5blvpfnjqnlrrbkuKblm57lvqnooYDph49cbiAgICAgICAgbGV0IHBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJwaWNrdXBcIilcbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgcGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5oZWFsKHRoaXMuaGVhbEFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSBcIlBsYXllclwiKSB7XG4gICAgICAgICAgICB0aGlzLm9uUGlja3VwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19