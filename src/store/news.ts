import { createSlice } from "@reduxjs/toolkit";
import NewsService from "../screens/news/newsService";
import * as actions from "./api";
import API from "../../config/env";

// interface getNews {
//   payload: {
//     numberOfConnections: number;
//     numberOfConnectionGroups: number;
//     numberOfConnectionRequests: number;
//   }
// }

const initialState = {
  news: [],
  loading: false,
  timeStamp: Date.now(),
  lastFetch: null,
};


const NewsReducer = createSlice({
	name: "news",
	initialState,
	reducers: {
		getRequest: (state: any) => {
			state.loading = true;
		},
		getNewsList: (state: any, action: any) => {
			const data: any = action.payload;
			state.news = data;
			state.loading = false;
		},
		getError: (state: any, action: any) => {
			state.loading = false;
			state.error = action.payload;
		},
  },
});

export const { getRequest, getNewsList, getError } = NewsReducer.actions;
export default NewsReducer.reducer;


export const getNews = (params) => async (	dispatch,	getState ) => {

  // https://qa-ems.emergenetics.com/news?CurrentPage=1&PageSize=10&Status=Active&Types=News
  dispatch(actions.apiRequestStart({
    url: `${API.events}news`,
    params,
    method: 'get',
    onStart: getRequest.type,
    onSuccess: getNewsList.type,
    onError: getError.type
  }))
}

// THUNK ASYNC FUNCTIONS
// Regular THUNK function
// export const getNews2 = () => async (	dispatch,	getState ) => {
// 	dispatch(getRequest());
// 	try {
// 		const userId = getState().auth.currentUser.id;
// 		let connectionGroupInfo =  await NewsService.news(userId);
// 		dispatch(getNews(connectionGroupInfo.data.payload));
// 	} catch (error) {
// 		dispatch(getError(error.message));
// 	}
// };