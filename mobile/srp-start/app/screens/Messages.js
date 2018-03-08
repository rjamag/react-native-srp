import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Messages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Messages Screen</Text>
      </View>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
