
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