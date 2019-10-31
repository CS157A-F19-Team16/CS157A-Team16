import { GET_PARKS } from "../actions/types.js";

const initialState = {
  parks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PARKS:
      return {
        ...state,
        parks: action.payload
      };
    default:
      return state;
  }
}
