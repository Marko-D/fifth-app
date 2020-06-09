import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./publicStack";
import { PrivateStack } from "./privateStack";
// import configureStore from "../store/configureStore";
// import { ActivityIndicator, Text } from "react-native";
import { connect } from 'react-redux'

const MainStack: React.FC<any> = (props) => {
	return (
			<NavigationContainer>
				{/* <ActivityIndicator /> */}
				{!!props.auth ? <PrivateStack /> : <PublicStack />}
			</NavigationContainer>
	);
};

const mapStateToProps = (state) => {
	console.log('MAIN STACK-------------------', state.AuthReducer);
	return {
		auth: state.AuthReducer.token
	}
}

export default connect(mapStateToProps, null)(MainStack)
