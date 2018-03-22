import React from "react";
import {
  SafeAreaView,
  SafeView,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";

import { Button, SocialIcon, Divider } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import firebase from "../../../../config/firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";

import { actions as auth, constants as c } from "../../index";
const { signInWithFacebook, signInWithGoogle } = auth;

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
        this.props.signInWithFacebook(
          data.accessToken,
          this.onSuccess,
          this.onError
        );
      });
  }

  async onSignInWithGoogle() {
    // this.props.signInWithGoogle(
    //   data.accessToken,
    //   this.onSuccess,
    //   this.onError
    // );
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
        <SafeAreaView style={styles.container}>
          <View style={styles.topContainer}>
            <Image
              source={require("../../../../assets/icons/icon.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={[styles.title2]}>Welcome,</Text>
            <Text style={[styles.title]}>sign in to continue</Text>
          </View>

          <View style={styles.bottomContainer}>
            <View style={[styles.buttonContainer]}>
              <View style={styles.orContainer}>
                <Divider style={styles.divider} />
                <Text style={styles.orText}>
                  use your social network account
                </Text>
              </View>

              <SocialIcon
                raised
                button
                type="facebook"
                title="sign in with facebook"
                iconSize={19}
                style={[styles.containerView, styles.socialButton]}
                fontStyle={styles.buttonText}
                onPress={this.onSignInWithFacebook}
              />

              <SocialIcon
                raised
                button
                type="google-plus-official"
                title="sign in with google"
                iconSize={19}
                style={[styles.containerView, styles.socialButton]}
                fontStyle={styles.buttonText}
                onPress={this.onSignInWithGoogle}
              />

              <View style={styles.orContainer}>
                <Divider style={styles.divider} />
                <Text style={styles.orText}>or</Text>
              </View>

              <Button
                raised
                borderRadius={4}
                icon={{ name: "email" }}
                title={"sign in with e-mail"}
                containerViewStyle={[styles.containerView]}
                buttonStyle={[styles.button]}
                textStyle={styles.buttonText}
                onPress={Actions.Login}
              />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.bottomText}>don't have an account yet?</Text>

              <TouchableOpacity onPress={Actions.Register}>
                <Text style={styles.signInText}>sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </AuthContainer>
    );
  }
}

export default connect(null, { signInWithFacebook, signInWithGoogle })(Welcome);
