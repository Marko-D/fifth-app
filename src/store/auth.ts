import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: null,
};

const AuthReducer = createSlice({
	name: "AuthReducer",
	initialState,
	reducers: {
		tokenAdded: (state: any, action: any) => {
			state.token = action.payload;
		},
		tokenRemoved: (state: any) => {
			state.token = null;
		},
	},
});

export const { tokenAdded, tokenRemoved } = AuthReducer.actions;
export default AuthReducer.reducer;
