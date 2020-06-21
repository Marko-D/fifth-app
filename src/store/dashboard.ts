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
		getSubmit: (state: any) => {
			state.loading = true;
		},
		getSuccess: (state: any, action: any) => {
			debugger;
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

export const { getSubmit, getSuccess, getError } = DashboardReducer.actions;
export default DashboardReducer.reducer;


export const getConnectionGroupInfo2 = () => async (	dispatch,	getState ) => {
  const userId = getState().auth.currentUser.id;
  dispatch(actions.apiRequestStart({
    url: `${API.admin}/dashboard/${userId}/connectionGroupInfo`,
    method: 'get',
    onSuccess: getSuccess.type,
    // onError: 'getError'
  }))
}

// THUNK ASYNC FUNCTIONS
export const getConnectionGroupInfo = () => async (	dispatch,	getState ) => {
	dispatch(getSubmit());
	try {
		const userId = getState().auth.currentUser.id;
		let connectionGroupInfo =  await DashboardService.connectionGroupInfo(userId);
		dispatch(getSuccess(connectionGroupInfo.data.payload));
	} catch (error) {
		console.log("dash errrrr", JSON.stringify(error, null, "    "));
		dispatch(getError(error.message));
	}
};