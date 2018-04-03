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
//import { GoogleSignin } from "react-native-google-signin";

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
    console.log("onSignInWithGoogle - inicio");

    // await GoogleSignin.configure({
    //   iosClientId:
    //     "529919218490-j9oop63nr1uo14ub565bmvlqd337p2n4.apps.googleusercontent.com"
    // });

    // console.log("onSignInWithGoogle - 1");

    // const data = await GoogleSignin.signIn();

    // console.log("onSignInWithGoogle - 2");

    // this.props.signInWithGoogle(data.accessToken, this.onSuccess, this.onError);

    console.log("onSignInWithGoogle - fim");
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

    // const remoteURL =
    //   "https://cdn.wonderfulengineering.com/wp-content/uploads/2014/05/iPhone-wallpaper-14.jpg";

    // const remoteURL =
    //   "https://media.gettyimages.com/vectors/maintenance-vector-id918793282";

    const remoteURL = "";

    return (
      <AuthContainer>
        <SafeAreaView style={styles.container}>
          <ImageBackground style={{ flex: 1 }} source={{ uri: remoteURL }}>
            <View style={styles.topContainer}>
              {/* <Image
                source={require("../../../../assets/icons/icon.png")}
                style={styles.image}
                resizeMode="contain"

                https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Yellow_Pages_logo.svg/220px-Yellow_Pages_logo.svg.png
              /> */}

              <Image
                source={{
                  uri:
                    "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Yellow_Pages_logo.svg/220px-Yellow_Pages_logo.svg.png"
                }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={[styles.title2]}>Yellow U!</Text>
              <Text style={[styles.title]}>sign in to continue</Text>
              {/* <Text style={[styles.title]}>sign in to continue</Text> */}
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
                  title="connect with facebook"
                  iconSize={19}
                  style={[styles.containerView, styles.socialButton]}
                  fontStyle={styles.buttonText}
                  onPress={this.onSignInWithFacebook}
                />

                <SocialIcon
                  raised
                  button
                  type="google-plus-official"
                  title="connect with google"
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
                  textStyle={styles.buttonText2}
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
