import axios from "axios";
import { GET_SINGLEROUTE } from "./types";

export const getSingleRoute = (id) => dispatch => {
  axios
    .get("/routesapp/singleroute/" + id)
    .then(res => {
      dispatch({
        type: GET_SINGLEROUTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
