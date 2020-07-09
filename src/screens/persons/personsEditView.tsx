import React, { useState } from "react";
import { View, TextInput, Modal } from "react-native";

import { connect } from "react-redux";
import styles from "./personsStyle";
import Loader from "../../components/loader";
import {
	Card,
	CardItem,
	Text,
	Left,
	Thumbnail,
	Header,
	Body,
	Image,
	Icon,
	Right,
	Button,
	Title,
} from "native-base";
// import { Header } from "react-native/Libraries/NewAppScreen";
interface PersonsEditViewProps {
	person: any;
	setPerson: any;
	visible: any;
	onEdit: any;
	onCancel: any;
}

export const PersonsEditView: React.FC<PersonsEditViewProps> = (
	props: any
): any => {
	console.log("PersonsEditView", props);
	// const [enteredGoal, setEnteredGoal] = useState("");

	// const goalInputHandler = (enteredGoal) => {
	// 	setEnteredGoal(enteredGoal);
	// };

	// const addGoalHandler = () => {
	// 	props.onAddGoal(enteredGoal);
	// 	setEnteredGoal("");
	// };

	// id: 5
	// name: "Chelsey Dietrich"
	// username: "Kamren"
	// email: "Lucio_Hettinger@annie.ca"
	// address: {street: "Skiles Walks", suite: "Suite 351", city: "Roscoeview", zipcode: "33263", geo: {…}}
	// phone: "(254)954-1289"
	// website: "demarco.info"
	// company: {name: "Keebler LLC", catchPhrase: "User-centric fault-tolerant solution", bs: "revolutionize end-to-end systems"}

	return (
		// <Modal visible={modalVisible} animationType="slide" 
		<Modal visible={props.visible} animationType="slide" onRequestClose={()=> props.onCancel()}>
			<Header style={styles.header}>
				<Left>
					<Button transparent onPress={props.onCancel}>
						<Icon name='arrow-back' />
					</Button>
				</Left>
				<Body>
					<Title>{props.person?.name}</Title>
				</Body>
				<Right>
					<Button transparent>
						<Icon name='search' />
					</Button>
					<Button transparent>
						<Icon name='heart' />
					</Button>
					<Button transparent>
						<Icon name='more' />
					</Button>
				</Right>
			</Header>

			<View style={styles.container}>
				<Card>
					<CardItem>
						<Body>
							<Text style={styles.text}>{props.person?.name}</Text>
							<Text note>{props.person?.email}</Text>
						</Body>
					</CardItem>
					<CardItem cardBody>
						<Body>
							<CardItem>
								<Text>Street: {props.person?.address?.street}</Text>
							</CardItem>
							<CardItem>
								<Text>Suite: {props.person?.address?.suite}</Text>
							</CardItem>
							<CardItem>
								<Text>City: {props.person?.address?.city}</Text>
							</CardItem>
							<CardItem>
								<Text>Zip Code: {props.person?.address?.zipcode}</Text>
							</CardItem>
							<CardItem>
								<Text>Phone: {props.person?.phone}</Text>
							</CardItem>
							<CardItem>
								<Text>Web Site: {props.person?.website}</Text>
							</CardItem>
						</Body>
					</CardItem>
					<CardItem>
						<Left>
							<Button transparent>
								<Icon active name="thumbs-up" />
								<Text>12 Likes</Text>
							</Button>
						</Left>
						<Body>
							<Button transparent>
								<Icon active name="chatbubbles" />
								<Text>4 Comments</Text>
							</Button>
						</Body>
						<Right>
							<Text>11h ago</Text>
						</Right>
					</CardItem>
				</Card>

				{/* <Button block onPress={props.onCancel}>
					<Text>Close</Text>
				</Button> */}
				{/* 				
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={person}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="ADD" color="green" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={props.onCancel} />
					</View>
				</View> */}
			</View>
		</Modal>
	);
};

// const mapStateToProps = (state) => {
// 	console.log("state.persons.persons", state.persons.persons);
// 	return {
// 		persons: state.persons.persons,
// 		loading: state.persons.loading,
// 	};
// };

// export default connect(mapStateToProps, null)(PersonsEditView);
export default PersonsEditView;
