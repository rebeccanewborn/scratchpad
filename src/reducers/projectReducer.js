import { SET_PROJECT } from "../actions/types";

const initialState = {};
export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
