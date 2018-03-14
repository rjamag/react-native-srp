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

// export function signOut(successCB, errorCB) {
//   return dispatch => {
//     api.signOut(function(success, data, error) {
//       if (success) {
//         dispatch({ type: t.LOGGED_OUT });
//         successCB();
//       } else if (error) errorCB(error);
//     });
//   };
// }

export function updateCurrentUserProfile(successCB, errorCB) {
  return dispatch => {
    api.updateCurrentUserProfile(function(success, data, error) {
      if (success) {
        dispatch({ type: t.UPDATE_PROFILE, data });
        successCB(data);
      } else if (error) errorCB(error);
    });
  };
}
