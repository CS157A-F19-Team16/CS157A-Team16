import axios from "axios";
import { ADD_COMMENT_FAIL, ADD_COMMENT_SUCCESS } from "./types";

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
