import firebase from "../../config/firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";

const auth = firebase.auth();
const database = firebase.database();

//Register the user using email and password
export function register(data, callback) {
  const { email, password } = data;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => callback(true, user, null))
    .catch(error => callback(false, null, error));
}

//Create the user object in realtime database
export function createUser(user, callback) {
  database
    .ref("users")
    .child(user.uid)
    .update({ ...user })
    .then(() => callback(true, null, null))
    .catch(error => callback(false, null, { message: error }));
}

//Sign the user in with their email and password
export function login(data, callback) {
  const { email, password } = data;
  auth
    .signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(user => getUser(user, callback))
    .catch(error => callback(false, null, error));
}

//Get the user object from the realtime database
export function getUser(user, callback) {
  database
    .ref("users")
    .child(user.uid)
    .once("value")
    .then(function(snapshot) {
      const exists = snapshot.val() !== null;

      //if the user exist in the DB, replace the user variable with the returned snapshot
      if (exists) user = snapshot.val();

      const data = { exists, user };
      callback(true, data, null);
    })
    .catch(error => callback(false, null, error));
}

//Send Password Reset Email
export function resetPassword(data, callback) {
  const { email } = data;
  auth
    .sendPasswordResetEmail(email)
    .then(user => callback(true, null, null))
    .catch(error => callback(false, null, error));
}

//Sign user in using Facebook
// export function signInWithFacebook(fbToken, callback) {
//   const credential = provider.credential(fbToken);
//   auth
//     .signInWithCredential(credential)
//     .then(user => callback(true, user, null))
//     .catch(error => callback(false, null, error));
// }

export function signOut(callback) {
  auth
    .signOut()
    .then(() => {
      if (callback) callback(true, null, null);
    })
    .catch(error => {
      if (callback) callback(false, null, error);
    });
}

// const provider = firebase.auth.FacebookAuthProvider;

// export function signInWithFacebook(fbToken, callback) {
//   const credential = provider.credential(fbToken);
//   auth
//     .signInWithCredential(credential)
//     .then(user => getUser(user, callback))
//     .catch(error => callback(false, null, error));
// }

//const provider = firebase.auth.FacebookAuthProvider;

export function signInWithFacebook(fbToken, callback) {
  LoginManager.logInWithReadPermissions(["public_profile", "email"])
    .then(result => {
      if (result.isCancelled) {
        return Promise.reject(new Error("The user cancelled the request"));
      }
      // Retrieve the access token
      return AccessToken.getCurrentAccessToken();
    })
    .then(data => {
      // Create a new Firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(
        data.accessToken
      );
      // Login with the credential
      return firebase.auth().signInWithCredential(credential);
    })
    .then(user => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
    })
    .catch(error => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}
