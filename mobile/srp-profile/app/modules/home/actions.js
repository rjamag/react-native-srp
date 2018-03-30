import * as t from "./actionTypes";
import * as api from "./api";

export function getCurrentUserProfile(successCB, errorCB) {
  return dispatch => {
    api.getCurrentUserProfile(function(success, data, error) {
      if (success) {
        console.log(
          "action getCurrentUserProfile data: " + JSON.stringify(data)
        );

        dispatch({
          type: t.GET_PROFILE,
          user: data
        });

        console.log(
          "action getCurrentUserProfile data: " + JSON.stringify(data)
        );

        successCB(data);
      } else if (error) errorCB(error);
    });
  };
}

export function updateUserProfile(user, successCB, errorCB) {
  return dispatch => {
    api.updateUserProfile(user, function(success, data, error) {
      if (success) {
        dispatch({ type: t.UPDATE_PROFILE, data: user });
        successCB();
      } else if (error) errorCB(error);
    });
  };
}
