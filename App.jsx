import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CustButton from "./components/button";
import Container, { Wrapper } from "./components/container";
import Typography from "./components/typography";
import { Ionicons } from '@expo/vector-icons';


export default function App() {
	return (
		<Container>
			<Wrapper sx={{
				justifyContent: "center"
			}}
			>
				{/* <CustButton type="close" onPress={() => console.log("called")} /> */}
				<View style={styles.container}>
					<Typography type="text24" sx={{
						color: "light-blue"
					}}>Check Your Mail</Typography>
					<Typography type="text16" sx={{
						color: "light-blue",
						textAlign: "center"
					}}>We have sent a password reset instructions to your email.
					</Typography>
					
					<CustButton type="rounded" >
						<Typography type="text16" sx={{
							color: "white",
							textAlign: "center"
						}}>Open Email App
						</Typography>
					</CustButton>
					<Typography type="text20" sx={{

						textAlign: "center"
					}}>
						<Typography type="text20" sx={{
							color: "blue",
							textAlign: "center"
						}}>Skip,
						</Typography>
						I’ll confirm later
					</Typography>
				</View>
			</Wrapper>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});
	//  <Image
		//   source={{ uri: 'https://example.com/image.jpg' }}
		//   style={styles.image}
		// />

		//  <Image
		//   source={require('./assets/image.jpg')} // Assuming the image is located in the 'assets' folder
		//   style={styles.image}
		// />