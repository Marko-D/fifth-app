import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/loginComponent";
import Register from "../screens/register/register";

interface PublicStackProps {}

const Stack = createStackNavigator();

export const PublicStack: React.FC<PublicStackProps> = ({}) => {
	return (
    <Stack.Navigator>
	  	<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
	  	<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
	);
};
