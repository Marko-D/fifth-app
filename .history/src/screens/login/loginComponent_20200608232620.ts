import React, { useContext }  from "react";
import axios from "axios";

import API from "../../../config/env";
// import AuthService from "../../core/auth/AuthService";
import { LoginView } from "./LoginView";
// import { AuthContext  } from "../../core/auth/context/AuthContext";
import { AsyncStorageService } from "../../core/services/AsyncStorageService";
// import AuthHeader from "../../core/auth/AuthHeader";
// import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { loginSubmit, loginSuccess } from "../../store/auth";


interface LoginProps {}
// interface User {
// 	username: string;
// 	password: string;
// }
// interface OptionsData {
// 	method: any;
// 	url: string;
// 	data: User;
// }
const Login: React.FC<LoginProps> = (props: any) => {
	
	// const {state, setState} = useContext<any>(AuthContext);

	const navRegister = () => {
		props.navigation.navigate("Register");
	};

	const handleLogin = () => {
		console.log('Loging started...')
		let data = {
			password: "P@ssw0rd",
			username: "zorica.jankuloska@it-labs.com",
		};

		AuthService.login(data).then((response) => {
			console.log('Loging response...')
			if (response.data.token) {
				// let roles = response.data.payload.roles;
				// if (roles.length <= 0) {
					// console.log("ima eden useraaaaaaaaaaaaa");
				// } else {
					// console.log("ima poise useriiiiiiiiiiii");
					// let participantRole = roles.find(
					// 	(role) => role.name === "Participant"
					// );

					// setState(true)				
					me(response.data.token);
				// }
			}
		});
	};

	const me = async (token: string) => {
		console.log('me started...')
		let headers = {
			"Authorization": `JWT ${token}`,
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json; charset=utf-8"
		};
		axios.get(`${API.login}me`, {headers}).then(res => {
			// navigation.navigate("Home");
			console.log('me response...')
			selectedRole(res.data.payload.id, token)
			storeUser(res.data.payload)
		})
		.catch((error) => {
			// console.log("auth/me error", JSON.stringify(error));
		});
	}

	const authenticateUser = (payload) => {
		props.authenticate(payload)
	}	

	const storeUser = (payload) => {
		props.user(payload)
	}	

	const selectedRole = (userId: string, token: string) => {
		console.log('selectedRole...')

		let headers = {
			"Authorization": `JWT ${token}`,
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json; charset=utf-8"
		};

		let data = {
			roleId: "84768ee0-4695-41ae-a83b-7d32248eff57",
			associateType: null
		}

		axios.post(`${API.admin}users/${userId}/selectedRole`, data, {headers}).then(async (response) => {
			console.log('selectedRole response...')
			await AsyncStorageService.setItem("token", response.data.payload.token);
			authenticateUser(response.data.payload.token)
			
			// AsyncStorage.getAllKeys((err, keys) => {
			// 	AsyncStorage.multiGet(keys, (error, stores) => {
			// 		stores.map((result, i, store) => {
			// 			console.log('---------------',{ [store[i][0]]: store[i][1] });
			// 			return true;
			// 		});
			// 	});
			// });		

			// ConnectionGroupInfo(userId, response.data.payload.token)
		})
		.catch((error) => {
			// console.log("selectedRole error", JSON.stringify(error));
		});
	}

	// const ConnectionGroupInfo = (userid: string, token: string) => {
	// 	let headers = {
	// 		"Authorization": `JWT ${token}`,
	// 		"Accept": "application/json, text/plain, */*",
	// 		"Content-Type": "application/json; charset=utf-8"
	// 	};
	// 	// console.log('token+++++++++++++++++++++++++',token)
	// 	axios.get(`${API.admin}dashboard/${userid}/connectionGroupInfo`, {headers}).then(res => {
	// 		// console.log('connectionGroupInfo+++++++++++++++++++++++++',res)
	// 	}).catch((error) => {
	// 		// console.log("selectedRole error", JSON.stringify(error));
	// 	});
	// }

	return (
		<LoginView title='Titleee Login' login={handleLogin} navigateToRegister={navRegister} />
	);
};

const mapStateToProps = (state) => {
	console.log('mapStateToProps ----------', state)
	return {
		auth: state.AuthReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps ----------', dispatch)

	return {
		authenticate: (token) => {
			console.log('authenticate----------------', token);
			dispatch(loginSuccess(token));
		},
	}
}

// for redux connect to work this is where we export the component not on function declaration 
// and also components must start with capital letter
// https://stackoverflow.com/questions/44474031/mapstatetoprops-not-getting-called-at-all
export default connect(mapStateToProps, mapDispatchToProps)(Login)
