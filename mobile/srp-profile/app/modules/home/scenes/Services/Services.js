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
  Text
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
                  style={{ borderColor: "grey", borderWidth: 1 }}
                  source={require("../../components/assets/StoriesHeaderThumbnails/7.jpg")}
                />
              </Left>
              <Body>
                <Text>Jack Ripper</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
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
