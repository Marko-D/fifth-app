import React from "react";
import { Button, View, SafeAreaView, FlatList, Alert } from "react-native";
import {
	List,
	ListItem,
	Left,
	Body,
	Right,
	Thumbnail,
	Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";
import styles from "./personsStyle";

import Loader from "../../components/loader";
import { PersonsEditView } from "./personsEditView";
import { Colors, Typography } from "../../styles";

interface PersonsViewProps {}

export const PersonsView: React.FC<PersonsViewProps> = (props: any): any => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				{!!props.loading ? (
					<View>
						<Loader />
					</View>
				) : (
					<View>
						<Text>{!!props.editMode ? "Edit Mode On" : "Edit Mode Off"}</Text>
						{!!props.editMode && (
							<Button title="Cancel Edit Mode" onPress={props.handleEditMode} />
							)}

							<Button title="drawer" onPress={() => props.navigation.toggleDrawer()}/>
						<Text>
							{!!props.personEdit
								? "props.personEdit On"
								: "props.personEdit Off"}
						</Text>

						<PersonsEditView
							visible={props.personEdit}
							person={props.person}
							setPerson={props.setPerson}
							onEdit={props.handleEditPerson}
							onCancel={props.handleCancelPersonEdit}
						/>

						<List>
							<FlatList
								data={props.persons}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item, index }) => (
									<ListItem avatar onLongPress={props.handleEditMode}>
										<Left>
											<Thumbnail
												source={require("../../../assets/images/user.png")}
											/>
										</Left>
										<Body>
											<Text>{item.name}</Text>
											<Text note>{item.email}</Text>
										</Body>
										<Right>
											{/* <Text note>
												{new Date().getHours()}:{new Date().getMinutes()}
											</Text> */}

											{!!props.editMode && (
												<Ionicons
													name="ios-create"
													color={Colors.EMG_SUCCESS}
													size={24}
													onPress={() => {
														props.handlePersonEdit(item);
													}}
												/>
											)}
											{!!props.editMode && (
												<Ionicons
													name="ios-close-circle"
													color={Colors.EMG_ALERT}
													size={24}
													onPress={() =>
														console.log("Delete Item Index", index)
													}
												/>
											)}
										</Right>
									</ListItem>
								)}
							/>
						</List>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => {
	console.log("state.persons.persons", state.persons.persons);
	return {
		persons: state.persons.persons,
		loading: state.persons.loading,
	};
};

export default connect(mapStateToProps, null)(PersonsView);
