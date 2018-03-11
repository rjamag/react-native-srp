import React from "react";
var { Text, View, StyleSheet, Alert } = require("react-native");

import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import styles from "./styles";

import { actions as auth, theme } from "../../../auth/index";
const { signOut } = auth;

const { color } = theme;

class Favorites extends React.Component {
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
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    );
  }
}

export default connect(null, { signOut })(Favorites);
