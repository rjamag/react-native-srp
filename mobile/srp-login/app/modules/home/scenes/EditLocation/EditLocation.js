import React from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { actions as auth } from "../../index";
const { createUser } = auth;

import Form from "../../components/Form";
import AuthContainer from "../../components/AuthContainer";

const fields = [
  {
    key: "location",
    label: "Location",
    placeholder: "Location",
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
    user.location = data.location;

    console.log("---> this.props: " + JSON.stringify(this.props));
    console.log("---> this.props.user: " + JSON.stringify(this.props.user));
    console.log("---> data: " + JSON.stringify(data));

    this.setState({ error: error }); //clear out error messages

    //attach user id
    // const { user } = this.props;
    // data["uid"] = user.uid;

    this.props.createUser(user, this.onSuccess, this.onError);
  }

  onSuccess() {
    console.log("---------- SUCCESS: Actions.Me");
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
    return (
      <AuthContainer>
        <Form
          fields={fields}
          showLabel={false}
          onSubmit={this.onSubmit}
          buttonTitle={"SAVE LOCATION"}
          error={this.state.error}
        />
      </AuthContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps - isSaved: " + state.homeReducer.isSaved);
  console.log(
    "mapStateToProps - user: " + JSON.stringify(state.homeReducer.user)
  );

  return { isSaved: state.homeReducer.isSaved, user: state.homeReducer.user };
};

export default connect(mapStateToProps, { createUser })(EditLocation);
