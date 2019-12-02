//Reducer is a function that takes in an action and send down a certain state depending on action
import { GET_SINGLEROUTE } from "../actions/types.js";

const initialState = {
  route: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLEROUTE:
      //Return as state
      return {
        ...state,
        route: action.payload
      };
    default:
      return state;
  }
}
