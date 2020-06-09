import axios from "axios";
import API from "../../../config/env";

class LoginService {
	login(data): Promise<any> {
		return axios.post(API.login, data);
	}

	register(data): Promise<any> {
		return axios.post(API + "signup", data);
	}

	// loginUser = () => {
	// 	let options: OptionsData = {
	// 		method: 'post',
	// 		url: API.login,
	// 		data: {
	// 			password: "P@ssw0rd",
	// 			username: "zorica.jankuloska@it-labs.com"
	// 		}
	// 	};

	// 	axios(options).then((response) => {
	// 			console.log('response',response.data)
	// 			// Auth.isLoggedIn = true;
	//     }).catch((error) =>{
	// 			// Auth.isLoggedIn = false;
	// 			console.log('error', JSON.stringify(error))
	//     })
	// };

	// logout() {
	//   localStorage.removeItem("user");
	// }

	// register(username, email, password) {
	//   return axios.post(API + "signup", {
	//     username,
	//     email,
	//     password
	//   });
	// }

	// getCurrentUser() {
	// return JSON.parse(AsyncStorage.getItem('user'));;
	// }
}

export default new LoginService();

// // auth-service.jsx
// import React, { createContext, useContext } from 'react';
// import axios from "axios";
// import API from "../../config/env";

// const AuthContext = createContext(null);

// export const AuthProvider = (props) => {
//   const value = {
//     signIn: props.signIn || signIn,
//     signUp: props.signUp || signUp,
//   };

//   return (
//     <AuthProvider.Provider value={value}>
//       {props.children}
//     </AuthProvider.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const signUp = (body) => {
// 	return axios.post(API.login, body);
// };

// const signIn = (body) => {
//   // ...
// };
