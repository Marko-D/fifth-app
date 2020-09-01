import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { connectionGroupInfo } from "../../store/dashboard";
import { connect } from "react-redux";
import Loader from "../../components/loader";
import ConnectionControl from "../../components/connectionControl";
import { openModal } from "../../store/modal";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props: any) => {
	const dispatch = useDispatch();

	const promptSuccess = (obj) => {
		dispatch(openModal(obj))
	}

	const promptError = (obj) => {
		dispatch(openModal(obj))
	}

	useEffect(() => {
		props.getData();
	}, []);

	const goToHome = () => {
		props.navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<ConnectionControl refresh={props.getData} />
			{!!props.dashboard.loading ? (
				<View>
					<Loader />
				</View>
			) : (
				<View>
					<Text style={styles.text}>
						numberOfConnectionGroups:{" "}
						{props.dashboard.connectionGroupInfo?.numberOfConnectionGroups}
					</Text>
					<Button title="Go to Home" onPress={goToHome} />

					<Button
						title="Open Success Modal"
						onPress={() => promptSuccess({id: 'Success'})}
					/>
					<Button
						title="Open Error Modal"
						onPress={() => promptError({id: 'Error', modalProps: {errorMessage: 'errorMessage'}})}
						// onPress={() => {
						// 	props.showModal({
						// 		id: 'Error',
						// 		modalProps: {errorMessage: 'errorMessage'},
						// 	});
						// }}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: 128,
		width: 128,
		marginBottom: 30,
	},
	text: {
		fontFamily: "Nunito-Bold",
		fontSize: 16,
	},
	token: {
		margin: 20,
		padding: 20,
		backgroundColor: "#e4e4e4",
		borderColor: "#999",
		borderWidth: 1,
	},
});

const mapDispatchToProps = (dispatch) => {
	debugger
	return {
		getData: () => {
			dispatch(connectionGroupInfo());
		}
	};
};

const mapStateToProps = (state) => {
	return {
		dashboard: state.dashboard,
		modal: state.modal,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
