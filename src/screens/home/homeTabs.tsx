import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../home/home";
import Blog from "../blog/blogComponent";
import Dashboard from "../dashboard/dashboard";
import MyProfile from "../myprofile/myprofile";
import Persons from "../persons/personsComponent";
import { About } from "../about/about";

import Constants from "expo-constants";
import { Colors, Typography } from "../../styles";
import { IFrame } from "../iFrame/iFrame";
import Translation from "../translation/translation";
import { LocalizationContext } from "../../services/localization";


const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
	const { t } = React.useContext(LocalizationContext);

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
						iconName = "ios-book";
					} else if (route.name == "MyProfile") {
						iconName = "ios-settings";
					} else if (route.name == "Persons") {
						iconName = "ios-person";
					} else if (route.name == "IFrame") {
						iconName = "ios-airplane";
					} else if (route.name == "Translation") {
						iconName = "ios-paper";
					}
					return <Ionicons name={iconName} color={color} size={size} />;
				},
			})}
		>
			<Tab.Screen name="Home" component={Home}  options={{ title: t('navigation.home') }}/>
			<Tab.Screen name="Dashboard" component={Dashboard} options={{ title: t('navigation.dashboard') }}/>
			{/* <Tab.Screen name="Blog" component={Blog} options={{ title: t('navigation.blog') }}/>
			<Tab.Screen name="About" component={About} options={{ title: t('navigation.about') }}/>
			<Tab.Screen name="MyProfile" component={MyProfile} options={{ title: t('navigation.myProfile') }}/>
			<Tab.Screen name="Persons" component={Persons} options={{ title: t('navigation.persons') }}/>
			<Tab.Screen name="IFrame" component={IFrame} options={{ title: t('navigation.iFrame') }}/> */}
			<Tab.Screen name="Translation" component={Translation} options={{ title: t('navigation.translation') }} />
		</Tab.Navigator>
	);
};

export default HomeTabNavigator;
