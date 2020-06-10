import * as React from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	SafeAreaView,
	ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import styles from './loginStyle';
import Environment from '../../../active.env'
import Loader from "../../components/loader";


interface LoginViewProps {
  navigateToRegister: any,
  login: any,
  title: any
}

export const LoginView: React.FC<LoginViewProps> = (props: any): any => {
	const [value, onChangeText] = React.useState("Useless Placeholder");
	return (
		<ImageBackground
			source={require("../../../assets/images/bg.jpg")}
			style={styles.container}
		>
			<SafeAreaView>
				{/* {!!props.loading && 

					<View style={styles.loading}>
					<ActivityIndicator size='large' />
					</View>
				// <ActivityIndicator  color="#bc2b78" size="large" style={styles.loading} 
				/>} */}

				{!!props.loading && <Loader/>}
				<Image
					style={styles.logo}
					source={require("../../../assets/images/logo.png")}
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
					<Text style={styles.btnLinkTxt} onPress={props.navigateToRegister}>
						Register
					</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
};

const mapStateToProps = (state) => {
	console.log('mapStateToProps ----------', state)
	return {
		auth: state.auth.token,
		currentUser: state.login.currentUser,
		loading: state.login.loading
	}
}

export default connect(mapStateToProps, null)(LoginView)
