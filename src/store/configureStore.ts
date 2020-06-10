import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Environment from "../../active.env";

//Reducers
import AuthReducer from "./auth";
import LoginReducer from "./login";

//Custom middleware
import Logger from "./middleware/logger";
import Toastify from "./middleware/toastify";

const reducer = combineReducers({
	auth: AuthReducer,
	login: LoginReducer
});

export default () =>
	configureStore({
		reducer,
		middleware: [
      ...getDefaultMiddleware(),
      Logger(Environment),
      Toastify
    ]
	});
