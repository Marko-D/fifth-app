import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Environment from "../../active.env";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from "redux-thunk";

//Reducers
// import ExampleReducer from "./example";
import AuthReducer from "./auth";
import DashboardReducer from "./dashboard";

//Custom middleware
import Logger from "./middleware/logger";
import Toastify from "./middleware/toastify";
import Api from "./middleware/api";

import { persistReducer} from "redux-persist";
import {createLogger} from "redux-logger";

const reducer = combineReducers({
	// example: ExampleReducer,
	auth: AuthReducer,
	dashboard: DashboardReducer
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: [
		'auth'
	]
}
const persistedReducer = persistReducer(persistConfig, reducer)


export default () =>
	configureStore({
		reducer: persistedReducer,
		middleware: [
			// ...getDefaultMiddleware(),
			thunk,
      Logger(Environment),
			Toastify,
			Api
    ]
	});
