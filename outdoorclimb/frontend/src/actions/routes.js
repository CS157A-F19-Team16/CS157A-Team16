import axios from "axios";
import {
  GET_ROUTES,
  ADD_ROUTE_SUCCESS,
  ADD_ROUTE_FAIL,
  SEARCH_ROUTES_SUCCESS
} from "./types";

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

export const searchRoutes = (
  boulderingChecked,
  sportChecked,
  traditionalChecked,
  routeName,
  boulderGradeOne,
  boulderGradeTwo,
  routeGradeOne,
  routeGradeTwo
) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    boulderingChecked,
    sportChecked,
    traditionalChecked,
    routeName,
    boulderGradeOne,
    boulderGradeTwo,
    routeGradeOne,
    routeGradeTwo
  });

  axios
    .post("/routesapp/searchRoutes/", body, config)
    .then(res => {
      dispatch({
        type: SEARCH_ROUTES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const searchRoutesOfPark = parkName => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    parkName
  });

  axios
    .post("/routesapp/searchRoutesInPark/", body, config)
    .then(res => {
      dispatch({
        type: SEARCH_ROUTES_SUCCESS,
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
) => dispatch => {
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
  axios
    .post("/routesapp/addRoute/", body, config)
    .then(res => {
      dispatch({
        type: ADD_ROUTE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_ROUTE_FAIL
      });
    });
};
