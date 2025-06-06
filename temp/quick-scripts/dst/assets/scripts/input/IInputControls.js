
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