import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  error: '',
  loading: false
};

const LoginReducer = createSlice({
	name: "LoginReducer",
	initialState,
	reducers: {
		loginSubmit: (state: any) => {
			state.loading = true;
		},
		loginSuccess: (state: any, action: any) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginError: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state: any) => {
      state.currentUser = {};
      state.loading = false;
		},
	},
});

export const { loginSubmit, loginSuccess, loginError, logout } = LoginReducer.actions;
export default LoginReducer.reducer;
