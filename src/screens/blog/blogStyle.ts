import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexGrow: 1,
		// paddingTop: Constants.statusBarHeight + 75,
		padding: 20,
		flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'stretch',
		backgroundColor: Colors.GRAY_LIGHT,
	},
	cardContainer: {
		// backgroundColor: Colors.ALERT,
		// flexGrow: 1,
	},
	card: {
		backgroundColor: Colors.WHITE,
		marginBottom: 20,
		padding: 20,
		borderColor: Colors.GRAY_MEDIUM,
		borderWidth: 2
	},
	cardHeader: {
		paddingBottom: 20
	},
	cardBody: {

	},
	text: {
		fontFamily: "Nunito-Bold",
		fontSize: 18,
		lineHeight: 20
	},
	subText: {
		fontFamily: "Nunito-Bold",
		fontSize: 12,
		color: Colors.GRAY_DARK
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
	btnPrimary: {
		backgroundColor: Colors.WARNING,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		marginBottom: 15,
		height: 40,
		// width: "50%",
		// alignSelf: "center"
	},
	btnSecondary: {
		backgroundColor: Colors.PRIMARY,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		marginBottom: 15,
		height: 40,
		// width: "50%",
		// alignSelf: "center"
	},
	btnPrimaryTxt: {
		fontSize: 16,
		fontWeight: "400",
		color: "#fff",
		textAlign: "center",
	},
});

export default styles;