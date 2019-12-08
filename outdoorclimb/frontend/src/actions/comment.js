import axios from "axios";
import { ADD_COMMENT_FAIL, ADD_COMMENT_SUCCESS } from "./types";

export const addComment = (commentText, email, routeId) => dispatch => {
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
      dispatch({
        type: ADD_COMMENT_FAIL
      });
    });
};
