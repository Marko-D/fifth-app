import React, {useState} from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { connect } from 'react-redux'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props: any) => {
	const [value, onChangeText] = useState("Useless Placeholder");
	const [storeState, setStoreState] = useState()
	const handlePress = () => {
		props.navigation.goBack();
	};
	  
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../../../assets/images/logo.png")} />
			</View>

			<View style={styles.paragraph}>
			<Text>Register {props.currentUser.name}</Text>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<TouchableOpacity style={styles.btnPrimary} onPress={handlePress}>
				<Text style={styles.btnPrimaryTxt}>Go to Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 40,
	},
	paragraph: {
		marginVertical: 15,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		textTransform: "uppercase",
	},
	btnPrimaryTxt: {
		fontSize: 16,
		fontWeight: "400",
		color: "#fff",
		textAlign: "center",
	},
	btnLinkTxt: {
		fontSize: 14,
		fontWeight: "500",
		color: "#666",
		textAlign: "center",
	},
	btnPrimary: {
		backgroundColor: "#007aff",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
	btnLink: {
		paddingHorizontal: 10,
		marginTop: 15,
		borderRadius: 5,
	},
	input: {
		height: 35,
		backgroundColor: "#fff",
		borderColor: "#dbe0e2",
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		marginBottom: 15,
		color: "#666",
	},
	logo: {
		height: 60,
	},
});
