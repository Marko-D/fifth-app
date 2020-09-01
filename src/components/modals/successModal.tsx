import * as React from "react";
import { Text, View } from "react-native";

interface SuccessModalProps {}

const SuccessModal: React.FC<SuccessModalProps> = ({}) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
			}}
		>
			<View />
			<Text style={{ fontSize: 20, textAlign: "center" }}>
				Congratulations. The thing you wanted to happen has happened.
			</Text>
			<View />
		</View>
	);
};

export default SuccessModal