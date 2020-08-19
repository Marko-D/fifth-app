import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';

interface AboutProps {}

export const About: React.FC<AboutProps> = ({ navigation }: any) => {
	const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result:any = await WebBrowser.openBrowserAsync('http://www.mtsp.gov.mk/content/pdf/programi/2019/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0%20%D0%BD%D0%B0%20%D0%BD%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%20%D0%B4%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%20%D0%B7%D0%B0%202020%20%D0%B3%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0.pdf');
    setResult(result);
  };
	
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

		
			<Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
			<Text>{result && JSON.stringify(result)}</Text>
	
				{/* <FlatList
					data={items}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						<Text style={styles.name}>
							{item.name} {item.surname}
						</Text>
					)}
				/>

				<TouchableOpacity style={styles.button} onPress={addItem}>
					<Text style={styles.buttonTxt}>Add New</Text>
				</TouchableOpacity> */}
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
