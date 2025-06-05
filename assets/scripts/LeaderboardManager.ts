// assets/scripts/LeaderboardManager.ts
const { ccclass } = cc._decorator;
declare const firebase: any;

@ccclass
export default class LeaderboardManager extends cc.Component {

  onLoad() {
    if (!window._firebaseInited) {
      cc.error("Firebase not initialized. Make sure FirebaseInit.ts is in the scene and active.");
      return;
    }
  }

  // Call this when player finishes a level
  public saveProgress(level: number) {
    const user = firebase.auth().currentUser;
    if (!user) {
      cc.warn("No logged-in user; cannot save leaderboard progress.");
      return;
    }

    const db = firebase.firestore();
    const userRef = db.collection("leaderboard").doc(user.uid);

    userRef.get().then(doc => {
      const prev = doc.exists ? doc.data().highestLevel : 0;
      if (level > prev) {
        userRef.set({
          username: user.displayName || "Unknown",
          highestLevel: level
        });
        cc.log(`Progress updated for ${user.displayName} to level ${level}`);
      }
    }).catch(err => {
      cc.error("Error accessing leaderboard:", err);
    });
  }

  // Call this to display top players (e.g., in leaderboard screen)
  public loadLeaderboard(limit: number = 10) {
    const db = firebase.firestore();
    db.collection("leaderboard")
      .orderBy("highestLevel", "desc")
      .limit(limit)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          cc.log(`${data.username}: Level ${data.highestLevel}`);
          // You can add logic here to populate your leaderboard UI
        });
      })
      .catch(err => {
        cc.error("Failed to load leaderboard:", err);
      });
  }
}
