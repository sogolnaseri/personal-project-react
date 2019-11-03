import { ACTION_TYPES } from "./actions";
export const INITIAL_STATE = {
  loggedIn: false,
  username: "",
  profile: {},
  events: []
};

export const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    //If action type is CHANGE_USERNAME then username is getting updated with its new state
    case ACTION_TYPES.CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    //If action type is SET_LOGIN then profile is getting updated with its new state and also
    //change the loggeIn state to true
    case ACTION_TYPES.SET_LOGIN:
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      };
    //If action type is SET_EVENTS then events is getting updated with its new state
    case ACTION_TYPES.SET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    //If non of above action happened the return the default state
    default:
      return state;
  }
};
