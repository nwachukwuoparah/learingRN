import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/login";
import SignUP from "../screens/auth/signUp";

const Stack = createStackNavigator();

export default function AuthStack() {

	return (
			<Stack.Navigator 
			screenOptions={{
				headerShown: false,
			}}
			>
				<Stack.Screen name="login" component={Login} />
				<Stack.Screen name="signup" component={SignUP} />
			</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});