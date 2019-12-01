import axios from "axios";
import { GET_PARKS } from "./types";

export const getSingleRoute = () => dispatch => {
  axios
    .get("/routesapp/route")
    .then(res => {
      dispatch({
        type: GET_SINGLEROUTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
