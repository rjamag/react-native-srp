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

      // https://firebase.google.com/docs/auth/web/manage-users#get_a_users_provider-specific_profile_information

      //console.log("currentUser.provider.uid: " + auth.currentUser.providerId);

      //var user = auth.currentUser;

      if (auth.currentUser != null) {
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
              "https://graph.facebook.com/" +
              profile.uid +
              "/picture?height=500";

            // https://graph.facebook.com/1840988689253265/picture?height=350
          }
        });
      }

      // if (auth.currentUser.providerId.equals("facebook.com")) {
      //   console.log("PHOTO URL: " + auth.currentUser.photoURL);
      //   user["profileUrl"] = auth.currentUser.photoURL;
      // }

      //       for (currentUser.provider.UserInfo userinfo: currentUser.provider.UserInfogetProviderData()) {
      //   if (user.getProviderId().equals("facebook.com")) {
      //     System.out.println("User is signed in with Facebook");
      //   }
      // }
      // Add profile fields from facebook - https://stackoverflow.com/questions/39094657/android-how-to-get-larger-profile-pic-from-fb-using-firebaseauth
      // console.log("PHOTO URL: " + auth.currentUser.photoURL);
      // user["profileUrl"] = auth.currentUser.photoURL;
      // user["displayName"] = auth.currentUser.displayName;
      // user["email"] = auth.currentUser.email;

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
