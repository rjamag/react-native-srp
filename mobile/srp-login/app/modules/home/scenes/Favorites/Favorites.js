import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import { Button } from "react-native-elements";

class Favorites extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    );
  }
}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
