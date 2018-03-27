import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Segment,
  Button,
  Item,
  Input
} from "native-base";

import Services from "../Services/Services";

import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
var { height, width } = Dimensions.get("window");

import CardComponent from "../../components/CardComponent/CardComponent";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // colocar aqui a chamada para o db pelo novo termo de busca
    console.log(
      "Search - componentDidUpdate this.props: " + JSON.stringify(this.props)
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.container}>
            <TextInput
              style={styles.searchBar}
              value={this.props.searchResult ? this.props.searchResult : ""}
              placeholder="Search..."
            />
          </View>

          {/**Begin professional **/}
          <View
            style={{
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "#eae5e5"
            }}
          >
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
                  source={require("../../components/assets/me.jpg")}
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
                        flex: 3,
                        marginLeft: 10,
                        justifyContent: "center",
                        height: 30
                      }}
                    >
                      <Text>hire now</Text>
                    </Button>

                    {/** Settings takes up  1/4th place **/}
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 1,
                        height: 30,
                        marginRight: 10,
                        marginLeft: 5,
                        justifyContent: "center"
                      }}
                    >
                      <Icon
                        name="settings"
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
                <Text style={{ fontWeight: "bold" }}>John Doe</Text>
                <Text>Plumber | Electrician | Carpenter</Text>
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
          {/**End professional **/}
          {/**Begin professional **/}
          <View
            style={{
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "#eae5e5"
            }}
          >
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
                  source={require("../../components/assets/StoriesHeaderThumbnails/4.jpg")}
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
                        flex: 3,
                        marginLeft: 10,
                        justifyContent: "center",
                        height: 30
                      }}
                    >
                      <Text>hire now</Text>
                    </Button>

                    {/** Settings takes up  1/4th place **/}
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 1,
                        height: 30,
                        marginRight: 10,
                        marginLeft: 5,
                        justifyContent: "center"
                      }}
                    >
                      <Icon
                        name="settings"
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
                <Text style={{ fontWeight: "bold" }}>Bob McLaren</Text>
                <Text>Plumber</Text>
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
          {/**End professional **/}

          {/**Begin professional **/}
          <View
            style={{
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "#eae5e5"
            }}
          >
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
                  source={require("../../components/assets/StoriesHeaderThumbnails/2.jpg")}
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
                        flex: 3,
                        marginLeft: 10,
                        justifyContent: "center",
                        height: 30
                      }}
                    >
                      <Text>hire now</Text>
                    </Button>

                    {/** Settings takes up  1/4th place **/}
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 1,
                        height: 30,
                        marginRight: 10,
                        marginLeft: 5,
                        justifyContent: "center"
                      }}
                    >
                      <Icon
                        name="settings"
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
                <Text style={{ fontWeight: "bold" }}>Steve Gates</Text>
                <Text>Plumber | Electrician</Text>
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
          {/**End professional **/}
          <View style={styles.container2}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Load More</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <Services />
      </Container>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  container2: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  searchBar: {
    paddingLeft: 5,
    fontSize: 20,
    height: 45,
    flex: 0.1,
    borderWidth: 7,
    borderColor: "#E4E4E4"
  },
  button: {
    borderColor: "#8E8E8E",
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  text: {
    color: "#8E8E8E"
  }
});
