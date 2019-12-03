//Reducer is a function that takes in an action and send down a certain state depending on action
import { GET_USERS, DELETE_USER, ADD_USER } from '../actions/types.js';

const initialState = {
    users: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            //Return as state
            return {
                //include anything in the state 
                ...state,
                users: action.payload
            }
            case DELETE_USER:
                    return {
                        //include anything in the state 
                        ...state,
                        users: state.users.filter(user => user.id !== action.payload)
                    }
            case ADD_USER:
                return {
                    ...state,
                    users: [...state.users, action.payload]
                }
        default:
            return state;
    }
}