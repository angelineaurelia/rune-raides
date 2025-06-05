// assets/scripts/FirebaseManager.ts
import firebase from "firebase/app";
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

export const auth = firebase.auth();

