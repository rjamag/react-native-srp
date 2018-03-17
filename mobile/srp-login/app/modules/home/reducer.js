import { AsyncStorage } from "react-native";
import * as t from "./actionTypes";

let initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_PROFILE:
      // const user = action.data;

      // console.log("homeReducer - action.data: " + action.data);
      // console.log("homeReducer - action.type: " + action.type);

      // console.log("GET_PROFILE 1 - isSaved: " + state.isSaved);
      // console.log("GET_PROFILE 1 - user: " + state.user);

      // state = Object.assign({}, state, {
      //   isSaved: false,
      //   user: user
      // });

      // console.log("GET_PROFILE 2 - isSaved: " + state.isSaved);
      // console.log("GET_PROFILE 2 - user: " + JSON.stringify(state.user));

      //return state;

      console.log("homeReducer - action.type: " + action.type);
      console.log("homeReducer - action.user: " + JSON.stringify(action.user));

      return action.user;

    case t.UPDATE_PROFILE:
      AsyncStorage.multiSet([["user", JSON.stringify(user)]]);

      state = Object.assign({}, state, { isSaved: true, user: user });

      return state;

    default:
      return state;
  }
};

export default homeReducer;
