import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/auth/login";
import SignUP from "./screens/auth/signUp";
import Profile from "./screens/profile/profile";

const Stack = createStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator 
			screenOptions={{
				headerShown: false,
			}}
			>
				<Stack.Screen name="login" component={Login} />
				<Stack.Screen name="signup" component={SignUP} />
				<Stack.Screen name="profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});

	//  <Image
	// 	  source={{ uri: 'https://example.com/image.jpg' }}
	// 	  style={styles.image}
	// 	/>

	// 	 <Image
	// 	  source={require('./assets/image.jpg')} // Assuming the image is located in the 'assets' folder
	// 	  style={styles.image}
	// 	/>