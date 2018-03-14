import { AsyncStorage } from "react-native";
import * as t from "./actionTypes";

let initialState = { isSaved: false, user: null };

const homeReducer = (state = initialState, action) => {
  const user = action.data;

  switch (action.type) {
    case t.GET_PROFILE:
      state = Object.assign({}, state, {
        isSaved: false,
        user: user
      });

      return state;

    case t.UPDATE_PROFILE:
      AsyncStorage.multiSet([["user", JSON.stringify(user)]]);

      state = Object.assign({}, state, {
        isSaved: true,
        user: user
      });

      return state;

    default:
      return state;
  }
};

export default homeReducer;
