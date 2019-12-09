import axios from "axios";
import { ADD_COMMENT_FAIL, ADD_COMMENT_SUCCESS, GET_COMMENTS_SUCCESS } from "./types";

export const getComments = routeId => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    routeId
  });

  console.log("Attempting to get comment");

  axios
    .post("/users/getComments/", body, config)
    .then(res => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addComment = (email, routeId, commentText) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    email,
    routeId,
    commentText
  });

  console.log(body);

  axios
    .post("/users/addComment", body, config)
    .then(res => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_COMMENT_FAIL
      });
    });
};

export const getComment = route_id => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    route_id
  });
  axios
    .post("/users/getComments/", body, config)
    .then(res => {
      dispatch({
        type: GET_COMMENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_COMMENT_FAIL
      });
    });
};