import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

import { Icon } from "native-base";

class RoundButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            marginHorizontal: 3,
            backgroundColor: "#ffce00",
            borderRadius: 100
          }}
        >
          <Icon
            name={this.props.iconName}
            style={{ fontSize: 30, color: "#000" }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default RoundButton;
