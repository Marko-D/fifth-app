// = ACTION ========================================
// Triggered whenever the user clicks the login submit button
const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
// Triggered whenever a login request is dispatched from whenever point in the code
const LOGIN_REQUEST = 'LOGIN_REQUEST';
// triggered when the login has succeded
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// triggered when the login failed
const LOGIN_ERROR = 'LOGIN_ERROR';
// triggered to logout the user
const LOGOUT = 'LOGOUT';
// triggered when the login has succeded
const STORE_USER = 'STORE_USER';
// triggered when logout the user
const REMOVE_USER = 'REMOVE_USER';

// = ACTION CREATORS ========================================
export const loginSubmit = (data) => ({
	type: LOGIN_SUBMIT,
	payload: data,
})

// Triggered whenever a login request is dispatched from whenever point in the code
export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

// triggered when the login has succeded
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
})

// triggered when the login failed
export const loginError = (errors) => ({
  type: LOGIN_ERROR,
  error: true,
  payload: errors,
})

// triggered to logout the user
export const logout = () => ({
  type: LOGOUT,
})

// // triggered when the login has succeded
// export const storeUser = (user) => ({
//   type: STORE_USER,
//   payload: user,
// })

// // triggered to logout the user
// export const removeUser = (user) => ({
//   type: REMOVE_USER,
//   payload: user,
// })

// = REDUCER ========================================
const initialState = {
	token: null,
	currentUser: {}
};

const AuthReducer = (state = initialState, action) => {
	if (!action) return state;

	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state, 
				...action.payload	
			};
			// return Object.assign({}, state, { ...action.payload });
		case LOGOUT:
			return {};
		default:
			return state;
	}
};

export default AuthReducer;

