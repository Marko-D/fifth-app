import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {} from "react-native";
import { Colors } from "../../../styles";

interface ActionStepProps {
	title;
	icon;
	children;
}

export const ActionStep: React.FC<ActionStepProps> = ({
	title,
	icon,
	children,
}) => {
	return (
		<View style={styles.step}>
			<View style={styles.stepperIcon}>
				<Text style={styles.stepperIconTxt}>{icon}</Text>
			</View>
			<View style={styles.stepContent}>
				<View style={styles.stepTitle}>
					<Text>{title}</Text>
				</View>
				<View style={styles.stepInner}>{children}</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	step: {
		backgroundColor: Colors.GRAY_LIGHT,
		marginVertical: 5,
		paddingHorizontal: 20,
		paddingTop: 10,
		paddingBottom: 20,
		borderColor: Colors.GRAY_MEDIUM,
		borderWidth: 1,
		borderStyle: "solid",
	},
	stepContent: {
		// marginLeft: 10,
	},
	stepInner: {
		// backgroundColor: Colors.WHITE,
		// padding: 20,
	},
	stepTitle: {
		fontWeight: "700",
		marginBottom: 15,
	},
	stepBody: {
		color: Colors.GRAY_MEDIUM,
	},
	stepperIcon: {
		backgroundColor: Colors.WARNING,
		width: 30,
		height: 30,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 5,
		left: -15,
	},
	stepperIconTxt: {
		color: Colors.WHITE,
		fontWeight: "700",
	},
});
