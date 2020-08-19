import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/news";
import { connect } from "react-redux";
import Loader from "../../components/loader";
import ConnectionControl from "../../components/connectionControl";
import { Colors } from "../../styles";
import HTML from "react-native-render-html";
import { Col } from "native-base";

interface NewsProps {}
let initialParams = {
  CurrentPage: 1,
  PageSize: 10,
  Status: 'Active',
  Types: 'News'
}

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );



// const renderItem = ({ item }) => (
	// <Item title={item.name} />
	// 	<View style={styles.item}>
	// 	<Text style={styles.title}>{item.name}</Text>
	// 	<HTML onLinkPress={() => navigateToBLog(item.blogUrl)} html={item.description} />
// );

const News: React.FC<NewsProps> = (props: any) => {
  const [params, setParams] = useState(initialParams)

	useEffect(() => {
		props.getData(params);
	}, []);

	const navigateToBLog = (blogUrl) => {
		if(!!blogUrl){
			props.navigation.navigate("Blog");
		}		
	}


	return (
		<View style={styles.container}>
		<ConnectionControl refresh={props.getData} />	
				{!!props.news.loading ? (
					<View>
						<Loader />
					</View>
				) : (
				  <FlatList
						data={props.news.news}
						// renderItem={renderItem}
						renderItem={({ item }) => (
							<View style={styles.item}>
								<Text style={styles.title}>{item.name}</Text>
								<HTML onLinkPress={() => navigateToBLog(item.blogUrl)} html={item.description} />
							</View>
						)}
						keyExtractor={item => item.id.toString()}
					/>
				)}		
			</View>	
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
		backgroundColor: Colors.WHITE,
		borderColor: Colors.GRAY_MEDIUM,
		borderWidth: 1,
		borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  title: {
		fontSize: 16,
		fontWeight: '900'
	},
	description: {
		fontSize: 16
	}
});

const mapDispatchToProps = (dispatch) => {
	return {
		getData: (params) => {
			dispatch(getNews(params));
		},
	};
};

const mapStateToProps = (state) => {
	return {
		news: state.news,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
