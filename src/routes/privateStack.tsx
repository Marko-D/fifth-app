import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home/home";
import { About } from "../screens/about/about";
import Dashboard from "../screens/dashboard/dashboard";
import MyProfile from "../screens/myprofile/myprofile";
import Blog from "../screens/blog/blogComponent";

// import { SelectRole } from "../screens/selectRole/SelectRole";

interface PrivateStackProps {}

const Stack = createStackNavigator();

export const PrivateStack: React.FC<PrivateStackProps> = ({}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={{ title: "Home Screen" }}/>
			<Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, title: "Dashboard Screen" }}/>
			<Stack.Screen name="Blog" component={Blog} options={{ title: "Blog Screen" }}/>
			<Stack.Screen name="MyProfile" component={MyProfile} options={{ title: "My Profile" }}/>
			<Stack.Screen name="About" component={About} 
			// options={({ route }) => ({	title: route.params.item.name})}			
			/>
			{/* <Stack.Screen name="SelectRole" component={SelectRole} /> */}

		</Stack.Navigator>
	);
};
