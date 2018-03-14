import firebase from "../../config/firebase";

const auth = firebase.auth();
const database = firebase.database();

export function getCurrentUserProfile(callback) {
  database
    .ref("users")
    .child(auth.currentUser.uid)
    .once("value")
    .then(function(snapshot) {
      const exists = snapshot.val() !== null;

      //if the user exist in the DB, replace the user variable with the returned snapshot
      if (exists) user = snapshot.val();

      console.log("getCurrentUserProfile - user: " + JSON.stringify(user));
      console.log("getCurrentUserProfile - exists: " + exists);

      const data = { exists, user };
      callback(true, data, null);
    })
    .catch(error => callback(false, null, error));
}

export function updateCurrentUserProfile(callback) {
  database
    .ref("users")
    .child(auth.currentUser.uid)
    .update({ ...user })
    .then(() => callback(true, null, null))
    .catch(error => callback(false, null, { message: error }));
}
