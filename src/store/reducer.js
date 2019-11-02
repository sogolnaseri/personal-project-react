import { ACTION_TYPES } from "./actions";
export const INITIAL_STATE = {
  loggedIn: false,
  username: "",
  profile: {},
  events: []
};

export const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_USERNAME:
      console.log("hello");
      return {
        ...state,
        username: action.payload
      };
    case ACTION_TYPES.SET_LOGIN:
      console.log("next");
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      };
    case ACTION_TYPES.SET_EVENTS:
      console.log("third");
      return {
        ...state,
        events: action.payload
      };

    default:
      return state;
  }
};
