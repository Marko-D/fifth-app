import { createSlice } from "@reduxjs/toolkit";
import DashboardService from "../screens/dashboard/dashboardService";

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
  }
};

// THUNK ASYNC FUNCTIONS
export const getConnectionGroupInfo = (data) => async (	dispatch,	getState ) => {
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

const DashboardReducer = createSlice({
	name: "dashboard",
	initialState,
	reducers: {
		getSubmit: (state: any) => {
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

export const { getSubmit, getSuccess, getError } = DashboardReducer.actions;
export default DashboardReducer.reducer;
