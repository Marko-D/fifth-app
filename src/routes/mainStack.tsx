import React, { useEffect } from "react";
import {
  NavigationContainer,
  DrawerActions,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from '@react-navigation/native';
import { PublicStack } from "./publicStack";
import { PrivateStack } from "./privateStack";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux"
import {
  Appearance,
  useColorScheme,
  AppearanceProvider,
} from 'react-native-appearance';
// import {getLoggedUser} from "../store/auth"
// import { ActivityIndicator, Text } from "react-native";

const MainStack: React.FC<any> = (props) => {
	const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
	};
	
	const isCurrentUserLogged = !!props.auth && Object.entries(props.auth).length > 0;
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getLoggedUser())
	// }, []);


	////////////////////////////////////////////////////////////////////
	/////// https://reactnavigation.org/docs/nesting-navigators ////////
	////////////////////////////////////////////////////////////////////

	return (
		<NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
			{/* <ActivityIndicator /> */}
			{!isCurrentUserLogged ? <PrivateStack /> : <PublicStack />}
		</NavigationContainer>
	);
};

const mapStateToProps = (state) => {
	// console.log("MAIN STACK-------------------", state);
	return {
		auth: state.auth.currentUser
	};
};

export default connect(mapStateToProps, null)(MainStack);
