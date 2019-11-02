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
      return {
        ...state,
        username: action.payload
      };
    case ACTION_TYPES.SET_LOGIN:
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      };
    case ACTION_TYPES.SET_EVENTS:
      return {
        ...state,
        events: action.payload
      };

    default:
      return state;
  }
};
