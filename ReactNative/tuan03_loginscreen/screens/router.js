import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import HomeScreen from "./HomeScreen"
import ForgotScreen from "./ForgotScreen"


const Stack = createStackNavigator();
export default function RouteBuilder() {
	return (
		<Stack.Navigator
			initialRouteName={"homescreen"}
			screenOptions={{ headerShown: false }}
		>
				<Stack.Screen
					key={1}
					name={"homescreen"}
					component={HomeScreen}
				/>
        <Stack.Screen
          key={2}
          name={"forgetpwd"}
          component={ForgotScreen}
        />
		</Stack.Navigator>
	);
}