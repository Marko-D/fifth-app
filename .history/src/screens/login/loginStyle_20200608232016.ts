import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Colors, Typography } from "../../styles/index";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#6a4c93",
		paddingVertical: 40,
		paddingHorizontal: 50,
	},
	paragraph: {
		marginVertical: 15,
		fontSize: 28,
		fontFamily: Typography.FONT_FAMILY_BOLD,
		color: "#fff",
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
		backgroundColor: Colors.WARNING,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		height: 40,
		// width: "50%",
		// alignSelf: "center"
	},
	btnLink: {
		paddingHorizontal: 10,
		marginTop: 15,
		borderRadius: 5,
		height: 40,
	},
	input: {
		height: 40,
		backgroundColor: "#fff",
		borderColor: "#dbe0e2",
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 5,
		marginBottom: 15,
		color: "#666",
	},
	logo: {
		display: "flex",
		justifyContent: "center",
		alignSelf: "center",
		marginBottom: 20,
	},
	env: {
		alignSelf: "center",
		width: 40,
		height: 30,
		color: '#000',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: "center",
		textTransform: "uppercase",
		lineHeight: 30,
		backgroundColor: Colors.SUCCESS,
		borderRadius: 50,
	}
});

export default styles;