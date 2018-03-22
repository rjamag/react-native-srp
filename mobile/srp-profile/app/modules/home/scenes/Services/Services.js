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

import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
var { height, width } = Dimensions.get("window");

class Services extends Component {
  render() {
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
                  source={{
                    uri:
                      "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20476407_1621608751191261_8413636088923046170_n.jpg?oh=ec86c819da46a73ae95a889684e945fe&oe=5B356012"
                  }}
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
                <Text style={{ fontWeight: "500" }}>rodrigo magalhaes</Text>
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
                    <Text>@rjam</Text>
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
                    <Text>rjamagalhaes@hotmail.com</Text>
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
                    <Text>222-1212</Text>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="ios-pin" />
                  </Left>
                  <Body>
                    <Text>address</Text>
                  </Body>
                  <Right>
                    <Text>rio de janeiro</Text>
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

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
