import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { actions as home } from "../../index";
const { updateUserProfile } = home;

import Form from "../../components/Form";
import AuthContainer from "../../components/AuthContainer";

import styles from "./styles";

const fields = [
  {
    key: "street",
    label: "Street",
    placeholder: "Street",
    autoFocus: false,
    secureTextEntry: false,
    value: "",
    type: "text"
  },
  {
    key: "city",
    label: "City",
    placeholder: "City",
    autoFocus: false,
    secureTextEntry: false,
    value: "",
    type: "text"
  },
  {
    key: "state",
    label: "State",
    placeholder: "State",
    autoFocus: false,
    secureTextEntry: false,
    value: "",
    type: "text"
  },
  {
    key: "zip",
    label: "Zip",
    placeholder: "Zip",
    autoFocus: false,
    secureTextEntry: false,
    value: "",
    type: "text"
  }
];

const error = {
  general: "",
  location: ""
};

class EditLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      error: error
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSubmit(data) {
    const user = this.props.user.user;

    console.log("---> user: " + JSON.stringify(user));

    const location = {
      street: "",
      city: "",
      state: "",
      zip: ""
    };

    console.log("---> passou ");

    location.street = data.street;
    location.city = data.city;
    location.state = data.state;
    location.zip = data.zip;

    console.log("---> location: " + JSON.stringify(location));

    user["location"] = location;

    console.log("---> this.props: " + JSON.stringify(this.props));
    console.log("---> this.props.user: " + JSON.stringify(this.props.user));
    console.log("---> data: " + JSON.stringify(data));

    this.setState({ error: error }); //clear out error messages

    this.props.updateUserProfile(user, this.onSuccess, this.onError);
  }

  onSuccess() {
    Actions.Me();
  }

  onError(error) {
    let errObj = this.state.error;

    if (error.hasOwnProperty("message")) {
      errObj["general"] = error.message;
    } else {
      let keys = Object.keys(error);
      keys.map((key, index) => {
        errObj[key] = error[key];
      });
    }

    this.setState({ error: errObj });
  }

  render() {
    console.log("---> RENDER inicio ");
    if (this.props.user.user) {
      console.log(
        "---> RENDER this.props.user.user: " +
          JSON.stringify(this.props.user.user)
      );
      const user2 = this.props.user.user;

      console.log(
        "---> RENDER user2.location: " + JSON.stringify(user2.location)
      );

      fields[0].value = user2.location.street;
      fields[1].value = user2.location.city;
      fields[2].value = user2.location.state;
      fields[3].value = user2.location.zip;
    }
    console.log("---> RENDER fim ");

    return (
      <AuthContainer>
        <Form
          fields={fields}
          showLabel={false}
          onSubmit={this.onSubmit}
          buttonTitle={"SAVE"}
          error={this.state.error}
        />
      </AuthContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    "EditLocation - mapStateToProps - isSaved: " + state.homeReducer.isSaved
  );
  console.log(
    "EditLocation - mapStateToProps - user: " +
      JSON.stringify(state.homeReducer.user)
  );

  console.log(
    "EditLocation - mapStateToProps 3 - user: " + JSON.stringify(user)
  );

  console.log(
    "EditLocation - mapStateToProps 4 - state.user: " +
      JSON.stringify(state.user)
  );

  return { isSaved: state.homeReducer.isSaved, user: state.homeReducer.user };
};

export default connect(mapStateToProps, { updateUserProfile })(EditLocation);
