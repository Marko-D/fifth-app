import * as React from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	SafeAreaView,
	ActivityIndicator,
	Alert,
	Button,
} from "react-native";
import { connect } from "react-redux";
import styles from "./loginStyle";
import Environment from "../../../active.env";
import Loader from "../../components/loader";
import { useForm, Controller } from "react-hook-form";
import { AsyncStorageService } from "../../core/services/asyncStorageService";

interface LoginViewProps {
	navigateToRegister: any;
	login: any;
	title: any;
}

type LoginForm = {
	userName: string;
	password: string;
};

export const LoginView: React.FC<LoginViewProps> = (props: any): any => {
	// FORM
	const { control, handleSubmit, errors } = useForm<LoginForm>();
	const onSubmit = (data) => props.login(data);

	const clearStorage = async () => {
		await AsyncStorageService.clearAll()
	}
	
	return (
		<ImageBackground
			source={require("../../../assets/images/bg.jpg")}
			style={styles.container}
		>
			<SafeAreaView>
				{!!props.loading && <Loader />}
				<Image
					style={styles.logo}
					source={require("../../../assets/images/logo.png")}
				/>
				<Text style={styles.env}>{Environment}</Text>
				<Text style={styles.paragraph}>{props.title}</Text>

				<Controller
					as={TextInput}
					control={control}
					name="userName"
					onChange={(args) => args[0].nativeEvent.text}
					rules={{ required: true }}
					defaultValue=""
					placeholder="User Name"
					// style={styles.input}
					style={[
            styles.input,
						{ 
							borderColor: errors.userName ? '#fc6d47' : '#c0cbd3',
							borderWidth: errors.userName ? 3 : 1
					 },
          ]}
				/>
				{errors.userName && <Text>This is required.</Text>}

				<Controller
					as={TextInput}
					control={control}
					name="password"
					onChange={(args) => args[0].nativeEvent.text}
					defaultValue=""
					placeholder="Password"
					style={styles.input}
				/>

				<TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit(onSubmit)}>
					<Text style={styles.btnPrimaryTxt}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnLink}>
					<Text style={styles.btnPrimaryTxt} onPress={clearStorage}>Clear AsyncStorage</Text>
				</TouchableOpacity>
					
				
				<TouchableOpacity style={styles.btnLink}>
					<Text style={styles.btnLinkTxt} onPress={props.navigateToRegister}>
						Register
					</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
		loading: state.auth.loading,
	};
};

export default connect(mapStateToProps, null)(LoginView);
