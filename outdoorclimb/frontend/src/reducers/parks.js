import {
  GET_PARKS,
  ADD_PARK_SUCCESS,
  ADD_PARK_FAIL,
  GET_PARKS_FAILURE
} from "../actions/types.js";

const initialState = {
  parks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PARKS_FAILURE:
    case GET_PARKS:
      return {
        ...state,
        parks: action.payload
      };
    case ADD_PARK_FAIL:
    case ADD_PARK_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
}
