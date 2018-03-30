import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
  Icon
} from "native-base";

class Services extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  style={{ borderColor: "white", borderWidth: 1 }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/7.jpg")}
                />
              </Left>
              <Body>
                <Text>Jack Ripper</Text>
                <Text note>March 31, 2018</Text>
                <Text note>Order #: 123456-78</Text>
                <Text note>Status: scheduled</Text>
                <Text note>Total: 1,200.00</Text>
              </Body>
              <Right>
                <Text note>Dentist</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  style={{ borderColor: "white", borderWidth: 1 }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/6.jpg")}
                />
              </Left>
              <Body>
                <Text>Mick Taylor</Text>
                <Text note>March 12, 2018</Text>
                <Text note>Order #: 273341-87</Text>
                <Text note>Status: price estimated</Text>
                <Text note>Total: 800.00</Text>
              </Body>
              <Right>
                <Text note>Electrician</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  style={{ borderColor: "white", borderWidth: 1 }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/5.jpg")}
                />
              </Left>
              <Body>
                <Text>Jack Ripper</Text>
                <Text note>January 12, 2018</Text>
                <Text note>Order #: 573490-32</Text>
                <Text note>Status: done</Text>
                <Text note>Total: 5,700.00</Text>
              </Body>
              <Right>
                <Text note>Building Contractor</Text>
              </Right>
            </ListItem>
          </List>
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
