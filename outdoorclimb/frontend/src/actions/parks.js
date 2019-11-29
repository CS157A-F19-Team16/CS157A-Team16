import axios from "axios";
import { GET_PARKS } from "./types";

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
      console.log("Change");
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const addPark = (parkName, location) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    parkName,
    location
  });
  console.log(body);
  axios.post("/routesapp/addPark/", body, config);
};
