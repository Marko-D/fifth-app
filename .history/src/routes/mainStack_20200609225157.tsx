import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./publicStack";
import { PrivateStack } from "./privateStack";
import { connect } from "react-redux";
// import { ActivityIndicator, Text } from "react-native";

const MainStack: React.FC<any> = (props) => {
	return (
		<NavigationContainer>
			{/* <ActivityIndicator /> */}
			{!!props.auth ? <PrivateStack /> : <PublicStack />}
		</NavigationContainer>
	);
};

// const mapStateToProps = (state) => {
// 	console.log("MAIN STACK-------------------", state.AuthReducer);
// 	return {
// 		auth: state.AuthReducer.token,
// 	};
// };

export default MainStack
// export default connect(mapStateToProps, null)(MainStack);
