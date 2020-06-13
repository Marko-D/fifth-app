import React, { useContext }  from "react";
import axios from "axios";
import API from "../../../config/env";
import LoginService from "./loginService";
import LoginView from "./loginView";
import { AsyncStorageService } from "../../core/services/asyncStorageService";
import { connect } from 'react-redux'
// import { tokenAdded } from "../../store/auth";
import { login } from "../../store/auth";
// import {login, logout} from './store/user'

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
const Login: React.FC<LoginProps> = (props: any): any => {
	
	// const {state, setState} = useContext<any>(AuthContext);

	const navRegister = () => {
		props.navigation.navigate("Register");
	};

	const handleLogin = () => {
		let data = {
			password: "P@ssw0rd",
			username: "zorica.jankuloska@it-labs.com",
		};

		// props.submitLogin();

		props.doLogin(data)

		// LoginService.login(data).then((response) => {
		// 	if (response.data.token) {
		// 		// let roles = response.data.payload.roles;
		// 		// if (roles.length <= 0) {
		// 		// } else {
		// 			// let participantRole = roles.find(
		// 			// 	(role) => role.name === "Participant"
		// 			// );

		// 			// setState(true)		
		// 			me(response.data.token);
		// 		// }
		// 	}
		// }).catch(error => {
		// 	console.log('121231231232131231111111111111',error)
		// 	props.errorLogin(error)
		// });
	};

	// const me = async (token: string) => {
	// 	let headers = {
	// 		"Authorization": `JWT ${token}`,
	// 		"Accept": "application/json, text/plain, */*",
	// 		"Content-Type": "application/json; charset=utf-8"
	// 	};
	// 	axios.get(`${API.login}me`, {headers}).then(res => {
	// 		selectedRole(res.data.payload.id, token)
	// 		props.successLogin(res.data.payload);
	// 	})
	// 	.catch((error) => {
	// 		props.errorLogin(error)
	// 	});
	// }

	// const authenticateUser = (payload) => {
	// 	props.authenticate(payload)
	// }	

	
	// const selectedRole = (userId: string, token: string) => {
	// 	let headers = {
	// 		"Authorization": `JWT ${token}`,
	// 		"Accept": "application/json, text/plain, */*",
	// 		"Content-Type": "application/json; charset=utf-8"
	// 	};

	// 	let data = {
	// 		roleId: "84768ee0-4695-41ae-a83b-7d32248eff57",
	// 		associateType: null
	// 	}

	// 	axios.post(`${API.admin}users/${userId}/selectedRole`, data, {headers}).then(async (response) => {
	// 		await AsyncStorageService.setItem("token", response.data.payload.token);
	// 		authenticateUser(response.data.payload.token)
			
	// 		// AsyncStorage.getAllKeys((err, keys) => {
	// 		// 	AsyncStorage.multiGet(keys, (error, stores) => {
	// 		// 		stores.map((result, i, store) => {
	// 		// 			return true;
	// 		// 		});
	// 		// 	});
	// 		// });		

	// 		// ConnectionGroupInfo(userId, response.data.payload.token)
	// 	})
	// 	.catch((error) => {
	// 		props.errorLogin(error)
	// 	});
	// }

	// const ConnectionGroupInfo = (userid: string, token: string) => {
	// 	let headers = {
	// 		"Authorization": `JWT ${token}`,
	// 		"Accept": "application/json, text/plain, */*",
	// 		"Content-Type": "application/json; charset=utf-8"
	// 	};
	// 	axios.get(`${API.admin}dashboard/${userid}/connectionGroupInfo`, {headers}).then(res => {
	// 	}).catch((error) => {
	// 	});
	// }

	return (
		<LoginView title='Titleee Login' login={handleLogin} navigateToRegister={navRegister} />
	);
};

const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps ----------', dispatch)

	return {
		// authenticate: (token) => {
		// 	dispatch(tokenAdded(token));
		// },
		doLogin: (data) => {
			dispatch(login(data));
		},
		// submitLogin: () => {
		// 	dispatch(loginSubmit());
		// },
		// successLogin: (user) => {
		// 	dispatch(loginSuccess(user));
		// },
		// errorLogin: (err) => {
		// 	dispatch(loginError(err));
		// },
	};
};

// for redux connect to work this is where we export the component not on function declaration 
// and also components must start with capital letter
// https://stackoverflow.com/questions/44474031/mapstatetoprops-not-getting-called-at-all
export default connect(null, mapDispatchToProps)(Login)
