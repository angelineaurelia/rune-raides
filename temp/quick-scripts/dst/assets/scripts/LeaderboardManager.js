
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