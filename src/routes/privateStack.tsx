import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home/home";
import { About } from "../screens/about/about";
import Dashboard from "../screens/dashboard/dashboard";
import MyProfile from "../screens/myprofile/myprofile";
import Blog from "../screens/blog/blogComponent";
import Persons from "../screens/persons/personsComponent";

// NESTED 
import HomeTabNavigator from "../screens/home/homeTabs";

import Constants from "expo-constants";
import { Colors, Typography } from "../styles";
import { EMG_ALERT } from "../styles/colors";

interface PrivateStackProps {}

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
	const routeName = route.state
		? route.state.routes[route.state.index].name
		: route.params?.screen || "Home";

	switch (routeName) {
		case "Home":
			return "Home";
		case "Dashboard":
			return "Dashboard";
		case "Blog":
			return "Blog";
		case "About":
			return "About";
		case "MyProfile":
			return "My Profile";
		case "Persons":
			return "Persons";
	}
};

export const PrivateStack: React.FC<PrivateStackProps> = ({}) => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				gestureEnabled: true,
				headerStyle: {
					backgroundColor: EMG_ALERT,
				},
				headerTitleStyle: {
					fontWeight: "bold"
				},
				headerTintColor: Colors.WHITE,
				headerBackTitleVisible: false,
			}}
			headerMode="float"
		>
			<Stack.Screen
				name="Home"
				component={HomeTabNavigator}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
				})}
			/>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ headerShown: false, title: "Dashboard Screen" }}
			/>
			<Stack.Screen
				name="Blog"
				component={Blog}
				options={{ title: "Blog Screen" }}
			/>
			<Stack.Screen
				name="MyProfile"
				component={MyProfile}
				options={{ title: "My Profile" }}
			/>
			<Stack.Screen
				name="About"
				component={About}
				// options={({ route }) => ({	title: route.params.item.name})}
			/>
			<Stack.Screen
				name="Persons"
				component={Persons}
				// options={({ route }) => ({	title: route.params.item.name})}
			/>			
		</Stack.Navigator>
	);
};
