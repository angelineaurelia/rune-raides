
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