import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDzYsllxg1cU4rjMMSXn53SP-F31QpKAlA",
  authDomain: "shopping-site-daaf4.firebaseapp.com",
  databaseURL: "https://shopping-site-daaf4.firebaseio.com",
  projectId: "shopping-site-daaf4",
  storageBucket: "",
  messagingSenderId: "483586912103",
  appId: "1:483586912103:web:1aa775295ccef13d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
