import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
import RoundButton from "../../components/RoundButton/RoundButton";

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
                <RoundButton iconName="ios-paw" />
                <RoundButton iconName="ios-medkit" />
                <RoundButton iconName="ios-car" />
                <RoundButton iconName="ios-school" />
                <RoundButton iconName="ios-bug" />
                <RoundButton iconName="ios-key" />
                <RoundButton iconName="ios-bicycle" />
                <RoundButton iconName="ios-outlet" />
                <RoundButton iconName="ios-rose" />
                <RoundButton iconName="ios-football" />
                <RoundButton iconName="ios-apps" />
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
