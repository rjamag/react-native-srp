import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import styles from "./styles";

import { actions as auth, theme } from "../../../auth/index";
import { authReducer } from "../../../auth/index";
import { actions as userprof } from "../../../home/index";
import { homeReducer } from "../../../home/index";

import { ScrollView } from "react-native";
import { Tile, List, ListItem, Button } from "react-native-elements";

const { signOut } = auth;

const { color } = theme;

const { getCurrentUserProfile } = userprof;

class Me extends React.Component {
  constructor() {
    super();

    this.state = { isLoading: true };

    this.onSignOut = this.onSignOut.bind(this);
    this.editLocation = this.editLocation.bind(this);
    this.onSuccessGetCurrentUserProfile = this.onSuccessGetCurrentUserProfile.bind(
      this
    );
    this.onErrorGetCurrentUserProfile = this.onErrorGetCurrentUserProfile.bind(
      this
    );
  }

  componentDidMount() {
    console.log(
      "componentDidMount inicio - this.props: " + JSON.stringify(this.props)
    );

    this.props.getCurrentUserProfile(
      this.onSuccessGetCurrentUserProfile,
      this.onErrorGetCurrentUserProfile
    );

    console.log(
      "componentDidMount fim - this.props: " + JSON.stringify(this.props)
    );
  }

  onSuccessGetCurrentUserProfile(data) {
    console.log("onSuccessGetCurrentUserProfile - 1");
    this.setState({ isLoading: false });
    console.log("onSuccessGetCurrentUserProfile - 3");
  }

  onErrorGetCurrentUserProfile(error) {
    Alert.alert("Oops!", error.message);
  }

  editLocation() {
    const { user } = this.props;
    Actions.EditLocation({ user: user });
  }

  onSignOut(data) {
    this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this));
  }

  onSuccessOnSignOut() {
    Actions.reset("Auth");
  }

  onErrorOnSignOut(error) {
    Alert.alert("Oops!", error.message);
  }

  render() {
    if (this.state.isLoading) return <View />;

    return (
      <ScrollView>
        <Tile
          imageSrc={
            this.props.user.profileFacebookPhotoUrlLarge
              ? { uri: this.props.user.profileFacebookPhotoUrlLarge }
              : ""
          }
          featured
          title={`${this.props.user.profileFacebookDisplayName.toUpperCase()}`}
          caption={this.props.user.profileFacebookEmail}
        />

        <Button
          title="SIGN OUT"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.onSignOut}
        />

        <List>
          <ListItem
            title="Username"
            rightTitle={"@" + this.props.user.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Phone"
            rightTitle={this.props.user.phoneNumber}
            leftIcon={{ name: "phone" }}
            hideChevron
          />
          <ListItem
            title="Address"
            rightTitle=""
            leftIcon={{ name: "room" }}
            onPress={this.editLocation}
          />{" "}
          <ListItem
            title="Payment"
            rightTitle=""
            leftIcon={{ name: "payment" }}
          />
        </List>

        <List>
          <ListItem title="Support" rightTitle="" hideChevron />
          <ListItem title="Feedback" rightTitle="" hideChevron />
          <ListItem title="Terms of Service" rightTitle="" />
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps - state: " + JSON.stringify(state));

  return { user: state.homeReducer };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getCurrentUserProfile: () => dispatch(getCurrentUserProfile())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Me);
export default connect(mapStateToProps, { getCurrentUserProfile })(Me);
