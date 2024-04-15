import React, { ReactNode } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";


export default function Container({ children }) {
	const styles = StyleSheet.create({
		body: {
			width: wp("100%"),
			height: hp("100%"),
			alignItems: "center",
			justifyContent: "center",
		}
	})
	return <SafeAreaView style={styles.body}>{children}</SafeAreaView>;
}

export function Wrapper({ children, sx }) {
	const styles = StyleSheet.create({
		body: {
			width: "90%",
			height: "100%",
		}
	})
	return <View style={{ ...styles.body, ...sx }}>{children}</View>;
}