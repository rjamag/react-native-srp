import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Orders extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Services Screen</Text>
      </View>
    );
  }
}

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
