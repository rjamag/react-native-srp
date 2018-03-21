import { StyleSheet } from "react-native";
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = "contain";

const styles1 = StyleSheet.create({
  container: {
    flex: 1
  },

  topContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: padding * 2,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#FF553F"
    backgroundColor: color.light_grey
  },

  image: {
    height: 250,
    width: 250,
    backgroundColor: color.light_grey,
    marginTop: padding * 7,
    marginBottom: padding,
    resizeMode
  },

  title: {
    fontSize: fontSize.large + 5,
    lineHeight: fontSize.large + 4,
    fontFamily: fontFamily.regular,
    color: color.light_black,
    marginTop: padding * 3,
    letterSpacing: 5
  },

  subText: {
    color: "#414141",
    fontSize: fontSize.large,
    lineHeight: fontSize.large + 10,
    marginVertical: padding * 2
  },

  //===============================

  bottomContainer: {
    backgroundColor: "#ffffff",
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

  containerView: {
    width: windowWidth - 40
  },

  socialButton: {
    height: normalize(55),
    borderRadius: 4,
    marginTop: 0,
    marginBottom: 0
  },

  button: {
    backgroundColor: "#C0C0C0",
    height: normalize(55)
  },

  buttonText: {
    fontSize: fontSize.regular + 2,
    fontFamily: fontFamily.medium
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: padding * 2
  },

  bottomText: {
    fontSize: fontSize.regular,
    fontFamily: fontFamily.medium,
    marginRight: 5,
    color: "#414141"
  },

  signInText: {
    fontSize: fontSize.regular,
    color: "#FF553F",
    fontFamily: fontFamily.medium
  },

  orContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: windowWidth
  },

  divider: {
    backgroundColor: "#D0D5DA",
    position: "absolute",
    top: 19,
    left: 20,
    right: 20
  },

  orText: {
    backgroundColor: "white",
    fontSize: fontSize.regular,
    fontFamily: fontFamily.medium,
    color: "#414141",
    paddingHorizontal: padding
  }
});

export default styles1;
