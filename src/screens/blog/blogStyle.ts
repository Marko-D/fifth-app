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
	}
});

export default styles;