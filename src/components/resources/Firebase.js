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
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com"
});
const createAuthUserInFirestore = (id, email, displayName) => {
  const createdAt = new Date();
  firestore
    .collection("users")
    .doc(id)
    .set({ email, displayName, createdAt })
    .then(() => console.log("user created successfully in firestore"))
    .catch(error => console.log(error));
};
export const signUp = (email, password, displayName) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      const id = resp.user.uid;
      return createAuthUserInFirestore(id, email, displayName);
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
};

export const signIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    // Handle Errors here.

    var errorMessage = error.message;
    // ...
    console.log(errorMessage);
  });
};

export const signInwithEmail = () =>
  auth
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.

      const user = result.user;
      const email = user.email;
      const id = user.uid;
      const displayName = user.displayName;
      console.log(user);
      return createAuthUserInFirestore(id, email, displayName);
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      //var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(
        `code : ${errorCode} , message : ${errorMessage}  , credentials : ${credential}`
      );
    });
export const signOut = () =>
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    })
    .catch(error => {
      // An error happened.
      console.log(error.message);
    });

export default firebase;
