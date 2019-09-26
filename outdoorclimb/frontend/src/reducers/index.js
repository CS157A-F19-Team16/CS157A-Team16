//Meeting place for all other reducers
import { combineReducers } from 'redux';
import users from './users';

export default combineReducers({
    users
});