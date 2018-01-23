import { LOGIN_USER, LOAD_LOGIN, LOGOUT_USER } from "./types";
import { postNewUser, postAuthSession, getAuthSession } from "../services/api";

export const signupUser = (data, history) => {
  return dispatch => {
    postNewUser(data).then(res => {
      dispatch({ type: LOGIN_USER, payload: res });
      history.push("/home");
    });
  };
};

export const loginUser = (data, history) => {
  return dispatch => {
    postAuthSession(data).then(res => {
      dispatch({ type: LOGIN_USER, payload: res });
      history.push("/home");
    });
  };
};
export const loadCurrentUser = token => {
  return dispatch => {
    getAuthSession(token).then(res => {
      dispatch({ type: LOAD_LOGIN, payload: res });
    });
  };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
