import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexGrow: 1,
		// paddingTop: Constants.statusBarHeight + 75,
		padding: 20,
		// paddingBottom: 260,
		flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'stretch',
		backgroundColor: Colors.GRAY_LIGHT,
	},
	cardContainer: {
		// backgroundColor: Colors.ALERT,
		// flexGrow: 1,
	},
	header: {
		backgroundColor: Colors.EMG_ALERT,
		fontWeight: Typography.FONT_WEIGHT_BOLD
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
		// width: '100%',
		fontFamily: "Nunito-Bold",
		fontSize: 18,
		lineHeight: 20
	},
	subText: {
		fontFamily: "Nunito-Bold",
		fontSize: 12,
		color: Colors.GRAY_DARK
	},
	inputContainer: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	// input: {
	// 	width: '80%',
	// 	borderColor: 'black',
	// 	borderWidth: 1,
	// 	padding: 10,
	// 	marginBottom: 10
	// },
	// buttonContainer: {
	// 	width: '80%',
	// 	flexDirection: 'row',
	// 	justifyContent: 'space-between'
	// },
	button: {
		width: '45%'
	},
	// actions: {
	// 	flex: 1,
	// 	backgroundColor: 'red',
	// },
	// actionsBtn: {
	// 	width: '50%',
	// }
});

export default styles;