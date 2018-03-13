import * as t from "./actionTypes";

let initialState = { isSaved: false, userInfo: null };

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.INIT_PROFILE:
      const userInfo = action.data;

      // Save token and data to Asyncstorage
      AsyncStorage.multiSet([["userInfo", JSON.stringify(userInfo)]]);

      state = Object.assign({}, state, { isSaved: true, userInfo: userInfo });

      return state;

    case t.GET_PROFILE_SUCCESS:
      return state;

    case t.UPDATE_PROFILE_SUCCESS:
      return state;

    case t.UPDATE_PROFILE_FAIL:
      return state;

    // case t.LOGGED_OUT:
    //   let keys = ["user"];
    //   AsyncStorage.multiRemove(keys);

    //   state = Object.assign({}, state, { isLoggedIn: false, user: null });

    //   return state;

    default:
      return state;
  }
};

export default homeReducer;

// const INITIAL_STATE = {
//     userInfo: null,
//     error: '',
//     isSaved: false
// }

// export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case INIT_PROFILE:
//             return { ...state, ...INITIAL_STATE };
//         case GET_PROFILE_SUCCESS:
//             return { ...state, userInfo: action.userInfo };
//         case UPDATE_PROFILE_SUCCESS:
//             return { ...state, error: '', isSaved: true };
//         case UPDATE_PROFILE_FAIL:
//             return { ...state, error: action.error, isSaved: false };
//         default:
//             return state;
//     }
// };
