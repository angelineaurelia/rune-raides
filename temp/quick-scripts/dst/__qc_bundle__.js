
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvRmlyZWJhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQWtCc0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvc2NyaXB0cy9GaXJlYmFzZU1hbmFnZXIudHNcbi8qaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lERlc0LWVtV2RJMWdoZ1pXV0dwMXdxb1d2QXZUd0FxclFcIixcbiAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3J1bmUtcmFpZHMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXG4gIHByb2plY3RJZDogXCJydW5lLXJhaWRzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxuICBhcHBJZDogXCIxOjUzMDUxNDM2MDg0Mzp3ZWI6MWNkZGE5ZDcyYmI0YjUyOTMyMjUwZVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTsqL1xuXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0lJbnB1dENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztHQUVHO0FBQ0gsSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ25CLHFEQUFxRDtJQUNyRCw2Q0FBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLG1EQUFPLENBQUE7SUFDUCwrQkFBK0I7SUFDL0IsNkNBQUksQ0FBQTtJQUNKLHlDQUF5QztJQUN6QyxxREFBUSxDQUFBO0FBQ1osQ0FBQyxFQVRXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBU3RCO0FBZ0JELFNBQWdCLDJCQUEyQixDQUFDLEdBQVE7SUFDaEQsT0FBTyxHQUFHO1FBQ1YsQ0FBQyxHQUFHLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQztRQUNsQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO1FBQ2hDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQztRQUM1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO1FBQzNCLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7UUFDM0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFURCxrRUFTQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBUaGUgc3RhdGUgb2YgYSBidXR0b24tbGlrZSB2YXJpYWJsZSBkdXJpbmcgYSBzaW5nbGUgZnJhbWUuXG4gKi9cbmV4cG9ydCBlbnVtIEJ1dHRvblN0YXRle1xuICAgIC8qKiBUaGUgYnV0dG9uIGlzIGluIGl0cyBuYXR1cmFsIChpbmFjdGl2ZSkgc3RhdGUuICovXG4gICAgUmVzdCxcbiAgICAvKiogVGhlIGJ1dHRvbiBpcyBwcmVzc2VkIGRvd24gdGhpcyBmcmFtZS4gKi9cbiAgICBQcmVzc2VkLFxuICAgIC8qKiBUaGUgYnV0dG9uIGlzIGhlbGQgZG93bi4gKi9cbiAgICBIZWxkLFxuICAgIC8qKiBUaGUgYnV0dG9uIGlzIHJlbGVhc2VkIHRoaXMgZnJhbWUuICovXG4gICAgUmVsZWFzZWQsXG59XG5leHBvcnQgdHlwZSBBeGlzMUQgPSBudW1iZXI7XG4vKipcbiAqIEludGVyZmFjZSBmb3Igb2JqZWN0cyB0aGF0IGNhbiBzdXBwb3J0IGNvbnRyb2wgaW5wdXRzLlxuICogWW91IGNhbiBjb25zaWRlciB0aGlzIGFzIGFuIGFic3RyYWN0aW9uIG92ZXIgZGlmZmVyZW50IGtpbmRzIG9mIGlucHV0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRDb250cm9scyB7XG4gICAgcmVhZG9ubHkgaG9yaXpvbnRhbEF4aXM6IEF4aXMxRDtcbiAgICByZWFkb25seSB2ZXJ0aWNhbEF4aXM6IEF4aXMxRDtcbiAgICByZWFkb25seSBhdHRhY2s6IEJ1dHRvblN0YXRlO1xuICAgIHJlYWRvbmx5IGdldGh1cnQ6IEJ1dHRvblN0YXRlO1xuICAgIHJlYWRvbmx5IGludGVyYWN0OiBCdXR0b25TdGF0ZTtcbiAgICByZWFkb25seSBhdHRhY2syOiBCdXR0b25TdGF0ZTtcbiAgICByZWFkb25seSBhdHRhY2szOiBCdXR0b25TdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ltcGxlbWVudGVkSW5wdXRDb250cm9scyhvYmo6IGFueSk6IG9iaiBpcyBJSW5wdXRDb250cm9sc3tcbiAgICByZXR1cm4gb2JqICYmIFxuICAgIChvYmouaG9yaXpvbnRhbEF4aXMgIT09IHVuZGVmaW5lZCkgJiZcbiAgICAob2JqLnZlcnRpY2FsQXhpcyAhPT0gdW5kZWZpbmVkKSAmJlxuICAgIChvYmouYXR0YWNrICE9PSB1bmRlZmluZWQpICYmXG4gICAgKG9iai5pbnRlcmFjdCAhPT0gdW5kZWZpbmVkKSAmJlxuICAgIChvYmouZ2V0aHVydCAhPT0gdW5kZWZpbmVkKSAmJlxuICAgIChvYmouYXR0YWNrMiAhPT0gdW5kZWZpbmVkKSYmXG4gICAgKG9iai5hdHRhY2szICE9PSB1bmRlZmluZWQpOyBcbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL25hdmlnYXRpb24vV2F5cG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5Q0M7UUF0Q1ksdUJBQWlCLEdBQWUsRUFBRSxDQUFDO1FBQ25DLGVBQVMsR0FBYSxFQUFFLENBQUM7O1FBb0NsQyxpQkFBaUI7SUFDckIsQ0FBQztpQkF6Q29CLFFBQVE7SUFLekI7Ozs7T0FJRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLGFBQXVCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLGlDQUFjLEdBQXJCLFVBQXNCLFNBQWtCO1FBQ3BDLCtDQUErQztRQUMvQyxrREFBa0Q7UUFDbEQsbUNBQW1DO1FBQ25DLE9BQU8sU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sNEJBQVMsR0FBaEIsVUFBaUIsYUFBdUI7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksS0FBcUIsVUFBc0IsRUFBdEIsS0FBQSxJQUFJLENBQUMsaUJBQWlCLEVBQXRCLGNBQXNCLEVBQXRCLElBQXNCLEVBQUU7WUFBeEMsSUFBSSxRQUFRLFNBQUE7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7O0lBbkNEO1FBREMsUUFBUSxDQUFDLFVBQVEsQ0FBQzt1REFDeUI7SUFIM0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlDNUI7SUFBRCxlQUFDO0NBekNELEFBeUNDLENBekNxQyxFQUFFLENBQUMsU0FBUyxHQXlDakQ7a0JBekNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXlwb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoV2F5cG9pbnQpXG4gICAgcmVhZG9ubHkgYWRqYWNlbnRXYXlwb2ludHM6IFdheXBvaW50W10gPSBbXTtcbiAgICByZWFkb25seSBkaXN0YW5jZXM6IG51bWJlcltdID0gW107XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgdG8gYSBnaXZlbiB3YXlwb2ludC5cbiAgICAgKiBAcGFyYW0gb3RoZXJXYXlwb2ludCBUaGUgd2F5cG9pbnQgdG8gY29tcHV0ZSB0aGUgZGlzdGFuY2UgdG8uXG4gICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIHRvIHRoYXQgd2F5cG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIGRpc3RhbmNlVG8ob3RoZXJXYXlwb2ludDogV2F5cG9pbnQpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlVG9Ob2RlKG90aGVyV2F5cG9pbnQubm9kZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3RhbmNlVG9Ob2RlKG90aGVyTm9kZTogY2MuTm9kZSk6IG51bWJlcntcbiAgICAgICAgLy8gQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yIChhIC0gYilcbiAgICAgICAgLy8gV2hlcmUgXCJhXCIgaXMgdGhlIG90aGVyIHdheXBvaW50J3MgcG9zaXRpb24sIGFuZFxuICAgICAgICAvLyBcImJcIiBpcyB0aGlzIHdheXBvaW50J3MgcG9zaXRpb24uXG4gICAgICAgIHJldHVybiBvdGhlck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTylcbiAgICAgICAgICAgIC5zdWIodGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pKVxuICAgICAgICAgICAgLm1hZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFZGdlVG8ob3RoZXJXYXlwb2ludDogV2F5cG9pbnQpOiB2b2lke1xuICAgICAgICB0aGlzLmFkamFjZW50V2F5cG9pbnRzLnB1c2gob3RoZXJXYXlwb2ludCk7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VzLnB1c2godGhpcy5kaXN0YW5jZVRvKG90aGVyV2F5cG9pbnQpKTtcbiAgICB9XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZm9yIChsZXQgbmVpZ2hib3Igb2YgdGhpcy5hZGphY2VudFdheXBvaW50cykge1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZXMucHVzaCh0aGlzLmRpc3RhbmNlVG8obmVpZ2hib3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL3N0cmF0ZWdpZXMvQ293YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpREFBcUM7QUFFckM7SUFBNEIsMEJBQVc7SUFHbkM7Ozs7T0FJRztJQUNILGdCQUFZLE1BQWEsRUFBRSxZQUFxQjtRQUFoRCxZQUNJLGlCQUFPLFNBR1Y7UUFYTyxZQUFNLEdBQVUsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBWTdCLGlCQUFXLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFKeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7O0lBQ3JDLENBQUM7SUFJRCxzQkFBVyxrQ0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pGLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQWtCO2FBQTdCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDMUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxnQ0FBWTthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywwQkFBTTthQUFqQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFRO2FBQW5CO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ00sc0JBQUssR0FBWjtJQUVBLENBQUM7SUFDTSx1QkFBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0MsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQTNDQSxBQTJDQyxDQTNDMkIsa0JBQUUsQ0FBQyxRQUFRLEdBMkN0QztBQTNDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblN0YXRlIH0gZnJvbSBcIi4uLy4uL2lucHV0L0lJbnB1dENvbnRyb2xzXCI7XG5pbXBvcnQgQWdlbnQgZnJvbSBcIi4uL0FnZW50XCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL0FnZW50U3RyYXRlZ3lcIjtcblxuZXhwb3J0IGNsYXNzIENvd2FyZCBleHRlbmRzIEFJLlN0cmF0ZWd5e1xuICAgIHByaXZhdGUgX2FnZW50OiBBZ2VudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcnVuQXdheUZyb206IGNjLk5vZGUgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBfYWdlbnQgVGhlIGFnZW50IHVzaW5nIHRoZSBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0gX3J1bkF3YXlGcm9tIFRoZSBub2RlIGZvciB0aGUgYWdlbnQgdG8gcnVuIGF3YXkgZnJvbS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfYWdlbnQ6IEFnZW50LCBfcnVuQXdheUZyb206IGNjLk5vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYWdlbnQgPSBfYWdlbnQ7XG4gICAgICAgIHRoaXMuX3J1bkF3YXlGcm9tID0gX3J1bkF3YXlGcm9tO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vdmVBeGlzMkQ6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG5cbiAgICBwdWJsaWMgZ2V0IGF3YXlGcm9tVGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWdlbnQubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5fcnVuQXdheUZyb20ucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGlzdGFuY2VGcm9tVGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuQXdheUZyb20ucG9zaXRpb24uc3ViKHRoaXMuX2FnZW50Lm5vZGUucG9zaXRpb24pLm1hZygpXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueDtcbiAgICB9XG4gICAgcHVibGljIGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbW92ZUF4aXMyRCA9IHRoaXMuYXdheUZyb21UYXJnZXQ7XG4gICAgfVxuXG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbWVyYS9DYW1lcmFUcmFuc3Bvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBZ0RDO1FBN0NHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixzQkFBc0I7UUFDdEIsVUFBSSxHQUFXLENBQUMsVUFBVSxDQUFDO1FBQzNCLHNCQUFzQjtRQUN0QixVQUFJLEdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDM0Isc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxVQUFVLENBQUM7UUFDMUIsc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxVQUFVLENBQUM7UUFDMUIsc0JBQXNCO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsc0JBQXNCO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBNkJ4QixDQUFDO0lBM0JHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpRUFBaUU7UUFDakUsbURBQW1EO1FBQ25ELElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RCxJQUFJLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUksSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pLLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNuRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN0RixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3FEQUNHO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cURBQ0c7SUFQUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWdEcEM7SUFBRCx1QkFBQztDQWhERCxBQWdEQyxDQWhENkMsRUFBRSxDQUFDLFNBQVMsR0FnRHpEO2tCQWhEb0IsZ0JBQWdCO0FBa0RyQyxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYVRyYW5zcG9zZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZm9sbG93VGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBmb2xsb3dYOiBib29sZWFuID0gdHJ1ZTtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBmb2xsb3dZOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbWluWDogbnVtYmVyID0gLTIxNDc0ODM2NDc7XG4gICAgLy8gQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1pblk6IG51bWJlciA9IC0yMTQ3NDgzNjQ3O1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtYXhYOiBudW1iZXIgPSAyMTQ3NDgzNjQ3O1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtYXhZOiBudW1iZXIgPSAyMTQ3NDgzNjQ3O1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAwO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBvZmZzZXRZOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIE5vdCB1c2luZyBjb252ZXJ0VG9Xb3JsZFNwYWNlQVIgKyBjb252ZXJ0VG9Ob2RlU3BhY2VBUiBiZWNhdXNlXG4gICAgICAgIC8vIHRoZXkgYXJlIGluYWNjdXJhdGUgYW5kIGNhdXNlcyBjYW1lcmEgaml0dGVyLiA6KFxuICAgICAgICBsZXQgY2FtZXJhTG9jYWxUcmFuc2Zvcm0gPSBjYy5tYXQ0KCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRMb2NhbE1hdHJpeChjYW1lcmFMb2NhbFRyYW5zZm9ybSk7XG4gICAgICAgIGxldCB0YXJnZXRXb3JsZFRyYW5zZm9ybSA9IGNjLm1hdDQoKTtcbiAgICAgICAgdGhpcy5mb2xsb3dUYXJnZXQuZ2V0V29ybGRNYXRyaXgodGFyZ2V0V29ybGRUcmFuc2Zvcm0pO1xuICAgICAgICBsZXQgdGFyZ2V0V29ybGRUcmFuc2xhdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICB0YXJnZXRXb3JsZFRyYW5zZm9ybS5nZXRUcmFuc2xhdGlvbih0YXJnZXRXb3JsZFRyYW5zbGF0aW9uKTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVkID0gY2MudjQodGFyZ2V0V29ybGRUcmFuc2xhdGlvbi54LCB0YXJnZXRXb3JsZFRyYW5zbGF0aW9uLnksIHRhcmdldFdvcmxkVHJhbnNsYXRpb24ueikudHJhbnNmb3JtTWF0NChjYW1lcmFMb2NhbFRyYW5zZm9ybSk7XG4gICAgICAgIGxldCB0YXJnZXRQb3NpdGlvbiA9IGNjLnYyKHRyYW5zZm9ybWVkLngsIHRyYW5zZm9ybWVkLnkpLmFkZChjYy52MigtY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoIC8gMiwgLWNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQgLyAyKSk7XG4gICAgICAgIHRhcmdldFBvc2l0aW9uID0gY2MudjIoXG4gICAgICAgICAgICBjbGFtcCh0aGlzLmZvbGxvd1ggPyB0YXJnZXRQb3NpdGlvbi54IDogdGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubWluWCwgdGhpcy5tYXhYKSxcbiAgICAgICAgICAgIGNsYW1wKHRoaXMuZm9sbG93WSA/IHRhcmdldFBvc2l0aW9uLnkgOiB0aGlzLm5vZGUucG9zaXRpb24ueSwgdGhpcy5taW5ZLCB0aGlzLm1heFkpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xhbXAoeDogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIGlmICh4IDwgYSkgcmV0dXJuIGE7XG4gICAgaWYgKHggPiBiKSByZXR1cm4gYjtcbiAgICByZXR1cm4geDtcbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkcsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBb0NDO1FBN0JHLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQVksSUFBSSxDQUFDOztRQTBCL0IsaUJBQWlCO0lBQ3JCLENBQUM7bUJBcENvQixVQUFVO0lBRzNCLHNCQUFrQixzQkFBUTthQUExQjtZQUNJLE9BQU8sWUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQU9ELHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsWUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQWMsRUFBRSxDQUFDO1FBQzNCLEtBQWtCLFVBQTRCLEVBQTVCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQTVCLGNBQTRCLEVBQTVCLElBQTRCLEVBQUU7WUFBM0MsSUFBSSxLQUFLLFNBQUE7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDVixnRkFBZ0Y7WUFDaEYsd0RBQXdEO1lBQ3hELGFBQWE7WUFDYixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUN4RTtJQUNMLENBQUM7O0lBL0JjLG1CQUFRLEdBQWUsSUFBSSxDQUFDO0lBSzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDYTtJQVRkLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FvQzlCO0lBQUQsaUJBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBb0NuRDtrQkFwQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgWlNvcnRPbkxvYWQgZnJvbSBcIi4vdXRpbGl0aWVzL1pTb3J0T25Mb2FkXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWFwTWFuYWdlciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiBNYXBNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvYmplY3RMYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdG9yTGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgTWFwTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMub2JqZWN0TGF5ZXJOb2RlLmFkZENvbXBvbmVudChaU29ydE9uTG9hZCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBhY3RvcnM6IGNjLk5vZGVbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhY3RvciBvZiB0aGlzLmFjdG9yTGF5ZXJOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBhY3RvcnMucHVzaChhY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgYWN0b3Igb2YgYWN0b3JzKSB7XG4gICAgICAgICAgICAvLyBQb3NzaWJseSBhbiBlbmdpbmUgYnVnOiBBIG5vZGUncyB3b3JsZCBwb3NpdGlvbiBjYW4gY2hhbmdlIGFmdGVyIHJlcGFyZW50aW5nLlxuICAgICAgICAgICAgLy8gVGhhdCdzIHdoeSB3ZSBoYXZlIHRvIGZpeCB0aGUgcG9zaXRpb24gbWFudWFsbHkgaGVyZS5cbiAgICAgICAgICAgIC8vIEJhZCBBUEkgOihcbiAgICAgICAgICAgIGxldCB3b3JsZFBvc0JlZm9yZSA9IGFjdG9yLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgYWN0b3Iuc2V0UGFyZW50KHRoaXMub2JqZWN0TGF5ZXJOb2RlKTtcbiAgICAgICAgICAgIGFjdG9yLnNldFBvc2l0aW9uKGFjdG9yLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvc0JlZm9yZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
        if (event.keyCode === cc.macro.KEY.j ||
            event.keyCode === cc.macro.KEY.k ||
            event.keyCode === cc.macro.KEY.l) {
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
        //set player position based on level randeomly
        var Mx = (level * 4 + 6) * 100;
        var My = (level * 2 + 3) * 100;
        this.node.setPosition(cc.v2(Mx * (Math.random()) * 0.95, My * (Math.random()) * 0.95));
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
            }, 1.2);
            this.gameManager.GoNextLevel();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw2Q0FBd0M7QUFDeEMsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUczQyxrRkFBa0Y7QUFDbEYsa0RBQTZDO0FBQzdDLGdEQUEyQztBQUszQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXVWQztRQXJWRyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLFFBQUUsR0FBVyxFQUFFLENBQUM7UUFHUixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUV6QiwrREFBK0Q7UUFFL0QsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsNEVBQTRFO1FBRTVFLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCLGlEQUFpRDtRQUVqRCx3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFRbkUsK0NBQStDO1FBQ3ZDLFlBQU0sR0FBb0IsTUFBTSxDQUFDO1FBQ2pDLFlBQU0sR0FBWSxLQUFLLENBQUMsQ0FBQyxNQUFNOztJQXlSM0Ms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Q0FBQzsrQ0FDVTtJQVVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxDQUFDOytDQUNoRDtJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxDQUFDO2tEQUNuRDtJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO3NEQUN6QztJQWxEaEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVWMUI7SUFBRCxhQUFDO0NBdlZELEFBdVZDLENBdlZtQyxFQUFFLENBQUMsU0FBUyxHQXVWL0M7a0JBdlZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEJsdWVTbGltZUFJIGZyb20gXCIuL2FpL0JsdWVTbGltZUFJXCI7XG5pbXBvcnQgTGF2YVNsaW1lQUkgZnJvbSBcIi4vYWkvTGF2YVNsaW1lQUlcIjtcblxuXG4vLyDihpMgRml4IHRoZSB0eXBvIGhlcmU6IGl0IHNob3VsZCBiZSBcIkdyZWVuU2xpbWVBSVwiICh0d28g4oCcZeKAnXMpLCBub3QgXCJHcmVlblNsaW1lQUlcIlxuaW1wb3J0IEdyZWVuU2xpbWVBSSBmcm9tIFwiLi9haS9HcmVlblNsaW1lQUlcIjtcbmltcG9ydCBHcmVlbkJvc3NBSSBmcm9tIFwiLi9haS9HcmVlbkJvc3NBSVwiO1xuXG50eXBlIEZhY2luZ0RpcmVjdGlvbiA9IFwidXBcIiB8IFwiZG93blwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5pyA5aSn6KGA6YePXCIgfSlcbiAgICBtYXhIcDogbnVtYmVyID0gNDA7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuaUu+aTiuWKm1wiIH0pXG4gICAgYXR0YWNrUG93ZXI6IG51bWJlciA9IDU7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuWIneWni+ihgOmHj1wiIH0pXG4gICAgaHA6IG51bWJlciA9IDQwO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRyb2xsZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBhdHRhY2sxc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF0dGFjazJzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXR0YWNrM3NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBodXJ0c291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGhlYWxzb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShHYW1lTWFuYWdlcilcbiAgICBnYW1lTWFuYWdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHVibGljIGhvbGRpbmdLZXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyDihpIgTkVXIFBST1BFUlRJRVMg4oaQIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gSG93IGZhciB0aGUgcGxheWVyJ3MgYXR0YWNrIHJlYWNoZXMgKGluIHBpeGVscywgd29ybGQtc3BhY2UpXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCJQbGF5ZXIgYXR0YWNrIHJhbmdlIGluIHBpeGVsc1wiIH0pXG4gICAgYXR0YWNrUmFuZ2U6IG51bWJlciA9IDUwO1xuXG4gICAgLy8gRGVsYXkgKHNlY29uZHMpIGludG8gdGhlIGF0dGFjayBhbmltYXRpb24gd2hlbiBkYW1hZ2UgaXMgYWN0dWFsbHkgYXBwbGllZFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIldoZW4gKHNlYykgdG8gY2hlY2sgaGl0IGluIGF0dGFjayBhbmltXCIgfSlcbiAgICBhdHRhY2tIaXREZWxheTogbnVtYmVyID0gMC4yO1xuXG4gICAgLy8gVG90YWwgbGVuZ3RoIChzZWNvbmRzKSBvZiB0aGUgYXR0YWNrIGFuaW1hdGlvblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIkxlbmd0aCBvZiBQbGF5ZXJBdHRhY2sgYW5pbWF0aW9uXCIgfSlcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDAuNTtcblxuICAgIHByaXZhdGUgaXNBdHRhY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gUHJldmVudCBvdmVybGFwcGluZyBzd2luZ3NcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyDihpAgRU5EIE5FVyBQUk9QUyDihpIgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XG5cbiAgICAvLyBUcmFja3Mgd2hpY2ggZGlyZWN0aW9uIHRoZSBwbGF5ZXIgaXMgZmFjaW5nLlxuICAgIHByaXZhdGUgZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBuZXdcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKTtcbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgQW5pbWF0aW9uIGNvbXBvbmVudCBvbmNlXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikhO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5Ym9hcmQgaW5wdXQgdG8gdHJpZ2dlciBhdHRhY2tcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpe1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL0tleVwiKS5hY3RpdmUgPSB0aGlzLmhvbGRpbmdLZXk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyBDbGVhbiB1cCBsaXN0ZW5lclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhbnkga2V5IGlzIHByZXNzZWRcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICAvLyBVc2UgQywgWiwgb3IgViBhcyB0aGUgYXR0YWNrIGtleSAoeW91IGNhbiBhZGp1c3QgYXMgbmVlZGVkKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuaiB8fFxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmsgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5sXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy50cnlBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gc3RhcnQgYW4gYXR0YWNrIChpZiBub3QgYWxyZWFkeSBpbiBvbmUpXG4gICAgcHJpdmF0ZSB0cnlBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNraW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIDEpIFBsYXkgYXR0YWNrIGFuaW1hdGlvbiAmIHNvdW5kXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiUGxheWVyQXR0YWNrXCIpOyAvLyBlbnN1cmUgeW91IGhhdmUgYSBjbGlwIG5hbWVkIOKAnFBsYXllckF0dGFja+KAnVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMikgU2NoZWR1bGUgdGhlIGFjdHVhbCDigJxoaXTigJ0gbW9tZW50XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuYXBwbHlBdHRhY2tIaXQsIHRoaXMuYXR0YWNrSGl0RGVsYXkpO1xuXG4gICAgICAgIC8vIDMpIE9uY2UgdGhlIGZ1bGwgYW5pbWF0aW9uIGlzIGRvbmUsIGFsbG93IGF0dGFja2luZyBhZ2FpblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5hdHRhY2tBbmltRHVyYXRpb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgZXZlcnkgY2hpbGQgdW5kZXIg4oCcQ2FudmFzL01hcE1hbmFnZXIvTW9uc3Rlck1hbmFnZXLigJ0gZm9yXG4gICAgLy8gZWl0aGVyIGEgQmx1ZVNsaW1lQUkgb3IgYSBHcmVlblNsaW1lQUksIHRoZW4gYXBwbGllcyBkYW1hZ2UgaWYgd2l0aGluIHJhbmdlLlxuICAgIC8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuICAgIHByaXZhdGUgYXBwbHlBdHRhY2tIaXQoKSB7XG4gICAgICAgIC8vIDEpIENvbnZlcnQgdGhlIHBsYXllcidzIHBvc2l0aW9uIHRvIHdvcmxkIHNwYWNlIChWZWMzKSBhbmQgdGhlbiB0byBWZWMyXG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xuXG4gICAgICAgIC8vIDIpIEZpbmQgYWxsIHNsaW1lcyB1bmRlciDigJxDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlcuKAnVxuICAgICAgICBjb25zdCBhY3RvcnNSb290ID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpO1xuICAgICAgICBpZiAoIWFjdG9yc1Jvb3QpIHJldHVybjtcblxuICAgICAgICBhY3RvcnNSb290LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgLy8gM2EpIFRyeSB0byBncmFiIGEgQmx1ZVNsaW1lQUkgY29tcG9uZW50XG4gICAgICAgICAgICBsZXQgc2xpbWVDb21wOiBCbHVlU2xpbWVBSSB8IEdyZWVuU2xpbWVBSSB8IExhdmFTbGltZUFJIHwgR3JlZW5Cb3NzQUkgfCBudWxsID1cbiAgICAgICAgICAgICAgICAoY2hpbGROb2RlLmdldENvbXBvbmVudChCbHVlU2xpbWVBSSkgYXMgQmx1ZVNsaW1lQUkpIHx8IG51bGw7XG5cbiAgICAgICAgICAgIC8vIDNiKSBJZiB0aGVyZSB3YXMgbm8gQmx1ZVNsaW1lQUksIHRyeSB0byBncmFiIGEgR3JlZW5TbGltZUFJIGluc3RlYWRcbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XG4gICAgICAgICAgICAgICAgc2xpbWVDb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChHcmVlblNsaW1lQUkpIGFzIEdyZWVuU2xpbWVBSTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2xpbWVDb21wKSB7XG4gICAgICAgICAgICAgICAgc2xpbWVDb21wID0gY2hpbGROb2RlLmdldENvbXBvbmVudChMYXZhU2xpbWVBSSkgYXMgTGF2YVNsaW1lQUk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHNsaW1lQ29tcCA9IGNoaWxkTm9kZS5nZXRDb21wb25lbnQoR3JlZW5Cb3NzQUkpIGFzIEdyZWVuQm9zc0FJO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA0KSBJZiB0aGlzIG5vZGUgaGFzIG5laXRoZXIgY29tcG9uZW50LCBza2lwIGl0XG4gICAgICAgICAgICBpZiAoIXNsaW1lQ29tcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNSkgQ29udmVydCB0aGF0IHNsaW1l4oCZcyBwb3NpdGlvbiAobm9kZeKAmXMgYW5jaG9yIHBvaW50KSB0byB3b3JsZC1zcGFjZSBWZWMzIOKGkiBWZWMyXG4gICAgICAgICAgICBjb25zdCBzbGltZVdvcmxkMyA9IGNoaWxkTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgY29uc3Qgc2xpbWVXb3JsZDIgPSBjYy52MihzbGltZVdvcmxkMy54LCBzbGltZVdvcmxkMy55KTtcblxuICAgICAgICAgICAgLy8gNikgQ2hlY2sgZGlzdGFuY2UgZnJvbSBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBwbGF5ZXJXb3JsZDIuc3ViKHNsaW1lV29ybGQyKS5tYWcoKTtcbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHRoaXMuYXR0YWNrUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyA3KSBXZeKAmXJlIGluIHJhbmdlIOKGkiBkZWFsIGRhbWFnZVxuICAgICAgICAgICAgICAgIHNsaW1lQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrUG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gKE9wdGlvbmFsKSBJZiB5b3Ugd2FudCB0byBoaXQgb25seSBvbmUgc2xpbWUgcGVyIHN3aW5nLCB1bmNvbW1lbnQ6XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8g4oaQIEVYSVNUSU5HIE1FVEhPRFMg4oaSLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwdWJsaWMgZ2V0IHdvcmxkUG9zaXRpb24oKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsUG9zaXRpb24oKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ocCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhwIDwgMCkgdGhpcy5ocCA9IDA7XG5cbiAgICAgICAgLy8gMSkgSWYgc3RpbGwgYWxpdmUg4oaSIHBsYXkg4oCcaHVydOKAnSBhbmltYXRpb24gaW4gdGhlIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgICAgIGlmICh0aGlzLmhwID4gMCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfdXBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9kb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImh1cnRfbGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaHVydF9yaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2ssIGp1c3QgaW4gY2FzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgaHVydF8ke3RoaXMuZmFjaW5nfWApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlbGlmZSgtYW1vdW50LCB0aGlzLmhwKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaHVydHNvdW5kKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuOyAvLyBleGl0IGVhcmx5LCBubyBkZWF0aCBsb2dpYyB5ZXRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIpIEhQIGhhcyBkcm9wcGVkIHRvIHplcm8g4oaSIHBsYXkg4oCcZGVhdGjigJ0gYW5pbWF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX3VwXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImRlYXRoX2Rvd25cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfbGVmdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZGVhdGhfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShgZGVhdGhfJHt0aGlzLmZhY2luZ31gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZWxpZmUoLWFtb3VudCwgdGhpcy5ocCk7XG5cbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgICAgICAvLyAzKSBEZWxheSB0aGUgYWN0dWFsIOKAnGZyZWV6ZS9nYW1lLW92ZXLigJ0gdW50aWwgYWZ0ZXIgdGhlIGRlYXRoIGFuaW1hdGlvbiBmaW5pc2hlcy5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxLjAgLy8gYWRqdXN0IHRoaXMgZGVsYXkgdG8gbWF0Y2ggeW91ciBkZWF0aOKAkGFuaW1hdGlvbiBsZW5ndGhcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhwICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaHAgPiB0aGlzLm1heEhwKSB0aGlzLmhwID0gdGhpcy5tYXhIcDtcbiAgICAgICAgdGhpcy51cGRhdGVsaWZlKGFtb3VudCwgdGhpcy5ocCk7XG4gICAgICAgIHRoaXMucGxheWhlYWxzb3VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2sodGFyZ2V0OiBQbGF5ZXIpIHtcbiAgICAgICAgdGFyZ2V0LnRha2VEYW1hZ2UodGhpcy5hdHRhY2tQb3dlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRpZSgpIHtcbiAgICAgICAgLy8gSGFuZCBvdmVyIHRvIHlvdXIgZ2FtZeKAkG92ZXIvZnJlZXplIGxvZ2ljXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRDb21wb25lbnQoXCJBY3RvckNvbnRyb2xsZXJcIikuZ29kaWUoKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlbGlmZShudW06IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSBocDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlhdHRhY2sxc291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjazFzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF0dGFjazFzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gYXR0YWNrMSBzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheWF0dGFjazJzb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrMnNvdW5kKSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXR0YWNrMnNvdW5kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coXCJObyBhdHRhY2syIHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5YXR0YWNrM3NvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2szc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdHRhY2szc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGF0dGFjazMgc291bmRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlodXJ0c291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmh1cnRzb3VuZCkgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmh1cnRzb3VuZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiTm8gaHVydHNvdW5kXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5aGVhbHNvdW5kKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsc291bmQpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5oZWFsc291bmQsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZyhcIk5vIGhlYWxzb3VuZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0UGxheWVyKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgLy8gcmVzZXQgcGxheWVyIHBvc2l0aW9uICYgSFBcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIHRoaXMudXBkYXRlbGlmZSgwLCB0aGlzLmhwKTtcbiAgICAgICAgdGhpcy5ob2xkaW5nS2V5ID0gZmFsc2U7XG4gICAgICAgIC8vc2V0IHBsYXllciBwb3NpdGlvbiBiYXNlZCBvbiBsZXZlbCByYW5kZW9tbHlcbiAgICAgICAgbGV0IE14ID0gKGxldmVsKjQrNikqMTAwO1xuICAgICAgICBsZXQgTXkgPSAobGV2ZWwqMiszKSoxMDA7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihcbiAgICAgICAgICAgIGNjLnYyKFxuICAgICAgICAgICAgICAgIE14ICogKE1hdGgucmFuZG9tKCkpKjAuOTUsXG4gICAgICAgICAgICAgICAgTXkgKiAoTWF0aC5yYW5kb20oKSkqMC45NSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwia2V5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZGluZ0tleSA9IHRydWU7XG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwibG9ja1wiICYmIHRoaXMuaG9sZGluZ0tleSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KFwiTG9ja1wiKTtcbiAgICAgICAgICAgIGlmICh0ZW1wKSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wbGF5QW5pbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5vZGUpe1xuICAgICAgICAgICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJjYW4ndCBkZWFsIHdpdGggb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTsgcHJvcGVybHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBjYy5maW5kKFwiR2FtZU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LDEuMik7XG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLkdvTmV4dExldmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1VJTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFjQSxDQUFDO0lBWkcseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBR25ELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBYzVCO0lBQUQsZUFBQztDQWRELEFBY0MsQ0FkcUMsRUFBRSxDQUFDLFNBQVMsR0FjakQ7a0JBZG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyx1REFBaUc7QUFHakc7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFFSTs7OztpQ0FJeUI7UUFON0IscUVBb0xDO1FBM0tHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0RBQWtEO1FBRWxELHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVyQyxrREFBa0Q7UUFFbEQsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBR3ZDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBZSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFZLEVBQUUsQ0FBQztRQUN2QixjQUFRLEdBQVksQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVksQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVksR0FBRyxDQUFDO1FBQzNCLGlCQUFXLEdBQVksR0FBRyxDQUFDOztRQStJbkMsaUJBQWlCO0lBQ3JCLENBQUM7SUEvSUcsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGlDQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMs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QUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO1FBQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO1FBQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDO1FBQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFekUsT0FBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBQztZQUNqQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0RCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN6RDtRQUVELElBQUksU0FBUyxHQUFpQixFQUFFLENBQUMsQ0FBQyxzQ0FBc0M7UUFDeEUsS0FBSSxJQUFJLEVBQUUsR0FBVSxDQUFDLEVBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxJQUFJLENBQUMsRUFBQztZQUMxQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUksSUFBSSxFQUFFLEdBQVUsQ0FBQyxFQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQzFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0I7U0FDSjtRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbkQsS0FBSSxJQUFJLENBQUMsR0FBUSxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQztZQUN0QyxJQUFJLEVBQUUsR0FBVSxDQUFDLENBQUM7WUFBQSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN2RSxJQUFJLEVBQUUsR0FBVSxDQUFDLENBQUM7WUFBQSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN2RSxPQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDO2dCQUM1QyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckQsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDeEQ7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakQsdUVBQXVFO1lBQ3ZFLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNELGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuQztRQUVELElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRCxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXpLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2lCO0lBSXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1c7SUE3QmQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW9MaEM7SUFBRCxtQkFBQztDQXBMRCxBQW9MQyxDQXBMeUMsRUFBRSxDQUFDLFNBQVMsR0FvTHJEO2tCQXBMb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuaW1wb3J0IHtNYXBfbm9kZSwgTWFwX2VkZ2UsIE1hcF9zZWxlY3RlZF9lZGdlLCBtYXBSb29tVW5pdCwgTWFwX0dyYXBofSBmcm9tICcuL01hcEdlbmVyYXRvckNvcmUnO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwR2VuZXJhdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nOyovXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3YWxsTGlzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvL1BsZWFzZSBzZXQgdGhlIEFuY2hvciBvZiBQcmVmYWIgaW50byAoMCwwKSBmaXJzdFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdmVydGljYWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy9QbGVhc2Ugc2V0IHRoZSBBbmNob3Igb2YgUHJlZmFiIGludG8gKDAsMCkgZmlyc3RcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGhvcml6b250YWxXYWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjaGVzdFdhbGxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGtleVRvTmV4dExldmVsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBsb2NrVG9OZXh0TGV2ZWw6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdyb3VuZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHByaXZhdGUgbXlNYXAgOiBNYXBfR3JhcGggPSBudWxsO1xuICAgIHByaXZhdGUgTWFwX3htYXggOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIE1hcF95bWF4IDogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIGNoZXN0Ym94ZXMgOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgYmxvY2tzaXplX3ggOiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBibG9ja3NpemVfeSA6IG51bWJlciA9IDEwMDtcbiAgICBwdWJsaWMgZ2V0IE1hcFhtYXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTWFwX3htYXgqIHRoaXMuYmxvY2tzaXplX3g7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgTWFwWW1heCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5NYXBfeW1heCAqIHRoaXMuYmxvY2tzaXplX3k7XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgO1xuICAgIH1cblxuICAgIEdlbmVyYXRvck1hcCAoKSB7XG4gICAgICAgIHRoaXMubXlNYXAgPSBuZXcgTWFwX0dyYXBoKHRoaXMuTWFwX3htYXgsdGhpcy5NYXBfeW1heCk7Ly8gZ2VuZXJhdGUgbWFwXG4gICAgICAgIC8vUGxlYXNlIHNldCB0aGUgQW5jaG9yIG9mIFByZWZhYiBpbnRvICgwLDApIGZpcnN0XG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMuTWFwX3ltYXg7X3krKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XG4gICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDAsJ2dyb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMuTWFwX3ltYXg7X3krKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLnVwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMubXlNYXAubWFwQmxvY2tbX3ldW194XS5sZWZ0KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZlcnRpY2FsV2FsbFByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKF94KnRoaXMuYmxvY2tzaXplX3gsX3kqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXAsMSwnd2FsbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgb3V0ZXIgd2FsbHNcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF94bWF4O2krKyl7XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oaSp0aGlzLmJsb2Nrc2l6ZV94LHRoaXMuTWFwX3ltYXgqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSB2ZXJ0aWNhbCB3YWxsc1xuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDtpPHRoaXMuTWFwX3ltYXg7aSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHByZWZhYl90ZW1wID0gY2MuaW5zdGFudGlhdGUodGhpcy52ZXJ0aWNhbFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24odGhpcy5NYXBfeG1heCp0aGlzLmJsb2Nrc2l6ZV94LGkqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlbmVyYXRlS2V5X0xvY2soKTtcbiAgICB9XG5cbiAgICByZWdlbmVyYXRlTWFwKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy53YWxsTGlzdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAvLyBGaW5kIExldmVsXG4gICAgICAgIHRoaXMuTWFwX3htYXggPSBsZXZlbCo0ICsgNiA7IC8vIExldmVsIDEsMiwzLi4u77yMTWFwX3htYXggID0gMTAsMTQsMTguLi5cbiAgICAgICAgdGhpcy5NYXBfeW1heCA9IGxldmVsKjIgKyAzIDsgLy8gTGV2ZWwgMSwyLDMuLi7vvIxNYXBfeW1heCA9IDUsNyw5Li4uXG4gICAgICAgIHRoaXMuY2hlc3Rib3hlcyA9IGxldmVsKjIgKyAxIDtcblxuICAgICAgICB0aGlzLm15TWFwID0gbmV3IE1hcF9HcmFwaCh0aGlzLk1hcF94bWF4LCB0aGlzLk1hcF95bWF4KTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLk1hcF94bWF4O194Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMuTWFwX3ltYXg7X3krKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XG4gICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDAsJ2dyb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PHRoaXMuTWFwX3htYXg7X3grKyl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy5NYXBfeW1heDtfeSsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaG9yaXpvbnRhbFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVmYWJfdGVtcC5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wLDEsJ3dhbGwnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5teU1hcC5tYXBCbG9ja1tfeV1bX3hdLmxlZnQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudmVydGljYWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmFiX3RlbXAuc2V0UG9zaXRpb24oX3gqdGhpcy5ibG9ja3NpemVfeCxfeSp0aGlzLmJsb2Nrc2l6ZV95KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaTpudW1iZXIgPSAwO2k8dGhpcy5NYXBfeG1heDtpKyspe1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiX3RlbXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhvcml6b250YWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKGkqdGhpcy5ibG9ja3NpemVfeCx0aGlzLk1hcF95bWF4KnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7aTx0aGlzLk1hcF95bWF4O2krKyl7XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudmVydGljYWxXYWxsUHJlZmFiKTtcbiAgICAgICAgICAgIHByZWZhYl90ZW1wLnNldFBvc2l0aW9uKHRoaXMuTWFwX3htYXgqdGhpcy5ibG9ja3NpemVfeCxpKnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcCwxLCd3YWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUtleV9Mb2NrKCk7XG4gICAgfVxuICAgIFxuICAgIGdlbmVyYXRlS2V5X0xvY2soKXtcbiAgICAgICAgbGV0IF94MDpudW1iZXIgPSAwO194MCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3htYXgpICsgMC41O1xuICAgICAgICBsZXQgX3kwOm51bWJlciA9IDA7X3kwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeW1heCkgKyAwLjU7XG4gICAgICAgIGxldCBfeDE6bnVtYmVyID0gMDtfeDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcbiAgICAgICAgbGV0IF95MTpudW1iZXIgPSAwO195MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xuXG4gICAgICAgIHdoaWxlKChfeDAgPT09IF94MSkgJiYgKF95MCA9PT0gX3kxKSl7XG4gICAgICAgICAgICBfeDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF94bWF4KSArIDAuNTtcbiAgICAgICAgICAgIF95MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hcEJsb2NrcyA6IGJvb2xlYW5bXVtdID0gW107IC8vIG1hcEJsb2Nrc1tfeV1bX3hdIG1hcEJsb2Nrc1tfaV1bX2pdXG4gICAgICAgIGZvcihsZXQgX2k6bnVtYmVyID0gMDtfaTx0aGlzLk1hcFltYXg7X2kgKz0gMSl7XG4gICAgICAgICAgICBtYXBCbG9ja3NbX2ldID0gW107XG4gICAgICAgICAgICBmb3IobGV0IF9qOm51bWJlciA9IDA7X2o8dGhpcy5NYXBYbWF4O19qICs9IDEpe1xuICAgICAgICAgICAgICAgIG1hcEJsb2Nrc1tfaV1bX2pdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFwQmxvY2tzW01hdGguZmxvb3IoX3kwKV1bTWF0aC5mbG9vcihfeDApXSA9IHRydWU7XG4gICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95MSldW01hdGguZmxvb3IoX3gxKV0gPSB0cnVlO1xuXG4gICAgICAgIGZvcihsZXQgaTpudW1iZXI9MDtpPHRoaXMuY2hlc3Rib3hlcztpKz0xKXtcbiAgICAgICAgICAgIGxldCBfeDpudW1iZXIgPSAwO194ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XG4gICAgICAgICAgICBsZXQgX3k6bnVtYmVyID0gMDtfeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTWFwX3ltYXgpICsgMC41O1xuICAgICAgICAgICAgd2hpbGUobWFwQmxvY2tzW01hdGguZmxvb3IoX3kpXVtNYXRoLmZsb29yKF94KV0pe1xuICAgICAgICAgICAgICAgIF94ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5NYXBfeG1heCkgKyAwLjU7XG4gICAgICAgICAgICAgICAgX3kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk1hcF95bWF4KSArIDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcEJsb2Nrc1tNYXRoLmZsb29yKF95KV1bTWF0aC5mbG9vcihfeCldID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJfdGVtcF8yID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaGVzdFdhbGxQcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiX3RlbXBfMi5zZXRQb3NpdGlvbihfeCp0aGlzLmJsb2Nrc2l6ZV94LF95KnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICAgICAgdGhpcy53YWxsTGlzdC5hZGRDaGlsZChwcmVmYWJfdGVtcF8yLDEsJ2NoZXN0Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZXN0IGF0OlwiLF94LCBfeSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByZWZhYl90ZW1wXzAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmtleVRvTmV4dExldmVsKTtcbiAgICAgICAgcHJlZmFiX3RlbXBfMC5zZXRQb3NpdGlvbihfeDAqdGhpcy5ibG9ja3NpemVfeCxfeTAqdGhpcy5ibG9ja3NpemVfeSk7XG4gICAgICAgIHRoaXMud2FsbExpc3QuYWRkQ2hpbGQocHJlZmFiX3RlbXBfMCwxLCdrZXknKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgYXQ6XCIsX3gwLCBfeTApO1xuXG4gICAgICAgIGNvbnN0IHByZWZhYl90ZW1wXzEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxvY2tUb05leHRMZXZlbCk7XG4gICAgICAgIHByZWZhYl90ZW1wXzEuc2V0UG9zaXRpb24oX3gxKnRoaXMuYmxvY2tzaXplX3gsX3kxKnRoaXMuYmxvY2tzaXplX3kpO1xuICAgICAgICB0aGlzLndhbGxMaXN0LmFkZENoaWxkKHByZWZhYl90ZW1wXzEsMSwnbG9jaycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2sgYXQ6XCIsX3gxLCBfeTEpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufSJdfQ==
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
        var monsterCount = Math.floor((this.Map_xmax / 100) * (this.Map_ymax / 100) / 5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01vbnN0ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLElBQUssV0FLSjtBQUxELFdBQUssV0FBVztJQUNaLHVEQUFTLENBQUE7SUFDVCx5REFBVSxDQUFBO0lBQ1YsdURBQVMsQ0FBQTtJQUNULHVEQUFTLENBQUE7QUFDYixDQUFDLEVBTEksV0FBVyxLQUFYLFdBQVcsUUFLZjtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUhDO1FBbkhXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQWdIakMsQ0FBQztJQTdHRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEUsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMs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RDtrQkFySG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5lbnVtIE1vbnN0ZXJUeXBlIHtcbiAgICBCbHVlU2xpbWUsXG4gICAgR3JlZW5TbGltZSxcbiAgICBHcmVlbkJvc3MsXG4gICAgTGF2YVNsaW1lXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIGxldmVsOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbW9uc3Rlck1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgTWFwX3htYXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBNYXBfeW1heDogbnVtYmVyID0gMDtcblxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLkxldmVsO1xuICAgICAgICAvL0luaXRpYWxpemUgdGhlIG1vbnN0ZXIgbWFuYWdlclxuICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL01vbnN0ZXJNYW5hZ2VyXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnN0ZXIgb25sb2FkXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuICAgIGluaXRNb25zdGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcF94bWF4ID1cIiwgdGhpcy5NYXBfeG1heCwgXCJNYXBfeW1heCA9XCIsIHRoaXMuTWFwX3ltYXgpO1xuICAgICAgICBsZXQgbW9uc3RlckNvdW50ID0gTWF0aC5mbG9vcigodGhpcy5NYXBfeG1heC8xMDApKih0aGlzLk1hcF95bWF4LzEwMCkvNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9uc3RlckNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kb21UeXBlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMuOTk5OSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnN0ZXIgVHlwZTpcIiwgcmFuZG9tVHlwZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHJhbmRvbVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE1vbnN0ZXJUeXBlLkJsdWVTbGltZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Qmx1ZVNsaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTW9uc3RlclR5cGUuR3JlZW5TbGltZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R3JlZW5TbGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIE1vbnN0ZXJUeXBlLkdyZWVuQm9zczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R3JlZW5Cb3NzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTW9uc3RlclR5cGUuTGF2YVNsaW1lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRMYXZhU2xpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJVbmtub3duIG1vbnN0ZXIgdHlwZTpcIiwgcmFuZG9tVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGluaXRCbHVlU2xpbWUoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9CbHVlIFNsaW1lXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBCbHVlIFNsaW1lOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFNsaW1lTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyLmFkZENoaWxkKFNsaW1lTm9kZSwxLCdCbHVlIFNsaW1lJyk7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF94bWF4ICsgMSkpIDtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3ltYXggKyAxKSkgO1xuICAgICAgICAgICAgU2xpbWVOb2RlLnNldFBvc2l0aW9uKHgseSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPVwiLCB0aGlzLk1hcF94bWF4LCBcIk1hcF95bWF4ID1cIiwgdGhpcy5NYXBfeW1heCk7XG4gICAgfVxuICAgIGluaXRHcmVlblNsaW1lKCkge1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvR3JlZW4gU2xpbWVcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIEdyZWVuIFNsaW1lOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFNsaW1lTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyLmFkZENoaWxkKFNsaW1lTm9kZSwgMSwnR3JlZW4gU2xpbWUnKTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeW1heCArIDEpKSA7XG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieD1cIiwgeCwgXCJ5PVwiLHkpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgaW5pdEdyZWVuQm9zcygpIHtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0dyZWVuIEJvc3NcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIEdyZWVuIEJvc3NcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBTbGltZU5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5tb25zdGVyTWFuYWdlci5hZGRDaGlsZChTbGltZU5vZGUsIDEsICdHcmVlbiBCb3NzJyk7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1hcF94bWF4ICsgMSkpIDtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3ltYXggKyAxKSkgO1xuICAgICAgICAgICAgU2xpbWVOb2RlLnNldFBvc2l0aW9uKHgseSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPVwiLCB0aGlzLk1hcF94bWF4LCBcIk1hcF95bWF4ID1cIiwgdGhpcy5NYXBfeW1heCk7XG4gICAgfVxuICAgIGluaXRMYXZhU2xpbWUoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9MYXZhIFNsaW1lXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBMYXZhIFNsaW1lOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFNsaW1lTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJNYW5hZ2VyLmFkZENoaWxkKFNsaW1lTm9kZSwgMSwgJ0xhdmEgU2xpbWUnKTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuTWFwX3htYXggKyAxKSkgO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5NYXBfeW1heCArIDEpKSA7XG4gICAgICAgICAgICBTbGltZU5vZGUuc2V0UG9zaXRpb24oeCx5KTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXBfeG1heCA9XCIsIHRoaXMuTWFwX3htYXgsIFwiTWFwX3ltYXggPVwiLCB0aGlzLk1hcF95bWF4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0TW9uc3RlcihfbGV2ZWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxldmVsID0gX2xldmVsO1xuICAgICAgICBsZXQgTWFwR0VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xuICAgICAgICB0aGlzLk1hcF94bWF4ID0gTnVtYmVyKCh0aGlzLmxldmVsICo0KzYpKjEwMCk7XG4gICAgICAgIHRoaXMuTWFwX3ltYXggPSBOdW1iZXIoKHRoaXMubGV2ZWwgKjIrMykqMTAwKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbCA9IFwiLCB0aGlzLmxldmVsLCB0eXBlb2YgdGhpcy5sZXZlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwX3htYXggPSBcIiwgdGhpcy5NYXBfeG1heCwgdHlwZW9mIHRoaXMuTWFwX3htYXgpO1xuXG4gICAgICAgIHRoaXMubW9uc3Rlck1hbmFnZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbml0TW9uc3RlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldCBtb25zdGVyXCIpO1xuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hcEdlbmVyYXRvckNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7RUFNRTtBQUNGOzs7Ozs7R0FNRzs7O0FBRUg7SUFHSSxrQkFBWSxHQUFVO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBUEEsQUFPQyxJQUFBLENBQUEsb0RBQW9EO0FBUHhDLDRCQUFRO0FBUXJCO0lBSUksa0JBQVksRUFBRSxFQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRCQUFRO0FBVXJCO0lBR0ksMkJBQVksRUFBRSxFQUFDLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCx3QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksOENBQWlCO0FBUTlCO0lBS0kscUJBQVksS0FBZTtRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGtDQUFXO0FBYXhCO0lBV0ksbUJBQVksS0FBSyxFQUFD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SSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ3JHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDO2FBQ3pEO2lCQUFLLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ3pHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzthQUMzRDtpQkFBSTtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7YUFDM0Q7WUFDRDs7O2VBR0c7U0FDTjtJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBcEhBLEFBb0hDLElBQUE7QUFwSFksOEJBQVM7QUFxSHRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE0REU7QUFDRjs7b0NBRW9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMlwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQwXCIpLmlubmVySFRNTCA9IFwiSGVsbG8gV29ybGQhXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sQnRuMFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJhd01hcCk7XG59XG4qL1xuLypjbGFzcyBfR3JhcGhOb2Rle1xuICAgIG5vZGVOdW1iZXIgOiBudW1iZXI7XG4gICAgZWRnZUxpc3QgOiBudW1iZXJbXTtcbiAgICBjb25zdHJ1Y3Rvcihfbm9kZU51bWJlcil7XG4gICAgICAgIHRoaXMubm9kZU51bWJlciA9IF9ub2RlTnVtYmVyO1xuICAgIH1cbn0qL1xuXG5leHBvcnQgY2xhc3MgTWFwX25vZGV7XG4gICAgZGlzam9pbnRfc2V0X3B0ciA6IG51bWJlcjtcbiAgICBkaXNqb2ludF9zZXRfaGVpZ2h0IDogbnVtYmVyXG4gICAgY29uc3RydWN0b3IoX2lwOm51bWJlcil7XG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X2hlaWdodCA9IDE7XG4gICAgICAgIHRoaXMuZGlzam9pbnRfc2V0X3B0ciA9IF9pcDtcbiAgICB9XG59Ly8gYWJsZSB0byBtb2RpZnkgKGhhdmUgdG8gbW9kaWZ5IHJlbGF0ZWQgY29kZSwgdG9vKVxuZXhwb3J0IGNsYXNzIE1hcF9lZGdle1xuICAgIGZyb20gOiBudW1iZXI7XG4gICAgdG8gOiBudW1iZXI7XG4gICAgd2VpZ2h0IDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF9mLF90KXtcbiAgICAgICAgdGhpcy5mcm9tID0gX2Y7XG4gICAgICAgIHRoaXMudG8gPSBfdDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXBfc2VsZWN0ZWRfZWRnZXtcbiAgICBmcm9tIDogbnVtYmVyO1xuICAgIHRvIDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF9mLF90KXtcbiAgICAgICAgdGhpcy5mcm9tID0gX2Y7XG4gICAgICAgIHRoaXMudG8gPSBfdDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgbWFwUm9vbVVuaXR7Ly8gdHJ1ZSAtPiB3YWxsXG4gICAgdXAgOiBib29sZWFuO1xuICAgIGRvd24gOiBib29sZWFuO1xuICAgIHJpZ2h0IDogYm9vbGVhbjtcbiAgICBsZWZ0IDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihfaW5pdCA6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLnVwID0gX2luaXQ7XG4gICAgICAgIHRoaXMuZG93biA9IF9pbml0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gX2luaXQ7XG4gICAgICAgIHRoaXMubGVmdCA9IF9pbml0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcF9HcmFwaHtcbiAgICB4bWF4IDogbnVtYmVyO1xuICAgIHltYXggOiBudW1iZXI7XG4gICAgLypcbiAgICBfYmxvY2tXaWR0aCA6IG51bWJlcjtcbiAgICBfTGluZVdpZHRoIDogbnVtYmVyO1xuICAgICovXG4gICAgdmVydGV4TGlzdCA6IE1hcDxudW1iZXIsTWFwX25vZGU+ID0gbmV3IE1hcDxudW1iZXIsTWFwX25vZGU+KCk7XG4gICAgZWRnZUxpc3QgOiBNYXBfZWRnZVtdID0gW107XG4gICAgc2VsZWN0ZWRFZGdlTGlzdCA6IE1hcF9zZWxlY3RlZF9lZGdlW10gPSBbXTtcbiAgICBtYXBCbG9jayA6IG1hcFJvb21Vbml0W11bXSA9IFtdOyAvLyBtYXBCbG9ja1tfeV1bX3hdIC8vIHRydWUgLT4gd2FsbFxuICAgIGNvbnN0cnVjdG9yKF94bWF4LF95bWF4KXtcbiAgICAgICAgdGhpcy55bWF4ID0gX3ltYXg7XG4gICAgICAgIHRoaXMueG1heCA9IF94bWF4O1xuICAgICAgICAvL3RoaXMudmVydGV4TGlzdCA9IG5ldyBNYXA8bnVtYmVyLE1hcF9ub2RlPigpO1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xuICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV0gPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdID0gbmV3IG1hcFJvb21Vbml0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdyYXBoKCk7XG4gICAgfVxuICAgIGRpc2pvaW50X3NldF90b3AoX2lwIDogbnVtYmVyKTogbnVtYmVye1xuICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihfaXAgPT09IHRoaXMudmVydGV4TGlzdC5nZXQoX2lwKS5kaXNqb2ludF9zZXRfcHRyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2lwID0gdGhpcy52ZXJ0ZXhMaXN0LmdldChfaXApLmRpc2pvaW50X3NldF9wdHI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZUdyYXBoKCkge1xuICAgICAgICBsZXQgdG90YWxWZXJ0ZXg6bnVtYmVyID0gMDtcbiAgICAgICAgLy9pbml0aWFsaXplIHZlcnRleFxuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8dGhpcy54bWF4O194ICs9IDEpe1xuICAgICAgICAgICAgZm9yKGxldCBfeTpudW1iZXIgPSAwO195PHRoaXMueW1heDtfeSArPSAxKXtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZU51bSA6IG51bWJlciA9IF94K195KnRoaXMueG1heDtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZVByb3BlcnR5IDogTWFwX25vZGUgPSBuZXcgTWFwX25vZGUobm9kZU51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LnNldChub2RlTnVtLG5vZGVQcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgdG90YWxWZXJ0ZXgrPTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9pbml0aWFsaXplIGhvcml6b250YWwgZWRnZVxuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8dGhpcy54bWF4LTE7X3ggKz0gMSl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4O195ICs9IDEpe1xuICAgICAgICAgICAgICAgIGxldCBub2RlTnVtIDogbnVtYmVyID0gX3grX3kqdGhpcy54bWF4O1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnZlcnRleExpc3QuZ2V0KG5vZGVOdW0pID09PSB1bmRlZmluZWQpIHx8ICh0aGlzLnZlcnRleExpc3QuZ2V0KG5vZGVOdW0rMSkgPT09IHVuZGVmaW5lZCkpe1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5ld0VkZ2UgOiBNYXBfZWRnZSA9IG5ldyBNYXBfZWRnZShub2RlTnVtLG5vZGVOdW0rMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaW5pdGlhbGl6ZSB2aXJ0aWNhbCBlZGdlXG4gICAgICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDx0aGlzLnhtYXg7X3ggKz0gMSl7XG4gICAgICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8dGhpcy55bWF4LTE7X3kgKz0gMSl7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVOdW0gOiBudW1iZXIgPSBfeCtfeSp0aGlzLnhtYXg7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMudmVydGV4TGlzdC5nZXQobm9kZU51bSkgPT09IHVuZGVmaW5lZCkgfHwgKHRoaXMudmVydGV4TGlzdC5nZXQobm9kZU51bSt0aGlzLnhtYXgpID09PSB1bmRlZmluZWQpKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuZXdFZGdlIDogTWFwX2VkZ2UgPSBuZXcgTWFwX2VkZ2Uobm9kZU51bSxub2RlTnVtK3RoaXMueG1heCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlTGlzdC5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBlZGdlTGlzdFxuICAgICAgICB0aGlzLmVkZ2VMaXN0LnNvcnQoKGlwYSxpcGIpPT57cmV0dXJuIGlwYS53ZWlnaHQtaXBiLndlaWdodH0pO1xuICAgICAgICAvKmZvcihsZXQgaTpudW1iZXIgPTA7aTx0aGlzLmVkZ2VMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy90aGlzLmVkZ2VMaXN0W2ldLmRpc2pvaW50X3NldF9wdHIgPSBpOy8vd3JvbmdcbiAgICAgICAgfSovXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTWluaW11bVNwYW5uaW5nVHJlZSgpOy8vdG90YWxWZXJ0ZXgtMVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZV9ibG9jaygpO1xuICAgIH1cbiAgICBjYWxjdWxhdGVfYmxvY2soKXtcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9MDtpPHRoaXMuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0udG8tdGhpcy5zZWxlY3RlZEVkZ2VMaXN0W2ldLmZyb20pID09PSAxKXtcbiAgICAgICAgICAgICAgICAvL2hvcml6b250YWxcbiAgICAgICAgICAgICAgICB2YXIgX3ggOm51bWJlciA9IHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgdGhpcy54bWF4O1xuICAgICAgICAgICAgICAgIHZhciBfeSA6bnVtYmVyID0gKHRoaXMuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIHRoaXMueG1heDtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeF0ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195XVtfeCsxXS5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsXG4gICAgICAgICAgICAgICAgdmFyIF94IDpudW1iZXIgPSB0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSAlIHRoaXMueG1heDtcbiAgICAgICAgICAgICAgICB2YXIgX3kgOm51bWJlciA9ICh0aGlzLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbS1feCkgLyB0aGlzLnhtYXg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBCbG9ja1tfeV1bX3hdLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcEJsb2NrW195KzFdW194XS51cCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGN1bGF0ZU1pbmltdW1TcGFubmluZ1RyZWUoKXsvL3RyZWVFZGdlcyA6IG51bWJlclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyID0wO2k8dGhpcy5lZGdlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLmZyb20pID09PSB0aGlzLmRpc2pvaW50X3NldF90b3AodGhpcy5lZGdlTGlzdFtpXS50bykpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld0UgOiBNYXBfc2VsZWN0ZWRfZWRnZSA9IG5ldyBNYXBfc2VsZWN0ZWRfZWRnZSh0aGlzLmVkZ2VMaXN0W2ldLmZyb20sdGhpcy5lZGdlTGlzdFtpXS50byk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZUxpc3QucHVzaChuZXdFKTtcbiAgICAgICAgICAgIGxldCBzZXRBX2lkID0gdGhpcy5kaXNqb2ludF9zZXRfdG9wKHRoaXMuZWRnZUxpc3RbaV0uZnJvbSk7XG4gICAgICAgICAgICBsZXQgc2V0Ql9pZCA9IHRoaXMuZGlzam9pbnRfc2V0X3RvcCh0aGlzLmVkZ2VMaXN0W2ldLnRvKTtcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCA9PT0gdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRBX2lkO1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TGlzdC5nZXQoc2V0QV9pZCkuZGlzam9pbnRfc2V0X2hlaWdodCArPSAxO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0ID4gdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRCX2lkKS5kaXNqb2ludF9zZXRfaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleExpc3QuZ2V0KHNldEJfaWQpLmRpc2pvaW50X3NldF9wdHIgPSBzZXRBX2lkO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhMaXN0LmdldChzZXRBX2lkKS5kaXNqb2ludF9zZXRfcHRyID0gc2V0Ql9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qdHJlZUVkZ2VzIC09IDE7XG4gICAgICAgICAgICBpZih0cmVlRWRnZXMgPT09IDApe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cbiAgICB9XG59XG4vKlxuZnVuY3Rpb24gZHJhd01hcCgpe1xuICAgIC8vY29uc29sZS5sb2coXCJvbkNsaWNrXCIpO1xuICAgIHZhciBtYXBTaXplID0gMTA7XG4gICAgdmFyIG15TWFwIDogTWFwX0dyYXBoID0gbmV3IE1hcF9HcmFwaChtYXBTaXplLG1hcFNpemUpO1xuICAgIHZhciBfYmxvY2tXaWR0aCA6IG51bWJlciA9IDQwO1xuICAgIHZhciBfTGluZVdpZHRoIDogbnVtYmVyID0gMjtcbiAgICBjb25zdCBteUNhbnZhcyA6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMFwiKTtcbiAgICBjb25zdCBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgLy8gY3R4LmNsZWFyUmVjdFxuICAgIC8vIGN0eC5maWxsUmVjdFxuICAgIC8vaW5pdGlhbGl6ZSB2ZXJ0ZXhcbiAgICBjb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgMTQ3XCIpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwwLDUxMiw1MTIpO1xuICAgIGZvcihsZXQgX3k6bnVtYmVyID0gMDtfeTxtYXBTaXplO195ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF94Om51bWJlciA9IDA7X3g8bWFwU2l6ZTtfeCArPSAxKXtcbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0udXApe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCxfeSpfYmxvY2tXaWR0aCxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ubGVmdCl7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KF94Kl9ibG9ja1dpZHRoLF95Kl9ibG9ja1dpZHRoLF9MaW5lV2lkdGgsX2Jsb2NrV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobXlNYXAubWFwQmxvY2tbX3ldW194XS5kb3duKXtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoX3gqX2Jsb2NrV2lkdGgsX3kqX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgtX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG15TWFwLm1hcEJsb2NrW195XVtfeF0ucmlnaHQpe1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChfeCpfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aC1fTGluZVdpZHRoLF95Kl9ibG9ja1dpZHRoLF9MaW5lV2lkdGgsX2Jsb2NrV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAwO194PD1tYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8PW1hcFNpemU7X3kgKz0gMSl7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgaG9yaXpvbnRhbCBlZGdlXG4gICAgZm9yKGxldCBfeDpudW1iZXIgPSAtMTtfeDxtYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IDA7X3k8bWFwU2l6ZTtfeSArPSAxKXtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCxfYmxvY2tXaWR0aCpfeSxfTGluZVdpZHRoLF9ibG9ja1dpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgdmlydGljYWwgZWRnZVxuICAgIGZvcihsZXQgX3g6bnVtYmVyID0gMDtfeDxtYXBTaXplO194ICs9IDEpe1xuICAgICAgICBmb3IobGV0IF95Om51bWJlciA9IC0xO195PG1hcFNpemU7X3kgKz0gMSl7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoX2Jsb2NrV2lkdGgqX3gsX2Jsb2NrV2lkdGgrX2Jsb2NrV2lkdGgqX3ksX2Jsb2NrV2lkdGgsX0xpbmVXaWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpOm51bWJlcj0wO2k8bXlNYXAuc2VsZWN0ZWRFZGdlTGlzdC5sZW5ndGg7aSs9MSl7XG4gICAgICAgIHZhciBfeCA6bnVtYmVyID0gbXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tICUgbWFwU2l6ZTtcbiAgICAgICAgdmFyIF95IDpudW1iZXIgPSAobXlNYXAuc2VsZWN0ZWRFZGdlTGlzdFtpXS5mcm9tLV94KSAvIG1hcFNpemU7XG4gICAgICAgIGlmKChteU1hcC5zZWxlY3RlZEVkZ2VMaXN0W2ldLnRvLW15TWFwLnNlbGVjdGVkRWRnZUxpc3RbaV0uZnJvbSkgPT09IDEpe1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeCwrX2Jsb2NrV2lkdGgqX3ksX0xpbmVXaWR0aCxfYmxvY2tXaWR0aCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChfYmxvY2tXaWR0aCpfeCxfYmxvY2tXaWR0aCtfYmxvY2tXaWR0aCpfeSxfYmxvY2tXaWR0aCxfTGluZVdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKi9cbi8qXG5pbml0KCk7XG5jb25zb2xlLmxvZyhcIm15c2NyaXB0LnRzIGxpbmUgN1wiKTsqL1xuIl19
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
        var KeyController = cc.find("Canvas/MapManager/Actors/Player").getComponent("KeyboardControl");
        KeyController.openInput();
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
        var KeyController = cc.find("Canvas/MapManager/Actors/Player").getComponent("KeyboardControl");
        //KeyController.closeInput();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FjdG9yQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUduRyxpREFBNEM7QUFDNUMseURBQXFFO0FBRy9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUssV0FTSjtBQVRELFdBQUssV0FBVztJQUNaLDZDQUFJLENBQUE7SUFDSiw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLG1EQUFPLENBQUE7SUFDUCxtREFBTyxDQUFBO0lBQ1AsNkNBQUksQ0FBQTtJQUNKLDJDQUFHLENBQUE7SUFDSCxtREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQVRJLFdBQVcsS0FBWCxXQUFXLFFBU2Y7QUFFRCxJQUFLLGVBS0o7QUFMRCxXQUFLLGVBQWU7SUFDaEIsdURBQUssQ0FBQTtJQUNMLHFEQUFJLENBQUE7SUFDSixpREFBRSxDQUFBO0lBQ0YscURBQUksQ0FBQTtBQUNSLENBQUMsRUFMSSxlQUFlLEtBQWYsZUFBZSxRQUtuQjtBQUVELFNBQVMsSUFBSSxDQUFDLENBQVM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVEOzs7R0FHRztBQUVIO0lBQTZDLG1DQUFVO0lBQXZEO1FBQUEscUVBbVVDO1FBalVHLDRCQUFzQixHQUFHLGVBQWUsQ0FBQyxLQUFLLENB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QUMsTUFBTSxDQUFDO3dEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ29CO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSjtJQWFmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ087SUFwR1QsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1VbkM7SUFBRCxzQkFBQztDQW5VRCxBQW1VQyxDQW5VNEMsb0JBQVUsR0FtVXREO2tCQW5Vb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vaW5wdXQvQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMsIEJ1dHRvblN0YXRlIH0gZnJvbSBcIi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCAgUGxheWVyICAgIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZW51bSBQbGF5ZXJTdGF0ZXtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgQXR0YWNrLFxuICAgIEF0dGFjazIsXG4gICAgQXR0YWNrMyxcbiAgICBIdXJ0LFxuICAgIERpZSAsXG4gICAgQ29tYm9fMVxufVxuXG5lbnVtIEZhY2luZ0RpcmVjdGlvbiB7XG4gICAgUmlnaHQsXG4gICAgTGVmdCxcbiAgICBVcCxcbiAgICBEb3duXG59XG5cbmZ1bmN0aW9uIHNpZ24oeDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHggPiAwID8gMSA6IHggPCAwID8gLTEgOiAwO1xufVxuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgaW1wbGVtZW50cyBtb3ZlbWVudCBhbmQgYWN0aW9ucyBmb3IgZWFjaCBhY3Rvci5cbiAqIFRvZ2dsZSBcIlVzZSBQbGF5ZXIgSW5wdXRcIiB0byByZWFkIGZyb20gcGxheWVyIGlucHV0LlxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3JDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShGYWNpbmdEaXJlY3Rpb24pIH0pXG4gICAgaW5pdGlhbEZhY2luZ0RpcmVjdGlvbiA9IEZhY2luZ0RpcmVjdGlvbi5SaWdodDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgXG5cbiAgICBwcml2YXRlIF9hbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBpZGxlQW5pbWF0aW9uTmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgbW92ZUFuaW1hdGlvbk5hbWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIF9pZGxlQW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbW92ZUFuaW1TdGF0ZTogY2MuQW5pbWF0aW9uU3RhdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgd2Fsa1JpZ2h0QW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICB3YWxrTGVmdEFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfd2Fsa19sZWZ0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICB3YWxrVXBBbmltYXRpb246IHN0cmluZyA9IFwicGxheWVyX3dhbGtfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIHdhbGtEb3duQW5pbWF0aW9uOiBzdHJpbmcgPSBcInBsYXllcl93YWxrX2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgaWRsZUFuaW1hdGlvbjogc3RyaW5nID0gXCJwbGF5ZXJfc3RhbmRieVwiOyBcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX3JpZ2h0OiBzdHJpbmcgPSBcImF0dGFja19yaWdodC0xXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfbGVmdDogc3RyaW5nID0gXCJhdHRhY2tfbGVmdC0xXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfdXA6IHN0cmluZyA9IFwiYXR0YWNrX3VwLTFcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19kb3duOiBzdHJpbmcgPSBcImF0dGFja19kb3duLTFcIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX3JpZ2h0XzI6IHN0cmluZyA9IFwiYXR0YWNrX3JpZ2h0LTJcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19sZWZ0XzI6IHN0cmluZyA9IFwiYXR0YWNrX2xlZnQtMlwiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX3VwXzI6IHN0cmluZyA9IFwiYXR0YWNrX3VwLTJcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGF0dGFja19kb3duXzI6IHN0cmluZyA9IFwiYXR0YWNrX2Rvd24tMlwiO1xuXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfcmlnaHRfMzogc3RyaW5nID0gXCJhdHRhY2tfcmlnaHQtM1wiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2xlZnRfMzogc3RyaW5nID0gXCJhdHRhY2tfbGVmdC0zXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBhdHRhY2tfdXBfMzogc3RyaW5nID0gXCJhdHRhY2tfdXAtM1wiO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgYXR0YWNrX2Rvd25fMzogc3RyaW5nID0gXCJhdHRhY2tfZG93bi0zXCI7XG5cbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGRlYXRoX3JpZ2h0OiBzdHJpbmcgPSBcImRlYXRoX3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBkZWF0aF9sZWZ0OiBzdHJpbmcgPSBcImRlYXRoX2xlZnRcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGRlYXRoX3VwOiBzdHJpbmcgPSBcImRlYXRoX3VwXCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBkZWF0aF9kb3duOiBzdHJpbmcgPSBcImRlYXRoX2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgaHVydF9yaWdodDogc3RyaW5nID0gXCJodXJ0X3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBodXJ0X2xlZnQ6IHN0cmluZyA9IFwiaHVydF9sZWZ0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBodXJ0X3VwOiBzdHJpbmcgPSBcImh1cnRfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGh1cnRfZG93bjogc3RyaW5nID0gXCJodXJ0X2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgY29tYm9fcmlnaHRfMTogc3RyaW5nID0gXCJjb21iby0xX3JpZ2h0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBjb21ib19sZWZ0XzE6IHN0cmluZyA9IFwiY29tYm8tMV9sZWZ0XCI7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBjb21ib191cF8xOiBzdHJpbmcgPSBcImNvbWJvLTFfdXBcIjtcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxuICAgIGNvbWJvX2Rvd25fMTogc3RyaW5nID0gXCJjb21iby0xX2Rvd25cIjtcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtb3ZlU3BlZWQgPSA2MDsgXG5cbiAgICBwdWJsaWMgbW92ZUF4aXNYID0gMDtcbiAgICBwdWJsaWMgbW92ZUF4aXNZID0gMDtcblxuICAgIHByaXZhdGUgX3BsYXllclN0YXRlOiBQbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSBfZmFjaW5nOiBGYWNpbmdEaXJlY3Rpb24gPSBGYWNpbmdEaXJlY3Rpb24uRG93bjsgLy8g6aCQ6Kit5pyd5LiLXG4gICAgcHJpdmF0ZSBfbGFzdEFuaW06IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIGNvbWJvc3RlcDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbWJvdGltZXI6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgY29tYm9JbnRlcnZhbDogbnVtYmVyID0gMTtcblxuICAgIHB1YmxpYyBnZXQgbW92ZUF4aXMyRCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubW92ZUF4aXNYLCB0aGlzLm1vdmVBeGlzWSk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uKSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLkFuaW1hdGlvbiBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcblxuICAgICAgICB0aGlzLl9yaWdpZGJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmICghdGhpcy5fcmlnaWRib2R5KSBjb25zb2xlLndhcm4oYEFjdG9yQ29udHJvbGxlcjogQ29tcG9uZW50IGNjLlJpZ2lkQm9keSBtaXNzaW5nIG9uIG5vZGUgJHt0aGlzLm5vZGUubmFtZX1gKTtcbiAgICAgICAgbGV0IEtleUNvbnRyb2xsZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKS5nZXRDb21wb25lbnQoXCJLZXlib2FyZENvbnRyb2xcIik7XG4gICAgICAgIEtleUNvbnRyb2xsZXIub3BlbklucHV0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0ICYmIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2lkbGVBbmltU3RhdGUgPSB0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5pZGxlQW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlQW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKHRoaXMubW92ZUFuaW1hdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbVN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLnBsYXkodGhpcy5pZGxlQW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24ub24oJ2ZpbmlzaGVkJywgdGhpcy5vbkFuaW1GaW5pc2hlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuRGllKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNvbWJvc3RlcCA+IDApe1xuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyICs9IGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tYm90aW1lciA+PSB0aGlzLmNvbWJvSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnB1dFNvdXJjZSApIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluY29tYm8oKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUF4aXNYID0gdGhpcy5pbnB1dFNvdXJjZS5ob3Jpem9udGFsQXhpcztcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVBeGlzWSA9IHRoaXMuaW5wdXRTb3VyY2UudmVydGljYWxBeGlzO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMubW92ZUF4aXMyRC5tdWwodGhpcy5tb3ZlU3BlZWQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yaWdpZGJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmlnaWRib2R5LmxpbmVhclZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGlzX3BsYXlpbmc9ICh0aGlzLl9hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5fbGFzdEFuaW0pICYmIHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLl9sYXN0QW5pbSkuaXNQbGF5aW5nKVxuXG4gICAgICAgICAgICAgICAgLy8g54uA5oWL5qmf77ya56e75YuVIG9yIOmdnOatolxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVBeGlzWCAhPT0gMCB8fCB0aGlzLm1vdmVBeGlzWSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLldhbGs7XG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaTmui8uOWFpeabtOaWsOacneWQkVxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5tb3ZlQXhpc1gpID4gTWF0aC5hYnModGhpcy5tb3ZlQXhpc1kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNpbmcgPSB0aGlzLm1vdmVBeGlzWCA+IDAgPyBGYWNpbmdEaXJlY3Rpb24uUmlnaHQgOiBGYWNpbmdEaXJlY3Rpb24uTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhY2luZyA9IHRoaXMubW92ZUF4aXNZID4gMCA/IEZhY2luZ0RpcmVjdGlvbi5VcCA6IEZhY2luZ0RpcmVjdGlvbi5Eb3duO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNfcGxheWluZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc3dhbGtpbmcoKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuSWRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLy8g6YCZ6KOh5Y+v5Lul5qC55pOa5oyJ6Y216Ke455m85pS75pOK562J54uA5oWLXG4gICAgICAgICAgICAgICAgaWYoIWlzX3BsYXlpbmcgfHwgIXRoaXMuaW5jb21ibygpKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrPT09QnV0dG9uU3RhdGUuUHJlc3NlZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQXR0YWNrOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllclwiKS5wbGF5YXR0YWNrMXNvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5wdXRTb3VyY2UuYXR0YWNrMj09PUJ1dHRvblN0YXRlLlByZXNzZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5BdHRhY2syO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnBsYXlhdHRhY2syc291bmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5pbnB1dFNvdXJjZS5hdHRhY2szPT09QnV0dG9uU3RhdGUuUHJlc3NlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkF0dGFjazM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikucGxheWF0dGFjazNzb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRTb3VyY2UuZ2V0aHVydD09PUJ1dHRvblN0YXRlLlByZXNzZWQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLkh1cnQ7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLnRha2VEYW1hZ2UoNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0U291cmNlLl94S2V5ID0gQnV0dG9uU3RhdGUuSGVsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29tYm8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g54uA5oWLK+aWueWQkeaxuuWumuWLleeVq1xuICAgICAgICAgICAgICAgIGxldCBhbmltTmFtZSA9IHRoaXMuZ2V0QW5pbU5hbWUodGhpcy5fcGxheWVyU3RhdGUsIHRoaXMuX2ZhY2luZyk7XG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK9jb21ibyDni4DmhYsg5pKt5pS+5YuV55Wr55u05YiwIGNvbWJvIOe1kOadn1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24gJiYgYW5pbU5hbWUgJiYgYW5pbU5hbWUgIT09IHRoaXMuX2xhc3RBbmltICYmICF0aGlzLnN0b3B1cGRhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9sYXN0QW5pbSxhbmltTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5wbGF5KGFuaW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdEFuaW0gPSBhbmltTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fcGxheWVyU3RhdGUsdGhpcy5fbGFzdEFuaW0gICx0aGlzLmNvbWJvc3RlcCwgdGhpcy5jb21ib3RpbWVyKTtcblxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXRBbmltTmFtZShzdGF0ZTogUGxheWVyU3RhdGUsIGZhY2luZzogRmFjaW5nRGlyZWN0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkNvbWJvXzE6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuY29tYm9fcmlnaHRfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5jb21ib19sZWZ0XzE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuY29tYm9fdXBfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5jb21ib19kb3duXzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5XYWxrOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLndhbGtSaWdodEFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy53YWxrTGVmdEFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy53YWxrVXBBbmltYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMud2Fsa0Rvd25BbmltYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5JZGxlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZGxlQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQXR0YWNrOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5hdHRhY2tfbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5hdHRhY2tfdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkF0dGFjazI6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5SaWdodDogcmV0dXJuIHRoaXMuYXR0YWNrX3JpZ2h0XzI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5MZWZ0OiAgcmV0dXJuIHRoaXMuYXR0YWNrX2xlZnRfMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5hdHRhY2tfdXBfMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkRvd246ICByZXR1cm4gdGhpcy5hdHRhY2tfZG93bl8yO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5BdHRhY2szOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uUmlnaHQ6IHJldHVybiB0aGlzLmF0dGFja19yaWdodF8zO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmF0dGFja19sZWZ0XzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5VcDogICAgcmV0dXJuIHRoaXMuYXR0YWNrX3VwXzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2luZ0RpcmVjdGlvbi5Eb3duOiAgcmV0dXJuIHRoaXMuYXR0YWNrX2Rvd25fMztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuSHVydDpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5odXJ0X3JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uTGVmdDogIHJldHVybiB0aGlzLmh1cnRfbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlVwOiAgICByZXR1cm4gdGhpcy5odXJ0X3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmh1cnRfZG93bjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkRpZTpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLlJpZ2h0OiByZXR1cm4gdGhpcy5kZWF0aF9yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjaW5nRGlyZWN0aW9uLkxlZnQ6ICByZXR1cm4gdGhpcy5kZWF0aF9sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uVXA6ICAgIHJldHVybiB0aGlzLmRlYXRoX3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNpbmdEaXJlY3Rpb24uRG93bjogIHJldHVybiB0aGlzLmRlYXRoX2Rvd247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIHByaXZhdGUgb25BbmltRmluaXNoZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hcIik7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrIHx8XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMiB8fFxuICAgICAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazMgfHxcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID09PSBQbGF5ZXJTdGF0ZS5IdXJ0IHx8XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQ29tYm9fMSBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJTdGF0ZSA9IFBsYXllclN0YXRlLklkbGU7XG4gICAgICAgICAgICB0aGlzLl9sYXN0QW5pbSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgYW5pbU5hbWVzID0gW1xuICAgICAgICAgICAgdGhpcy5jb21ib191cF8xLFxuICAgICAgICAgICAgdGhpcy5jb21ib19kb3duXzEsXG4gICAgICAgICAgICB0aGlzLmNvbWJvX2xlZnRfMSxcbiAgICAgICAgICAgIHRoaXMuY29tYm9fcmlnaHRfMVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBhbmltTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlzUGxheWluZykgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpbmNvbWJvKCl7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQ29tYm9fMSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJTdGF0ZSA9PT1QbGF5ZXJTdGF0ZS5BdHRhY2sgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJvc3RlcCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNvbWJvdGltZXIgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5fcGxheWVyU3RhdGUgPT09IFBsYXllclN0YXRlLkF0dGFjazIgJiYgdGhpcy5jb21ib3N0ZXAgPT09IDEgJiYgdGhpcy5jb21ib3RpbWVyIDwgdGhpcy5jb21ib0ludGVydmFsKXtcbiAgICAgICAgICAgIHRoaXMuY29tYm9zdGVwID0gMjtcbiAgICAgICAgICAgIHRoaXMuY29tYm90aW1lciA9IDA7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9wbGF5ZXJTdGF0ZSA9PT0gUGxheWVyU3RhdGUuQXR0YWNrMyAmJiB0aGlzLmNvbWJvc3RlcCA9PT0gMiAmJiB0aGlzLmNvbWJvdGltZXIgPCB0aGlzLmNvbWJvSW50ZXJ2YWwpe1xuICAgICAgICAgICAgdGhpcy5jb21ib3N0ZXAgPSAzO1xuICAgICAgICAgICAgdGhpcy5jb21ib3RpbWVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllclN0YXRlID0gUGxheWVyU3RhdGUuQ29tYm9fMTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXN3YWxraW5nKCl7XG4gICAgICAgIGNvbnN0IGFuaW1OYW1lcyA9IFtcbiAgICAgICAgICAgIHRoaXMud2Fsa0Rvd25BbmltYXRpb24sdGhpcy53YWxrTGVmdEFuaW1hdGlvbix0aGlzLndhbGtSaWdodEFuaW1hdGlvbix0aGlzLndhbGtVcEFuaW1hdGlvblxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYW5pbU5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2FuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pc1BsYXlpbmcpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29kaWUoKXtcbiAgICAgICAgdGhpcy5fcGxheWVyU3RhdGUgPSBQbGF5ZXJTdGF0ZS5EaWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICBsZXQgTWdyID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgTWdyLkVuZEdhbWUoKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIGxldCBLZXlDb250cm9sbGVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikuZ2V0Q29tcG9uZW50KFwiS2V5Ym9hcmRDb250cm9sXCIpO1xuICAgICAgICAvL0tleUNvbnRyb2xsZXIuY2xvc2VJbnB1dCgpO1xuICAgIH1cblxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFXQztRQVZRLFVBQUksR0FBd0IsSUFBSSxDQUFDOztJQVUxQyxDQUFDO0lBUkMseUJBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBVmtCLFFBQVE7UUFENUIsT0FBTyxDQUFDLFVBQVUsQ0FBQztPQUNDLFFBQVEsQ0FXNUI7SUFBRCxlQUFDO0NBWEQsQUFXQyxDQVhxQyxFQUFFLENBQUMsU0FBUyxHQVdqRDtrQkFYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL1N1Y2Nlc3NQb3B1cC50c1xuZGVjbGFyZSBjb25zdCBjYzogYW55O1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWVPdmVyJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgcHVibGljIG9uT2s6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gY2MuZmluZChcIlJlc3RhcnRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICByZXN0YXJ0QnRuLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub25PaykgdGhpcy5vbk9rKCk7XG4gICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIFxuICB9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTWVudU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsbUJBQW1CO0FBSW5CO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0pDO1FBOUlVLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFlLEdBQWMsSUFBSSxDQUFDOztJQTJJM0QsQ0FBQztJQXpJRyx3QkFBTSxHQUFOO1FBQ0kscUNBQXFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRyxFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUFBLGlCQWlCQztRQWhCRyxzQkFBc0I7UUFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3hELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE9BQU87YUFDVjtZQUNELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFFN0IsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0QsbUNBQWlCLEdBQWpCO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDeEMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEcsU0FBUztRQUNULElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4RixPQUFPO1FBQ1AsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRGLGNBQWM7UUFDZCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSTtZQUFFLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUNqRSxZQUFZLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNqQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxJQUFHLFdBQVc7WUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNDQUFvQixHQUE1QjtRQUFBLGlCQTJCQztRQTFCRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDL0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBQ0Qsc0NBQXNDO1lBQ3RDLElBQU0sTUFBTSxHQUFHLEtBQWtCLENBQUM7WUFFbEMsMENBQTBDO1lBQzFDLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDN0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDN0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxlQUFlLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUVyQyw2REFBNkQ7WUFDN0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPO2FBQ1Y7WUFFRCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNJLG9DQUFvQztRQUNwQyxJQUFJLHFCQUFxQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVDLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0csbUVBQW1FO1FBQ25FLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQztRQUNuRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hELHFCQUFxQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkQsSUFBRyxNQUFNLEVBQUU7WUFDUCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBMUlvQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFBbUM7SUFMdEMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdKM0I7SUFBRCxjQUFDO0NBaEpELEFBZ0pDLENBaEpvQyxFQUFFLENBQUMsU0FBUyxHQWdKaEQ7a0JBaEpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBBdXRoTWFuYWdlciBmcm9tICcuL0F1dGhNYW5hZ2VyJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8vIEZpcmViYXNlIHY5KyDnmoTkvovlrZBcblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgVm9sdW1uVmFsdWU6IG51bWJlciA9IDAuNTtcbiAgICBwdWJsaWMgaXNTaWduaW5nVXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dGhDb21wOiBBdXRoTWFuYWdlciB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pIHN0YXJ0R2FtZUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gSG9vayB1cCBPcHRpb25CdXR0b24g4oaSIFNob3dTZXR0aW5nXG4gICAgICAgIGxldCBPcHRpb25CdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBPcHRpb25CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBPcHRpb25CdXR0b24uY29tcG9uZW50ID0gXCJNZW51TWdyXCI7XG4gICAgICAgIE9wdGlvbkJ1dHRvbi5oYW5kbGVyID0gXCJTaG93U2V0dGluZ1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tncm91bmQvT3B0aW9uQnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goT3B0aW9uQnV0dG9uKTtcbiAgICAgICAgY2MubG9nKFwiSXMgRmlyZWJhc2UgaW5pdGlhbGl6ZWQ/XCIsIHdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpO1xuICAgIH1cblxuICAgIFNob3dTZXR0aW5nKCkge1xuICAgICAgICAvLyBTZXR0aW5nIGlzIGEgcHJlZmFiXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TZXR0aW5nXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBTZXR0aW5nIHByZWZhYjogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ05vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgc2V0dGluZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICBzZXR0aW5nTm9kZS5zY2FsZVggPSAyO1xuICAgICAgICAgICAgc2V0dGluZ05vZGUuc2NhbGVZID0gMjtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoc2V0dGluZ05vZGUpO1xuICAgICAgICAgICAgc2V0dGluZ05vZGUubmFtZSA9IFwiU2V0dGluZ1wiO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0U2V0dGluZ0J1dHRvbigpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgaW5pdFNldHRpbmdCdXR0b24oKXtcbiAgICAgICAgLy9FeGl0U2V0dGluZ0J1dHRvbiBpcyBhIGJpdXR0b24gaW4gU2V0dGluZyBwcmVmYWJcbiAgICAgICAgbGV0IEV4aXRTZXR0aW5nQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBFeGl0U2V0dGluZ0J1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcbiAgICAgICAgRXhpdFNldHRpbmdCdXR0b24uaGFuZGxlciA9IFwiRXhpdFNldHRpbmdcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0V4aXRTZXR0aW5nXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goRXhpdFNldHRpbmdCdXR0b24pO1xuXG4gICAgICAgIC8vU2lnbiB1cFxuICAgICAgICBsZXQgU2lnblVwQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgU2lnblVwQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgU2lnblVwQnV0dG9uLmNvbXBvbmVudCA9IFwiTWVudU1nclwiO1xuICAgICAgICBTaWduVXBCdXR0b24uaGFuZGxlciA9IFwiU2lnblVwXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZy9TaWduVXBcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTaWduVXBCdXR0b24pO1xuXG4gICAgICAgIC8vTG9naW5cbiAgICAgICAgbGV0IExvZ2luQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgTG9naW5CdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBMb2dpbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcbiAgICAgICAgTG9naW5CdXR0b24uaGFuZGxlciA9IFwiTG9naW5cIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL0xvZ2luXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goTG9naW5CdXR0b24pO1xuXG4gICAgICAgIC8vVm9sdW1uc2xpZGVyXG4gICAgICAgIGxldCBWb2x1bW5zbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvVm9sdW1uL1ZvbHVtblNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgbGV0IHNhdmVkVm9sdW1uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVm9sdW1uVmFsdWVcIik7XG4gICAgICAgIGlmIChzYXZlZFZvbHVtbiAhPT0gbnVsbCkgVm9sdW1uc2xpZGVyLnByb2dyZXNzID0gTnVtYmVyKHNhdmVkVm9sdW1uKTtcbiAgICAgICAgZWxzZSBWb2x1bW5zbGlkZXIucHJvZ3Jlc3MgPSAwLjU7XG4gICAgICAgIFZvbHVtbnNsaWRlci5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25Wb2x1bW5DaGFuZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIEV4aXRTZXR0aW5nKCkge1xuICAgICAgICBsZXQgc2V0dGluZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmdcIik7XG4gICAgICAgIGlmKHNldHRpbmdOb2RlKSBzZXR0aW5nTm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25Wb2x1bW5DaGFuZ2Uoc2xpZGVyOiBjYy5TbGlkZXIpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpOyAvLyAwfjFcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLlZvbHVtblZhbHVlID0gc2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiLCB0aGlzLlZvbHVtblZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIFNpZ25VcCgpe1xuICAgICAgICB0aGlzLmlzU2lnbmluZ1VwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVuU2lnbnVwTG9naW5QYW5lbCgpO1xuICAgIH1cblxuICAgIExvZ2luKCkge1xuICAgICAgICB0aGlzLmlzU2lnbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3BlblNpZ251cExvZ2luUGFuZWwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5TaWdudXBMb2dpblBhbmVsKCkge1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvU2lnbnVwTG9naW5cIiwgY2MuUHJlZmFiLCAoZXJyLCBhc3NldCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFNpZ251cExvZ2luIHByZWZhYjpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXN0IHRoZSBsb2FkZWQgYXNzZXQgdG8gY2MuUHJlZmFiOlxuICAgICAgICBjb25zdCBwcmVmYWIgPSBhc3NldCBhcyBjYy5QcmVmYWI7XG5cbiAgICAgICAgLy8gTm93IGluc3RhbnRpYXRlIGEgTm9kZSBmcm9tIHRoYXQgcHJlZmFiXG4gICAgICAgIGNvbnN0IHNpZ251cExvZ2luTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIHNpZ251cExvZ2luTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNjYWxlWCA9IDAuNTtcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnNjYWxlWSA9IDAuNTtcbiAgICAgICAgc2lnbnVwTG9naW5Ob2RlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2V0dGluZ1wiKS5hZGRDaGlsZChzaWdudXBMb2dpbk5vZGUpO1xuICAgICAgICBzaWdudXBMb2dpbk5vZGUubmFtZSA9IFwiU2lnbnVwTG9naW5cIjtcblxuICAgICAgICAvLyBncmFiIHRoZSBBdXRoTWFuYWdlciBjb21wb25lbnQgZnJvbSB0aGUgbmV3bHnigJBjcmVhdGVkIE5vZGVcbiAgICAgICAgdGhpcy5hdXRoQ29tcCA9IHNpZ251cExvZ2luTm9kZS5nZXRDb21wb25lbnQoQXV0aE1hbmFnZXIpO1xuICAgICAgICBpZiAoIXRoaXMuYXV0aENvbXApIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiQXV0aE1hbmFnZXIgY29tcG9uZW50IG5vdCBmb3VuZCBvbiBTaWdudXBMb2dpbiBwcmVmYWIhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0U2lnbnVwTG9naW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFNpZ251cExvZ2luKCkge1xuICAgICAgICAvLyDigJxFeGl04oCdIGJ1dHRvbiB3aXJpbmcgKHVuY2hhbmdlZCnigKZcbiAgICAgICAgbGV0IEV4aXRTaWdudXBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIEV4aXRTaWdudXBMb2dpbkJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIEV4aXRTaWdudXBMb2dpbkJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVNZ3JcIjtcbiAgICAgICAgRXhpdFNpZ251cExvZ2luQnV0dG9uLmhhbmRsZXIgPSBcIkV4aXRTaWdudXBMb2dpblwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnbnVwTG9naW4vRXhpdFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKEV4aXRTaWdudXBMb2dpbkJ1dHRvbik7XG5cbiAgICAgICAgLy8g4oCcU2F2ZeKAnSBidXR0b24gbm93IGNhbGxzIGVpdGhlciBhdXRoQ29tcC5TaWduVXAgb3IgYXV0aENvbXAuTG9naW5cbiAgICAgICAgbGV0IFNhdmVTaWdudXBMb2dpbkJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIFNhdmVTaWdudXBMb2dpbkJ1dHRvbi50YXJnZXQgPSB0aGlzLmF1dGhDb21wIS5ub2RlO1xuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uY29tcG9uZW50ID0gXCJBdXRoTWFuYWdlclwiO1xuICAgICAgICBTYXZlU2lnbnVwTG9naW5CdXR0b24uaGFuZGxlciA9IHRoaXMuaXNTaWduaW5nVXAgPyBcIlNpZ25VcFwiIDogXCJMb2dpblwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NldHRpbmcvU2lnbnVwTG9naW4vU2F2ZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFNhdmVTaWdudXBMb2dpbkJ1dHRvbik7XG4gICAgfVxuXG4gICAgRXhpdFNpZ251cExvZ2luKCkge1xuICAgICAgICBsZXQgVF9Ob2RlID0gY2MuZmluZChcIkNhbnZhcy9TZXR0aW5nL1NpZ251cExvZ2luXCIpO1xuICAgICAgICBpZihUX05vZGUpIHtcbiAgICAgICAgICAgIFRfTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlU3RhcnRCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0R2FtZUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
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
        _this.openSound = null;
        // Called by Menu code when OK is clicked
        _this.onOk = null;
        return _this;
    }
    SuccessPopup.prototype.onLoad = function () {
        var _this = this;
        if (this.openSound) {
            cc.audioEngine.playEffect(this.openSound, false);
        }
        else {
            cc.error("SuccessPopup.openSound is not assigned!");
        }
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
    __decorate([
        property(cc.AudioClip)
    ], SuccessPopup.prototype, "openSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvU3VjY2Vzc1BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUJDO1FBbEJxQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUN2RCx5Q0FBeUM7UUFDbEMsVUFBSSxHQUF3QixJQUFJLENBQUM7O0lBYzFDLENBQUM7SUFaQyw2QkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFWQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3JCLElBQUksS0FBSSxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakJtQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFBK0I7SUFDL0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQTRCO0lBQ3RCO1FBQXZCLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUFnQztJQUhwQyxZQUFZO1FBRGhDLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDSCxZQUFZLENBbUJoQztJQUFELG1CQUFDO0NBbkJELEFBbUJDLENBbkJ5QyxFQUFFLENBQUMsU0FBUyxHQW1CckQ7a0JBbkJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvU3VjY2Vzc1BvcHVwLnRzXG5kZWNsYXJlIGNvbnN0IGNjOiBhbnk7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU3VjY2Vzc1BvcHVwJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1Y2Nlc3NQb3B1cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgbWVzc2FnZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgb3BlblNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAvLyBDYWxsZWQgYnkgTWVudSBjb2RlIHdoZW4gT0sgaXMgY2xpY2tlZFxuICBwdWJsaWMgb25PazogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIGlmICh0aGlzLm9wZW5Tb3VuZCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMub3BlblNvdW5kLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZXJyb3IoXCJTdWNjZXNzUG9wdXAub3BlblNvdW5kIGlzIG5vdCBhc3NpZ25lZCFcIik7XG4gICAgfVxuICAgIGNvbnN0IG9rQnRuID0gY2MuZmluZChcIk9LQnV0dG9uXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgb2tCdG4ubm9kZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vbk9rKSB0aGlzLm9uT2soKTtcbiAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0JsdWVTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUMvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQStVQztRQTdVRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRzdCLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUdqQyxlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsd0JBQWtCLEdBQVksS0FBSyxDQUFDLENBQUMsOEJBQThCO1FBRXBFLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBZSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFB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QUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxDQUFDO3FEQUN6QztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxDQUFDO3VEQUNyRDtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxDQUFDOzJEQUM5QztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDO2tEQUM5QjtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDOytDQUNqQztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9EQUFvRCxFQUFFLENBQUM7bURBQzVDO0lBekNmLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0ErVS9CO0lBQUQsa0JBQUM7Q0EvVUQsQUErVUMsQ0EvVXdDLEVBQUUsQ0FBQyxTQUFTLEdBK1VwRDtrQkEvVW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XG5lbnVtIFNsaW1lU3RhdGUge1xuICAgIElkbGUsXG4gICAgV2FsayxcbiAgICBSdW4sXG4gICAgQXR0YWNrXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVlU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxODA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbXVjaCBkYW1hZ2UgdGhlIHNsaW1lIGRvZXMgcGVyIGF0dGFja1wiIH0pXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIlNlY29uZHMgaW50byBhdHRhY2sgYW5pbSB0byBhcHBseSBkYW1hZ2VcIiB9KVxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJUb3RhbCBsZW5ndGggb2YgYXR0YWNrIGFuaW0gKHNlY29uZHMpXCIgfSlcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIGhlYWx0aDogbnVtYmVyID0gMjA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcblxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XG5cbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcblxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXA6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCBsZXZlbCA9IGNjLmZpbmQoXCJHYW1lbU1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikubGV2ZWw7XG4gICAgICAgIGxldCBNYXhYID0gKGxldmVsKjQgKyA2KSoxMDA7XG4gICAgICAgIGxldCBNYXhZID0gKGxldmVsKjIgKyAzKSoxMDA7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgLy9jb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvL3BhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0aW9uQXJlYVwiKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeCA9IHRoaXMuZGV0ZWN0aW9uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47IC8vIEFjdHVhbGx5IGRlYWQsIG5vdGhpbmcgaGFwcGVuc1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xuICAgICAgICAgICAgLy8gTGV0IHRoZSBkZWF0aCBhbmltYXRpb24gcGxheSwgYnV0IHNraXAgQUlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XG5cbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXG4gICAgICAgICAgICAvLz8gY2MuY29sb3IoMjU1LCAxNjUsIDApXG4gICAgICAgICAgICAvLzogY2MuY29sb3IoMjU1LCAwLCAwKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5zdHJva2UoKTtcblxuICAgICAgICB0aGlzLmF0dGFja0dmeC5jbGVhcigpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXNcbiAgICAgICAgICAgLy8gPyBjYy5jb2xvcigxMjgsIDAsIDEyOClcbiAgICAgICAgICAgLy8gOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LmNpcmNsZSgwLCAwLCBkcmF3QXR0YWNrUik7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICBpZiAoaW5BdHRhY2sgJiYgdGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5zdGFydEF0dGFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmF0dGFja0FuaW1EdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5EZXRlY3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuUnVuKSB0aGlzLnN0YXJ0UnVubmluZygpO1xuICAgICAgICAgICAgdGhpcy5ydW5Ub3dhcmRzUGxheWVyKGR0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuUnVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5JZGxlICYmIHRoaXMudGltZXIgPj0gdGhpcy5pZGxlVGltZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFdhbGtpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLldhbGspIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zID0gcG9zLmFkZChtb3ZlRGVsdGEpO1xuXG4gICAgICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0UG9zKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy53YWxrVGltZSkgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTGlmZShkZWx0YTogbnVtYmVyLCBocDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5saWZlYmFyKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gKGhwL3RoaXMubWF4SGVhbHRoKSo0MDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47IC8vIEFscmVhZHkgZGVhZCBvciBhbmltIHBsYXlpbmdcblxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBzbGltZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBjb25zdCBodXJ0QW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJCbHVlU2xpbWVIdXJ0UmlnaHRcIiA6IFwiQmx1ZVNsaW1lSHVydExlZnRcIilcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiQmx1ZVNsaW1lSHVydFVwXCIgOiBcIkJsdWVTbGltZUh1cnREb3duXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcblxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb0lkbGUoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiQmx1ZVNsaW1lSWRsZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJCbHVlU2xpbWVXYWxrUmlnaHRcIiA6IFwiQmx1ZVNsaW1lV2Fsa0xlZnRcIilcbiAgICAgICAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJCbHVlU2xpbWVXYWxrVXBcIiA6IFwiQmx1ZVNsaW1lV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcblxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkJsdWVTbGltZUF0dGFja1JpZ2h0XCIgOiBcIkJsdWVTbGltZUF0dGFja0xlZnRcIilcbiAgICAgICAgICAgIDogKGRpci55ID4gMCA/IFwiQmx1ZVNsaW1lQXR0YWNrVXBcIiA6IFwiQmx1ZVNsaW1lQXR0YWNrRG93blwiKTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hcHBseUF0dGFja0hpdCwgdGhpcy5hdHRhY2tIaXREZWxheSk7XG4gICAgfVxuXG4gICAgXG4gICAgcHJpdmF0ZSBhcHBseUF0dGFja0hpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHJldHVybjtcblxuICAgICAgICBjb25zdCBzbGltZVdvcmxkMyA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBzbGltZVdvcmxkMiA9IGNjLnYyKHNsaW1lV29ybGQzLngsIHNsaW1lV29ybGQzLnkpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMyA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBwbGF5ZXJXb3JsZDIgPSBjYy52MihwbGF5ZXJXb3JsZDMueCwgcGxheWVyV29ybGQzLnkpO1xuXG4gICAgICAgIGNvbnN0IGRpc3QgPSBzbGltZVdvcmxkMi5zdWIocGxheWVyV29ybGQyKS5tYWcoKTtcbiAgICAgICAgaWYgKGRpc3QgPD0gdGhpcy5hdHRhY2tSYWRpdXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbXAgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoUGxheWVyKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyQ29tcC50YWtlRGFtYWdlKHRoaXMuYXR0YWNrRGFtYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiQmx1ZVNsaW1lUnVuUmlnaHRcIiA6IFwiQmx1ZVNsaW1lUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJCbHVlU2xpbWVSdW5VcFwiIDogXCJCbHVlU2xpbWVSdW5Eb3duXCIpO1xuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3ZlRGVsdGEgPSBjYy52MihkaXIueCAqIHRoaXMucnVuU3BlZWQgKiBkdCwgZGlyLnkgKiB0aGlzLnJ1blNwZWVkICogZHQpO1xuICAgICAgICBjb25zdCBuZXh0UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKG1vdmVEZWx0YSk7XG4gICAgICAgIGlmIChuZXh0UG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dFBvcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSdW5EaXJlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHdvcmxkUCA9IHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBsb2NhbFAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFApO1xuICAgICAgICByZXR1cm4gY2MudjIobG9jYWxQLnggLSB0aGlzLm5vZGUueCwgbG9jYWxQLnkgLSB0aGlzLm5vZGUueSkubm9ybWFsaXplKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkJsdWVTbGltZURlYXRoUmlnaHRcIiA6IFwiQmx1ZVNsaW1lRGVhdGhMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkJsdWVTbGltZURlYXRoVXBcIiA6IFwiQmx1ZVNsaW1lRGVhdGhEb3duXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxLjApOyAvLyBtYXRjaCB0byB5b3VyIGFuaW1hdGlvbidzIGR1cmF0aW9uXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTG9naW5TaWduVXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFFbEYsaUNBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbi8vIGFzc2V0cy9zY3JpcHRzL0xvZ2luTWFuYWdlci50c1xuLyppbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vRmlyZWJhc2VNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVtYWlsRWRpdEJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwYXNzd29yZEVkaXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGluZm9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gIC8vIEVtYWlsIOiou+WGilxuICAgIG9uUmVnaXN0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5lbWFpbEVkaXRCb3guc3RyaW5nO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRFZGl0Qm94LnN0cmluZztcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4odXNlckNyZWRlbnRpYWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwi6Ki75YaK5oiQ5Yqf77yaXCIgKyB1c2VyQ3JlZGVudGlhbC51c2VyLmVtYWlsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwi6Ki75YaK5aSx5pWX77yaXCIgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLy8gRW1haWwg55m75YWlXG4gICAgb25Mb2dpbigpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsRWRpdEJveC5zdHJpbmc7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZEVkaXRCb3guc3RyaW5nO1xuICAgICAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4odXNlckNyZWRlbnRpYWwgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbmZvTGFiZWwuc3RyaW5nID0gXCLnmbvlhaXmiJDlip/vvJpcIiArIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIueZu+WFpeWkseaVl++8mlwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8vIEdvb2dsZSDnmbvlhaVcbiAgICBvbkdvb2dsZUxvZ2luKCkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgICAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFwiR29vZ2xlIOeZu+WFpeaIkOWKn++8mlwiICsgcmVzdWx0LnVzZXIuZW1haWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmluZm9MYWJlbC5zdHJpbmcgPSBcIkdvb2dsZSDnmbvlhaXlpLHmlZfvvJpcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0qL1xuXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxpdGllcy9aU29ydE9uTG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7O0dBR0c7QUFFSDtJQUF5QywrQkFBWTtJQUFyRDs7SUFlQSxDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLDRCQUFNLEdBQU47UUFDSSxLQUFpQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQWhDLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQVJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZS9CO0lBQUQsa0JBQUM7Q0FmRCxBQWVDLENBZndDLEVBQUUsQ0FBQyxTQUFTLEdBZXBEO2tCQWZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBldmVyeSBub2RlIGJlbG93IHRoZSBub2RlIGl0IGlzIGF0dGFjaGVkIHRvIHJlbmRlciBpbiBhIHdheSBcbiAqIHN1Y2ggdGhhdCBpdCBhcHBlYXJzIGJlaGluZCBub2RlcyB0aGF0IGFyZSBsb2NhdGVkIGJlbG93IGl0LlxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlNvcnRPbkxvYWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMDAwMCArIC1ub2RlLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdGFydCAoKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvQXV0aE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwSEM7UUF6SEMsc0RBQXNEO1FBQ3RELGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFDM0IsV0FBSyxHQUFlLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFbEIsVUFBSSxHQUFRLElBQUksQ0FBQzs7SUFrSDNCLENBQUM7SUFoSEMsNEJBQU0sR0FBTjtRQUFBLGlCQWdCQztRQWRDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7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QUFJLEdBQUc7Z0JBQ2YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF6SGtCLFdBQVc7UUFEL0IsT0FBTyxDQUFDLGFBQWEsQ0FBQztPQUNGLFdBQVcsQ0EwSC9CO0lBQUQsa0JBQUM7Q0ExSEQsQUEwSEMsQ0ExSHdDLEVBQUUsQ0FBQyxTQUFTLEdBMEhwRDtrQkExSG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvc2NyaXB0cy9BdXRoTWFuYWdlci50c1xuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbi8vIEVuc3VyZSBGaXJlYmFzZSBpcyBpbml0aWFsaXplZCBiZWZvcmUgdXNpbmcgaXRcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX2ZpcmViYXNlSW5pdGVkPzogYm9vbGVhbjtcbiAgfVxufVxuQGNjY2xhc3MoJ0F1dGhNYW5hZ2VyJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgLy8gVGhlc2UgZ2V0IHdpcmVkIGF1dG9tYXRpY2FsbHkgYnkgZmluZCgpIGluIG9uTG9hZCgpXG4gIHVzZXJuYW1lRUI6IGNjLkVkaXRCb3ggPSBudWxsO1xuICBlbWFpbEVCOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgcHdkRUI6IGNjLkVkaXRCb3ggPSBudWxsO1xuICBzYXZlQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBleGl0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIHByaXZhdGUgYXV0aDogYW55ID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG5cbiAgICB0aGlzLnVzZXJuYW1lRUIgPSBjYy5maW5kKFwiVXNlck5hbWVcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgdGhpcy5lbWFpbEVCICAgID0gY2MuZmluZChcIkVtYWlsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xuICAgIHRoaXMucHdkRUIgICAgICA9IGNjLmZpbmQoXCJQYXNzd29yZFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcblxuICAgIHRoaXMuc2F2ZUJ0biA9IGNjLmZpbmQoXCJTYXZlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgdGhpcy5leGl0QnRuID0gY2MuZmluZChcIkV4aXRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB0aGlzLnNhdmVCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU2F2ZUNsaWNrZWQsIHRoaXMpO1xuICAgIHRoaXMuZXhpdEJ0bi5ub2RlLm9uKCdjbGljaycsICgpID0+IHRoaXMubm9kZS5kZXN0cm95KCksIHRoaXMpO1xuXG4gICAgLy8gMykgSW5pdGlhbGl6ZSBGaXJlYmFzZSBBdXRoXG4gICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XG4gICAgICBjYy5lcnJvcihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZCEgTWFrZSBzdXJlIEZpcmViYXNlSW5pdCBpcyBpbiB5b3VyIHNjZW5lLlwiKTtcbiAgICB9XG4gICAgdGhpcy5hdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNhdmVDbGlja2VkKCkge1xuICAgIGxldCBpc1NpZ25pbmdVcCA9IGNjLmZpbmQoXCJDYW52YXMvTWVudU1nclwiKS5nZXRDb21wb25lbnQoXCJNZW51TWdyXCIpLmlzU2lnbmluZ1VwO1xuICAgIGlmIChpc1NpZ25pbmdVcCkgdGhpcy5zaWdudXAoKTtcbiAgICBlbHNlIHRoaXMubG9naW4oKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IGVtYWlsICAgID0gdGhpcy5lbWFpbEVCLnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICF1c2VybmFtZSkge1xuICAgICAgY2Mud2FybihcIkFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIDQpIENyZWF0ZSB1c2VyIGFuZCBzZXQgZGlzcGxheU5hbWVcbiAgIFxuICAgIHRoaXMuYXV0aFxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigodXNlckNyZWQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNyZWQudXNlci51cGRhdGVQcm9maWxlKHsgZGlzcGxheU5hbWU6IHVzZXJuYW1lIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY2MubG9nKHRleHQgKyBcIiBzdWNjZWVkZWQ6XCIsIHVzZXJuYW1lKTtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAodGV4dCArIFwiIFN1Y2Nlc3NmdWxcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjYy5lcnJvcih0ZXh0ICsgXCIgZXJyb3I6XCIsIGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2lnbnVwKCl7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRUIuc3RyaW5nLnRyaW0oKTtcbiAgICBjb25zdCBlbWFpbCAgICA9IHRoaXMuZW1haWxFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wd2RFQi5zdHJpbmc7XG5cbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhdXNlcm5hbWUpIHtcbiAgICAgIGNjLndhcm4oXCJBbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyA0KSBDcmVhdGUgdXNlciBhbmQgc2V0IGRpc3BsYXlOYW1lXG4gICAgdGhpcy5hdXRoXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ3JlZC51c2VyLnVwZGF0ZVByb2ZpbGUoeyBkaXNwbGF5TmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjYy5sb2coXCJTaWdudXAgc3VjY2VlZGVkOlwiLCB1c2VybmFtZSk7XG4gICAgICAgIHRoaXMuc2hvd1BvcHVwKFwiU2lnbnVwIFN1Y2Nlc3NmdWxcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjYy5lcnJvcihcIlNpZ251cCBlcnJvcjpcIiwgZXJyLmNvZGUsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoXCJcXG5TaWdudXAgRmFpbGVkOiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbG9naW4oKXtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVFQi5zdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IGVtYWlsICAgID0gdGhpcy5lbWFpbEVCLnN0cmluZy50cmltKCk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnB3ZEVCLnN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICF1c2VybmFtZSkge1xuICAgICAgY2Mud2FybihcIkFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZDogYW55KSA9PiB7XG4gICAgICBjYy5sb2coXCJMb2dpbiBzdWNjZWVkZWQ6XCIsIHVzZXJuYW1lKTtcbiAgICAgIHRoaXMuc2hvd1BvcHVwKFwiXFxuTG9naW4gU3VjY2Vzc2Z1bFwiKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgIGNjLmVycm9yKFwiTG9naW4gZXJyb3I6XCIsIGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLnNob3dQb3B1cChcIlxcbkxvZ2luIEZhaWxlZDogXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNob3dQb3B1cChtc2c6IHN0cmluZykge1xuICAgIC8vIExvYWQgYW5kIGluc3RhbnRpYXRlIFN1Y2Nlc3NQb3B1cFxuICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9TdWNjZXNzUG9wdXBcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFN1Y2Nlc3NQb3B1cDpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9wdXBOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgIHBvcHVwTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgIHBvcHVwTm9kZS56SW5kZXggPSAyMDAwO1xuICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChwb3B1cE5vZGUpO1xuXG4gICAgICBjb25zdCBwb3B1cENvbXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFwiU3VjY2Vzc1BvcHVwXCIpIGFzIGFueTtcbiAgICAgIHBvcHVwQ29tcC5tZXNzYWdlTGFiZWwuc3RyaW5nID0gbXNnO1xuXG4gICAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIE9LIOKGkiBkZXN0cm95IHNpZ251cCBVSVxuICAgICAgcG9wdXBDb21wLm9uT2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xlYWRlcmJvYXJkTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDL0IsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFJbEM7SUFBZ0Qsc0NBQVk7SUFBNUQ7O0lBb0RBLENBQUM7SUFsREMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztZQUM1RixPQUFPO1NBQ1I7SUFDSCxDQUFDO0lBRUQseUNBQXlDO0lBQ2xDLHlDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDL0IsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ2hFLE9BQU87U0FDUjtRQUVELElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDcEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTO29CQUN2QyxZQUFZLEVBQUUsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQXdCLElBQUksQ0FBQyxXQUFXLGtCQUFhLEtBQU8sQ0FBQyxDQUFDO2FBQ3RFO1FBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUVBQWlFO0lBQzFELDRDQUFlLEdBQXRCLFVBQXVCLEtBQWtCO1FBQWxCLHNCQUFBLEVBQUEsVUFBa0I7UUFDdkMsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2FBQ3pCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO2FBQy9CLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixHQUFHLEVBQUU7YUFDTCxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ2xCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsRUFBRSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsUUFBUSxnQkFBVyxJQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7Z0JBQ3ZELHlEQUF5RDtZQUMzRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5Ea0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FvRHRDO0lBQUQseUJBQUM7Q0FwREQsQUFvREMsQ0FwRCtDLEVBQUUsQ0FBQyxTQUFTLEdBb0QzRDtrQkFwRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL0xlYWRlcmJvYXJkTWFuYWdlci50c1xuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyYm9hcmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICBvbkxvYWQoKSB7XG4gICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XG4gICAgICBjYy5lcnJvcihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZC4gTWFrZSBzdXJlIEZpcmViYXNlSW5pdC50cyBpcyBpbiB0aGUgc2NlbmUgYW5kIGFjdGl2ZS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbCB0aGlzIHdoZW4gcGxheWVyIGZpbmlzaGVzIGEgbGV2ZWxcbiAgcHVibGljIHNhdmVQcm9ncmVzcyhsZXZlbDogbnVtYmVyKSB7XG4gICAgY29uc3QgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGNjLndhcm4oXCJObyBsb2dnZWQtaW4gdXNlcjsgY2Fubm90IHNhdmUgbGVhZGVyYm9hcmQgcHJvZ3Jlc3MuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgY29uc3QgdXNlclJlZiA9IGRiLmNvbGxlY3Rpb24oXCJsZWFkZXJib2FyZFwiKS5kb2ModXNlci51aWQpO1xuXG4gICAgdXNlclJlZi5nZXQoKS50aGVuKGRvYyA9PiB7XG4gICAgICBjb25zdCBwcmV2ID0gZG9jLmV4aXN0cyA/IGRvYy5kYXRhKCkuaGlnaGVzdExldmVsIDogMDtcbiAgICAgIGlmIChsZXZlbCA+IHByZXYpIHtcbiAgICAgICAgdXNlclJlZi5zZXQoe1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgIGhpZ2hlc3RMZXZlbDogbGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvZyhgUHJvZ3Jlc3MgdXBkYXRlZCBmb3IgJHt1c2VyLmRpc3BsYXlOYW1lfSB0byBsZXZlbCAke2xldmVsfWApO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjYy5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBsZWFkZXJib2FyZDpcIiwgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhbGwgdGhpcyB0byBkaXNwbGF5IHRvcCBwbGF5ZXJzIChlLmcuLCBpbiBsZWFkZXJib2FyZCBzY3JlZW4pXG4gIHB1YmxpYyBsb2FkTGVhZGVyYm9hcmQobGltaXQ6IG51bWJlciA9IDEwKSB7XG4gICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICBkYi5jb2xsZWN0aW9uKFwibGVhZGVyYm9hcmRcIilcbiAgICAgIC5vcmRlckJ5KFwiaGlnaGVzdExldmVsXCIsIFwiZGVzY1wiKVxuICAgICAgLmxpbWl0KGxpbWl0KVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihzbmFwc2hvdCA9PiB7XG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICBjYy5sb2coYCR7ZGF0YS51c2VybmFtZX06IExldmVsICR7ZGF0YS5oaWdoZXN0TGV2ZWx9YCk7XG4gICAgICAgICAgLy8gWW91IGNhbiBhZGQgbG9naWMgaGVyZSB0byBwb3B1bGF0ZSB5b3VyIGxlYWRlcmJvYXJkIFVJXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGxlYWRlcmJvYXJkOlwiLCBlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0dyZWVuU2xpbWVBSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxvQ0FBK0I7QUFDL0IsSUFBSyxVQUtKO0FBTEQsV0FBSyxVQUFVO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLDJDQUFJLENBQUE7SUFDSix5Q0FBRyxDQUFBO0lBQ0gsK0NBQU0sQ0FBQTtBQUNWLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyVUM7UUF6VUcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUczQixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUc5QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUc3Qix3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFHakMsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLHdCQUFrQixHQUFZLEtBQUssQ0FBQyxDQUFDLDhCQUE4QjtRQUVwRSxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGdCQUFVLEdBQWUsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN6QyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxrQkFBWSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBU3BDLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLHVCQUFpQixHQUFXLEVBQUUsQ0FBQzs7SUErUTNDLENBQUM7SUE3UUcsNkJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFZLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELGdFQUFnRTtRQUNoRSwwQkFBMEI7UUFDMUIsOENBQThDO1FBQzlDLDRDQUE0QztRQUM1QyxxQkFBcUI7UUFFckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCx5QkFBeUI7U0FDNUI7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sQ0FBQyxpQ0FBaUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDekIsNENBQTRDO1lBQzVDLE9BQU87U0FDVjtRQUVELElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEYsWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU87YUFDbkMsb0JBQW9CLENBQ2pCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDLENBQ3BFLENBQUM7UUFDTixJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuRSxJQUFNLGNBQWMsR0FBRyxjQUFjLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztRQUUzRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixrQ0FBa0M7UUFDbkMsdUVBQXVFO1FBQ3RFLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsOENBQThDO1FBQzlDLDZCQUE2QjtRQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QixnRUFBZ0U7UUFDaEUsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QiwyQ0FBMkM7UUFDM0MsMEJBQTBCO1FBRTFCLElBQU0sUUFBUSxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLGNBQWMsQ0FBQztRQUN4RSxJQUFNLFFBQVEsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxjQUFjLENBQUM7UUFFckUsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7WUFDRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsR0FBRztnQkFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDVjthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRTtZQUNyQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FDekMsQ0FBQztZQUNGLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbkMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9CLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBRU8saUNBQVUsR0FBbEIsVUFBbUIsS0FBYSxFQUFFLEVBQVU7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUMsRUFBRSxDQUFDO1FBQzVDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUMzQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBVSxHQUFqQixVQUFrQixNQUFjO1FBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQUUsT0FBTyxDQUFDLCtCQUErQjtRQUVuRixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEM7U0FDSjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSwyQkFBSSxHQUFYLFVBQVksTUFBYztRQUN0QixJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTywwQkFBRyxHQUFYO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVPLGdDQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2hDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztZQUN6RSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sa0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRTVCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBR08scUNBQWMsR0FBdEI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRWxELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZGLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0QsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQUVPLHVDQUFnQixHQUF4QixVQUF5QixFQUFVO1FBQy9CLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM5QjtRQUNELElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEYsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sc0NBQWUsR0FBdkI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pGLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyx5Q0FBa0IsR0FBMUIsVUFBMkIsU0FBa0I7UUFBN0MsaUJBY0M7UUFiRyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLHFDQUFxQztJQUNsRCxDQUFDO0lBeFVEO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLENBQUM7bURBQ3ZDO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLENBQUM7a0RBQ3ZDO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdEQUF3RCxFQUFFLENBQUM7a0RBQzNEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFEQUFxRCxFQUFFLENBQUM7a0RBQ3hEO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLENBQUM7c0RBQ3RDO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLENBQUM7eURBQzVCO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUM7c0RBQzdCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLENBQUM7c0RBQ3pDO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLENBQUM7d0RBQ3JEO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLENBQUM7NERBQzlDO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7bURBQzlCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7Z0RBQ2pDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQztvREFDNUM7SUF6Q2YsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJVaEM7SUFBRCxtQkFBQztDQTNVRCxBQTJVQyxDQTNVeUMsRUFBRSxDQUFDLFNBQVMsR0EyVXJEO2tCQTNVb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcbmVudW0gU2xpbWVTdGF0ZSB7XG4gICAgSWRsZSxcbiAgICBXYWxrLFxuICAgIFJ1bixcbiAgICBBdHRhY2tcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWVuU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNTA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbXVjaCBkYW1hZ2UgdGhlIHNsaW1lIGRvZXMgcGVyIGF0dGFja1wiIH0pXG4gICAgYXR0YWNrRGFtYWdlOiBudW1iZXIgPSAxMjtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIlNlY29uZHMgaW50byBhdHRhY2sgYW5pbSB0byBhcHBseSBkYW1hZ2VcIiB9KVxuICAgIGF0dGFja0hpdERlbGF5OiBudW1iZXIgPSAwLjM7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogXCJUb3RhbCBsZW5ndGggb2YgYXR0YWNrIGFuaW0gKHNlY29uZHMpXCIgfSlcbiAgICBhdHRhY2tBbmltRHVyYXRpb246IG51bWJlciA9IDEuMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiTWF4aW11bSBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBtYXhIZWFsdGg6IG51bWJlciA9IDE1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJDdXJyZW50IGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIGhlYWx0aDogbnVtYmVyID0gMTU7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxpZmViYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJWZXJ0aWNhbCBvZmZzZXQgb2YgaGVhbHRoIGJhciBhYm92ZSBzbGltZSAocGl4ZWxzKVwiIH0pXG4gICAgcHJpdmF0ZSBiYXJPZmZzZXRZOiBudW1iZXIgPSAxMDtcblxuICAgIHByaXZhdGUgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0RlYXRoQW5pbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gTkVXOiBUcmFja3MgZGVhdGggYW5pbWF0aW9uXG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGU6IFNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIHByaXZhdGUgcGF0cm9sQ2VudGVyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XG5cbiAgICBwcml2YXRlIGJvdW5kYXJ5Tm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25Ob2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbkdmeCE6IGNjLkdyYXBoaWNzO1xuICAgIHByaXZhdGUgYXR0YWNrTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBhdHRhY2tHZnghOiBjYy5HcmFwaGljcztcblxuICAgIHByaXZhdGUgYW5pbSE6IGNjLkFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGN1cnJlbnRSdW5DbGlwOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXA6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgLy9jb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvL3BhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0aW9uQXJlYVwiKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeCA9IHRoaXMuZGV0ZWN0aW9uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIDQwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSByZXR1cm47IC8vIEFjdHVhbGx5IGRlYWQsIG5vdGhpbmcgaGFwcGVuc1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGhBbmltUGxheWluZykge1xuICAgICAgICAgICAgLy8gTGV0IHRoZSBkZWF0aCBhbmltYXRpb24gcGxheSwgYnV0IHNraXAgQUlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYWxQbGF5ZXJQb3MgPSB0aGlzLm5vZGUucGFyZW50IVxuICAgICAgICAgICAgLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyIS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllciEucG9zaXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXN0RnJvbUNlbnRlciA9IGxvY2FsUGxheWVyUG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckluUGF0cm9sID0gZGlzdEZyb21DZW50ZXIgPD0gdGhpcy5wYXRyb2xSYWRpdXM7XG5cbiAgICAgICAgY29uc3QgZHJhd0RldGVjdFIgPSBNYXRoLm1pbih0aGlzLmRldGVjdGlvblJhZGl1cywgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG5cbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgIC8vIHRoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguc3Ryb2tlQ29sb3IgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5hdHRhY2tSYWRpdXNcbiAgICAgICAgLy8gICAgPyBjYy5jb2xvcigxMjgsIDAsIDEyOClcbiAgICAgICAgLy8gICAgOiBjYy5jb2xvcigwLCAwLCAyNTUpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LmNpcmNsZSgwLCAwLCBkcmF3QXR0YWNrUik7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZnguc3Ryb2tlKCk7XG5cbiAgICAgICAgY29uc3QgaW5EZXRlY3QgPSBkaXN0VG9QbGF5ZXIgPD0gdGhpcy5kZXRlY3Rpb25SYWRpdXMgJiYgcGxheWVySW5QYXRyb2w7XG4gICAgICAgIGNvbnN0IGluQXR0YWNrID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuXG4gICAgICAgIGlmIChpbkF0dGFjayAmJiB0aGlzLnNsaW1lU3RhdGUgIT09IFNsaW1lU3RhdGUuQXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXR0YWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuYXR0YWNrQW5pbUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLklkbGUgJiYgdGhpcy50aW1lciA+PSB0aGlzLmlkbGVUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2Fsa2luZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuV2Fsaykge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlRGVsdGEgPSBjYy52MihcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy53YWxrU3BlZWQgKiBkdCxcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy53YWxrU3BlZWQgKiBkdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3MgPSBwb3MuYWRkKG1vdmVEZWx0YSk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0UG9zLnN1Yih0aGlzLnBhdHJvbENlbnRlcikubWFnKCkgPiB0aGlzLnBhdHJvbFJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVMaWZlKGRlbHRhOiBudW1iZXIsIGhwOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpZmViYXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5saWZlYmFyLndpZHRoID0gKGhwL3RoaXMubWF4SGVhbHRoKSo0MDtcbiAgICAgICAgaWYgKGhwIDw9IDEwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47IC8vIEFscmVhZHkgZGVhZCBvciBhbmltIHBsYXlpbmdcblxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBzbGltZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBjb25zdCBodXJ0QW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlZW5TbGltZUh1cnRSaWdodFwiIDogXCJHcmVlZW5TbGltZUh1cnRMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVlblNsaW1lSHVydFVwXCIgOiBcIkdyZWVlblNsaW1lSHVydERvd25cIik7XG5cbiAgICAgICAgdGhpcy5hbmltLnBsYXkoaHVydEFuaW0pO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gMDtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgtYW1vdW50LCB0aGlzLmhlYWx0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhlYWwoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiB0aGlzLm1heEhlYWx0aCkgdGhpcy5oZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKGFtb3VudCwgdGhpcy5oZWFsdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGllKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFRvSWRsZSgpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJHcmVlZW5TbGltZUlkbGVcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFdhbGtpbmcoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuV2FsaztcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjIoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSxcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xXG4gICAgICAgICkubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/ICh0aGlzLmRpcmVjdGlvbi54ID4gMCA/IFwiR3JlZWVuU2xpbWVXYWxrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVXYWxrTGVmdFwiKVxuICAgICAgICAgICAgOiAodGhpcy5kaXJlY3Rpb24ueSA+IDAgPyBcIkdyZWVlblNsaW1lV2Fsa1VwXCIgOiBcIkdyZWVlblNsaW1lV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRBdHRhY2tDbGlwID0gXCJcIjtcblxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmdldFJ1bkRpcmVjdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlwID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVlblNsaW1lQXR0YWNrUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVBdHRhY2tMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVlblNsaW1lQXR0YWNrVXBcIiA6IFwiR3JlZWVuU2xpbWVBdHRhY2tEb3duXCIpO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShjbGlwKTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmFwcGx5QXR0YWNrSGl0LCB0aGlzLmF0dGFja0hpdERlbGF5KTtcbiAgICB9XG5cbiAgICBcbiAgICBwcml2YXRlIGFwcGx5QXR0YWNrSGl0KCkge1xuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlICE9PSBTbGltZVN0YXRlLkF0dGFjaykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNsaW1lV29ybGQzID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHNsaW1lV29ybGQyID0gY2MudjIoc2xpbWVXb3JsZDMueCwgc2xpbWVXb3JsZDMueSk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyV29ybGQzID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHBsYXllcldvcmxkMiA9IGNjLnYyKHBsYXllcldvcmxkMy54LCBwbGF5ZXJXb3JsZDMueSk7XG5cbiAgICAgICAgY29uc3QgZGlzdCA9IHNsaW1lV29ybGQyLnN1YihwbGF5ZXJXb3JsZDIpLm1hZygpO1xuICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudChQbGF5ZXIpO1xuICAgICAgICAgICAgaWYgKHBsYXllckNvbXApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDb21wLnRha2VEYW1hZ2UodGhpcy5hdHRhY2tEYW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBydW5Ub3dhcmRzUGxheWVyKGR0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlZW5TbGltZVJ1blJpZ2h0XCIgOiBcIkdyZWVlblNsaW1lUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlZW5TbGltZVJ1blVwXCIgOiBcIkdyZWVlblNsaW1lUnVuRG93blwiKTtcbiAgICAgICAgaWYgKGNsaXAgIT09IHRoaXMuY3VycmVudFJ1bkNsaXApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IGNsaXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92ZURlbHRhID0gY2MudjIoZGlyLnggKiB0aGlzLnJ1blNwZWVkICogZHQsIGRpci55ICogdGhpcy5ydW5TcGVlZCAqIGR0KTtcbiAgICAgICAgY29uc3QgbmV4dFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChtb3ZlRGVsdGEpO1xuICAgICAgICBpZiAobmV4dFBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpID4gdGhpcy5wYXRyb2xSYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5leHRQb3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UnVuRGlyZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB3b3JsZFAgPSB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIGNvbnN0IGRlYXRoQW5pbSA9IE1hdGguYWJzKGRpcmVjdGlvbi54KSA+IE1hdGguYWJzKGRpcmVjdGlvbi55KVxuICAgICAgICAgICAgPyAoZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlZW5TbGltZURlYXRoUmlnaHRcIiA6IFwiR3JlZWVuU2xpbWVEZWF0aExlZnRcIilcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiR3JlZWVuU2xpbWVEZWF0aFVwXCIgOiBcIkdyZWVlblNsaW1lRGVhdGhEb3duXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxLjApOyAvLyBtYXRjaCB0byB5b3VyIGFuaW1hdGlvbidzIGR1cmF0aW9uXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0xhdmFTbGltZUFJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMs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LEVBQUUsQ0FBQztxREFDN0I7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsaURBQWlELEVBQUUsQ0FBQzt5REFDNUM7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQztxREFDMUI7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQztrREFDOUI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzsrQ0FDakM7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvREFBb0QsRUFBRSxDQUFDO21EQUM1QztJQXRDZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaVYvQjtJQUFELGtCQUFDO0NBalZELEFBaVZDLENBalZ3QyxFQUFFLENBQUMsU0FBUyxHQWlWcEQ7a0JBalZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xuXG5lbnVtIFNsaW1lU3RhdGUge1xuICAgIElkbGUsXG4gICAgV2FsayxcbiAgICBSdW4sXG4gICAgQXR0YWNrXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhU2xpbWVBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJTbGltZSB3YWxrIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICB3YWxrU3BlZWQ6IG51bWJlciA9IDEyMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgcnVuIHNwZWVkIGluIHBpeGVscyBwZXIgc2Vjb25kXCIgfSlcbiAgICBydW5TcGVlZDogbnVtYmVyID0gMjQwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgc3RheXMgaWRsZSBiZWZvcmUgd2Fsa2luZyAoc2Vjb25kcylcIiB9KVxuICAgIGlkbGVUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJIb3cgbG9uZyB0aGUgc2xpbWUgd2Fsa3MgaW4gb25lIGRpcmVjdGlvbiAoc2Vjb25kcylcIiB9KVxuICAgIHdhbGtUaW1lOiBudW1iZXIgPSA1O1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJQYXRyb2wgcmFkaXVzIGZyb20gc3RhcnQgcG9pbnQgKHBpeGVscylcIiB9KVxuICAgIHBhdHJvbFJhZGl1czogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJEZXRlY3Rpb24gY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgZGV0ZWN0aW9uUmFkaXVzOiBudW1iZXIgPSAxNzA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkF0dGFjayBjaXJjbGUgcmFkaXVzIChwaXhlbHMpXCIgfSlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDgwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJUaW1lIHRvIHdhaXQgYmVmb3JlIHBlcmZvcm1pbmcgYXR0YWNrIChzZWNvbmRzKVwiIH0pXG4gICAgdGltZUJlZm9yZUF0dGFjazogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGFtYWdlIGRlYWx0IGJ5IHRoZSBhdHRhY2tcIiB9KVxuICAgIGF0dGFja0RhbWFnZTogbnVtYmVyID0gMTM7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIk1heGltdW0gaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXG4gICAgbWF4SGVhbHRoOiBudW1iZXIgPSAxMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiQ3VycmVudCBoZWFsdGggb2YgdGhlIHNsaW1lXCIgfSlcbiAgICBoZWFsdGg6IG51bWJlciA9IDEwO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBsaWZlYmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVmVydGljYWwgb2Zmc2V0IG9mIGhlYWx0aCBiYXIgYWJvdmUgc2xpbWUgKHBpeGVscylcIiB9KVxuICAgIHByaXZhdGUgYmFyT2Zmc2V0WTogbnVtYmVyID0gNTA7XG5cbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7XG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb24gPSBjYy52MigwLCAwKTtcbiAgICBwcml2YXRlIHBhdHJvbENlbnRlciA9IGNjLnYyKDAsIDApO1xuXG4gICAgcHJpdmF0ZSBib3VuZGFyeU5vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgZGV0ZWN0aW9uTm9kZSE6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBkZXRlY3Rpb25HZnghOiBjYy5HcmFwaGljcztcbiAgICBwcml2YXRlIGF0dGFja05vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgYXR0YWNrR2Z4ITogY2MuR3JhcGhpY3M7XG5cbiAgICBwcml2YXRlIGFuaW0hOiBjYy5BbmltYXRpb247XG4gICAgcHJpdmF0ZSBjdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgcHJpdmF0ZSBjdXJyZW50QXR0YWNrQ2xpcCA9IFwiXCI7XG5cbiAgICBwcml2YXRlIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNEZWF0aEFuaW1QbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL01hcE1hbmFnZXIvQWN0b3JzL1BsYXllclwiKSBhcyBjYy5Ob2RlO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyKSBjYy5lcnJvcihcIlBsYXllciBub2RlIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pITtcbiAgICAgICAgdGhpcy5wYXRyb2xDZW50ZXIgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5jbG9uZSgpO1xuXG4gICAgICAgIC8vIERyYXcgcGF0cm9sIGJvdW5kYXJ5XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlID0gbmV3IGNjLk5vZGUoXCJQYXRyb2xCb3VuZGFyeVwiKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyeU5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudCE7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnNldFBvc2l0aW9uKHRoaXMucGF0cm9sQ2VudGVyKTtcbiAgICAgICAgLy9jb25zdCBwYXRyb2xHZnggPSB0aGlzLmJvdW5kYXJ5Tm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvL3BhdHJvbEdmeC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDAsIDI1NSwgMCk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LmNpcmNsZSgwLCAwLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIC8vcGF0cm9sR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIERldGVjdGlvbiBhcmVhXG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZSA9IG5ldyBjYy5Ob2RlKFwiRGV0ZWN0aW9uQXJlYVwiKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25Ob2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeCA9IHRoaXMuZGV0ZWN0aW9uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmRldGVjdGlvbkdmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIC8vIEF0dGFjayBhcmVhXG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXR0YWNrQXJlYVwiKTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5hdHRhY2tOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLmF0dGFja0dmeCA9IHRoaXMuYXR0YWNrTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmF0dGFja0dmeC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgIC8vIEhlYWx0aCBiYXIgc2V0dXBcbiAgICAgICAgaWYgKHRoaXMubGlmZWJhcikge1xuICAgICAgICAgICAgLy90aGlzLmxpZmViYXIuc2V0UG9zaXRpb24oMCwgdGhpcy5ub2RlLmhlaWdodCAvIDIgKyB0aGlzLmJhck9mZnNldFkpO1xuICAgICAgICAgICAgLy90aGlzLnVwZGF0ZUxpZmUoMCwgNDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICAvLyBJZiBhbHJlYWR5IG1hcmtlZCBkZWFkLCBza2lwIEFJXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHtcbiAgICAgICAgICAgIC8vIExldCBkZWF0aCBhbmltYXRpb24gcGxheTsgZG8gbm90aGluZyBlbHNlIHVudGlsIGl0J3Mgb3ZlclxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMSkgY29tcHV0ZSBkaXN0YW5jZSB0byBwbGF5ZXJcbiAgICAgICAgbGV0IGRpc3RUb1BsYXllciA9IEluZmluaXR5O1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaW1lVyAgPSB0aGlzLm5vZGUucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclcgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBkaXN0VG9QbGF5ZXIgPSBzbGltZVcuc3ViKHBsYXllclcpLm1hZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMikgY2hlY2sgaWYgcGxheWVyIGlzIHN0aWxsIHdpdGhpbiBwYXRyb2wgcmFkaXVzXG4gICAgICAgIGNvbnN0IGxvY2FsUGxheWVyUG9zID0gdGhpcy5ub2RlLnBhcmVudCFcbiAgICAgICAgICAgIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciEucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIhLnBvc2l0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGlzdEZyb21DZW50ZXIgPSBsb2NhbFBsYXllclBvcy5zdWIodGhpcy5wYXRyb2xDZW50ZXIpLm1hZygpO1xuICAgICAgICBjb25zdCBwbGF5ZXJJblBhdHJvbCA9IGRpc3RGcm9tQ2VudGVyIDw9IHRoaXMucGF0cm9sUmFkaXVzO1xuXG4gICAgICAgIC8vIDMpIHJlZHJhdyBkZXRlY3Rpb24gY2lyY2xlXG4gICAgICAgIGNvbnN0IGRyYXdEZXRlY3RSID0gTWF0aC5taW4odGhpcy5kZXRlY3Rpb25SYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMjU1LCAxNjUsIDApXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMjU1LCAwLCAwKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5jaXJjbGUoMCwgMCwgZHJhd0RldGVjdFIpO1xuICAgICAgICAvL3RoaXMuZGV0ZWN0aW9uR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDQpIHJlZHJhdyBhdHRhY2sgY2lyY2xlXG4gICAgICAgIGNvbnN0IGRyYXdBdHRhY2tSID0gTWF0aC5taW4odGhpcy5hdHRhY2tSYWRpdXMsIHRoaXMucGF0cm9sUmFkaXVzKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnguY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXG4gICAgICAgICAvLyAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXG4gICAgICAgICAvLyAgIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDUpIEFJIHN0YXRlIHRyYW5zaXRpb25zXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIC8vIFdhaXQgdGhyb3VnaCB3aW5kLXVwICsgYXR0YWNrIGFuaW0gKHdpbmQtdXAgPSB0aW1lQmVmb3JlQXR0YWNrLCBhdHRhY2tBbmltIGFzc3VtZWQgMXMpXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnRpbWVCZWZvcmVBdHRhY2sgKyAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gcnVuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXRyb2wgKGlkbGUg4oaSIHdhbGsg4oaSIGlkbGUpXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ICA9IHBvcy5hZGQoZGVsdGEpO1xuICAgICAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKAlOKAlCBIZWFsdGjigJBiYXIgdXBkYXRlciDigJTigJRcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSAoaHAvdGhpcy5tYXhIZWFsdGgpKjQwO1xuICAgICAgICBpZiAoaHAgPD0gMTApICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgZWxzZSBpZiAoaHAgPD0gMjApICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5PUkFOR0U7XG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XG4gICAgfVxuXG4gICAgcHVibGljIHRha2VEYW1hZ2UoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDAgfHwgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcpIHJldHVybjtcblxuICAgICAgICAvLyBwbGF5IGh1cnQgYW5pbWF0aW9uIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3Qgc2xpbWVQb3MgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRpciAgICAgICA9IHBsYXllclBvcy5zdWIoc2xpbWVQb3MpLm5vcm1hbGl6ZSgpO1xuICAgICAgICBjb25zdCBodXJ0QW5pbSAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lSHVydFJpZ2h0XCIgOiBcIkxhdmFTbGltZUh1cnRMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUh1cnRVcFwiIDogXCJMYXZhU2xpbWVIdXJ0RG93blwiKTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoaHVydEFuaW0pO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMCkgdGhpcy5oZWFsdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoLWFtb3VudCwgdGhpcy5oZWFsdGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydERlYXRoU2VxdWVuY2UoZGlyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoZWFsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IGFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gdGhpcy5tYXhIZWFsdGgpIHRoaXMuaGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMudXBkYXRlTGlmZShhbW91bnQsIHRoaXMuaGVhbHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0RGVhdGhTZXF1ZW5jZShkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5pc0RlYXRoQW5pbVBsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLklkbGU7IC8vIGZyZWV6ZSBvdGhlciBBSVxuICAgICAgICB0aGlzLnBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheURlYXRoQW5pbWF0aW9uKGRpcmVjdGlvbjogY2MuVmVjMikge1xuICAgICAgICBjb25zdCBkZWF0aEFuaW0gPSBNYXRoLmFicyhkaXJlY3Rpb24ueCkgPiBNYXRoLmFicyhkaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKGRpcmVjdGlvbi54ID4gMCA/IFwiTGF2YVNsaW1lRGVhdGhSaWdodFwiIDogXCJMYXZhU2xpbWVEZWF0aExlZnRcIilcbiAgICAgICAgICAgIDogKGRpcmVjdGlvbi55ID4gMCA/IFwiTGF2YVNsaW1lRGVhdGhVcFwiIDogXCJMYXZhU2xpbWVEZWF0aERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIC8vIEFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMgKGFzc3VtZSAxcyksIG1hcmsgYXMgZnVsbHkgZGVhZFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb0lkbGUoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiTGF2YVNsaW1lSWRsZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJMYXZhU2xpbWVXYWxrUmlnaHRcIiA6IFwiTGF2YVNsaW1lV2Fsa0xlZnRcIilcbiAgICAgICAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJMYXZhU2xpbWVXYWxrVXBcIiA6IFwiTGF2YVNsaW1lV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAvLyBXaW5k4oCQdXA6IHBsYXkgaWRsZSAob3IgYSBjdXN0b20gd2luZOKAkHVwIGFuaW0pXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiTGF2YVNsaW1lSWRsZVwiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xuICAgICAgICAvLyBQbGF5IGF0dGFjayBjbGlwIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJMYXZhU2xpbWVBdHRhY2tSaWdodFwiIDogXCJMYXZhU2xpbWVBdHRhY2tMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkxhdmFTbGltZUF0dGFja1VwXCIgOiBcIkxhdmFTbGltZUF0dGFja0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuXG4gICAgICAgIC8vIEFwcGx5IGRhbWFnZSBpZiBwbGF5ZXIgc3RpbGwgd2l0aGluIHJhZGl1c1xuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XG4gICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBkaXN0ICAgICA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZnRlciBhdHRhY2sgYW5pbSAofjFzKSwgZ28gYmFjayB0byBpZGxlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0VG9JZGxlKCksIDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiTGF2YVNsaW1lUnVuUmlnaHRcIiA6IFwiTGF2YVNsaW1lUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJMYXZhU2xpbWVSdW5VcFwiIDogXCJMYXZhU2xpbWVSdW5Eb3duXCIpO1xuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcbiAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpOiBjYy5WZWMyIHtcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxufVxuIl19
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
        _this.attackRadius = 60;
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
            ? (direction.x > 0 ? "GreenBossDeadRight" : "GreenBossDeadLeft")
            : (direction.y > 0 ? "GreenBossDeadUp" : "GreenBossDeadDown");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0dyZWVuQm9zc0FJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG9DQUErQjtBQUUvQixJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQUksQ0FBQTtJQUNKLHlDQUFHLENBQUE7SUFDSCwrQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFHRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWlWQztRQS9VRyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFHdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixlQUFTLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMs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O1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLENBQUM7eURBQzVDO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUM7cURBQzFCO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7a0RBQzlCO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7K0NBQ2pDO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsb0RBQW9ELEVBQUUsQ0FBQzttREFDNUM7SUF0Q2YsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWlWL0I7SUFBRCxrQkFBQztDQWpWRCxBQWlWQyxDQWpWd0MsRUFBRSxDQUFDLFNBQVMsR0FpVnBEO2tCQWpWb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcblxuZW51bSBTbGltZVN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgUnVuLFxuICAgIEF0dGFja1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZW5Cb3NzQUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiU2xpbWUgd2FsayBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXG4gICAgd2Fsa1NwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlNsaW1lIHJ1biBzcGVlZCBpbiBwaXhlbHMgcGVyIHNlY29uZFwiIH0pXG4gICAgcnVuU3BlZWQ6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHN0YXlzIGlkbGUgYmVmb3JlIHdhbGtpbmcgKHNlY29uZHMpXCIgfSlcbiAgICBpZGxlVGltZTogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiSG93IGxvbmcgdGhlIHNsaW1lIHdhbGtzIGluIG9uZSBkaXJlY3Rpb24gKHNlY29uZHMpXCIgfSlcbiAgICB3YWxrVGltZTogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiUGF0cm9sIHJhZGl1cyBmcm9tIHN0YXJ0IHBvaW50IChwaXhlbHMpXCIgfSlcbiAgICBwYXRyb2xSYWRpdXM6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiRGV0ZWN0aW9uIGNpcmNsZSByYWRpdXMgKHBpeGVscylcIiB9KVxuICAgIGRldGVjdGlvblJhZGl1czogbnVtYmVyID0gMTUwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJBdHRhY2sgY2lyY2xlIHJhZGl1cyAocGl4ZWxzKVwiIH0pXG4gICAgYXR0YWNrUmFkaXVzOiBudW1iZXIgPSA2MDtcblxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwiVGltZSB0byB3YWl0IGJlZm9yZSBwZXJmb3JtaW5nIGF0dGFjayAoc2Vjb25kcylcIiB9KVxuICAgIHRpbWVCZWZvcmVBdHRhY2s6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkRhbWFnZSBkZWFsdCBieSB0aGUgYXR0YWNrXCIgfSlcbiAgICBhdHRhY2tEYW1hZ2U6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCJNYXhpbXVtIGhlYWx0aCBvZiB0aGUgc2xpbWVcIiB9KVxuICAgIG1heEhlYWx0aDogbnVtYmVyID0gNDg7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIkN1cnJlbnQgaGVhbHRoIG9mIHRoZSBzbGltZVwiIH0pXG4gICAgaGVhbHRoOiBudW1iZXIgPSA0ODtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbGlmZWJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIlZlcnRpY2FsIG9mZnNldCBvZiBoZWFsdGggYmFyIGFib3ZlIHNsaW1lIChwaXhlbHMpXCIgfSlcbiAgICBwcml2YXRlIGJhck9mZnNldFk6IG51bWJlciA9IDUwO1xuXG4gICAgcHVibGljIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlO1xuICAgIHByaXZhdGUgdGltZXIgPSAwO1xuICAgIHByaXZhdGUgZGlyZWN0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgcHJpdmF0ZSBwYXRyb2xDZW50ZXIgPSBjYy52MigwLCAwKTtcblxuICAgIHByaXZhdGUgYm91bmRhcnlOb2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGRldGVjdGlvbk5vZGUhOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgZGV0ZWN0aW9uR2Z4ITogY2MuR3JhcGhpY3M7XG4gICAgcHJpdmF0ZSBhdHRhY2tOb2RlITogY2MuTm9kZTtcbiAgICBwcml2YXRlIGF0dGFja0dmeCE6IGNjLkdyYXBoaWNzO1xuXG4gICAgcHJpdmF0ZSBhbmltITogY2MuQW5pbWF0aW9uO1xuICAgIHByaXZhdGUgY3VycmVudFJ1bkNsaXAgPSBcIlwiO1xuICAgIHByaXZhdGUgY3VycmVudEF0dGFja0NsaXAgPSBcIlwiO1xuXG4gICAgcHJpdmF0ZSBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzRGVhdGhBbmltUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9NYXBNYW5hZ2VyL0FjdG9ycy9QbGF5ZXJcIikgYXMgY2MuTm9kZTtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllcikgY2MuZXJyb3IoXCJQbGF5ZXIgbm9kZSBub3QgZm91bmRcIik7XG5cbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSE7XG4gICAgICAgIHRoaXMucGF0cm9sQ2VudGVyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuY2xvbmUoKTtcblxuICAgICAgICAvLyBEcmF3IHBhdHJvbCBib3VuZGFyeVxuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZSA9IG5ldyBjYy5Ob2RlKFwiUGF0cm9sQm91bmRhcnlcIik7XG4gICAgICAgIHRoaXMuYm91bmRhcnlOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQhO1xuICAgICAgICB0aGlzLmJvdW5kYXJ5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnBhdHJvbENlbnRlcik7XG4gICAgICAgIC8vY29uc3QgcGF0cm9sR2Z4ID0gdGhpcy5ib3VuZGFyeU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgLy9wYXRyb2xHZngubGluZVdpZHRoID0gMjtcbiAgICAgICAgLy9wYXRyb2xHZnguc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xuICAgICAgICAvL3BhdHJvbEdmeC5jaXJjbGUoMCwgMCwgdGhpcy5wYXRyb2xSYWRpdXMpO1xuICAgICAgICAvL3BhdHJvbEdmeC5zdHJva2UoKTtcblxuICAgICAgICAvLyBEZXRlY3Rpb24gYXJlYVxuICAgICAgICB0aGlzLmRldGVjdGlvbk5vZGUgPSBuZXcgY2MuTm9kZShcIkRldGVjdGlvbkFyZWFcIik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZnggPSB0aGlzLmRldGVjdGlvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25HZngubGluZVdpZHRoID0gMjtcblxuICAgICAgICAvLyBBdHRhY2sgYXJlYVxuICAgICAgICB0aGlzLmF0dGFja05vZGUgPSBuZXcgY2MuTm9kZShcIkF0dGFja0FyZWFcIik7XG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuYXR0YWNrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZnggPSB0aGlzLmF0dGFja05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgdGhpcy5hdHRhY2tHZngubGluZVdpZHRoID0gMjtcblxuICAgICAgICAvLyBIZWFsdGggYmFyIHNldHVwXG4gICAgICAgIGlmICh0aGlzLmxpZmViYXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy5saWZlYmFyLnNldFBvc2l0aW9uKDAsIHRoaXMubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5iYXJPZmZzZXRZKTtcbiAgICAgICAgICAgIC8vdGhpcy51cGRhdGVMaWZlKDAsIHRoaXMuaGVhbHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBtYXJrZWQgZGVhZCwgc2tpcCBBSVxuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSB7XG4gICAgICAgICAgICAvLyBMZXQgZGVhdGggYW5pbWF0aW9uIHBsYXk7IGRvIG5vdGhpbmcgZWxzZSB1bnRpbCBpdCdzIG92ZXJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEpIGNvbXB1dGUgZGlzdGFuY2UgdG8gcGxheWVyXG4gICAgICAgIGxldCBkaXN0VG9QbGF5ZXIgPSBJbmZpbml0eTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJXID0gdGhpcy5wbGF5ZXIucGFyZW50IS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgZGlzdFRvUGxheWVyID0gc2xpbWVXLnN1YihwbGF5ZXJXKS5tYWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIpIGNoZWNrIGlmIHBsYXllciBpcyBzdGlsbCB3aXRoaW4gcGF0cm9sIHJhZGl1c1xuICAgICAgICBjb25zdCBsb2NhbFBsYXllclBvcyA9IHRoaXMubm9kZS5wYXJlbnQhXG4gICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyIS5wb3NpdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQ2VudGVyID0gbG9jYWxQbGF5ZXJQb3Muc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKTtcbiAgICAgICAgY29uc3QgcGxheWVySW5QYXRyb2wgPSBkaXN0RnJvbUNlbnRlciA8PSB0aGlzLnBhdHJvbFJhZGl1cztcblxuICAgICAgICAvLyAzKSByZWRyYXcgZGV0ZWN0aW9uIGNpcmNsZVxuICAgICAgICBjb25zdCBkcmF3RGV0ZWN0UiA9IE1hdGgubWluKHRoaXMuZGV0ZWN0aW9uUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uR2Z4LmxpbmVXaWR0aCAgID0gMjtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5zdHJva2VDb2xvciA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmRldGVjdGlvblJhZGl1c1xuICAgICAgICAvLyAgICA/IGNjLmNvbG9yKDI1NSwgMTY1LCAwKVxuICAgICAgICAvLyAgICA6IGNjLmNvbG9yKDI1NSwgMCwgMCk7XG4gICAgICAgIC8vdGhpcy5kZXRlY3Rpb25HZnguY2lyY2xlKDAsIDAsIGRyYXdEZXRlY3RSKTtcbiAgICAgICAgLy90aGlzLmRldGVjdGlvbkdmeC5zdHJva2UoKTtcblxuICAgICAgICAvLyA0KSByZWRyYXcgYXR0YWNrIGNpcmNsZVxuICAgICAgICBjb25zdCBkcmF3QXR0YWNrUiA9IE1hdGgubWluKHRoaXMuYXR0YWNrUmFkaXVzLCB0aGlzLnBhdHJvbFJhZGl1cyk7XG4gICAgICAgIHRoaXMuYXR0YWNrR2Z4LmNsZWFyKCk7XG4gICAgICAgIC8vdGhpcy5hdHRhY2tHZngubGluZVdpZHRoICAgPSAyO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZUNvbG9yID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuYXR0YWNrUmFkaXVzXG4gICAgICAgIC8vICAgID8gY2MuY29sb3IoMTI4LCAwLCAxMjgpXG4gICAgICAgIC8vICAgIDogY2MuY29sb3IoMCwgMCwgMjU1KTtcbiAgICAgICAgLy90aGlzLmF0dGFja0dmeC5jaXJjbGUoMCwgMCwgZHJhd0F0dGFja1IpO1xuICAgICAgICAvL3RoaXMuYXR0YWNrR2Z4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIDUpIEFJIHN0YXRlIHRyYW5zaXRpb25zXG4gICAgICAgIGNvbnN0IGluRGV0ZWN0ID0gZGlzdFRvUGxheWVyIDw9IHRoaXMuZGV0ZWN0aW9uUmFkaXVzICYmIHBsYXllckluUGF0cm9sO1xuICAgICAgICBjb25zdCBpbkF0dGFjayA9IGRpc3RUb1BsYXllciA8PSB0aGlzLmF0dGFja1JhZGl1cyAmJiBwbGF5ZXJJblBhdHJvbDtcblxuICAgICAgICAvLyBhdHRhY2sgZmlyc3RcbiAgICAgICAgaWYgKGluQXR0YWNrICYmIHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbGltZVN0YXRlID09PSBTbGltZVN0YXRlLkF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIC8vIFdhaXQgdGhyb3VnaCB3aW5kLXVwICsgYXR0YWNrIGFuaW0gKHdpbmQtdXAgPSB0aW1lQmVmb3JlQXR0YWNrLCBhdHRhY2tBbmltIGFzc3VtZWQgMXMpXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnRpbWVCZWZvcmVBdHRhY2sgKyAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gcnVuXG4gICAgICAgIGlmIChpbkRldGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSAhPT0gU2xpbWVTdGF0ZS5SdW4pIHRoaXMuc3RhcnRSdW5uaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blRvd2FyZHNQbGF5ZXIoZHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5SdW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9JZGxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXRyb2wgKGlkbGUg4oaSIHdhbGsg4oaSIGlkbGUpXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnNsaW1lU3RhdGUgPT09IFNsaW1lU3RhdGUuSWRsZSAmJiB0aGlzLnRpbWVyID49IHRoaXMuaWRsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWxraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpbWVTdGF0ZSA9PT0gU2xpbWVTdGF0ZS5XYWxrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjIoXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMud2Fsa1NwZWVkICogZHQsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqIHRoaXMud2Fsa1NwZWVkICogZHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ICA9IHBvcy5hZGQoZGVsdGEpO1xuICAgICAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV4dCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLndhbGtUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb0lkbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOKAlOKAlCBIZWFsdGjigJBiYXIgdXBkYXRlciDigJTigJRcbiAgICBwcml2YXRlIHVwZGF0ZUxpZmUoZGVsdGE6IG51bWJlciwgaHA6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMubGlmZWJhcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpZmViYXIud2lkdGggPSAoaHAvdGhpcy5tYXhIZWFsdGgpKjQwOztcbiAgICAgICAgaWYgKGhwIDw9IDEwKSAgICAgICB0aGlzLmxpZmViYXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIGVsc2UgaWYgKGhwIDw9IDIwKSAgdGhpcy5saWZlYmFyLmNvbG9yID0gY2MuQ29sb3IuT1JBTkdFO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgIHRoaXMubGlmZWJhci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YWtlRGFtYWdlKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwIHx8IHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gcGxheSBodXJ0IGFuaW1hdGlvbiBiYXNlZCBvbiBkaXJlY3Rpb24gdG8gcGxheWVyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHNsaW1lUG9zICA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXIgICAgICAgPSBwbGF5ZXJQb3Muc3ViKHNsaW1lUG9zKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgaHVydEFuaW0gID0gTWF0aC5hYnMoZGlyLngpID4gTWF0aC5hYnMoZGlyLnkpXG4gICAgICAgICAgICA/IChkaXIueCA+IDAgPyBcIkdyZWVuQm9zc0h1cnRSaWdodFwiIDogXCJHcmVlbkJvc3NIdXJ0TGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NIdXJ0VXBcIiA6IFwiR3JlZW5Cb3NzSHVydERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGh1cnRBbmltKTtcblxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDApIHRoaXMuaGVhbHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKC1hbW91bnQsIHRoaXMuaGVhbHRoKTtcblxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWF0aFNlcXVlbmNlKGRpcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGVhbChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhlYWx0aCArPSBhbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IHRoaXMubWF4SGVhbHRoKSB0aGlzLmhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoYW1vdW50LCB0aGlzLmhlYWx0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydERlYXRoU2VxdWVuY2UoZGlyZWN0aW9uOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMuaXNEZWF0aEFuaW1QbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5JZGxlOyAvLyBmcmVlemUgb3RoZXIgQUlcbiAgICAgICAgdGhpcy5wbGF5RGVhdGhBbmltYXRpb24oZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlEZWF0aEFuaW1hdGlvbihkaXJlY3Rpb246IGNjLlZlYzIpIHtcbiAgICAgICAgY29uc3QgZGVhdGhBbmltID0gTWF0aC5hYnMoZGlyZWN0aW9uLngpID4gTWF0aC5hYnMoZGlyZWN0aW9uLnkpXG4gICAgICAgICAgICA/IChkaXJlY3Rpb24ueCA+IDAgPyBcIkdyZWVuQm9zc0RlYWRSaWdodFwiIDogXCJHcmVlbkJvc3NEZWFkTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NEZWFkVXBcIiA6IFwiR3JlZW5Cb3NzRGVhZERvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGRlYXRoQW5pbSk7XG5cbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIC8vIEFmdGVyIHRoZSBkZWF0aCBhbmltYXRpb24gZmluaXNoZXMgKGFzc3VtZSAxcyksIG1hcmsgYXMgZnVsbHkgZGVhZFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzRGVhdGhBbmltUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRG8gTk9UIGRlc3Ryb3kgdGhlIG5vZGXigJRqdXN0IGxlYXZlIHRoZSBkZWFkIHBvc2UgaW4gcGxhY2VcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb0lkbGUoKSB7XG4gICAgICAgIHRoaXMuc2xpbWVTdGF0ZSA9IFNsaW1lU3RhdGUuSWRsZTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiR3JlZW5Cb3NzSWRsZVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0V2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5XYWxrO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xLFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTFcbiAgICAgICAgKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uLngpID4gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24ueSlcbiAgICAgICAgICAgID8gKHRoaXMuZGlyZWN0aW9uLnggPiAwID8gXCJHcmVlbkJvc3NXYWxrUmlnaHRcIiA6IFwiR3JlZW5Cb3NzV2Fsa0xlZnRcIilcbiAgICAgICAgICAgIDogKHRoaXMuZGlyZWN0aW9uLnkgPiAwID8gXCJHcmVlbkJvc3NXYWxrVXBcIiA6IFwiR3JlZW5Cb3NzV2Fsa0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSdW5uaW5nKCkge1xuICAgICAgICB0aGlzLnNsaW1lU3RhdGUgPSBTbGltZVN0YXRlLlJ1bjtcbiAgICAgICAgdGhpcy5jdXJyZW50UnVuQ2xpcCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF0dGFjaygpIHtcbiAgICAgICAgdGhpcy5zbGltZVN0YXRlID0gU2xpbWVTdGF0ZS5BdHRhY2s7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAvLyBXaW5k4oCQdXA6IHBsYXkgaWRsZSAob3IgYSBjdXN0b20gd2luZOKAkHVwIGFuaW0pXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiR3JlZW5Cb3NzSWRsZVwiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5wZXJmb3JtQXR0YWNrKCksIHRoaXMudGltZUJlZm9yZUF0dGFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtQXR0YWNrKCkge1xuICAgICAgICAvLyBQbGF5IGF0dGFjayBjbGlwIGJhc2VkIG9uIGRpcmVjdGlvbiB0byBwbGF5ZXJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5nZXRSdW5EaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgY2xpcCA9IE1hdGguYWJzKGRpci54KSA+IE1hdGguYWJzKGRpci55KVxuICAgICAgICAgICAgPyAoZGlyLnggPiAwID8gXCJHcmVlbkJvc3NBdHRhY2tSaWdodFwiIDogXCJHcmVlbkJvc3NBdHRhY2tMZWZ0XCIpXG4gICAgICAgICAgICA6IChkaXIueSA+IDAgPyBcIkdyZWVuQm9zc0F0dGFja1VwXCIgOiBcIkdyZWVuQm9zc0F0dGFja0Rvd25cIik7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KGNsaXApO1xuXG4gICAgICAgIC8vIEFwcGx5IGRhbWFnZSBpZiBwbGF5ZXIgc3RpbGwgd2l0aGluIHJhZGl1c1xuICAgICAgICBjb25zdCBwbGF5ZXJDb21wID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllcik7XG4gICAgICAgIGlmIChwbGF5ZXJDb21wKSB7XG4gICAgICAgICAgICBjb25zdCBzbGltZVcgICA9IHRoaXMubm9kZS5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyVyAgPSB0aGlzLnBsYXllci5wYXJlbnQhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBkaXN0ICAgICA9IHNsaW1lVy5zdWIocGxheWVyVykubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdCA8PSB0aGlzLmF0dGFja1JhZGl1cykge1xuICAgICAgICAgICAgICAgIHBsYXllckNvbXAudGFrZURhbWFnZSh0aGlzLmF0dGFja0RhbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZnRlciBhdHRhY2sgYW5pbSAofjFzKSwgZ28gYmFjayB0byBpZGxlXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2V0VG9JZGxlKCksIDEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuVG93YXJkc1BsYXllcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuZ2V0UnVuRGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBNYXRoLmFicyhkaXIueCkgPiBNYXRoLmFicyhkaXIueSlcbiAgICAgICAgICAgID8gKGRpci54ID4gMCA/IFwiR3JlZW5Cb3NzUnVuUmlnaHRcIiA6IFwiR3JlZW5Cb3NzUnVuTGVmdFwiKVxuICAgICAgICAgICAgOiAoZGlyLnkgPiAwID8gXCJHcmVlbkJvc3NSdW5VcFwiIDogXCJHcmVlbkJvc3NSdW5Eb3duXCIpO1xuICAgICAgICBpZiAoY2xpcCAhPT0gdGhpcy5jdXJyZW50UnVuQ2xpcCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoY2xpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSdW5DbGlwID0gY2xpcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWx0YSA9IGNjLnYyKGRpci54ICogdGhpcy5ydW5TcGVlZCAqIGR0LCBkaXIueSAqIHRoaXMucnVuU3BlZWQgKiBkdCk7XG4gICAgICAgIGNvbnN0IG5leHQgID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGRlbHRhKTtcbiAgICAgICAgaWYgKG5leHQuc3ViKHRoaXMucGF0cm9sQ2VudGVyKS5tYWcoKSA+IHRoaXMucGF0cm9sUmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvSWRsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJ1bkRpcmVjdGlvbigpOiBjYy5WZWMyIHtcbiAgICAgICAgY29uc3Qgd29ybGRQID0gdGhpcy5wbGF5ZXIhLnBhcmVudCEuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgbG9jYWxQID0gdGhpcy5ub2RlLnBhcmVudCEuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKGxvY2FsUC54IC0gdGhpcy5ub2RlLngsIGxvY2FsUC55IC0gdGhpcy5ub2RlLnkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL1dhbmRlckFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFFNUIsa0RBQWlEO0FBQzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFNBQVMsbUJBQW1CLENBQUMsTUFBa0I7SUFBbEIsdUJBQUEsRUFBQSxVQUFrQjtJQUMzQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBQ0Q7O0dBRUc7QUFFSDtJQUNZLCtCQUFLO0lBRGpCO1FBQUEscUVBcUVDO1FBakVHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUdmLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBVXRDLFlBQU0sR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdkMsY0FBUSxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQzs7UUFnQ3pDLGdDQUFnQztRQUNoQyxvRkFBb0Y7UUFDcEYsK0JBQStCO1FBQy9CLGlCQUFpQjtJQUNyQixDQUFDO0lBN0NHLHNCQUFXLHVDQUFjO2FBQXpCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRixzQkFBVyxxQ0FBWTthQUF2QjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFLRCw0RUFBNEU7SUFDNUUsZ0VBQWdFO0lBQ2hFLG1CQUFtQjtJQUNuQiw0RUFBNEU7SUFDNUUsb0NBQW9DO0lBQ3BDLG9FQUFvRTtJQUNwRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBRWxFLGlDQUFXLEdBQXJCLFVBQXNCLEVBQVU7UUFDNUIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLFlBQVk7SUFDaEIsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRixZQUFZO0lBQ2hCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsWUFBWTtJQUNoQixDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ0k7SUFuQk4sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFFL0I7SUFBRCxrQkFBQztDQXJFRCxBQXFFQyxDQXBFVyxlQUFLLEdBb0VoQjtrQkFyRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBCdXR0b25TdGF0ZSwgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCBBZ2VudCBmcm9tIFwiLi9BZ2VudFwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9zdHJhdGVnaWVzL0FnZW50U3RyYXRlZ3lcIjtcbmltcG9ydCB7IFdhbmRlcmVyIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9XYW5kZXJlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZnVuY3Rpb24gcmFuZG9tUG9pbnRPbkNpcmNsZShyYWRpdXM6IG51bWJlciA9IDEpIHtcbiAgICBsZXQgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgcmV0dXJuIG5ldyBjYy5WZWMyKE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzKTtcbn1cbi8qKlxuICogQW4gYWdlbnQgdGhhdCBzaW1wbHkgd2FuZGVycyBhcm91bmQgbGlrZSBhIGN1dGUgYW5pbWFsLlxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FuZGVyQWdlbnRcbiAgICBleHRlbmRzIEFnZW50XG4gICAgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XG5cbiAgICAvKiogVGhlIGFnZW50IHdpbGwgbW92ZSBmb3IgdGhpcyBsb25nIGJlZm9yZSBzdG9wcGluZyB0byB3YWl0LiAqL1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBtb3ZlRHVyYXRpb24gPSAxLjA7XG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgYXQgdGhpcyBzcGVlZC4gKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbW92ZVNwZWVkID0gNS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCB3YWl0IGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUgYWdhaW4uICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHdhaXREdXJhdGlvbiA9IDAuNTtcbiAgICAvKiogVGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIHdpbGwgYmUgcmFuZG9taXplZCBieSB0aGlzIGZhY3RvciwgXG4gICAgICogIHN1Y2ggdGhhdCB0aGUgYWN0dWFsIHdhaXQgZHVyYXRpb24gaXMgYSByYW5kb20gbnVtYmVyIGJldHdlZW5cbiAgICAgKiAgd2FpdER1cmF0aW9uIHggKDEgLSB3YWl0UmFuZG9tRmFjdG9yKSBhbmQgXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxICsgd2FpdFJhbmRvbUZhY3RvcikuXG4gICAgKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgd2FpdFJhbmRvbUZhY3RvciA9IDAuMTtcblxuXG4gICAgcHJpdmF0ZSBfc3RyYXRlZ3k6IEFJLlN0cmF0ZWd5ID0gbnVsbDtcblxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5fc3RyYXRlZ3kpIHJldHVybiAwO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyYXRlZ3kuaG9yaXpvbnRhbEF4aXMgKiB0aGlzLm1vdmVTcGVlZDtcbiAgICB9O1xuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3N0cmF0ZWd5KSByZXR1cm4gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5LnZlcnRpY2FsQXhpcyAqIHRoaXMubW92ZVNwZWVkO1xuICAgIH1cbiAgICBhdHRhY2s6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBpbnRlcmFjdDogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuXG5cbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcbiAgICAvLyBUT0RPICgyLjQpOiBDb21wbGV0ZSBXYW5kZXJBZ2VudCB1c2luZyB0aGUgV2FuZGVyZXIgc3RyYXRlZ3kuXG4gICAgLy8gW1NQRUNJRklDQVRJT05TXVxuICAgIC8vIC0gQXNzaWduIGEgbmV3IFdhbmRlcmVyIHRvIHRoaXMuc3RyYXRlZ3ksIHdpdGggV2FuZGVyZXJBZ2VudCdzIHByb3BlcnRpZXNcbiAgICAvLyAgIGFzIHRoZSBjb25zdHJ1Y3RvcidzIGFyZ3VtZW50cy5cbiAgICAvLyAtIEludm9rZSBpdHMgXCJzdGFydFwiIG1ldGhvZCBpbnNpZGUgV2FuZGVyQWdlbnQncyBcInN0YXJ0XCIgbWV0aG9kLiBcbiAgICAvLyAtIEludm9rZSBpdHMgXCJ1cGRhdGVcIiBtZXRob2QgaW5zaWRlIFdhbmRlckFnZW50J3MgXCJhZ2VudFVwZGF0ZVwiIG1ldGhvZC5cbiAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcblxuICAgIHByb3RlY3RlZCBhZ2VudFVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICB0aGlzLl9zdHJhdGVneS51cGRhdGUoZHQpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gbmV3IFdhbmRlcmVyKHRoaXMubW92ZUR1cmF0aW9uLCB0aGlzLndhaXREdXJhdGlvbiwgdGhpcy53YWl0UmFuZG9tRmFjdG9yKTtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICB0aGlzLl9zdHJhdGVneS5zdGFydCgpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyAhISEgRE8gTk9UIElNUExFTUVOVCBcInVwZGF0ZVwiXG4gICAgLy8gISEhIElmIHlvdSB3YW50IHRvLCB5b3UnbGwgaGF2ZSB0byBjYWxsIHRoZSBwYXJlbnQgY2xhc3MncyB1cGRhdGUgbWV0aG9kIGFzIHdlbGwhXG4gICAgLy8gISEhIFVzZSBhZ2VudFVwZGF0ZSBpbnN0ZWFkLlxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvRmlyZWJhc2VJbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQTBDLGdDQUFZO0lBQXREOztJQW9CQSxDQUFDO0lBbkJDLDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMzQixJQUFNLE1BQU0sR0FBRztnQkFDYixNQUFNLEVBQUUseUNBQXlDO2dCQUNqRCxVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxTQUFTLEVBQUUsWUFBWTtnQkFDdkIsYUFBYSxFQUFFLGdDQUFnQztnQkFDL0MsaUJBQWlCLEVBQUUsY0FBYztnQkFDakMsS0FBSyxFQUFFLDJDQUEyQztnQkFDbEQsYUFBYSxFQUFFLGNBQWM7YUFDOUIsQ0FBQztZQUNGLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDaEM7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBbkJrQixZQUFZO1FBRGhDLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDSCxZQUFZLENBb0JoQztJQUFELG1CQUFDO0NBcEJELEFBb0JDLENBcEJ5QyxFQUFFLENBQUMsU0FBUyxHQW9CckQ7a0JBcEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvRmlyZWJhc2VJbml0LnRzXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9maXJlYmFzZUluaXRlZD86IGJvb2xlYW47XG4gIH1cbn1cblxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRmlyZWJhc2VJbml0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcmViYXNlSW5pdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoIXdpbmRvdy5fZmlyZWJhc2VJbml0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeURGVzQtZW1XZEkxZ2hnWldXR3Axd3FvV3ZBdlR3QXFyUVwiLFxuICAgICAgICBhdXRoRG9tYWluOiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgIHByb2plY3RJZDogXCJydW5lLXJhaWRzXCIsXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzMDUxNDM2MDg0M1wiLFxuICAgICAgICBhcHBJZDogXCIxOjUzMDUxNDM2MDg0Mzp3ZWI6MWNkZGE5ZDcyYmI0YjUyOTMyMjUwZVwiLFxuICAgICAgICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXG4gICAgICB9O1xuICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgICBmaXJlYmFzZS5hdXRoKCk7XG4gICAgICB3aW5kb3cuX2ZpcmViYXNlSW5pdGVkID0gdHJ1ZTtcbiAgICAgIGNjLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICB9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTG9hZGluZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUEvQkcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztJQTRCbEMsQ0FBQztJQTFCRyxxQ0FBWSxHQUFaLFVBQWEsV0FBbUI7UUFBaEMsaUJBdUJDO1FBdEJELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3BCLFdBQVcsRUFDWCxVQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSTtZQUM3QixJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQzNDLG1CQUFtQjtZQUNuQixJQUFJLFFBQVEsR0FBRyxHQUFHO2dCQUFFLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRSxDQUFDLEVBQ0Q7WUFDSSx3QkFBd0I7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNyQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN4QixJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVztJQUxiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQ2xDO0lBQUQscUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzJDLEVBQUUsQ0FBQyxTQUFTLEdBaUN2RDtrQkFqQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwZXJjZW50TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHN0YXJ0TG9hZGluZyh0YXJnZXRTY2VuZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gXCIwJVwiO1xuXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxuICAgICAgICB0YXJnZXRTY2VuZSxcbiAgICAgICAgKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XG4gICAgICAgICAgICAvLyDpoJDoqK3mnIDlpJrliLAgMC4577yM6aCQ55WZ6KOc5ru/5YuV55WrXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwLjkpIHByb2dyZXNzID0gMC45O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgLy8g6aCQ5Yqg6LyJ5a6M5oiQ5pmC77yMdHdlZW4g6KOc5ru/5YiwIDEwMCVcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucHJvZ3Jlc3NCYXIpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0YXJnZXRTY2VuZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7QUFFbkcsbURBQStFO0FBRXpFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWlELDhCQUFZO0lBQTdEO1FBQUEscUVBV0M7UUFUYSxpQkFBVyxHQUFtQixJQUFJLENBQUM7O0lBU2pELENBQUM7SUFSRywwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsNENBQTJCLENBQU0sU0FBUyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFDTSxrQ0FBYSxHQUFwQixVQUFxQixLQUFxQjtRQUN0QyxJQUFHLEtBQUssS0FBSyxJQUFJO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWGdELEVBQUUsQ0FBQyxTQUFTLEdBVzVEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgaGFzSW1wbGVtZW50ZWRJbnB1dENvbnRyb2xzLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByb3RlY3RlZCBpbnB1dFNvdXJjZTogSUlucHV0Q29udHJvbHMgPSBudWxsO1xuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoPGFueT50aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpLmZpbmQoY29tcG9uZW50ID0+IGhhc0ltcGxlbWVudGVkSW5wdXRDb250cm9scyg8YW55PmNvbXBvbmVudCkpKTtcbiAgICB9XG4gICAgcHVibGljIHJlZ2lzdGVySW5wdXQoaW5wdXQ6IElJbnB1dENvbnRyb2xzKSB7XG4gICAgICAgIGlmKGlucHV0ICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5pbnB1dFNvdXJjZSA9IGlucHV0O1xuICAgIH1cblxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL0FnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDOzs7OztHQUtHO0FBQ0g7SUFBNEMseUJBQVk7SUFBeEQ7O0lBYUEsQ0FBQztJQUxHLHdCQUF3QjtJQUVkLHNCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsWUFBQztBQUFELENBYkEsQUFhQyxDQWIyQyxFQUFFLENBQUMsU0FBUyxHQWF2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZvciBhbGwgQUkgY29tcG9uZW50cy5cbiAqIFlvdSBjYW4gdGhpbmsgb2YgdGhpcyBhcyBhbiBvcmdhbml6ZWQgQVBJLlxuICogSWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IHRoZSB1cGRhdGUgbWV0aG9kLCB5b3UgaGF2ZSB0byBjYWxsIHRoZVxuICogc3VwZXIgbWV0aG9kIGZpcnN0IVxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBZ2VudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXBkYXRlIG1ldGhvZCB3cmFwcGVyIGZvciBBZ2VudCBjbGFzc2VzLlxuICAgICAqIEBwYXJhbSBkdCBUaW1lIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgYWdlbnRVcGRhdGUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGFnZW50VXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hZ2VudFVwZGF0ZShkdCk7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9Mb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUVmLFVBQUksR0FBaUIsSUFBSSxDQUFDOztRQWdCbEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QjVCO0lBQUQsZUFBQztDQXpCRCxBQXlCQyxDQXpCcUMsRUFBRSxDQUFDLFNBQVMsR0F5QmpEO2tCQXpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlBbmltKCl7XG4gICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoJ0xvY2stcGluaycpLmlzUGxheWluZyl7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgnTG9jay1waW5rJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9LZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWYsVUFBSSxHQUFpQixJQUFJLENBQUM7O0lBZ0J0QyxDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdCNUI7SUFBRCxlQUFDO0NBeEJELEFBd0JDLENBeEJxQyxFQUFFLENBQUMsU0FBUyxHQXdCakQ7a0JBeEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgna2V5LWdvbGQnKS5pc1BsYXlpbmcpe1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2tleS1nb2xkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
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
        _this._kKey = IInputControls_1.ButtonState.Rest;
        _this._xKey = IInputControls_1.ButtonState.Rest;
        _this._jKey = IInputControls_1.ButtonState.Rest;
        _this._lKey = IInputControls_1.ButtonState.Rest;
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
        get: function () { return this._kKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "interact", {
        get: function () { return this._kKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "gethurt", {
        get: function () { return this._xKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack2", {
        get: function () { return this._jKey; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardControls.prototype, "attack3", {
        get: function () { return this._lKey; },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    KeyboardControls.prototype.onLoad = function () { };
    KeyboardControls.prototype.start = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    KeyboardControls.prototype.closeInput = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    KeyboardControls.prototype.openInput = function () {
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
            case cc.macro.KEY.j:
                if (this._kKey === IInputControls_1.ButtonState.Rest || this._kKey === IInputControls_1.ButtonState.Released) {
                    this._kKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._kKey = IInputControls_1.ButtonState.Held;
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
            case cc.macro.KEY.k:
                if (this._jKey === IInputControls_1.ButtonState.Rest || this._jKey === IInputControls_1.ButtonState.Released) {
                    this._jKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._jKey = IInputControls_1.ButtonState.Held;
                }
                break;
            case cc.macro.KEY.l:
                if (this._lKey === IInputControls_1.ButtonState.Rest || this._lKey === IInputControls_1.ButtonState.Released) {
                    this._lKey = IInputControls_1.ButtonState.Pressed;
                }
                else {
                    this._lKey = IInputControls_1.ButtonState.Held;
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
            case cc.macro.KEY.j:
                if (this._kKey === IInputControls_1.ButtonState.Pressed || this._kKey === IInputControls_1.ButtonState.Held) {
                    this._kKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._kKey = IInputControls_1.ButtonState.Rest;
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
            case cc.macro.KEY.k:
                if (this._jKey === IInputControls_1.ButtonState.Pressed || this._jKey === IInputControls_1.ButtonState.Held) {
                    this._jKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._jKey = IInputControls_1.ButtonState.Rest;
                }
                break;
            case cc.macro.KEY.l:
                if (this._lKey === IInputControls_1.ButtonState.Pressed || this._lKey === IInputControls_1.ButtonState.Held) {
                    this._lKey = IInputControls_1.ButtonState.Released;
                }
                else {
                    this._lKey = IInputControls_1.ButtonState.Rest;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2lucHV0L0tleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkcsbURBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQ1ksb0NBQVk7SUFEeEI7UUFBQSxxRUF3SUM7UUFwSVcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUduQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFJdEMsV0FBSyxHQUFnQiw0QkFBVyxDQUFDLElBQUksQ0FBQztRQUd0QyxXQUFLLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBR3RDLFdBQUssR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBb0hsRCxDQUFDO0lBbklHLHNCQUFXLDRDQUFjO2FBQXpCLGNBQXNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRzFELHNCQUFXLDBDQUFZO2FBQXZCLGNBQW9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLG9DQUFNO2FBQWpCLGNBQW1DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3RELHNCQUFXLHNDQUFRO2FBQW5CLGNBQXFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFXLHFDQUFPO2FBQWxCLGNBQW9DLE9BQU8s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LEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyw0QkFBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLDRCQUFXLENBQUMsSUFBSSxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsUUFBUSxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1NBQ2I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF0SWdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBd0lwQztJQUFELHVCQUFDO0NBeElELEFBd0lDLENBdklXLEVBQUUsQ0FBQyxTQUFTLEdBdUl2QjtrQkF4SW9CLGdCQUFnQjtBQTBJckMsU0FBUyxLQUFLLENBQUMsS0FBYSxFQUFFLENBQWMsRUFBRSxDQUFhO0lBQTdCLGtCQUFBLEVBQUEsS0FBYSxDQUFDO0lBQUUsa0JBQUEsRUFBQSxLQUFhO0lBQ3ZELElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEIsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZENvbnRyb2xzXG4gICAgZXh0ZW5kcyBjYy5Db21wb25lbnRcbiAgICBpbXBsZW1lbnRzIElJbnB1dENvbnRyb2xzIHtcblxuICAgIHByaXZhdGUgX2hBeGlzOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2hBeGlzIH1cblxuICAgIHByaXZhdGUgX3ZBeGlzOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl92QXhpcyB9XG5cbiAgICBwcml2YXRlIF9rS2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5fa0tleSB9XG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9rS2V5IH1cblxuICAgIHByaXZhdGUgX3hLZXk6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBwdWJsaWMgZ2V0IGdldGh1cnQoKTogQnV0dG9uU3RhdGUgeyByZXR1cm4gdGhpcy5feEtleSB9XG5cbiAgICBwcml2YXRlIF9qS2V5OiBCdXR0b25TdGF0ZSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgcHVibGljIGdldCBhdHRhY2syKCk6IEJ1dHRvblN0YXRlIHsgcmV0dXJuIHRoaXMuX2pLZXkgfVxuXG4gICAgcHJpdmF0ZSBfbEtleTogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuICAgIHB1YmxpYyBnZXQgYXR0YWNrMygpOiBCdXR0b25TdGF0ZSB7IHJldHVybiB0aGlzLl9sS2V5IH1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkgeyB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuICAgIGNsb3NlSW5wdXQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuICAgIG9wZW5JbnB1dCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hBeGlzID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hBeGlzID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XG4gICAgICAgICAgICAgICAgdGhpcy5fdkF4aXMgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuajogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5fa0tleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa0tleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa0tleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLms6IFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9qS2V5ID09PSBCdXR0b25TdGF0ZS5SZXN0IHx8IHRoaXMuX2pLZXkgPT09IEJ1dHRvblN0YXRlLlJlbGVhc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2pLZXkgPSBCdXR0b25TdGF0ZS5QcmVzc2VkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2pLZXkgPSBCdXR0b25TdGF0ZS5IZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmw6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xLZXkgPT09IEJ1dHRvblN0YXRlLlJlc3QgfHwgdGhpcy5fbEtleSA9PT0gQnV0dG9uU3RhdGUuUmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbEtleSA9IEJ1dHRvblN0YXRlLlByZXNzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbEtleSA9IEJ1dHRvblN0YXRlLkhlbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZBeGlzID0gY2xhbXAodGhpcy5fdkF4aXMpO1xuICAgICAgICB0aGlzLl9oQXhpcyA9IGNsYW1wKHRoaXMuX2hBeGlzKTtcbiAgICB9XG5cbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oQXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICB0aGlzLl92QXhpcyArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuajogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fa0tleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa0tleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3hLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5feEtleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl94S2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feEtleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuazogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2pLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5faktleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9qS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faktleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubDogXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xLZXkgPT09IEJ1dHRvblN0YXRlLlByZXNzZWQgfHwgdGhpcy5fbEtleSA9PT0gQnV0dG9uU3RhdGUuSGVsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sS2V5ID0gQnV0dG9uU3RhdGUuUmVsZWFzZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbEtleSA9IEJ1dHRvblN0YXRlLlJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZBeGlzID0gY2xhbXAodGhpcy5fdkF4aXMpO1xuICAgICAgICB0aGlzLl9oQXhpcyA9IGNsYW1wKHRoaXMuX2hBeGlzKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgYTogbnVtYmVyID0gLTEsIGI6IG51bWJlciA9IDEpIHtcbiAgICBpZiAodmFsdWUgPCBhKSByZXR1cm4gYTtcbiAgICBpZiAodmFsdWUgPiBiKSByZXR1cm4gYjtcbiAgICByZXR1cm4gdmFsdWU7XG59Il19
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
        if (this.openSound) {
            cc.audioEngine.playEffect(this.openSound, false);
        }
        else {
            cc.error("Chest.openSound is not assigned!");
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL29iai9jaGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXNDQztRQXBDRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUE2QnZDLENBQUM7SUEzQkcsc0JBQU0sR0FBTjtJQUNBLENBQUM7SUFDRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUM7WUFDN0IsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsYUFBYTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDUTtJQUxkLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FzQ3pCO0lBQUQsWUFBQztDQXRDRCxBQXNDQyxDQXRDa0MsRUFBRSxDQUFDLFNBQVMsR0FzQzlDO2tCQXRDb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcG90aW9uUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBvcGVuU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9hbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9pc09wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKXtcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbmVkKSByZXR1cm47XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT09IFwiUGxheWVyXCIpe1xuICAgICAgICAgICAgLy/mkq3mlL7plovllZ/lr7bnrrHli5XnlathbmltYXRpb25cbiAgICAgICAgICAgIHRoaXMub3BlbkNoZXN0KCk7XG4gICAgICAgICAgICB0aGlzLl9pc09wZW5lZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3BlbkNoZXN0KCkge1xuICAgICAgICBsZXQgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGlmIChhbmltKSBhbmltLnBsYXkoXCJjaGVzdF9vcGVuXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3BlblNvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMub3BlblNvdW5kLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIkNoZXN0Lm9wZW5Tb3VuZCBpcyBub3QgYXNzaWduZWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/ol6XmsLTmlL7lnKjlr7bnrrHnmoTnr4Dpu57kuYvkuItcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9Pnt9LDAuNSk7XG4gICAgICAgIGNvbnN0IHBvdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG90aW9uUHJlZmFiKTtcbiAgICAgICAgcG90aW9uLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgcG90aW9uLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbik7XG5cbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxpdGllcy9aU29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDOzs7R0FHRztBQUVIO0lBQXFDLDJCQUFZO0lBQWpEOztJQUlBLENBQUM7SUFIRyx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFIZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQUkzQjtJQUFELGNBQUM7Q0FKRCxBQUlDLENBSm9DLEVBQUUsQ0FBQyxTQUFTLEdBSWhEO2tCQUpvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBhIG5vZGUgcmVuZGVyIGluIGEgd2F5IHN1Y2ggdGhhdCBpdCBhcHBlYXJzIGJlaGluZCBub2Rlc1xuICogdGhhdCBhcmUgbG9jYXRlZCBiZWxvdyBpdC5cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpTb3J0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDAgKyAtdGhpcy5ub2RlLnk7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbnUvTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXdEQztRQXRERyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUFpRHJDLENBQUM7SUEvQ0cscUJBQU0sR0FBTjtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsS0FBSyxJQUFJO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV4RSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBRUksSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixTQUFTLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM3QixTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDRCx1QkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRixjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JGLGNBQWMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsOEJBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt5Q0FDTTtJQUxaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F3RHhCO0lBQUQsV0FBQztDQXhERCxBQXdEQyxDQXhEaUMsRUFBRSxDQUFDLFNBQVMsR0F3RDdDO2tCQXhEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgRXhpdEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgTWVudWJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHB1YmxpYyBWb2x1bW5WYWx1ZTogbnVtYmVyID0gMC41O1xuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIGxldCBzYXZlZFZvbHVtbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZvbHVtblZhbHVlXCIpO1xuICAgICAgICBpZiAoc2F2ZWRWb2x1bW4gIT09IG51bGwpIHRoaXMuVm9sdW1uVmFsdWUgPSBOdW1iZXIoc2F2ZWRWb2x1bW4pO1xuICAgICAgICBlbHNlIHRoaXMuVm9sdW1uVmFsdWUgPSAwLjU7XG4gICAgICAgIHRoaXMucGxheWJnbSgpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVm9sdW1uVmFsdWVcIiwgdGhpcy5Wb2x1bW5WYWx1ZS50b1N0cmluZygpKTtcblxuICAgICAgICBsZXQgZXhpdEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBleGl0SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGV4aXRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xuICAgICAgICBleGl0SGFuZGxlci5oYW5kbGVyID0gXCJFeGl0QnV0dG9uRXZlbnRcIjtcbiAgICAgICAgdGhpcy5FeGl0QnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goZXhpdEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXJ0KCl7XG5cbiAgICAgICAgbGV0IE1hcEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIE1hcEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIE1hcEJ1dHRvbi5jb21wb25lbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgTWFwQnV0dG9uLmhhbmRsZXIgPSBcIkxvYWRNYXBcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL01hcEJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKE1hcEJ1dHRvbik7XG4gICAgfVxuICAgIExvYWRHYW1lKCl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcbiAgICAgICAgICAgIGxvYWRpbmdNYW5hZ2VyLnN0YXJ0TG9hZGluZyhcImRlbW9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIExvYWRNYXAoKXtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbG9hZGluZ01hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzL0xvYWRpbmdNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkxvYWRpbmdNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgbG9hZGluZ01hbmFnZXIuc3RhcnRMb2FkaW5nKFwiZGVtb190ZXN0XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXhpdEJ1dHRvbkV2ZW50KCl7XG4gICAgICAgIGNjLmdhbWUuZW5kKCk7XG4gICAgfVxuICAgIHBsYXliZ20oKXtcbiAgICAgICAgaWYgKHRoaXMuTWVudWJnbSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuTWVudWJnbSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIkJHTSBub3QgYXNzaWduZWQhXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL1NoeUFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5HLDBEQUFzRTtBQUN0RSxpQ0FBNEI7QUFDNUIsOENBQTZDO0FBQzdDLGtEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLE9BQU8sQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQVc7SUFDaEQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFHRDtJQUNZLDRCQUFLO0lBRGpCO1FBQUEscUVBMEdDO1FBdkdHLGlFQUFpRTtRQUVqRSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQix5Q0FBeUM7UUFFekMsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQix1RUFBdUU7UUFFdkUsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkI7Ozs7VUFJRTtRQUVGLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUkzQixZQUFNLEdBQWdCLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLGNBQVEsR0FBZ0IsNEJBQVcsQ0FBQyxJQUFJLENBQUM7UUFFakMsaUJBQVcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O1FBeUVwQyxpQkFBaUI7SUFDckIsQ0FBQztJQWxGRyxzQkFBVyxvQ0FBYzthQUF6QixjQUE4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDekQsc0JBQVcsa0NBQVk7YUFBdkIsY0FBNEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBUzdDLDhCQUFXLEdBQXJCLFVBQXNCLEVBQVU7UUFDNUIsNEVBQTRFO1FBQzVFLDRFQUE0RTtRQUM1RSxtQkFBbUI7UUFDbkIsd0VBQXdFO1FBQ3hFLHlCQUF5QjtRQUN6Qix5RUFBeUU7UUFDekUsMkVBQTJFO1FBQzNFLG1EQUFtRDtRQUNuRCxzREFBc0Q7UUFDdEQsbUVBQW1FO1FBQ25FLDhEQUE4RDtRQUM5RCw2RUFBNkU7UUFDN0UsRUFBRTtRQUNGLG9FQUFvRTtRQUNwRSw0QkFBNEI7UUFDNUIscUVBQXFFO1FBQ3JFLHFDQUFxQztRQUNyQyw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDN0Msb0NBQW9DO1FBQ3BDLE1BQU07UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JGLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvRSxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDOUMsa0ZBQWtGO1lBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1NBQ25DO1FBQ0Qsb0NBQW9DO1FBQ3BDLE1BQU07UUFDTixnQ0FBZ0M7YUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFDRCxZQUFZO0lBQ2hCLENBQUM7SUFHRCx3QkFBd0I7SUFFeEIsNEVBQTRFO0lBQzVFLDhGQUE4RjtJQUM5RixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLG1DQUFtQztJQUNuQyxpRkFBaUY7SUFDakYsc0NBQXNDO0lBQ3RDLDRFQUE0RTtJQUM1RSx5QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsWUFBWTtJQUNoQixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWTtJQUNoQixDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNBO0lBT25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNRO0lBdEJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRzVCO0lBQUQsZUFBQztDQTFHRCxBQTBHQyxDQXpHVyxlQUFLLEdBeUdoQjtrQkExR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBCdXR0b25TdGF0ZSwgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi4vaW5wdXQvSUlucHV0Q29udHJvbHNcIjtcbmltcG9ydCBBZ2VudCBmcm9tIFwiLi9BZ2VudFwiO1xuaW1wb3J0IHsgQ293YXJkIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9Db3dhcmRcIjtcbmltcG9ydCB7IFdhbmRlcmVyIH0gZnJvbSBcIi4vc3RyYXRlZ2llcy9XYW5kZXJlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiBNaXhlcyB0d28gdmVjdG9ycy5cbiAqIFxuICogRXhhbXBsZTogYG1peFZlYzIoYSwgYiwgMC4yNSlgIChNYXRoZW1hdGljYWxseSBlcXVpdmFsZW50IHRvIGEgKiAwLjI1ICsgYiAqIDAuNzUpXG4gKiBAcGFyYW0gbWl4IEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxuICogQHJldHVybnMgVGhlIG1peGVkIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gbWl4VmVjMihhOiBjYy5WZWMyLCBiOiBjYy5WZWMyLCBtaXg6IG51bWJlcikge1xuICAgIHJldHVybiBhLm11bChtaXgpLmFkZChiLm11bCgxLjAgLSBtaXgpKVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h5QWdlbnRcbiAgICBleHRlbmRzIEFnZW50XG4gICAgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XG4gICAgLyoqIFRoZSBhZ2VudCB3aWxsIG1vdmUgZm9yIHRoaXMgbG9uZyBiZWZvcmUgc3RvcHBpbmcgdG8gd2FpdC4gKi9cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgbW92ZUR1cmF0aW9uID0gMS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCBtb3ZlIGF0IHRoaXMgc3BlZWQuICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIG1vdmVTcGVlZCA9IDEuMDtcbiAgICAvKiogVGhlIGFnZW50IHdpbGwgd2FpdCBmb3IgdGhpcyBsb25nIGJlZm9yZSBzdGFydGluZyB0byBtb3ZlIGFnYWluLiAqL1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICB3YWl0RHVyYXRpb24gPSAwLjU7XG4gICAgLyoqIFRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiB3aWxsIGJlIHJhbmRvbWl6ZWQgYnkgdGhpcyBmYWN0b3IsIFxuICAgICAqICBzdWNoIHRoYXQgdGhlIGFjdHVhbCB3YWl0IGR1cmF0aW9uIGlzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuXG4gICAgICogIHdhaXREdXJhdGlvbiB4ICgxIC0gd2FpdFJhbmRvbUZhY3RvcikgYW5kIFxuICAgICAqICB3YWl0RHVyYXRpb24geCAoMSArIHdhaXRSYW5kb21GYWN0b3IpLlxuICAgICovXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICAgIHdhaXRSYW5kb21GYWN0b3IgPSAwLjE7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcnVuQXdheUZyb206IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBzYWZlRGlzdGFuY2U6IG51bWJlciA9IDUuMDtcblxuICAgIHB1YmxpYyBnZXQgaG9yaXpvbnRhbEF4aXMoKSB7IHJldHVybiB0aGlzLl9tb3ZlQXhpczJELnggfVxuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCkgeyByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55IH1cbiAgICBhdHRhY2s6IEJ1dHRvblN0YXRlID0gQnV0dG9uU3RhdGUuUmVzdDtcbiAgICBpbnRlcmFjdDogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5SZXN0O1xuXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRDogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcbiAgICBwcml2YXRlIF93YW5kZXJlcjogV2FuZGVyZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2Nvd2FyZDogQ293YXJkID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc1dhaXRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBhZ2VudFVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgICAgICAvLyBUT0RPICgzLjIpOiBDb21iaW5lIHRoZSB0d28gc3RyYXRlZ2llcyB0byBpbXBsZW1lbnQgU2h5QWdlbnQncyBiZWhhdmlvdXIuXG4gICAgICAgIC8vIFtTUEVDSUZJQ0FUSU9OU11cbiAgICAgICAgLy8gLSBUaGUgU2h5QWdlbnQgaXMgbGlrZSB0aGUgV2FuZGVyQWdlbnQsIGJ1dCB3aGVuIGl0IGlzIGFib3V0IHRvIG1vdmUsXG4gICAgICAgIC8vICAgdGhlcmUgYXJlIHR3byBjYXNlczpcbiAgICAgICAgLy8gICAgLSBJZiB0aGUgYWdlbnQncyBkaXN0YW5jZSB0byB0aGUgdGFyZ2V0IChydW5Bd2F5RnJvbSkgaXMgbGVzcyB0aGFuIFxuICAgICAgICAvLyAgICAgIHRoZSBzYWZlIGRpc3RhbmNlIChzYWZlRGlzdGFuY2UpLCBzZXQgdGhpcy5fbW92ZUF4aXMyRCBhcyBhIG1peCBvZiBcbiAgICAgICAgLy8gICAgICB0aGUgd2FuZGVyZXIncyBheGVzIGFuZCB0aGUgY293YXJkJ3MgYXhlcy4gXG4gICAgICAgIC8vICAgICAgUGxlYXNlIHVzZSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gbWl4VmVjMiB3aXRoIFxuICAgICAgICAvLyAgICAgIGEgPSB3YW5kZXJlck1vdmUsIGIgPSBjb3dhcmRNb3ZlLCBtaXggPSAwLjI1LiAoU2VlIGxpbmUgMjUpXG4gICAgICAgIC8vICAgIC0gT3RoZXJ3aXNlLCBzZXQgdGhpcy5tb3ZlQXhpczJEIGFzIHRoZSB3YW5kZXJlcidzIGF4ZXMuXG4gICAgICAgIC8vIC0gTm90ZSB0aGF0IHRoZSBhZ2VudCBzaG91bGQgTk9UIGJlIGFibGUgdG8gY2hhbmdlIGRpcmVjdGlvbiB3aGlsZSBtb3ZpbmcuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC0gSGludCAxOiBZb3UgY2FuIHVzZSB0aGlzLl9jb3dhcmQuZGlzdGFuY2VGcm9tVGFyZ2V0IHRvIGdldCB0aGUgXG4gICAgICAgIC8vICAgZGlzdGFuY2UgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgLy8gLSBIaW50IDI6IFRyeSBtYWludGFpbmluZyB0aGlzLmlzV2FpdGluZyB0byBwcmV2ZW50IHRoZSBhZ2VudCBmcm9tXG4gICAgICAgIC8vICAgY2hhbmdpbmcgZGlyZWN0aW9uIHdoaWxlIG1vdmluZy5cbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgICAgIGlmICghdGhpcy5fd2FuZGVyZXIgfHwgIXRoaXMuX2Nvd2FyZCkgcmV0dXJuO1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnVwZGF0ZShkdCk7XG4gICAgICAgIHRoaXMuX2Nvd2FyZC51cGRhdGUoZHQpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICAgICAgbGV0IHdhbmRlcmVyTW92ZSA9IGNjLnYyKHRoaXMuX3dhbmRlcmVyLmhvcml6b250YWxBeGlzLCB0aGlzLl93YW5kZXJlci52ZXJ0aWNhbEF4aXMpO1xuICAgICAgICBsZXQgY293YXJkTW92ZSA9IGNjLnYyKHRoaXMuX2Nvd2FyZC5ob3Jpem9udGFsQXhpcywgdGhpcy5fY293YXJkLnZlcnRpY2FsQXhpcyk7XG4gICAgICAgIGlmICh3YW5kZXJlck1vdmUuZnV6enlFcXVhbHMoY2MuVmVjMi5aRVJPLCAwLjAxKSkge1xuICAgICAgICAgICAgLy8gV2FuZGVyZXIgaGFzIHN0b3BwZWQuIFRoZSBhZ2VudCBzaG91bGQgbW92ZSB0aGUgbW9tZW50IGl0IGlzIG5vIGxvbmdlciBzdG9wcGVkLlxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vdmVBeGlzMkQgPSB3YW5kZXJlck1vdmU7XG4gICAgICAgIH1cbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIC8vIC4uLlxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLl9pc3dhaXRpbmcpIC4uLlxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pc1dhaXRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb3dhcmQuZGlzdGFuY2VGcm9tVGFyZ2V0IDwgdGhpcy5zYWZlRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gbWl4VmVjMih3YW5kZXJlck1vdmUsIGNvd2FyZE1vdmUsIDAuMjUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlQXhpczJEID0gd2FuZGVyZXJNb3ZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgIC8vIFRPRE8gKDMuMSk6IEluaXRpYWxpemUgU2h5QWdlbnQncyB0d28gc3RyYXRlZ2llcyAodGhpcy53YW5kZXJlciBhbmQgdGhpcy5jb3dhcmQpIGNvcnJlY3RseS5cbiAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXG4gICAgLy8gLSBZb3UnbGwgbmVlZCBTaHlBZ2VudCdzIHByb3BlcnRpZXM6IG1vdmVEdXJhdGlvbiwgd2FpdER1cmF0aW9uLCBcbiAgICAvLyAgIHdhaXRSYW5kb21GYWN0b3IsIHJ1bkF3YXlGcm9tLlxuICAgIC8vIC0gWW91J2xsIGFsc28gbmVlZCB0byBwYXNzIGEgcmVmZXJlbmNlIHRvIHRoaXMgb2JqZWN0IHRvIHRoZSBDb3dhcmQgc3RyYXRlZ3kuIFxuICAgIC8vICAgdG8gY29uc3RydWN0IGl0IGNvcnJlY3RseS4gKEhvdz8pXG4gICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgdGhpcy5fd2FuZGVyZXIgPSBuZXcgV2FuZGVyZXIodGhpcy5tb3ZlRHVyYXRpb24sIHRoaXMud2FpdER1cmF0aW9uLCB0aGlzLndhaXRSYW5kb21GYWN0b3IpO1xuICAgICAgICB0aGlzLl9jb3dhcmQgPSBuZXcgQ293YXJkKHRoaXMsIHRoaXMucnVuQXdheUZyb20pO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8jcmVnaW9uIFtZT1VSIElNUExFTUVOVEFUSU9OIEhFUkVdXG4gICAgICAgIHRoaXMuX3dhbmRlcmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX2Nvd2FyZC5zdGFydCgpO1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL3N0cmF0ZWdpZXMvV2FuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlEQUFxQztBQUVyQzs7R0FFRztBQUNIO0lBQThCLDRCQUFXO0lBWXJDLGtCQUFZLFlBQW9CLEVBQUUsWUFBb0IsRUFBRSxnQkFBd0I7UUFBaEYsWUFDSSxpQkFBTyxTQVdWO1FBdkJELGlFQUFpRTtRQUN6RCxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUM1Qix1RUFBdUU7UUFDL0QsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFDNUI7Ozs7VUFJRTtRQUNNLHVCQUFpQixHQUFHLEdBQUcsQ0FBQztRQWdCaEMsd0RBQXdEO1FBQ2hELG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLDhEQUE4RDtRQUN0RCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUMxQiwyRUFBMkU7UUFDbkUscUJBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QyxvQ0FBb0M7UUFDNUIsaUJBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQW5CL0IsNEVBQTRFO1FBQzVFLHdDQUF3QztRQUN4QyxtQkFBbUI7UUFDbkIsMERBQTBEO1FBQzFELDRFQUE0RTtRQUM1RSxvQ0FBb0M7UUFDcEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDOztRQUMxQyxZQUFZO0lBQ2hCLENBQUM7SUFrQkQsc0JBQVcsb0NBQWM7UUFQekIsNEVBQTRFO1FBQzVFLDhEQUE4RDtRQUM5RCxtQkFBbUI7UUFDbkIsMERBQTBEO1FBQzFELHdEQUF3RDtRQUN4RCwrQ0FBK0M7UUFDL0MsNEVBQTRFO2FBQzVFO1lBQ0ksb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsWUFBWTtRQUNoQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGtDQUFZO2FBQXZCO1lBQ0ksb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsWUFBWTtRQUNoQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFNO2FBQWpCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsOEJBQVE7YUFBbkI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFTSx3QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNqRSxDQUFDO0lBQ00seUJBQU0sR0FBYixVQUFjLEVBQVU7UUFDcEIsK0NBQStDO1FBQy9DLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRXRELDRFQUE0RTtRQUM1RSw0REFBNEQ7UUFDNUQsbUJBQW1CO1FBQ25CLGlFQUFpRTtRQUNqRSwyRUFBMkU7UUFDM0UsMkVBQTJFO1FBQzNFLGNBQWM7UUFDZCx3RUFBd0U7UUFDeEUsaURBQWlEO1FBQ2pELGlEQUFpRDtRQUNqRCx5RUFBeUU7UUFDekUsOENBQThDO1FBQzlDLG1EQUFtRDtRQUNuRCw0RUFBNEU7UUFFNUUsb0NBQW9DO1FBQ3BDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFNUgsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsRUFBRSxDQUFBO1NBQ25EO1FBRUQsSUFBSSxDQUFFLFdBQVcsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdGLFlBQVk7SUFDaEIsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTlGQSxBQThGQyxDQTlGNkIsa0JBQUUsQ0FBQyxRQUFRLEdBOEZ4QztBQTlGWSw0QkFBUTtBQWdHckIsU0FBUyx1QkFBdUI7SUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25TdGF0ZSB9IGZyb20gXCIuLi8uLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xuaW1wb3J0IEFnZW50IGZyb20gXCIuLi9BZ2VudFwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9BZ2VudFN0cmF0ZWd5XCI7XG5cbi8qKlxuICogQW4gQUkgc3RyYXRlZ3kgdGhhdCBkZXNjcmliZXMgYSBcIndhbmRlcmluZ1wiIGJlaGF2aW91ci5cbiAqL1xuZXhwb3J0IGNsYXNzIFdhbmRlcmVyIGV4dGVuZHMgQUkuU3RyYXRlZ3kge1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCBtb3ZlIGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0b3BwaW5nIHRvIHdhaXQuICovXG4gICAgcHJpdmF0ZSBfbW92ZUR1cmF0aW9uID0gMS4wO1xuICAgIC8qKiBUaGUgYWdlbnQgd2lsbCB3YWl0IGZvciB0aGlzIGxvbmcgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUgYWdhaW4uICovXG4gICAgcHJpdmF0ZSBfd2FpdER1cmF0aW9uID0gMC41O1xuICAgIC8qKiBUaGUgYWN0dWFsIHdhaXQgZHVyYXRpb24gd2lsbCBiZSByYW5kb21pemVkIGJ5IHRoaXMgZmFjdG9yLCBcbiAgICAgKiAgc3VjaCB0aGF0IHRoZSBhY3R1YWwgd2FpdCBkdXJhdGlvbiBpcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlblxuICAgICAqICB3YWl0RHVyYXRpb24geCAoMSAtIHdhaXRSYW5kb21GYWN0b3IpIGFuZCBcbiAgICAgKiAgd2FpdER1cmF0aW9uIHggKDEgKyB3YWl0UmFuZG9tRmFjdG9yKS5cbiAgICAqL1xuICAgIHByaXZhdGUgX3dhaXRSYW5kb21GYWN0b3IgPSAwLjE7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3ZlRHVyYXRpb246IG51bWJlciwgd2FpdER1cmF0aW9uOiBudW1iZXIsIHdhaXRSYW5kb21GYWN0b3I6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8KlxcXFxcbiAgICAgICAgLy8gVE9ETyAoMi4xKTogQ29tcGxldGUgdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAvLyBbU1BFQ0lGSUNBVElPTlNdXG4gICAgICAgIC8vIC0gSW5pdGlhbGl6ZSB0aGUgZm91ciBwcml2YXRlIHZhcmlhYmxlcyBhYm92ZSBwcm9wZXJseS5cbiAgICAgICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICB0aGlzLl9tb3ZlRHVyYXRpb24gPSBtb3ZlRHVyYXRpb247XG4gICAgICAgIHRoaXMuX3dhaXREdXJhdGlvbiA9IHdhaXREdXJhdGlvbjtcbiAgICAgICAgdGhpcy5fd2FpdFJhbmRvbUZhY3RvciA9IHdhaXRSYW5kb21GYWN0b3I7XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH1cblxuICAgIC8qKiBUaGUgdGltZSBwb2ludCBhZnRlciB3aGljaCB0aGUgYWdlbnQgc2hvdWxkIHdhaXQuICovXG4gICAgcHJpdmF0ZSBfbmV4dFdhaXRUaW1lID0gMDtcbiAgICAvKiogVGhlIHRpbWUgcG9pbnQgYWZ0ZXIgd2hpY2ggdGhlIGFnZW50IHNob3VsZCBtb3ZlIGFnYWluLiAqL1xuICAgIHByaXZhdGUgX25leHRNb3ZlVGltZSA9IDA7XG4gICAgLyoqIFRoZSB2ZWxvY2l0eSAodmVjdG9yIHdpdGggbWFnbml0dWRlKSBhdCB3aGljaCB0aGUgYWdlbnQgc2hvdWxkIG1vdmUuICovXG4gICAgcHJpdmF0ZSBfd2FuZGVyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XG4gICAgLyoqIFRoZSBhZ2VudCdzIG91dHB1dCB0byBJSW5wdXQuICovXG4gICAgcHJpdmF0ZSBfbW92ZUF4aXMyRCA9IGNjLlZlYzIuWkVSTztcblxuICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgIC8vIFRPRE8gKDIuMik6IE1hcCBtb3ZlQXhpczJEIHRvIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGF4ZXMuXG4gICAgLy8gW1NQRUNJRklDQVRJT05TXVxuICAgIC8vIC0gbW92ZUF4aXMyRC54IHNob3VsZCBiZSBtYXBwZWQgdG8gdGhlIGhvcml6b250YWwgYXhpcy5cbiAgICAvLyAtIG1vdmVBeGlzMkQueSBzaG91bGQgYmUgbWFwcGVkIHRvIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICAgIC8vIC0gWW91IGNhbiBsZWF2ZSB0aGUgcmVtYWluaW5nIHVuaW1wbGVtZW50ZWQuXG4gICAgLy8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCpcXFxcXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsQXhpcygpOiBudW1iZXIge1xuICAgICAgICAvLyNyZWdpb24gW1lPVVIgSU1QTEVNRU5UQVRJT04gSEVSRV1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVBeGlzMkQueDtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmVydGljYWxBeGlzKCk6IG51bWJlciB7XG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUF4aXMyRC55O1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9XG4gICAgcHVibGljIGdldCBhdHRhY2soKTogQnV0dG9uU3RhdGUge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fbmV4dE1vdmVUaW1lID0gY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwLjA7XG4gICAgICAgIHRoaXMuX25leHRXYWl0VGltZSA9IHRoaXMuX25leHRNb3ZlVGltZSAtIHRoaXMuX3dhaXREdXJhdGlvbjtcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIC8qKiBUaGUgY3VycmVudCB0aW1lIGluIHRoZSBnYW1lIGluIHNlY29uZHMuICovXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IGNjLmRpcmVjdG9yLmdldFRvdGFsVGltZSgpIC8gMTAwMC4wO1xuXG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuICAgICAgICAvLyBUT0RPICgyLjMpOiBJbXBsZW1lbnQgdGhlIGJlaGF2aW91ciBvZiBhIHdhbmRlcmluZyBhZ2VudC5cbiAgICAgICAgLy8gW1NQRUNJRklDQVRJT05TXVxuICAgICAgICAvLyAxLiBUaGUgYWdlbnQgc2hvdWxkIHJlY29tcHV0ZSBpdHMgd2FuZGVyaW5nIGRpcmVjdGlvbiB3aGVuIHRoZVxuICAgICAgICAvLyAgICBjdXJyZW50IHRpbWUgKGN1clRpbWUpIHJlYWNoZXMgdGhlIG5leHQgbW92ZSB0aW1lICh0aGlzLm5leHRNb3ZlVGltZSlcbiAgICAgICAgLy8gICAgIC0gV2hlbiB0aGlzIGhhcHBlbnMsIHJlY29tcHV0ZSB0aGUgbmV4dCBtb3ZlIHRpbWUgYW5kIHRoZSBuZXh0IHdhaXQgXG4gICAgICAgIC8vICAgICAgIHRpbWUuXG4gICAgICAgIC8vICAgICAtIENvbXB1dGUgdGhlIHdhbmRlcmluZyBkaXJlY3Rpb24gYXMgYSByYW5kb20gMkQgdmVjdG9yIHVzaW5nIHRoZVxuICAgICAgICAvLyAgICAgICBwcm92aWRlZCBmdW5jdGlvbiBcInJhbmRvbVBvaW50T25DaXJjbGVcIi5cbiAgICAgICAgLy8gMi4gVGhlIGFnZW50J3MgbW92ZW1lbnQgYXhlcyAodGhpcy5tb3ZlQXhpczJEKVxuICAgICAgICAvLyAgICBzaG91bGQgYmUgZXF1YWwgdG8gdGhlIHdhbmRlciB2ZWxvY2l0eSAodGhpcy53YW5kZXJWZWxvY2l0eSkgYmVmb3JlXG4gICAgICAgIC8vICAgIHRoZSBuZXh0IHdhaXQgdGltZSAodGhpcy5uZXh0V2FpdFRpbWUpLiBcbiAgICAgICAgLy8gICAgT1RIRVJXSVNFIGl0IHNob3VsZCBiZSBlcXVhbCB0byBjYy5WZWMyLlpFUk8uXG4gICAgICAgIC8vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqXFxcXFxuXG4gICAgICAgIC8vI3JlZ2lvbiBbWU9VUiBJTVBMRU1FTlRBVElPTiBIRVJFXVxuICAgICAgICBpZiAoY3VycmVudFRpbWUgPj0gdGhpcy5fbmV4dE1vdmVUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0V2FpdFRpbWUgPSBjdXJyZW50VGltZSArIHRoaXMuX21vdmVEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX25leHRNb3ZlVGltZSA9IHRoaXMuX25leHRXYWl0VGltZSArIHRoaXMuX3dhaXREdXJhdGlvbiAqICgxLjAgKiB0aGlzLl93YWl0UmFuZG9tRmFjdG9yICogKE1hdGgucmFuZG9tKCkgLSAyLjAgKiAxLjApKTtcblxuICAgICAgICAgICAgdGhpcy5fd2FuZGVyVmVsb2NpdHkgPSByYW5kb21Qb2ludE9uVW5pdENpcmNsZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzIC5fbW92ZUF4aXMyRCA9IChjdXJyZW50VGltZSA8IHRoaXMuX25leHRXYWl0VGltZSkgPyB0aGlzLl93YW5kZXJWZWxvY2l0eSA6IGNjLlZlYzIuWkVSTztcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJhbmRvbVBvaW50T25Vbml0Q2lyY2xlKCkge1xuICAgIGxldCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICByZXR1cm4gbmV3IGNjLlZlYzIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xufSJdfQ==
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
        _this.endBgm = null;
        _this.LevelLabel = null;
        _this.maxhp = 10;
        _this.player = null;
        _this.VolumnValue = null;
        _this.Level = 1;
        _this._hasShownGameOver = false;
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
        }

        if (!window._firebaseInited) {
            firebase.initializeApp(firebaseConfig);
            window._firebaseInited = true;
            cc.log("✅ Firebase initialized in GameManager.ts");
        } else {
            cc.log("ℹ️ Firebase already initialized");
        };*/
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
    GameManager.prototype.playendBGM = function () {
        if (this.endBgm)
            cc.audioEngine.playMusic(this.endBgm, true);
        else
            cc.error("End BGM not assigned!");
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
        //close keyboard event
        var _this = this;
        var _a, _b;
        this.Level++;
        this.saveProgress(this.Level);
        if (this.LevelLabel) {
            this.LevelLabel.string = "Level: " + this.Level;
        }
        else {
            cc.error("Level label not found");
        }
        var trans = cc.resources.load("prefabs/NextLevel", cc.Prefab, function (err, prefab) {
            if (err) {
                cc.error("Failed to load NextLevel prefab:", err);
                return;
            }
            var TRNode = cc.instantiate(prefab);
            var Canvas = cc.find("Canvas");
            TRNode.name = "TR";
            // Set the position of the transition node to the center of the canvas
            var cameraNode = cc.find("Canvas/Main Camera");
            if (cameraNode) {
                var worldPos = cameraNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var localPos = Canvas.convertToNodeSpaceAR(worldPos);
                TRNode.setPosition(localPos);
            }
            else {
                cc.warn("找不到 Main Camera, 使用預設位置 (0, 0)");
                TRNode.setPosition(0, 0);
            }
            TRNode.scaleX = 1;
            TRNode.scaleY = 1;
            TRNode.zIndex = 10; // Ensure it's on top
            Canvas.addChild(TRNode);
            var label = TRNode.getChildByName("MessageLabel").getComponent(cc.Label);
            if (label) {
                label.string = "\nGo to Level " + _this.Level + " !";
            }
            else {
                cc.error("MessageLabel not found");
            }
        }
        //destroy transition node after 2 seconds
        , 
        //destroy transition node after 2 seconds
        this.scheduleOnce(function () {
            var TRNode = cc.find("Canvas/TR");
            if (TRNode) {
                TRNode.destroy();
            }
        }, 2));
        this.scheduleOnce(function () {
            var _a;
            var mapGen = (_a = cc.find("GameManager")) === null || _a === void 0 ? void 0 : _a.getComponent("MapGenerator");
            if (mapGen) {
                mapGen.regenerateMap(_this.Level);
            }
            else {
                cc.error("MapGenerator component not found");
            }
        }, 1.5);
        // reset player position
        var playerComp = cc.find("Canvas/MapManager/Actors/Player").getComponent("Player");
        if (playerComp) {
            playerComp.SetPlayer(this.Level);
        }
        else {
            cc.error("Player component not found");
        }
        // reset monster
        var monsterMgr = (_a = cc.find("Canvas/MapManager/MonsterManager")) === null || _a === void 0 ? void 0 : _a.getComponent("MonsterManager");
        if (monsterMgr) {
            monsterMgr.SetMonster(this.Level);
        }
        // adjust camera zoom and UI scaling
        var camera = (_b = cc.find("Canvas/Main Camera")) === null || _b === void 0 ? void 0 : _b.getComponent(cc.Camera);
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
        if (this._hasShownGameOver)
            return;
        this._hasShownGameOver = true;
        this.playendBGM();
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
        property(cc.AudioClip)
    ], GameManager.prototype, "endBgm", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBVzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMGFDO1FBeGFVLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLHVCQUFpQixHQUFHLEtBQUssQ0FBQzs7SUE0WnRDLENBQUM7SUExWkcsNEJBQU0sR0FBTjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMxRCxJQUFJLFlBQVksRUFBRTtZQUNkLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDdEMsV0FBVyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDbEMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdB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RUFBRSxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQS9CLENBQStCLENBQUM7aUJBQ3pELEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQVUsRUFBRSxLQUFhO2dCQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQUksS0FBSyxHQUFHLENBQUMsVUFBSSxLQUFLLENBQUMsUUFBUSxnQkFBVyxLQUFLLENBQUMsWUFBYyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFRO1lBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdmFEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDRDtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNZO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ2dCO0lBUmxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwYS9CO0lBQUQsa0JBQUM7Q0ExYUQsQUEwYUMsQ0ExYXdDLEVBQUUsQ0FBQyxTQUFTLEdBMGFwRDtrQkExYW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IExvYWRpbmdNYW5hZ2VyIGZyb20gXCIuL01lbnUvTG9hZGluZ01hbmFnZXJcIjtcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcbi8vZm9yIEZpcmViYXNlIGluaXRpYWxpemF0aW9uXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIF9maXJlYmFzZUluaXRlZD86IGJvb2xlYW47XG4gICAgfVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHB1YmxpYyBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHB1YmxpYyBlbmRCZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIExldmVsTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgbWF4aHA6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwdWJsaWMgVm9sdW1uVmFsdWUgOiBudW1iZXIgPSBudWxsO1xuICAgIHB1YmxpYyBMZXZlbDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9oYXNTaG93bkdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgbGV0IHBhdXNlQnRuTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUGF1c2VcIik7IFxuICAgICAgICBpZiAocGF1c2VCdG5Ob2RlKSB7XG4gICAgICAgICAgICBsZXQgUGF1c2VCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgUGF1c2VCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgUGF1c2VCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICAgICAgUGF1c2VCdXR0b24uaGFuZGxlciA9IFwiUGF1c2VHYW1lXCI7XG4gICAgICAgICAgICBwYXVzZUJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChQYXVzZUJ1dHRvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIlBhdXNlIOaMiemIleevgOm7nuaJvuS4jeWIsO+8jOiri+aqouafpSBDYW52YXMvTWFpbiBDYW1lcmEvVUkvUGF1c2Ug5piv5ZCm5a2Y5Zyo77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGxldmVsIGxhYmVsXG4gICAgICAgIHRoaXMuTGV2ZWxMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgaWYgKHRoaXMuTGV2ZWxMYWJlbCkgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiICsgdGhpcy5MZXZlbDtcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIkxldmVsIGxhYmVsIG5vdCBmb3VuZFwiKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpO1xuXG4gICAgICAgIC8vYXNzaWduIGJsYW5rIHNwYWNlIGZvciBuZXh0IGxldmVsXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5sb2coXCJJcyBGaXJlYmFzZSBpbml0aWFsaXplZD9cIiwgd2luZG93Ll9maXJlYmFzZUluaXRlZCk7XG5cbiAgICAgICAgLypjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lERlc0LWVtV2RJMWdoZ1pXV0dwMXdxb1d2QXZUd0FxclFcIixcbiAgICAgICAgICAgIGF1dGhEb21haW46IFwicnVuZS1yYWlkcy5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgICAgICAgIHByb2plY3RJZDogXCJydW5lLXJhaWRzXCIsXG4gICAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcInJ1bmUtcmFpZHMuZmlyZWJhc2VzdG9yYWdlLmFwcFwiLFxuICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTMwNTE0MzYwODQzXCIsXG4gICAgICAgICAgICBhcHBJZDogXCIxOjUzMDUxNDM2MDg0Mzp3ZWI6MWNkZGE5ZDcyYmI0YjUyOTMyMjUwZVwiLFxuICAgICAgICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUIxQzVGRzFZU05cIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF3aW5kb3cuX2ZpcmViYXNlSW5pdGVkKSB7XG4gICAgICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICAgICAgICAgIHdpbmRvdy5fZmlyZWJhc2VJbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2MubG9nKFwi4pyFIEZpcmViYXNlIGluaXRpYWxpemVkIGluIEdhbWVNYW5hZ2VyLnRzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwi4oS577iPIEZpcmViYXNlIGFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH07Ki9cbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuR29OZXh0TGV2ZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uIT09bnVsbCkgdGhpcy5Wb2x1bW5WYWx1ZSA9IE51bWJlcihzYXZlZFZvbHVtbik7XG4gICAgICAgIGVsc2UgdGhpcy5Wb2x1bW5WYWx1ZSA9IDAuNTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0aGlzLlZvbHVtblZhbHVlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5Wb2x1bW5WYWx1ZSk7XG4gICAgICAgIHRoaXMucGxheU11c2ljKCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG5cbiAgICB9XG5cbiAgICBQYXVzZUdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF1c2UgcHJlZmFiIGxvYWRcIik7XG4gICAgICAgIC8vUGF1c2VzZXR0aW5nIGlzIGEgcHJlZmFiXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9QYXVzZVNldHRpbmdcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFBhdXNlU2V0dGluZyBwcmVmYWI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBQYXVzZU5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIENhbnZhcy5hZGRDaGlsZChQYXVzZU5vZGUpO1xuICAgICAgICAgICAgUGF1c2VOb2RlLm5hbWUgPSBcIlBhdXNlU2V0dGluZ1wiO1xuXG4gICAgICAgICAgICBsZXQgY2FtZXJhTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XG4gICAgICAgICAgICBpZiAoY2FtZXJhTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB3b3JsZFBvcyA9IGNhbWVyYU5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gQ2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgICAgICBQYXVzZU5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5om+5LiN5YiwIE1haW4gQ2FtZXJhLCDkvb/nlKjpoJDoqK3kvY3nva4gKDAsIDApXCIpO1xuICAgICAgICAgICAgICAgIFBhdXNlTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUGF1c2VOb2RlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICBQYXVzZU5vZGUuc2NhbGVZID0gMTtcbiAgICAgICAgICAgIC8vUGF1c2UgdGhlIGdhbWXvvIzlgZzmraLpjbXnm6Tkuovku7ZcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgwKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLlBhdXNlQWxsQW5pbWF0aW9uKENhbnZhcyk7IFxuICAgICAgICAgICAgdGhpcy5pbml0UGF1c2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXVzZSBwcmVmYWIgbG9hZC4uLlwiKTtcblxuICAgIH1cbiAgICBpbml0UGF1c2UoKSB7XG4gICAgICAgIC8vUmVzdW1lIGJ1dHRvblxuICAgICAgICBsZXQgUmVzdW1lQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgUmVzdW1lQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgUmVzdW1lQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcbiAgICAgICAgUmVzdW1lQnV0dG9uLmhhbmRsZXIgPSBcIlJlc3VtZUdhbWVcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvUmVzdW1lXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUmVzdW1lQnV0dG9uKTtcbiAgICAgICAgLy9Wb2x1bW4gc2xpZGVyXG4gICAgICAgIGxldCBWb2x1bW5TbGlkZXIgPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9Wb2x1bW4vVm9sdW1uU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgICAgICBsZXQgc2F2ZWRWb2x1bW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWb2x1bW5WYWx1ZVwiKTtcbiAgICAgICAgaWYgKHNhdmVkVm9sdW1uICE9PSBudWxsKSBWb2x1bW5TbGlkZXIucHJvZ3Jlc3M9IE51bWJlcihzYXZlZFZvbHVtbik7XG4gICAgICAgIGVsc2UgVm9sdW1uU2xpZGVyLnByb2dyZXNzID0gMC41O1xuICAgICAgICBWb2x1bW5TbGlkZXIubm9kZS5vbignc2xpZGUnLCB0aGlzLm9uVm9sdW1uQ2hhbmdlLCB0aGlzKTtcbiAgICAgICAgLy9SZXN0YXJ0IGJ1dHRvblxuICAgICAgICBsZXQgUmVzdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIFJlc3RhcnRCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJSZXN0YXJ0R2FtZVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1BhdXNlU2V0dGluZy9SZXN0YXJ0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goUmVzdGFydEJ1dHRvbik7XG4gICAgICAgIC8vXG4gICAgICAgIGxldCBEZXNjQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgRGVzY0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIERlc2NCdXR0b24uY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xuICAgICAgICBEZXNjQnV0dG9uLmhhbmRsZXIgPSBcInNob3dEZXNjXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0hvd1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKERlc2NCdXR0b24pO1xuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBEZXNjLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgRXhpdERlc2NCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBFeGl0RGVzY0J1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIEV4aXREZXNjQnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcbiAgICAgICAgRXhpdERlc2NCdXR0b24uaGFuZGxlciA9IFwiSGlkZURlc2NcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb24vRXhpdFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKEV4aXREZXNjQnV0dG9uKTtcbiAgICB9XG4gICAgSGlkZURlc2MoKSB7XG4gICAgICAgIGxldCBEZXNjID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmcvRGVzY3JpcHRpb25cIik7XG4gICAgICAgIERlc2MuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHNob3dEZXNjKCkge1xuICAgICAgICBsZXQgRGVzYyA9IGNjLmZpbmQoXCJDYW52YXMvUGF1c2VTZXR0aW5nL0Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBEZXNjLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIFJlc3RhcnRHYW1lKCkgey8vUmVzdGFydCB0aGUgZ2FtZSA9PiBiYWNrIHRvIG1lbnVcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDEpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oQ2FudmFzKTsgICAgXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxvYWRpbmdNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJMb2FkaW5nTWFuYWdlclwiKTtcbiAgICAgICAgICAgIGxvYWRpbmdNYW5hZ2VyLnN0YXJ0TG9hZGluZyhcIm1lbnVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICAvL0Rlc3Ryb3kgUGF1c2V0dGluZyBub2RlIGlmIGl0IGV4aXN0c1xuICAgICAgICAvL2xldCBQYXVzZVNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZXR0aW5nXCIpO1xuICAgICAgICAvL2lmIChQYXVzZVNldHRpbmdOb2RlKSBQYXVzZVNldHRpbmdOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy9lbHNlIGNjLmVycm9yKFwiUGF1c2VTZXR0aW5nIG5vZGUgbm90IGZvdW5kXCIpO1xuICAgICAgICAgXG4gICAgfVxuICAgIFJlc3VtZUdhbWUoKSB7XG4gICAgICAgIGxldCBQYXVzZVNldHRpbmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9QYXVzZVNldHRpbmdcIik7XG4gICAgICAgIGlmIChQYXVzZVNldHRpbmdOb2RlKSBQYXVzZVNldHRpbmdOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZWxzZSBjYy5lcnJvcihcIlBhdXNlU2V0dGluZyBub2RlIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgLy9SZXN1bWUgdGhlIGdhbWVcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNldFRpbWVTY2FsZSgxKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIHRoaXMuUmVzdW1lQWxsQW5pbWF0aW9uKENhbnZhcyk7IFxuICAgIH1cbiAgICBvblZvbHVtbkNoYW5nZShzbGlkZXI6IGNjLlNsaWRlcil7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7IC8vIDB+MVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuVm9sdW1uVmFsdWUgPSBzbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZvbHVtblZhbHVlXCIsIHRoaXMuVm9sdW1uVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIFBhdXNlQWxsQW5pbWF0aW9uKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xuICAgICAgICBmb3IgKGxldCBhbmltIG9mIGFuaW1zKSB7XG4gICAgICAgICAgICBpZiAoYW5pbSkgYW5pbS5wYXVzZSgpO1xuICAgICAgICAgICAgZWxzZSAgY2MuZXJyb3IoXCJBbmltYXRpb24gY29tcG9uZW50IG5vdCBmb3VuZCBvbiBub2RlOlwiLCBub2RlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB0aGlzLlBhdXNlQWxsQW5pbWF0aW9uKGNoaWxkKTtcbiAgICB9XG4gICAgUmVzdW1lQWxsQW5pbWF0aW9uKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IGFuaW1zID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5BbmltYXRpb24pO1xuICAgICAgICBmb3IgKGxldCBhbmltIG9mIGFuaW1zKSB7XG4gICAgICAgICAgICBpZiAoYW5pbSkgYW5pbS5yZXN1bWUoKTtcbiAgICAgICAgICAgIGVsc2UgIGNjLmVycm9yKFwiQW5pbWF0aW9uIGNvbXBvbmVudCBub3QgZm91bmQgb24gbm9kZTpcIiwgbm9kZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikgdGhpcy5SZXN1bWVBbGxBbmltYXRpb24oY2hpbGQpO1xuICAgIH1cbiAgICBwbGF5ZW5kQkdNKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRCZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmVuZEJnbSwgdHJ1ZSk7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJFbmQgQkdNIG5vdCBhc3NpZ25lZCFcIik7XG4gICAgfVxuXG4gICAgcGxheU11c2ljKCkge1xuICAgICAgICBpZiAodGhpcy5iZ20pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJCR00gbm90IGFzc2lnbmVkIVwiKTtcbiAgICB9XG5cbiAgICBwYXVzZU11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XG4gICAgfVxuXG4gICAgcmVzdW1lTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydEdhbWUoKXtcbiAgICAgICAgLy9Jbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXG4gICAgICAgIHRoaXMuTGV2ZWwgPSAxO1xuICAgICAgICBpZiAodGhpcy5MZXZlbExhYmVsKSB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIrIHRoaXMuTGV2ZWw7XG4gICAgICAgIGVsc2UgY2MuZXJyb3IoXCJMZXZlbCBMYWJlbCBub3QgZm91bmRcIik7XG4gICAgICAgIC8vc2V0IHBsYXllciBwb3NpdGlvblxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuU2V0UGxheWVyKHRoaXMuTGV2ZWwpO1xuICAgICAgICAvL3NldCBNYXBcbiAgICAgICAgbGV0IEdlbk1hcCA9IGNjLmZpbmQoXCJHYW1lTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XG4gICAgICAgIEdlbk1hcC5HZW5lcmF0b3JNYXAoKTtcbiAgICAgICAgLy9zZXQgbW9uc3RlclxuICAgICAgICBsZXQgTW9uc3Rlck1nciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJNb25zdGVyTWFuYWdlclwiKTtcbiAgICAgICAgTW9uc3Rlck1nci5TZXRNb25zdGVyKHRoaXMuTGV2ZWwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIEdvTmV4dExldmVsKCkge1xuICAgICAgICAvL2Nsb3NlIGtleWJvYXJkIGV2ZW50XG5cbiAgICAgICAgdGhpcy5MZXZlbCsrO1xuICAgICAgICB0aGlzLnNhdmVQcm9ncmVzcyh0aGlzLkxldmVsKTtcblxuICAgICAgICBpZiAodGhpcy5MZXZlbExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLkxldmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJMZXZlbCBsYWJlbCBub3QgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRyYW5zID0gY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL05leHRMZXZlbFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgTmV4dExldmVsIHByZWZhYjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBUUk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY29uc3QgQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIFRSTm9kZS5uYW1lID0gXCJUUlwiO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBub2RlIHRvIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgbGV0IGNhbWVyYU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xuICAgICAgICAgICAgaWYgKGNhbWVyYU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IENhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgVFJOb2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaJvuS4jeWIsCBNYWluIENhbWVyYSwg5L2/55So6aCQ6Kit5L2N572uICgwLCAwKVwiKTtcbiAgICAgICAgICAgICAgICBUUk5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVFJOb2RlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgVFJOb2RlLnNjYWxlWSA9IDE7XG4gICAgICAgICAgICAgICAgVFJOb2RlLnpJbmRleCA9IDEwOyAvLyBFbnN1cmUgaXQncyBvbiB0b3BcbiAgICAgICAgICAgICAgICBDYW52YXMuYWRkQ2hpbGQoVFJOb2RlKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBUUk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJNZXNzYWdlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcXG5HbyB0byBMZXZlbCBcIiArIHRoaXMuTGV2ZWwgKyBcIiAhXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJNZXNzYWdlTGFiZWwgbm90IGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvL2Rlc3Ryb3kgdHJhbnNpdGlvbiBub2RlIGFmdGVyIDIgc2Vjb25kc1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBUUk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1RSXCIpO1xuICAgICAgICAgICAgaWYgKFRSTm9kZSkge1xuICAgICAgICAgICAgICAgIFRSTm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgY29uc3QgbWFwR2VuID0gY2MuZmluZChcIkdhbWVNYW5hZ2VyXCIpPy5nZXRDb21wb25lbnQoXCJNYXBHZW5lcmF0b3JcIik7XG4gICAgICAgICAgICBpZiAobWFwR2VuKSB7XG4gICAgICAgICAgICAgICAgbWFwR2VuLnJlZ2VuZXJhdGVNYXAodGhpcy5MZXZlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiTWFwR2VuZXJhdG9yIGNvbXBvbmVudCBub3QgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sMS41KTtcblxuICAgICAgICAvLyByZXNldCBwbGF5ZXIgcG9zaXRpb25cbiAgICAgICAgY29uc3QgcGxheWVyQ29tcCA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9BY3RvcnMvUGxheWVyXCIpLmdldENvbXBvbmVudChcIlBsYXllclwiKTtcbiAgICAgICAgaWYgKHBsYXllckNvbXApIHtcbiAgICAgICAgICAgIHBsYXllckNvbXAuU2V0UGxheWVyKHRoaXMuTGV2ZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJQbGF5ZXIgY29tcG9uZW50IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IG1vbnN0ZXJcbiAgICAgICAgY29uc3QgbW9uc3Rlck1nciA9IGNjLmZpbmQoXCJDYW52YXMvTWFwTWFuYWdlci9Nb25zdGVyTWFuYWdlclwiKT8uZ2V0Q29tcG9uZW50KFwiTW9uc3Rlck1hbmFnZXJcIik7XG4gICAgICAgIGlmIChtb25zdGVyTWdyKSB7XG4gICAgICAgICAgICBtb25zdGVyTWdyLlNldE1vbnN0ZXIodGhpcy5MZXZlbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGp1c3QgY2FtZXJhIHpvb20gYW5kIFVJIHNjYWxpbmdcbiAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKT8uZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgICAgIGlmIChjYW1lcmEpIHtcbiAgICAgICAgICAgIGNhbWVyYS56b29tUmF0aW8gKj0gMC45OTtcblxuICAgICAgICAgICAgY29uc3QgVUkgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpO1xuICAgICAgICAgICAgaWYgKFVJKSB7XG4gICAgICAgICAgICAgICAgVUkuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICAgICAgVUkuc2NhbGVYID0gMSAvIGNhbWVyYS56b29tUmF0aW87XG4gICAgICAgICAgICAgICAgVUkuc2NhbGVZID0gMSAvIGNhbWVyYS56b29tUmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlVJIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIEVuZEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNTaG93bkdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2hhc1Nob3duR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXllbmRCR00oKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL0dhbWVPdmVyXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBHYW1lT3ZlciBwcmVmYWI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgR2FtZU92ZXJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGNvbnN0IENhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgICAgICBDYW52YXMuYWRkQ2hpbGQoR2FtZU92ZXJOb2RlLDEsJ0dhbWVPdmVyJyk7XG4gICAgICAgICAgICAvL+imlueql+ato+S4remWk1xuICAgICAgICAgICAgbGV0IGNhbWVyYU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpO1xuICAgICAgICAgICAgaWYgKGNhbWVyYU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjYW1lcmFOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IENhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgR2FtZU92ZXJOb2RlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuaJvuS4jeWIsCBNYWluIENhbWVyYSwg5L2/55So6aCQ6Kit5L2N572uICgwLCAwKVwiKTtcbiAgICAgICAgICAgICAgICBHYW1lT3Zlck5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgUmVzdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIFJlc3RhcnRCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBSZXN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcbiAgICAgICAgUmVzdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJSZXN0YXJ0R2FtZVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0dhbWVPdmVyL1Jlc3RhcnRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChSZXN0YXJ0QnV0dG9uKTtcblxuICAgICAgICBsZXQgZW5kID0gY2MuZmluZChcIkNhbnZhcy9HYW1lT3Zlci9wbGF5ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIC8vZ2FtZSBvdmVyIGFuaW1hdGlvblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+eyBcbiAgICAgICAgICAgIGVuZC5wbGF5KFwiZ2FtZW92ZXJcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgIHByaXZhdGUgc2F2ZVByb2dyZXNzKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgY2MubG9nKFwiU2F2aW5nIHByb2dyZXNzIGZvciBsZXZlbDpcIiwgbGV2ZWwpO1xuXG4gICAgICAgIGlmICghd2luZG93Ll9maXJlYmFzZUluaXRlZCkge1xuICAgICAgICAgICAgY2Mud2FybihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJVc2VyIG5vdCBsb2dnZWQgaW4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwibGVhZGVyYm9hcmQvXCIgKyB1c2VyLnVpZCk7XG5cbiAgICAgICAgdXNlclJlZi5vbmNlKFwidmFsdWVcIikudGhlbigoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTGV2ZWwgPSBleGlzdGluZz8uaGlnaGVzdExldmVsIHx8IDA7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcbiAgICAgICAgICAgIHVzZXJSZWYuc2V0KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICBoaWdoZXN0TGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGU6IGZpcmViYXNlLmRhdGFiYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGDinIUgVXBkYXRlZCBSZWFsdGltZSBEQiBmb3IgJHt1c2VyLmRpc3BsYXlOYW1lIHx8IFwiVW5rbm93blwifTogTGV2ZWwgJHtsZXZlbH1gKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIEZhaWxlZCB0byB3cml0ZSB0byBSZWFsdGltZSBEQjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIk5vIHVwZGF0ZSBuZWVkZWQg4oCUIHByZXZpb3VzIGxldmVsIGlzIGhpZ2hlciBvciBlcXVhbC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwgRmFpbGVkIHRvIHJlYWQgZnJvbSBSZWFsdGltZSBEQjpcIiwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRMZWFkZXJib2FyZCgpIHtcbiAgICAgICAgY29uc3QgZGJSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcImxlYWRlcmJvYXJkXCIpO1xuICAgICAgICBkYlJlZi5vbmNlKFwidmFsdWVcIilcbiAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJMZWFkZXJib2FyZCBpcyBlbXB0eS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLmhpZ2hlc3RMZXZlbCAtIGEuaGlnaGVzdExldmVsKVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKChlbnRyeTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGAjJHtpbmRleCArIDF9ICR7ZW50cnkudXNlcm5hbWV9OiBMZXZlbCAke2VudHJ5LmhpZ2hlc3RMZXZlbH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIEZhaWxlZCB0byBsb2FkIGxlYWRlcmJvYXJkIGZyb20gUmVhbHRpbWUgREI6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FpL3N0cmF0ZWdpZXMvQWdlbnRTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFpQixFQUFFLENBdUJsQjtBQXZCRCxXQUFpQixFQUFFO0lBQ2Y7Ozs7OztPQU1HO0lBQ0g7UUFBQTtRQWNBLENBQUM7UUFBRCxlQUFDO0lBQUQsQ0FkQSxBQWNDLElBQUE7SUFkcUIsV0FBUSxXQWM3QixDQUFBO0FBQ0wsQ0FBQyxFQXZCZ0IsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBdUJsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblN0YXRlLCBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuLi8uLi9pbnB1dC9JSW5wdXRDb250cm9sc1wiO1xuZXhwb3J0IG5hbWVzcGFjZSBBSXtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBvdmVyIEFJIHN0cmF0ZWdpZXMuXG4gICAgICogQW4gQWdlbnQgY2FuIGNvbWJpbmUgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIGNyZWF0ZSBuZXcgc3RyYXRlZ2llcy5cbiAgICAgKiBSZW1lbWJlciB0byBjYWxsIHRoZWlyIHN0YXJ0IGFuZCB1cGRhdGUgbWV0aG9kcy5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGlzIGEgdGVjaG5pcXVlIGNhbGxlZCBcIm9iamVjdCBjb21wb3NpdGlvblwiLlxuICAgICAqL1xuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJhdGVneSBpbXBsZW1lbnRzIElJbnB1dENvbnRyb2xze1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGhvcml6b250YWxBeGlzKCk6IG51bWJlcjtcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCB2ZXJ0aWNhbEF4aXMoKTogbnVtYmVyO1xuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGF0dGFjaygpOiBCdXR0b25TdGF0ZTtcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBpbnRlcmFjdCgpOiBCdXR0b25TdGF0ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEltcGxlbWVudHMgaW5pdGlhbGl6YXRpb24gb2YgdGhlIHN0cmF0ZWd5LlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IHN0YXJ0KCk6IHZvaWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbXBsZW1lbnRzIHVwZGF0aW5nIG9mIHRoZSBzdHJhdGVneS5cbiAgICAgICAgICogQHBhcmFtIGR0IFRpbWUgZWxhcHNlZCBzaW5jZSBsYXN0IHVwZGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCB1cGRhdGUoZHQ6IG51bWJlcik6dm9pZDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
