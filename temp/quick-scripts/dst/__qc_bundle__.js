
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/ActorController');
require('./assets/scripts/GameManager');
require('./assets/scripts/LeaderboardManager');
require('./assets/scripts/MapGenerator');
require('./assets/scripts/MapGeneratorCore');
require('./assets/scripts/MapManager');
require('./assets/scripts/Menu/AuthManager');
require('./assets/scripts/Menu/FirebaseInit');
require('./assets/scripts/Menu/FirebaseManager');
require('./assets/scripts/Menu/GameOver');
require('./assets/scripts/Menu/LoadingManager');
require('./assets/scripts/Menu/LoginSignUp');
require('./assets/scripts/Menu/Menu');
require('./assets/scripts/Menu/MenuMgr');
require('./assets/scripts/Menu/SuccessPopup');
require('./assets/scripts/MonsterManager');
require('./assets/scripts/Player');
require('./assets/scripts/UIManager');
require('./assets/scripts/ai/Agent');
require('./assets/scripts/ai/BlueSlimeAI');
require('./assets/scripts/ai/GreenBossAI');
require('./assets/scripts/ai/GreenSlimeAI');
require('./assets/scripts/ai/LavaSlimeAI');
require('./assets/scripts/ai/ShyAgent');
require('./assets/scripts/ai/WanderAgent');
require('./assets/scripts/ai/navigation/Waypoint');
require('./assets/scripts/ai/strategies/AgentStrategy');
require('./assets/scripts/ai/strategies/Coward');
require('./assets/scripts/ai/strategies/Wanderer');
require('./assets/scripts/camera/CameraTransposer');
require('./assets/scripts/input/Controller');
require('./assets/scripts/input/IInputControls');
require('./assets/scripts/input/KeyboardControls');
require('./assets/scripts/obj/Key');
require('./assets/scripts/obj/Lock');
require('./assets/scripts/obj/Potion');
require('./assets/scripts/obj/chest');
require('./assets/scripts/utilities/ZSortOnLoad');
require('./assets/scripts/utilities/ZSorter');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/FirebaseInit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1a17JHHO1CcJy04wT2g108', 'FirebaseInit');
// scripts/Menu/FirebaseInit.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var FirebaseInit = /** @class */ (function (_super) {
    __extends(FirebaseInit, _super);
    function FirebaseInit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseInit.prototype.onLoad = function () {
        if (!window._firebaseInited) {
            var config = {
                apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
                authDomain: "rune-raids.firebaseapp.com",
                projectId: "rune-raids",
                storageBucket: "rune-raids.firebasestorage.app",
                messagingSenderId: "530514360843",
                appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
                measurementId: "G-B1C5FG1YSN"
            };
            firebase.initializeApp(config);
            firebase.firestore();
            firebase.auth();
            window._firebaseInited = true;
            cc.log("Firebase initialized");
        }
        cc.game.addPersistRootNode(this.node);
    };
    FirebaseInit = __decorate([
        ccclass('FirebaseInit')
    ], FirebaseInit);
    return FirebaseInit;
}(cc.Component));
exports.default = FirebaseInit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcRmlyZWJhc2VJbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQTBDLGdDQUFZO0lBQXREOztJQW9CQSxDQUFDO0lBbkJDLDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMzQixJQUFNLE1BQU0sR0FBRztnQkFDYixNQUFNLEVBQUUseUNBQXlDO2dCQUNqRCxVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxTQUFTLEVBQUUsWUFBWTtnQkFDdkIsYUFBYSxFQUFFLGdDQUFnQztnQkFDL0MsaUJBQWlCLEVBQUUsY0FBYztnQkFDakMsS0FBSyxFQUFFLDJDQUEyQztnQkFDbEQsYUFBYSxFQUFFLGNBQWM7YUFDOUIsQ0FBQztZQUNGLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDaEM7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBbkJrQixZQUFZO1FBRGhDLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDSCxZQUFZLENBb0JoQztJQUFELG1CQUFDO0NBcEJELEFBb0JDLENBcEJ5QyxFQUFFLENBQUMsU0FBUyxHQW9CckQ7a0JBcEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvRmlyZWJhc2VJbml0LnRzXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIF9maXJlYmFzZUluaXRlZD86IGJvb2xlYW47XHJcbiAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdGaXJlYmFzZUluaXQnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlYmFzZUluaXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeURGVzQtZW1XZEkxZ2hnWldXR3Axd3FvV3ZBdlR3QXFyUVwiLFxyXG4gICAgICAgIGF1dGhEb21haW46IFwicnVuZS1yYWlkcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTMwNTE0MzYwODQzXCIsXHJcbiAgICAgICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbiAgICAgIH07XHJcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICAgIGZpcmViYXNlLmF1dGgoKTtcclxuICAgICAgd2luZG93Ll9maXJlYmFzZUluaXRlZCA9IHRydWU7XHJcbiAgICAgIGNjLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgfVxyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/navigation/Waypoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1fb9eQwYFFiaL2Pab25I/w', 'Waypoint');
// scripts/ai/navigation/Waypoint.ts

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
var Waypoint = /** @class */ (function (_super) {
    __extends(Waypoint, _super);
    function Waypoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adjacentWaypoints = [];
        _this.distances = [];
        return _this;
        // update (dt) {}
    }
    Waypoint_1 = Waypoint;
    /**
     * Returns the distance to a given waypoint.
     * @param otherWaypoint The waypoint to compute the distance to.
     * @returns The distance to that waypoint.
     */
    Waypoint.prototype.distanceTo = function (otherWaypoint) {
        return this.distanceToNode(otherWaypoint.node);
    };
    Waypoint.prototype.distanceToNode = function (otherNode) {
        // Computes the magnitude of the vector (a - b)
        // Where "a" is the other waypoint's position, and
        // "b" is this waypoint's position.
        return otherNode.convertToWorldSpaceAR(cc.Vec2.ZERO)
            .sub(this.node.convertToWorldSpaceAR(cc.Vec2.ZERO))
            .mag();
    };
    Waypoint.prototype.addEdgeTo = function (otherWaypoint) {
        this.adjacentWaypoints.push(otherWaypoint);
        this.distances.push(this.distanceTo(otherWaypoint));
    };
    // LIFE-CYCLE CALLBACKS:
    Waypoint.prototype.onLoad = function () {
        for (var _i = 0, _a = this.adjacentWaypoints; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            this.distances.push(this.distanceTo(neighbor));
        }
    };
    Waypoint.prototype.start = function () {
    };
    var Waypoint_1;
    __decorate([
        property(Waypoint_1)
    ], Waypoint.prototype, "adjacentWaypoints", void 0);
    Waypoint = Waypoint_1 = __decorate([
        ccclass
    ], Waypoint);
    return Waypoint;
}(cc.Component));
exports.default = Waypoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXG5hdmlnYXRpb25cXFdheXBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUNDO1FBdENZLHVCQUFpQixHQUFlLEVBQUUsQ0FBQztRQUNuQyxlQUFTLEdBQWEsRUFBRSxDQUFDOztRQW9DbEMsaUJBQWlCO0lBQ3JCLENBQUM7aUJBekNvQixRQUFRO0lBS3pCOzs7O09BSUc7SUFDSSw2QkFBVSxHQUFqQixVQUFrQixhQUF1QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxpQ0FBYyxHQUFyQixVQUFzQixTQUFrQjtRQUNwQywrQ0FBK0M7UUFDL0Msa0RBQWtEO1FBQ2xELG1DQUFtQztRQUNuQyxPQUFPLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xELEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLDRCQUFTLEdBQWhCLFVBQWlCLGFBQXVCO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLEtBQXFCLFVBQXNCLEVBQXRCLEtBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUF0QixjQUFzQixFQUF0QixJQUFzQixFQUFFO1lBQXhDLElBQUksUUFBUSxTQUFBO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDOztJQW5DRDtRQURDLFFBQVEsQ0FBQyxVQUFRLENBQUM7dURBQ3lCO0lBSDNCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QzVCO0lBQUQsZUFBQztDQXpDRCxBQXlDQyxDQXpDcUMsRUFBRSxDQUFDLFNBQVMsR0F5Q2pEO2tCQXpDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXlwb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFdheXBvaW50KVxyXG4gICAgcmVhZG9ubHkgYWRqYWNlbnRXYXlwb2ludHM6IFdheXBvaW50W10gPSBbXTtcclxuICAgIHJlYWRvbmx5IGRpc3RhbmNlczogbnVtYmVyW10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgdG8gYSBnaXZlbiB3YXlwb2ludC5cclxuICAgICAqIEBwYXJhbSBvdGhlcldheXBvaW50IFRoZSB3YXlwb2ludCB0byBjb21wdXRlIHRoZSBkaXN0YW5jZSB0by5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSB0byB0aGF0IHdheXBvaW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzdGFuY2VUbyhvdGhlcldheXBvaW50OiBXYXlwb2ludCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXN0YW5jZVRvTm9kZShvdGhlcldheXBvaW50Lm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXN0YW5jZVRvTm9kZShvdGhlck5vZGU6IGNjLk5vZGUpOiBudW1iZXJ7XHJcbiAgICAgICAgLy8gQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yIChhIC0gYilcclxuICAgICAgICAvLyBXaGVyZSBcImFcIiBpcyB0aGUgb3RoZXIgd2F5cG9pbnQncyBwb3NpdGlvbiwgYW5kXHJcbiAgICAgICAgLy8gXCJiXCIgaXMgdGhpcyB3YXlwb2ludCdzIHBvc2l0aW9uLlxyXG4gICAgICAgIHJldHVybiBvdGhlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTylcclxuICAgICAgICAgICAgLnN1Yih0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykpXHJcbiAgICAgICAgICAgIC5tYWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkRWRnZVRvKG90aGVyV2F5cG9pbnQ6IFdheXBvaW50KTogdm9pZHtcclxuICAgICAgICB0aGlzLmFkamFjZW50V2F5cG9pbnRzLnB1c2gob3RoZXJXYXlwb2ludCk7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZXMucHVzaCh0aGlzLmRpc3RhbmNlVG8ob3RoZXJXYXlwb2ludCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBuZWlnaGJvciBvZiB0aGlzLmFkamFjZW50V2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2VzLnB1c2godGhpcy5kaXN0YW5jZVRvKG5laWdoYm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LeaderboardManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de4a44WtYpKCIDssSp+W90p', 'LeaderboardManager');
// scripts/LeaderboardManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// assets/scripts/LeaderboardManager.ts
var ccclass = cc._decorator.ccclass;
var LeaderboardManager = /** @class */ (function (_super) {
    __extends(LeaderboardManager, _super);
    function LeaderboardManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeaderboardManager.prototype.onLoad = function () {
        if (!window._firebaseInited) {
            cc.error("Firebase not initialized. Make sure FirebaseInit.ts is in the scene and active.");
            return;
        }
    };
    // Call this when player finishes a level
    LeaderboardManager.prototype.saveProgress = function (level) {
        var user = firebase.auth().currentUser;
        if (!user) {
            cc.warn("No logged-in user; cannot save leaderboard progress.");
            return;
        }
        var db = firebase.firestore();
        var userRef = db.collection("leaderboard").doc(user.uid);
        userRef.get().then(function (doc) {
            var prev = doc.exists ? doc.data().highestLevel : 0;
            if (level > prev) {
                userRef.set({
                    username: user.displayName || "Unknown",
                    highestLevel: level
                });
                cc.log("Progress updated for " + user.displayName + " to level " + level);
            }
        }).catch(function (err) {
            cc.error("Error accessing leaderboard:", err);
        });
    };
    // Call this to display top players (e.g., in leaderboard screen)
    LeaderboardManager.prototype.loadLeaderboard = function (limit) {
        if (limit === void 0) { limit = 10; }
        var db = firebase.firestore();
        db.collection("leaderboard")
            .orderBy("highestLevel", "desc")
            .limit(limit)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                var data = doc.data();
                cc.log(data.username + ": Level " + data.highestLevel);
                // You can add logic here to populate your leaderboard UI
            });
        })
            .catch(function (err) {
            cc.error("Failed to load leaderboard:", err);
        });
    };
    LeaderboardManager = __decorate([
        ccclass
    ], LeaderboardManager);
    return LeaderboardManager;
}(cc.Component));
exports.default = LeaderboardManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGVhZGVyYm9hcmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUMvQixJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUlsQztJQUFnRCxzQ0FBWTtJQUE1RDs7SUFvREEsQ0FBQztJQWxEQyxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1lBQzVGLE9BQU87U0FDUjtJQUNILENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMseUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDaEUsT0FBTztTQUNSO1FBRUQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzRCxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNwQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDO29CQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVM7b0JBQ3ZDLFlBQVksRUFBRSxLQUFLO2lCQUNwQixDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsSUFBSSxDQUFDLFdBQVcsa0JBQWEsS0FBTyxDQUFDLENBQUM7YUFDdEU7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpRUFBaUU7SUFDMUQsNENBQWUsR0FBdEIsVUFBdUIsS0FBa0I7UUFBbEIsc0JBQUEsRUFBQSxVQUFrQjtRQUN2QyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7YUFDekIsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7YUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLEdBQUcsRUFBRTthQUNMLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDbEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixFQUFFLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxRQUFRLGdCQUFXLElBQUksQ0FBQyxZQUFjLENBQUMsQ0FBQztnQkFDdkQseURBQXlEO1lBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkRrQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQW9EdEM7SUFBRCx5QkFBQztDQXBERCxBQW9EQyxDQXBEK0MsRUFBRSxDQUFDLFNBQVMsR0FvRDNEO2tCQXBEb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvTGVhZGVyYm9hcmRNYW5hZ2VyLnRzXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyYm9hcmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgIGNjLmVycm9yKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLiBNYWtlIHN1cmUgRmlyZWJhc2VJbml0LnRzIGlzIGluIHRoZSBzY2VuZSBhbmQgYWN0aXZlLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCB0aGlzIHdoZW4gcGxheWVyIGZpbmlzaGVzIGEgbGV2ZWxcclxuICBwdWJsaWMgc2F2ZVByb2dyZXNzKGxldmVsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgY2Mud2FybihcIk5vIGxvZ2dlZC1pbiB1c2VyOyBjYW5ub3Qgc2F2ZSBsZWFkZXJib2FyZCBwcm9ncmVzcy5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3QgdXNlclJlZiA9IGRiLmNvbGxlY3Rpb24oXCJsZWFkZXJib2FyZFwiKS5kb2ModXNlci51aWQpO1xyXG5cclxuICAgIHVzZXJSZWYuZ2V0KCkudGhlbihkb2MgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2ID0gZG9jLmV4aXN0cyA/IGRvYy5kYXRhKCkuaGlnaGVzdExldmVsIDogMDtcclxuICAgICAgaWYgKGxldmVsID4gcHJldikge1xyXG4gICAgICAgIHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgaGlnaGVzdExldmVsOiBsZXZlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmxvZyhgUHJvZ3Jlc3MgdXBkYXRlZCBmb3IgJHt1c2VyLmRpc3BsYXlOYW1lfSB0byBsZXZlbCAke2xldmVsfWApO1xyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjYy5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBsZWFkZXJib2FyZDpcIiwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCB0aGlzIHRvIGRpc3BsYXkgdG9wIHBsYXllcnMgKGUuZy4sIGluIGxlYWRlcmJvYXJkIHNjcmVlbilcclxuICBwdWJsaWMgbG9hZExlYWRlcmJvYXJkKGxpbWl0OiBudW1iZXIgPSAxMCkge1xyXG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICAgIGRiLmNvbGxlY3Rpb24oXCJsZWFkZXJib2FyZFwiKVxyXG4gICAgICAub3JkZXJCeShcImhpZ2hlc3RMZXZlbFwiLCBcImRlc2NcIilcclxuICAgICAgLmxpbWl0KGxpbWl0KVxyXG4gICAgICAuZ2V0KClcclxuICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgY2MubG9nKGAke2RhdGEudXNlcm5hbWV9OiBMZXZlbCAke2RhdGEuaGlnaGVzdExldmVsfWApO1xyXG4gICAgICAgICAgLy8gWW91IGNhbiBhZGQgbG9naWMgaGVyZSB0byBwb3B1bGF0ZSB5b3VyIGxlYWRlcmJvYXJkIFVJXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbGVhZGVyYm9hcmQ6XCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28ae2OQzsFN+6aNxTuvpevg', 'Controller');
// scripts/input/Controller.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var IInputControls_1 = require("./IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputSource = null;
        return _this;
    }
    Controller.prototype.start = function () {
        this.registerInput(this.node.getComponents(cc.Component).find(function (component) { return IInputControls_1.hasImplementedInputControls(component); }));
    };
    Controller.prototype.registerInput = function (input) {
        if (input !== null)
            this.inputSource = input;
    };
    return Controller;
}(cc.Component));
exports.default = Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5wdXRcXENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7QUFFbkcsbURBQStFO0FBRXpFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWlELDhCQUFZO0lBQTdEO1FBQUEscUVBV0M7UUFUYSxpQkFBVyxHQUFtQixJQUFJLENBQUM7O0lBU2pELENBQUM7SUFSRywwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsNENBQTJCLENBQU0sU0FBUyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFDTSxrQ0FBYSxHQUFwQixVQUFxQixLQUFxQjtRQUN0QyxJQUFHLEtBQUssS0FBSyxJQUFJO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWGdELEVBQUUsQ0FBQyxTQUFTLEdBVzVEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBoYXNJbXBsZW1lbnRlZElucHV0Q29udHJvbHMsIElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGlucHV0U291cmNlOiBJSW5wdXRDb250cm9scyA9IG51bGw7XHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoPGFueT50aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpLmZpbmQoY29tcG9uZW50ID0+IGhhc0ltcGxlbWVudGVkSW5wdXRDb250cm9scyg8YW55PmNvbXBvbmVudCkpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWdpc3RlcklucHV0KGlucHV0OiBJSW5wdXRDb250cm9scykge1xyXG4gICAgICAgIGlmKGlucHV0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmlucHV0U291cmNlID0gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/Lock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '968b4LLZBJDy78DLuhX3gwV', 'Lock');
// scripts/obj/Lock.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.anim = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    NewClass.prototype.playAnim = function () {
        if (!this.anim.getAnimationState('Lock-pink').isPlaying) {
            this.anim.play('Lock-pink');
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcb2JqXFxMb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUVmLFVBQUksR0FBaUIsSUFBSSxDQUFDOztRQWdCbEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QjVCO0lBQUQsZUFBQztDQXpCRCxBQXlCQyxDQXpCcUMsRUFBRSxDQUFDLFNBQVMsR0F5QmpEO2tCQXpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUFuaW0oKXtcclxuICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdMb2NrLXBpbmsnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgnTG9jay1waW5rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utilities/ZSorter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99e25O3dctP9r6blHhMnMae', 'ZSorter');
// scripts/utilities/ZSorter.ts

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
/**
 * A component that makes a node render in a way such that it appears behind nodes
 * that are located below it.
 */
var ZSorter = /** @class */ (function (_super) {
    __extends(ZSorter, _super);
    function ZSorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZSorter.prototype.update = function (dt) {
        this.node.zIndex = 10000 + -this.node.y;
    };
    ZSorter = __decorate([
        ccclass
    ], ZSorter);
    return ZSorter;
}(cc.Component));
exports.default = ZSorter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbGl0aWVzXFxaU29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDOzs7R0FHRztBQUVIO0lBQXFDLDJCQUFZO0lBQWpEOztJQUlBLENBQUM7SUFIRyx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFIZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQUkzQjtJQUFELGNBQUM7Q0FKRCxBQUlDLENBSm9DLEVBQUUsQ0FBQyxTQUFTLEdBSWhEO2tCQUpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBhIG5vZGUgcmVuZGVyIGluIGEgd2F5IHN1Y2ggdGhhdCBpdCBhcHBlYXJzIGJlaGluZCBub2Rlc1xyXG4gKiB0aGF0IGFyZSBsb2NhdGVkIGJlbG93IGl0LlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlNvcnRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDAgKyAtdGhpcy5ub2RlLnk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c99a3fycmhINqcjJAb8dgD/', 'MapGenerator');
// scripts/MapGenerator.ts

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
var MapGeneratorCore_1 = require("./MapGeneratorCore");
var MapGenerator = /** @class */ (function (_super) {
    __extends(MapGenerator, _super);
    function MapGenerator() {
        /*@property(cc.Label)
        label: cc.Label = null;
    
        @property
        text: string = 'hello';*/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wallList = null;
        //Please set the Anchor of Prefab into (0,0) first
        _this.verticalWallPrefab = null;
        //Please set the Anchor of Prefab into (0,0) first
        _this.horizontalWallPrefab = null;
        _this.chestWallPrefab = null;
        _this.keyToNextLevel = null;
        _this.lockToNextLevel = null;
        _this.groundPrefab = null;
        _this.myMap = null;
        _this.Map_xmax = 10;
        _this.Map_ymax = 5;
        _this.chestboxes = 2;
        _this.blocksize_x = 100;
        _this.blocksize_y = 100;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(MapGenerator.prototype, "MapXmax", {
        get: function () {
            return this.Map_xmax * this.blocksize_x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapGenerator.prototype, "MapYmax", {
        get: function () {
            return this.Map_ymax * this.blocksize_y;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    MapGenerator.prototype.onLoad = function () {
        ;
    };
    MapGenerator.prototype.GeneratorMap = function () {
        this.myMap = new MapGeneratorCore_1.Map_Graph(this.Map_xmax, this.Map_ymax); // generate map
        //Please set the Anchor of Prefab into (0,0) first
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                var prefab_temp = cc.instantiate(this.groundPrefab);
                prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                this.wallList.addChild(prefab_temp, 0, 'ground');
            }
        }
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                if (this.myMap.mapBlock[_y][_x].up) {
                    var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
                if (this.myMap.mapBlock[_y][_x].left) {
                    var prefab_temp = cc.instantiate(this.verticalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
            }
        }
        // Generate the outer walls
        for (var i = 0; i < this.Map_xmax; i++) {
            var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i * this.blocksize_x, this.Map_ymax * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        // Generate the vertical walls
        for (var i = 0; i < this.Map_ymax; i++) {
            var prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax * this.blocksize_x, i * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        this.generateKey_Lock();
    };
    MapGenerator.prototype.regenerateMap = function (level) {
        this.wallList.removeAllChildren();
        // Find Level
        this.Map_xmax = level * 4 + 6; // Level 1,2,3...，Map_xmax  = 10,14,18...
        this.Map_ymax = level * 2 + 3; // Level 1,2,3...，Map_ymax = 5,7,9...
        this.chestboxes = level * 2 + 1;
        this.myMap = new MapGeneratorCore_1.Map_Graph(this.Map_xmax, this.Map_ymax);
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                if (this.myMap.mapBlock[_y][_x].up) {
                    var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
                if (this.myMap.mapBlock[_y][_x].left) {
                    var prefab_temp = cc.instantiate(this.verticalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
            }
        }
        for (var i = 0; i < this.Map_xmax; i++) {
            var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i * this.blocksize_x, this.Map_ymax * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        for (var i = 0; i < this.Map_ymax; i++) {
            var prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax * this.blocksize_x, i * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        this.generateKey_Lock();
    };
    MapGenerator.prototype.generateKey_Lock = function () {
        var _x0 = 0;
        _x0 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        var _y0 = 0;
        _y0 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        var _x1 = 0;
        _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        var _y1 = 0;
        _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        while ((_x0 === _x1) && (_y0 === _y1)) {
            _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        }
        var mapBlocks = []; // mapBlocks[_y][_x] mapBlocks[_i][_j]
        for (var _i = 0; _i < this.MapYmax; _i += 1) {
            mapBlocks[_i] = [];
            for (var _j = 0; _j < this.MapXmax; _j += 1) {
                mapBlocks[_i][_j] = false;
            }
        }
        mapBlocks[Math.floor(_y0)][Math.floor(_x0)] = true;
        mapBlocks[Math.floor(_y1)][Math.floor(_x1)] = true;
        for (var i = 0; i < this.chestboxes; i += 1) {
            var _x = 0;
            _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            var _y = 0;
            _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            while (mapBlocks[Math.floor(_y)][Math.floor(_x)]) {
                _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
                _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            }
            mapBlocks[Math.floor(_y)][Math.floor(_x)] = true;
            //=====================================================================
            var prefab_temp_2 = cc.instantiate(this.chestWallPrefab);
            prefab_temp_2.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
            this.wallList.addChild(prefab_temp_2, 1, 'chest');
            console.log("chest at:", _x, _y);
        }
        var prefab_temp_0 = cc.instantiate(this.keyToNextLevel);
        prefab_temp_0.setPosition(_x0 * this.blocksize_x, _y0 * this.blocksize_y);
        this.wallList.addChild(prefab_temp_0, 1, 'key');
        console.log("Key at:", _x0, _y0);
        var prefab_temp_1 = cc.instantiate(this.lockToNextLevel);
        prefab_temp_1.setPosition(_x1 * this.blocksize_x, _y1 * this.blocksize_y);
        this.wallList.addChild(prefab_temp_1, 1, 'lock');
        console.log("Lock at:", _x1, _y1);
    };
    __decorate([
        property(cc.Node)
    ], MapGenerator.prototype, "wallList", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "verticalWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "horizontalWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "chestWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "keyToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "lockToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "groundPrefab", void 0);
    MapGenerator = __decorate([
        ccclass
    ], MapGenerator);
    return MapGenerator;
}(cc.Component));
exports.default = MapGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLHVEQUFpRztBQUdqRztJQUEwQyxnQ0FBWTtJQUF0RDtRQUVJOzs7O2lDQUl5QjtRQU43QixxRUE0S0M7UUFuS0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrREFBa0Q7UUFFbEQsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRXJDLGtEQUFrRDtRQUVsRCwwQkFBb0IsR0FBYyxJQUFJLENBQUM7UUFHdkMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGNBQVEsR0FBWSxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBWSxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBWSxHQUFHLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxHQUFHLENBQUM7O1FBdUluQyxpQkFBaUI7SUFDckIsQ0FBQztJQXZJRyxzQkFBVyxpQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1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akM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNXO0lBN0JkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0S2hDO0lBQUQsbUJBQUM7Q0E1S0QsQUE0S0MsQ0E1S3lDLEVBQUUsQ0FBQyxTQUFTLEdBNEtyRDtrQkE1S29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCB7TWFwX25vZGUsIE1hcF9lZGdlLCBNYXBfc2VsZWN0ZWRfZWRnZSwgbWFwUm9vbVVuaXQsIE1hcF9HcmFwaH0gZnJvbSAnLi9NYXBHZW5lcmF0b3JDb3JlJztcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEdlbmVyYXRvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLypAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJzsqL1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FsbExpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdmVydGljYWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgaG9yaXpvbnRhbFdhbGxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZXN0V2FsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAga2V5VG9OZXh0TGV2ZWw6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxvY2tUb05leHRMZXZlbDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ3JvdW5kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbXlNYXAgOiBNYXBfR3JhcGggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBNYXBfeG1heCA6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBNYXBfeW1heCA6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIGNoZXN0Ym94ZXMgOiBudW1iZXIgPSAyO1xyXG4gICAgcHJpdmF0ZSBibG9ja3NpemVfeCA6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgYmxvY2tzaXplX3kgOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgZ2V0IE1hcFhtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5NYXBfeG1heCogdGhpcy5ibG9ja3NpemVfeDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgTWFwWW1heCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk1hcF95bWF4ICogdGhpcy5ibG9ja3NpemVfeTtcclxuICAgIH1cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRvck1hcCAoKSB7XHJcbiAgICAgICAgdGhpcy5teU1hcCA9IG5ldyBNYXBfR3JhcGgodGhpcy5NYXBfeG1heCx0aGlzLk1hcF95bWF4KTsvLyBnZW5lcmF0ZSBtYXBcclxuICAgICAgICAvL1BsZWFzZSBzZXQgdGhlIEFuY2hvciBvZiBQcmVmYWIgaW50byAoMCwwKSBmaXJzdFxyXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMCwnZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMuTWFwX3htYXg7X3grKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTx0aGlzLk1hcF95bWF4O195Kyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZlcnRpY2FsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgb3V0ZXIgd2FsbHNcclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDtpPHRoaXMuTWFwX3htYXg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oaSp0aGlzLmJsb2Nrc2l6ZV94LHRoaXMuTWFwX3ltYXgqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIHZlcnRpY2FsIHdhbGxzXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbih0aGlzLk1hcF94bWF4KnRoaXMuYmxvY2tzaXplX3gsaSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlfTG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2VuZXJhdGVNYXAobGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2FsbExpc3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAvLyBGaW5kIExldmVsXHJcbiAgICAgICAgdGhpcy5NYXBfeG1heCA9IGxldmVsKjQgKyA2IDsgLy8gTGV2ZWwgMSwyLDMuLi7vvIxNYXBfeG1heCAgPSAxMCwxNCwxOC4uLlxyXG4gICAgICAgIHRoaXMuTWFwX3ltYXggPSBsZXZlbCoyICsgMyA7IC8vIExldmVsIDEsMiwzLi4u77yMTWFwX3ltYXggPSA1LDcsOS4uLlxyXG4gICAgICAgIHRoaXMuY2hlc3Rib3hlcyA9IGxldmVsKjIgKyAxIDtcclxuXHJcbiAgICAgICAgdGhpcy5teU1hcCA9IG5ldyBNYXBfR3JhcGgodGhpcy5NYXBfeG1heCwgdGhpcy5NYXBfeW1heCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlNYXAubWFwQmxvY2tbX3ldW194XS51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF94bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy5ob3Jpem9udGFsV2FsbFByZWZhYik7XHJcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKGkqdGhpcy5ibG9ja3NpemVfeCx0aGlzLk1hcF95bWF4KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbih0aGlzLk1hcF94bWF4KnRoaXMuYmxvY2tzaXplX3gsaSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVLZXlfTG9jaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZW5lcmF0ZUtleV9Mb2NrKCl7XHJcbiAgICAgICAgbGV0IF94MDpudW1iZXIgPSAwO194MCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3htYXgpICsgMC41O1xyXG4gICAgICAgIGxldCBfeTA6bnVtYmVyID0gMDtfeTAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF95bWF4KSArIDAuNTtcclxuICAgICAgICBsZXQgX3gxOm51bWJlciA9IDA7X3gxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XHJcbiAgICAgICAgbGV0IF95MTpudW1iZXIgPSAwO195MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xyXG5cclxuICAgICAgICB3aGlsZSgoX3gwID09PSBfeDEpICYmIChfeTAgPT09IF95MSkpe1xyXG4gICAgICAgICAgICBfeDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcclxuICAgICAgICAgICAgX3kxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwQmxvY2tzIDogYm9vbGVhbltdW10gPSBbXTsgLy8gbWFwQmxvY2tzW195XVtfeF0gbWFwQmxvY2tzW19pXVtfal1cclxuICAgICAgICBmb3IobGV0IF9pOm51bWJlciA9IDA7X2k8dGhpcy5NYXBZbWF4O19pICs9IDEpe1xyXG4gICAgICAgICAgICBtYXBCbG9ja3NbX2ldID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgX2o6bnVtYmVyID0gMDtfajx0aGlzLk1hcFhtYXg7X2ogKz0gMSl7XHJcbiAgICAgICAgICAgICAgICBtYXBCbG9ja3NbX2ldW19qXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95MCldW01hdGguZmxvb3IoX3gwKV0gPSB0cnVlO1xyXG4gICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95MSldW01hdGguZmxvb3IoX3gxKV0gPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyPTA7aTx0aGlzLmNoZXN0Ym94ZXM7aSs9MSl7XHJcbiAgICAgICAgICAgIGxldCBfeDpudW1iZXIgPSAwO194ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XHJcbiAgICAgICAgICAgIGxldCBfeTpudW1iZXIgPSAwO195ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XHJcbiAgICAgICAgICAgIHdoaWxlKG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95KV1bTWF0aC5mbG9vcihfeCldKXtcclxuICAgICAgICAgICAgICAgIF94ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICBfeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95KV1bTWF0aC5mbG9vcihfeCldID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXBfMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlc3RXYWxsUHJlZmFiKTtcclxuICAgICAgICAgICAgcHJlZmFiX3RlbXBfMi5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xyXG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzIsMSwnY2hlc3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVzdCBhdDpcIixfeCwgX3kpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcmVmYWJfdGVtcF8wID0gY2MuaW5zdGFudGlhdGUodGhpcy5rZXlUb05leHRMZXZlbCk7XHJcbiAgICAgICAgcHJlZmFiX3RlbXBfMC5zZXRQb3NpdGlvbihfeDAqdGhpcy5ibG9ja3NpemVfeCxfeTAqdGhpcy5ibG9ja3NpemVfeSk7XHJcbiAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcF8wLDEsJ2tleScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2V5IGF0OlwiLF94MCwgX3kwKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJlZmFiX3RlbXBfMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubG9ja1RvTmV4dExldmVsKTtcclxuICAgICAgICBwcmVmYWJfdGVtcF8xLnNldFBvc2l0aW9uKF94MSp0aGlzLmJsb2Nrc2l6ZV94LF95MSp0aGlzLmJsb2Nrc2l6ZV95KTtcclxuICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzEsMSwnbG9jaycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jayBhdDpcIixfeDEsIF95MSk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/FirebaseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2c1agQNjlDVKAs/wbgiLpU', 'FirebaseManager');
// scripts/Menu/FirebaseManager.ts

// assets/scripts/FirebaseManager.ts
/*import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
  authDomain: "rune-raids.firebaseapp.com",
  databaseURL: "https://rune-raids-default-rtdb.firebaseio.com",
  projectId: "rune-raids",
  storageBucket: "rune-raids.firebasestorage.app",
  messagingSenderId: "530514360843",
  appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
  measurementId: "G-B1C5FG1YSN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcRmlyZWJhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWtCc0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvc2NyaXB0cy9GaXJlYmFzZU1hbmFnZXIudHNcclxuLyppbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcnVuZS1yYWlkcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTMwNTE0MzYwODQzXCIsXHJcbiAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbn07XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpOyovXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MonsterManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c8acFpplVH1LwjnyqGOWFp', 'MonsterManager');
// scripts/MonsterManager.ts

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
var MonsterType;
(function (MonsterType) {
    MonsterType[MonsterType["BlueSlime"] = 0] = "BlueSlime";
    MonsterType[MonsterType["GreenSlime"] = 1] = "GreenSlime";
    MonsterType[MonsterType["GreenBoss"] = 2] = "GreenBoss";
    MonsterType[MonsterType["LavaSlime"] = 3] = "LavaSlime";
})(MonsterType || (MonsterType = {}));
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 1;
        _this.monsterManager = null;
        _this.Map_xmax = 0;
        _this.Map_ymax = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.level = cc.find("GameManager").getComponent("GameManager").Level;
        //Initialize the monster manager
        this.monsterManager = cc.find("Canvas/MapManager/MonsterManager");
        console.log("Monster onload");
    };
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    NewClass.prototype.initMonster = function () {
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
        var monsterCount = Math.floor((this.Map_xmax / 100) * (this.Map_ymax / 100) / 9);
        console.log("monster Count = ", monsterCount);
        for (var i = 0; i < monsterCount; i++) {
            var randomType = Math.floor(Math.random() * 3.9999);
            console.log("Monster Type:", randomType);
            switch (randomType) {
                case MonsterType.BlueSlime:
                    this.initBlueSlime();
                    break;
                case MonsterType.GreenSlime:
                    this.initGreenSlime();
                    break;
                case MonsterType.GreenBoss:
                    this.initGreenBoss();
                    break;
                case MonsterType.LavaSlime:
                    this.initLavaSlime();
                    break;
                default:
                    cc.error("Unknown monster type:", randomType);
            }
        }
    };
    NewClass.prototype.initBlueSlime = function () {
        var _this = this;
        cc.resources.load("prefabs/Blue Slime", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Blue Slime:", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Blue Slime');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
        });
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    };
    NewClass.prototype.initGreenSlime = function () {
        var _this = this;
        cc.resources.load("prefabs/Green Slime", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Green Slime:", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Green Slime');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
            console.log("x=", x, "y=", y);
        });
    };
    NewClass.prototype.initGreenBoss = function () {
        var _this = this;
        cc.resources.load("prefabs/Green Boss", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Green Boss", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Green Boss');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
        });
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    };
    NewClass.prototype.initLavaSlime = function () {
        var _this = this;
        cc.resources.load("prefabs/Lava Slime", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Lava Slime:", err);
                return;
            }
            var SlimeNode = cc.instantiate(prefab);
            _this.monsterManager.addChild(SlimeNode, 1, 'Lava Slime');
            var x = Math.floor(Math.random() * (_this.Map_xmax + 1));
            var y = Math.floor(Math.random() * (_this.Map_ymax + 1));
            SlimeNode.setPosition(x, y);
        });
        console.log("Map_xmax =", this.Map_xmax, "Map_ymax =", this.Map_ymax);
    };
    NewClass.prototype.SetMonster = function (_level) {
        this.level = _level;
        var MapGEn = cc.find("GameManager").getComponent("GameManager");
        this.Map_xmax = Number((this.level * 4 + 6) * 100);
        this.Map_ymax = Number((this.level * 2 + 3) * 100);
        console.log("Level = ", this.level, typeof this.level);
        console.log("Map_xmax = ", this.Map_xmax, typeof this.Map_xmax);
        this.monsterManager.removeAllChildren();
        this.initMonster();
        console.log("set monster");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTW9uc3Rlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsSUFBSyxXQUtKO0FBTEQsV0FBSyxXQUFXO0lBQ1osdURBQVMsQ0FBQTtJQUNULHlEQUFVLENBQUE7SUFDVix1REFBUyxDQUFBO0lBQ1QsdURBQVMsQ0FBQTtBQUNiLENBQUMsRUFMSSxXQUFXLEtBQVgsV0FBVyxRQUtmO0FBR0Q7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzSEM7UUFwSFcsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7O0lBaUhqQyxDQUFDO0lBOUdHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0RSxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FB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QXNINUI7SUFBRCxlQUFDO0NBdEhELEFBc0hDLENBdEhxQyxFQUFFLENBQUMsU0FBUyxHQXNIakQ7a0JBdEhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmVudW0gTW9uc3RlclR5cGUge1xyXG4gICAgQmx1ZVNsaW1lLFxyXG4gICAgR3JlZW5TbGltZSxcclxuICAgIEdyZWVuQm9zcyxcclxuICAgIExhdmFTbGltZVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgbW9uc3Rlck1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBNYXBfeG1heDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgTWFwX3ltYXg6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKS5MZXZlbDtcclxuICAgICAgICAvL0luaXRpYWxpemUgdGhlIG1vbnN0ZXIgbWFuYWdlclxyXG4gICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25zdGVyIG9ubG9hZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIGluaXRNb25zdGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPVwiLCB0aGlzLk1hcF94bWF4LCBcIk1hcF95bWF4ID1cIiwgdGhpcy5NYXBfeW1heCk7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXJDb3VudCA9IE1hdGguZmxvb3IoKHRoaXMuTWFwX3htYXgvMTAwKSoodGhpcy5NYXBfeW1heC8xMDApLzkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9uc3RlciBDb3VudCA9IFwiLG1vbnN0ZXJDb3VudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25zdGVyQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tVHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozLjk5OTkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnN0ZXIgVHlwZTpcIiwgcmFuZG9tVHlwZSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNb25zdGVyVHlwZS5CbHVlU2xpbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Qmx1ZVNsaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1vbnN0ZXJUeXBlLkdyZWVuU2xpbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R3JlZW5TbGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNb25zdGVyVHlwZS5HcmVlbkJvc3M6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R3JlZW5Cb3NzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1vbnN0ZXJUeXBlLkxhdmFTbGltZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRMYXZhU2xpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJVbmtub3duIG1vbnN0ZXIgdHlwZTpcIiwgcmFuZG9tVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRCbHVlU2xpbWUoKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0JsdWUgU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBCbHVlIFNsaW1lOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IFNsaW1lTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIuYWRkQ2hpbGQoU2xpbWVOb2RlLDEsJ0JsdWUgU2xpbWUnKTtcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeG1heCArIDEpKSA7XHJcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3ltYXggKyAxKSkgO1xyXG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPVwiLCB0aGlzLk1hcF94bWF4LCBcIk1hcF95bWF4ID1cIiwgdGhpcy5NYXBfeW1heCk7XHJcbiAgICB9XHJcbiAgICBpbml0R3JlZW5TbGltZSgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR3JlZW4gU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBHcmVlbiBTbGltZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBTbGltZU5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyLmFkZENoaWxkKFNsaW1lTm9kZSwgMSwnR3JlZW4gU2xpbWUnKTtcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeG1heCArIDEpKSA7XHJcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3ltYXggKyAxKSkgO1xyXG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4PVwiLCB4LCBcInk9XCIseSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXRHcmVlbkJvc3MoKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0dyZWVuIEJvc3NcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBHcmVlbiBCb3NzXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyTWFuYWdlci5hZGRDaGlsZChTbGltZU5vZGUsIDEsICdHcmVlbiBCb3NzJyk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF95bWF4ICsgMSkpIDtcclxuICAgICAgICAgICAgU2xpbWVOb2RlLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcF94bWF4ID1cIiwgdGhpcy5NYXBfeG1heCwgXCJNYXBfeW1heCA9XCIsIHRoaXMuTWFwX3ltYXgpO1xyXG4gICAgfVxyXG4gICAgaW5pdExhdmFTbGltZSgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvTGF2YSBTbGltZVwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIExhdmEgU2xpbWU6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgU2xpbWVOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyTWFuYWdlci5hZGRDaGlsZChTbGltZU5vZGUsIDEsICdMYXZhIFNsaW1lJyk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF95bWF4ICsgMSkpIDtcclxuICAgICAgICAgICAgU2xpbWVOb2RlLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcF94bWF4ID1cIiwgdGhpcy5NYXBfeG1heCwgXCJNYXBfeW1heCA9XCIsIHRoaXMuTWFwX3ltYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRNb25zdGVyKF9sZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IF9sZXZlbDtcclxuICAgICAgICBsZXQgTWFwR0VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG4gICAgICAgIHRoaXMuTWFwX3htYXggPSBOdW1iZXIoKHRoaXMubGV2ZWwgKjQrNikqMTAwKTtcclxuICAgICAgICB0aGlzLk1hcF95bWF4ID0gTnVtYmVyKCh0aGlzLmxldmVsICoyKzMpKjEwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbCA9IFwiLCB0aGlzLmxldmVsLCB0eXBlb2YgdGhpcy5sZXZlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9IFwiLCB0aGlzLk1hcF94bWF4LCB0eXBlb2YgdGhpcy5NYXBfeG1heCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmluaXRNb25zdGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgbW9uc3RlclwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332a6gSxQ5LRb25rr5dLCw6', 'Player');
// scripts/Player.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager_1 = require("./GameManager");
var BlueSlimeAI_1 = require("./ai/BlueSlimeAI");
var LavaSlimeAI_1 = require("./ai/LavaSlimeAI");
// ↓ Fix the typo here: it should be "GreenSlimeAI" (two “e”s), not "GreenSlimeAI"
var GreenSlimeAI_1 = require("./ai/GreenSlimeAI");
var GreenBossAI_1 = require("./ai/GreenBossAI");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxHp = 40;
        _this.attackPower = 5;
        _this.hp = 40;
        _this.lifebar = null;
        _this.controller = null;
        _this.attack1sound = null;
        _this.attack2sound = null;
        _this.attack3sound = null;
        _this.hurtsound = null;
        _this.healsound = null;
        _this.gameManager = null;
        _this.holdingKey = false;
        /////////////////////////
        // → NEW PROPERTIES ← //
        /////////////////////////
        // How far the player's attack reaches (in pixels, world-space)
        _this.attackRange = 50;
        // Delay (seconds) into the attack animation when damage is actually applied
        _this.attackHitDelay = 0.2;
        // Total length (seconds) of the attack animation
        _this.attackAnimDuration = 0.5;
        _this.isAttacking = false; // Prevent overlapping swings
        // Tracks which direction the player is facing.
        _this.facing = "down";
        _this.isDead = false; // new
        return _this;
    }
    Player.prototype.onLoad = function () {
        this.gameManager = cc.find("GameManager").getComponent("GameManager");
        // Capture the Animation component once
        this.anim = this.getComponent(cc.Animation);
        // Listen for keyboard input to trigger attack
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    Player.prototype.update = function (dt) {
        cc.find("Canvas/Main Camera/UI/Key").active = this.holdingKey;
    };
    Player.prototype.onDestroy = function () {
        // Clean up listener
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    // Called when any key is pressed
    Player.prototype.onKeyDown = function (event) {
        // Use C, Z, or V as the attack key (you can adjust as needed)
        if (event.keyCode === cc.macro.KEY.c ||
            event.keyCode === cc.macro.KEY.z ||
            event.keyCode === cc.macro.KEY.v) {
            this.tryAttack();
        }
    };
    // Attempt to start an attack (if not already in one)
    Player.prototype.tryAttack = function () {
        var _this = this;
        if (this.isAttacking)
            return;
        this.isAttacking = true;
        // 1) Play attack animation & sound
        if (this.anim) {
            this.anim.play("PlayerAttack"); // ensure you have a clip named “PlayerAttack”
        }
        if (this.attack1sound) {
            cc.audioEngine.playEffect(this.attack1sound, false);
        }
        // 2) Schedule the actual “hit” moment
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
        // 3) Once the full animation is done, allow attacking again
        this.scheduleOnce(function () {
            _this.isAttacking = false;
        }, this.attackAnimDuration);
    };
    // ────────────────────────────────────────────────────────────────────────────
    // This method checks every child under “Canvas/MapManager/MonsterManager” for
    // either a BlueSlimeAI or a GreenSlimeAI, then applies damage if within range.
    // ────────────────────────────────────────────────────────────────────────────
    Player.prototype.applyAttackHit = function () {
        var _this = this;
        // 1) Convert the player's position to world space (Vec3) and then to Vec2
        var playerWorld3 = this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        // 2) Find all slimes under “Canvas/MapManager/MonsterManager”
        var actorsRoot = cc.find("Canvas/MapManager/MonsterManager");
        if (!actorsRoot)
            return;
        actorsRoot.children.forEach(function (childNode) {
            // 3a) Try to grab a BlueSlimeAI component
            var slimeComp = childNode.getComponent(BlueSlimeAI_1.default) || null;
            // 3b) If there was no BlueSlimeAI, try to grab a GreenSlimeAI instead
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenSlimeAI_1.default);
            }
            if (!slimeComp) {
                slimeComp = childNode.getComponent(LavaSlimeAI_1.default);
            }
            if (!slimeComp) {
                slimeComp = childNode.getComponent(GreenBossAI_1.default);
            }
            // 4) If this node has neither component, skip it
            if (!slimeComp) {
                return;
            }
            // 5) Convert that slime’s position (node’s anchor point) to world-space Vec3 → Vec2
            var slimeWorld3 = childNode.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
            // 6) Check distance from player
            var dist = playerWorld2.sub(slimeWorld2).mag();
            if (dist <= _this.attackRange) {
                // 7) We’re in range → deal damage
                slimeComp.takeDamage(_this.attackPower);
                // (Optional) If you want to hit only one slime per swing, uncomment:
                // return;
            }
        });
    };
    Object.defineProperty(Player.prototype, "worldPosition", {
        /////////////////////////
        // ← EXISTING METHODS →//
        /////////////////////////
        get: function () {
            return this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "localPosition", {
        get: function () {
            return this.node.position;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.takeDamage = function (amount) {
        var _this = this;
        this.hp -= amount;
        if (this.hp < 0)
            this.hp = 0;
        // 1) If still alive → play “hurt” animation in the correct direction
        if (this.hp > 0) {
            switch (this.facing) {
                case "up":
                    this.anim.play("hurt_up");
                    break;
                case "down":
                    this.anim.play("hurt_down");
                    break;
                case "left":
                    this.anim.play("hurt_left");
                    break;
                case "right":
                    this.anim.play("hurt_right");
                    break;
                default:
                    // fallback, just in case
                    this.anim.play("hurt_" + this.facing);
                    break;
            }
            this.updatelife(-amount, this.hp);
            if (this.hurtsound) {
                cc.audioEngine.playEffect(this.hurtsound, false);
            }
            return; // exit early, no death logic yet
        }
        // 2) HP has dropped to zero → play “death” animation in the correct direction
        switch (this.facing) {
            case "up":
                this.anim.play("death_up");
                break;
            case "down":
                this.anim.play("death_down");
                break;
            case "left":
                this.anim.play("death_left");
                break;
            case "right":
                this.anim.play("death_right");
                break;
            default:
                // fallback, just in case
                this.anim.play("death_" + this.facing);
                break;
        }
        this.updatelife(-amount, this.hp);
        this.isDead = true;
        // 3) Delay the actual “freeze/game-over” until after the death animation finishes.
        this.scheduleOnce(function () {
            _this.die();
        }, 1.0 // adjust this delay to match your death‐animation length
        );
    };
    Player.prototype.heal = function (amount) {
        this.hp += amount;
        if (this.hp > this.maxHp)
            this.hp = this.maxHp;
        this.updatelife(amount, this.hp);
        this.playhealsound();
    };
    Player.prototype.attack = function (target) {
        target.takeDamage(this.attackPower);
    };
    Player.prototype.die = function () {
        // Hand over to your game‐over/freeze logic
        this.controller.getComponent("ActorController").godie();
        this.unscheduleAllCallbacks();
    };
    Player.prototype.updatelife = function (num, hp) {
        this.lifebar.width = hp;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    Player.prototype.playattack1sound = function () {
        if (this.attack1sound)
            cc.audioEngine.playEffect(this.attack1sound, false);
        else
            console.log("No attack1 sound");
    };
    Player.prototype.playattack2sound = function () {
        if (this.attack2sound)
            cc.audioEngine.playEffect(this.attack2sound, false);
        else
            console.log("No attack2 sound");
    };
    Player.prototype.playattack3sound = function () {
        if (this.attack3sound)
            cc.audioEngine.playEffect(this.attack3sound, false);
        else
            console.log("No attack3 sound");
    };
    Player.prototype.playhurtsound = function () {
        if (this.hurtsound)
            cc.audioEngine.playEffect(this.hurtsound, false);
        else
            console.log("No hurtsound");
    };
    Player.prototype.playhealsound = function () {
        if (this.healsound)
            cc.audioEngine.playEffect(this.healsound, false);
        else
            console.log("No healsound");
    };
    Player.prototype.SetPlayer = function (level) {
        // reset player position & HP
        this.hp = this.maxHp;
        this.updatelife(0, this.hp);
        this.holdingKey = false;
    };
    Player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        if (otherCollider.node.name == "key") {
            this.holdingKey = true;
            otherCollider.node.active = false;
        }
        if (otherCollider.node.name == "lock" && this.holdingKey) {
            var temp = otherCollider.getComponent("Lock");
            if (temp) {
                temp.playAnim();
            }
            this.scheduleOnce(function () {
                if (otherCollider.node) {
                    otherCollider.node.destroy();
                }
                else {
                    cc.log("can't deal with otherCollider.node.destroy(); properly");
                }
                _this.gameManager = cc.find("GameManager").getComponent("GameManager");
                _this.gameManager.GoNextLevel();
            }, 1.2);
        }
    };
    Player.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ type: cc.Integer, tooltip: "最大血量" })
    ], Player.prototype, "maxHp", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "攻擊力" })
    ], Player.prototype, "attackPower", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "初始血量" })
    ], Player.prototype, "hp", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "lifebar", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "controller", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack1sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack2sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "attack3sound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "hurtsound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "healsound", void 0);
    __decorate([
        property(GameManager_1.default)
    ], Player.prototype, "gameManager", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "Player attack range in pixels" })
    ], Player.prototype, "attackRange", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "When (sec) to check hit in attack anim" })
    ], Player.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Length of PlayerAttack animation" })
    ], Player.prototype, "attackAnimDuration", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLDZDQUF3QztBQUN4QyxnREFBMkM7QUFDM0MsZ0RBQTJDO0FBRzNDLGtGQUFrRjtBQUNsRixrREFBNkM7QUFDN0MsZ0RBQTJDO0FBSzNDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNlVDO1FBM1VHLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUdSLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRW5DLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBRXpCLCtEQUErRDtRQUUvRCxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6Qiw0RUFBNEU7UUFFNUUsb0JBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsaURBQWlEO1FBRWpELHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQVFuRSwrQ0FBK0M7UUFDdkMsWUFBTSxHQUFvQixNQUFNLENBQUM7UUFDakMsWUFBTSxHQUFZLEtBQUssQ0FBQyxDQUFDLE1BQU07O0lBK1Ez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O0NBN1VELEFBNlVDLENBN1VtQyxFQUFFLENBQUMsU0FBUyxHQTZVL0M7a0JBN1VvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBCbHVlU2xpbWVBSSBmcm9tIFwiLi9haS9CbHVlU2xpbWVBSVwiO1xyXG5pbXBvcnQgTGF2YVNsaW1lQUkgZnJvbSBcIi4vYWkvTGF2YVNsaW1lQUlcIjtcclxuXHJcblxyXG4vLyDihpMgRml4IHRoZSB0eXBvIGhlcmU6IGl0IHNob3VsZCBiZSBcIkdyZWVuU2xpbWVBSVwiICh0d28g4oCcZeKAnXMpLCBub3QgXCJHcmVlblNsaW1lQUlcIlxyXG5pbXBvcnQgR3JlZW5TbGltZUFJIGZyb20gXCIuL2FpL0dyZWVuU2xpbWVBSVwiO1xyXG5pbXBvcnQgR3JlZW5Cb3NzQUkgZnJvbSBcIi4vYWkvR3JlZW5Cb3NzQUlcIjtcclxuXHJcbnR5cGUgRmFjaW5nRGlyZWN0aW9uID0gXCJ1cFwiIHwgXCJkb3duXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuacgOWkp+ihgOmHj1wiIH0pXHJcbiAgICBtYXhIcDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLmlLvmk4rliptcIiB9KVxyXG4gICAgYXR0YWNrUG93ZXI6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJ3lp4vooYDph49cIiB9KVxyXG4gICAgaHA6IG51bWJlciA9IDQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRyb2xsZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdHRhY2sxc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGF0dGFjazJzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXR0YWNrM3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBodXJ0c291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGhlYWxzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXHJcbiAgICBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBob2xkaW5nS2V5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8g4oaSIE5FVyBQUk9QRVJUSUVTIOKGkCAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8vIEhvdyBmYXIgdGhlIHBsYXllcidzIGF0dGFjayByZWFjaGVzIChpbiBwaXhlbHMsIHdvcmxkLXNwYWNlKVxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCJQbGF5ZXIgYXR0YWNrIHJhbmdlIGluIHBpeGVsc1wiIH0pXHJcbiAgICBhdHRhY2tSYW5nZTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgLy8gRGVsYXkgKHNlY29uZHMpIGludG8gdGhlIGF0dGFjayBhbmltYXRpb24gd2hlbiBkYW1hZ2UgaXMgYWN0dWFsbHkgYXBwbGllZFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiV2hlbiAoc2VjKSB0byBjaGVjayBoaXQgaW4gYXR0YWNrIGFuaW1cIiB9KVxyXG4gICAgYXR0YWNrSGl0RGVsYXk6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICAvLyBUb3RhbCBsZW5ndGggKHNlY29uZHMpIG9mIHRoZSBhdHRhY2sgYW5pbWF0aW9uXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJMZW5ndGggb2YgUGxheWVyQXR0YWNrIGFuaW1hdGlvblwiIH0pXHJcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDAuNTtcclxuXHJcbiAgICBwcml2YXRlIGlzQXR0YWNraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgc3dpbmdzXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8g4oaQIEVORCBORVcgUFJPUFMg4oaSIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG5cclxuICAgIC8vIFRyYWNrcyB3aGljaCBkaXJlY3Rpb24gdGhlIHBsYXllciBpcyBmYWNpbmcuXHJcbiAgICBwcml2YXRlIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBuZXdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcclxuICAgICAgICAvLyBDYXB0dXJlIHRoZSBBbmltYXRpb24gY29tcG9uZW50IG9uY2VcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcclxuXHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBrZXlib2FyZCBpbnB1dCB0byB0cmlnZ2VyIGF0dGFja1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFxyXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvS2V5XCIpLmFjdGl2ZSA9IHRoaXMuaG9sZGluZ0tleTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgbGlzdGVuZXJcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXHJcbiAgICAgICAgICAgIGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcclxuICAgICAgICAgICAgdGhpcy5vbktleURvd24sXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGxlZCB3aGVuIGFueSBrZXkgaXMgcHJlc3NlZFxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICAvLyBVc2UgQywgWiwgb3IgViBhcyB0aGUgYXR0YWNrIGtleSAoeW91IGNhbiBhZGp1c3QgYXMgbmVlZGVkKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnogfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnZcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cnlBdHRhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0ZW1wdCB0byBzdGFydCBhbiBhdHRhY2sgKGlmIG5vdCBhbHJlYWR5IGluIG9uZSlcclxuICAgIHByaXZhdGUgdHJ5QXR0YWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNraW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIDEpIFBsYXkgYXR0YWNrIGFuaW1hdGlvbiAmIHNvdW5kXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlBsYXllckF0dGFja1wiKTsgLy8gZW5zdXJlIHlvdSBoYXZlIGEgY2xpcCBuYW1lZCDigJxQbGF5ZXJBdHRhY2vigJ1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMXNvdW5kKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIpIFNjaGVkdWxlIHRoZSBhY3R1YWwg4oCcaGl04oCdIG1vbWVudFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuYXBwbHlBdHRhY2tIaXQsIHRoaXMuYXR0YWNrSGl0RGVsYXkpO1xyXG5cclxuICAgICAgICAvLyAzKSBPbmNlIHRoZSBmdWxsIGFuaW1hdGlvbiBpcyBkb25lLCBhbGxvdyBhdHRhY2tpbmcgYWdhaW5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLmF0dGFja0FuaW1EdXJhdGlvblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcbiAgICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgZXZlcnkgY2hpbGQgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ0gZm9yXHJcbiAgICAvLyBlaXRoZXIgYSBCbHVlU2xpbWVBSSBvciBhIEdyZWVuU2xpbWVBSSwgdGhlbiBhcHBsaWVzIGRhbWFnZSBpZiB3aXRoaW4gcmFuZ2UuXHJcbiAgICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tIaXQoKSB7XHJcbiAgICAgICAgLy8gMSkgQ29udmVydCB0aGUgcGxheWVyJ3MgcG9zaXRpb24gdG8gd29ybGQgc3BhY2UgKFZlYzMpIGFuZCB0aGVuIHRvIFZlYzJcclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xyXG5cclxuICAgICAgICAvLyAyKSBGaW5kIGFsbCBzbGltZXMgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ1cclxuICAgICAgICBjb25zdCBhY3RvcnNSb290ID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIGlmICghYWN0b3JzUm9vdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBhY3RvcnNSb290LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAzYSkgVHJ5IHRvIGdyYWIgYSBCbHVlU2xpbWVBSSBjb21wb25lbnRcclxuICAgICAgICAgICAgbGV0IHNsaW1lQ29tcDogQmx1ZVNsaW1lQUkgfCBHcmVlblNsaW1lQUkgfCBMYXZhU2xpbWVBSSB8IEdyZWVuQm9zc0FJIHwgbnVsbCA9XHJcbiAgICAgICAgICAgICAgICAoY2hpbGROb2RlLmdldENvbXBvbmVudChCbHVlU2xpbWVBSSkgYXMgQmx1ZVNsaW1lQUkpIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyAzYikgSWYgdGhlcmUgd2FzIG5vIEJsdWVTbGltZUFJLCB0cnkgdG8gZ3JhYiBhIEdyZWVuU2xpbWVBSSBpbnN0ZWFkXHJcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XHJcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KEdyZWVuU2xpbWVBSSkgYXMgR3JlZW5TbGltZUFJO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XHJcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAgPSBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50KExhdmFTbGltZUFJKSBhcyBMYXZhU2xpbWVBSTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgc2xpbWVDb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChHcmVlbkJvc3NBSSkgYXMgR3JlZW5Cb3NzQUk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIDQpIElmIHRoaXMgbm9kZSBoYXMgbmVpdGhlciBjb21wb25lbnQsIHNraXAgaXRcclxuICAgICAgICAgICAgaWYgKCFzbGltZUNvbXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gNSkgQ29udmVydCB0aGF0IHNsaW1l4oCZcyBwb3NpdGlvbiAobm9kZeKAmXMgYW5jaG9yIHBvaW50KSB0byB3b3JsZC1zcGFjZSBWZWMzIOKGkiBWZWMyXHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gY2hpbGROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XHJcblxyXG4gICAgICAgICAgICAvLyA2KSBDaGVjayBkaXN0YW5jZSBmcm9tIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gcGxheWVyV29ybGQyLnN1YihzbGltZVdvcmxkMikubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIDcpIFdl4oCZcmUgaW4gcmFuZ2Ug4oaSIGRlYWwgZGFtYWdlXHJcbiAgICAgICAgICAgICAgICBzbGltZUNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja1Bvd2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAoT3B0aW9uYWwpIElmIHlvdSB3YW50IHRvIGhpdCBvbmx5IG9uZSBzbGltZSBwZXIgc3dpbmcsIHVuY29tbWVudDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIOKGkCBFWElTVElORyBNRVRIT0RTIOKGki8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcHVibGljIGdldCB3b3JsZFBvc2l0aW9uKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxvY2FsUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGFrZURhbWFnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaHAgLT0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhwIDwgMCkgdGhpcy5ocCA9IDA7XHJcblxyXG4gICAgICAgIC8vIDEpIElmIHN0aWxsIGFsaXZlIOKGkiBwbGF5IOKAnGh1cnTigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmhwID4gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfdXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9kb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2ssIGp1c3QgaW4gY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGBodXJ0XyR7dGhpcy5mYWNpbmd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVsaWZlKC1hbW91bnQsIHRoaXMuaHApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaHVydHNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaHVydHNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBleGl0IGVhcmx5LCBubyBkZWF0aCBsb2dpYyB5ZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIpIEhQIGhhcyBkcm9wcGVkIHRvIHplcm8g4oaSIHBsYXkg4oCcZGVhdGjigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5mYWNpbmcpIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGBkZWF0aF8ke3RoaXMuZmFjaW5nfWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIDMpIERlbGF5IHRoZSBhY3R1YWwg4oCcZnJlZXplL2dhbWUtb3ZlcuKAnSB1bnRpbCBhZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzLlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxLjAgLy8gYWRqdXN0IHRoaXMgZGVsYXkgdG8gbWF0Y2ggeW91ciBkZWF0aOKAkGFuaW1hdGlvbiBsZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ocCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPiB0aGlzLm1heEhwKSB0aGlzLmhwID0gdGhpcy5tYXhIcDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoYW1vdW50LCB0aGlzLmhwKTtcclxuICAgICAgICB0aGlzLnBsYXloZWFsc291bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNrKHRhcmdldDogUGxheWVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpZSgpIHtcclxuICAgICAgICAvLyBIYW5kIG92ZXIgdG8geW91ciBnYW1l4oCQb3Zlci9mcmVlemUgbG9naWNcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiQWN0b3JDb250cm9sbGVyXCIpLmdvZGllKCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlbGlmZShudW06IG51bWJlciwgaHA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IGhwO1xyXG4gICAgICAgIGlmIChocCA8PSAxMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XHJcbiAgICAgICAgZWxzZSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWF0dGFjazFzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2sxc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2sxc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMSBzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWF0dGFjazJzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2syc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2syc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMiBzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWF0dGFjazNzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRhY2szc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2szc291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMyBzb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWh1cnRzb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5odXJ0c291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5odXJ0c291bmQsIGZhbHNlKTtcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gaHVydHNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5aGVhbHNvdW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWxzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhlYWxzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBoZWFsc291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFBsYXllcihsZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uICYgSFBcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhIcDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoMCwgdGhpcy5ocCk7XHJcbiAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwia2V5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb2NrXCIgJiYgdGhpcy5ob2xkaW5nS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBvdGhlckNvbGxpZGVyLmdldENvbXBvbmVudChcIkxvY2tcIik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnBsYXlBbmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImNhbid0IGRlYWwgd2l0aCBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpOyBwcm9wZXJseVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLkdvTmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgIH0sMS4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ActorController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a55dft7PvVIPIFEJDrlEbfj', 'ActorController');
// scripts/ActorController.ts

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
var Controller_1 = require("./input/Controller");
var IInputControls_1 = require("./input/IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Idle"] = 0] = "Idle";
    PlayerState[PlayerState["Walk"] = 1] = "Walk";
    PlayerState[PlayerState["Attack"] = 2] = "Attack";
    PlayerState[PlayerState["Attack2"] = 3] = "Attack2";
    PlayerState[PlayerState["Attack3"] = 4] = "Attack3";
    PlayerState[PlayerState["Hurt"] = 5] = "Hurt";
    PlayerState[PlayerState["Die"] = 6] = "Die";
    PlayerState[PlayerState["Combo_1"] = 7] = "Combo_1";
})(PlayerState || (PlayerState = {}));
var FacingDirection;
(function (FacingDirection) {
    FacingDirection[FacingDirection["Right"] = 0] = "Right";
    FacingDirection[FacingDirection["Left"] = 1] = "Left";
    FacingDirection[FacingDirection["Up"] = 2] = "Up";
    FacingDirection[FacingDirection["Down"] = 3] = "Down";
})(FacingDirection || (FacingDirection = {}));
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
/**
 * A component that implements movement and actions for each actor.
 * Toggle "Use Player Input" to read from player input.
 */
var ActorController = /** @class */ (function (_super) {
    __extends(ActorController, _super);
    function ActorController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialFacingDirection = FacingDirection.Right;
        _this.player = null;
        _this._animation = null;
        _this._animState = null;
        _this._rigidbody = null;
        _this.idleAnimationName = "";
        _this.moveAnimationName = "";
        _this._idleAnimState = null;
        _this._moveAnimState = null;
        _this.walkRightAnimation = "player_walk_right";
        _this.walkLeftAnimation = "player_walk_left";
        _this.walkUpAnimation = "player_walk_up";
        _this.walkDownAnimation = "player_walk_down";
        _this.idleAnimation = "player_standby";
        _this.attack_right = "attack_right-1";
        _this.attack_left = "attack_left-1";
        _this.attack_up = "attack_up-1";
        _this.attack_down = "attack_down-1";
        _this.attack_right_2 = "attack_right-2";
        _this.attack_left_2 = "attack_left-2";
        _this.attack_up_2 = "attack_up-2";
        _this.attack_down_2 = "attack_down-2";
        _this.attack_right_3 = "attack_right-3";
        _this.attack_left_3 = "attack_left-3";
        _this.attack_up_3 = "attack_up-3";
        _this.attack_down_3 = "attack_down-3";
        _this.death_right = "death_right";
        _this.death_left = "death_left";
        _this.death_up = "death_up";
        _this.death_down = "death_down";
        _this.hurt_right = "hurt_right";
        _this.hurt_left = "hurt_left";
        _this.hurt_up = "hurt_up";
        _this.hurt_down = "hurt_down";
        _this.combo_right_1 = "combo-1_right";
        _this.combo_left_1 = "combo-1_left";
        _this.combo_up_1 = "combo-1_up";
        _this.combo_down_1 = "combo-1_down";
        _this.moveSpeed = 60;
        _this.moveAxisX = 0;
        _this.moveAxisY = 0;
        _this._playerState = PlayerState.Idle;
        _this._facing = FacingDirection.Down; // 預設朝下
        _this._lastAnim = "";
        _this.combostep = 0;
        _this.combotimer = 0;
        _this.comboInterval = 1;
        return _this;
    }
    Object.defineProperty(ActorController.prototype, "moveAxis2D", {
        get: function () {
            return new cc.Vec2(this.moveAxisX, this.moveAxisY);
        },
        enumerable: false,
        configurable: true
    });
    ActorController.prototype.onLoad = function () {
        this._animation = this.node.getComponent(cc.Animation);
        if (!this._animation)
            console.warn("ActorController: Component cc.Animation missing on node " + this.node.name);
        this._rigidbody = this.node.getComponent(cc.RigidBody);
        if (!this._rigidbody)
            console.warn("ActorController: Component cc.RigidBody missing on node " + this.node.name);
    };
    ActorController.prototype.start = function () {
        _super.prototype.start && _super.prototype.start.call(this);
        if (this._animation) {
            this._idleAnimState = this._animation.getAnimationState(this.idleAnimationName);
            this._moveAnimState = this._animation.getAnimationState(this.moveAnimationName);
            this._animState = this._animation.play(this.idleAnimationName);
            this._animation.on('finished', this.onAnimFinished, this);
        }
    };
    ActorController.prototype.update = function (dt) {
        if (this._playerState === PlayerState.Die)
            return;
        if (this.combostep > 0) {
            this.combotimer += dt;
            if (this.combotimer >= this.comboInterval) {
                this.combostep = 0;
            }
        }
        if (this.inputSource) {
            if (this.incombo())
                return;
            this.moveAxisX = this.inputSource.horizontalAxis;
            this.moveAxisY = this.inputSource.verticalAxis;
            var velocity = this.moveAxis2D.mul(this.moveSpeed);
            if (this._rigidbody) {
                this._rigidbody.linearVelocity = velocity;
            }
            var is_playing = (this._animation.getAnimationState(this._lastAnim) && this._animation.getAnimationState(this._lastAnim).isPlaying);
            // 狀態機：移動 or 靜止
            if (this.moveAxisX !== 0 || this.moveAxisY !== 0) {
                this._playerState = PlayerState.Walk;
                // 根據輸入更新朝向
                if (Math.abs(this.moveAxisX) > Math.abs(this.moveAxisY)) {
                    this._facing = this.moveAxisX > 0 ? FacingDirection.Right : FacingDirection.Left;
                }
                else {
                    this._facing = this.moveAxisY > 0 ? FacingDirection.Up : FacingDirection.Down;
                }
            }
            else if (!is_playing) {
                this._playerState = PlayerState.Idle;
            }
            else if (this.iswalking()) {
                this._playerState = PlayerState.Idle;
            }
            // 這裡可以根據按鍵觸發攻擊等狀態
            if (!is_playing || !this.incombo()) {
                if (this.inputSource.attack === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack;
                    this.player.getComponent("Player").playattack1sound();
                }
                else if (this.inputSource.attack2 === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack2;
                    this.player.getComponent("Player").playattack2sound();
                }
                else if (this.inputSource.attack3 === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Attack3;
                    this.player.getComponent("Player").playattack3sound();
                }
                else if (this.inputSource.gethurt === IInputControls_1.ButtonState.Pressed) {
                    this._playerState = PlayerState.Hurt;
                    this.player.getComponent("Player").takeDamage(5);
                    this.inputSource._xKey = IInputControls_1.ButtonState.Held;
                }
                this.incombo();
            }
            // 狀態+方向決定動畫
            var animName = this.getAnimName(this._playerState, this._facing);
            //如果是combo 狀態 播放動畫直到 combo 結束
            if (this._animation && animName && animName !== this._lastAnim && !this.stopupdate()) {
                console.log(this._lastAnim, animName);
                this._animState = this._animation.play(animName);
                this._lastAnim = animName;
            }
            console.log(this._playerState, this._lastAnim, this.combostep, this.combotimer);
        }
    };
    ActorController.prototype.getAnimName = function (state, facing) {
        switch (state) {
            case PlayerState.Combo_1:
                switch (facing) {
                    case FacingDirection.Right: return this.combo_right_1;
                    case FacingDirection.Left: return this.combo_left_1;
                    case FacingDirection.Up: return this.combo_up_1;
                    case FacingDirection.Down: return this.combo_down_1;
                }
                break;
            case PlayerState.Walk:
                switch (facing) {
                    case FacingDirection.Right: return this.walkRightAnimation;
                    case FacingDirection.Left: return this.walkLeftAnimation;
                    case FacingDirection.Up: return this.walkUpAnimation;
                    case FacingDirection.Down: return this.walkDownAnimation;
                }
                break;
            case PlayerState.Idle:
                return this.idleAnimation;
            case PlayerState.Attack:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right;
                    case FacingDirection.Left: return this.attack_left;
                    case FacingDirection.Up: return this.attack_up;
                    case FacingDirection.Down: return this.attack_down;
                }
                break;
            case PlayerState.Attack2:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right_2;
                    case FacingDirection.Left: return this.attack_left_2;
                    case FacingDirection.Up: return this.attack_up_2;
                    case FacingDirection.Down: return this.attack_down_2;
                }
                break;
            case PlayerState.Attack3:
                switch (facing) {
                    case FacingDirection.Right: return this.attack_right_3;
                    case FacingDirection.Left: return this.attack_left_3;
                    case FacingDirection.Up: return this.attack_up_3;
                    case FacingDirection.Down: return this.attack_down_3;
                }
                break;
            case PlayerState.Hurt:
                switch (facing) {
                    case FacingDirection.Right: return this.hurt_right;
                    case FacingDirection.Left: return this.hurt_left;
                    case FacingDirection.Up: return this.hurt_up;
                    case FacingDirection.Down: return this.hurt_down;
                }
                break;
            case PlayerState.Die:
                switch (facing) {
                    case FacingDirection.Right: return this.death_right;
                    case FacingDirection.Left: return this.death_left;
                    case FacingDirection.Up: return this.death_up;
                    case FacingDirection.Down: return this.death_down;
                }
                break;
        }
        return "";
    };
    ActorController.prototype.onAnimFinished = function () {
        console.log("finish");
        if (this._playerState === PlayerState.Attack ||
            this._playerState === PlayerState.Attack2 ||
            this._playerState === PlayerState.Attack3 ||
            this._playerState === PlayerState.Hurt ||
            this._playerState === PlayerState.Combo_1) {
            this._playerState = PlayerState.Idle;
            this._lastAnim = "";
        }
    };
    ActorController.prototype.stopupdate = function () {
        var animNames = [
            this.combo_up_1,
            this.combo_down_1,
            this.combo_left_1,
            this.combo_right_1
        ];
        for (var _i = 0, animNames_1 = animNames; _i < animNames_1.length; _i++) {
            var name = animNames_1[_i];
            var state = this._animation.getAnimationState(name);
            if (state && state.isPlaying)
                return true;
        }
        return false;
    };
    ActorController.prototype.incombo = function () {
        if (this._playerState === PlayerState.Combo_1)
            return true;
        if (this._playerState === PlayerState.Attack) {
            this.combostep = 1;
            this.combotimer = 0;
            return false;
        }
        else if (this._playerState === PlayerState.Attack2 && this.combostep === 1 && this.combotimer < this.comboInterval) {
            this.combostep = 2;
            this.combotimer = 0;
            return false;
        }
        else if (this._playerState === PlayerState.Attack3 && this.combostep === 2 && this.combotimer < this.comboInterval) {
            this.combostep = 3;
            this.combotimer = 0;
            this._playerState = PlayerState.Combo_1;
            return true;
        }
        return false;
    };
    ActorController.prototype.iswalking = function () {
        var animNames = [
            this.walkDownAnimation, this.walkLeftAnimation, this.walkRightAnimation, this.walkUpAnimation
        ];
        for (var _i = 0, animNames_2 = animNames; _i < animNames_2.length; _i++) {
            var name = animNames_2[_i];
            var state = this._animation.getAnimationState(name);
            if (state && state.isPlaying)
                return true;
        }
        return false;
    };
    ActorController.prototype.godie = function () {
        this._playerState = PlayerState.Die;
        this.scheduleOnce(function () {
            var Mgr = cc.find("GameManager").getComponent("GameManager");
            Mgr.EndGame();
        }, 1);
    };
    __decorate([
        property({ type: cc.Enum(FacingDirection) })
    ], ActorController.prototype, "initialFacingDirection", void 0);
    __decorate([
        property(cc.Node)
    ], ActorController.prototype, "player", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "idleAnimationName", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "moveAnimationName", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkRightAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkLeftAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkUpAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "walkDownAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "idleAnimation", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down_2", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_right_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_left_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_up_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "attack_down_3", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "death_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_right", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_left", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_up", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "hurt_down", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_right_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_left_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_up_1", void 0);
    __decorate([
        property(cc.String)
    ], ActorController.prototype, "combo_down_1", void 0);
    __decorate([
        property(cc.Float)
    ], ActorController.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], ActorController.prototype, "comboInterval", void 0);
    ActorController = __decorate([
        ccclass
    ], ActorController);
    return ActorController;
}(Controller_1.default));
exports.default = ActorController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQWN0b3JDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25HLGlEQUE0QztBQUM1Qyx5REFBcUU7QUFHL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSyxXQVNKO0FBVEQsV0FBSyxXQUFXO0lBQ1osNkNBQUksQ0FBQTtJQUNKLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sbURBQU8sQ0FBQTtJQUNQLG1EQUFPLENBQUE7SUFDUCw2Q0FBSSxDQUFBO0lBQ0osMkNBQUcsQ0FBQTtJQUNILG1EQUFPLENBQUE7QUFDWCxDQUFDLEVBVEksV0FBVyxLQUFYLFdBQVcsUUFTZjtBQUVELElBQUssZUFLSjtBQUxELFdBQUssZUFBZTtJQUNoQix1REFBSyxDQUFBO0lBQ0wscURBQUksQ0FBQTtJQUNKLGlEQUFFLENBQUE7SUFDRixxREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxJLGVBQWUsS0FBZixlQUFlLFFBS25CO0FBRUQsU0FBUyxJQUFJLENBQUMsQ0FBUztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQ7OztHQUdHO0FBRUg7SUFBNkMsbUNBQVU7SUFBdkQ7UUFBQSxxRUErVEM7UUE3VEcsNEJBQXNCLEdBQUcsZUFBZSxDQUFDLEtBQUss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QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0o7SUFhZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNPO0lBcEdULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0ErVG5DO0lBQUQsc0JBQUM7Q0EvVEQsQUErVEMsQ0EvVDRDLG9CQUFVLEdBK1R0RDtrQkEvVG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9pbnB1dC9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzLCBCdXR0b25TdGF0ZSB9IGZyb20gXCIuL2lucHV0L0lJbnB1dENvbnRyb2xzXCI7XHJcbmltcG9ydCAgUGxheWVyICAgIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZW51bSBQbGF5ZXJTdGF0ZXtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgQXR0YWNrLFxyXG4gICAgQXR0YWNrMixcclxuICAgIEF0dGFjazMsXHJcbiAgICBIdXJ0LFxyXG4gICAgRGllICxcclxuICAgIENvbWJvXzFcclxufVxyXG5cclxuZW51bSBGYWNpbmdEaXJlY3Rpb24ge1xyXG4gICAgUmlnaHQsXHJcbiAgICBMZWZ0LFxyXG4gICAgVXAsXHJcbiAgICBEb3duXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ24oeDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4geCA+IDAgPyAxIDogeCA8IDAgPyAtMSA6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHMgbW92ZW1lbnQgYW5kIGFjdGlvbnMgZm9yIGVhY2ggYWN0b3IuXHJcbiAqIFRvZ2dsZSBcIlVzZSBQbGF5ZXIgSW5wdXRcIiB0byByZWFkIGZyb20gcGxheWVyIGlucHV0LlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3JDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEZhY2luZ0RpcmVjdGlvbikgfSlcclxuICAgIGluaXRpYWxGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGlkbGVBbmltYXRpb25OYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBtb3ZlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIF9pZGxlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9tb3ZlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgd2Fsa1JpZ2h0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgd2Fsa0xlZnRBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtVcEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa191cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHdhbGtEb3duQW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaWRsZUFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfc3RhbmRieVwiOyBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0OiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0xXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2xlZnQ6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja191cDogc3RyaW5nID0gXCJhdHRhY2tfdXAtMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX3JpZ2h0XzI6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfbGVmdF8yOiBzdHJpbmcgPSBcImF0dGFja19sZWZ0LTJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfdXBfMjogc3RyaW5nID0gXCJhdHRhY2tfdXAtMlwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19kb3duXzI6IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tMlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBhdHRhY2tfcmlnaHRfMzogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja19sZWZ0XzM6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtM1wiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGF0dGFja191cF8zOiBzdHJpbmcgPSBcImF0dGFja191cC0zXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYXR0YWNrX2Rvd25fMzogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0zXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGRlYXRoX3JpZ2h0OiBzdHJpbmcgPSBcImRlYXRoX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfbGVmdDogc3RyaW5nID0gXCJkZWF0aF9sZWZ0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgZGVhdGhfdXA6IHN0cmluZyA9IFwiZGVhdGhfdXBcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBkZWF0aF9kb3duOiBzdHJpbmcgPSBcImRlYXRoX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaHVydF9yaWdodDogc3RyaW5nID0gXCJodXJ0X3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaHVydF9sZWZ0OiBzdHJpbmcgPSBcImh1cnRfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfdXA6IHN0cmluZyA9IFwiaHVydF91cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGh1cnRfZG93bjogc3RyaW5nID0gXCJodXJ0X2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgY29tYm9fcmlnaHRfMTogc3RyaW5nID0gXCJjb21iby0xX3JpZ2h0XCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgY29tYm9fbGVmdF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfbGVmdFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX3VwXzE6IHN0cmluZyA9IFwiY29tYm8tMV91cFwiO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGNvbWJvX2Rvd25fMTogc3RyaW5nID0gXCJjb21iby0xX2Rvd25cIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtb3ZlU3BlZWQgPSA2MDsgXHJcblxyXG4gICAgcHVibGljIG1vdmVBeGlzWCA9IDA7XHJcbiAgICBwdWJsaWMgbW92ZUF4aXNZID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9wbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgcHJpdmF0ZSBfZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uRG93bjsgLy8g6aCQ6Kit5pyd5LiLXHJcbiAgICBwcml2YXRlIF9sYXN0QW5pbTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIGNvbWJvc3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29tYm90aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBjb21ib0ludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbW92ZUF4aXMyRCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5tb3ZlQXhpc1gsIHRoaXMubW92ZUF4aXNZKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uKSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLkFuaW1hdGlvbiBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmlnaWRib2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5fcmlnaWRib2R5KSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLlJpZ2lkQm9keSBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCAmJiBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5faWRsZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmlkbGVBbmltYXRpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZUFuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLm1vdmVBbmltYXRpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLnBsYXkodGhpcy5pZGxlQW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vbignZmluaXNoZWQnLCB0aGlzLm9uQW5pbUZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkRpZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbWJvc3RlcCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbWJvdGltZXIgPj0gdGhpcy5jb21ib0ludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0U291cmNlICkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmNvbWJvKCkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNYID0gdGhpcy5pbnB1dFNvdXJjZS5ob3Jpem9udGFsQXhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNZID0gdGhpcy5pbnB1dFNvdXJjZS52ZXJ0aWNhbEF4aXM7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMubW92ZUF4aXMyRC5tdWwodGhpcy5tb3ZlU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2lkYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkYm9keS5saW5lYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc19wbGF5aW5nPSAodGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuX2xhc3RBbmltKSAmJiB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5fbGFzdEFuaW0pLmlzUGxheWluZylcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDni4DmhYvmqZ/vvJrnp7vli5Ugb3Ig6Z2c5q2iXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlQXhpc1ggIT09IDAgfHwgdGhpcy5tb3ZlQXhpc1kgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLldhbGs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55pOa6Ly45YWl5pu05paw5pyd5ZCRXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubW92ZUF4aXNYKSA+IE1hdGguYWJzKHRoaXMubW92ZUF4aXNZKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWCA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uUmlnaHQgOiBGYWNpbmdEaXJlY3Rpb24uTGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWSA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uVXAgOiBGYWNpbmdEaXJlY3Rpb24uRG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc19wbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc3dhbGtpbmcoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyDpgJnoo6Hlj6/ku6XmoLnmk5rmjInpjbXop7jnmbzmlLvmk4rnrYnni4DmhYtcclxuICAgICAgICAgICAgICAgIGlmKCFpc19wbGF5aW5nIHx8ICF0aGlzLmluY29tYm8oKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrPT09QnV0dG9uU3RhdGUuUHJlc3NlZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2s7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazFzb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrMj09PUJ1dHRvblN0YXRlLlByZXNzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrMnNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5pbnB1dFNvdXJjZS5hdHRhY2szPT09QnV0dG9uU3RhdGUuUHJlc3NlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2szc291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRTb3VyY2UuZ2V0aHVydD09PUJ1dHRvblN0YXRlLlByZXNzZWQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSHVydDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS50YWtlRGFtYWdlKDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0U291cmNlLl94S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvbWJvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDni4DmhYsr5pa55ZCR5rG65a6a5YuV55WrXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSB0aGlzLmdldEFuaW1OYW1lKHRoaXMuX3BsYXllclN0YXRlLCB0aGlzLl9mYWNpbmcpO1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK9jb21ibyDni4DmhYsg5pKt5pS+5YuV55Wr55u05YiwIGNvbWJvIOe1kOadn1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbiAmJiBhbmltTmFtZSAmJiBhbmltTmFtZSAhPT0gdGhpcy5fbGFzdEFuaW0gJiYgIXRoaXMuc3RvcHVwZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbGFzdEFuaW0sYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0QW5pbSA9IGFuaW1OYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fcGxheWVyU3RhdGUsdGhpcy5fbGFzdEFuaW0gICx0aGlzLmNvbWJvc3RlcCwgdGhpcy5jb21ib3RpbWVyKTtcclxuXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0QW5pbU5hbWUoc3RhdGU6IFBsYXllclN0YXRlLCBmYWNpbmc6IEZhY2luZ0RpcmVjdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQ29tYm9fMTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuY29tYm9fcmlnaHRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmNvbWJvX2xlZnRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmNvbWJvX3VwXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5jb21ib19kb3duXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5XYWxrOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy53YWxrUmlnaHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy53YWxrTGVmdEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLndhbGtVcEFuaW1hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLndhbGtEb3duQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuSWRsZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZGxlQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2s6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrMjpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuYXR0YWNrX3JpZ2h0XzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdF8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5hdHRhY2tfZG93bl8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodF8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnRfMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmF0dGFja191cF8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd25fMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5IdXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5odXJ0X3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuaHVydF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuaHVydF91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmh1cnRfZG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkRpZTpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuZGVhdGhfcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5kZWF0aF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuZGVhdGhfdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5kZWF0aF9kb3duO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICBwcml2YXRlIG9uQW5pbUZpbmlzaGVkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5BdHRhY2sgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazIgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkh1cnQgfHxcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEgXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdEFuaW0gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3B1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbU5hbWVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX3VwXzEsXHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9fZG93bl8xLFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJvX2xlZnRfMSxcclxuICAgICAgICAgICAgdGhpcy5jb21ib19yaWdodF8xXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGluY29tYm8oKXtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkNvbWJvXzEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT1QbGF5ZXJTdGF0ZS5BdHRhY2sgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMiAmJiB0aGlzLmNvbWJvc3RlcCA9PT0gMSAmJiB0aGlzLmNvbWJvdGltZXIgPCB0aGlzLmNvbWJvSW50ZXJ2YWwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgJiYgdGhpcy5jb21ib3N0ZXAgPT09IDIgJiYgdGhpcy5jb21ib3RpbWVyIDwgdGhpcy5jb21ib0ludGVydmFsKXtcclxuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkNvbWJvXzE7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpc3dhbGtpbmcoKXtcclxuICAgICAgICBjb25zdCBhbmltTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMud2Fsa0Rvd25BbmltYXRpb24sdGhpcy53YWxrTGVmdEFuaW1hdGlvbix0aGlzLndhbGtSaWdodEFuaW1hdGlvbix0aGlzLndhbGtVcEFuaW1hdGlvblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGFuaW1OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29kaWUoKXtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkRpZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICBsZXQgTWdyID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBNZ3IuRW5kR2FtZSgpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcbiAgICBcclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd91e1lWAFJRIIlaJW6QkXH', 'GameOver');
// scripts/Menu/GameOver.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onOk = null;
        return _this;
    }
    GameOver.prototype.onLoad = function () {
        var _this = this;
        var restartBtn = cc.find("Restart", this.node).getComponent(cc.Button);
        restartBtn.node.on('click', function () {
            if (_this.onOk)
                _this.onOk();
            _this.node.destroy();
        });
    };
    GameOver = __decorate([
        ccclass('GameOver')
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFXQztRQVZRLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVUxQyxDQUFDO0lBUkMseUJBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBVmtCLFFBQVE7UUFENUIsT0FBTyxDQUFDLFVBQVUsQ0FBQztPQUNDLFFBQVEsQ0FXNUI7SUFBRCxlQUFDO0NBWEQsQUFXQyxDQVhxQyxFQUFFLENBQUMsU0FBUyxHQVdqRDtrQkFYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xyXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZU92ZXInKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgcHVibGljIG9uT2s6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gY2MuZmluZChcIlJlc3RhcnRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIHJlc3RhcnRCdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm9uT2spIHRoaXMub25PaygpO1xyXG4gICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3634jeIXpK057N1J8pdaI+', 'MapManager');
// scripts/MapManager.ts

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
var ZSortOnLoad_1 = require("./utilities/ZSortOnLoad");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapManager = /** @class */ (function (_super) {
    __extends(MapManager, _super);
    function MapManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objectLayerNode = null;
        _this.actorLayerNode = null;
        return _this;
        // update (dt) {}
    }
    MapManager_1 = MapManager;
    Object.defineProperty(MapManager, "Instance", {
        get: function () {
            return MapManager_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    MapManager.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        MapManager_1.instance = this;
        this.objectLayerNode.addComponent(ZSortOnLoad_1.default);
    };
    MapManager.prototype.start = function () {
        var actors = [];
        for (var _i = 0, _a = this.actorLayerNode.children; _i < _a.length; _i++) {
            var actor = _a[_i];
            actors.push(actor);
        }
        for (var _b = 0, actors_1 = actors; _b < actors_1.length; _b++) {
            var actor = actors_1[_b];
            // Possibly an engine bug: A node's world position can change after reparenting.
            // That's why we have to fix the position manually here.
            // Bad API :(
            var worldPosBefore = actor.convertToWorldSpaceAR(cc.Vec2.ZERO);
            actor.setParent(this.objectLayerNode);
            actor.setPosition(actor.parent.convertToNodeSpaceAR(worldPosBefore));
        }
    };
    var MapManager_1;
    MapManager.instance = null;
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "objectLayerNode", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "actorLayerNode", void 0);
    MapManager = MapManager_1 = __decorate([
        ccclass
    ], MapManager);
    return MapManager;
}(cc.Component));
exports.default = MapManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUE3QkcscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7O1FBMEIvQixpQkFBaUI7SUFDckIsQ0FBQzttQkFwQ29CLFVBQVU7SUFHM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBQ0ksT0FBTyxZQUFVLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBT0Qsd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxZQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBYyxFQUFFLENBQUM7UUFDM0IsS0FBa0IsVUFBNEIsRUFBNUIsS0FBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEIsRUFBRTtZQUEzQyxJQUFJLEtBQUssU0FBQTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFDRCxLQUFrQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtZQUFyQixJQUFJLEtBQUssZUFBQTtZQUNWLGdGQUFnRjtZQUNoRix3REFBd0Q7WUFDeEQsYUFBYTtZQUNiLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQzs7SUEvQmMsbUJBQVEsR0FBZSxJQUFJLENBQUM7SUFLM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNhO0lBVGQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW9DOUI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDdUMsRUFBRSxDQUFDLFNBQVMsR0FvQ25EO2tCQXBDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFpTb3J0T25Mb2FkIGZyb20gXCIuL3V0aWxpdGllcy9aU29ydE9uTG9hZFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWFwTWFuYWdlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gTWFwTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb2JqZWN0TGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWN0b3JMYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIE1hcE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub2JqZWN0TGF5ZXJOb2RlLmFkZENvbXBvbmVudChaU29ydE9uTG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGFjdG9yczogY2MuTm9kZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYWN0b3Igb2YgdGhpcy5hY3RvckxheWVyTm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBhY3RvcnMucHVzaChhY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGFjdG9yIG9mIGFjdG9ycykge1xyXG4gICAgICAgICAgICAvLyBQb3NzaWJseSBhbiBlbmdpbmUgYnVnOiBBIG5vZGUncyB3b3JsZCBwb3NpdGlvbiBjYW4gY2hhbmdlIGFmdGVyIHJlcGFyZW50aW5nLlxyXG4gICAgICAgICAgICAvLyBUaGF0J3Mgd2h5IHdlIGhhdmUgdG8gZml4IHRoZSBwb3NpdGlvbiBtYW51YWxseSBoZXJlLlxyXG4gICAgICAgICAgICAvLyBCYWQgQVBJIDooXHJcbiAgICAgICAgICAgIGxldCB3b3JsZFBvc0JlZm9yZSA9IGFjdG9yLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICBhY3Rvci5zZXRQYXJlbnQodGhpcy5vYmplY3RMYXllck5vZGUpO1xyXG4gICAgICAgICAgICBhY3Rvci5zZXRQb3NpdGlvbihhY3Rvci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NCZWZvcmUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22a1002ZNBB7bNqwt8XPmZL', 'UIManager');
// scripts/UIManager.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
    };
    NewClass.prototype.start = function () {
    };
<<<<<<< Updated upstream
    NewClass = __decorate([
=======
    MapGenerator.prototype.regenerateMap = function (level) {
        this.wallList.removeAllChildren();
        // Find Level
        this.Map_xmax = level * 4 + 6; // Level 1,2,3...，Map_xmax  = 10,14,18...
        this.Map_ymax = level * 2 + 3; // Level 1,2,3...，Map_ymax = 5,7,9...
        this.chestboxes = level * 2 + 1;
        this.myMap = new MapGeneratorCore_1.Map_Graph(this.Map_xmax, this.Map_ymax);
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                var prefab_temp = cc.instantiate(this.groundPrefab);
                prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                this.wallList.addChild(prefab_temp, 0, 'ground');
            }
        }
        for (var _x = 0; _x < this.Map_xmax; _x++) {
            for (var _y = 0; _y < this.Map_ymax; _y++) {
                if (this.myMap.mapBlock[_y][_x].up) {
                    var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
                if (this.myMap.mapBlock[_y][_x].left) {
                    var prefab_temp = cc.instantiate(this.verticalWallPrefab);
                    prefab_temp.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
                    this.wallList.addChild(prefab_temp, 1, 'wall');
                }
            }
        }
        for (var i = 0; i < this.Map_xmax; i++) {
            var prefab_temp = cc.instantiate(this.horizontalWallPrefab);
            prefab_temp.setPosition(i * this.blocksize_x, this.Map_ymax * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        for (var i = 0; i < this.Map_ymax; i++) {
            var prefab_temp = cc.instantiate(this.verticalWallPrefab);
            prefab_temp.setPosition(this.Map_xmax * this.blocksize_x, i * this.blocksize_y);
            this.wallList.addChild(prefab_temp, 1, 'wall');
        }
        this.generateKey_Lock();
    };
    MapGenerator.prototype.generateKey_Lock = function () {
        var _x0 = 0;
        _x0 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        var _y0 = 0;
        _y0 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        var _x1 = 0;
        _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
        var _y1 = 0;
        _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        while ((_x0 === _x1) && (_y0 === _y1)) {
            _x1 = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            _y1 = Math.floor(Math.random() * this.Map_ymax) + 0.5;
        }
        var mapBlocks = []; // mapBlocks[_y][_x] mapBlocks[_i][_j]
        for (var _i = 0; _i < this.MapYmax; _i += 1) {
            mapBlocks[_i] = [];
            for (var _j = 0; _j < this.MapXmax; _j += 1) {
                mapBlocks[_i][_j] = false;
            }
        }
        mapBlocks[Math.floor(_y0)][Math.floor(_x0)] = true;
        mapBlocks[Math.floor(_y1)][Math.floor(_x1)] = true;
        for (var i = 0; i < this.chestboxes; i += 1) {
            var _x = 0;
            _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
            var _y = 0;
            _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            while (mapBlocks[Math.floor(_y)][Math.floor(_x)]) {
                _x = Math.floor(Math.random() * this.Map_xmax) + 0.5;
                _y = Math.floor(Math.random() * this.Map_ymax) + 0.5;
            }
            mapBlocks[Math.floor(_y)][Math.floor(_x)] = true;
            //=====================================================================
            var prefab_temp_2 = cc.instantiate(this.chestWallPrefab);
            prefab_temp_2.setPosition(_x * this.blocksize_x, _y * this.blocksize_y);
            this.wallList.addChild(prefab_temp_2, 1, 'chest');
            console.log("chest at:", _x, _y);
        }
        var prefab_temp_0 = cc.instantiate(this.keyToNextLevel);
        prefab_temp_0.setPosition(_x0 * this.blocksize_x, _y0 * this.blocksize_y);
        this.wallList.addChild(prefab_temp_0, 1, 'key');
        console.log("Key at:", _x0, _y0);
        var prefab_temp_1 = cc.instantiate(this.lockToNextLevel);
        prefab_temp_1.setPosition(_x1 * this.blocksize_x, _y1 * this.blocksize_y);
        this.wallList.addChild(prefab_temp_1, 1, 'lock');
        console.log("Lock at:", _x1, _y1);
    };
    __decorate([
        property(cc.Node)
    ], MapGenerator.prototype, "wallList", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "verticalWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "horizontalWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "chestWallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "keyToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "lockToNextLevel", void 0);
    __decorate([
        property(cc.Prefab)
    ], MapGenerator.prototype, "groundPrefab", void 0);
    MapGenerator = __decorate([
>>>>>>> Stashed changes
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWNBLENBQUM7SUFaRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFHbkQsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FjNUI7SUFBRCxlQUFDO0NBZEQsQUFjQyxDQWRxQyxFQUFFLENBQUMsU0FBUyxHQWNqRDtrQkFkb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyx1REFBaUc7QUFHakc7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFFSTs7OztpQ0FJeUI7UUFON0IscUVBb0xDO1FBM0tHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0RBQWtEO1FBRWxELHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVyQyxrREFBa0Q7UUFFbEQsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBR3ZDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBZSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFZLEVBQUUsQ0FBQztRQUN2QixjQUFRLEdBQVksQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVksQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksR0FBRyxDQUFDO1FBQzNCLGlCQUFXLEdBQVksR0FBRyxDQUFDOztRQStJbkMsaUJBQWlCO0lBQ3JCLENBQUM7SUEvSUcsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGlDQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMs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QUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO1FBQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO1FBQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO1FBQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFekUsT0FBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBQztZQUNqQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0RCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN6RDtRQUVELElBQUksU0FBUyxHQUFpQixFQUFFLENBQUMsQ0FBQyxzQ0FBc0M7UUFDeEUsS0FBSSxJQUFJLEVBQUUsR0FBVSxDQUFDLEVBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxJQUFJLENBQUMsRUFBQztZQUMxQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUksSUFBSSxFQUFFLEdBQVUsQ0FBQyxFQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQzFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0I7U0FDSjtRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbkQsS0FBSSxJQUFJLENBQUMsR0FBUSxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQztZQUN0QyxJQUFJLEVBQUUsR0FBVSxDQUFDLENBQUM7WUFBQSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN2RSxJQUFJLEVBQUUsR0FBVSxDQUFDLENBQUM7WUFBQSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN2RSxPQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDO2dCQUM1QyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckQsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDeEQ7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakQsdUVBQXVFO1lBQ3ZFLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNELGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuQztRQUVELElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRCxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXpLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2lCO0lBSXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1c7SUE3QmQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW9MaEM7SUFBRCxtQkFBQztDQXBMRCxBQW9MQyxDQXBMeUMsRUFBRSxDQUFDLFNBQVMsR0FvTHJEO2tCQXBMb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuaW1wb3J0IHtNYXBfbm9kZSwgTWFwX2VkZ2UsIE1hcF9zZWxlY3RlZF9lZGdlLCBtYXBSb29tVW5pdCwgTWFwX0dyYXBofSBmcm9tICcuL01hcEdlbmVyYXRvckNvcmUnO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwR2VuZXJhdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nOyovXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3YWxsTGlzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvL1BsZWFzZSBzZXQgdGhlIEFuY2hvciBvZiBQcmVmYWIgaW50byAoMCwwKSBmaXJzdFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdmVydGljYWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy9QbGVhc2Ugc2V0IHRoZSBBbmNob3Igb2YgUHJlZmFiIGludG8gKDAsMCkgZmlyc3RcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGhvcml6b250YWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjaGVzdFdhbGxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGtleVRvTmV4dExldmVsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBsb2NrVG9OZXh0TGV2ZWw6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdyb3VuZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHByaXZhdGUgbXlNYXAgOiBNYXBfR3JhcGggPSBudWxsO1xuICAgIHByaXZhdGUgTWFwX3htYXggOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIE1hcF95bWF4IDogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIGNoZXN0Ym94ZXMgOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgYmxvY2tzaXplX3ggOiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBibG9ja3NpemVfeSA6IG51bWJlciA9IDEwMDtcbiAgICBwdWJsaWMgZ2V0IE1hcFhtYXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTWFwX3htYXgqIHRoaXMuYmxvY2tzaXplX3g7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgTWFwWW1heCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5NYXBfeW1heCAqIHRoaXMuYmxvY2tzaXplX3k7XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgO1xuICAgIH1cblxuICAgIEdlbmVyYXRvck1hcCAoKSB7XG4gICAgICAgIHRoaXMubXlNYXAgPSBuZXcgTWFwX0dyYXBoKHRoaXMuTWFwX3htYXgsdGhpcy5NYXBfeW1heCk7Ly8gZ2VuZXJhdGUgbWFwXG4gICAgICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMuTWFwX3ltYXg7X3krKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XG4gICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDAsJ2dyb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMuTWFwX3ltYXg7X3krKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLnVwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlNYXAubWFwQmxvY2tbX3ldW194XS5sZWZ0KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZlcnRpY2FsV2FsbFByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgb3V0ZXIgd2FsbHNcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF94bWF4O2krKyl7XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oaSp0aGlzLmJsb2Nrc2l6ZV94LHRoaXMuTWFwX3ltYXgqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSB2ZXJ0aWNhbCB3YWxsc1xuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDtpPHRoaXMuTWFwX3ltYXg7aSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24odGhpcy5NYXBfeG1heCp0aGlzLmJsb2Nrc2l6ZV94LGkqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlbmVyYXRlS2V5X0xvY2soKTtcbiAgICB9XG5cbiAgICByZWdlbmVyYXRlTWFwKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy53YWxsTGlzdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAvLyBGaW5kIExldmVsXG4gICAgICAgIHRoaXMuTWFwX3htYXggPSBsZXZlbCo0ICsgNiA7IC8vIExldmVsIDEsMiwzLi4u77yMTWFwX3htYXggID0gMTAsMTQsMTguLi5cbiAgICAgICAgdGhpcy5NYXBfeW1heCA9IGxldmVsKjIgKyAzIDsgLy8gTGV2ZWwgMSwyLDMuLi7vvIxNYXBfeW1heCA9IDUsNyw5Li4uXG4gICAgICAgIHRoaXMuY2hlc3Rib3hlcyA9IGxldmVsKjIgKyAxIDtcblxuICAgICAgICB0aGlzLm15TWFwID0gbmV3IE1hcF9HcmFwaCh0aGlzLk1hcF94bWF4LCB0aGlzLk1hcF95bWF4KTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMuTWFwX3ltYXg7X3krKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XG4gICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDAsJ2dyb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMuTWFwX3htYXg7X3grKyl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLmxlZnQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudmVydGljYWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaTpudW1iZXIgPSAwO2k8dGhpcy5NYXBfeG1heDtpKyspe1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKGkqdGhpcy5ibG9ja3NpemVfeCx0aGlzLk1hcF95bWF4KnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudmVydGljYWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKHRoaXMuTWFwX3htYXgqdGhpcy5ibG9ja3NpemVfeCxpKnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUtleV9Mb2NrKCk7XG4gICAgfVxuICAgIFxuICAgIGdlbmVyYXRlS2V5X0xvY2soKXtcbiAgICAgICAgbGV0IF94MDpudW1iZXIgPSAwO194MCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3htYXgpICsgMC41O1xuICAgICAgICBsZXQgX3kwOm51bWJlciA9IDA7X3kwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XG4gICAgICAgIGxldCBfeDE6bnVtYmVyID0gMDtfeDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcbiAgICAgICAgbGV0IF95MTpudW1iZXIgPSAwO195MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xuXG4gICAgICAgIHdoaWxlKChfeDAgPT09IF94MSkgJiYgKF95MCA9PT0gX3kxKSl7XG4gICAgICAgICAgICBfeDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcbiAgICAgICAgICAgIF95MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hcEJsb2NrcyA6IGJvb2xlYW5bXVtdID0gW107IC8vIG1hcEJsb2Nrc1tfeV1bX3hdIG1hcEJsb2Nrc1tfaV1bX2pdXG4gICAgICAgIGZvcihsZXQgX2k6bnVtYmVyID0gMDtfaTx0aGlzLk1hcFltYXg7X2kgKz0gMSl7XG4gICAgICAgICAgICBtYXBCbG9ja3NbX2ldID0gW107XG4gICAgICAgICAgICBmb3IobGV0IF9qOm51bWJlciA9IDA7X2o8dGhpcy5NYXBYbWF4O19qICs9IDEpe1xuICAgICAgICAgICAgICAgIG1hcEJsb2Nrc1tfaV1bX2pdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFwQmxvY2tzW01hdGguZmxvb3IoX3kwKV1bTWF0aC5mbG9vcihfeDApXSA9IHRydWU7XG4gICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95MSldW01hdGguZmxvb3IoX3gxKV0gPSB0cnVlO1xuXG4gICAgICAgIGZvcihsZXQgaTpudW1iZXI9MDtpPHRoaXMuY2hlc3Rib3hlcztpKz0xKXtcbiAgICAgICAgICAgIGxldCBfeDpudW1iZXIgPSAwO194ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XG4gICAgICAgICAgICBsZXQgX3k6bnVtYmVyID0gMDtfeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xuICAgICAgICAgICAgd2hpbGUobWFwQmxvY2tzW01hdGguZmxvb3IoX3kpXVtNYXRoLmZsb29yKF94KV0pe1xuICAgICAgICAgICAgICAgIF94ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XG4gICAgICAgICAgICAgICAgX3kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF95bWF4KSArIDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95KV1bTWF0aC5mbG9vcihfeCldID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcF8yID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaGVzdFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiX3RlbXBfMi5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcF8yLDEsJ2NoZXN0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZXN0IGF0OlwiLF94LCBfeSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByZWZhYl90ZW1wXzAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmtleVRvTmV4dExldmVsKTtcbiAgICAgICAgcHJlZmFiX3RlbXBfMC5zZXRQb3NpdGlvbihfeDAqdGhpcy5ibG9ja3NpemVfeCxfeTAqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXBfMCwxLCdrZXknKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgYXQ6XCIsX3gwLCBfeTApO1xuXG4gICAgICAgIGNvbnN0IHByZWZhYl90ZW1wXzEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxvY2tUb05leHRMZXZlbCk7XG4gICAgICAgIHByZWZhYl90ZW1wXzEuc2V0UG9zaXRpb24oX3gxKnRoaXMuYmxvY2tzaXplX3gsX3kxKnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzEsMSwnbG9jaycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2sgYXQ6XCIsX3gxLCBfeTEpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
>>>>>>> Stashed changes
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/LoginSignUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c55e5C+eUhOeZ3fY8Q0UFHf', 'LoginSignUp');
// scripts/Menu/LoginSignUp.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// assets/scripts/LoginManager.ts
/*import { auth } from "./FirebaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginManager extends cc.Component {
    @property(cc.EditBox)
    emailEditBox: cc.EditBox = null;

    @property(cc.EditBox)
    passwordEditBox: cc.EditBox = null;

    @property(cc.Label)
    infoLabel: cc.Label = null;

  // Email 註冊
    onRegister() {
        const email = this.emailEditBox.string;
        const password = this.passwordEditBox.string;
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                this.infoLabel.string = "註冊成功：" + userCredential.user.email;
            })
        .catch(error => {
            this.infoLabel.string = "註冊失敗：" + error.message;
        });
    }

  // Email 登入
    onLogin() {
        const email = this.emailEditBox.string;
        const password = this.passwordEditBox.string;
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            this.infoLabel.string = "登入成功：" + userCredential.user.email;
        })
        .catch(error => {
            this.infoLabel.string = "登入失敗：" + error.message;
        });
    }

  // Google 登入
    onGoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then(result => {
            this.infoLabel.string = "Google 登入成功：" + result.user.email;
        })
        .catch(error => {
            this.infoLabel.string = "Google 登入失敗：" + error.message;
        });
    }
}*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTG9naW5TaWduVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFFbEYsaUNBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuLy8gYXNzZXRzL3NjcmlwdHMvTG9naW5NYW5hZ2VyLnRzXHJcbi8qaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuL0ZpcmViYXNlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVtYWlsRWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwYXNzd29yZEVkaXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGluZm9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAvLyBFbWFpbCDoqLvlhopcclxuICAgIG9uUmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRWRpdEJveC5zdHJpbmc7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyQ3JlZGVudGlhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIuiou+WGiuaIkOWKn++8mlwiICsgdXNlckNyZWRlbnRpYWwudXNlci5lbWFpbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIuiou+WGiuWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gRW1haWwg55m75YWlXHJcbiAgICBvbkxvZ2luKCkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5lbWFpbEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEVkaXRCb3guc3RyaW5nO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKHVzZXJDcmVkZW50aWFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvTGFiZWwuc3RyaW5nID0gXCLnmbvlhaXmiJDlip/vvJpcIiArIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIueZu+WFpeWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gR29vZ2xlIOeZu+WFpVxyXG4gICAgb25Hb29nbGVMb2dpbigpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwiR29vZ2xlIOeZu+WFpeaIkOWKn++8mlwiICsgcmVzdWx0LnVzZXIuZW1haWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIkdvb2dsZSDnmbvlhaXlpLHmlZfvvJpcIiArIGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0qL1xyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/LoadingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aec4WHPZxHE4ps/5MxYjR7', 'LoadingManager');
// scripts/Menu/LoadingManager.ts

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
var LoadingManager = /** @class */ (function (_super) {
    __extends(LoadingManager, _super);
    function LoadingManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.percentLabel = null;
        return _this;
    }
    LoadingManager.prototype.startLoading = function (targetScene) {
        var _this = this;
        this.progressBar.progress = 0;
        this.percentLabel.string = "0%";
        cc.director.preloadScene(targetScene, function (completedCount, totalCount, item) {
            var progress = completedCount / totalCount;
            // 預設最多到 0.9，預留補滿動畫
            if (progress > 0.9)
                progress = 0.9;
            _this.progressBar.progress = progress;
            _this.percentLabel.string = Math.floor(progress * 100) + "%";
        }, function () {
            // 預加載完成時，tween 補滿到 100%
            cc.tween(_this.progressBar)
                .to(0.3, { progress: 1 })
                .call(function () {
                _this.percentLabel.string = "100%";
                cc.director.loadScene(targetScene);
            })
                .start();
        });
    };
    __decorate([
        property(cc.ProgressBar)
    ], LoadingManager.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingManager.prototype, "percentLabel", void 0);
    LoadingManager = __decorate([
        ccclass
    ], LoadingManager);
    return LoadingManager;
}(cc.Component));
exports.default = LoadingManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTG9hZGluZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUEvQkcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQTRCbEMsQ0FBQztJQTFCRyxxQ0FBWSxHQUFaLFVBQWEsV0FBbUI7UUFBaEMsaUJBdUJDO1FBdEJELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3BCLFdBQVcsRUFDWCxVQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSTtZQUM3QixJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQzNDLG1CQUFtQjtZQUNuQixJQUFJLFFBQVEsR0FBRyxHQUFHO2dCQUFFLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRSxDQUFDLEVBQ0Q7WUFDSSx3QkFBd0I7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNyQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN4QixJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVztJQUxiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQ2xDO0lBQUQscUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzJDLEVBQUUsQ0FBQyxTQUFTLEdBaUN2RDtrQkFqQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwZXJjZW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBzdGFydExvYWRpbmcodGFyZ2V0U2NlbmU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XHJcbiAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBcIjAlXCI7XHJcblxyXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxyXG4gICAgICAgIHRhcmdldFNjZW5lLFxyXG4gICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIC8vIOmgkOioreacgOWkmuWIsCAwLjnvvIzpoJDnlZnoo5zmu7/li5XnlatcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMC45KSBwcm9ncmVzcyA9IDAuOTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSBNYXRoLmZsb29yKHByb2dyZXNzICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDpoJDliqDovInlrozmiJDmmYLvvIx0d2VlbiDoo5zmu7/liLAgMTAwJVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnByb2dyZXNzQmFyKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBwcm9ncmVzczogMSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudExhYmVsLnN0cmluZyA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0YXJnZXRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4999co+59BDVK7wwshiNS5K', 'Menu');
// scripts/Menu/Menu.ts

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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ExitButton = null;
        _this.Menubgm = null;
        _this.VolumnValue = 0.5;
        return _this;
    }
    Menu.prototype.onLoad = function () {
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            this.VolumnValue = Number(savedVolumn);
        else
            this.VolumnValue = 0.5;
        this.playbgm();
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
        var exitHandler = new cc.Component.EventHandler();
        exitHandler.target = this.node;
        exitHandler.component = "Menu";
        exitHandler.handler = "ExitButtonEvent";
        this.ExitButton.clickEvents.push(exitHandler);
    };
    Menu.prototype.start = function () {
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "Menu";
        StartButton.handler = "LoadGame";
        cc.find("Canvas/background/StartButton").getComponent(cc.Button).clickEvents.push(StartButton);
        var MapButton = new cc.Component.EventHandler();
        MapButton.target = this.node;
        MapButton.component = "Menu";
        MapButton.handler = "LoadMap";
        cc.find("Canvas/background/MapButton").getComponent(cc.Button).clickEvents.push(MapButton);
    };
    Menu.prototype.LoadGame = function () {
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo");
        });
    };
    Menu.prototype.LoadMap = function () {
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("demo_test");
        });
    };
    Menu.prototype.ExitButtonEvent = function () {
        cc.game.end();
    };
    Menu.prototype.playbgm = function () {
        if (this.Menubgm) {
            cc.audioEngine.playMusic(this.Menubgm, true);
        }
        else {
            cc.error("BGM not assigned!");
        }
    };
    __decorate([
        property(cc.Button)
    ], Menu.prototype, "ExitButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Menu.prototype, "Menubgm", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTZEQztRQTNERyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUFzRHJDLENBQUM7SUFwREcscUJBQU0sR0FBTjtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsS0FBSyxJQUFJO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV4RSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMvQixXQUFXLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9GLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoRCxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDN0IsU0FBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM3QixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckYsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRixjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELDhCQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQTFERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUNBQ007SUFMWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNkR4QjtJQUFELFdBQUM7Q0E3REQsQUE2REMsQ0E3RGlDLEVBQUUsQ0FBQyxTQUFTLEdBNkQ3QztrQkE3RG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIEV4aXRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIE1lbnViZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIFZvbHVtblZhbHVlOiBudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uICE9PSBudWxsKSB0aGlzLlZvbHVtblZhbHVlID0gTnVtYmVyKHNhdmVkVm9sdW1uKTtcclxuICAgICAgICBlbHNlIHRoaXMuVm9sdW1uVmFsdWUgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5wbGF5YmdtKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiLCB0aGlzLlZvbHVtblZhbHVlLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBsZXQgZXhpdEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGV4aXRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBleGl0SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBleGl0SGFuZGxlci5oYW5kbGVyID0gXCJFeGl0QnV0dG9uRXZlbnRcIjtcclxuICAgICAgICB0aGlzLkV4aXRCdXR0b24uY2xpY2tFdmVudHMucHVzaChleGl0SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgU3RhcnRCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBTdGFydEJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBTdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJMb2FkR2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9TdGFydEJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFN0YXJ0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgbGV0IE1hcEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgTWFwQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBNYXBCdXR0b24uY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgTWFwQnV0dG9uLmhhbmRsZXIgPSBcIkxvYWRNYXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvTWFwQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goTWFwQnV0dG9uKTtcclxuICAgIH1cclxuICAgIExvYWRHYW1lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2FkaW5nTWFuYWdlciA9IGNjLmZpbmQoXCJDYW52YXMvTG9hZGluZ01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiTG9hZGluZ01hbmFnZXJcIik7XHJcbiAgICAgICAgICAgIGxvYWRpbmdNYW5hZ2VyLnN0YXJ0TG9hZGluZyhcImRlbW9cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZE1hcCgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9hZGluZ01hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0xvYWRpbmdNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkxvYWRpbmdNYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBsb2FkaW5nTWFuYWdlci5zdGFydExvYWRpbmcoXCJkZW1vX3Rlc3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBFeGl0QnV0dG9uRXZlbnQoKXtcclxuICAgICAgICBjYy5nYW1lLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgcGxheWJnbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLk1lbnViZ20pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuTWVudWJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJCR00gbm90IGFzc2lnbmVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/MenuMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfc9apDJ+1PsaY2ZhPv7xhx', 'MenuMgr');
// scripts/Menu/MenuMgr.ts

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
var AuthManager_1 = require("./AuthManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Firebase v9+ 的例子
var MenuMgr = /** @class */ (function (_super) {
    __extends(MenuMgr, _super);
    function MenuMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VolumnValue = 0.5;
        _this.isSigningUp = false;
        _this.authComp = null;
        _this.startGameButton = null;
        return _this;
    }
    MenuMgr.prototype.onLoad = function () {
        // Hook up OptionButton → ShowSetting
        var OptionButton = new cc.Component.EventHandler();
        OptionButton.target = this.node;
        OptionButton.component = "MenuMgr";
        OptionButton.handler = "ShowSetting";
        cc.find("Canvas/background/OptionButton").getComponent(cc.Button).clickEvents.push(OptionButton);
        cc.log("Is Firebase initialized?", window._firebaseInited);
    };
    MenuMgr.prototype.ShowSetting = function () {
        var _this = this;
        // Setting is a prefab
        cc.resources.load("prefabs/Setting", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load Setting prefab: ", err);
                return;
            }
            var settingNode = cc.instantiate(prefab);
            settingNode.setPosition(0, 0);
            settingNode.scaleX = 2;
            settingNode.scaleY = 2;
            cc.find("Canvas").addChild(settingNode);
            settingNode.name = "Setting";
            _this.initSettingButton();
        });
    };
    MenuMgr.prototype.initSettingButton = function () {
        //ExitSettingButton is a biutton in Setting prefab
        var ExitSettingButton = new cc.Component.EventHandler();
        ExitSettingButton.target = this.node;
        ExitSettingButton.component = "MenuMgr";
        ExitSettingButton.handler = "ExitSetting";
        cc.find("Canvas/Setting/ExitSetting").getComponent(cc.Button).clickEvents.push(ExitSettingButton);
        //Sign up
        var SignUpButton = new cc.Component.EventHandler();
        SignUpButton.target = this.node;
        SignUpButton.component = "MenuMgr";
        SignUpButton.handler = "SignUp";
        cc.find("Canvas/Setting/SignUp").getComponent(cc.Button).clickEvents.push(SignUpButton);
        //Login
        var LoginButton = new cc.Component.EventHandler();
        LoginButton.target = this.node;
        LoginButton.component = "MenuMgr";
        LoginButton.handler = "Login";
        cc.find("Canvas/Setting/Login").getComponent(cc.Button).clickEvents.push(LoginButton);
        //Volumnslider
        var Volumnslider = cc.find("Canvas/Setting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            Volumnslider.progress = Number(savedVolumn);
        else
            Volumnslider.progress = 0.5;
        Volumnslider.node.on('slide', this.onVolumnChange, this);
    };
    MenuMgr.prototype.ExitSetting = function () {
        var settingNode = cc.find("Canvas/Setting");
        if (settingNode)
            settingNode.destroy();
    };
    MenuMgr.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    MenuMgr.prototype.SignUp = function () {
        this.isSigningUp = true;
        this.openSignupLoginPanel();
    };
    MenuMgr.prototype.Login = function () {
        this.isSigningUp = false;
        this.openSignupLoginPanel();
    };
    MenuMgr.prototype.openSignupLoginPanel = function () {
        var _this = this;
        cc.resources.load("prefabs/SignupLogin", cc.Prefab, function (err, asset) {
            if (err) {
                cc.error("Failed to load SignupLogin prefab:", err);
                return;
            }
            // Cast the loaded asset to cc.Prefab:
            var prefab = asset;
            // Now instantiate a Node from that prefab
            var signupLoginNode = cc.instantiate(prefab);
            signupLoginNode.setPosition(0, 0);
            signupLoginNode.scaleX = 0.5;
            signupLoginNode.scaleY = 0.5;
            signupLoginNode.zIndex = 1000;
            cc.find("Canvas/Setting").addChild(signupLoginNode);
            signupLoginNode.name = "SignupLogin";
            // grab the AuthManager component from the newly‐created Node
            _this.authComp = signupLoginNode.getComponent(AuthManager_1.default);
            if (!_this.authComp) {
                cc.error("AuthManager component not found on SignupLogin prefab!");
                return;
            }
            _this.initSignupLogin();
        });
    };
    MenuMgr.prototype.initSignupLogin = function () {
        // “Exit” button wiring (unchanged)…
        var ExitSignupLoginButton = new cc.Component.EventHandler();
        ExitSignupLoginButton.target = this.node;
        ExitSignupLoginButton.component = "MenuMgr";
        ExitSignupLoginButton.handler = "ExitSignupLogin";
        cc.find("Canvas/Setting/SignupLogin/Exit").getComponent(cc.Button).clickEvents.push(ExitSignupLoginButton);
        // “Save” button now calls either authComp.SignUp or authComp.Login
        var SaveSignupLoginButton = new cc.Component.EventHandler();
        SaveSignupLoginButton.target = this.authComp.node;
        SaveSignupLoginButton.component = "AuthManager";
        SaveSignupLoginButton.handler = this.isSigningUp ? "SignUp" : "Login";
        cc.find("Canvas/Setting/SignupLogin/Save").getComponent(cc.Button).clickEvents.push(SaveSignupLoginButton);
    };
    MenuMgr.prototype.ExitSignupLogin = function () {
        var T_Node = cc.find("Canvas/Setting/SignupLogin");
        if (T_Node) {
            T_Node.destroy();
        }
    };
    MenuMgr.prototype.enableStartButton = function () {
        if (this.startGameButton) {
            this.startGameButton.node.active = true;
        }
    };
    __decorate([
        property(cc.Button)
    ], MenuMgr.prototype, "startGameButton", void 0);
    MenuMgr = __decorate([
        ccclass
    ], MenuMgr);
    return MenuMgr;
}(cc.Component));
exports.default = MenuMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsbUJBQW1CO0FBSW5CO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0pDO1FBOUlVLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFlLEdBQWMsSUFBSSxDQUFDOztJQTJJM0QsQ0FBQztJQXpJRyx3QkFBTSxHQUFOO1FBQ0kscUNBQXFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRyxFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyxzQkFBc0I7UUFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3hELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE9BQU87YUFDVjtZQUNELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFFN0IsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0QsbUNBQWlCLEdBQWpCO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDeEMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEcsU0FBUztRQUNULElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4RixPQUFPO1FBQ1AsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRGLGNBQWM7UUFDZCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSTtZQUFFLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUNqRSxZQUFZLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNqQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxJQUFHLFdBQVc7WUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNDQUFvQixHQUE1QjtRQUFBLGlCQTJCQztRQTFCRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDL0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBQ0Qsc0NBQXNDO1lBQ3RDLElBQU0sTUFBTSxHQUFHLEtBQWtCLENBQUM7WUFFbEMsMENBQTBDO1lBQzFDLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDN0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDN0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxlQUFlLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUVyQyw2REFBNkQ7WUFDN0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPO2FBQ1Y7WUFFRCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNJLG9DQUFvQztRQUNwQyxJQUFJLHFCQUFxQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVDLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0csbUVBQW1FO1FBQ25FLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQztRQUNuRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hELHFCQUFxQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkQsSUFBRyxNQUFNLEVBQUU7WUFDUCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBMUlvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBbUM7SUFMdEMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdKM0I7SUFBRCxjQUFDO0NBaEpELEFBZ0pDLENBaEpvQyxFQUFFLENBQUMsU0FBUyxHQWdKaEQ7a0JBaEpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEF1dGhNYW5hZ2VyIGZyb20gJy4vQXV0aE1hbmFnZXInO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuLy8gRmlyZWJhc2UgdjkrIOeahOS+i+WtkFxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZTogbnVtYmVyID0gMC41O1xyXG4gICAgcHVibGljIGlzU2lnbmluZ1VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGF1dGhDb21wOiBBdXRoTWFuYWdlciB8IG51bGwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgc3RhcnRHYW1lQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBIb29rIHVwIE9wdGlvbkJ1dHRvbiDihpIgU2hvd1NldHRpbmdcclxuICAgICAgICBsZXQgT3B0aW9uQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBPcHRpb25CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIE9wdGlvbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcclxuICAgICAgICBPcHRpb25CdXR0b24uaGFuZGxlciA9IFwiU2hvd1NldHRpbmdcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvT3B0aW9uQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goT3B0aW9uQnV0dG9uKTtcclxuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1NldHRpbmcoKSB7XHJcbiAgICAgICAgLy8gU2V0dGluZyBpcyBhIHByZWZhYlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TZXR0aW5nXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU2V0dGluZyBwcmVmYWI6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgc2V0dGluZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWCA9IDI7XHJcbiAgICAgICAgICAgIHNldHRpbmdOb2RlLnNjYWxlWSA9IDI7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoc2V0dGluZ05vZGUpO1xyXG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5uYW1lID0gXCJTZXR0aW5nXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5pbml0U2V0dGluZ0J1dHRvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0U2V0dGluZ0J1dHRvbigpe1xyXG4gICAgICAgIC8vRXhpdFNldHRpbmdCdXR0b24gaXMgYSBiaXV0dG9uIGluIFNldHRpbmcgcHJlZmFiXHJcbiAgICAgICAgbGV0IEV4aXRTZXR0aW5nQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uaGFuZGxlciA9IFwiRXhpdFNldHRpbmdcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvRXhpdFNldHRpbmdcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0U2V0dGluZ0J1dHRvbik7XHJcblxyXG4gICAgICAgIC8vU2lnbiB1cFxyXG4gICAgICAgIGxldCBTaWduVXBCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgU2lnblVwQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIFNpZ25VcEJ1dHRvbi5oYW5kbGVyID0gXCJTaWduVXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnblVwXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU2lnblVwQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy9Mb2dpblxyXG4gICAgICAgIGxldCBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xyXG4gICAgICAgIExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0xvZ2luXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goTG9naW5CdXR0b24pO1xyXG5cclxuICAgICAgICAvL1ZvbHVtbnNsaWRlclxyXG4gICAgICAgIGxldCBWb2x1bW5zbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcclxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcclxuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIFZvbHVtbnNsaWRlci5wcm9ncmVzcyA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XHJcbiAgICAgICAgVm9sdW1uc2xpZGVyLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblZvbHVtbkNoYW5nZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgRXhpdFNldHRpbmcoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nXCIpO1xyXG4gICAgICAgIGlmKHNldHRpbmdOb2RlKSBzZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2lnblVwKCl7XHJcbiAgICAgICAgdGhpcy5pc1NpZ25pbmdVcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcGVuU2lnbnVwTG9naW5QYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIExvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaWduaW5nVXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5TaWdudXBMb2dpblBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuU2lnbnVwTG9naW5QYW5lbCgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBhc3NldCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBTaWdudXBMb2dpbiBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2FzdCB0aGUgbG9hZGVkIGFzc2V0IHRvIGNjLlByZWZhYjpcclxuICAgICAgICBjb25zdCBwcmVmYWIgPSBhc3NldCBhcyBjYy5QcmVmYWI7XHJcblxyXG4gICAgICAgIC8vIE5vdyBpbnN0YW50aWF0ZSBhIE5vZGUgZnJvbSB0aGF0IHByZWZhYlxyXG4gICAgICAgIGNvbnN0IHNpZ251cExvZ2luTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5zY2FsZVggPSAwLjU7XHJcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNjYWxlWSA9IDAuNTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUuekluZGV4ID0gMTAwMDtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIikuYWRkQ2hpbGQoc2lnbnVwTG9naW5Ob2RlKTtcclxuICAgICAgICBzaWdudXBMb2dpbk5vZGUubmFtZSA9IFwiU2lnbnVwTG9naW5cIjtcclxuXHJcbiAgICAgICAgLy8gZ3JhYiB0aGUgQXV0aE1hbmFnZXIgY29tcG9uZW50IGZyb20gdGhlIG5ld2x54oCQY3JlYXRlZCBOb2RlXHJcbiAgICAgICAgdGhpcy5hdXRoQ29tcCA9IHNpZ251cExvZ2luTm9kZS5nZXRDb21wb25lbnQoQXV0aE1hbmFnZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5hdXRoQ29tcCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIkF1dGhNYW5hZ2VyIGNvbXBvbmVudCBub3QgZm91bmQgb24gU2lnbnVwTG9naW4gcHJlZmFiIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0U2lnbnVwTG9naW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2lnbnVwTG9naW4oKSB7XHJcbiAgICAgICAgLy8g4oCcRXhpdOKAnSBidXR0b24gd2lyaW5nICh1bmNoYW5nZWQp4oCmXHJcbiAgICAgICAgbGV0IEV4aXRTaWdudXBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBFeGl0U2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XHJcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkV4aXRTaWdudXBMb2dpblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWdudXBMb2dpbi9FeGl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNpZ251cExvZ2luQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8g4oCcU2F2ZeKAnSBidXR0b24gbm93IGNhbGxzIGVpdGhlciBhdXRoQ29tcC5TaWduVXAgb3IgYXV0aENvbXAuTG9naW5cclxuICAgICAgICBsZXQgU2F2ZVNpZ251cExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5hdXRoQ29tcCEubm9kZTtcclxuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJBdXRoTWFuYWdlclwiO1xyXG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi5oYW5kbGVyID0gdGhpcy5pc1NpZ25pbmdVcCA/IFwiU2lnblVwXCIgOiBcIkxvZ2luXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luL1NhdmVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTYXZlU2lnbnVwTG9naW5CdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIEV4aXRTaWdudXBMb2dpbigpIHtcclxuICAgICAgICBsZXQgVF9Ob2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luXCIpO1xyXG4gICAgICAgIGlmKFRfTm9kZSkge1xyXG4gICAgICAgICAgICBUX05vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5hYmxlU3RhcnRCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/SuccessPopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3764DDp7JFh4sQoYTrrh15', 'SuccessPopup');
// scripts/Menu/SuccessPopup.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SuccessPopup = /** @class */ (function (_super) {
    __extends(SuccessPopup, _super);
    function SuccessPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.background = null;
        // Called by Menu code when OK is clicked
        _this.onOk = null;
        return _this;
    }
    SuccessPopup.prototype.onLoad = function () {
        var _this = this;
        var okBtn = cc.find("OKButton", this.node).getComponent(cc.Button);
        okBtn.node.on('click', function () {
            if (_this.onOk)
                _this.onOk();
            _this.node.destroy();
        });
    };
    __decorate([
        property(cc.Label)
    ], SuccessPopup.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], SuccessPopup.prototype, "background", void 0);
    SuccessPopup = __decorate([
        ccclass('SuccessPopup')
    ], SuccessPopup);
    return SuccessPopup;
}(cc.Component));
exports.default = SuccessPopup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcU3VjY2Vzc1BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBYUM7UUFacUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDOUMseUNBQXlDO1FBQ2xDLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVMxQyxDQUFDO0lBUEMsNkJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWG1CO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUErQjtJQUMvQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFBNEI7SUFGM0IsWUFBWTtRQURoQyxPQUFPLENBQUMsY0FBYyxDQUFDO09BQ0gsWUFBWSxDQWFoQztJQUFELG1CQUFDO0NBYkQsQUFhQyxDQWJ5QyxFQUFFLENBQUMsU0FBUyxHQWFyRDtrQkFib0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xyXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnU3VjY2Vzc1BvcHVwJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VjY2Vzc1BvcHVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTGFiZWwpIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAvLyBDYWxsZWQgYnkgTWVudSBjb2RlIHdoZW4gT0sgaXMgY2xpY2tlZFxyXG4gIHB1YmxpYyBvbk9rOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3Qgb2tCdG4gPSBjYy5maW5kKFwiT0tCdXR0b25cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIG9rQnRuLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vbk9rKSB0aGlzLm9uT2soKTtcclxuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu/AuthManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df599DLGEpEProbgXphfwt4', 'AuthManager');
// scripts/Menu/AuthManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AuthManager = /** @class */ (function (_super) {
    __extends(AuthManager, _super);
    function AuthManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // These get wired automatically by find() in onLoad()
        _this.usernameEB = null;
        _this.emailEB = null;
        _this.pwdEB = null;
        _this.saveBtn = null;
        _this.exitBtn = null;
        _this.auth = null;
        return _this;
    }
    AuthManager.prototype.onLoad = function () {
        var _this = this;
        this.usernameEB = cc.find("UserName", this.node).getComponent(cc.EditBox);
        this.emailEB = cc.find("Email", this.node).getComponent(cc.EditBox);
        this.pwdEB = cc.find("Password", this.node).getComponent(cc.EditBox);
        this.saveBtn = cc.find("Save", this.node).getComponent(cc.Button);
        this.exitBtn = cc.find("Exit", this.node).getComponent(cc.Button);
        this.saveBtn.node.on('click', this.onSaveClicked, this);
        this.exitBtn.node.on('click', function () { return _this.node.destroy(); }, this);
        // 3) Initialize Firebase Auth
        if (!window._firebaseInited) {
            cc.error("Firebase not initialized! Make sure FirebaseInit is in your scene.");
        }
        this.auth = firebase.auth();
    };
    AuthManager.prototype.onSaveClicked = function () {
        var _this = this;
        var isSigningUp = cc.find("Canvas/MenuMgr").getComponent("MenuMgr").isSigningUp;
        if (isSigningUp)
            this.signup();
        else
            this.login();
        var username = this.usernameEB.string.trim();
        var email = this.emailEB.string.trim();
        var password = this.pwdEB.string;
        if (!email || !password || !username) {
            cc.warn("All fields must be filled.");
            return;
        }
        // 4) Create user and set displayName
        this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (userCred) {
            return userCred.user.updateProfile({ displayName: username });
        })
            .then(function () {
            cc.log(text + " succeeded:", username);
            _this.showPopup(text + " Successful");
        })
            .catch(function (err) {
            cc.error(text + " error:", err.code, err.message);
        });
    };
    AuthManager.prototype.signup = function () {
        var _this = this;
        var username = this.usernameEB.string.trim();
        var email = this.emailEB.string.trim();
        var password = this.pwdEB.string;
        if (!email || !password || !username) {
            cc.warn("All fields must be filled.");
            return;
        }
        // 4) Create user and set displayName
        this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (userCred) {
            return userCred.user.updateProfile({ displayName: username });
        })
            .then(function () {
            cc.log("Signup succeeded:", username);
            _this.showPopup("Signup Successful");
        })
            .catch(function (err) {
            cc.error("Signup error:", err.code, err.message);
            _this.showPopup("\nSignup Failed: " + err.message);
        });
    };
    AuthManager.prototype.login = function () {
        var _this = this;
        var username = this.usernameEB.string.trim();
        var email = this.emailEB.string.trim();
        var password = this.pwdEB.string;
        if (!email || !password || !username) {
            cc.warn("All fields must be filled.");
            return;
        }
        this.auth.signInWithEmailAndPassword(email, password).then(function (userCred) {
            cc.log("Login succeeded:", username);
            _this.showPopup("\nLogin Successful");
        })
            .catch(function (err) {
            cc.error("Login error:", err.code, err.message);
            _this.showPopup("\nLogin Failed: " + err.message);
        });
    };
    AuthManager.prototype.showPopup = function (msg) {
        var _this = this;
        // Load and instantiate SuccessPopup
        cc.resources.load("prefabs/SuccessPopup", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load SuccessPopup:", err);
                return;
            }
            var popupNode = cc.instantiate(prefab);
            popupNode.setPosition(0, 0);
            popupNode.zIndex = 2000;
            cc.find("Canvas").addChild(popupNode);
            var popupComp = popupNode.getComponent("SuccessPopup");
            popupComp.messageLabel.string = msg;
            // When user clicks OK → destroy signup UI
            popupComp.onOk = function () {
                _this.node.destroy();
            };
        });
    };
    AuthManager = __decorate([
        ccclass('AuthManager')
    ], AuthManager);
    return AuthManager;
}(cc.Component));
exports.default = AuthManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcQXV0aE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwSEM7UUF6SEMsc0RBQXNEO1FBQ3RELGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFDM0IsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFbEIsVUFBSSxHQUFRLElBQUksQ0FBQzs7SUFrSDNCLENBQUM7SUFoSEMsNEJBQU0sR0FBTjtRQUFBLGlCQWdCQztRQWRDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENB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QyxJQUFJLEdBQUc7Z0JBQ2YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF6SGtCLFdBQVc7UUFEL0IsT0FBTyxDQUFDLGFBQWEsQ0FBQztPQUNGLFdBQVcsQ0EwSC9CO0lBQUQsa0JBQUM7Q0ExSEQsQUEwSEMsQ0ExSHdDLEVBQUUsQ0FBQyxTQUFTLEdBMEhwRDtrQkExSG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvc2NyaXB0cy9BdXRoTWFuYWdlci50c1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8vIEVuc3VyZSBGaXJlYmFzZSBpcyBpbml0aWFsaXplZCBiZWZvcmUgdXNpbmcgaXRcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgX2ZpcmViYXNlSW5pdGVkPzogYm9vbGVhbjtcclxuICB9XHJcbn1cclxuQGNjY2xhc3MoJ0F1dGhNYW5hZ2VyJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIFRoZXNlIGdldCB3aXJlZCBhdXRvbWF0aWNhbGx5IGJ5IGZpbmQoKSBpbiBvbkxvYWQoKVxyXG4gIHVzZXJuYW1lRUI6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gIGVtYWlsRUI6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gIHB3ZEVCOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICBzYXZlQnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gIGV4aXRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgYXV0aDogYW55ID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICAgIHRoaXMudXNlcm5hbWVFQiA9IGNjLmZpbmQoXCJVc2VyTmFtZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgIHRoaXMuZW1haWxFQiAgICA9IGNjLmZpbmQoXCJFbWFpbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgIHRoaXMucHdkRUIgICAgICA9IGNjLmZpbmQoXCJQYXNzd29yZFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuXHJcbiAgICB0aGlzLnNhdmVCdG4gPSBjYy5maW5kKFwiU2F2ZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgdGhpcy5leGl0QnRuID0gY2MuZmluZChcIkV4aXRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIHRoaXMuc2F2ZUJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25TYXZlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB0aGlzLmV4aXRCdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm5vZGUuZGVzdHJveSgpLCB0aGlzKTtcclxuXHJcbiAgICAvLyAzKSBJbml0aWFsaXplIEZpcmViYXNlIEF1dGhcclxuICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xyXG4gICAgICBjYy5lcnJvcihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZCEgTWFrZSBzdXJlIEZpcmViYXNlSW5pdCBpcyBpbiB5b3VyIHNjZW5lLlwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TYXZlQ2xpY2tlZCgpIHtcclxuICAgIGxldCBpc1NpZ25pbmdVcCA9IGNjLmZpbmQoXCJDYW52YXMvTWVudU1nclwiKS5nZXRDb21wb25lbnQoXCJNZW51TWdyXCIpLmlzU2lnbmluZ1VwO1xyXG4gICAgaWYgKGlzU2lnbmluZ1VwKSB0aGlzLnNpZ251cCgpO1xyXG4gICAgZWxzZSB0aGlzLmxvZ2luKCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgZW1haWwgICAgPSB0aGlzLmVtYWlsRUIuc3RyaW5nLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wd2RFQi5zdHJpbmc7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXVzZXJuYW1lKSB7XHJcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQpIENyZWF0ZSB1c2VyIGFuZCBzZXQgZGlzcGxheU5hbWVcclxuICAgXHJcbiAgICB0aGlzLmF1dGhcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJDcmVkLnVzZXIudXBkYXRlUHJvZmlsZSh7IGRpc3BsYXlOYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNjLmxvZyh0ZXh0ICsgXCIgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wdXAodGV4dCArIFwiIFN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICBjYy5lcnJvcih0ZXh0ICsgXCIgZXJyb3I6XCIsIGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaWdudXAoKXtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZUVCLnN0cmluZy50cmltKCk7XHJcbiAgICBjb25zdCBlbWFpbCAgICA9IHRoaXMuZW1haWxFQi5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhdXNlcm5hbWUpIHtcclxuICAgICAgY2Mud2FybihcIkFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNCkgQ3JlYXRlIHVzZXIgYW5kIHNldCBkaXNwbGF5TmFtZVxyXG4gICAgdGhpcy5hdXRoXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigodXNlckNyZWQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyQ3JlZC51c2VyLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdXNlcm5hbWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjYy5sb2coXCJTaWdudXAgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoXCJTaWdudXAgU3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNjLmVycm9yKFwiU2lnbnVwIGVycm9yOlwiLCBlcnIuY29kZSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BvcHVwKFwiXFxuU2lnbnVwIEZhaWxlZDogXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGxvZ2luKCl7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xyXG4gICAgY29uc3QgZW1haWwgICAgPSB0aGlzLmVtYWlsRUIuc3RyaW5nLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wd2RFQi5zdHJpbmc7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXVzZXJuYW1lKSB7XHJcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigodXNlckNyZWQ6IGFueSkgPT4ge1xyXG4gICAgICBjYy5sb2coXCJMb2dpbiBzdWNjZWVkZWQ6XCIsIHVzZXJuYW1lKTtcclxuICAgICAgdGhpcy5zaG93UG9wdXAoXCJcXG5Mb2dpbiBTdWNjZXNzZnVsXCIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgY2MuZXJyb3IoXCJMb2dpbiBlcnJvcjpcIiwgZXJyLmNvZGUsIGVyci5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5zaG93UG9wdXAoXCJcXG5Mb2dpbiBGYWlsZWQ6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dQb3B1cChtc2c6IHN0cmluZykge1xyXG4gICAgLy8gTG9hZCBhbmQgaW5zdGFudGlhdGUgU3VjY2Vzc1BvcHVwXHJcbiAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU3VjY2Vzc1BvcHVwXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU3VjY2Vzc1BvcHVwOlwiLCBlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwb3B1cE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICBwb3B1cE5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgIHBvcHVwTm9kZS56SW5kZXggPSAyMDAwO1xyXG4gICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKHBvcHVwTm9kZSk7XHJcblxyXG4gICAgICBjb25zdCBwb3B1cENvbXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFwiU3VjY2Vzc1BvcHVwXCIpIGFzIGFueTtcclxuICAgICAgcG9wdXBDb21wLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSBtc2c7XHJcblxyXG4gICAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIE9LIOKGkiBkZXN0cm95IHNpZ251cCBVSVxyXG4gICAgICBwb3B1cENvbXAub25PayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/GreenBossAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddc97pf6D9J5rfmdoSlPhAP', 'GreenBossAI');
// scripts/ai/GreenBossAI.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var GreenBossAI = /** @class */ (function (_super) {
    __extends(GreenBossAI, _super);
    function GreenBossAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 100;
        _this.runSpeed = 200;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 50;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 20;
        _this.maxHealth = 48;
        _this.health = 48;
        _this.lifebar = null;
        _this.barOffsetY = 50;
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        _this.isDead = false;
        _this.isDeathAnimPlaying = false;
        return _this;
    }
    GreenBossAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    GreenBossAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        // Draw patrol boundary
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        //const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        //patrolGfx.lineWidth = 2;
        //patrolGfx.strokeColor = cc.color(0, 255, 0);
        //patrolGfx.circle(0, 0, this.patrolRadius);
        //patrolGfx.stroke();
        // Detection area
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        // Attack area
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        // Health bar setup
        if (this.lifebar) {
            //this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            //this.updateLife(0, this.health);
        }
        this.setToIdle();
    };
    GreenBossAI.prototype.update = function (dt) {
        // If already marked dead, skip AI
        if (this.isDead)
            return;
        if (this.isDeathAnimPlaying) {
            // Let death animation play; do nothing else until it's over
            return;
        }
        // 1) compute distance to player
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        // 2) check if player is still within patrol radius
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        // 3) redraw detection circle
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        //this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
        //    ? cc.color(255, 165, 0)
        //    : cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        //this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        //this.attackGfx.lineWidth   = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        //    ? cc.color(128, 0, 128)
        //    : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        //this.attackGfx.stroke();
        // 5) AI state transitions
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        // attack first
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            // Wait through wind-up + attack anim (wind-up = timeBeforeAttack, attackAnim assumed 1s)
            if (this.timer >= this.timeBeforeAttack + 1) {
                this.setToIdle();
            }
            return;
        }
        // then run
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        // patrol (idle → walk → idle)
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var delta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var next = pos.add(delta);
            if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(next);
            if (this.timer >= this.walkTime) {
                this.setToIdle();
            }
        }
    };
    // —— Health‐bar updater ——
    GreenBossAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = (hp / this.maxHealth) * 40;
        ;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    GreenBossAI.prototype.takeDamage = function (amount) {
        if (this.health <= 0 || this.isDeathAnimPlaying)
            return;
        // play hurt animation based on direction to player
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var dir = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossHurtRight" : "GreenBossHurtLeft")
            : (dir.y > 0 ? "GreenBossHurtUp" : "GreenBossHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0) {
            this.startDeathSequence(dir);
        }
    };
    GreenBossAI.prototype.heal = function (amount) {
        if (this.health <= 0)
            return;
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreenBossAI.prototype.startDeathSequence = function (direction) {
        this.isDeathAnimPlaying = true;
        this.slimeState = SlimeState.Idle; // freeze other AI
        this.playDeathAnimation(direction);
    };
    GreenBossAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreenBossDeathRight" : "GreenBossDeathLeft")
            : (direction.y > 0 ? "GreenBossDeathUp" : "GreenBossDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        // After the death animation finishes (assume 1s), mark as fully dead
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
            // Do NOT destroy the node—just leave the dead pose in place
        }, 1);
    };
    GreenBossAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreenBossIdle");
    };
    GreenBossAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreenBossWalkRight" : "GreenBossWalkLeft")
            : (this.direction.y > 0 ? "GreenBossWalkUp" : "GreenBossWalkDown");
        this.anim.play(clip);
    };
    GreenBossAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenBossAI.prototype.startAttack = function () {
        var _this = this;
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        // Wind‐up: play idle (or a custom wind‐up anim)
        this.anim.play("GreenBossIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    GreenBossAI.prototype.performAttack = function () {
        var _this = this;
        // Play attack clip based on direction to player
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossAttackRight" : "GreenBossAttackLeft")
            : (dir.y > 0 ? "GreenBossAttackUp" : "GreenBossAttackDown");
        this.anim.play(clip);
        // Apply damage if player still within radius
        var playerComp = this.player.getComponent(Player_1.default);
        if (playerComp) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            var dist = slimeW.sub(playerW).mag();
            if (dist <= this.attackRadius) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
        // After attack anim (~1s), go back to idle
        this.scheduleOnce(function () { return _this.setToIdle(); }, 1);
    };
    GreenBossAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreenBossRunRight" : "GreenBossRunLeft")
            : (dir.y > 0 ? "GreenBossRunUp" : "GreenBossRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var delta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var next = this.node.getPosition().add(delta);
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(next);
    };
    GreenBossAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    GreenBossAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], GreenBossAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreenBossAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreenBossAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreenBossAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreenBossAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreenBossAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreenBossAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Time to wait before performing attack (seconds)" })
    ], GreenBossAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage dealt by the attack" })
    ], GreenBossAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreenBossAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreenBossAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenBossAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreenBossAI.prototype, "barOffsetY", void 0);
    GreenBossAI = __decorate([
        ccclass
    ], GreenBossAI);
    return GreenBossAI;
}(cc.Component));
exports.default = GreenBossAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEdyZWVuQm9zc0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQVMzQixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFdkIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4Qix3QkFBa0IsR0FBWSxLQUFLLENBQUM7O0lBd1JoRCxDQUFDO0lBdFJHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBWSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsZ0VBQWdFO1FBQ2hFLDBCQUEwQjtRQUMxQiw4Q0FBOEM7UUFDOUMsNENBQTRDO1FBQzVDLHFCQUFxQjtRQUVyQixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLGNBQWM7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFN0IsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLHNFQUFzRTtZQUN0RSxrQ0FBa0M7U0FDckM7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2Isa0NBQWtDO1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLDREQUE0RDtZQUM1RCxPQUFPO1NBQ1Y7UUFFRCxnQ0FBZ0M7UUFDaEMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQU0sTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRixZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM1QztRQUVELG1EQUFtRDtRQUNuRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU87YUFDbkMsb0JBQW9CLENBQ2pCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDLENBQ3BFLENBQUM7UUFDTixJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuRSxJQUFNLGNBQWMsR0FBRyxjQUFjLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztRQUUzRCw2QkFBNkI7UUFDN0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFLLENBQUMsQ0FBQztRQUNsQyxzRUFBc0U7UUFDdEUsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1Qiw4Q0FBOEM7UUFDOUMsNkJBQTZCO1FBRTdCLDBCQUEwQjtRQUMxQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsaUNBQWlDO1FBQ2pDLGdFQUFnRTtRQUNoRSw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDJDQUEyQztRQUMzQywwQkFBMEI7UUFFMUIsMEJBQTBCO1FBQzFCLElBQU0sUUFBUSxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLGNBQWMsQ0FBQztRQUN4RSxJQUFNLFFBQVEsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxjQUFjLENBQUM7UUFFckUsZUFBZTtRQUNmLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDakIseUZBQXlGO1lBQ3pGLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7WUFDRCxPQUFPO1NBQ1Y7UUFFRCxXQUFXO1FBQ1gsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixPQUFPO1NBQ1Y7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3JDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FDZixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQ3pDLENBQUM7WUFDRixJQUFNLElBQUksR0FBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BCO1NBQ0o7SUFDTCxDQUFDO0lBRUQsMkJBQTJCO0lBQ25CLGdDQUFVLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxFQUFVO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFDLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFDN0MsSUFBSSxFQUFFLElBQUksRUFBRTtZQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ2pELElBQUksRUFBRSxJQUFJLEVBQUU7WUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQUUsT0FBTztRQUV4RCxtREFBbUQ7UUFDbkQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQU0sR0FBRyxHQUFTLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEQsSUFBTSxRQUFRLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRU0sMEJBQUksR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLHdDQUFrQixHQUExQixVQUEyQixTQUFrQjtRQUN6QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQjtRQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLHdDQUFrQixHQUExQixVQUEyQixTQUFrQjtRQUE3QyxpQkFhQztRQVpHLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixxRUFBcUU7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsNERBQTREO1FBQ2hFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTywrQkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDaEMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNkLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxpQ0FBVyxHQUFuQjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFBQSxpQkFxQkM7UUFwQkcsZ0RBQWdEO1FBQ2hELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckIsNkNBQTZDO1FBQzdDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLFVBQVUsRUFBRTtZQUNaLElBQU0sTUFBTSxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0UsSUFBTSxPQUFPLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRixJQUFNLElBQUksR0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzNCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFFRCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxzQ0FBZ0IsR0FBeEIsVUFBeUIsRUFBVTtRQUMvQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDOUI7UUFDRCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLHFDQUFlLEdBQXZCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU8sQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDN0UsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBOVVEO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLENBQUM7a0RBQ3ZDO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLENBQUM7aURBQ3ZDO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdEQUF3RCxFQUFFLENBQUM7aURBQzNEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFEQUFxRCxFQUFFLENBQUM7aURBQ3hEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLENBQUM7cURBQ3RDO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLENBQUM7d0RBQzVCO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUM7cURBQzdCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLENBQUM7eURBQzVDO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUM7cURBQzFCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7a0RBQzlCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7K0NBQ2pDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQzttREFDNUM7SUF0Q2YsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWlWL0I7SUFBRCxrQkFBQztDQWpWRCxBQWlWQyxDQWpWd0MsRUFBRSxDQUFDLFNBQVMsR0FpVnBEO2tCQWpWb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xyXG5cclxuZW51bSBTbGltZVN0YXRlIHtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgUnVuLFxyXG4gICAgQXR0YWNrXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWVuQm9zc0FJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcclxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcclxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcclxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNTA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXHJcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVGltZSB0byB3YWl0IGJlZm9yZSBwZXJmb3JtaW5nIGF0dGFjayAoc2Vjb25kcylcIiB9KVxyXG4gICAgdGltZUJlZm9yZUF0dGFjazogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRhbWFnZSBkZWFsdCBieSB0aGUgYXR0YWNrXCIgfSlcclxuICAgIGF0dGFja0RhbWFnZTogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJNYXhpbXVtIGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxyXG4gICAgbWF4SGVhbHRoOiBudW1iZXIgPSA0ODtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkN1cnJlbnQgaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBoZWFsdGg6IG51bWJlciA9IDQ4O1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlZlcnRpY2FsIG9mZnNldCBvZiBoZWFsdGggYmFyIGFib3ZlIHNsaW1lIChwaXhlbHMpXCIgfSlcclxuICAgIHByaXZhdGUgYmFyT2Zmc2V0WTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICBwcml2YXRlIHRpbWVyID0gMDtcclxuICAgIHByaXZhdGUgZGlyZWN0aW9uID0gY2MudjIoMCwgMCk7XHJcbiAgICBwcml2YXRlIHBhdHJvbENlbnRlciA9IGNjLnYyKDAsIDApO1xyXG5cclxuICAgIHByaXZhdGUgYm91bmRhcnlOb2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uTm9kZSE6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tOb2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgYXR0YWNrR2Z4ITogY2MuR3JhcGhpY3M7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UnVuQ2xpcCA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcclxuXHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAvLyBEcmF3IHBhdHJvbCBib3VuZGFyeVxyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50ITtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnBhdHJvbENlbnRlcik7XHJcbiAgICAgICAgLy9jb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIC8vcGF0cm9sR2Z4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgLy9wYXRyb2xHZnguc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG4gICAgICAgIC8vcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgLy9wYXRyb2xHZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIERldGVjdGlvbiBhcmVhXHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlID0gbmV3IGNjLk5vZGUoXCJEZXRlY3Rpb25BcmVhXCIpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4ID0gdGhpcy5kZXRlY3Rpb25Ob2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcclxuXHJcbiAgICAgICAgLy8gQXR0YWNrIGFyZWFcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICAvLyBIZWFsdGggYmFyIHNldHVwXHJcbiAgICAgICAgaWYgKHRoaXMubGlmZWJhcikge1xyXG4gICAgICAgICAgICAvL3RoaXMubGlmZWJhci5zZXRQb3NpdGlvbigwLCB0aGlzLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuYmFyT2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIHRoaXMuaGVhbHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBJZiBhbHJlYWR5IG1hcmtlZCBkZWFkLCBza2lwIEFJXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIC8vIExldCBkZWF0aCBhbmltYXRpb24gcGxheTsgZG8gbm90aGluZyBlbHNlIHVudGlsIGl0J3Mgb3ZlclxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxKSBjb21wdXRlIGRpc3RhbmNlIHRvIHBsYXllclxyXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpbWVXICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMikgY2hlY2sgaWYgcGxheWVyIGlzIHN0aWxsIHdpdGhpbiBwYXRyb2wgcmFkaXVzXHJcbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxyXG4gICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQ2VudGVyID0gbG9jYWxQbGF5ZXJQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xyXG5cclxuICAgICAgICAvLyAzKSByZWRyYXcgZGV0ZWN0aW9uIGNpcmNsZVxyXG4gICAgICAgIGNvbnN0IGRyYXdEZXRlY3RSID0gTWF0aC5taW4odGhpcy5kZXRlY3Rpb25SYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCAgID0gMjtcclxuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXHJcbiAgICAgICAgLy8gICAgPyBjYy5jb2xvcigyNTUsIDE2NSwgMClcclxuICAgICAgICAvLyAgICA6IGNjLmNvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIDQpIHJlZHJhdyBhdHRhY2sgY2lyY2xlXHJcbiAgICAgICAgY29uc3QgZHJhd0F0dGFja1IgPSBNYXRoLm1pbih0aGlzLmF0dGFja1JhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5saW5lV2lkdGggICA9IDI7XHJcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1c1xyXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXHJcbiAgICAgICAgLy8gICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xyXG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguY2lyY2xlKDAsIDAsIGRyYXdBdHRhY2tSKTtcclxuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyA1KSBBSSBzdGF0ZSB0cmFuc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgLy8gV2FpdCB0aHJvdWdoIHdpbmQtdXAgKyBhdHRhY2sgYW5pbSAod2luZC11cCA9IHRpbWVCZWZvcmVBdHRhY2ssIGF0dGFja0FuaW0gYXNzdW1lZCAxcylcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lQmVmb3JlQXR0YWNrICsgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGVuIHJ1blxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGF0cm9sIChpZGxlIOKGkiB3YWxrIOKGkiBpZGxlKVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHQgID0gcG9zLmFkZChkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4oCU4oCUIEhlYWx0aOKAkGJhciB1cGRhdGVyIOKAlOKAlFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IChocC90aGlzLm1heEhlYWx0aCkqNDA7O1xyXG4gICAgICAgIGlmIChocCA8PSAxMCkgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xyXG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCB8fCB0aGlzLmlzRGVhdGhBbmltUGxheWluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBwbGF5IGh1cnQgYW5pbWF0aW9uIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcclxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHNsaW1lUG9zICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpciAgICAgICA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGh1cnRBbmltICA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc0h1cnRSaWdodFwiIDogXCJHcmVlbkJvc3NIdXJ0TGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVuQm9zc0h1cnRVcFwiIDogXCJHcmVlbkJvc3NIdXJ0RG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShodXJ0QW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwKSB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKC1hbW91bnQsIHRoaXMuaGVhbHRoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWF0aFNlcXVlbmNlKGRpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnREZWF0aFNlcXVlbmNlKGRpcmVjdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7IC8vIGZyZWV6ZSBvdGhlciBBSVxyXG4gICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiR3JlZW5Cb3NzRGVhdGhSaWdodFwiIDogXCJHcmVlbkJvc3NEZWF0aExlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NEZWF0aFVwXCIgOiBcIkdyZWVuQm9zc0RlYXRoRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShkZWF0aEFuaW0pO1xyXG5cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAvLyBBZnRlciB0aGUgZGVhdGggYW5pbWF0aW9uIGZpbmlzaGVzIChhc3N1bWUgMXMpLCBtYXJrIGFzIGZ1bGx5IGRlYWRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlbkJvc3NJZGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRXYWxraW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcclxuICAgICAgICApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlbkJvc3NXYWxrUmlnaHRcIiA6IFwiR3JlZW5Cb3NzV2Fsa0xlZnRcIilcclxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVuQm9zc1dhbGtVcFwiIDogXCJHcmVlbkJvc3NXYWxrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIC8vIFdpbmTigJB1cDogcGxheSBpZGxlIChvciBhIGN1c3RvbSB3aW5k4oCQdXAgYW5pbSlcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkdyZWVuQm9zc0lkbGVcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xyXG4gICAgICAgIC8vIFBsYXkgYXR0YWNrIGNsaXAgYmFzZWQgb24gZGlyZWN0aW9uIHRvIHBsYXllclxyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc0F0dGFja1JpZ2h0XCIgOiBcIkdyZWVuQm9zc0F0dGFja0xlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NBdHRhY2tVcFwiIDogXCJHcmVlbkJvc3NBdHRhY2tEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG5cclxuICAgICAgICAvLyBBcHBseSBkYW1hZ2UgaWYgcGxheWVyIHN0aWxsIHdpdGhpbiByYWRpdXNcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpbWVXICAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgICAgID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFmdGVyIGF0dGFjayBhbmltICh+MXMpLCBnbyBiYWNrIHRvIGlkbGVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNldFRvSWRsZSgpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc1J1blJpZ2h0XCIgOiBcIkdyZWVuQm9zc1J1bkxlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NSdW5VcFwiIDogXCJHcmVlbkJvc3NSdW5Eb3duXCIpO1xyXG4gICAgICAgIGlmIChjbGlwICE9PSB0aGlzLmN1cnJlbnRSdW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcclxuICAgICAgICBpZiAobmV4dC5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihsb2NhbFAueCAtIHRoaXMubm9kZS54LCBsb2NhbFAueSAtIHRoaXMubm9kZS55KS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/GreenSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83760YFIXRPyL+YhejhNquq', 'GreenSlimeAI');
// scripts/ai/GreenSlimeAI.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var GreenSlimeAI = /** @class */ (function (_super) {
    __extends(GreenSlimeAI, _super);
    function GreenSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 150;
        _this.attackRadius = 80;
        _this.attackDamage = 12;
        _this.attackHitDelay = 0.3;
        _this.attackAnimDuration = 1.0;
        _this.maxHealth = 15;
        _this.health = 15;
        _this.lifebar = null;
        _this.barOffsetY = 10;
        _this.isDead = false;
        _this.isDeathAnimPlaying = false; // NEW: Tracks death animation
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        return _this;
    }
    GreenSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    GreenSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        //const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        //patrolGfx.lineWidth = 2;
        //patrolGfx.strokeColor = cc.color(0, 255, 0);
        //patrolGfx.circle(0, 0, this.patrolRadius);
        //patrolGfx.stroke();
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        if (this.lifebar) {
            //this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    GreenSlimeAI.prototype.update = function (dt) {
        if (this.isDead)
            return; // Actually dead, nothing happens
        if (this.isDeathAnimPlaying) {
            // Let the death animation play, but skip AI
            return;
        }
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.detectionGfx.clear();
        //this.detectionGfx.lineWidth = 2;
        // this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
        //    ? cc.color(255, 165, 0)
        //    : cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        //this.detectionGfx.stroke();
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        //    ? cc.color(128, 0, 128)
        //    : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        //this.attackGfx.stroke();
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= this.attackAnimDuration) {
                this.setToIdle();
            }
            return;
        }
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var moveDelta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var nextPos = pos.add(moveDelta);
            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);
            if (this.timer >= this.walkTime)
                this.setToIdle();
        }
    };
    GreenSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = (hp / this.maxHealth) * 40;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    GreenSlimeAI.prototype.takeDamage = function (amount) {
        if (this.isDead || this.isDeathAnimPlaying)
            return; // Already dead or anim playing
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var direction = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreeenSlimeHurtRight" : "GreeenSlimeHurtLeft")
            : (direction.y > 0 ? "GreeenSlimeHurtUp" : "GreeenSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            if (!this.isDeathAnimPlaying) {
                this.isDeathAnimPlaying = true;
                this.playDeathAnimation(direction);
            }
        }
        this.updateLife(-amount, this.health);
    };
    GreenSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    GreenSlimeAI.prototype.die = function () {
        this.unscheduleAllCallbacks();
    };
    GreenSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("GreeenSlimeIdle");
    };
    GreenSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "GreeenSlimeWalkRight" : "GreeenSlimeWalkLeft")
            : (this.direction.y > 0 ? "GreeenSlimeWalkUp" : "GreeenSlimeWalkDown");
        this.anim.play(clip);
    };
    GreenSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    GreenSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeAttackRight" : "GreeenSlimeAttackLeft")
            : (dir.y > 0 ? "GreeenSlimeAttackUp" : "GreeenSlimeAttackDown");
        this.anim.play(clip);
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    };
    GreenSlimeAI.prototype.applyAttackHit = function () {
        if (this.slimeState !== SlimeState.Attack)
            return;
        var slimeWorld3 = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
        var playerWorld3 = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        var dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            var playerComp = this.player.getComponent(Player_1.default);
            if (playerComp) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
    };
    GreenSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "GreeenSlimeRunRight" : "GreeenSlimeRunLeft")
            : (dir.y > 0 ? "GreeenSlimeRunUp" : "GreeenSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var moveDelta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var nextPos = this.node.getPosition().add(moveDelta);
        if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(nextPos);
    };
    GreenSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    GreenSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    GreenSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "GreeenSlimeDeathRight" : "GreeenSlimeDeathLeft")
            : (direction.y > 0 ? "GreeenSlimeDeathUp" : "GreeenSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        this.slimeState = SlimeState.Idle;
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
        }, 1.0); // match to your animation's duration
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], GreenSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], GreenSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], GreenSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], GreenSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], GreenSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], GreenSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], GreenSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "How much damage the slime does per attack" })
    ], GreenSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    ], GreenSlimeAI.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    ], GreenSlimeAI.prototype, "attackAnimDuration", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], GreenSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], GreenSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], GreenSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], GreenSlimeAI.prototype, "barOffsetY", void 0);
    GreenSlimeAI = __decorate([
        ccclass
    ], GreenSlimeAI);
    return GreenSlimeAI;
}(cc.Component));
exports.default = GreenSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEdyZWVuU2xpbWVBSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxvQ0FBK0I7QUFDL0IsSUFBSyxVQUtKO0FBTEQsV0FBSyxVQUFVO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLDJDQUFJLENBQUE7SUFDSix5Q0FBRyxDQUFBO0lBQ0gsK0NBQU0sQ0FBQTtBQUNWLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyVUM7UUF6VUcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUczQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUc5QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUc3Qix3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLHdCQUFrQixHQUFZLEtBQUssQ0FBQyxDQUFDLDhCQUE4QjtRQUVwRSxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQWUsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN6QyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xC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UUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7bURBQzlCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7Z0RBQ2pDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQztvREFDNUM7SUF6Q2YsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJVaEM7SUFBRCxtQkFBQztDQTNVRCxBQTJVQyxDQTNVeUMsRUFBRSxDQUFDLFNBQVMsR0EyVXJEO2tCQTNVb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xyXG5lbnVtIFNsaW1lU3RhdGUge1xyXG4gICAgSWRsZSxcclxuICAgIFdhbGssXHJcbiAgICBSdW4sXHJcbiAgICBBdHRhY2tcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZW5TbGltZUFJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcclxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcclxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcclxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNTA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXHJcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IG11Y2ggZGFtYWdlIHRoZSBzbGltZSBkb2VzIHBlciBhdHRhY2tcIiB9KVxyXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJTZWNvbmRzIGludG8gYXR0YWNrIGFuaW0gdG8gYXBwbHkgZGFtYWdlXCIgfSlcclxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiVG90YWwgbGVuZ3RoIG9mIGF0dGFjayBhbmltIChzZWNvbmRzKVwiIH0pXHJcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDE1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIGhlYWx0aDogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxyXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXHJcblxyXG4gICAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcclxuXHJcbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUuc2V0UG9zaXRpb24odGhpcy5wYXRyb2xDZW50ZXIpO1xyXG4gICAgICAgIC8vY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICAvL3BhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcclxuICAgICAgICAvL3BhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjsgLy8gQWN0dWFsbHkgZGVhZCwgbm90aGluZyBoYXBwZW5zXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGRlYXRoIGFuaW1hdGlvbiBwbGF5LCBidXQgc2tpcCBBSVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxyXG4gICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQ2VudGVyID0gbG9jYWxQbGF5ZXJQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xyXG5cclxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgY29uc3QgZHJhd0F0dGFja1IgPSBNYXRoLm1pbih0aGlzLmF0dGFja1JhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG5cclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jbGVhcigpO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcclxuICAgICAgIC8vIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXHJcbiAgICAgICAgLy8gICAgPyBjYy5jb2xvcigyNTUsIDE2NSwgMClcclxuICAgICAgICAvLyAgICA6IGNjLmNvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXHJcbiAgICAgICAgLy8gICAgPyBjYy5jb2xvcigxMjgsIDAsIDEyOClcclxuICAgICAgICAvLyAgICA6IGNjLmNvbG9yKDAsIDAsIDI1NSk7XHJcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xyXG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuQXR0YWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLklkbGUgJiYgdGhpcy50aW1lciA+PSB0aGlzLmlkbGVUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuV2Fsaykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3MgPSBwb3MuYWRkKG1vdmVEZWx0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy53YWxrVGltZSkgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IChocC90aGlzLm1heEhlYWx0aCkqNDA7XHJcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLk9SQU5HRTtcclxuICAgICAgICBlbHNlIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47IC8vIEFscmVhZHkgZGVhZCBvciBhbmltIHBsYXlpbmdcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBzbGltZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBodXJ0QW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxyXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkdyZWVlblNsaW1lSHVydFJpZ2h0XCIgOiBcIkdyZWVlblNsaW1lSHVydExlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlZW5TbGltZUh1cnRVcFwiIDogXCJHcmVlZW5TbGltZUh1cnREb3duXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheShodXJ0QW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgtYW1vdW50LCB0aGlzLmhlYWx0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGllKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkdyZWVlblNsaW1lSWRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLldhbGs7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEsXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xXHJcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueCkgPiBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi55KVxyXG4gICAgICAgICAgICA/ICh0aGlzLmRpcmVjdGlvbi54ID4gMCA/IFwiR3JlZWVuU2xpbWVXYWxrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVXYWxrTGVmdFwiKVxyXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiR3JlZWVuU2xpbWVXYWxrVXBcIiA6IFwiR3JlZWVuU2xpbWVXYWxrRG93blwiKTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0UnVubmluZygpIHtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0QXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuQXR0YWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcclxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlZW5TbGltZUF0dGFja1JpZ2h0XCIgOiBcIkdyZWVlblNsaW1lQXR0YWNrTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVlblNsaW1lQXR0YWNrVXBcIiA6IFwiR3JlZWVuU2xpbWVBdHRhY2tEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tIaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDMgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBzbGltZVdvcmxkMiA9IGNjLnYyKHNsaW1lV29ybGQzLngsIHNsaW1lV29ybGQzLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0ID0gc2xpbWVXb3JsZDIuc3ViKHBsYXllcldvcmxkMikubWFnKCk7XHJcbiAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAocGxheWVyQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrRGFtYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVlblNsaW1lUnVuUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVSdW5MZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiR3JlZWVuU2xpbWVSdW5VcFwiIDogXCJHcmVlZW5TbGltZVJ1bkRvd25cIik7XHJcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBjbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtb3ZlRGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xyXG4gICAgICAgIGNvbnN0IG5leHRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQobW92ZURlbHRhKTtcclxuICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcclxuICAgICAgICByZXR1cm4gY2MudjIobG9jYWxQLnggLSB0aGlzLm5vZGUueCwgbG9jYWxQLnkgLSB0aGlzLm5vZGUueSkubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIGNvbnN0IGRlYXRoQW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxyXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkdyZWVlblNsaW1lRGVhdGhSaWdodFwiIDogXCJHcmVlZW5TbGltZURlYXRoTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVlblNsaW1lRGVhdGhVcFwiIDogXCJHcmVlZW5TbGltZURlYXRoRG93blwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoZGVhdGhBbmltKTtcclxuXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAxLjApOyAvLyBtYXRjaCB0byB5b3VyIGFuaW1hdGlvbidzIGR1cmF0aW9uXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/BlueSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93c17LsWWNNMIhlPghgF2vo', 'BlueSlimeAI');
// scripts/ai/BlueSlimeAI.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var BlueSlimeAI = /** @class */ (function (_super) {
    __extends(BlueSlimeAI, _super);
    function BlueSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 180;
        _this.attackRadius = 80;
        _this.attackDamage = 10;
        _this.attackHitDelay = 0.3;
        _this.attackAnimDuration = 1.0;
        _this.maxHealth = 20;
        _this.health = 20;
        _this.lifebar = null;
        _this.barOffsetY = 10;
        _this.isDead = false;
        _this.isDeathAnimPlaying = false; // NEW: Tracks death animation
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        return _this;
    }
    BlueSlimeAI.prototype.onLoad = function () {
        var level = cc.find("GamemManager").getComponent("GameManager").level;
        var MaxX = (level * 4 + 6) * 100;
        var MaxY = (level * 2 + 3) * 100;
        cc.director.getCollisionManager().enabled = true;
    };
    BlueSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        //const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        // patrolGfx.lineWidth = 2;
        //patrolGfx.strokeColor = cc.color(0, 255, 0);
        // patrolGfx.circle(0, 0, this.patrolRadius);
        // patrolGfx.stroke();
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        if (this.lifebar) {
            //this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    BlueSlimeAI.prototype.update = function (dt) {
        if (this.isDead)
            return; // Actually dead, nothing happens
        if (this.isDeathAnimPlaying) {
            // Let the death animation play, but skip AI
            return;
        }
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.detectionGfx.clear();
        //this.detectionGfx.lineWidth = 2;
        //this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
        //? cc.color(255, 165, 0)
        //: cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        this.detectionGfx.stroke();
        this.attackGfx.clear();
        //this.attackGfx.lineWidth = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        // ? cc.color(128, 0, 128)
        // : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        this.attackGfx.stroke();
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            if (this.timer >= this.attackAnimDuration) {
                this.setToIdle();
            }
            return;
        }
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var moveDelta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var nextPos = pos.add(moveDelta);
            if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(nextPos);
            if (this.timer >= this.walkTime)
                this.setToIdle();
        }
    };
    BlueSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = (hp / this.maxHealth) * 40;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    BlueSlimeAI.prototype.takeDamage = function (amount) {
        if (this.isDead || this.isDeathAnimPlaying)
            return; // Already dead or anim playing
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var direction = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeHurtRight" : "BlueSlimeHurtLeft")
            : (direction.y > 0 ? "BlueSlimeHurtUp" : "BlueSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            if (!this.isDeathAnimPlaying) {
                this.isDeathAnimPlaying = true;
                this.playDeathAnimation(direction);
            }
        }
        this.updateLife(-amount, this.health);
    };
    BlueSlimeAI.prototype.heal = function (amount) {
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    BlueSlimeAI.prototype.die = function () {
        this.unscheduleAllCallbacks();
    };
    BlueSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("BlueSlimeIdle");
    };
    BlueSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "BlueSlimeWalkRight" : "BlueSlimeWalkLeft")
            : (this.direction.y > 0 ? "BlueSlimeWalkUp" : "BlueSlimeWalkDown");
        this.anim.play(clip);
    };
    BlueSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    BlueSlimeAI.prototype.startAttack = function () {
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        this.currentAttackClip = "";
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeAttackRight" : "BlueSlimeAttackLeft")
            : (dir.y > 0 ? "BlueSlimeAttackUp" : "BlueSlimeAttackDown");
        this.anim.play(clip);
        this.scheduleOnce(this.applyAttackHit, this.attackHitDelay);
    };
    BlueSlimeAI.prototype.applyAttackHit = function () {
        if (this.slimeState !== SlimeState.Attack)
            return;
        var slimeWorld3 = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var slimeWorld2 = cc.v2(slimeWorld3.x, slimeWorld3.y);
        var playerWorld3 = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var playerWorld2 = cc.v2(playerWorld3.x, playerWorld3.y);
        var dist = slimeWorld2.sub(playerWorld2).mag();
        if (dist <= this.attackRadius) {
            var playerComp = this.player.getComponent(Player_1.default);
            if (playerComp) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
    };
    BlueSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "BlueSlimeRunRight" : "BlueSlimeRunLeft")
            : (dir.y > 0 ? "BlueSlimeRunUp" : "BlueSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var moveDelta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var nextPos = this.node.getPosition().add(moveDelta);
        if (nextPos.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(nextPos);
    };
    BlueSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    BlueSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    BlueSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "BlueSlimeDeathRight" : "BlueSlimeDeathLeft")
            : (direction.y > 0 ? "BlueSlimeDeathUp" : "BlueSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        this.slimeState = SlimeState.Idle;
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
        }, 1.0); // match to your animation's duration
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], BlueSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], BlueSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], BlueSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], BlueSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], BlueSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], BlueSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], BlueSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "How much damage the slime does per attack" })
    ], BlueSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Seconds into attack anim to apply damage" })
    ], BlueSlimeAI.prototype, "attackHitDelay", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "Total length of attack anim (seconds)" })
    ], BlueSlimeAI.prototype, "attackAnimDuration", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], BlueSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], BlueSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], BlueSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], BlueSlimeAI.prototype, "barOffsetY", void 0);
    BlueSlimeAI = __decorate([
        ccclass
    ], BlueSlimeAI);
    return BlueSlimeAI;
}(cc.Component));
exports.default = BlueSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEJsdWVTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUMvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQStVQztRQTdVRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRzdCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUdqQyxlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDLENBQUMsOEJBQThCO1FBRXBFLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBZSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIs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QjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxDQUFDO3FEQUN6QztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxDQUFDO3VEQUNyRDtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxDQUFDOzJEQUM5QztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDO2tEQUM5QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDOytDQUNqQztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBekNmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0ErVS9CO0lBQUQsa0JBQUM7Q0EvVUQsQUErVUMsQ0EvVXdDLEVBQUUsQ0FBQyxTQUFTLEdBK1VwRDtrQkEvVW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuZW51bSBTbGltZVN0YXRlIHtcclxuICAgIElkbGUsXHJcbiAgICBXYWxrLFxyXG4gICAgUnVuLFxyXG4gICAgQXR0YWNrXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsdWVTbGltZUFJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXHJcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcclxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcclxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcclxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxyXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxODA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXHJcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IG11Y2ggZGFtYWdlIHRoZSBzbGltZSBkb2VzIHBlciBhdHRhY2tcIiB9KVxyXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJTZWNvbmRzIGludG8gYXR0YWNrIGFuaW0gdG8gYXBwbHkgZGFtYWdlXCIgfSlcclxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwiVG90YWwgbGVuZ3RoIG9mIGF0dGFjayBhbmltIChzZWNvbmRzKVwiIH0pXHJcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIGhlYWx0aDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxyXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXHJcblxyXG4gICAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcclxuXHJcbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxldmVsID0gY2MuZmluZChcIkdhbWVtTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKS5sZXZlbDtcclxuICAgICAgICBsZXQgTWF4WCA9IChsZXZlbCo0ICsgNikqMTAwO1xyXG4gICAgICAgIGxldCBNYXhZID0gKGxldmVsKjIgKyAzKSoxMDA7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUuc2V0UG9zaXRpb24odGhpcy5wYXRyb2xDZW50ZXIpO1xyXG4gICAgICAgIC8vY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgIC8vIHBhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcclxuICAgICAgIC8vIHBhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgLy8gcGF0cm9sR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjsgLy8gQWN0dWFsbHkgZGVhZCwgbm90aGluZyBoYXBwZW5zXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGRlYXRoIGFuaW1hdGlvbiBwbGF5LCBidXQgc2tpcCBBSVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlzdFRvUGxheWVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxyXG4gICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQ2VudGVyID0gbG9jYWxQbGF5ZXJQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xyXG5cclxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgY29uc3QgZHJhd0F0dGFja1IgPSBNYXRoLm1pbih0aGlzLmF0dGFja1JhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG5cclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5jbGVhcigpO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXHJcbiAgICAgICAgICAgIC8vPyBjYy5jb2xvcigyNTUsIDE2NSwgMClcclxuICAgICAgICAgICAgLy86IGNjLmNvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5jbGVhcigpO1xyXG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXHJcbiAgICAgICAgICAgLy8gPyBjYy5jb2xvcigxMjgsIDAsIDEyOClcclxuICAgICAgICAgICAvLyA6IGNjLmNvbG9yKDAsIDAsIDI1NSk7XHJcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBpbkRldGVjdCA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmRldGVjdGlvblJhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcclxuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcclxuXHJcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEF0dGFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmF0dGFja0FuaW1EdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5EZXRlY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMucnVuVG93YXJkc1BsYXllcihkdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVEZWx0YSA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy53YWxrU3BlZWQgKiBkdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zID0gcG9zLmFkZChtb3ZlRGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0UG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlmZShkZWx0YTogbnVtYmVyLCBocDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpZmViYXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gKGhwL3RoaXMubWF4SGVhbHRoKSo0MDtcclxuICAgICAgICBpZiAoaHAgPD0gMTApIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBlbHNlIGlmIChocCA8PSAyMCkgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xyXG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQgfHwgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHJldHVybjsgLy8gQWxyZWFkeSBkZWFkIG9yIGFuaW0gcGxheWluZ1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHNsaW1lUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gcGxheWVyUG9zLnN1YihzbGltZVBvcykubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGh1cnRBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXHJcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiQmx1ZVNsaW1lSHVydFJpZ2h0XCIgOiBcIkJsdWVTbGltZUh1cnRMZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiQmx1ZVNsaW1lSHVydFVwXCIgOiBcIkJsdWVTbGltZUh1cnREb3duXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheShodXJ0QW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgtYW1vdW50LCB0aGlzLmhlYWx0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGllKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkJsdWVTbGltZUlkbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMVxyXG4gICAgICAgICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAodGhpcy5kaXJlY3Rpb24ueCA+IDAgPyBcIkJsdWVTbGltZVdhbGtSaWdodFwiIDogXCJCbHVlU2xpbWVXYWxrTGVmdFwiKVxyXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiQmx1ZVNsaW1lV2Fsa1VwXCIgOiBcIkJsdWVTbGltZVdhbGtEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuUnVuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRBdHRhY2soKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkJsdWVTbGltZUF0dGFja1JpZ2h0XCIgOiBcIkJsdWVTbGltZUF0dGFja0xlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJCbHVlU2xpbWVBdHRhY2tVcFwiIDogXCJCbHVlU2xpbWVBdHRhY2tEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tIaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDMgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBzbGltZVdvcmxkMiA9IGNjLnYyKHNsaW1lV29ybGQzLngsIHNsaW1lV29ybGQzLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDMgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0ID0gc2xpbWVXb3JsZDIuc3ViKHBsYXllcldvcmxkMikubWFnKCk7XHJcbiAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAocGxheWVyQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrRGFtYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJ1blRvd2FyZHNQbGF5ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxyXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkJsdWVTbGltZVJ1blJpZ2h0XCIgOiBcIkJsdWVTbGltZVJ1bkxlZnRcIilcclxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJCbHVlU2xpbWVSdW5VcFwiIDogXCJCbHVlU2xpbWVSdW5Eb3duXCIpO1xyXG4gICAgICAgIGlmIChjbGlwICE9PSB0aGlzLmN1cnJlbnRSdW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoZGlyLnggKiB0aGlzLnJ1blNwZWVkICogZHQsIGRpci55ICogdGhpcy5ydW5TcGVlZCAqIGR0KTtcclxuICAgICAgICBjb25zdCBuZXh0UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKG1vdmVEZWx0YSk7XHJcbiAgICAgICAgaWYgKG5leHRQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsUCA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUCk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJCbHVlU2xpbWVEZWF0aFJpZ2h0XCIgOiBcIkJsdWVTbGltZURlYXRoTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkJsdWVTbGltZURlYXRoVXBcIiA6IFwiQmx1ZVNsaW1lRGVhdGhEb3duXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheShkZWF0aEFuaW0pO1xyXG5cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEuMCk7IC8vIG1hdGNoIHRvIHlvdXIgYW5pbWF0aW9uJ3MgZHVyYXRpb25cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/Agent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39ba77Ddy1EMpTOy+FEUQJ4', 'Agent');
// scripts/ai/Agent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * Abstract class for all AI components.
 * You can think of this as an organized API.
 * If you want to implement the update method, you have to call the
 * super method first!
 */
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Agent.prototype.update = function (dt) {
        this.agentUpdate(dt);
    };
    return Agent;
}(cc.Component));
exports.default = Agent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXEFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDOzs7OztHQUtHO0FBQ0g7SUFBNEMseUJBQVk7SUFBeEQ7O0lBYUEsQ0FBQztJQUxHLHdCQUF3QjtJQUVkLHNCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsWUFBQztBQUFELENBYkEsQUFhQyxDQWIyQyxFQUFFLENBQUMsU0FBUyxHQWF2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICogQWJzdHJhY3QgY2xhc3MgZm9yIGFsbCBBSSBjb21wb25lbnRzLlxyXG4gKiBZb3UgY2FuIHRoaW5rIG9mIHRoaXMgYXMgYW4gb3JnYW5pemVkIEFQSS5cclxuICogSWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IHRoZSB1cGRhdGUgbWV0aG9kLCB5b3UgaGF2ZSB0byBjYWxsIHRoZVxyXG4gKiBzdXBlciBtZXRob2QgZmlyc3QhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBZ2VudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXBkYXRlIG1ldGhvZCB3cmFwcGVyIGZvciBBZ2VudCBjbGFzc2VzLlxyXG4gICAgICogQHBhcmFtIGR0IFRpbWUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCBhZ2VudFVwZGF0ZS5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGFnZW50VXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYWdlbnRVcGRhdGUoZHQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/strategies/Coward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f1e55DmctOVp8eQg/uquO9', 'Coward');
// scripts/ai/strategies/Coward.ts

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
exports.Coward = void 0;
var AgentStrategy_1 = require("./AgentStrategy");
var Coward = /** @class */ (function (_super) {
    __extends(Coward, _super);
    /**
     *
     * @param _agent The agent using the strategy.
     * @param _runAwayFrom The node for the agent to run away from.
     */
    function Coward(_agent, _runAwayFrom) {
        var _this = _super.call(this) || this;
        _this._agent = null;
        _this._runAwayFrom = null;
        _this._moveAxis2D = cc.Vec2.ZERO;
        _this._agent = _agent;
        _this._runAwayFrom = _runAwayFrom;
        return _this;
    }
    Object.defineProperty(Coward.prototype, "awayFromTarget", {
        get: function () {
            return this._agent.node.position.sub(this._runAwayFrom.position).normalize();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "distanceFromTarget", {
        get: function () {
            return this._runAwayFrom.position.sub(this._agent.node.position).mag();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "horizontalAxis", {
        get: function () {
            return this._moveAxis2D.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "verticalAxis", {
        get: function () {
            return this._moveAxis2D.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "attack", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coward.prototype, "interact", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Coward.prototype.start = function () {
    };
    Coward.prototype.update = function (dt) {
        this._moveAxis2D = this.awayFromTarget;
    };
    return Coward;
}(AgentStrategy_1.AI.Strategy));
exports.Coward = Coward;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXHN0cmF0ZWdpZXNcXENvd2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaURBQXFDO0FBRXJDO0lBQTRCLDBCQUFXO0lBR25DOzs7O09BSUc7SUFDSCxnQkFBWSxNQUFhLEVBQUUsWUFBcUI7UUFBaEQsWUFDSSxpQkFBTyxTQUdWO1FBWE8sWUFBTSxHQUFVLElBQUksQ0FBQztRQUNyQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQVk3QixpQkFBVyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBSnhDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztJQUNyQyxDQUFDO0lBSUQsc0JBQVcsa0NBQWM7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqRixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFrQjthQUE3QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzFFLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0NBQWM7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsZ0NBQVk7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsMEJBQU07YUFBakI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNNLHNCQUFLLEdBQVo7SUFFQSxDQUFDO0lBQ00sdUJBQU0sR0FBYixVQUFjLEVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzNDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsQ0EzQzJCLGtCQUFFLENBQUMsUUFBUSxHQTJDdEM7QUEzQ1ksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25TdGF0ZSB9IGZyb20gXCIuLi8uLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xyXG5pbXBvcnQgQWdlbnQgZnJvbSBcIi4uL0FnZW50XCI7XHJcbmltcG9ydCB7IEFJIH0gZnJvbSBcIi4vQWdlbnRTdHJhdGVneVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvd2FyZCBleHRlbmRzIEFJLlN0cmF0ZWd5e1xyXG4gICAgcHJpdmF0ZSBfYWdlbnQ6IEFnZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3J1bkF3YXlGcm9tOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gX2FnZW50IFRoZSBhZ2VudCB1c2luZyB0aGUgc3RyYXRlZ3kuXHJcbiAgICAgKiBAcGFyYW0gX3J1bkF3YXlGcm9tIFRoZSBub2RlIGZvciB0aGUgYWdlbnQgdG8gcnVuIGF3YXkgZnJvbS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX2FnZW50OiBBZ2VudCwgX3J1bkF3YXlGcm9tOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9hZ2VudCA9IF9hZ2VudDtcclxuICAgICAgICB0aGlzLl9ydW5Bd2F5RnJvbSA9IF9ydW5Bd2F5RnJvbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlQXhpczJEOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgYXdheUZyb21UYXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FnZW50Lm5vZGUucG9zaXRpb24uc3ViKHRoaXMuX3J1bkF3YXlGcm9tLnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpc3RhbmNlRnJvbVRhcmdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcnVuQXdheUZyb20ucG9zaXRpb24uc3ViKHRoaXMuX2FnZW50Lm5vZGUucG9zaXRpb24pLm1hZygpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC54O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gdGhpcy5hd2F5RnJvbVRhcmdldDtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MapGeneratorCore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67e35QjBHdNv7coHUqfA/Sf', 'MapGeneratorCore');
// scripts/MapGeneratorCore.ts

"use strict";
/*
function init(){
    console.log("myscript.ts line 2");
    document.getElementById("text0").innerHTML = "Hello World!";
    document.getElementById("controlBtn0").addEventListener('click',drawMap);
}
*/
/*class _GraphNode{
    nodeNumber : number;
    edgeList : number[];
    constructor(_nodeNumber){
        this.nodeNumber = _nodeNumber;
    }
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map_Graph = exports.mapRoomUnit = exports.Map_selected_edge = exports.Map_edge = exports.Map_node = void 0;
var Map_node = /** @class */ (function () {
    function Map_node(_ip) {
        this.disjoint_set_height = 1;
        this.disjoint_set_ptr = _ip;
    }
    return Map_node;
}()); // able to modify (have to modify related code, too)
exports.Map_node = Map_node;
var Map_edge = /** @class */ (function () {
    function Map_edge(_f, _t) {
        this.from = _f;
        this.to = _t;
        this.weight = Math.random();
    }
    return Map_edge;
}());
exports.Map_edge = Map_edge;
var Map_selected_edge = /** @class */ (function () {
    function Map_selected_edge(_f, _t) {
        this.from = _f;
        this.to = _t;
    }
    return Map_selected_edge;
}());
exports.Map_selected_edge = Map_selected_edge;
var mapRoomUnit = /** @class */ (function () {
    function mapRoomUnit(_init) {
        this.up = _init;
        this.down = _init;
        this.right = _init;
        this.left = _init;
    }
    return mapRoomUnit;
}());
exports.mapRoomUnit = mapRoomUnit;
var Map_Graph = /** @class */ (function () {
    function Map_Graph(_xmax, _ymax) {
        /*
        _blockWidth : number;
        _LineWidth : number;
        */
        this.vertexList = new Map();
        this.edgeList = [];
        this.selectedEdgeList = [];
        this.mapBlock = []; // mapBlock[_y][_x] // true -> wall
        this.ymax = _ymax;
        this.xmax = _xmax;
        //this.vertexList = new Map<number,Map_node>();
        for (var _y = 0; _y < this.ymax; _y += 1) {
            this.mapBlock[_y] = [];
            for (var _x = 0; _x < this.xmax; _x += 1) {
                this.mapBlock[_y][_x] = new mapRoomUnit(true);
            }
        }
        this.initializeGraph();
    }
    Map_Graph.prototype.disjoint_set_top = function (_ip) {
        while (true) {
            if (this.vertexList.get(_ip) === undefined) {
                return -1;
            }
            if (_ip === this.vertexList.get(_ip).disjoint_set_ptr) {
                return _ip;
            }
            _ip = this.vertexList.get(_ip).disjoint_set_ptr;
        }
    };
    Map_Graph.prototype.initializeGraph = function () {
        var totalVertex = 0;
        //initialize vertex
        for (var _x = 0; _x < this.xmax; _x += 1) {
            for (var _y = 0; _y < this.ymax; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                var nodeProperty = new Map_node(nodeNum);
                this.vertexList.set(nodeNum, nodeProperty);
                totalVertex += 1;
            }
        }
        //initialize horizontal edge
        for (var _x = 0; _x < this.xmax - 1; _x += 1) {
            for (var _y = 0; _y < this.ymax; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                if ((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum + 1) === undefined)) {
                    continue;
                }
                var newEdge = new Map_edge(nodeNum, nodeNum + 1);
                this.edgeList.push(newEdge);
            }
        }
        //initialize virtical edge
        for (var _x = 0; _x < this.xmax; _x += 1) {
            for (var _y = 0; _y < this.ymax - 1; _y += 1) {
                var nodeNum = _x + _y * this.xmax;
                if ((this.vertexList.get(nodeNum) === undefined) || (this.vertexList.get(nodeNum + this.xmax) === undefined)) {
                    continue;
                }
                var newEdge = new Map_edge(nodeNum, nodeNum + this.xmax);
                this.edgeList.push(newEdge);
            }
        }
        //initialize edgeList
        this.edgeList.sort(function (ipa, ipb) { return ipa.weight - ipb.weight; });
        /*for(let i:number =0;i<this.edgeList.length;i++){
            //this.edgeList[i].disjoint_set_ptr = i;//wrong
        }*/
        //
        this.calculateMinimumSpanningTree(); //totalVertex-1
        this.calculate_block();
    };
    Map_Graph.prototype.calculate_block = function () {
        for (var i = 0; i < this.selectedEdgeList.length; i++) {
            if ((this.selectedEdgeList[i].to - this.selectedEdgeList[i].from) === 1) {
                //horizontal
                var _x = this.selectedEdgeList[i].from % this.xmax;
                var _y = (this.selectedEdgeList[i].from - _x) / this.xmax;
                this.mapBlock[_y][_x].right = false;
                this.mapBlock[_y][_x + 1].left = false;
            }
            else {
                //vertical
                var _x = this.selectedEdgeList[i].from % this.xmax;
                var _y = (this.selectedEdgeList[i].from - _x) / this.xmax;
                this.mapBlock[_y][_x].down = false;
                this.mapBlock[_y + 1][_x].up = false;
            }
        }
    };
    Map_Graph.prototype.calculateMinimumSpanningTree = function () {
        for (var i = 0; i < this.edgeList.length; i++) {
            if (this.disjoint_set_top(this.edgeList[i].from) === this.disjoint_set_top(this.edgeList[i].to)) {
                continue;
            }
            var newE = new Map_selected_edge(this.edgeList[i].from, this.edgeList[i].to);
            this.selectedEdgeList.push(newE);
            var setA_id = this.disjoint_set_top(this.edgeList[i].from);
            var setB_id = this.disjoint_set_top(this.edgeList[i].to);
            if (this.vertexList.get(setA_id).disjoint_set_height === this.vertexList.get(setB_id).disjoint_set_height) {
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
                this.vertexList.get(setA_id).disjoint_set_height += 1;
            }
            else if (this.vertexList.get(setA_id).disjoint_set_height > this.vertexList.get(setB_id).disjoint_set_height) {
                this.vertexList.get(setB_id).disjoint_set_ptr = setA_id;
            }
            else {
                this.vertexList.get(setA_id).disjoint_set_ptr = setB_id;
            }
            /*treeEdges -= 1;
            if(treeEdges === 0){
                break;
            }*/
        }
    };
    return Map_Graph;
}());
exports.Map_Graph = Map_Graph;
/*
function drawMap(){
    //console.log("onClick");
    var mapSize = 10;
    var myMap : Map_Graph = new Map_Graph(mapSize,mapSize);
    var _blockWidth : number = 40;
    var _LineWidth : number = 2;
    const myCanvas : any = document.getElementById("canvas0");
    const ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#000000';
    // ctx.clearRect
    // ctx.fillRect
    //initialize vertex
    console.log("myscript.ts line 147");
    ctx.clearRect(0,0,512,512);
    for(let _y:number = 0;_y<mapSize;_y += 1){
        for(let _x:number = 0;_x<mapSize;_x += 1){
            if(myMap.mapBlock[_y][_x].up){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth,_blockWidth,_LineWidth);
            }
            if(myMap.mapBlock[_y][_x].left){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth,_LineWidth,_blockWidth);
            }
            if(myMap.mapBlock[_y][_x].down){
                ctx.fillRect(_x*_blockWidth,_y*_blockWidth+_blockWidth-_LineWidth,_blockWidth,_LineWidth);
            }
            if(myMap.mapBlock[_y][_x].right){
                ctx.fillRect(_x*_blockWidth+_blockWidth-_LineWidth,_y*_blockWidth,_LineWidth,_blockWidth);
            }
        }
    }
    /*
    for(let _x:number = 0;_x<=mapSize;_x += 1){
        for(let _y:number = 0;_y<=mapSize;_y += 1){
            ctx.fillRect(_blockWidth*_x,_blockWidth*_y,_LineWidth,_LineWidth);
        }
    }
    //initialize horizontal edge
    for(let _x:number = -1;_x<mapSize;_x += 1){
        for(let _y:number = 0;_y<mapSize;_y += 1){
            ctx.fillRect(_blockWidth+_blockWidth*_x,_blockWidth*_y,_LineWidth,_blockWidth);
        }
    }
    //initialize virtical edge
    for(let _x:number = 0;_x<mapSize;_x += 1){
        for(let _y:number = -1;_y<mapSize;_y += 1){
            ctx.fillRect(_blockWidth*_x,_blockWidth+_blockWidth*_y,_blockWidth,_LineWidth);
        }
    }
    for(let i:number=0;i<myMap.selectedEdgeList.length;i+=1){
        var _x :number = myMap.selectedEdgeList[i].from % mapSize;
        var _y :number = (myMap.selectedEdgeList[i].from-_x) / mapSize;
        if((myMap.selectedEdgeList[i].to-myMap.selectedEdgeList[i].from) === 1){
            ctx.clearRect(_blockWidth+_blockWidth*_x,+_blockWidth*_y,_LineWidth,_blockWidth);
        }else{
            ctx.clearRect(_blockWidth*_x,_blockWidth+_blockWidth*_y,_blockWidth,_LineWidth);
        }
    }
}

*/
/*
init();
console.log("myscript.ts line 7");*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwR2VuZXJhdG9yQ29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztFQU1FO0FBQ0Y7Ozs7OztHQU1HOzs7QUFFSDtJQUdJLGtCQUFZLEdBQVU7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUEsQ0FBQSxvREFBb0Q7QUFQeEMsNEJBQVE7QUFRckI7SUFJSSxrQkFBWSxFQUFFLEVBQUMsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNEJBQVE7QUFVckI7SUFHSSwyQkFBWSxFQUFFLEVBQUMsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSw4Q0FBaUI7QUFROUI7SUFLSSxxQkFBWSxLQUFlO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxrQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0NBQVc7QUFheEI7SUFXSSxtQkFBWSxLQUFLLEVB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QUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFBQztnQkFDckcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7YUFDekQ7aUJBQUssSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFBQztnQkFDekcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO2FBQzNEO2lCQUFJO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzthQUMzRDtZQUNEOzs7ZUFHRztTQUNOO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FwSEEsQUFvSEMsSUFBQTtBQXBIWSw4QkFBUztBQXFIdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRERTtBQUNGOztvQ0FFb0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMlwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dDBcIikuaW5uZXJIVE1MID0gXCJIZWxsbyBXb3JsZCFcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbEJ0bjBcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRyYXdNYXApO1xyXG59XHJcbiovXHJcbi8qY2xhc3MgX0dyYXBoTm9kZXtcclxuICAgIG5vZGVOdW1iZXIgOiBudW1iZXI7XHJcbiAgICBlZGdlTGlzdCA6IG51bWJlcltdO1xyXG4gICAgY29uc3RydWN0b3IoX25vZGVOdW1iZXIpe1xyXG4gICAgICAgIHRoaXMubm9kZU51bWJlciA9IF9ub2RlTnVtYmVyO1xyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBfbm9kZXtcclxuICAgIGRpc2pvaW50X3NldF9wdHIgOiBudW1iZXI7XHJcbiAgICBkaXNqb2ludF9zZXRfaGVpZ2h0IDogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3RvcihfaXA6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmRpc2pvaW50X3NldF9oZWlnaHQgPSAxO1xyXG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X3B0ciA9IF9pcDtcclxuICAgIH1cclxufS8vIGFibGUgdG8gbW9kaWZ5IChoYXZlIHRvIG1vZGlmeSByZWxhdGVkIGNvZGUsIHRvbylcclxuZXhwb3J0IGNsYXNzIE1hcF9lZGdle1xyXG4gICAgZnJvbSA6IG51bWJlcjtcclxuICAgIHRvIDogbnVtYmVyO1xyXG4gICAgd2VpZ2h0IDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoX2YsX3Qpe1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IF9mO1xyXG4gICAgICAgIHRoaXMudG8gPSBfdDtcclxuICAgICAgICB0aGlzLndlaWdodCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hcF9zZWxlY3RlZF9lZGdle1xyXG4gICAgZnJvbSA6IG51bWJlcjtcclxuICAgIHRvIDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoX2YsX3Qpe1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IF9mO1xyXG4gICAgICAgIHRoaXMudG8gPSBfdDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgbWFwUm9vbVVuaXR7Ly8gdHJ1ZSAtPiB3YWxsXHJcbiAgICB1cCA6IGJvb2xlYW47XHJcbiAgICBkb3duIDogYm9vbGVhbjtcclxuICAgIHJpZ2h0IDogYm9vbGVhbjtcclxuICAgIGxlZnQgOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoX2luaXQgOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLnVwID0gX2luaXQ7XHJcbiAgICAgICAgdGhpcy5kb3duID0gX2luaXQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IF9pbml0O1xyXG4gICAgICAgIHRoaXMubGVmdCA9IF9pbml0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwX0dyYXBoe1xyXG4gICAgeG1heCA6IG51bWJlcjtcclxuICAgIHltYXggOiBudW1iZXI7XHJcbiAgICAvKlxyXG4gICAgX2Jsb2NrV2lkdGggOiBudW1iZXI7XHJcbiAgICBfTGluZVdpZHRoIDogbnVtYmVyO1xyXG4gICAgKi9cclxuICAgIHZlcnRleExpc3QgOiBNYXA8bnVtYmVyLE1hcF9ub2RlPiA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xyXG4gICAgZWRnZUxpc3QgOiBNYXBfZWRnZVtdID0gW107XHJcbiAgICBzZWxlY3RlZEVkZ2VMaXN0IDogTWFwX3NlbGVjdGVkX2VkZ2VbXSA9IFtdO1xyXG4gICAgbWFwQmxvY2sgOiBtYXBSb29tVW5pdFtdW10gPSBbXTsgLy8gbWFwQmxvY2tbX3ldW194XSAvLyB0cnVlIC0+IHdhbGxcclxuICAgIGNvbnN0cnVjdG9yKF94bWF4LF95bWF4KXtcclxuICAgICAgICB0aGlzLnltYXggPSBfeW1heDtcclxuICAgICAgICB0aGlzLnhtYXggPSBfeG1heDtcclxuICAgICAgICAvL3RoaXMudmVydGV4TGlzdCA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTx0aGlzLnltYXg7X3kgKz0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubWFwQmxvY2tbX3ldID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeF0gPSBuZXcgbWFwUm9vbVVuaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplR3JhcGgoKTtcclxuICAgIH1cclxuICAgIGRpc2pvaW50X3NldF90b3AoX2lwIDogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgICAgIHdoaWxlKHRydWUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcnRleExpc3QuZ2V0KF9pcCkgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoX2lwID09PSB0aGlzLnZlcnRleExpc3QuZ2V0KF9pcCkuZGlzam9pbnRfc2V0X3B0cil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9pcCA9IHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKS5kaXNqb2ludF9zZXRfcHRyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRpYWxpemVHcmFwaCgpIHtcclxuICAgICAgICBsZXQgdG90YWxWZXJ0ZXg6bnVtYmVyID0gMDtcclxuICAgICAgICAvL2luaXRpYWxpemUgdmVydGV4XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMueG1heDtfeCArPSAxKXtcclxuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heDtfeSArPSAxKXtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlTnVtIDogbnVtYmVyID0gX3grX3kqdGhpcy54bWF4O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQcm9wZXJ0eSA6IE1hcF9ub2RlID0gbmV3IE1hcF9ub2RlKG5vZGVOdW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LnNldChub2RlTnVtLG5vZGVQcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFZlcnRleCs9MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2luaXRpYWxpemUgaG9yaXpvbnRhbCBlZGdlXHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMueG1heC0xO194ICs9IDEpe1xyXG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtKSA9PT0gdW5kZWZpbmVkKSB8fCAodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtKzEpID09PSB1bmRlZmluZWQpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuZXdFZGdlIDogTWFwX2VkZ2UgPSBuZXcgTWFwX2VkZ2Uobm9kZU51bSxub2RlTnVtKzEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaW5pdGlhbGl6ZSB2aXJ0aWNhbCBlZGdlXHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMueG1heDtfeCArPSAxKXtcclxuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heC0xO195ICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtKSA9PT0gdW5kZWZpbmVkKSB8fCAodGhpcy52ZXJ0ZXhMaXN0LmdldChub2RlTnVtK3RoaXMueG1heCkgPT09IHVuZGVmaW5lZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0VkZ2UgOiBNYXBfZWRnZSA9IG5ldyBNYXBfZWRnZShub2RlTnVtLG5vZGVOdW0rdGhpcy54bWF4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZUxpc3QucHVzaChuZXdFZGdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2luaXRpYWxpemUgZWRnZUxpc3RcclxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNvcnQoKGlwYSxpcGIpPT57cmV0dXJuIGlwYS53ZWlnaHQtaXBiLndlaWdodH0pO1xyXG4gICAgICAgIC8qZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuZWRnZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vdGhpcy5lZGdlTGlzdFtpXS5kaXNqb2ludF9zZXRfcHRyID0gaTsvL3dyb25nXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZU1pbmltdW1TcGFubmluZ1RyZWUoKTsvL3RvdGFsVmVydGV4LTFcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZV9ibG9jaygpO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlX2Jsb2NrKCl7XHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS50by10aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSkgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgLy9ob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICB2YXIgX3ggOm51bWJlciA9IHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgdGhpcy54bWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIF95IDpudW1iZXIgPSAodGhpcy5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20tX3gpIC8gdGhpcy54bWF4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeCsxXS5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgdmFyIF94IDpudW1iZXIgPSB0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSAlIHRoaXMueG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBfeSA6bnVtYmVyID0gKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIHRoaXMueG1heDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwQmxvY2tbX3ldW194XS5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195KzFdW194XS51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlTWluaW11bVNwYW5uaW5nVHJlZSgpey8vdHJlZUVkZ2VzIDogbnVtYmVyXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuZWRnZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pID09PSB0aGlzLmRpc2pvaW50X3NldF90b3AodGhpcy5lZGdlTGlzdFtpXS50bykpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5ld0UgOiBNYXBfc2VsZWN0ZWRfZWRnZSA9IG5ldyBNYXBfc2VsZWN0ZWRfZWRnZSh0aGlzLmVkZ2VMaXN0W2ldLmZyb20sdGhpcy5lZGdlTGlzdFtpXS50byk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5wdXNoKG5ld0UpO1xyXG4gICAgICAgICAgICBsZXQgc2V0QV9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pO1xyXG4gICAgICAgICAgICBsZXQgc2V0Ql9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLnRvKTtcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0ID09PSB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0QV9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCArPSAxO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnZlcnRleExpc3QuZ2V0KHNldEFfaWQpLmRpc2pvaW50X3NldF9oZWlnaHQgPiB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0QV9pZDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEFfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRCX2lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qdHJlZUVkZ2VzIC09IDE7XHJcbiAgICAgICAgICAgIGlmKHRyZWVFZGdlcyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIGRyYXdNYXAoKXtcclxuICAgIC8vY29uc29sZS5sb2coXCJvbkNsaWNrXCIpO1xyXG4gICAgdmFyIG1hcFNpemUgPSAxMDtcclxuICAgIHZhciBteU1hcCA6IE1hcF9HcmFwaCA9IG5ldyBNYXBfR3JhcGgobWFwU2l6ZSxtYXBTaXplKTtcclxuICAgIHZhciBfYmxvY2tXaWR0aCA6IG51bWJlciA9IDQwO1xyXG4gICAgdmFyIF9MaW5lV2lkdGggOiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3QgbXlDYW52YXMgOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczBcIik7XHJcbiAgICBjb25zdCBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcclxuICAgIC8vIGN0eC5jbGVhclJlY3RcclxuICAgIC8vIGN0eC5maWxsUmVjdFxyXG4gICAgLy9pbml0aWFsaXplIHZlcnRleFxyXG4gICAgY29uc29sZS5sb2coXCJteXNjcmlwdC50cyBsaW5lIDE0N1wiKTtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwwLDUxMiw1MTIpO1xyXG4gICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PG1hcFNpemU7X3kgKz0gMSl7XHJcbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PG1hcFNpemU7X3ggKz0gMSl7XHJcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoLF95Kl9ibG9ja1dpZHRoLF9ibG9ja1dpZHRoLF9MaW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoX3gqX2Jsb2NrV2lkdGgsX3kqX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobXlNYXAubWFwQmxvY2tbX3ldW194XS5kb3duKXtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCxfeSpfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aC1fTGluZVdpZHRoLF9ibG9ja1dpZHRoLF9MaW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoK19ibG9ja1dpZHRoLV9MaW5lV2lkdGgsX3kqX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PD1tYXBTaXplO194ICs9IDEpe1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTw9bWFwU2l6ZTtfeSArPSAxKXtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF9ibG9ja1dpZHRoKl94LF9ibG9ja1dpZHRoKl95LF9MaW5lV2lkdGgsX0xpbmVXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pbml0aWFsaXplIGhvcml6b250YWwgZWRnZVxyXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAtMTtfeDxtYXBTaXplO194ICs9IDEpe1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTxtYXBTaXplO195ICs9IDEpe1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pbml0aWFsaXplIHZpcnRpY2FsIGVkZ2VcclxuICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDxtYXBTaXplO194ICs9IDEpe1xyXG4gICAgICAgIGZvcihsZXQgX3k6bnVtYmVyID0gLTE7X3k8bWFwU2l6ZTtfeSArPSAxKXtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF9ibG9ja1dpZHRoKl94LF9ibG9ja1dpZHRoK19ibG9ja1dpZHRoKl95LF9ibG9ja1dpZHRoLF9MaW5lV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgaTpudW1iZXI9MDtpPG15TWFwLnNlbGVjdGVkRWRnZUxpc3QubGVuZ3RoO2krPTEpe1xyXG4gICAgICAgIHZhciBfeCA6bnVtYmVyID0gbXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgbWFwU2l6ZTtcclxuICAgICAgICB2YXIgX3kgOm51bWJlciA9IChteU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20tX3gpIC8gbWFwU2l6ZTtcclxuICAgICAgICBpZigobXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS50by1teU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20pID09PSAxKXtcclxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCwrX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3ksX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4qL1xyXG4vKlxyXG5pbml0KCk7XHJcbmNvbnNvbGUubG9nKFwibXlzY3JpcHQudHMgbGluZSA3XCIpOyovXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/IInputControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cb1e/x681EIqL7dYrX+sTd', 'IInputControls');
// scripts/input/IInputControls.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImplementedInputControls = exports.ButtonState = void 0;
/**
 * The state of a button-like variable during a single frame.
 */
var ButtonState;
(function (ButtonState) {
    /** The button is in its natural (inactive) state. */
    ButtonState[ButtonState["Rest"] = 0] = "Rest";
    /** The button is pressed down this frame. */
    ButtonState[ButtonState["Pressed"] = 1] = "Pressed";
    /** The button is held down. */
    ButtonState[ButtonState["Held"] = 2] = "Held";
    /** The button is released this frame. */
    ButtonState[ButtonState["Released"] = 3] = "Released";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
function hasImplementedInputControls(obj) {
    return obj &&
        (obj.horizontalAxis !== undefined) &&
        (obj.verticalAxis !== undefined) &&
        (obj.attack !== undefined) &&
        (obj.interact !== undefined) &&
        (obj.gethurt !== undefined) &&
        (obj.attack2 !== undefined) &&
        (obj.attack3 !== undefined);
}
exports.hasImplementedInputControls = hasImplementedInputControls;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5wdXRcXElJbnB1dENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztHQUVHO0FBQ0gsSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ25CLHFEQUFxRDtJQUNyRCw2Q0FBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLG1EQUFPLENBQUE7SUFDUCwrQkFBK0I7SUFDL0IsNkNBQUksQ0FBQTtJQUNKLHlDQUF5QztJQUN6QyxxREFBUSxDQUFBO0FBQ1osQ0FBQyxFQVRXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBU3RCO0FBZ0JELFNBQWdCLDJCQUEyQixDQUFDLEdBQVE7SUFDaEQsT0FBTyxHQUFHO1FBQ1YsQ0FBQyxHQUFHLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQztRQUNsQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO1FBQ2hDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQztRQUM1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO1FBQzNCLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7UUFDM0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFURCxrRUFTQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogVGhlIHN0YXRlIG9mIGEgYnV0dG9uLWxpa2UgdmFyaWFibGUgZHVyaW5nIGEgc2luZ2xlIGZyYW1lLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gQnV0dG9uU3RhdGV7XHJcbiAgICAvKiogVGhlIGJ1dHRvbiBpcyBpbiBpdHMgbmF0dXJhbCAoaW5hY3RpdmUpIHN0YXRlLiAqL1xyXG4gICAgUmVzdCxcclxuICAgIC8qKiBUaGUgYnV0dG9uIGlzIHByZXNzZWQgZG93biB0aGlzIGZyYW1lLiAqL1xyXG4gICAgUHJlc3NlZCxcclxuICAgIC8qKiBUaGUgYnV0dG9uIGlzIGhlbGQgZG93bi4gKi9cclxuICAgIEhlbGQsXHJcbiAgICAvKiogVGhlIGJ1dHRvbiBpcyByZWxlYXNlZCB0aGlzIGZyYW1lLiAqL1xyXG4gICAgUmVsZWFzZWQsXHJcbn1cclxuZXhwb3J0IHR5cGUgQXhpczFEID0gbnVtYmVyO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBvYmplY3RzIHRoYXQgY2FuIHN1cHBvcnQgY29udHJvbCBpbnB1dHMuXHJcbiAqIFlvdSBjYW4gY29uc2lkZXIgdGhpcyBhcyBhbiBhYnN0cmFjdGlvbiBvdmVyIGRpZmZlcmVudCBraW5kcyBvZiBpbnB1dHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dENvbnRyb2xzIHtcclxuICAgIHJlYWRvbmx5IGhvcml6b250YWxBeGlzOiBBeGlzMUQ7XHJcbiAgICByZWFkb25seSB2ZXJ0aWNhbEF4aXM6IEF4aXMxRDtcclxuICAgIHJlYWRvbmx5IGF0dGFjazogQnV0dG9uU3RhdGU7XHJcbiAgICByZWFkb25seSBnZXRodXJ0OiBCdXR0b25TdGF0ZTtcclxuICAgIHJlYWRvbmx5IGludGVyYWN0OiBCdXR0b25TdGF0ZTtcclxuICAgIHJlYWRvbmx5IGF0dGFjazI6IEJ1dHRvblN0YXRlO1xyXG4gICAgcmVhZG9ubHkgYXR0YWNrMzogQnV0dG9uU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNJbXBsZW1lbnRlZElucHV0Q29udHJvbHMob2JqOiBhbnkpOiBvYmogaXMgSUlucHV0Q29udHJvbHN7XHJcbiAgICByZXR1cm4gb2JqICYmIFxyXG4gICAgKG9iai5ob3Jpem9udGFsQXhpcyAhPT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgKG9iai52ZXJ0aWNhbEF4aXMgIT09IHVuZGVmaW5lZCkgJiZcclxuICAgIChvYmouYXR0YWNrICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAob2JqLmludGVyYWN0ICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAob2JqLmdldGh1cnQgIT09IHVuZGVmaW5lZCkgJiZcclxuICAgIChvYmouYXR0YWNrMiAhPT0gdW5kZWZpbmVkKSYmXHJcbiAgICAob2JqLmF0dGFjazMgIT09IHVuZGVmaW5lZCk7IFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/camera/CameraTransposer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FtZXJhXFxDYW1lcmFUcmFuc3Bvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBZ0RDO1FBN0NHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixzQkFBc0I7UUFDdEIsVUFBSSxHQUFXLENBQUMsVUFBVSxDQUFDO1FBQzNCLHNCQUFzQjtRQUN0QixVQUFJLEdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDM0Isc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxVQUFVLENBQUM7UUFDMUIsc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxVQUFVLENBQUM7UUFDMUIsc0JBQXNCO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsc0JBQXNCO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBNkJ4QixDQUFDO0lBM0JHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpRUFBaUU7UUFDakUsbURBQW1EO1FBQ25ELElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RCxJQUFJLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUksSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pLLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNuRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN0RixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3FEQUNHO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cURBQ0c7SUFQUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWdEcEM7SUFBRCx1QkFBQztDQWhERCxBQWdEQyxDQWhENkMsRUFBRSxDQUFDLFNBQVMsR0FnRHpEO2tCQWhEb0IsZ0JBQWdCO0FBa0RyQyxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhVHJhbnNwb3NlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmb2xsb3dUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBmb2xsb3dYOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgZm9sbG93WTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtaW5YOiBudW1iZXIgPSAtMjE0NzQ4MzY0NztcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1pblk6IG51bWJlciA9IC0yMTQ3NDgzNjQ3O1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgbWF4WDogbnVtYmVyID0gMjE0NzQ4MzY0NztcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1heFk6IG51bWJlciA9IDIxNDc0ODM2NDc7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgb2Zmc2V0WTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIE5vdCB1c2luZyBjb252ZXJ0VG9Xb3JsZFNwYWNlQVIgKyBjb252ZXJ0VG9Ob2RlU3BhY2VBUiBiZWNhdXNlXHJcbiAgICAgICAgLy8gdGhleSBhcmUgaW5hY2N1cmF0ZSBhbmQgY2F1c2VzIGNhbWVyYSBqaXR0ZXIuIDooXHJcbiAgICAgICAgbGV0IGNhbWVyYUxvY2FsVHJhbnNmb3JtID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRMb2NhbE1hdHJpeChjYW1lcmFMb2NhbFRyYW5zZm9ybSk7XHJcbiAgICAgICAgbGV0IHRhcmdldFdvcmxkVHJhbnNmb3JtID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRoaXMuZm9sbG93VGFyZ2V0LmdldFdvcmxkTWF0cml4KHRhcmdldFdvcmxkVHJhbnNmb3JtKTtcclxuICAgICAgICBsZXQgdGFyZ2V0V29ybGRUcmFuc2xhdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIHRhcmdldFdvcmxkVHJhbnNmb3JtLmdldFRyYW5zbGF0aW9uKHRhcmdldFdvcmxkVHJhbnNsYXRpb24pO1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZCA9IGNjLnY0KHRhcmdldFdvcmxkVHJhbnNsYXRpb24ueCwgdGFyZ2V0V29ybGRUcmFuc2xhdGlvbi55LCB0YXJnZXRXb3JsZFRyYW5zbGF0aW9uLnopLnRyYW5zZm9ybU1hdDQoY2FtZXJhTG9jYWxUcmFuc2Zvcm0pO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3NpdGlvbiA9IGNjLnYyKHRyYW5zZm9ybWVkLngsIHRyYW5zZm9ybWVkLnkpLmFkZChjYy52MigtY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoIC8gMiwgLWNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBjYy52MihcclxuICAgICAgICAgICAgY2xhbXAodGhpcy5mb2xsb3dYID8gdGFyZ2V0UG9zaXRpb24ueCA6IHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm1pblgsIHRoaXMubWF4WCksXHJcbiAgICAgICAgICAgIGNsYW1wKHRoaXMuZm9sbG93WSA/IHRhcmdldFBvc2l0aW9uLnkgOiB0aGlzLm5vZGUucG9zaXRpb24ueSwgdGhpcy5taW5ZLCB0aGlzLm1heFkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xhbXAoeDogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgaWYgKHggPCBhKSByZXR1cm4gYTtcclxuICAgIGlmICh4ID4gYikgcmV0dXJuIGI7XHJcbiAgICByZXR1cm4geDtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/input/KeyboardControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ff4dcmThZMKKaXEWb71524', 'KeyboardControls');
// scripts/input/KeyboardControls.ts

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
var IInputControls_1 = require("./IInputControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var KeyboardControls = /** @class */ (function (_super) {
    __extends(KeyboardControls, _super);
    function KeyboardControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hAxis = 0;
        _this._vAxis = 0;
        _this._zKey = IInputControls_1.ButtonState.Rest;
        _this._xKey = IInputControls_1.ButtonState.Rest;
        _this._cKey = IInputControls_1.ButtonState.Rest;
        _this._vKey = IInputControls_1.ButtonState.Rest;
        return _this;
    }
    Object.defineProperty(KeyboardControls.prototype, "horizontalAxis", {
        get: function () { return this._hAxis; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "verticalAxis", {
        get: function () { return this._vAxis; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack", {
        get: function () { return this._zKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "interact", {
        get: function () { return this._zKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "gethurt", {
        get: function () { return this._xKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack2", {
        get: function () { return this._cKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack3", {
        get: function () { return this._vKey; },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    KeyboardControls.prototype.onLoad = function () { };
    KeyboardControls.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    // update (dt) {}
    KeyboardControls.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis = -1;
                break;
            case cc.macro.KEY.d:
                this._hAxis = 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis = 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis = -1;
                break;
            case cc.macro.KEY.z:
                if (this._zKey === IInputControls_1.ButtonState.Rest || this._zKey === IInputControls_1.ButtonState.Released) {
                    this._zKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._zKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.x:
                if (this._xKey === IInputControls_1.ButtonState.Rest || this._xKey === IInputControls_1.ButtonState.Released) {
                    this._xKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._xKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.c:
                if (this._cKey === IInputControls_1.ButtonState.Rest || this._cKey === IInputControls_1.ButtonState.Released) {
                    this._cKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._cKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.v:
                if (this._vKey === IInputControls_1.ButtonState.Rest || this._vKey === IInputControls_1.ButtonState.Released) {
                    this._vKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._vKey = IInputControls_1.ButtonState.Held;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    };
    KeyboardControls.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this._hAxis += 1;
                break;
            case cc.macro.KEY.d:
                this._hAxis -= 1;
                break;
            case cc.macro.KEY.w:
                this._vAxis -= 1;
                break;
            case cc.macro.KEY.s:
                this._vAxis += 1;
                break;
            case cc.macro.KEY.z:
                if (this._zKey === IInputControls_1.ButtonState.Pressed || this._zKey === IInputControls_1.ButtonState.Held) {
                    this._zKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._zKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.x:
                if (this._xKey === IInputControls_1.ButtonState.Pressed || this._xKey === IInputControls_1.ButtonState.Held) {
                    this._xKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._xKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.c:
                if (this._cKey === IInputControls_1.ButtonState.Pressed || this._cKey === IInputControls_1.ButtonState.Held) {
                    this._cKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._cKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.v:
                if (this._vKey === IInputControls_1.ButtonState.Pressed || this._vKey === IInputControls_1.ButtonState.Held) {
                    this._vKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._vKey = IInputControls_1.ButtonState.Rest;
                }
                break;
        }
        this._vAxis = clamp(this._vAxis);
        this._hAxis = clamp(this._hAxis);
    };
    KeyboardControls = __decorate([
        ccclass
    ], KeyboardControls);
    return KeyboardControls;
}(cc.Component));
exports.default = KeyboardControls;
function clamp(value, a, b) {
    if (a === void 0) { a = -1; }
    if (b === void 0) { b = 1; }
    if (value < a)
        return a;
    if (value > b)
        return b;
    return value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5wdXRcXEtleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkcsbURBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQ1ksb0NBQVk7SUFEeEI7UUFBQSxxRUFpSUM7UUE3SFcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUduQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFJdEMsV0FBSyxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQztRQUd0QyxXQUFLLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBR3RDLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBNkdsRCxDQUFDO0lBNUhHLHNCQUFXLDRDQUFjO2FBQXpCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRzFELHNCQUFXLDBDQUFZO2FBQXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLG9DQUFNO2FBQWpCLGNBQW1DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3RELHNCQUFXLHNDQUFRO2FBQW5CLGNBQXFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3ZELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3ZELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRXZELHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLGdDQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLG9DQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNuQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFFcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssNEJBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxRQUFRLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQS9IZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FpSXBDO0lBQUQsdUJBQUM7Q0FqSUQsQUFpSUMsQ0FoSVcsRUFBRSxDQUFDLFNBQVMsR0FnSXZCO2tCQWpJb0IsZ0JBQWdCO0FBbUlyQyxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsQ0FBYyxFQUFFLENBQWE7SUFBN0Isa0JBQUEsRUFBQSxLQUFhLENBQUM7SUFBRSxrQkFBQSxFQUFBLEtBQWE7SUFDdkQsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRDb250cm9sc1xyXG4gICAgZXh0ZW5kcyBjYy5Db21wb25lbnRcclxuICAgIGltcGxlbWVudHMgSUlucHV0Q29udHJvbHMge1xyXG5cclxuICAgIHByaXZhdGUgX2hBeGlzOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faEF4aXMgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZBeGlzOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3ZBeGlzIH1cclxuXHJcbiAgICBwcml2YXRlIF96S2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl96S2V5IH1cclxuICAgIHB1YmxpYyBnZXQgaW50ZXJhY3QoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5fektleSB9XHJcblxyXG4gICAgcHJpdmF0ZSBfeEtleTogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xyXG4gICAgcHVibGljIGdldCBnZXRodXJ0KCk6IEJ1dHRvblN0YXRlIHsgcmV0dXJuIHRoaXMuX3hLZXkgfVxyXG5cclxuICAgIHByaXZhdGUgX2NLZXk6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrMigpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9jS2V5IH1cclxuXHJcbiAgICBwcml2YXRlIF92S2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjazMoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5fdktleSB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5faEF4aXMgPSAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5faEF4aXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZBeGlzID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuejogXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fektleSA9PT0gQnV0dG9uU3RhdGUuUmVzdCB8fCB0aGlzLl96S2V5ID09PSBCdXR0b25TdGF0ZS5SZWxlYXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl96S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS54OiBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl94S2V5ID09PSBCdXR0b25TdGF0ZS5SZXN0IHx8IHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlJlbGVhc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmM6IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5fY0tleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jS2V5ID0gQnV0dG9uU3RhdGUuUHJlc3NlZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY0tleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudjogXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdktleSA9PT0gQnV0dG9uU3RhdGUuUmVzdCB8fCB0aGlzLl92S2V5ID09PSBCdXR0b25TdGF0ZS5SZWxlYXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92QXhpcyA9IGNsYW1wKHRoaXMuX3ZBeGlzKTtcclxuICAgICAgICB0aGlzLl9oQXhpcyA9IGNsYW1wKHRoaXMuX2hBeGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLno6IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fektleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3pLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fektleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDogXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuUHJlc3NlZCB8fCB0aGlzLl94S2V5ID09PSBCdXR0b25TdGF0ZS5IZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlJlbGVhc2VkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl94S2V5ID0gQnV0dG9uU3RhdGUuUmVzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5jOiBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jS2V5ID09PSBCdXR0b25TdGF0ZS5QcmVzc2VkIHx8IHRoaXMuX2NLZXkgPT09IEJ1dHRvblN0YXRlLkhlbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NLZXkgPSBCdXR0b25TdGF0ZS5SZXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnY6IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fdktleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZLZXkgPSBCdXR0b25TdGF0ZS5SZWxlYXNlZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdktleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdkF4aXMgPSBjbGFtcCh0aGlzLl92QXhpcyk7XHJcbiAgICAgICAgdGhpcy5faEF4aXMgPSBjbGFtcCh0aGlzLl9oQXhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBhOiBudW1iZXIgPSAtMSwgYjogbnVtYmVyID0gMSkge1xyXG4gICAgaWYgKHZhbHVlIDwgYSkgcmV0dXJuIGE7XHJcbiAgICBpZiAodmFsdWUgPiBiKSByZXR1cm4gYjtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/strategies/AgentStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ea0em2sJxENZ80TS3fnUNO', 'AgentStrategy');
// scripts/ai/strategies/AgentStrategy.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
var AI;
(function (AI) {
    /**
     * An abstraction over AI strategies.
     * An Agent can combine several strategies to create new strategies.
     * Remember to call their start and update methods.
     *
     * This is a technique called "object composition".
     */
    var Strategy = /** @class */ (function () {
        function Strategy() {
        }
        return Strategy;
    }());
    AI.Strategy = Strategy;
})(AI = exports.AI || (exports.AI = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXHN0cmF0ZWdpZXNcXEFnZW50U3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBaUIsRUFBRSxDQXVCbEI7QUF2QkQsV0FBaUIsRUFBRTtJQUNmOzs7Ozs7T0FNRztJQUNIO1FBQUE7UUFjQSxDQUFDO1FBQUQsZUFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZHFCLFdBQVEsV0FjN0IsQ0FBQTtBQUNMLENBQUMsRUF2QmdCLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQXVCbEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25TdGF0ZSwgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi4vLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcclxuZXhwb3J0IG5hbWVzcGFjZSBBSXtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYWJzdHJhY3Rpb24gb3ZlciBBSSBzdHJhdGVnaWVzLlxyXG4gICAgICogQW4gQWdlbnQgY2FuIGNvbWJpbmUgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIGNyZWF0ZSBuZXcgc3RyYXRlZ2llcy5cclxuICAgICAqIFJlbWVtYmVyIHRvIGNhbGwgdGhlaXIgc3RhcnQgYW5kIHVwZGF0ZSBtZXRob2RzLlxyXG4gICAgICogXHJcbiAgICAgKiBUaGlzIGlzIGEgdGVjaG5pcXVlIGNhbGxlZCBcIm9iamVjdCBjb21wb3NpdGlvblwiLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RyYXRlZ3kgaW1wbGVtZW50cyBJSW5wdXRDb250cm9sc3tcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGhvcml6b250YWxBeGlzKCk6IG51bWJlcjtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IHZlcnRpY2FsQXhpcygpOiBudW1iZXI7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGU7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbXBsZW1lbnRzIGluaXRpYWxpemF0aW9uIG9mIHRoZSBzdHJhdGVneS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3Qgc3RhcnQoKTogdm9pZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbXBsZW1lbnRzIHVwZGF0aW5nIG9mIHRoZSBzdHJhdGVneS5cclxuICAgICAgICAgKiBAcGFyYW0gZHQgVGltZSBlbGFwc2VkIHNpbmNlIGxhc3QgdXBkYXRlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCB1cGRhdGUoZHQ6IG51bWJlcik6dm9pZDtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ai/LavaSlimeAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8da08N+F15AyKvgv89aNhm3', 'LavaSlimeAI');
// scripts/ai/LavaSlimeAI.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player_1 = require("../Player");
var SlimeState;
(function (SlimeState) {
    SlimeState[SlimeState["Idle"] = 0] = "Idle";
    SlimeState[SlimeState["Walk"] = 1] = "Walk";
    SlimeState[SlimeState["Run"] = 2] = "Run";
    SlimeState[SlimeState["Attack"] = 3] = "Attack";
})(SlimeState || (SlimeState = {}));
var LavaSlimeAI = /** @class */ (function (_super) {
    __extends(LavaSlimeAI, _super);
    function LavaSlimeAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.walkSpeed = 120;
        _this.runSpeed = 240;
        _this.idleTime = 5;
        _this.walkTime = 5;
        _this.patrolRadius = 200;
        _this.detectionRadius = 170;
        _this.attackRadius = 80;
        _this.timeBeforeAttack = 1;
        _this.attackDamage = 13;
        _this.maxHealth = 10;
        _this.health = 10;
        _this.lifebar = null;
        _this.barOffsetY = 50;
        _this.player = null;
        _this.slimeState = SlimeState.Idle;
        _this.timer = 0;
        _this.direction = cc.v2(0, 0);
        _this.patrolCenter = cc.v2(0, 0);
        _this.currentRunClip = "";
        _this.currentAttackClip = "";
        _this.isDead = false;
        _this.isDeathAnimPlaying = false;
        return _this;
    }
    LavaSlimeAI.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    LavaSlimeAI.prototype.start = function () {
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        if (!this.player)
            cc.error("Player node not found");
        this.anim = this.getComponent(cc.Animation);
        this.patrolCenter = this.node.getPosition().clone();
        // Draw patrol boundary
        this.boundaryNode = new cc.Node("PatrolBoundary");
        this.boundaryNode.parent = this.node.parent;
        this.boundaryNode.setPosition(this.patrolCenter);
        //const patrolGfx = this.boundaryNode.addComponent(cc.Graphics);
        //patrolGfx.lineWidth = 2;
        //patrolGfx.strokeColor = cc.color(0, 255, 0);
        //patrolGfx.circle(0, 0, this.patrolRadius);
        //patrolGfx.stroke();
        // Detection area
        this.detectionNode = new cc.Node("DetectionArea");
        this.detectionNode.parent = this.node;
        this.detectionNode.setPosition(0, 0);
        this.detectionGfx = this.detectionNode.addComponent(cc.Graphics);
        this.detectionGfx.lineWidth = 2;
        // Attack area
        this.attackNode = new cc.Node("AttackArea");
        this.attackNode.parent = this.node;
        this.attackNode.setPosition(0, 0);
        this.attackGfx = this.attackNode.addComponent(cc.Graphics);
        this.attackGfx.lineWidth = 2;
        // Health bar setup
        if (this.lifebar) {
            //this.lifebar.setPosition(0, this.node.height / 2 + this.barOffsetY);
            //this.updateLife(0, 40);
        }
        this.setToIdle();
    };
    LavaSlimeAI.prototype.update = function (dt) {
        // If already marked dead, skip AI
        if (this.isDead)
            return;
        if (this.isDeathAnimPlaying) {
            // Let death animation play; do nothing else until it's over
            return;
        }
        // 1) compute distance to player
        var distToPlayer = Infinity;
        if (this.player) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            distToPlayer = slimeW.sub(playerW).mag();
        }
        // 2) check if player is still within patrol radius
        var localPlayerPos = this.node.parent
            .convertToNodeSpaceAR(this.player.parent.convertToWorldSpaceAR(this.player.position));
        var distFromCenter = localPlayerPos.sub(this.patrolCenter).mag();
        var playerInPatrol = distFromCenter <= this.patrolRadius;
        // 3) redraw detection circle
        var drawDetectR = Math.min(this.detectionRadius, this.patrolRadius);
        this.detectionGfx.clear();
        this.detectionGfx.lineWidth = 2;
        //this.detectionGfx.strokeColor = distToPlayer <= this.detectionRadius
        //    ? cc.color(255, 165, 0)
        //    : cc.color(255, 0, 0);
        //this.detectionGfx.circle(0, 0, drawDetectR);
        //this.detectionGfx.stroke();
        // 4) redraw attack circle
        var drawAttackR = Math.min(this.attackRadius, this.patrolRadius);
        this.attackGfx.clear();
        this.attackGfx.lineWidth = 2;
        //this.attackGfx.strokeColor = distToPlayer <= this.attackRadius
        //   ? cc.color(128, 0, 128)
        //   : cc.color(0, 0, 255);
        //this.attackGfx.circle(0, 0, drawAttackR);
        //this.attackGfx.stroke();
        // 5) AI state transitions
        var inDetect = distToPlayer <= this.detectionRadius && playerInPatrol;
        var inAttack = distToPlayer <= this.attackRadius && playerInPatrol;
        // attack first
        if (inAttack && this.slimeState !== SlimeState.Attack) {
            this.startAttack();
            return;
        }
        if (this.slimeState === SlimeState.Attack) {
            this.timer += dt;
            // Wait through wind-up + attack anim (wind-up = timeBeforeAttack, attackAnim assumed 1s)
            if (this.timer >= this.timeBeforeAttack + 1) {
                this.setToIdle();
            }
            return;
        }
        // then run
        if (inDetect) {
            if (this.slimeState !== SlimeState.Run)
                this.startRunning();
            this.runTowardsPlayer(dt);
            return;
        }
        else if (this.slimeState === SlimeState.Run) {
            this.setToIdle();
        }
        // patrol (idle → walk → idle)
        this.timer += dt;
        if (this.slimeState === SlimeState.Idle && this.timer >= this.idleTime) {
            this.startWalking();
        }
        if (this.slimeState === SlimeState.Walk) {
            var pos = this.node.getPosition();
            var delta = cc.v2(this.direction.x * this.walkSpeed * dt, this.direction.y * this.walkSpeed * dt);
            var next = pos.add(delta);
            if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
                this.setToIdle();
                return;
            }
            this.node.setPosition(next);
            if (this.timer >= this.walkTime) {
                this.setToIdle();
            }
        }
    };
    // —— Health‐bar updater ——
    LavaSlimeAI.prototype.updateLife = function (delta, hp) {
        if (!this.lifebar)
            return;
        this.lifebar.width = (hp / this.maxHealth) * 40;
        if (hp <= 10)
            this.lifebar.color = cc.Color.RED;
        else if (hp <= 20)
            this.lifebar.color = cc.Color.ORANGE;
        else
            this.lifebar.color = cc.Color.GREEN;
    };
    LavaSlimeAI.prototype.takeDamage = function (amount) {
        if (this.health <= 0 || this.isDeathAnimPlaying)
            return;
        // play hurt animation based on direction to player
        var playerPos = this.player.getPosition();
        var slimePos = this.node.getPosition();
        var dir = playerPos.sub(slimePos).normalize();
        var hurtAnim = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeHurtRight" : "LavaSlimeHurtLeft")
            : (dir.y > 0 ? "LavaSlimeHurtUp" : "LavaSlimeHurtDown");
        this.anim.play(hurtAnim);
        this.health -= amount;
        if (this.health < 0)
            this.health = 0;
        this.updateLife(-amount, this.health);
        if (this.health === 0) {
            this.startDeathSequence(dir);
        }
    };
    LavaSlimeAI.prototype.heal = function (amount) {
        if (this.health <= 0)
            return;
        this.health += amount;
        if (this.health > this.maxHealth)
            this.health = this.maxHealth;
        this.updateLife(amount, this.health);
    };
    LavaSlimeAI.prototype.startDeathSequence = function (direction) {
        this.isDeathAnimPlaying = true;
        this.slimeState = SlimeState.Idle; // freeze other AI
        this.playDeathAnimation(direction);
    };
    LavaSlimeAI.prototype.playDeathAnimation = function (direction) {
        var _this = this;
        var deathAnim = Math.abs(direction.x) > Math.abs(direction.y)
            ? (direction.x > 0 ? "LavaSlimeDeathRight" : "LavaSlimeDeathLeft")
            : (direction.y > 0 ? "LavaSlimeDeathUp" : "LavaSlimeDeathDown");
        this.anim.play(deathAnim);
        this.unscheduleAllCallbacks();
        // After the death animation finishes (assume 1s), mark as fully dead
        this.scheduleOnce(function () {
            _this.isDead = true;
            _this.isDeathAnimPlaying = false;
            // Do NOT destroy the node—just leave the dead pose in place
        }, 1);
    };
    LavaSlimeAI.prototype.setToIdle = function () {
        this.slimeState = SlimeState.Idle;
        this.timer = 0;
        this.anim.play("LavaSlimeIdle");
    };
    LavaSlimeAI.prototype.startWalking = function () {
        this.slimeState = SlimeState.Walk;
        this.timer = 0;
        this.direction = cc.v2(Math.random() >= 0.5 ? 1 : -1, Math.random() >= 0.5 ? 1 : -1).normalize();
        var clip = Math.abs(this.direction.x) > Math.abs(this.direction.y)
            ? (this.direction.x > 0 ? "LavaSlimeWalkRight" : "LavaSlimeWalkLeft")
            : (this.direction.y > 0 ? "LavaSlimeWalkUp" : "LavaSlimeWalkDown");
        this.anim.play(clip);
    };
    LavaSlimeAI.prototype.startRunning = function () {
        this.slimeState = SlimeState.Run;
        this.currentRunClip = "";
    };
    LavaSlimeAI.prototype.startAttack = function () {
        var _this = this;
        this.slimeState = SlimeState.Attack;
        this.timer = 0;
        // Wind‐up: play idle (or a custom wind‐up anim)
        this.anim.play("LavaSlimeIdle");
        this.scheduleOnce(function () { return _this.performAttack(); }, this.timeBeforeAttack);
    };
    LavaSlimeAI.prototype.performAttack = function () {
        var _this = this;
        // Play attack clip based on direction to player
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeAttackRight" : "LavaSlimeAttackLeft")
            : (dir.y > 0 ? "LavaSlimeAttackUp" : "LavaSlimeAttackDown");
        this.anim.play(clip);
        // Apply damage if player still within radius
        var playerComp = this.player.getComponent(Player_1.default);
        if (playerComp) {
            var slimeW = this.node.parent.convertToWorldSpaceAR(this.node.position);
            var playerW = this.player.parent.convertToWorldSpaceAR(this.player.position);
            var dist = slimeW.sub(playerW).mag();
            if (dist <= this.attackRadius) {
                playerComp.takeDamage(this.attackDamage);
            }
        }
        // After attack anim (~1s), go back to idle
        this.scheduleOnce(function () { return _this.setToIdle(); }, 1);
    };
    LavaSlimeAI.prototype.runTowardsPlayer = function (dt) {
        var dir = this.getRunDirection();
        var clip = Math.abs(dir.x) > Math.abs(dir.y)
            ? (dir.x > 0 ? "LavaSlimeRunRight" : "LavaSlimeRunLeft")
            : (dir.y > 0 ? "LavaSlimeRunUp" : "LavaSlimeRunDown");
        if (clip !== this.currentRunClip) {
            this.anim.play(clip);
            this.currentRunClip = clip;
        }
        var delta = cc.v2(dir.x * this.runSpeed * dt, dir.y * this.runSpeed * dt);
        var next = this.node.getPosition().add(delta);
        if (next.sub(this.patrolCenter).mag() > this.patrolRadius) {
            this.setToIdle();
            return;
        }
        this.node.setPosition(next);
    };
    LavaSlimeAI.prototype.getRunDirection = function () {
        var worldP = this.player.parent.convertToWorldSpaceAR(this.player.position);
        var localP = this.node.parent.convertToNodeSpaceAR(worldP);
        return cc.v2(localP.x - this.node.x, localP.y - this.node.y).normalize();
    };
    LavaSlimeAI.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    __decorate([
        property({ tooltip: "Slime walk speed in pixels per second" })
    ], LavaSlimeAI.prototype, "walkSpeed", void 0);
    __decorate([
        property({ tooltip: "Slime run speed in pixels per second" })
    ], LavaSlimeAI.prototype, "runSpeed", void 0);
    __decorate([
        property({ tooltip: "How long the slime stays idle before walking (seconds)" })
    ], LavaSlimeAI.prototype, "idleTime", void 0);
    __decorate([
        property({ tooltip: "How long the slime walks in one direction (seconds)" })
    ], LavaSlimeAI.prototype, "walkTime", void 0);
    __decorate([
        property({ tooltip: "Patrol radius from start point (pixels)" })
    ], LavaSlimeAI.prototype, "patrolRadius", void 0);
    __decorate([
        property({ tooltip: "Detection circle radius (pixels)" })
    ], LavaSlimeAI.prototype, "detectionRadius", void 0);
    __decorate([
        property({ tooltip: "Attack circle radius (pixels)" })
    ], LavaSlimeAI.prototype, "attackRadius", void 0);
    __decorate([
        property({ tooltip: "Time to wait before performing attack (seconds)" })
    ], LavaSlimeAI.prototype, "timeBeforeAttack", void 0);
    __decorate([
        property({ tooltip: "Damage dealt by the attack" })
    ], LavaSlimeAI.prototype, "attackDamage", void 0);
    __decorate([
        property({ tooltip: "Maximum health of the slime" })
    ], LavaSlimeAI.prototype, "maxHealth", void 0);
    __decorate([
        property({ tooltip: "Current health of the slime" })
    ], LavaSlimeAI.prototype, "health", void 0);
    __decorate([
        property(cc.Node)
    ], LavaSlimeAI.prototype, "lifebar", void 0);
    __decorate([
        property({ tooltip: "Vertical offset of health bar above slime (pixels)" })
    ], LavaSlimeAI.prototype, "barOffsetY", void 0);
    LavaSlimeAI = __decorate([
        ccclass
    ], LavaSlimeAI);
    return LavaSlimeAI;
}(cc.Component));
exports.default = LavaSlimeAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWlcXExhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENB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QStCLEVBQUUsQ0FBQztxREFDN0I7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsaURBQWlELEVBQUUsQ0FBQzt5REFDNUM7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztxREFDMUI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQztrREFDOUI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzsrQ0FDakM7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvREFBb0QsRUFBRSxDQUFDO21EQUM1QztJQXRDZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaVYvQjtJQUFELGtCQUFDO0NBalZELEFBaVZDLENBalZ3QyxFQUFFLENBQUMsU0FBUyxHQWlWcEQ7a0JBalZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcblxyXG5lbnVtIFNsaW1lU3RhdGUge1xyXG4gICAgSWRsZSxcclxuICAgIFdhbGssXHJcbiAgICBSdW4sXHJcbiAgICBBdHRhY2tcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YVNsaW1lQUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcclxuICAgIHdhbGtTcGVlZDogbnVtYmVyID0gMTIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcclxuICAgIHJ1blNwZWVkOiBudW1iZXIgPSAyNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxyXG4gICAgaWRsZVRpbWU6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxyXG4gICAgd2Fsa1RpbWU6IG51bWJlciA9IDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxyXG4gICAgcGF0cm9sUmFkaXVzOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXHJcbiAgICBkZXRlY3Rpb25SYWRpdXM6IG51bWJlciA9IDE3MDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcclxuICAgIGF0dGFja1JhZGl1czogbnVtYmVyID0gODA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJUaW1lIHRvIHdhaXQgYmVmb3JlIHBlcmZvcm1pbmcgYXR0YWNrIChzZWNvbmRzKVwiIH0pXHJcbiAgICB0aW1lQmVmb3JlQXR0YWNrOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGFtYWdlIGRlYWx0IGJ5IHRoZSBhdHRhY2tcIiB9KVxyXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMztcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcclxuICAgIGhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxyXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgIHByaXZhdGUgdGltZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb24gPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcclxuXHJcbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwID0gXCJcIjtcclxuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xyXG5cclxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzRGVhdGhBbmltUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIpIGNjLmVycm9yKFwiUGxheWVyIG5vZGUgbm90IGZvdW5kXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcclxuICAgICAgICB0aGlzLnBhdHJvbENlbnRlciA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmNsb25lKCk7XHJcblxyXG4gICAgICAgIC8vIERyYXcgcGF0cm9sIGJvdW5kYXJ5XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUgPSBuZXcgY2MuTm9kZShcIlBhdHJvbEJvdW5kYXJ5XCIpO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcclxuICAgICAgICAvL2NvbnN0IHBhdHJvbEdmeCA9IHRoaXMuYm91bmRhcnlOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgLy9wYXRyb2xHZngubGluZVdpZHRoID0gMjtcclxuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XHJcbiAgICAgICAgLy9wYXRyb2xHZnguY2lyY2xlKDAsIDAsIHRoaXMucGF0cm9sUmFkaXVzKTtcclxuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZWN0aW9uIGFyZWFcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2sgYXJlYVxyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcclxuICAgICAgICB0aGlzLmF0dGFja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgIC8vIEhlYWx0aCBiYXIgc2V0dXBcclxuICAgICAgICBpZiAodGhpcy5saWZlYmFyKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5saWZlYmFyLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5iYXJPZmZzZXRZKTtcclxuICAgICAgICAgICAgLy90aGlzLnVwZGF0ZUxpZmUoMCwgNDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIElmIGFscmVhZHkgbWFya2VkIGRlYWQsIHNraXAgQUlcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcclxuICAgICAgICAgICAgLy8gTGV0IGRlYXRoIGFuaW1hdGlvbiBwbGF5OyBkbyBub3RoaW5nIGVsc2UgdW50aWwgaXQncyBvdmVyXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDEpIGNvbXB1dGUgZGlzdGFuY2UgdG8gcGxheWVyXHJcbiAgICAgICAgbGV0IGRpc3RUb1BsYXllciA9IEluZmluaXR5O1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZVcgID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGRpc3RUb1BsYXllciA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyKSBjaGVjayBpZiBwbGF5ZXIgaXMgc3RpbGwgd2l0aGluIHBhdHJvbCByYWRpdXNcclxuICAgICAgICBjb25zdCBsb2NhbFBsYXllclBvcyA9IHRoaXMubm9kZS5wYXJlbnQhXHJcbiAgICAgICAgICAgIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGlzdEZyb21DZW50ZXIgPSBsb2NhbFBsYXllclBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XHJcblxyXG4gICAgICAgIC8vIDMpIHJlZHJhdyBkZXRlY3Rpb24gY2lyY2xlXHJcbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoICAgPSAyO1xyXG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXNcclxuICAgICAgICAvLyAgICA/IGNjLmNvbG9yKDI1NSwgMTY1LCAwKVxyXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcclxuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LmNpcmNsZSgwLCAwLCBkcmF3RGV0ZWN0Uik7XHJcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gNCkgcmVkcmF3IGF0dGFjayBjaXJjbGVcclxuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggICA9IDI7XHJcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1c1xyXG4gICAgICAgICAvLyAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXHJcbiAgICAgICAgIC8vICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xyXG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguY2lyY2xlKDAsIDAsIGRyYXdBdHRhY2tSKTtcclxuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyA1KSBBSSBzdGF0ZSB0cmFuc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xyXG5cclxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcclxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICAgICAgLy8gV2FpdCB0aHJvdWdoIHdpbmQtdXAgKyBhdHRhY2sgYW5pbSAod2luZC11cCA9IHRpbWVCZWZvcmVBdHRhY2ssIGF0dGFja0FuaW0gYXNzdW1lZCAxcylcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lQmVmb3JlQXR0YWNrICsgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGVuIHJ1blxyXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLlJ1bikgdGhpcy5zdGFydFJ1bm5pbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLlJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGF0cm9sIChpZGxlIOKGkiB3YWxrIOKGkiBpZGxlKVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLndhbGtTcGVlZCAqIGR0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHQgID0gcG9zLmFkZChkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMud2Fsa1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g4oCU4oCUIEhlYWx0aOKAkGJhciB1cGRhdGVyIOKAlOKAlFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGlmZWJhci53aWR0aCA9IChocC90aGlzLm1heEhlYWx0aCkqNDA7XHJcbiAgICAgICAgaWYgKGhwIDw9IDEwKSAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XHJcbiAgICAgICAgZWxzZSAgICAgICAgICAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGFrZURhbWFnZShhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHBsYXkgaHVydCBhbmltYXRpb24gYmFzZWQgb24gZGlyZWN0aW9uIHRvIHBsYXllclxyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgc2xpbWVQb3MgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZGlyICAgICAgID0gcGxheWVyUG9zLnN1YihzbGltZVBvcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgaHVydEFuaW0gID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lSHVydFJpZ2h0XCIgOiBcIkxhdmFTbGltZUh1cnRMZWZ0XCIpXHJcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiTGF2YVNsaW1lSHVydFVwXCIgOiBcIkxhdmFTbGltZUh1cnREb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gYW1vdW50O1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDApIHRoaXMuaGVhbHRoID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydERlYXRoU2VxdWVuY2UoZGlyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoICs9IGFtb3VudDtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiB0aGlzLm1heEhlYWx0aCkgdGhpcy5oZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoYW1vdW50LCB0aGlzLmhlYWx0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydERlYXRoU2VxdWVuY2UoZGlyZWN0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTsgLy8gZnJlZXplIG90aGVyIEFJXHJcbiAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJMYXZhU2xpbWVEZWF0aFJpZ2h0XCIgOiBcIkxhdmFTbGltZURlYXRoTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkxhdmFTbGltZURlYXRoVXBcIiA6IFwiTGF2YVNsaW1lRGVhdGhEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XHJcblxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIC8vIEFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMgKGFzc3VtZSAxcyksIG1hcmsgYXMgZnVsbHkgZGVhZFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBEbyBOT1QgZGVzdHJveSB0aGUgbm9kZeKAlGp1c3QgbGVhdmUgdGhlIGRlYWQgcG9zZSBpbiBwbGFjZVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9JZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShcIkxhdmFTbGltZUlkbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMVxyXG4gICAgICAgICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcclxuICAgICAgICAgICAgPyAodGhpcy5kaXJlY3Rpb24ueCA+IDAgPyBcIkxhdmFTbGltZVdhbGtSaWdodFwiIDogXCJMYXZhU2xpbWVXYWxrTGVmdFwiKVxyXG4gICAgICAgICAgICA6ICh0aGlzLmRpcmVjdGlvbi55ID4gMCA/IFwiTGF2YVNsaW1lV2Fsa1VwXCIgOiBcIkxhdmFTbGltZVdhbGtEb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuUnVuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRBdHRhY2soKSB7XHJcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgLy8gV2luZOKAkHVwOiBwbGF5IGlkbGUgKG9yIGEgY3VzdG9tIHdpbmTigJB1cCBhbmltKVxyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiTGF2YVNsaW1lSWRsZVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnBlcmZvcm1BdHRhY2soKSwgdGhpcy50aW1lQmVmb3JlQXR0YWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBlcmZvcm1BdHRhY2soKSB7XHJcbiAgICAgICAgLy8gUGxheSBhdHRhY2sgY2xpcCBiYXNlZCBvbiBkaXJlY3Rpb24gdG8gcGxheWVyXHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiTGF2YVNsaW1lQXR0YWNrTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUF0dGFja1VwXCIgOiBcIkxhdmFTbGltZUF0dGFja0Rvd25cIik7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IGRhbWFnZSBpZiBwbGF5ZXIgc3RpbGwgd2l0aGluIHJhZGl1c1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICBpZiAocGxheWVyQ29tcCkge1xyXG4gICAgICAgICAgICBjb25zdCBzbGltZVcgICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXICA9IHRoaXMucGxheWVyLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCAgICAgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrRGFtYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWZ0ZXIgYXR0YWNrIGFuaW0gKH4xcyksIGdvIGJhY2sgdG8gaWRsZVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0VG9JZGxlKCksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXHJcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lUnVuUmlnaHRcIiA6IFwiTGF2YVNsaW1lUnVuTGVmdFwiKVxyXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZVJ1blVwXCIgOiBcIkxhdmFTbGltZVJ1bkRvd25cIik7XHJcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJ1bkNsaXAgPSBjbGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XHJcbiAgICAgICAgY29uc3QgbmV4dCAgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoZGVsdGEpO1xyXG4gICAgICAgIGlmIChuZXh0LnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCB3b3JsZFAgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsUCA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUCk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utilities/ZSortOnLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1855dXZEzdGf7iIoaoAeRs6', 'ZSortOnLoad');
// scripts/utilities/ZSortOnLoad.ts

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
/**
 * A component that makes every node below the node it is attached to render in a way
 * such that it appears behind nodes that are located below it.
 */
var ZSortOnLoad = /** @class */ (function (_super) {
    __extends(ZSortOnLoad, _super);
    function ZSortOnLoad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    ZSortOnLoad.prototype.onLoad = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var node = _a[_i];
            node.zIndex = 10000 + -node.y;
        }
    };
    ZSortOnLoad = __decorate([
        ccclass
    ], ZSortOnLoad);
    return ZSortOnLoad;
}(cc.Component));
exports.default = ZSortOnLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbGl0aWVzXFxaU29ydE9uTG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7O0dBR0c7QUFFSDtJQUF5QywrQkFBWTtJQUFyRDs7SUFlQSxDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLDRCQUFNLEdBQU47UUFDSSxLQUFpQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQWhDLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQVJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZS9CO0lBQUQsa0JBQUM7Q0FmRCxBQWVDLENBZndDLEVBQUUsQ0FBQyxTQUFTLEdBZXBEO2tCQWZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCB0aGF0IG1ha2VzIGV2ZXJ5IG5vZGUgYmVsb3cgdGhlIG5vZGUgaXQgaXMgYXR0YWNoZWQgdG8gcmVuZGVyIGluIGEgd2F5IFxyXG4gKiBzdWNoIHRoYXQgaXQgYXBwZWFycyBiZWhpbmQgbm9kZXMgdGhhdCBhcmUgbG9jYXRlZCBiZWxvdyBpdC5cclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpTb3J0T25Mb2FkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIG5vZGUuekluZGV4ID0gMTAwMDAgKyAtbm9kZS55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcb2JqXFxQb3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFpQ0M7UUEvQkcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7O0lBK0I1QixDQUFDO0lBN0JHLHVCQUFNLEdBQU47UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksRUFBQztZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUI7UUFDRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksWUFBWTtRQUNaLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDOzhDQUNMO0lBRlAsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlDMUI7SUFBRCxhQUFDO0NBakNELEFBaUNDLENBakNtQyxFQUFFLENBQUMsU0FBUyxHQWlDL0M7a0JBakNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkludGVnZXJ9KVxyXG4gICAgaGVhbEFtb3VudDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOmWi+WVn+aZgiDmkq3mlL5wb3Rfb3V05YuV55WrXHJcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicG90XCIpO1xyXG4gICAgICAgIGlmIChhbmltKXtcclxuICAgICAgICAgICAgYW5pbS5wbGF5KFwicG90X291dFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvdCBubyBzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmkqXmlL7lrowg5pS55oiQcG90X2lkbGXli5XnlatcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PntcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGxheShcInBvdF9pZGxlXCIpOyAgICAgICAgXHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBpY2t1cCgpIHtcclxuICAgICAgICAvLyDlj5blvpfnjqnlrrbkuKblm57lvqnooYDph49cclxuICAgICAgICBsZXQgcGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGlja3VwXCIpXHJcbiAgICAgICAgaWYgKHBsYXllcikge1xyXG4gICAgICAgICAgICBwbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLmhlYWwodGhpcy5oZWFsQW1vdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSBcIlBsYXllclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/obj/Key.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '793feh1sfZEEYJ5zYzkepR2', 'Key');
// scripts/obj/Key.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.anim = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    NewClass.prototype.update = function (dt) {
        if (!this.anim.getAnimationState('key-gold').isPlaying) {
            this.anim.play('key-gold');
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcb2JqXFxLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWYsVUFBSSxHQUFpQixJQUFJLENBQUM7O0lBZ0J0QyxDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdCNUI7SUFBRCxlQUFDO0NBeEJELEFBd0JDLENBeEJxQyxFQUFFLENBQUMsU0FBUyxHQXdCakQ7a0JBeEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgna2V5LWdvbGQnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgna2V5LWdvbGQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89a10c6NgNMSaSJuLQEf/RT', 'GameManager');
// scripts/GameManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.LevelLabel = null;
        _this.maxhp = 10;
        _this.player = null;
        _this.VolumnValue = null;
        _this.Level = 1;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        var pauseBtnNode = cc.find("Canvas/Main Camera/UI/Pause");
        if (pauseBtnNode) {
            var PauseButton = new cc.Component.EventHandler();
            PauseButton.target = this.node;
            PauseButton.component = "GameManager";
            PauseButton.handler = "PauseGame";
            pauseBtnNode.getComponent(cc.Button).clickEvents.push(PauseButton);
        }
        else {
            cc.error("Pause 按鈕節點找不到，請檢查 Canvas/Main Camera/UI/Pause 是否存在！");
        }
        // Initialize the level label
        this.LevelLabel = cc.find("Canvas/Main Camera/UI/Level").getComponent(cc.Label);
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level label not found");
        this.player = cc.find("Canvas/MapManager/Actors/Player");
        //assign blank space for next level
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.log("Is Firebase initialized?", window._firebaseInited);
        /*const firebaseConfig = {
            apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
            authDomain: "rune-raids.firebaseapp.com",
            projectId: "rune-raids",
            storageBucket: "rune-raids.firebasestorage.app",
            messagingSenderId: "530514360843",
            appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
            measurementId: "G-B1C5FG1YSN"
        };*/
        if (!window._firebaseInited) {
            firebase.initializeApp(firebaseConfig);
            window._firebaseInited = true;
            cc.log("✅ Firebase initialized in GameManager.ts");
        }
        else {
            cc.log("ℹ️ Firebase already initialized");
        }
    };
    GameManager.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.space) {
            this.GoNextLevel();
        }
    };
    GameManager.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            this.VolumnValue = Number(savedVolumn);
        else
            this.VolumnValue = 0.5;
        cc.audioEngine.setEffectsVolume(this.VolumnValue);
        cc.audioEngine.setMusicVolume(this.VolumnValue);
        this.playMusic();
        this.startGame();
    };
    GameManager.prototype.PauseGame = function () {
        var _this = this;
        console.log("Pause prefab load");
        //Pausesetting is a prefab
        cc.resources.load("prefabs/PauseSetting", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load PauseSetting prefab:", err);
                return;
            }
            var PauseNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            Canvas.addChild(PauseNode);
            PauseNode.name = "PauseSetting";
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                PauseNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                PauseNode.setPosition(0, 0);
            }
            PauseNode.scaleX = 1;
            PauseNode.scaleY = 1;
            //Pause the game，停止鍵盤事件
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, _this.onKeyDown, _this);
            cc.director.getScheduler().setTimeScale(0);
            cc.director.getPhysicsManager().enabled = false;
            var Canvas = cc.find("Canvas");
            _this.PauseAllAnimation(Canvas);
            _this.initPause();
        });
        console.log("Pause prefab load...");
    };
    GameManager.prototype.initPause = function () {
        //Resume button
        var ResumeButton = new cc.Component.EventHandler();
        ResumeButton.target = this.node;
        ResumeButton.component = "GameManager";
        ResumeButton.handler = "ResumeGame";
        cc.find("Canvas/PauseSetting/Resume").getComponent(cc.Button).clickEvents.push(ResumeButton);
        //Volumn slider
        var VolumnSlider = cc.find("Canvas/PauseSetting/Volumn/VolumnSlider").getComponent(cc.Slider);
        var savedVolumn = cc.sys.localStorage.getItem("VolumnValue");
        if (savedVolumn !== null)
            VolumnSlider.progress = Number(savedVolumn);
        else
            VolumnSlider.progress = 0.5;
        VolumnSlider.node.on('slide', this.onVolumnChange, this);
        //Restart button
        var RestartButton = new cc.Component.EventHandler();
        RestartButton.target = this.node;
        RestartButton.component = "GameManager";
        RestartButton.handler = "RestartGame";
        cc.find("Canvas/PauseSetting/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
        //
        var DescButton = new cc.Component.EventHandler();
        DescButton.target = this.node;
        DescButton.component = "GameManager";
        DescButton.handler = "showDesc";
        cc.find("Canvas/PauseSetting/How").getComponent(cc.Button).clickEvents.push(DescButton);
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
        var ExitDescButton = new cc.Component.EventHandler();
        ExitDescButton.target = this.node;
        ExitDescButton.component = "GameManager";
        ExitDescButton.handler = "HideDesc";
        cc.find("Canvas/PauseSetting/Description/Exit").getComponent(cc.Button).clickEvents.push(ExitDescButton);
    };
    GameManager.prototype.HideDesc = function () {
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = false;
    };
    GameManager.prototype.showDesc = function () {
        var Desc = cc.find("Canvas/PauseSetting/Description");
        Desc.active = true;
    };
    GameManager.prototype.RestartGame = function () {
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        var Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);
        cc.director.loadScene("Loading", function () {
            var loadingManager = cc.find("Canvas/LoadingManager").getComponent("LoadingManager");
            loadingManager.startLoading("menu");
        });
        //Destroy Pausetting node if it exists
        //let PauseSettingNode = cc.find("Canvas/Pausetting");
        //if (PauseSettingNode) PauseSettingNode.destroy();
        //else cc.error("PauseSetting node not found");
    };
    GameManager.prototype.ResumeGame = function () {
        var PauseSettingNode = cc.find("Canvas/PauseSetting");
        if (PauseSettingNode)
            PauseSettingNode.destroy();
        else
            cc.error("PauseSetting node not found");
        //Resume the game
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.director.getScheduler().setTimeScale(1);
        cc.director.getPhysicsManager().enabled = true;
        var Canvas = cc.find("Canvas");
        this.ResumeAllAnimation(Canvas);
    };
    GameManager.prototype.onVolumnChange = function (slider) {
        cc.audioEngine.setMusicVolume(slider.progress); // 0~1
        cc.audioEngine.setEffectsVolume(slider.progress);
        this.VolumnValue = slider.progress;
        cc.sys.localStorage.setItem("VolumnValue", this.VolumnValue.toString());
    };
    GameManager.prototype.PauseAllAnimation = function (node) {
        var anims = node.getComponentsInChildren(cc.Animation);
        for (var _i = 0, anims_1 = anims; _i < anims_1.length; _i++) {
            var anim = anims_1[_i];
            if (anim)
                anim.pause();
            else
                cc.error("Animation component not found on node:", node.name);
        }
        var children = node.children;
        for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
            var child = children_1[_a];
            this.PauseAllAnimation(child);
        }
    };
    GameManager.prototype.ResumeAllAnimation = function (node) {
        var anims = node.getComponentsInChildren(cc.Animation);
        for (var _i = 0, anims_2 = anims; _i < anims_2.length; _i++) {
            var anim = anims_2[_i];
            if (anim)
                anim.resume();
            else
                cc.error("Animation component not found on node:", node.name);
        }
        var children = node.children;
        for (var _a = 0, children_2 = children; _a < children_2.length; _a++) {
            var child = children_2[_a];
            this.ResumeAllAnimation(child);
        }
    };
    GameManager.prototype.playMusic = function () {
        if (this.bgm)
            cc.audioEngine.playMusic(this.bgm, true);
        else
            cc.error("BGM not assigned!");
    };
    GameManager.prototype.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    GameManager.prototype.resumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    GameManager.prototype.startGame = function () {
        //Initialize the game state
        this.Level = 1;
        if (this.LevelLabel)
            this.LevelLabel.string = "Level: " + this.Level;
        else
            cc.error("Level Label not found");
        //set player position
        this.player.getComponent("Player").SetPlayer(this.Level);
        //set Map
        var GenMap = cc.find("GameManager").getComponent("MapGenerator");
        GenMap.GeneratorMap();
        //set monster
        var MonsterMgr = cc.find("Canvas/MapManager/MonsterManager").getComponent("MonsterManager");
        MonsterMgr.SetMonster(this.Level);
    };
    GameManager.prototype.GoNextLevel = function () {
        var _a, _b, _c, _d;
        this.Level++;
        this.saveProgress(this.Level);
        if (this.LevelLabel) {
            this.LevelLabel.string = "Level: " + this.Level;
        }
        else {
            cc.error("Level label not found");
        }
        // regenerate the map
        var mapGen = (_a = cc.find("GameManager")) === null || _a === void 0 ? void 0 : _a.getComponent("MapGenerator");
        if (mapGen) {
            mapGen.regenerateMap(this.Level);
        }
        else {
            cc.error("MapGenerator component not found");
        }
        // reset player position
        var playerComp = (_b = this.player) === null || _b === void 0 ? void 0 : _b.getComponent("Player");
        if (playerComp) {
            playerComp.SetPlayer(this.Level);
        }
        else {
            cc.error("Player component not found");
        }
        // reset monster
        var monsterMgr = (_c = cc.find("Canvas/MapManager/MonsterManager")) === null || _c === void 0 ? void 0 : _c.getComponent("MonsterManager");
        if (monsterMgr) {
            monsterMgr.SetMonster(this.Level);
        }
        // adjust camera zoom and UI scaling
        var camera = (_d = cc.find("Canvas/Main Camera")) === null || _d === void 0 ? void 0 : _d.getComponent(cc.Camera);
        if (camera) {
            camera.zoomRatio *= 0.99;
            var UI = cc.find("Canvas/Main Camera/UI");
            if (UI) {
                UI.setPosition(0, 0);
                UI.scaleX = 1 / camera.zoomRatio;
                UI.scaleY = 1 / camera.zoomRatio;
            }
            else {
                cc.log("UI not found");
            }
        }
    };
    GameManager.prototype.EndGame = function () {
        var _this = this;
        cc.resources.load("prefabs/GameOver", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load GameOver prefab:", err);
                return;
            }
            var GameOverNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            Canvas.addChild(GameOverNode, 1, 'GameOver');
            //視窗正中間
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                GameOverNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                GameOverNode.setPosition(0, 0);
            }
            var RestartButton = new cc.Component.EventHandler();
            RestartButton.target = _this.node;
            RestartButton.component = "GameManager";
            RestartButton.handler = "RestartGame";
            cc.find("Canvas/GameOver/Restart").getComponent(cc.Button).clickEvents.push(RestartButton);
            var end = cc.find("Canvas/GameOver/player").getComponent(cc.Animation);
            //game over animation
            _this.scheduleOnce(function () {
                end.play("gameover");
            });
        });
    };
    GameManager.prototype.saveProgress = function (level) {
        cc.log("Saving progress for level:", level);
        if (!window._firebaseInited) {
            cc.warn("Firebase not initialized.");
            return;
        }
        var user = firebase.auth().currentUser;
        if (!user) {
            cc.warn("User not logged in.");
            return;
        }
        var userRef = firebase.database().ref("leaderboard/" + user.uid);
        userRef.once("value").then(function (snapshot) {
            var existing = snapshot.val();
            var previousLevel = (existing === null || existing === void 0 ? void 0 : existing.highestLevel) || 0;
            if (level > previousLevel) {
                userRef.set({
                    username: user.displayName || "Unknown",
                    highestLevel: level,
                    lastUpdate: firebase.database.ServerValue.TIMESTAMP
                }).then(function () {
                    cc.log("\u2705 Updated Realtime DB for " + (user.displayName || "Unknown") + ": Level " + level);
                }).catch(function (err) {
                    cc.error("❌ Failed to write to Realtime DB:", err);
                });
            }
            else {
                cc.log("No update needed — previous level is higher or equal.");
            }
        }).catch(function (err) {
            cc.error("❌ Failed to read from Realtime DB:", err);
        });
    };
    GameManager.prototype.loadLeaderboard = function () {
        var dbRef = firebase.database().ref("leaderboard");
        dbRef.once("value")
            .then(function (snapshot) {
            var data = snapshot.val();
            if (!data) {
                cc.log("Leaderboard is empty.");
                return;
            }
            var sorted = Object.values(data)
                .sort(function (a, b) { return b.highestLevel - a.highestLevel; })
                .slice(0, 10);
            sorted.forEach(function (entry, index) {
                cc.log("#" + (index + 1) + " " + entry.username + ": Level " + entry.highestLevel);
            });
        })
            .catch(function (err) {
            cc.error("❌ Failed to load leaderboard from Realtime DB:", err);
        });
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "LevelLabel", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFXNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFzWEM7UUFwWFUsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBNFc3QixDQUFDO0lBMVdHLDRCQUFNLEdBQU47UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUNuRTtRQUNELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFB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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBMb2FkaW5nTWFuYWdlciBmcm9tIFwiLi9NZW51L0xvYWRpbmdNYW5hZ2VyXCI7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuLy9mb3IgRmlyZWJhc2UgaW5pdGlhbGl6YXRpb25cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgX2ZpcmViYXNlSW5pdGVkPzogYm9vbGVhbjtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwdWJsaWMgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhocDogbnVtYmVyID0gMTA7XHJcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWUgOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIExldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGxldCBwYXVzZUJ0bk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1BhdXNlXCIpOyBcclxuICAgICAgICBpZiAocGF1c2VCdG5Ob2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBQYXVzZUJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIFBhdXNlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgUGF1c2VCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgICAgICBQYXVzZUJ1dHRvbi5oYW5kbGVyID0gXCJQYXVzZUdhbWVcIjtcclxuICAgICAgICAgICAgcGF1c2VCdG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUGF1c2VCdXR0b24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGF1c2Ug5oyJ6YiV56+A6bue5om+5LiN5Yiw77yM6KuL5qqi5p+lIENhbnZhcy9NYWluIENhbWVyYS9VSS9QYXVzZSDmmK/lkKblrZjlnKjvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGxldmVsIGxhYmVsXHJcbiAgICAgICAgdGhpcy5MZXZlbExhYmVsID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9MZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLkxldmVsTGFiZWwpIHRoaXMuTGV2ZWxMYWJlbC5zdHJpbmcgPSBcIkxldmVsOiBcIiArIHRoaXMuTGV2ZWw7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKTtcclxuXHJcbiAgICAgICAgLy9hc3NpZ24gYmxhbmsgc3BhY2UgZm9yIG5leHQgbGV2ZWxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XHJcblxyXG4gICAgICAgIC8qY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lERlc0LWVtV2RJMWdoZ1pXV0dwMXdxb1d2QXZUd0FxclFcIixcclxuICAgICAgICAgICAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gICAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VzdG9yYWdlLmFwcFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MzA1MTQzNjA4NDNcIixcclxuICAgICAgICAgICAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICAgICAgICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUIxQzVGRzFZU05cIlxyXG4gICAgICAgIH07Ki9cclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9nKFwi4pyFIEZpcmViYXNlIGluaXRpYWxpemVkIGluIEdhbWVNYW5hZ2VyLnRzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuKEue+4jyBGaXJlYmFzZSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5Hb05leHRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uIT09bnVsbCkgdGhpcy5Wb2x1bW5WYWx1ZSA9IE51bWJlcihzYXZlZFZvbHVtbik7XHJcbiAgICAgICAgZWxzZSB0aGlzLlZvbHVtblZhbHVlID0gMC41O1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBQYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXVzZSBwcmVmYWIgbG9hZFwiKTtcclxuICAgICAgICAvL1BhdXNlc2V0dGluZyBpcyBhIHByZWZhYlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9QYXVzZVNldHRpbmdcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBQYXVzZVNldHRpbmcgcHJlZmFiOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBQYXVzZU5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBjb25zdCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICBDYW52YXMuYWRkQ2hpbGQoUGF1c2VOb2RlKTtcclxuICAgICAgICAgICAgUGF1c2VOb2RlLm5hbWUgPSBcIlBhdXNlU2V0dGluZ1wiO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbWVyYU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2FtZXJhTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdvcmxkUG9zID0gY2FtZXJhTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IENhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgICAgICBQYXVzZU5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaJvuS4jeWIsCBNYWluIENhbWVyYSwg5L2/55So6aCQ6Kit5L2N572uICgwLCAwKVwiKTtcclxuICAgICAgICAgICAgICAgIFBhdXNlTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIFBhdXNlTm9kZS5zY2FsZVkgPSAxO1xyXG4gICAgICAgICAgICAvL1BhdXNlIHRoZSBnYW1l77yM5YGc5q2i6Y2155uk5LqL5Lu2XHJcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDApO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuUGF1c2VBbGxBbmltYXRpb24oQ2FudmFzKTsgXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFBhdXNlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlIHByZWZhYiBsb2FkLi4uXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGluaXRQYXVzZSgpIHtcclxuICAgICAgICAvL1Jlc3VtZSBidXR0b25cclxuICAgICAgICBsZXQgUmVzdW1lQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN1bWVCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFJlc3VtZUJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgUmVzdW1lQnV0dG9uLmhhbmRsZXIgPSBcIlJlc3VtZUdhbWVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9SZXN1bWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN1bWVCdXR0b24pO1xyXG4gICAgICAgIC8vVm9sdW1uIHNsaWRlclxyXG4gICAgICAgIGxldCBWb2x1bW5TbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Wb2x1bW4vVm9sdW1uU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xyXG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiAhPT0gbnVsbCkgVm9sdW1uU2xpZGVyLnByb2dyZXNzPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xyXG4gICAgICAgIGVsc2UgVm9sdW1uU2xpZGVyLnByb2dyZXNzID0gMC41O1xyXG4gICAgICAgIFZvbHVtblNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgIC8vUmVzdGFydCBidXR0b25cclxuICAgICAgICBsZXQgUmVzdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJSZXN0YXJ0R2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL1Jlc3RhcnRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN0YXJ0QnV0dG9uKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBEZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBEZXNjQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBEZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBEZXNjQnV0dG9uLmhhbmRsZXIgPSBcInNob3dEZXNjXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvSG93XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRGVzY0J1dHRvbik7XHJcbiAgICAgICAgbGV0IERlc2MgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9EZXNjcmlwdGlvblwiKTtcclxuICAgICAgICBEZXNjLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBFeGl0RGVzY0J1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgRXhpdERlc2NCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBFeGl0RGVzY0J1dHRvbi5oYW5kbGVyID0gXCJIaWRlRGVzY1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uL0V4aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChFeGl0RGVzY0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICBIaWRlRGVzYygpIHtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzaG93RGVzYygpIHtcclxuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIERlc2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFJlc3RhcnRHYW1lKCkgey8vUmVzdGFydCB0aGUgZ2FtZSA9PiBiYWNrIHRvIG1lbnVcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUoMSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLlJlc3VtZUFsbEFuaW1hdGlvbihDYW52YXMpOyAgICBcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwibWVudVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0Rlc3Ryb3kgUGF1c2V0dGluZyBub2RlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIC8vbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNldHRpbmdcIik7XHJcbiAgICAgICAgLy9pZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy9lbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIFJlc3VtZUdhbWUoKSB7XHJcbiAgICAgICAgbGV0IFBhdXNlU2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZ1wiKTtcclxuICAgICAgICBpZiAoUGF1c2VTZXR0aW5nTm9kZSkgUGF1c2VTZXR0aW5nTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIlBhdXNlU2V0dGluZyBub2RlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAvL1Jlc3VtZSB0aGUgZ2FtZVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBDYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7IFxyXG4gICAgfVxyXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBQYXVzZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucGF1c2UoKTtcclxuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlBhdXNlQWxsQW5pbWF0aW9uKGNoaWxkKTtcclxuICAgIH1cclxuICAgIFJlc3VtZUFsbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW0gb2YgYW5pbXMpIHtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIGFuaW0ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGVsc2UgIGNjLmVycm9yKFwiQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgb24gbm9kZTpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlNdXNpYygpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkJHTSBub3QgYXNzaWduZWQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZU11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgLy9Jbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXHJcbiAgICAgICAgdGhpcy5MZXZlbCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBMYWJlbCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgLy9zZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLlNldFBsYXllcih0aGlzLkxldmVsKTtcclxuICAgICAgICAvL3NldCBNYXBcclxuICAgICAgICBsZXQgR2VuTWFwID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1hcEdlbmVyYXRvclwiKTtcclxuICAgICAgICBHZW5NYXAuR2VuZXJhdG9yTWFwKCk7XHJcbiAgICAgICAgLy9zZXQgbW9uc3RlclxyXG4gICAgICAgIGxldCBNb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIk1vbnN0ZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIE1vbnN0ZXJNZ3IuU2V0TW9uc3Rlcih0aGlzLkxldmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdvTmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMuTGV2ZWwrKztcclxuICAgICAgICB0aGlzLnNhdmVQcm9ncmVzcyh0aGlzLkxldmVsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLkxldmVsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTGV2ZWwgbGFiZWwgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVnZW5lcmF0ZSB0aGUgbWFwXHJcbiAgICAgICAgY29uc3QgbWFwR2VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XHJcbiAgICAgICAgaWYgKG1hcEdlbikge1xyXG4gICAgICAgICAgICBtYXBHZW4ucmVnZW5lcmF0ZU1hcCh0aGlzLkxldmVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIk1hcEdlbmVyYXRvciBjb21wb25lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyPy5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIik7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcclxuICAgICAgICAgICAgcGxheWVyQ29tcC5TZXRQbGF5ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJQbGF5ZXIgY29tcG9uZW50IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vbnN0ZXJcclxuICAgICAgICBjb25zdCBtb25zdGVyTWdyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcclxuICAgICAgICBpZiAobW9uc3Rlck1ncikge1xyXG4gICAgICAgICAgICBtb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGp1c3QgY2FtZXJhIHpvb20gYW5kIFVJIHNjYWxpbmdcclxuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpPy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBpZiAoY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYS56b29tUmF0aW8gKj0gMC45OTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFVJID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKTtcclxuICAgICAgICAgICAgaWYgKFVJKSB7XHJcbiAgICAgICAgICAgICAgICBVSS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgIFVJLnNjYWxlWCA9IDEgLyBjYW1lcmEuem9vbVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgVUkuc2NhbGVZID0gMSAvIGNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJVSSBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRW5kR2FtZSgpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR2FtZU92ZXJcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBHYW1lT3ZlciBwcmVmYWI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgR2FtZU92ZXJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgQ2FudmFzLmFkZENoaWxkKEdhbWVPdmVyTm9kZSwxLCdHYW1lT3ZlcicpO1xyXG4gICAgICAgICAgICAvL+imlueql+ato+S4remWk1xyXG4gICAgICAgICAgICBsZXQgY2FtZXJhTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW1lcmFOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gQ2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgICAgIEdhbWVPdmVyTm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5om+5LiN5YiwIE1haW4gQ2FtZXJhLCDkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xyXG4gICAgICAgICAgICAgICAgR2FtZU92ZXJOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBSZXN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBSZXN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcIlJlc3RhcnRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9HYW1lT3Zlci9SZXN0YXJ0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUmVzdGFydEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGxldCBlbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVPdmVyL3BsYXllclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAvL2dhbWUgb3ZlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+eyBcclxuICAgICAgICAgICAgZW5kLnBsYXkoXCJnYW1lb3ZlclwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2F2ZVByb2dyZXNzKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICBjYy5sb2coXCJTYXZpbmcgcHJvZ3Jlc3MgZm9yIGxldmVsOlwiLCBsZXZlbCk7XHJcblxyXG4gICAgICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIlVzZXIgbm90IGxvZ2dlZCBpbi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkL1wiICsgdXNlci51aWQpO1xyXG5cclxuICAgICAgICB1c2VyUmVmLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTGV2ZWwgPSBleGlzdGluZz8uaGlnaGVzdExldmVsIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPiBwcmV2aW91c0xldmVsKSB7XHJcbiAgICAgICAgICAgIHVzZXJSZWYuc2V0KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgaGlnaGVzdExldmVsOiBsZXZlbCxcclxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGU6IGZpcmViYXNlLmRhdGFiYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhg4pyFIFVwZGF0ZWQgUmVhbHRpbWUgREIgZm9yICR7dXNlci5kaXNwbGF5TmFtZSB8fCBcIlVua25vd25cIn06IExldmVsICR7bGV2ZWx9YCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIHdyaXRlIHRvIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiTm8gdXBkYXRlIG5lZWRlZCDigJQgcHJldmlvdXMgbGV2ZWwgaXMgaGlnaGVyIG9yIGVxdWFsLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCBGYWlsZWQgdG8gcmVhZCBmcm9tIFJlYWx0aW1lIERCOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkTGVhZGVyYm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgZGJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkXCIpO1xyXG4gICAgICAgIGRiUmVmLm9uY2UoXCJ2YWx1ZVwiKVxyXG4gICAgICAgICAgICAudGhlbigoc25hcHNob3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiTGVhZGVyYm9hcmQgaXMgZW1wdHkuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBPYmplY3QudmFsdWVzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIuaGlnaGVzdExldmVsIC0gYS5oaWdoZXN0TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKGVudHJ5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgIyR7aW5kZXggKyAxfSAke2VudHJ5LnVzZXJuYW1lfTogTGV2ZWwgJHtlbnRyeS5oaWdoZXN0TGV2ZWx9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIEZhaWxlZCB0byBsb2FkIGxlYWRlcmJvYXJkIGZyb20gUmVhbHRpbWUgREI6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
