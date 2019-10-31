import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; //Middleware
import rootReducer from './reducers'; //Going to look for index.js in reducers

const initialState ={};

const middleware = [thunk];

const store = createStore( //Store that holds complete state tree of app
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;