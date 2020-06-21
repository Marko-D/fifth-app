import { createSlice } from "@reduxjs/toolkit";
import DashboardService from "../screens/dashboard/dashboardService";
import * as actions from "./api";
import API from "../../config/env";

interface ConnectionGroupInfo {
  payload: {
    numberOfConnections: number;
    numberOfConnectionGroups: number;
    numberOfConnectionRequests: number;
  }
}

const initialState = {
  connectionGroupInfo: {
    numberOfConnections: null,
    numberOfConnectionGroups: null,
    numberOfConnectionRequests: null,
  },
  loading: false,
  timeStamp: Date.now(),
  lastFetch: null,
};


const DashboardReducer = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		getRequest: (state: any) => {
			state.loading = true;
		},
		getSuccess: (state: any, action: any) => {
			const data: ConnectionGroupInfo = action.payload;
			state.connectionGroupInfo = data;
			state.loading = false;
		},
		getError: (state: any, action: any) => {
			state.loading = false;
			state.error = action.payload;
		},
  },
});

export const { getRequest, getSuccess, getError } = DashboardReducer.actions;
export default DashboardReducer.reducer;


export const getConnectionGroupInfo = () => async (	dispatch,	getState ) => {
  const userId = getState().auth.currentUser.id;
  dispatch(actions.apiRequestStart({
    url: `${API.admin}dashboard/${userId}/connectionGroupInfo`,
    method: 'get',
    onStart: getRequest.type,
    onSuccess: getSuccess.type,
    onError: getError.type
  }))
}

// THUNK ASYNC FUNCTIONS
// Regular THUNK function
export const getConnectionGroupInfo2 = () => async (	dispatch,	getState ) => {
	dispatch(getRequest());
	try {
		const userId = getState().auth.currentUser.id;
		let connectionGroupInfo =  await DashboardService.connectionGroupInfo(userId);
		dispatch(getSuccess(connectionGroupInfo.data.payload));
	} catch (error) {
		dispatch(getError(error.message));
	}
};