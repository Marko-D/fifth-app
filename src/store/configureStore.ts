import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthReducer from "./auth";

const reducer = combineReducers({
	auth: AuthReducer,
});

export default () => configureStore({ reducer });
