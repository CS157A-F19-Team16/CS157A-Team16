import axios from "axios";
import { GET_USERS, DELETE_USER, ADD_USER, GET_ERRORS } from "./types";
import { tokenConfig } from "./auth";

// Get Users action
export const getUsers = () => (dispatch, getState) => {
  axios
    .get("/api/users/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete Lead
export const deleteUser = id => (dispatch, getState) => {
  axios
    .delete(`/api/users/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Delete Lead
export const addUser = user => (dispatch, getState) => {
  axios
    .post("/api/users/", user, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
