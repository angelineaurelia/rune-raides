
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