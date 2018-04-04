import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

class CardComponent extends Component {
  render() {
    const images = {
      "1": require("../assets/feed_images/1.jpg"),
      "2": require("../assets/feed_images/2.jpg"),
      "3": require("../assets/feed_images/3.jpg"),
      "4": require("../assets/feed_images/4.jpg"),
      "5": require("../assets/feed_images/5.jpg"),
      "6": require("../assets/feed_images/6.jpg"),
      "7": require("../assets/feed_images/7.jpg"),
      "8": require("../assets/feed_images/8.jpg"),
      "9": require("../assets/feed_images/9.jpg"),
      "10": require("../assets/feed_images/10.jpg"),
      "11": require("../assets/feed_images/11.jpg"),
      "12": require("../assets/feed_images/12.jpg")
    };

    const imagesAvatar = {
      "1": require("../assets/StoriesHeaderThumbnails/1.jpg"),
      "2": require("../assets/StoriesHeaderThumbnails/2.jpg"),
      "3": require("../assets/StoriesHeaderThumbnails/3.jpg"),
      "4": require("../assets/StoriesHeaderThumbnails/4.jpg"),
      "5": require("../assets/StoriesHeaderThumbnails/5.jpg"),
      "6": require("../assets/StoriesHeaderThumbnails/6.jpg"),
      "7": require("../assets/StoriesHeaderThumbnails/7.jpg")
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              square
              source={imagesAvatar[this.props.avatarImage]}
              style={{ height: 35, width: 35 }}
            />
            <Body>
              <Text style={{ fontWeight: "bold" }}>
                {this.props.avatarName}
              </Text>
              <Text note>{this.props.avatarTitle}</Text>
            </Body>
          </Left>
          <Right>
            <Icon name="ios-more" style={{ color: "black" }} />
          </Right>
        </CardItem>
        <CardItem
          cardBody
          style={{ padding: 10, paddingBottom: 10, paddingTop: 5 }}
        >
          <Text>{this.props.textFeed}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 35 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-thumbs-up-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-star-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-share-outline" style={{ color: "black" }} />
            </Button>
          </Left>
          <Right>
            <Text style={{ height: 20, color: "black" }}>
              {this.props.likes} comments
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

// <CardItem>
//   <Left>
//     <Thumbnail source={require("../assets/me.jpg")} />
//     <Body>
//       <Text>John</Text>
//       <Text note>Mar 12, 2018</Text>
//     </Body>
//   </Left>
// </CardItem>;
