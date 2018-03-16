import { StyleSheet } from "react-native";
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = "contain";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  bottomContainer: {
    backgroundColor: "white"
  }
});

export default styles;
