import { StyleSheet } from "react-native";
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = "contain";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  topContainer: {
    flex: 1,
    paddingHorizontal: 0,
    paddingBottom: 0,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    //backgroundColor: "#FF553F"
    // backgroundColor: "#fff"
    backgroundColor: "rgba(0,0,0,0)"
  },

  image: {
    height: 75,
    width: 75,
    // backgroundColor: "#fff",
    backgroundColor: "rgba(0,0,0,0)",
    // marginTop: padding * 5,
    marginTop: padding,
    marginBottom: 0,
    marginLeft: 15,
    padding: padding * 5,
    resizeMode,
    paddingHorizontal: 20
  },

  title: {
    fontSize: fontSize.large + 5,
    lineHeight: fontSize.large + 4,
    fontFamily: fontFamily.regular,
    // color: color.light_black,
    color: "#DD5144",
    marginTop: 5,
    paddingHorizontal: padding * 3,
    letterSpacing: 5
  },

  title2: {
    fontSize: fontSize.large + 5,
    lineHeight: fontSize.large + 4,
    fontFamily: fontFamily.medium,
    // color: color.black,
    color: "rgb(99,139,250)",
    marginTop: 5,
    paddingHorizontal: padding * 3,
    letterSpacing: 10,
    backgroundColor: "rgba(0,0,0,0)"
  },

  subText: {
    color: "#414141",
    fontSize: fontSize.large,
    lineHeight: fontSize.large + 10,
    marginVertical: padding * 2
  },

  //===============================

  bottomContainer: {
    // backgroundColor: "#ffffff",
    paddingVertical: padding * 3
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
    marginTop: 15,
    marginBottom: 0,
    fontFamily: fontFamily.regular
  },

  button: {
    backgroundColor: "#414141",
    height: normalize(55)
  },

  buttonText: {
    fontSize: fontSize.regular + 2,
    fontFamily: fontFamily.regular
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
    color: "#fff"
    //color: "#414141"
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
    width: windowWidth,
    backgroundColor: "rgba(0,0,0,0)"
  },

  orContainer2: {
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    //height: 40,
    width: windowWidth,
    backgroundColor: "rgba(0,0,0,0)"
  },

  divider2: {
    //backgroundColor: "#D0D5DA",
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    top: 15,
    left: 20,
    right: 20
  },

  divider: {
    //backgroundColor: "#D0D5DA",
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    top: 19,
    left: 20,
    right: 20
  },

  orText: {
    // backgroundColor: "white",
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: fontSize.regular,
    fontFamily: fontFamily.medium,
    //color: "#414141",
    color: "#fff",
    paddingHorizontal: padding
  }
});

export default styles;
