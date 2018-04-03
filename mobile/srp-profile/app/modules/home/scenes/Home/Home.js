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
  Button,
  Spinner
} from "native-base";
import CardComponent from "../../components/CardComponent/CardComponent";
import Speech from "../Speech/Speech";

class Home extends Component {
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
                paddingHorizontal: 10,
                paddingTop: 5
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
                <Button
                  transparent
                  style={{
                    alignItems: "center",
                    height: 60,
                    marginHorizontal: 5,
                    marginTop: 5,
                    borderRadius: 50,
                    backgroundColor: "#ffce00"
                  }}
                >
                  <Icon
                    name="ios-paw"
                    style={{
                      fontSize: 30,
                      color: "#000",
                      backgroundColor: "#ffce00"
                    }}
                  />
                </Button>
                <Button
                  transparent
                  style={{
                    alignItems: "center",
                    height: 60,
                    marginHorizontal: 5,
                    marginTop: 5,
                    borderRadius: 50,
                    backgroundColor: "#ffce00"
                  }}
                >
                  <Icon
                    name="ios-medkit"
                    style={{
                      fontSize: 30,
                      color: "#000",
                      backgroundColor: "#ffce00"
                    }}
                  />
                </Button>
                <Button
                  transparent
                  style={{
                    alignItems: "center",
                    height: 60,
                    marginHorizontal: 5,
                    marginTop: 5,
                    borderRadius: 50,
                    backgroundColor: "#ffce00"
                  }}
                >
                  <Icon
                    name="ios-school"
                    style={{
                      fontSize: 30,
                      color: "#000",
                      backgroundColor: "#ffce00"
                    }}
                  />
                </Button>
                <Button
                  transparent
                  style={{
                    alignItems: "center",
                    height: 60,
                    marginHorizontal: 5,
                    marginTop: 5,
                    borderRadius: 50,
                    backgroundColor: "#ffce00"
                  }}
                >
                  <Icon
                    name="ios-car"
                    style={{
                      fontSize: 30,
                      color: "#000",
                      backgroundColor: "#ffce00"
                    }}
                  />
                </Button>
                <Button
                  transparent
                  style={{
                    alignItems: "center",
                    height: 60,
                    marginHorizontal: 5,
                    marginTop: 5,
                    borderRadius: 50,
                    backgroundColor: "#ffce00"
                  }}
                >
                  <Icon
                    name="ios-bug"
                    style={{
                      fontSize: 30,
                      color: "#000",
                      backgroundColor: "#ffce00"
                    }}
                  />
                </Button>

                <Button
                  transparent
                  style={{
                    alignItems: "center",
                    height: 60,
                    marginHorizontal: 5,
                    marginTop: 5,
                    borderRadius: 50,
                    backgroundColor: "#ffce00"
                  }}
                >
                  <Icon
                    name="ios-key"
                    style={{
                      fontSize: 30,
                      color: "#000",
                      backgroundColor: "#ffce00"
                    }}
                  />
                </Button>
              </ScrollView>
            </View>
          </View>
          <CardComponent
            avatarName="John Doe"
            avatarTitle="Pet Care"
            avatarImage="2"
            imageSource="9"
            likes="10"
            textFeed="Bring your pet on Mondays and get a 20% discount!!! Coupon code: MONDAYPETS."
          />
          <CardComponent
            avatarName="Jack Ripper"
            avatarTitle="Dentist"
            avatarImage="7"
            imageSource="12"
            likes="10"
            textFeed="White teeth. Beautiful smile."
          />
          <CardComponent
            avatarName="Mary Sugar"
            avatarTitle="Cakemaker"
            avatarImage="1"
            imageSource="6"
            likes="10"
            textFeed="Marriage cakes with name."
          />
          <CardComponent
            avatarName="Mick Taylor"
            avatarTitle="Plumber"
            avatarImage="6"
            imageSource="1"
            likes="10"
            textFeed="Pipes and sinks fixed in one hour or less!"
          />
        </Content>

        <Speech />
      </Container>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
