import axios from "axios";
import { GET_ROUTES } from "./types";

export const getRoutes = () => dispatch => {
  axios
    .get("/api/routes/")
    .then(res => {
      dispatch({
        type: GET_ROUTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
