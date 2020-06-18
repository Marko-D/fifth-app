import { createSlice } from "@reduxjs/toolkit";
import LoginService from "../screens/login/loginService";
import { AsyncStorageService } from "../core/services/asyncStorageService";
import AuthService from "../core/services/authService";
import axios from "axios";

// THUNK ASYNC FUNCTIONS
export const login = (data) => async dispatch => {
  dispatch(loginSubmit());
  try {
    let auth = await LoginService.login(data)
    let headers = {
      "Authorization": `JWT ${auth.data.token}`,
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json; charset=utf-8"
    };
    let participantData = {
      roleId: "84768ee0-4695-41ae-a83b-7d32248eff57",
      associateType: null
    };
    
    let me = await LoginService.me(headers)
    let selectedRole = await LoginService.selectRole(me.data.payload.id, participantData, headers )
    let userData = {
      token: selectedRole.data.payload.token,
      user: me.data.payload
    }
    await AsyncStorageService.setItem("user", JSON.stringify(auth.data.payload));

    let token = !!userData && userData.token;
    (!!token) && AuthService.authDefaults(token);   

    dispatch(loginSuccess(userData));
  } catch(error) {
    dispatch(loginError(error.message))
  }
}

// const getToken = (data) => async dispatch => {
//   const initialToken = await AsyncStorageService.getItem('token');
//   dispatch(loginSuccess({token: initialToken}))
//   return !!initialToken ? initialToken : null
// }

export const getLoggedUser = () => async dispatch => {
  AsyncStorageService.getItem('user').then((result) => {
    dispatch(loginSuccess({user: JSON.parse(result)}))
  });
};


const initialState = {
  token: null,
  currentUser: {},
  error: '',
  loading: false
};

const AuthReducer = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSubmit: (state: any) => {
			state.loading = true;
		},
		loginSuccess: (state: any, action: any) => {
      state.token = action.payload.token;
      state.currentUser = action.payload.user || action.user;
      state.loading = false;
    },
    loginError: (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state: any) => {
      state.token = null;
      state.currentUser = {};
      state.loading = false;
		},
	},
});

export const { loginSubmit, loginSuccess, loginError, logout } = AuthReducer.actions;
export default AuthReducer.reducer;

