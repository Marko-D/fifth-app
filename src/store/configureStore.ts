import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Environment from "../../active.env";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from "redux-thunk";

//Reducers
// import ExampleReducer from "./example";
import ModalReducer  from "./modal";
import AuthReducer from "./auth";
import DashboardReducer from "./dashboard";
import BlogReducer from "./blog";
import PersonsReducer from "./persons";
import InitializeReducer from "./initialize";
import NewsReducer from "./news";
import RoadmapsReducer from "./roadmaps";

//Custom middleware
// import Logger from "./middleware/logger";
import Toastify from "./middleware/toastify";
import Api from "./middleware/api";

import { persistReducer} from "redux-persist";
import logger from 'redux-logger'

const reducer = combineReducers({
	// example: ExampleReducer,
	modal: ModalReducer,
	auth: AuthReducer,
	dashboard: DashboardReducer,
	blog: BlogReducer,
	persons: PersonsReducer,
	initialize: InitializeReducer,
	news: NewsReducer,
	roadmaps: RoadmapsReducer,

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
			// logger,
      // Logger(Environment),
			Toastify,
			Api
    ]
	});
