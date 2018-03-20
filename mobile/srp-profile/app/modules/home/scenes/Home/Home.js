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
  Body
} from "native-base";

import CardComponent from "../../components/CardComponent/CardComponent";

class HomeTab extends Component {
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
                paddingHorizontal: 7
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
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/1.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/3.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/4.jpg")}
                />

                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/5.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/6.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/7.jpg")}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
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
