import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList
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
  Button
} from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
var { height, width } = Dimensions.get("window");

import CardComponent from "../../components/CardComponent/CardComponent";

var images = [
  require("../../components/assets/feed_images/1.jpg"),
  require("../../components/assets/feed_images/2.jpg"),
  require("../../components/assets/feed_images/3.jpg"),
  require("../../components/assets/feed_images/4.jpg"),
  require("../../components/assets/feed_images/5.jpg"),
  require("../../components/assets/feed_images/6.jpg"),
  require("../../components/assets/feed_images/7.jpg"),
  require("../../components/assets/feed_images/8.jpg"),
  require("../../components/assets/feed_images/9.jpg"),
  require("../../components/assets/feed_images/10.jpg"),
  require("../../components/assets/feed_images/11.jpg"),
  require("../../components/assets/feed_images/12.jpg")
];

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked(index) {
    this.setState({
      activeIndex: index
    });
  }

  checkActive = index => {
    if (this.state.activeIndex !== index) {
      return { color: "grey" };
    } else {
      return {};
    }
  };

  renderSectionOne() {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined
            }}
            source={image}
          />
        </View>
      );
    });
  }

  renderSection() {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="51" />
          <CardComponent imageSource="3" likes="10" />
        </View>
      );
    }
  }

  componentDidMount() {
    console.log(width);
  }

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

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}
              >
                <Icon
                  name="ios-apps-outline"
                  style={[this.state.activeIndex == 0 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(1)}
                transparent
                active={this.state.activeIndex == 1}
              >
                <Icon
                  name="ios-list-outline"
                  style={[
                    { fontSize: 32 },
                    this.state.activeIndex == 1 ? {} : { color: "grey" }
                  ]}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(2)}
                transparent
                active={this.state.activeIndex == 2}
              >
                <Icon
                  name="md-ribbon"
                  style={this.state.activeIndex == 2 ? {} : { color: "grey" }}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(3)}
                transparent
                last
                active={this.state.activeIndex == 3}
              >
                <Icon
                  name="ios-people-outline"
                  style={[
                    { fontSize: 32 },
                    this.state.activeIndex == 3 ? {} : { color: "grey" }
                  ]}
                />
              </Button>
            </View>

            {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}
export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
