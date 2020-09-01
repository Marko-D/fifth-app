import * as React from "react";
import { Text, View } from "react-native";

interface ErrorModalProps {
	[key: string]: any;
}

const ErrorModal: React.FC<ErrorModalProps> = ( props ) => {
  debugger
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
			}}
		>
			<View />
			<Text style={{ fontSize: 25, color: "red", textAlign: "center" }}>
				There has been an error.
			</Text>
			<Text style={{ fontSize: 20, color: "green", textAlign: "center" }}>
				{props.errorMessage}
			</Text>
			<View />
		</View>
	);
};

export default ErrorModal