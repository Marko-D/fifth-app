import React, { useEffect, useState } from "react";
import {
	View,
	SafeAreaView,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import styles from "./blogStyle";
import Loader from "../../components/loader";
// import {
// 	Container,
// 	Header,
// 	Content,
// 	Card,
// 	CardItem,
// 	Thumbnail,
// 	Text,
// 	Button,
// 	Icon,
// 	Left,
// 	Body,
// 	Right,
// 	ListItem,
// 	List,
// } from "native-base";
import HTML from "react-native-render-html";

interface BlogViewProps {}

export const BlogView: React.FC<BlogViewProps> = (props: any): any => {
	// const onSubmit = (data) => props.login(data);
	// useEffect(() => {
	// 	getRss();
	// }, []);

	// const [rssFeed, setRssFeed] = useState([]);

	// const feed = (list) => {
	// 	setRssFeed(list);
	// };

	// const goToHome = () => {
	// 	props.navigation.navigate("Home");
	// };

	// const getRss = () => {
	// 	console.log("rss...");
	// 	return fetch("https://www.emergenetics.com/blog/feed/")
	// 		.then((response) => response.text())
	// 		.then((responseData) => rssParser.parse(responseData))
	// 		.then((rss) => {
	// 			feed(rss.items);
	// 			console.log(rss);
	// 		});
	// };
	return (
		<SafeAreaView style={styles.container}>

			<View>
				{!!props.loading ? (
					<View>
						<Loader />
					</View>
				) : (
					// <List
					// 	dataArray={props.blog.rssFeed.items} // your array should go here
					// 	renderRow={(item, index) => (
					// 		<ListItem style={styles.card}>
					// 			<Card key={index} style={styles.card}>
					// 				<CardItem header>
					// 					<Text>{item.title}</Text>
					// 					{/* <Text note>{item.authors[index].name}</Text> */}
					// 				</CardItem>
					// 				<CardItem>
					// 					{/* <Body>
					// 						<HTML html={item.description} />
					// 					</Body> */}
					// 				</CardItem>
					// 				<CardItem footer>
					// 					<Text>{item.published}</Text>
					// 				</CardItem>
					// 			</Card>
					// 		</ListItem>
					// 	)}
					// ></List>

					<View style={styles.card}>
						<FlatList
							data={props.blog.rssFeed.items}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item, index }) => (
								<View style={styles.card}>
									<View style={styles.cardHeader}>
										<Text style={styles.text}>{item.title}</Text>
										<Text style={styles.subText}>{item.authors[0].name}</Text>
									</View>
									<View style={styles.cardBody}>
										<HTML html={item.description} />
									</View>
								</View>
							)}
						/>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => {
	console.log("state.blog.rssFeed.items", state.blog.rssFeed.items);
	return {
		blog: state.blog,
		loading: state.blog.loading,
	};
};

export default connect(mapStateToProps, null)(BlogView);
