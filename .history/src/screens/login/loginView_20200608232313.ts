import * as React from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	SafeAreaView
} from "react-native";
// import API from "../../config/env";
import styles from './loginStyle';
import Environment from '../../../active.env'


interface LoginViewProps {
  navigateToRegister: any,
  login: any,
  title: any
}

export const LoginView: React.FC<LoginViewProps> = (props: any) => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
	return (
		<ImageBackground
			source={require("../../assets/images/bg.jpg")}
			style={styles.container}
		>
			<SafeAreaView>
				<Image
					style={styles.logo}
					source={require("../../assets/images/logo.png")}
				/>

				<Text style={styles.env}>{Environment}</Text>

				<Text style={styles.paragraph}>{props.title}</Text>

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
				<TouchableOpacity style={styles.btnPrimary} onPress={props.login}>
					<Text style={styles.btnPrimaryTxt}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnLink}
					// onPress={handlePress}
				>
					<Text style={styles.btnLinkTxt} onPress={props.navigateToRegister}>Register</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
};
