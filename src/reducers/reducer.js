import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectReducer } from "./projectReducer";

export const reducer = combineReducers({
  currentUser: userReducer,
  currentProject: projectReducer
});
