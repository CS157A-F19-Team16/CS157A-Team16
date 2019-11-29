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

export const addRoute = (
  parkName,
  routeType,
  routeName,
  grade,
  routeDescription,
  routeProfile
) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    parkName,
    routeType,
    routeName,
    grade,
    routeDescription,
    routeProfile
  });
  axios.post("/routesapp/addRoute/", body, config);
};
