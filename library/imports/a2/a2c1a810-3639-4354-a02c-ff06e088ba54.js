"use strict";
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