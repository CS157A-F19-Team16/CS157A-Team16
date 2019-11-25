import axios from "axios";
import { GET_PARKS } from "./types";

export const getParks = () => dispatch => {
  axios
    .get("/routesapp/parks")
    .then(res => {
      dispatch({
        type: GET_PARKS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
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
