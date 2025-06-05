// assets/scripts/FirebaseInit.ts
declare global {
  interface Window {
    _firebaseInited?: boolean;
  }
}

declare const firebase: any;
const { ccclass } = cc._decorator;

@ccclass('FirebaseInit')
export default class FirebaseInit extends cc.Component {
  onLoad() {
    if (!window._firebaseInited) {
      const cfg = {
        apiKey: "AIzaSyDFW4-emWdI1ghgZWWGp1wqoWvAvTwAqrQ",
        authDomain: "rune-raids.firebaseapp.com",
        projectId: "rune-raids",
        storageBucket: "rune-raids.firebasestorage.app",
        messagingSenderId: "530514360843",
        appId: "1:530514360843:web:1cdda9d72bb4b52932250e",
        measurementId: "G-B1C5FG1YSN"
      };
      firebase.initializeApp(cfg);
      window._firebaseInited = true;
      cc.log("Firebase initialized");
    }
  }
}