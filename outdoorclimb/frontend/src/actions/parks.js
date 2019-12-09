import axios from "axios";
import {
  GET_PARKS,
  ADD_PARK_SUCCESS,
  ADD_PARK_FAIL,
  GET_PARKS_FAILURE
} from "./types";

export const getParks = () => dispatch => {
  axios
    .get("routesapp/parks")
    .then(res => {
      dispatch({
        type: GET_PARKS,
        payload: res.data
      });
    })
    .catch(function(error) {
      dispatch({
        type: GET_PARKS_FAILURE
      });
    });
};

export const addPark = (parkName, location, parkProfile) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    parkName,
    location,
    parkProfile
  });
  axios
    .post("/routesapp/addPark/", body, config)
    .then(res => {
      dispatch({
        type: ADD_PARK_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_PARK_FAIL
      });
    });
};
