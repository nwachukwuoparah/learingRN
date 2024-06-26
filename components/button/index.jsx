import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const CustButton = ({ children, type, sx, onPress, color }) => {
	const styles = StyleSheet.create({
		backButn: {
			marginBottom: "3%",
		},
		closeButn: {},
		rounded: {
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			width: wp("90%"),
			height: hp("6.9%"),
			backgroundColor: "blue",
			borderRadius: 50,
		},
		default: {
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			width: wp("90%"),
			height: hp("6.9%"),
			borderRadius: 50,
		},
	});

	switch (type) {
		case "forward":
			return (
				<TouchableOpacity onPress={onPress}>
					<AntDesign name="right" size={hp(2.5)} color={color} />
				</TouchableOpacity>
			);
		case "back":
			return (
				<TouchableOpacity onPress={onPress}>
					<AntDesign
						name="arrowleft"
						style={{ ...styles.backButn, ...sx }}
						size={hp(2.5)}
						color={color}
					/>
				</TouchableOpacity>
			);
		case "close":
			return (
				<TouchableOpacity onPress={onPress}>
					<Ionicons
						name="ios-close-outline"
						style={{ ...styles.closeButn, ...sx }}
						size={hp(3.5)}
						color={color}
					/>
				</TouchableOpacity>
			);
		case "rounded":
			return (
				<TouchableOpacity
					onPress={onPress}
					style={{ ...styles.rounded, ...sx }}
				>
					{children}
				</TouchableOpacity>
			);
		default:
			return (
				<TouchableOpacity
					onPress={onPress}
					style={{ ...styles.default, ...sx }}
				>
					{children}
				</TouchableOpacity>
			);
	}
};

export default CustButton;
