import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Toast,
  Button,
  Text,
  Icon
} from "native-base";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                position: "bottom",
                buttonText: "",
                type: "warning",
                duration: 3000
              })
            }
          >
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
