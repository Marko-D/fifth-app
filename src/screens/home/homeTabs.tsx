import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../home/home";
import Blog from "../blog/blogComponent";
import Dashboard from "../dashboard/dashboard";
import MyProfile from "../myprofile/myprofile";
import { About } from "../about/about";

import Constants from "expo-constants";
import { Colors, Typography } from "../../styles";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
        inactiveTintColor: Colors.GRAY_DARK,
				activeTintColor: Colors.WHITE,
				style: {
					backgroundColor: Colors.BLACK,
				},
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;
					if (route.name == "Home") {
						iconName = "ios-home";
					} else if (route.name == "Blog") {
						iconName = "ios-construct";
					} else if (route.name == "Dashboard") {
						iconName = "ios-happy";
					} else if (route.name == "About") {
						iconName = "ios-infinite";
					} else if (route.name == "MyProfile") {
						iconName = "ios-person";
					}
					return <Ionicons name={iconName} color={color} size={size} />;
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Blog" component={Blog} />
			<Tab.Screen name="About" component={About} />
			<Tab.Screen name="MyProfile" component={MyProfile} />
		</Tab.Navigator>
	);
};

export default HomeTabNavigator;
