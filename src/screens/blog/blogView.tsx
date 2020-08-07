import React, { useEffect, useState } from "react";
import {
	View,
	SafeAreaView,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Share,
	Platform
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
import { useForm, Controller } from "react-hook-form";

interface BlogViewProps {}

type Form = {
	term: string;
};

export const BlogView: React.FC<BlogViewProps> = (props: any): any => {

	// FORM
	const { control, handleSubmit, errors } = useForm<Form>();

	const onShare = async (item) => {
    try {
			debugger
      const result = await Share.share({
				message: `Emergenetics blog post: ${item.links[0].url}`,
        title: item.title,
        url: item.links[0].url
      }, {
				// Android only:
				dialogTitle: item.title,
				// iOS only:
				excludedActivityTypes: [
					'com.apple.UIKit.activity.PostToTwitter'
				]
			});
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
	};

	// onClick() {
  //   Share.share({
  //     ...Platform.select({
  //       ios: {
  //         message: 'Have a look on : ',
  //         url: this.props.url,
  //       },
  //       android: {
  //         message: 'Have a look on : \n' + this.props.url
  //       }
  //     }),
  //     title: 'Wow, did you see that?'
  //   }, {
  //     ...Platform.select({
  //       ios: {
  //         // iOS only:
  //         excludedActivityTypes: [
  //           'com.apple.UIKit.activity.PostToTwitter'
  //         ]
  //       },
  //       android: {
  //         // Android only:
  //         dialogTitle: 'Share : ' + this.props.title
  //       }
  //     })
  //   });
  // }

	// onClick() {
	// 	Share.share({
	// 		message: 'BAM: we\'re helping your business with awesome React Native apps',
	// 		url: 'http://bam.tech',
	// 		title: 'Wow, did you see that?'
	// 	}, {
	// 		// Android only:
	// 		dialogTitle: 'Share BAM goodness',
	// 		// iOS only:
	// 		excludedActivityTypes: [
	// 			'com.apple.UIKit.activity.PostToTwitter'
	// 		]
	// 	})
	// }
	
	

	// const onSubmit = (data) => {
	// 	console.log(data)
	// 	props.searchRssFeed()
	// };

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
						<Controller
							as={TextInput}
							control={control}
							name="term"
							onChange={(args) => args[0].nativeEvent.text}
							rules={{ required: true }}
							defaultValue=""
							placeholder="Search"
							// style={styles.input}
							style={[
								styles.input,
								{ 
									borderColor: errors.term ? '#fc6d47' : '#c0cbd3',
									borderWidth: errors.term ? 3 : 1
							},
							]}
						/>
						{errors.term && <Text>This is required.</Text>}

						<TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit(props.onSubmit)}>
							<Text style={styles.btnPrimaryTxt}>Search</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.btnSecondary} onPress={props.onClear}>
							<Text style={styles.btnPrimaryTxt}>Clear</Text>
						</TouchableOpacity>

						
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
									<View style={{ marginTop: 5 }}>
										<Button onPress={() => onShare(item)} title="Share" />
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
	// console.log("state.blog.rssFeed.items", state.blog.rssFeed.items);
	return {
		blog: state.blog,
		loading: state.blog.loading,
	};
};

export default connect(mapStateToProps, null)(BlogView);
