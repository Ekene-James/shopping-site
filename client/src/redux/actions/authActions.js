import { auth, firestore } from "../../components/resources/Firebase";
import firebase from "../../components/resources/Firebase";
import {
  ERRORS,
  GET_CURRENT_USER,
  CLEAR_USER,
  SUCCESS,
  AUTH_ERRORS
} from "../type";
import { isLoading } from "./itemsAction";
import { clearCart } from "./cartActions";

const clearUser = () => {
  return {
    type: CLEAR_USER,
    payload: null
  };
};

export const getCurrentUser = () => dispatch => {
  return auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            const id = doc.id;
            const userData = doc.data();

            console.log("gotten current user");

            return dispatch({
              type: GET_CURRENT_USER,
              payload: userData
            });
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
          return dispatch({
            type: ERRORS,
            payload: err
          });
        });

      // ...
    } else {
      // User is signed out.
      // ...
      console.log("clear user");
      return dispatch(clearUser());
    }
  });
};

const createAuthUserInFirestore = (id, email, displayName) => {
  const createdAt = new Date();
  firestore
    .collection("users")
    .doc(id)
    .set({ email, displayName, createdAt })
    .then(() => console.log("user created successfully in firestore"))
    .catch(error => console.log(error));
};

export const signUp = (email, password, displayName) => dispatch => {
  dispatch(isLoading());
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      const id = resp.user.uid;
      return createAuthUserInFirestore(id, email, displayName);
    })
    .then(() =>
      dispatch({
        type: SUCCESS
      })
    )
    .catch(error => {
      // Handle Errors here.

      var errorMessage = error.message;

      return dispatch({
        type: AUTH_ERRORS,
        payload: errorMessage
      });
      // ...
    });
};

export const signIn = (email, password, history) => dispatch => {
  dispatch(isLoading());
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      history.push("/");
      dispatch({
        type: SUCCESS
      });
    })
    .catch(error => {
      // Handle Errors here.

      var errorMessage = error.message;
      // ...

      return dispatch({
        type: AUTH_ERRORS,
        payload: errorMessage
      });
    });
};

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com"
});

export const signInwithEmail = history => dispatch => {
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

      return createAuthUserInFirestore(id, email, displayName);
    })
    .then(() => history.push("/"))
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

      return dispatch({
        type: ERRORS,
        payload: errorMessage
      });
    });
};
export const signOut = () => dispatch =>
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      dispatch(clearCart());
      dispatch(clearUser());
    })
    .catch(error => {
      // An error happened.
      console.log(error.message);
    });
