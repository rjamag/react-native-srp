import "react-native";
import React from "react";
import App from "../components/src/App";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<App />);
});
