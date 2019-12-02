import axios from "axios";
import { GET_SINGLEROUTE, GET_ERRORS, SET_ROUTE } from "./types";

export const getSingleRoute = route_id => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    route_id
  });
  axios
    .post("/routesapp/singleRoute/", body, config)
    .then(res => {
      dispatch({
        type: GET_SINGLEROUTE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setRoute = route => dispatch => {
  dispatch({
    type: SET_ROUTE,
    payload: route.data
  });
};
