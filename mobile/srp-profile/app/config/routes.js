import React from "react";
import { StyleSheet, View, Text } from "react-native";
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
import EditLocation from "../modules/home/scenes/EditLocation/EditLocation";

//Tab
import { Icon } from "react-native-elements";

//Import Store, actions
import store from "../redux/store";
import { checkLoginStatus } from "../modules/auth/actions";

import { fontFamily, normalize, tabIconStyle } from "../styles/theme";

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

          <Scene
            key="Main"
            tabs={true}
            initial={this.state.isLoggedIn}
            showLabel={false}
            lazy={true}
            tabStyle={styles.tab}
            tabBarStyle={styles.tabs}
            labelStyle={styles.label}
            swipeEnabled={false}
          >
            <Scene
              key="Tab1"
              title="Instamatic"
              initial={true}
              icon={({ focused }) => (
                <Icon
                  name="ios-home"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="ionicon"
                  color={focused ? activeTintColor : inactiveTintColor}
                />
              )}
              type={ActionConst.REPLACE}
              renderRightButton={({ focused }) => (
                <Icon
                  name="ios-locate-outline"
                  size={30}
                  iconStyle={{
                    padding: 0,
                    top: 0,
                    right: 10,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  type="ionicon"
                  color={activeTintColor}
                  onPress={() => alert("Right button")}
                />
              )}
            >
              <Scene key="Tab1_1" component={Home} title="Instamatic" />
            </Scene>

            <Scene key="Tab2" title="Favorites">
              <Scene
                key="Tab2_1"
                component={Favorites}
                title="Favorites"
                icon={({ focused }) => (
                  <Icon
                    name="ios-star"
                    size={30}
                    iconStyle={{ width: 30, height: 30 }}
                    type="ionicon"
                    color={focused ? activeTintColor : inactiveTintColor}
                  />
                )}
              />
            </Scene>

            <Scene
              key="Tab3"
              component={Services}
              title="Services"
              icon={({ focused }) => (
                <Icon
                  name="ios-construct"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="ionicon"
                  color={focused ? activeTintColor : inactiveTintColor}
                />
              )}
            />

            <Scene
              key="Tab4"
              component={Messages}
              title="Messages"
              icon={({ focused }) => (
                <Icon
                  name="ios-mail"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="ionicon"
                  color={focused ? activeTintColor : inactiveTintColor}
                />
              )}
            />
            <Scene
              key="Tab5"
              title="Profile"
              icon={({ focused }) => (
                <Icon
                  name="ios-person"
                  size={30}
                  iconStyle={{ width: 30, height: 30 }}
                  type="ionicon"
                  color={focused ? activeTintColor : inactiveTintColor}
                />
              )}
            >
              <Scene
                key="Me"
                component={Me}
                title="Me"
                initial={true}
                renderBackButton={() => null}
              />
              <Scene
                key="EditLocation"
                component={EditLocation}
                title="Location"
                initial={false}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 0
  },

  title: {
    fontSize: normalize(16),
    lineHeight: normalize(19),
    fontFamily: fontFamily.medium,
    color: "rgba(0,0,0,.84)"
  },

  tabs: {},

  label: {
    color: "rgba(0,0,0,.84)"
  }
});

const activeTintColor = "#000";
const inactiveTintColor = "#d1cece";
