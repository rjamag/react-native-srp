import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Fab,
  Button
} from "native-base";
import CardComponent from "../../components/CardComponent/CardComponent";

class HomeTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 5
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Featured</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}> Top Charts</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/7.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/3.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/4.jpg")}
                />

                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/5.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/6.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "grey",
                    borderWidth: 1
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/7.jpg")}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="9" likes="101" />
          <CardComponent imageSource="1" likes="301" />
          <CardComponent imageSource="12" likes="201" />
          <CardComponent imageSource="6" likes="301" />
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#DD5144" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="ios-mic-outline" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="ios-build" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#5067FF" }}>
            <Icon name="ios-bulb-outline" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
