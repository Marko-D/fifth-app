import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { AsyncStorageService } from "../../core/services/asyncStorageService";
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/auth";
// import * as actions from "../login/actions";

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props: any) => {

	// REDUX without mapStateToProps and mapDispatchToProps
	const auth = useSelector((state) => !!state.auth.currentUser)
	const currentUser = useSelector((state) => state.auth.currentUser)
	const dispatch = useDispatch()
	
	const [user, setUser] = useState<any>('');
	
	const handlePress = () => {
		props.navigation.navigate("About");
	};
	
	const handleLogout = () => {
		dispatch(logout());
	};

	// const getAsyncStorage = async () => {
	// 	let user = await AsyncStorageService.getItem('user');
	// 	let parsedUser = JSON.parse(user)
	// 	console.log("user", parsedUser);
	// 	setUser(parsedUser.email)
	// }

	const clearStorage = async () => {
		await AsyncStorageService.clearAll()
		setUser(null)
	}

	const handleClearAsync = async () => {
		clearStorage()
	}

	// useEffect(() => {
	// 	// console.log("Home component did mount");
	// 	getAsyncStorage()
	// }, []);


	return (
		<View style={styles.container}>
			<Text style={styles.text}>USER {!!auth ? 'true' : 'false'}</Text>
			<Text style={styles.token}>{currentUser.firstName} {currentUser.lastName}</Text>
			<Button title="Go to About" onPress={handlePress} />
			<Button title="Go to MyProfile" onPress={	() =>	props.navigation.navigate("MyProfile")} />
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
