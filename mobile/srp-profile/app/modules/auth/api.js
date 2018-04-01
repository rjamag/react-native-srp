import firebase from "../../config/firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";

const auth = firebase.auth();
const database = firebase.database();

export function register(data, callback) {
  const { email, password } = data;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => callback(true, user, null))
    .catch(error => callback(false, null, error));
}

export function createUser(user, callback) {
  database
    .ref("users")
    .child(user.uid)
    .update({ ...user })
    .then(() => callback(true, null, null))
    .catch(error => callback(false, null, { message: error }));
}

export function login(data, callback) {
  const { email, password } = data;
  auth
    .signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(user => getUser(user, callback))
    .catch(error => callback(false, null, error));
}

export function getUser(user, callback) {
  database
    .ref("users")
    .child(user.uid)
    .once("value")
    .then(function(snapshot) {
      //const exists = snapshot.val() !== null;

      console.log("---> GETUSER user: " + JSON.stringify(user));

      var exists;

      if (user.additionalUserInfo) {
        exists = !user.additionalUserInfo.isNewUser;
      } else {
        exists = snapshot.val() !== null;
      }

      if (exists)
        //if the user exist in the DB, replace the user variable with the returned snapshot
        user = snapshot.val();

      console.log(
        "---> GETUSER exists: " + exists + ", user: " + JSON.stringify(user)
      );

      const data = { exists, user };
      callback(true, data, null);
    })
    .catch(error => callback(false, null, error));
}

export function resetPassword(data, callback) {
  const { email } = data;
  auth
    .sendPasswordResetEmail(email)
    .then(user => callback(true, null, null))
    .catch(error => callback(false, null, error));
}

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

const providerFacebook = firebase.auth.FacebookAuthProvider;

export function signInWithFacebook(fbToken, callback) {
  const credential = providerFacebook.credential(fbToken);
  auth
    .signInWithCredential(credential)
    .then(user => getUser(user, callback))
    .catch(error => callback(false, null, error));
}

const providerGoogle = firebase.auth.GoogleAuthProvider;

export function signInWithGoogle(googleToken, callback) {
  const credential = providerGoogle.credential(googleToken);
  auth
    .signInWithCredential(credential)
    .then(user => getUser(user, callback))
    .catch(error => callback(false, null, error));
}
