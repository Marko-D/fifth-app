import { createSlice } from "@reduxjs/toolkit";
import PersonsService from "../screens/persons/personsService";
import * as actions from "./api";
import API from "../../config/env";
import * as rssParser from "react-native-rss-parser";

interface Persons {
	id: 1;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: number;
	geo: Geo;
}

interface Geo {
	lat: string;
	lng: string;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

const initialState = {
	persons: {},
	loading: false,
	timeStamp: Date.now(),
	lastFetch: null,
};

const PersonsReducer = createSlice({
	name: "persons",
	initialState,
	reducers: {
		getRequest: (state: any) => {
			state.loading = true;
		},
		getSuccess: (state: any, action: any) => {
			const data: Persons = action.payload.data;
			state.persons = data;
			state.loading = false;
		},
		getError: (state: any, action: any) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getRequest, getSuccess, getError } = PersonsReducer.actions;
export default PersonsReducer.reducer;

// export const connectionGroupInfo = () => async (	dispatch,	getState ) => {
//   const userId = getState().auth.currentUser.id;
//   dispatch(actions.apiRequestStart({
//     url: `${API.admin}blog/${userId}/connectionGroupInfo`,
//     method: 'get',
//     onStart: getRequest.type,
//     onSuccess: getSuccess.type,
//     onError: getError.type
//   }))
// }

// THUNK ASYNC FUNCTIONS
// Regular THUNK function
export const getPersons = () => async (dispatch, getState) => {
	dispatch(getRequest());
	try {
		let feed = await PersonsService.persons();
		dispatch(getSuccess(feed));
	} catch (error) {
		dispatch(getError(error.message));
	}
};

// export const getpersons = () => async (dispatch, getState) => {
//   console.log("rss...");
//   dispatch(getRequest());
// 	return fetch("https://www.emergenetics.com/blog/feed/")
// 		.then((response) => response.text())
// 		.then((responseData) => rssParser.parse(responseData))
// 		.then((rss) => {
// 			dispatch(getSuccess(rss));
// 			console.log(rss);
// 		})
// 		.catch((error) => {
// 			dispatch(getError(error.message));
// 		});
// };
