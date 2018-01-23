import { NEW_PROJECT, SET_PROJECT } from "../actions/types";
import { postProject, getProject } from "../services/api";

export const createProject = (title, id) => {
  return dispatch => {
    postProject({ title, user_id: id }).then(res => {
      dispatch({ type: NEW_PROJECT, payload: res });
    });
  };
};

export const showProject = id => {
  return dispatch => {
    getProject(id).then(res => {
      dispatch({ type: SET_PROJECT, payload: res });
    });
  };
};
