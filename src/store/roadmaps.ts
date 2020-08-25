import { createSlice } from "@reduxjs/toolkit";
import RoadmapsService from "../screens/roadmaps/roadmapsService";
import * as actions from "./api";
import API from "../../config/env";
import * as rssParser from "react-native-rss-parser";

interface Roadmaps {
  dateOfCompletion: string | null;
  description: string;
  enrollmentDate: string | null;
  id: string;
  isCompleted: boolean;
  logoRelativePath: string;
  milestones: Milestone;
  name: string;
  numberOfActionSteps: number;
  numberOfMilestones: number;
  status: number;
  subType: string;
  type: string;
  typeLabel: string;
  userRoadmapStatus: string;
  [key:string]: any
}

interface Milestone {
  actionSteps: ActionStep;
  id: string;
  isCompleted: false;
  name: string;
  order: number;
  status: string;
}

interface ActionStep {
  actionStepDocument: [];
  actionStepId: string;
  actionStepUserDocuments: [];
  commitmentDescription: string | null;
  dateOfCompletion: string | null;
  description: string | null;
  id: string;
  isCompleted: boolean;
  isRequired: boolean;
  manuallySetAsCompleted: boolean;
  name: string;
  order: number;
  subType: string | null;
  title: string | null;
  type: number;
  url: string | null;
  userActionStepId: string;
}


const initialState = {
	roadmaps: [],
	loading: false,
	timeStamp: Date.now(),
	lastFetch: null,
};

const RoadmapsReducer = createSlice({
	name: "roadmaps",
	initialState,
	reducers: {
		getRequest: (state: any) => {
			state.loading = true;
		},
		getSuccess: (state: any, action: any) => {
			const data: Roadmaps = action.payload;
			state.roadmaps = data;
			state.loading = false;
		},
		getError: (state: any, action: any) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { getRequest, getSuccess, getError } = RoadmapsReducer.actions;
export default RoadmapsReducer.reducer;


// THUNK ASYNC FUNCTIONS
// Regular THUNK function
// export const getRoadmaps = () => async (dispatch, getState) => {
// 	dispatch(getRequest());
// 	try {
// 		let feed = await RoadmapsService.roadmap();
// 		dispatch(getSuccess(feed));
// 	} catch (error) {
// 		dispatch(getError(error.message));
// 	}
// };

export const getRoadmaps = () => async (	dispatch,	getState ) => {
  // const userId = getState().auth.currentUser.id;
  dispatch(actions.apiRequestStart({
    url: `${API.lms}users/dfc5bf50-d7d6-4b46-96eb-7f2888d421f3/roadmaps/6038e61f-19f2-4b22-9487-f68af6c7c505?eventId=8d79f72b-55fe-48ae-9a76-0a67d57e0aa7`,
    method: 'get',
    onStart: getRequest.type,
    onSuccess: getSuccess.type,
    onError: getError.type
  }))
}
