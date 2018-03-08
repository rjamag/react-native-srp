import React from "react";

import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Feed from "../screens/Feed";
import Settings from "../screens/Settings";
import UserDetail from "../screens/UserDetail";

import Me from "../screens/Me";
import Saved from "../screens/Saved";
import Orders from "../screens/Orders";
import Messages from "../screens/Messages";

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Feed"
    }
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    })
  }
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="list"
          size={30}
          iconStyle={{
            width: 30,
            height: 30
          }}
          type="material"
          color={tintColor}
        />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "Saved",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="star-border"
          type="material"
          iconStyle={{
            width: 30,
            height: 30
          }}
          size={30}
          color={tintColor}
        />
      )
    }
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarLabel: "Services",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-construct"
          type="ionicon"
          iconStyle={{
            width: 30,
            height: 30
          }}
          size={30}
          color={tintColor}
        />
      )
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: "Messages",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="message"
          type="material"
          iconStyle={{
            width: 30,
            height: 30
          }}
          size={30}
          color={tintColor}
        />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: "Me",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="account-circle"
          type="material"
          iconStyle={{
            width: 30,
            height: 30
          }}
          size={30}
          color={tintColor}
        />
      )
    }
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  }
});

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
