import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
//import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Feed from "../screens/Feed";
import Settings from "../screens/Settings";
import UserDetail from "../screens/UserDetail";
import Me from "../screens/Me";

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
        <Icon name="access-point" size={30} color="black" />
      )
    }
  },
  Feed2: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Saved",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color="#900" />
    }
  },
  Feed3: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Services",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      )
    }
  },
  Feed4: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Messages",
      tabBarOptions: { showIcon: true },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: "Me",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={35} color={tintColor} />
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
