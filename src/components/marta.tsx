import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Platform,
	Alert,
	TouchableOpacity,
} from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import { useIsFocused } from "@react-navigation/native";

interface MartaProps {
	checkConnectivity?: any;
}

const Marta: React.FC<MartaProps> = ({checkConnectivity}) => {
	const netInfo = useNetInfo();

	useEffect(() => {
		return () => {
			checkConnectivity();
		};
	}, []);

	return (
		<View style={styles.inner}>
			{/* <Text style={styles.text}>Internet Not Reachable</Text>
			<Text style={styles.text}>type: {netInfo.type}</Text>
			<Text style={styles.text}>
				{!!netInfo.isConnected ? "isConnected: true" : "isConnected: false"}
			</Text>
			<Text style={styles.text}>
				{!!netInfo.isInternetReachable
					? "isInternetReachable: true"
					: "isInternetReachable: false"}
			</Text> */}

      <Text style={styles.text}>Internet Not Reachable</Text>
			{/* <TouchableOpacity
				style={
					netInfo.isInternetReachable === false
						? { ...styles.buttonWrapper, ...styles.buttonDisabled }
						: styles.buttonWrapper
				}
				disabled={netInfo.isInternetReachable === false}
				onPress={() => checkConnectivity(true)}
			>
				<Text style={styles.buttonTxt}>Check Connectivity</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#e2e2e2",
		// flex: 1,
	},
	inner: {
		zIndex: 1,
		flex: 1,
		top: 0,
		// height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		position: "absolute",
		backgroundColor: '#cc3244',
	},
	text: {
		lineHeight: 20,
		color: "#fff",
	},
	buttonWrapper: {
		backgroundColor: "#841584",
		color: "#fff",
		padding: 10,
		justifyContent: "center",
		alignSelf: "center",
	},
	buttonDisabled: {
		backgroundColor: "#666",
		color: "#999",
	},
	buttonTxt: {
		color: "#fff",
	},
	focused: {
		backgroundColor: "red",
		justifyContent: "center",
		alignSelf: "center",
		marginTop: Constants.statusBarHeight,
		padding: 10,
		zIndex: 2,
	},
});

export default Marta;
