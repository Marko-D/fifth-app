import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { AsyncStorageService } from "../../core/services/AsyncStorageService";
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../login/actions";

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props: any) => {

	const [token, setToken] = useState<any>('');
	const [clearAsync, setClearAsync] = useState(token)

	// REDUX without mapStateToProps and mapDispatchToProps
	const auth = useSelector((state) => {
		console.log('homeeee', state.LoginReducers.auth)
		return state.LoginReducers.auth
	})
	const dispatch = useDispatch()


	
	const handlePress = () => {
		props.navigation.navigate("About");
	};
	
	const handleLogout = () => {
		dispatch(actions.logout());
		dispatch(actions.removeUser({}));
	};

	const getAsyncStorage = async () => {
		let token = await AsyncStorageService.getItem('token');
		console.log("token", token);
		
		setToken(token)
	}

	const clearStorage = async () => {
		await AsyncStorageService.clearAll()
		setToken(null)
	}

	const handleClearAsync = async () => {
		clearStorage()
	}

	useEffect(() => {
		console.log("Home component did mount");
		getAsyncStorage()
	}, []);


	return (
			<View style={styles.container}>
			<Text style={styles.text}>TOKEN {!!auth ? 'true' : 'false'}</Text>
			<Text style={styles.token}>{token}</Text>
			<Button title="Go to About" onPress={handlePress} />
			<Button title="Clear AsyncStorage" onPress={handleClearAsync} />
			<Button title="Logout" onPress={handleLogout} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"	
	},
	logo: {
		height: 128,
		width: 128,
		marginBottom: 30,
	},
	text: {
		fontFamily: 'Nunito-Bold', 
		fontSize: 30 
	},
	token: {
		margin: 20,
		padding: 20,
		backgroundColor: '#e4e4e4',
		borderColor: '#999',
		borderWidth: 1
	}
});
