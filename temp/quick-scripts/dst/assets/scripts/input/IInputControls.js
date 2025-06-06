
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