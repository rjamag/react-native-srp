import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView
} from "react-native";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon,
  Switch,
  Button,
  Separator
} from "native-base";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

//import styles from "./styles";

import { actions as auth, theme } from "../../../auth/index";
import { authReducer } from "../../../auth/index";
import { actions as userprof } from "../../../home/index";
import { homeReducer } from "../../../home/index";

import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
var { height, width } = Dimensions.get("window");

const { signOut } = auth;

const { color } = theme;

const { getCurrentUserProfile } = userprof;

class Services extends Component {
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
    if (!this.props) return <View />;

    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ paddingTop: 10 }}>
            {/** User Photo Stats**/}
            <View style={{ flexDirection: "row" }}>
              {/**User photo takes 1/3rd of view horizontally **/}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                <Image
                  source={
                    this.props.user.photo ? { uri: this.props.user.photo } : ""
                  }
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>

              {/**User Stats take 2/3rd of view horizontally **/}
              <View style={{ flex: 3 }}>
                {/** Stats **/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "flex-end"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>Clients</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>205</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>Orders</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>Reviews</Text>
                  </View>
                </View>

                {/**Edit profile and Settings Buttons **/}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    paddingTop: 10
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {/** Edit profile takes up 3/4th **/}
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 2.5,
                        marginLeft: 10,
                        justifyContent: "center",
                        height: 30
                      }}
                    >
                      <Icon
                        name="ios-settings"
                        style={{ height: 30, color: "black" }}
                      />
                    </Button>

                    {/** Settings takes up  1/4th place **/}
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 1.5,
                        height: 30,
                        marginRight: 10,
                        marginLeft: 5,
                        justifyContent: "center"
                      }}
                      onPress={this.onSignOut}
                    >
                      <Icon
                        name="ios-log-out"
                        style={{ height: 30, color: "black" }}
                      />
                    </Button>
                  </View>
                </View>
                {/**End edit profile**/}
              </View>
            </View>

            <View style={{ paddingBottom: 10 }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: "500" }}>
                  {this.props.user.facebookDisplayName
                    ? this.props.user.facebookDisplayName.toLowerCase()
                    : ""}
                </Text>
                <Text style={{ fontWeight: "300" }}>software engineer</Text>
                <View>
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                        paddingHorizontal: 0
                      }}
                    >
                      <Icon
                        name="ios-star"
                        style={{ fontSize: 20, color: "#f2b01e" }}
                      />
                      <Icon
                        name="ios-star"
                        style={{ fontSize: 20, color: "#f2b01e" }}
                      />
                      <Icon
                        name="ios-star"
                        style={{ fontSize: 20, color: "#f2b01e" }}
                      />
                      <Icon
                        name="ios-star-half"
                        style={{ fontSize: 20, color: "#f2b01e" }}
                      />
                      <Icon
                        name="ios-star-outline"
                        style={{ fontSize: 20, color: "#f2b01e" }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                //flexDirection: "row",
                // justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <List>
                <Separator
                  style={{
                    height: 20,
                    width: "86%",
                    backgroundColor: "#fff",
                    marginLeft: "14%"
                  }}
                />
                <ListItem icon>
                  <Left>
                    <Icon name="md-person" />
                  </Left>
                  <Body>
                    <Text>user</Text>
                  </Body>
                  <Right>
                    <Text>{"@" + this.props.user.username}</Text>
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="ios-mail" />
                  </Left>
                  <Body>
                    <Text>e-mail</Text>
                  </Body>
                  <Right>
                    <Text>
                      {this.props.user.email ? this.props.user.email : ""}
                    </Text>
                  </Right>
                </ListItem>
                <Separator
                  style={{
                    height: 20,
                    width: "86%",
                    backgroundColor: "#fff",
                    marginLeft: "14%"
                  }}
                />
                <ListItem icon>
                  <Left>
                    <Icon name="ios-call" />
                  </Left>
                  <Body>
                    <Text>phone</Text>
                  </Body>
                  <Right>
                    <Text>{this.props.user.phoneNumber}</Text>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon onPress={this.editLocation}>
                  <Left>
                    <Icon name="ios-pin" />
                  </Left>
                  <Body>
                    <Text>address</Text>
                  </Body>
                  <Right>
                    <Text>
                      {this.props.user.location
                        ? this.props.user.location.city
                        : ""}
                    </Text>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="ios-card" />
                  </Left>
                  <Body>
                    <Text>payment</Text>
                  </Body>
                  <Right>
                    <Text>visa</Text>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <Separator
                  style={{
                    height: 20,
                    width: "86%",
                    backgroundColor: "#fff",
                    marginLeft: "14%"
                  }}
                />
                <ListItem icon>
                  <Left>
                    <Icon name="ios-help-buoy" />
                  </Left>
                  <Body>
                    <Text>support</Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="ios-information-circle" />
                  </Left>
                  <Body>
                    <Text>feedback</Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="ios-contract" />
                  </Left>
                  <Body>
                    <Text>terms of service</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </View>
          </View>
        </Content>
      </Container>
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
  Services
);

//export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
