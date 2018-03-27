import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Scene,
  Router,
  ActionConst,
  Stack,
  Modal,
  Tabs,
  Actions
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
import Search from "../modules/home/scenes/Search/Search";
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

import { Root } from "native-base";

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
      <Root>
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
                title="Enter Username"
                back={false}
              />
              <Scene key="Login" component={Login} title="Login" />
              <Scene
                key="ForgotPassword"
                component={ForgotPassword}
                title="Forgot Password"
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
                title="Yellow U!"
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
              >
                <Scene
                  key="Tab1_1"
                  component={Home}
                  style={{ fontSize: 20 }}
                  title="Yellow U!"
                  titleStyle={styles.homeTitle}
                  renderRightButton={({ focused }) => (
                    <Icon
                      name="ios-search"
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
                      onPress={() => Actions.Search({ hideTabBar: true })}
                    />
                  )}
                  renderLeftButton={({ focused }) => (
                    <Icon
                      name="ios-locate-outline"
                      size={30}
                      iconStyle={{
                        padding: 0,
                        top: 0,
                        left: 10,
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      type="ionicon"
                      color={activeTintColor}
                      onPress={() => Actions.Search()}
                    />
                  )}
                />
                <Scene
                  key="Search"
                  component={Search}
                  title="Search"
                  tabs={false}
                  renderLeftButton={({ focused }) => (
                    <Icon
                      name="ios-arrow-back"
                      size={30}
                      iconStyle={{
                        padding: 0,
                        top: 0,
                        left: 10,
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      type="ionicon"
                      color={activeTintColor}
                      onPress={() => Actions.Main()}
                    />
                  )}
                />
              </Scene>

              <Scene
                key="Tab2"
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
                renderBackButton={() => null}
              >
                <Scene
                  key="Favorites"
                  component={Favorites}
                  title="Favorites"
                />
              </Scene>

              <Scene
                key="Services"
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
      </Root>
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

  homeTitle: {
    fontSize: normalize(21),
    lineHeight: normalize(24),
    fontFamily: fontFamily.medium,
    letterSpacing: 3,
    color: "rgba(0,0,0,.84)"
  },

  tabs: {},

  label: {
    color: "rgba(0,0,0,.84)"
  }
});

const activeTintColor = "#000";
const inactiveTintColor = "#d1cece";
