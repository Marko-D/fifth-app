import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
// 	token: null,
// };

const AuthReducer = createSlice({
	name: "AuthReducer",
	initialState: {
		token: null
	},
	reducers: {
		tokenAdded: (state: any, action: any) => {
			console.log('111tokentokentokentokentoken',state.token)
			console.log('actionactionactionaction',action)
			state.token = action.payload;
			console.log('222tokentokentokentoken',state.token)
		},
		tokenRemoved: (token: any) => {
			token = null;
		},
	},
});

export const { tokenAdded, tokenRemoved } = AuthReducer.actions;
export default AuthReducer.reducer;
