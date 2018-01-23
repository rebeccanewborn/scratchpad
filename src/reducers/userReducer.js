import {
  LOGIN_USER,
  LOAD_LOGIN,
  LOGOUT_USER,
  NEW_PROJECT
} from "../actions/types";

const initialState = {};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("token", action.payload.token);
      return action.payload.user;
    case LOAD_LOGIN:
      return action.payload;
    case LOGOUT_USER:
      return {};
    case NEW_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
