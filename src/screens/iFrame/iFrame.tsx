import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";

interface IFrameProps {}

export const IFrame: React.FC<IFrameProps> = ({ navigation }: any) => {
	const url = "https://dan95ut0l5w00.cloudfront.net/jfddaqvn.m2h/story.html?endpoint=https://qa-lrs.emergenetics.com/data/xAPI/&auth=Basic ZDM2ZWFjYTFmNWRjYzg3NjYxOTBmNTdmZDQ3ODE1MTgwY2MzZDdkMzoxYTVlZmI5N2E5NTZmOGM0YWFhMWM1YjVkMDUwYWNkZWNhZjYzNzMy&actor=%7b%22objectType%22%3a%22Agent%22%2c%22name%22%3a%22zorica.jankuloska%40it-labs.com%22%2c%22mbox%22%3a%22mailto%3azorica.jankuloska%40it-labs.com%22%7d&registration=7aff21cb-0208-47f1-9eb4-856b855d9f86";
	// const url = "https://www.chartjs.org/samples/latest/charts/pie.html";

	// const onNavigationStateChange = (navState) => {
	// 	if (navState.url.indexOf("https://www.google.com") === 0) {
	// 		const regex = /#access_token=(.+)/;
	// 		let accessToken = navState.url.match(regex)[1];
	// 		console.log(accessToken);
	// 	}
	// };

	return (
		<>
			{/* <WebView
        source={{
          uri: url,
        }}
        onNavigationStateChange={onNavigationStateChange}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        style={{ flex: 1 }}
      />  */}

			{/* <WebView 
          originWhitelist={['*']}
          source={{html: `<div><iframe width="560" height="315" src="https://www.youtube.com/embed/owsfdh4gxyc" frameborder="0" allowfullscreen></iframe></div>`}}
          // style={{width: 600, height: 200}}
        />   */}

			<View style={styles.container}>
				<WebView
					originWhitelist={["*"]}
					startInLoadingState
					scalesPageToFit
					source={{
						uri: url,
					}}
					// style={{width: 1000, height: 600}}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
		// padding: 20,
	},
});
