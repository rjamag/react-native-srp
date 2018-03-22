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

class Me1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };

    this.onSignOut = this.onSignOut.bind(this);
    this.editLocation = this.editLocation.bind(this);
    this.onSuccessGetCurrentUserProfile = this.onSuccessGetCurrentUserProfile.bind(
      this
    );
    this.onErrorGetCurrentUserProfile = this.onErrorGetCurrentUserProfile.bind(
      this
    );

    //this.getCurrentUserProfile = this.getCurrentUserProfile.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount inicio");
    console.log(
      "componentDidMount inicio - this.props: " + JSON.stringify(this.props)
    );

    if (this.state.isLoading) {
      this.props.getCurrentUserProfile(
        this.onSuccessGetCurrentUserProfile,
        this.onErrorGetCurrentUserProfile
      );
    } else {
      this.setState({ isLoading: false });
    }

    this.props.getCurrentUserProfile(
      this.onSuccessGetCurrentUserProfile,
      this.onErrorGetCurrentUserProfile
    );

    console.log("componentDidMount fim");
    console.log(
      "componentDidMount fim - this.props: " + JSON.stringify(this.props)
    );
  }

  onSuccessGetCurrentUserProfile(data) {
    console.log("onSuccessGetCurrentUserProfile - 1");
    // console.log(
    //   "onSuccessGetCurrentUserProfile inicio - this.props: " +
    //     JSON.stringify(this.props)
    // );
    console.log("onSuccessGetCurrentUserProfile - 2");

    //this.setState({ isLoading: false });
    console.log("onSuccessGetCurrentUserProfile - 3");
  }

  onErrorGetCurrentUserProfile(error) {
    console.log("onErrorGetCurrentUserProfile - error: " + error);
    //Alert.alert("Oops!", error.message);
  }

  editLocation() {
    // const { user } = this.props;
    // Actions.EditLocation({ user: user });

    const { user } = this.props;

    console.log("editLocation - user " + JSON.stringify(user));

    Actions.EditLocation({ user: user });
  }

  onSignOut(data) {
    this.props.signOut(
      this.onSuccessOnSignOut.bind(this),
      this.onErrorOnSignOut.bind(this)
    );
  }

  onSuccessOnSignOut() {
    Actions.reset("Auth");
  }

  onErrorOnSignOut(error) {
    Alert.alert("Oops!", error.message);
  }

  render() {
    //if (this.state.isLoading) return <View />;

    if (!this.props) return <View />;

    return (
      <ScrollView>
        {/*
        <Tile
          imageSrc=""
          featured
          title=""
          caption={this.props.user.email ? this.props.user.email : ""}
        />
         */}

        <Tile
          imageSrc={
            this.props.user.photoLarge
              ? { uri: this.props.user.photoLarge }
              : ""
          }
          featured
          title={
            this.props.user.facebookDisplayName
              ? this.props.user.facebookDisplayName.toLowerCase()
              : ""
          }
          caption={this.props.user.email ? this.props.user.email : ""}
        />

        <Button
          title="sign out"
          borderRadius={4}
          buttonStyle={{ marginTop: 20 }}
          onPress={this.onSignOut}
        />

        <List>
          <ListItem
            title="username"
            rightTitle={"@" + this.props.user.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="phone"
            rightTitle={this.props.user.phoneNumber}
            hideChevron
          />
          <ListItem title="address" rightTitle="" onPress={this.editLocation} />
          <ListItem title="payment" rightTitle="" />
        </List>

        <List>
          <ListItem title="tutorials" rightTitle="" hideChevron />
          <ListItem title="support" rightTitle="" hideChevron />
          <ListItem title="feedback" rightTitle="" hideChevron />
          <ListItem title="terms of service" rightTitle="" />
          <ListItem title="work with us" rightTitle="" hideChevron />
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
export default connect(mapStateToProps, { getCurrentUserProfile, signOut })(
  Me1
);
