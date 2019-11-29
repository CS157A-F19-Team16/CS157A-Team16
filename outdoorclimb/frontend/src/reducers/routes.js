//Reducer is a function that takes in an action and send down a certain state depending on action
import { ADD_ROUTE_SUCCESS, ADD_ROUTE_FAIL } from "../actions/types.js";

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
    default:
      return state;
  }
}
