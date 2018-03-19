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
      const exists = snapshot.val() !== null;

      //if the user exist in the DB, replace the user variable with the returned snapshot
      if (exists) user = snapshot.val();

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

const provider = firebase.auth.FacebookAuthProvider;

export function signInWithFacebook(fbToken, callback) {
  const credential = provider.credential(fbToken);
  auth
    .signInWithCredential(credential)
    .then(user => getUser(user, callback))
    .catch(error => callback(false, null, error));
}
