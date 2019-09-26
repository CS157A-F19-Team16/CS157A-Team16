import axios from 'axios';
import { GET_USERS, DELETE_USER, ADD_USER } from './types';

// Get Users action
export const getUsers = () => dispatch => {
    axios.get('/api/outdoorsclimb/')
    .then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

// Delete Lead
export const deleteUser = (id) => dispatch => {
    axios.delete(`/api/outdoorsclimb/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_USER,
            payload: id
        });
    }).catch(err => console.log(err));
}

// Delete Lead
export const addUser = user => dispatch => {
    axios.post('/api/outdoorsclimb/', user)
    .then(res => {
        dispatch({
            type: ADD_USER,
            payload: res.data
        });
    }).catch(err => console.log(err));
}