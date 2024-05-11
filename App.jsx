import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from "./navigation/rootnavigator";


export default function App() {

	return (
		<NavigationContainer>
			<RootStackNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({

});