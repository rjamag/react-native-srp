import { StyleSheet } from "react-native";

import { theme } from "../../index";
const { color, padding, windowWidth, normalize, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  errorText: {
    color: color.light_grey,
    width: windowWidth - 45,
    marginTop: 20
  },

  containerView: {
    marginVertical: padding * 3,
    width: windowWidth - 40
  },

  socialButton: {
    height: normalize(55),
    borderRadius: 4,
    marginTop: 0,
    marginBottom: 0
  },

  button: {
    backgroundColor: color.grey,
    height: normalize(55)
  },

  buttonText: {
    fontSize: fontSize.regular + 2,
    fontFamily: fontFamily.medium
  }
});

export default styles;
