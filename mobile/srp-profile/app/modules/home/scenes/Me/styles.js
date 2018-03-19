import { StyleSheet } from "react-native";
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = "contain";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomContainer: {
    backgroundColor: "white",
    paddingVertical: padding * 3,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: fontSize.large + 5,
    lineHeight: fontSize.large + 7,
    fontFamily: fontFamily.medium,
    color: color.light_black,
    letterSpacing: 1
  }
});

export default styles;
