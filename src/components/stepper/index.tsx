import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {} from "react-native";
import { Colors } from "../../styles";

interface StepperProps {}

export const Stepper: React.FC<StepperProps> = ({ children }) => {
	return <View style={styles.stepperContainer}>{children}</View>;
};

const styles = StyleSheet.create({
	stepperContainer: {
    // backgroundColor: "red",
		paddingLeft: 20,
	},
});
