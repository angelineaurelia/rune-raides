
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
// assets/scripts/FirebaseManager.ts
var app_1 = require("firebase/app");
require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
    authDomain: "rune-raids.firebaseapp.com",
    databaseURL: "https://rune-raids-default-rtdb.firebaseio.com",
    projectId: "rune-raids",
    storageBucket: "rune-raids.firebasestorage.app",
    messagingSenderId: "530514360843",
    appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
    measurementId: "G-B1C5FG1YSN"
};
if (!app_1.default.apps.length) {
    app_1.default.initializeApp(firebaseConfig);
}
exports.auth = app_1.default.auth();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudVxcRmlyZWJhc2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMseUJBQXVCO0FBRXZCLElBQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsVUFBVSxFQUFFLDRCQUE0QjtJQUN4QyxXQUFXLEVBQUUsZ0RBQWdEO0lBQzdELFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xELGFBQWEsRUFBRSxjQUFjO0NBQzlCLENBQUM7QUFFRixJQUFJLENBQUMsYUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDekIsYUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztDQUN4QztBQUVZLFFBQUEsSUFBSSxHQUFHLGFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL0ZpcmViYXNlTWFuYWdlci50c1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5REZXNC1lbVdkSTFnaGdaV1dHcDF3cW9XdkF2VHdBcXJRXCIsXHJcbiAgYXV0aERvbWFpbjogXCJydW5lLXJhaWRzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcnVuZS1yYWlkcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwicnVuZS1yYWlkc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicnVuZS1yYWlkcy5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTMwNTE0MzYwODQzXCIsXHJcbiAgYXBwSWQ6IFwiMTo1MzA1MTQzNjA4NDM6d2ViOjFjZGRhOWQ3MmJiNGI1MjkzMjI1MGVcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctQjFDNUZHMVlTTlwiXHJcbn07XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5cclxuIl19