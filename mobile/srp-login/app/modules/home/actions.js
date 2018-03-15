import * as t from "./actionTypes";
import * as api from "./api";

export function getCurrentUserProfile(successCB, errorCB) {
  return dispatch => {
    api.getCurrentUserProfile(function(success, data, error) {
      if (success) {
        console.log(
          "action getCurrentUserProfile data: " + JSON.stringify(data)
        );
        dispatch({ type: t.GET_PROFILE, data });
        successCB(data);
      } else if (error) errorCB(error);
    });
  };
}

export function updateCurrentUserProfile(successCB, errorCB) {
  return dispatch => {
    api.updateCurrentUserProfile(function(success, data, error) {
      if (success) {
        console.log(
          "action updateCurrentUserProfile data: " + JSON.stringify(data)
        );

        dispatch({ type: t.UPDATE_PROFILE, data });
        successCB(data);
      } else if (error) errorCB(error);
    });
  };
}

export function createUser(user, successCB, errorCB) {
  return dispatch => {
    api.createUser(user, function(success, data, error) {
      if (success) {
        dispatch({ type: t.LOGGED_IN, data: user });
        successCB();
      } else if (error) errorCB(error);
    });
  };
}
