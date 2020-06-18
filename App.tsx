import React, { useState, useEffect } from "react";
import MainStack from "./src/routes/mainStack";
// import "./styles/index";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { YellowBox, ActivityIndicator } from "react-native";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { AsyncStorageService } from "./src/core/services/asyncStorageService";
import configureStore from "./src/store/configureStore";
import AuthService from "./src/core/services/authService";

const App = () => {
	const store = configureStore();
	const [loading, setLoadig] = useState(true);
	
	
	// store.dispatch({
		// 	type: 'LOGIN_SUBMIT',
		// 	payload: {
			// 			data: true
			// 	}
			// })
			
			// console.log('store------------------------ ', store.getState())
			
	// 		store.subscribe(() => {
	// 			// When state will be updated(in our case, when items will be fetched), 
	// 			// we will update local component state and force component to rerender 
	// 			// with new data.
				
	// 			let token = !!store.getState() && store.getState().auth.token
	// 			if(!!token){
	// 				AuthService.init(token);
	// 				console.log('APP store------------------------ ', store.getState());
	// 				console.log('APP store tokentoken------------------------',token)
	// 		}
	// });

	// “Remote debugger is in a background tab” warning in React Native
	YellowBox.ignoreWarnings(["Remote debugger"]);
	// console.ignoredYellowBox = ["Remote debugger"];

	let [fontsLoaded] = useFonts({
		
		"Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
	});

	// How to use async functyion in usEffect hook
	useEffect(() => {
		// Create an scoped async function in the hook
		const onAppLoad = async () => {
			let hasToken = await AsyncStorageService.getItem("token")
			loadingApp(false);
			

			// console.log("APP LOADED...");
			// console.log("USER LOGGED IN...", !!hasToken);
		};
		
		// Simulate api call. Delete when developing 
		// setTimeout(() => {
			// Execute the created function directly
			onAppLoad();
		// }, 5000);
	}, []);

	const loadingApp = (state) => setLoadig(state);

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		if (loading) {
			return (
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text style={{ fontFamily: "Nunito-Bold", fontSize: 26, textAlign: "center" }}>LOADING...</Text>
					<ActivityIndicator color="#bc2b78" size="large" style={{ marginTop: 20 }} />
				</View>
			);
		} else {
			return (
				<Provider store={store}>
					<MainStack />
				</Provider>
			);
		}
	}
};

export default App;
