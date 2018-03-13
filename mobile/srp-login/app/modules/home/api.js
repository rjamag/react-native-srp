import firebase from "../../config/firebase";

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
