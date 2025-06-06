
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