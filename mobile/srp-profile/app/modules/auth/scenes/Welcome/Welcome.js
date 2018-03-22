import React from "react";
import {
  SafeAreaView,
  SafeView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
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
    // GoogleSignin.signIn()
    //   .then(user => {
    //     console.log(user);
    //     this.setState({ user: user });
    //     console.log(user.token + " token");
    //     let credential = {
    //       provider: "google",
    //       token: user.idToken,
    //       secret: user.serverAuthCode,
    //       provider: "google",
    //       email: user.email,
    //       providerId: "google"
    //     };
    //     console.log(credential);
    //     Authentication.googleLogin(credential);
    //   })
    //   .catch(err => {
    //     alert("WRONG SIGNIN" + err);
    //   })
    //   .done();
    // static googleLogin(getCredentials) {
    //         //this.setState({user: user});
    //         firebase.auth().signInWithCredential(getCredentials)
    //             .then((user) => {
    //                 console.log('User successfully signed in', user)
    //                 var user = firebase.auth().currentUser;
    //                 console.log("Email: "+user.email);
    //             })
    //             .catch((err) => {
    //                 console.error('User signin error', err);
    //             });
    //     }
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
    // const remoteURL =
    //   "https://papers.co/wallpaper/papers.co-vt96-digital-polyart-blue-red-white-pattern-abstract-8-wallpaper.jpg";

    // const remoteURL =
    //   "https://crispme.com/wp-content/uploads/2015/07/Ocassum.jpg";

    // const remoteURL =
    //   "https://crispme.com/wp-content/uploads/2015/07/Filament.jpg";

    const remoteURL =
      "https://cdn.wonderfulengineering.com/wp-content/uploads/2014/05/iPhone-wallpaper-14.jpg";

    http: return (
      <AuthContainer>
        <SafeAreaView style={styles.container}>
          <ImageBackground
            style={{ flex: 1, resizeMode: "center" }}
            source={{ uri: remoteURL }}
          >
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
                <View style={styles.orContainer2}>
                  <Divider style={styles.divider2} />
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
                <Text style={styles.bottomText}>
                  don't have an account yet?
                </Text>

                <TouchableOpacity onPress={Actions.Register}>
                  <Text style={styles.signInText}>sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </AuthContainer>
    );
  }
}

export default connect(null, { signInWithFacebook, signInWithGoogle })(Welcome);
