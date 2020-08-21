import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {} from "react-native";
import { Colors } from "../../../styles";

interface StepProps {
	title;
	icon;
	children;
	isLast?: boolean;
}

export const Step: React.FC<StepProps> = ({
	title,
	icon,
	children,
	isLast
}) => {
	return (
		// style={[styles.text, touched && invalid ? styles.textinvalid : styles.textvalid]}
		<View style={[styles.step, !!isLast && styles.lastStep]}>
			<View style={styles.stepperIcon}>
				<Text style={styles.stepperIconTxt}>{icon}</Text>
			</View>
			<View style={styles.stepContent}>
				<View style={styles.stepTitle}><Text>{title}</Text></View>
				<View style={styles.stepInner}>
					{children}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	step: {
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 20,
		borderLeftColor: Colors.SECONDARY,
		borderLeftWidth: 3,
		borderStyle: "solid",
	},
	lastStep: {
		borderLeftColor: "transparent",
	},
	stepContent: {
		marginLeft: 20,
	},
	stepInner: {
		backgroundColor: Colors.WHITE,
	},
	stepTitle: {
		fontWeight: "700",
		marginBottom: 15,
	},
	stepBody: {
		color: Colors.GRAY_DARK,
	},
	stepperIcon: {
		backgroundColor: Colors.EMG_SECONDARY,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 0,
		left: -20,
	},
	stepperIconTxt: {
		color: Colors.WHITE,
		fontWeight: "700",
	},
});
