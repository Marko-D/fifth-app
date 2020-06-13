import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Environment from "../../active.env";

//Reducers
// import ExampleReducer from "./example";
import AuthReducer from "./auth";

//Custom middleware
import Logger from "./middleware/logger";
import Toastify from "./middleware/toastify";
import Api from "./middleware/api";

const reducer = combineReducers({
	// example: ExampleReducer,
	auth: AuthReducer
});

export default () =>
	configureStore({
		reducer,
		middleware: [
      ...getDefaultMiddleware(),
      Logger(Environment),
			Toastify,
			Api
    ]
	});
