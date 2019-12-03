//Reducer is a function that takes in an action and send down a certain state depending on action
import {
  ADD_ROUTE_SUCCESS,
  ADD_ROUTE_FAIL,
  SEARCH_ROUTES_SUCCESS,
  LOGIN_SUCCESS,
  EXPLORER_REGISTER_SUCCESS,
  EXPLORER_LOGIN_SUCCESS,
  REGISTER_SUCCESS
} from "../actions/types.js";

const initialState = {
  routes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ROUTE_FAIL:
    case ADD_ROUTE_SUCCESS:
      //Return as state
      return {
        ...state,
        routes: [...state.routes, action.payload]
      };
    case SEARCH_ROUTES_SUCCESS:
      return {
        ...state,
        routes: [action.payload]
      };
    case LOGIN_SUCCESS:
    case EXPLORER_REGISTER_SUCCESS:
    case EXPLORER_LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        routes: []
      };

    default:
      return state;
  }
}
