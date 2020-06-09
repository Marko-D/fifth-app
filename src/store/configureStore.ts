import { combineReducers } from "redux";
import { createStore } from "redux";
import AuthReducer from './auth';

const RootReducer = combineReducers({ 
  auth: AuthReducer 
});

// https://stackoverflow.com/questions/52800877/has-anyone-came-across-this-error-in-ts-with-redux-dev-tools-property-redux
// const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION__"] && window['__REDUX_DEVTOOLS_EXTENSION__()'];
const configureStore = () => createStore(RootReducer, composeEnhancers);

export default configureStore;