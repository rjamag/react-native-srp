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

      // If the user exist in the DB, replace the user variable with the returned snapshot
      if (exists) user = snapshot.val();

      auth.currentUser.providerData.forEach(function(profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Phone: " + profile.phoneNumber);
        console.log("  Photo URL: " + profile.photoURL);

        if (profile.providerId === "facebook.com") {
          user["profileFacebookEmail"] = profile.email;
          user["profileFacebookId"] = profile.uid;
          user["profileFacebookDisplayName"] = profile.displayName;
          user["profileFacebookPhoneNumber"] = profile.phoneNumber;
          user["profileFacebookPhotoUrl"] = profile.photoURL;
          user["profileFacebookPhotoUrlLarge"] =
            "https://graph.facebook.com/" + profile.uid + "/picture?height=500";
        }
      });

      console.log("getCurrentUserProfile - user: " + JSON.stringify(user));
      console.log("getCurrentUserProfile - exists: " + exists);

      //      const data = { exists, user };

      callback(true, user, null);
    })
    .catch(error => callback(false, null, error));
}

// export function updateCurrentUserProfile(callback) {
//   console.log("updateCurrentUserProfile - user: " + JSON.stringify(user));

//   database
//     .ref("users")
//     .child(auth.currentUser.uid)
//     .update({ ...user })
//     .then(() => callback(true, null, null))
//     .catch(error => callback(false, null, { message: error }));
// }

export function updateUserProfile(user, callback) {
  database
    .ref("users")
    .child(user.uid)
    .update({ ...user })
    .then(() => callback(true, null, null))
    .catch(error => callback(false, null, { message: error }));
}
