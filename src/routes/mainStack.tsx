import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./publicStack";
import { PrivateStack } from "./privateStack";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux"
import {getToken} from "../store/auth"
// import { ActivityIndicator, Text } from "react-native";

const MainStack: React.FC<any> = (props) => {
	const hasToken = !!props.auth;
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getToken())
	}, []);

	return (
		<NavigationContainer>
			{/* <ActivityIndicator /> */}
			{hasToken ? <PrivateStack /> : <PublicStack />}
		</NavigationContainer>
	);
};

const mapStateToProps = (state) => {
	// console.log("MAIN STACK-------------------", state);
	return {
		auth: state.auth.token
	};
};

export default connect(mapStateToProps, null)(MainStack);
