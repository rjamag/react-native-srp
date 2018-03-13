import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Scene,
  Router,
  ActionConst,
  Stack,
  Modal,
  Tabs
} from "react-native-router-flux";

//Splash Component
import Splash from "../components/Splash/Splash";

//Authentication Scenes
import Welcome from "../modules/auth/scenes/Welcome";
import Register from "../modules/auth/scenes/Register";
import CompleteProfile from "../modules/auth/scenes/CompleteProfile";
import Login from "../modules/auth/scenes/Login";
import ForgotPassword from "../modules/auth/scenes/ForgotPassword";

//User Scenes
import Home from "../modules/home/scenes/Home/Home";
import Favorites from "../modules/home/scenes/Favorites/Favorites";
import Services from "../modules/home/scenes/Services/Services";
import Messages from "../modules/home/scenes/Messages/Messages";
import Me from "../modules/home/scenes/Me/Me";

//Tab
import { Icon } from "react-native-elements";

//Import Store, actions
import store from "../redux/store";
import { checkLoginStatus } from "../modules/auth/actions";

import { fontFamily, normalize } from "../styles/theme";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      isLoggedIn: false
    };
  }

  componentDidMount() {
    let _this = this;
    store.dispatch(
      checkLoginStatus(isLoggedIn => {
        _this.setState({ isReady: true, isLoggedIn });
      })
    );
  }

  render() {
    if (!this.state.isReady) return <Splash />;

    return (
      <Router>
        <Scene
          key="root"
          hideNavBar
          navigationBarStyle={styles.navBar}
          titleStyle={styles.title}
          backButtonTintColor={"rgba(0,0,0,.84)"}
        >
          <Stack key="Auth" initial={!this.state.isLoggedIn}>
            <Scene
              key="Welcome"
              component={Welcome}
              title=""
              initial={true}
              hideNavBar
            />
            <Scene key="Register" component={Register} title="" back />
            <Scene
              key="CompleteProfile"
              component={CompleteProfile}
              title="Select Username"
              back={false}
            />
            <Scene key="Login" component={Login} title="Login" />
            <Scene
              key="ForgotPassword"
              component={ForgotPassword}
              title="ForgotPassword"
            />
          </Stack>

          <Scene key="Main" tabs={true} initial={this.state.isLoggedIn}>
            <Scene
              key="Tab1"
              title="Home"
              initial={true}
              icon={({ tintColor }) => (
                <Icon
                  name="home"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="material"
                  color={tintColor}
                />
              )}
              type={ActionConst.REPLACE}
            >
              <Scene key="Tab1_1" component={Home} title="Home" />
              <Scene key="Tab1_2" component={Home} title="Home" />
            </Scene>

            <Scene key="Tab2" title="Favorites">
              <Scene
                key="Tab2_1"
                component={Favorites}
                title="Favorites"
                icon={({ tintColor }) => (
                  <Icon
                    name="star"
                    size={30}
                    iconStyle={{ width: 30, height: 30 }}
                    type="material"
                    color={tintColor}
                  />
                )}
              />
            </Scene>

            <Scene
              key="Tab3"
              component={Services}
              title="Services"
              icon={({ tintColor }) => (
                <Icon
                  name="ios-construct"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="ionicon"
                  color={tintColor}
                />
              )}
            />

            <Scene
              key="Tab4"
              component={Messages}
              title="Messages"
              icon={({ tintColor }) => (
                <Icon
                  name="message"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="material"
                  color={tintColor}
                />
              )}
            />

            <Scene
              key="Tab5"
              component={Me}
              title="Me"
              icon={({ tintColor }) => (
                <Icon
                  name="account-circle"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="material"
                  color={tintColor}
                />
              )}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#fff",
    borderBottomWidth: 0
  },

  title: {
    fontSize: normalize(16),
    lineHeight: normalize(19),
    fontFamily: fontFamily.bold,
    color: "rgba(0,0,0,.84)"
  }
});
