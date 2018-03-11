import React from "react";
var { View, StyleSheet, Alert } = require("react-native");

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import styles from "./styles";

import { actions as auth, theme } from "../../../auth/index";

import { ScrollView } from "react-native";
import { Tile, List, ListItem, Button } from "react-native-elements";

const { signOut } = auth;

const { color } = theme;

class Me extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this));
  }

  onSuccess() {
    Actions.reset("Auth");
  }

  onError(error) {
    Alert.alert("Oops!", error.message);
  }

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: me.picture.large }}
          featured
          title={`${me.name.first.toUpperCase()} ${me.name.last.toUpperCase()}`}
          caption={me.email}
        />

        <Button
          title="SIGN OUT"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.onSignOut}
        />

        <List>
          <ListItem title="Email" rightTitle={me.email} hideChevron />
          <ListItem title="Phone" rightTitle={me.phone} hideChevron />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={me.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem title="Birthday" rightTitle={me.dob} hideChevron />
          <ListItem title="City" rightTitle={me.location.city} hideChevron />
        </List>
      </ScrollView>
    );
  }
}

export default connect(null, { signOut })(Me);

export const me = {
  gender: "male",
  name: { title: "mr", first: "rodrigo", last: "magalhaes" },
  location: {
    street: "6942 first street",
    city: "rio de janeiro",
    state: "rio de janeiro",
    postcode: 30411
  },
  email: "rodrigo.magalhaes@example.com",
  login: {
    username: "rjam",
    password: "frodo1",
    salt: "0cSpyp70",
    md5: "bf758d9c79ef3c8a2c3fd900fb0c3148",
    sha1: "4f28fcd2d5e5ae5e0ff55b7528841e350cabf9fb",
    sha256: "1d44ef3ad01dafe929c56021498d8a6d89b2c438bd3f6a07de777ed35b98b5e1"
  },
  dob: "1974-03-12 07:28:16",
  registered: "2010-08-09 13:37:38",
  phone: "(589)-070-0928",
  cell: "(110)-065-6280",
  id: { name: "SSN", value: "408-64-0336" },
  picture: {
    large: "https://randomuser.me/api/portraits/lego/7.jpg",
    medium: "https://randomuser.me/api/portraits/med/lego/7.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/lego/7.jpg"
  },
  nat: "BR"
};
