import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({ navigation }: any) => {
	const [items, setItems] = useState([
		{
			id: 0,
			name: "Marko",
			surname: "Danailov",
		},
		{
			id: 1,
			name: "Ivona",
			surname: "Danailova",
		},
		{
			id: 2,
			name: "Marta",
			surname: "Danailova",
		},
		{
			id: 3,
			name: "Stefanija",
			surname: "Danailova",
		},
	]);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				name: "test",
				surname: "Danailov",
			},
		]);
	};

	useEffect(() => {
		// setItems([]);
		console.log("component did mount");
	}, []);

	const handlePress = () => {
		navigation.goBack();
	};

	return (
		<>
			<View>
				<Button title="go back" onPress={handlePress} />
			</View>
			<View style={styles.container}>
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<Text style={styles.name}>
							{item.name} {item.surname}
						</Text>
					)}
				/>

				<TouchableOpacity style={styles.button} onPress={addItem}>
					<Text style={styles.buttonTxt}>Add New</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 40,
	},
	name: {
		backgroundColor: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#e3e3e3",
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: "#F6511D",
	},
	buttonTxt: {
		color: "#fff",
	},
});
