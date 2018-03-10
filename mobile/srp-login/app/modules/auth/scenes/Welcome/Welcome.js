import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { Button, SocialIcon, Divider } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
//import { Facebook } from "expo";
import firebase from "../../../../config/firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";

import { actions as auth, constants as c } from "../../index";
const { signInWithFacebook } = auth;

import styles from "./styles";
import AuthContainer from "../../components/AuthContainer";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
  }

  //get users permission authorization (ret: facebook token)
  async onSignInWithFacebook() {
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
        Actions.CompleteProfile({ user });
      })
      .catch(error => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
        alert("code: " + code + ", message: " + message);
      });
    // const options = { permissions: ["public_profile", "email"] };
    // const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    //   c.FACEBOOK_APP_ID,
    //   options
    // );

    // if (type === "success") {
    //   this.props.signInWithFacebook(token, this.onSuccess, this.onError);
    // }
  }

  onSuccess({ exists, user }) {
    if (exists) Actions.Main();
    else Actions.CompleteProfile({ user });
  }

  onError(error) {
    alert(error.message);
  }

  render() {
    return (
      <AuthContainer>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image style={styles.image} source={{ uri: "" }} />
            <Text style={styles.title}>Quotes</Text>
          </View>

          <View style={styles.bottomContainer}>
            <View style={[styles.buttonContainer]}>
              <SocialIcon
                raised
                button
                type="facebook"
                title="SIGN UP WITH FACEBOOK"
                iconSize={19}
                style={[styles.containerView, styles.socialButton]}
                fontStyle={styles.buttonText}
                onPress={this.onSignInWithFacebook}
              />

              <View style={styles.orContainer}>
                <Divider style={styles.divider} />
                <Text style={styles.orText}>Or</Text>
              </View>

              <Button
                raised
                borderRadius={4}
                title={"SIGN UP WITH E-MAIL"}
                containerViewStyle={[styles.containerView]}
                buttonStyle={[styles.button]}
                textStyle={styles.buttonText}
                onPress={Actions.Register}
              />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.bottomText}>Already have an account?</Text>

              <TouchableOpacity onPress={Actions.Login}>
                <Text style={styles.signInText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AuthContainer>
    );
  }
}

export default connect(null, { signInWithFacebook })(Welcome);
