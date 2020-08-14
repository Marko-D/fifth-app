// https://d5u4v8r8pm121.cloudfront.net/translations/mobile/en-us/all.lang.json
// https://d5u4v8r8pm121.cloudfront.net/translations/mobile/es-es/all.lang.json

// componentWillMount(){
//   this.getMoviesFromApiAsync()
// }

// getMoviesFromApiAsync = () => fetch('https://raw.githubusercontent.com/mudassir21/server/master/newsCategory.json')
//  .then((response) => response.json())
//  .then((responseJson) => {
//     this.setState({ result: responseJson.Cat });
//  })
//  .catch((error) => {
//     console.error(error);
//  })

 import axios from "axios";

class TranslationService {
	language(lang): Promise<any> {
		return axios.get(`https://d5u4v8r8pm121.cloudfront.net/translations/mobile/${lang}/all.lang.json`);
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

export default new TranslationService();

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
