import axios from "axios";
import { GET_PARKS } from "./types";

export const getParks = () => dispatch => {
  axios
    .get("/api/parks/")
    .then(res => {
      dispatch({
        type: GET_PARKS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
