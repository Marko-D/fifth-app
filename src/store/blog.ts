import { createSlice } from "@reduxjs/toolkit";
import BlogService from "../screens/blog/blogService";
import * as actions from "./api";
import API from "../../config/env";
import * as rssParser from "react-native-rss-parser";

interface RssFeed {
	// payload: {
	//   numberOfConnections: number;
	//   numberOfConnectionGroups: number;
	//   numberOfConnectionRequests: number;
	// }
}

const initialState = {
	rssFeed: {},
	loading: false,
	timeStamp: Date.now(),
	lastFetch: null,
};

const BlogReducer = createSlice({
	name: "blog",
	initialState,
	reducers: {
		getRequest: (state: any) => {
			state.loading = true;
		},
		getFeed: (state: any, action: any) => {
			const data: RssFeed = action.payload;
			state.rssFeed = data;
			state.loading = false;
		},
		getError: (state: any, action: any) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getRequest, getFeed, getError } = BlogReducer.actions;
export default BlogReducer.reducer;

// export const connectionGroupInfo = () => async (	dispatch,	getState ) => {
//   const userId = getState().auth.currentUser.id;
//   dispatch(actions.apiRequestStart({
//     url: `${API.admin}blog/${userId}/connectionGroupInfo`,
//     method: 'get',
//     onStart: getRequest.type,
//     onSuccess: getFeed.type,
//     onError: getError.type
//   }))
// }

// THUNK ASYNC FUNCTIONS
// Regular THUNK function
// export const getRssFeed = () => async (	dispatch,	getState ) => {
// 	dispatch(getRequest());
// 	try {
// 		let feed =  await BlogService.getRssFeed()
// 		dispatch(getFeed(feed));
// 	} catch (error) {
// 		dispatch(getError(error.message));
// 	}
// };
export const getRssFeed = () => async (dispatch, getState) => {
  // console.log("rss...");
  dispatch(getRequest());
	return fetch("https://www.emergenetics.com/blog/feed/")
		.then((response) => response.text())
		.then((responseData) => rssParser.parse(responseData))
		.then((rss) => {
			dispatch(getFeed(rss));
			// console.log(rss);
		})
		.catch((error) => {
			dispatch(getError(error.message));
		});
};

export const searchRssFeed = (searched) => async (dispatch, getState) => {
  // console.log("rss...", searched);
	dispatch(getRequest());
	
	return fetch(`https://www.emergenetics.com/feed?s=${searched.term}`)
		.then((response) => response.text())
		.then((responseData) => rssParser.parse(responseData))
		.then((rss) => {
			dispatch(getFeed(rss));
			// console.log(rss);
		})
		.catch((error) => {
			dispatch(getError(error.message));
		});
};