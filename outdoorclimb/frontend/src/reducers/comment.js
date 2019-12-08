//Reducer is a function that takes in an action and send down a certain state depending on action
import { ADD_COMMENT_FAIL, ADD_COMMENT_SUCCESS } from "../actions/types.js";

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
    case ADD_COMMENT_FAIL:
      //Return as state
      return {
        ...state
      };
    default:
      return state;
  }
}
