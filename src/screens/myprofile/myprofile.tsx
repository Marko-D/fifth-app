import React, { Component } from "react";
import {
	Container,
	Header,
	Content,
	Button,
	ListItem,
	Text,
	Icon,
	Left,
	Body,
	Right,
	Switch,
} from "native-base";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { PieChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import PieChartWithCenteredLabels from "../../components/chart/PieChartWithCenteredLabelsChart";
import PieChartWithDifferentArcs from "../../components/chart/PieChartWithDifferentArcs";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default class MyProfile extends Component {
	render() {
		const data = [
			{
				name: "Seoul",
				population: 40,
				color: "#009943",
				legendFontColor: "#7F7F7F",
				legendFontSize: 15,
			},
			{
				name: "Toronto",
				population: 30,
				color: "#E7B421",
				legendFontColor: "#7F7F7F",
				legendFontSize: 15,
			},
			{
				name: "Beijing",
				population: 20,
				color: "#233e97",
				legendFontColor: "#7F7F7F",
				legendFontSize: 15,
			},
			{
				name: "New York",
				population: 10,
				color: "#d0112b",
				legendFontColor: "#7F7F7F",
				legendFontSize: 15,
			},
		];

		const screenWidth = Dimensions.get("window").width;
		const chartConfig = {
			backgroundGradientFrom: "#1E2923",
			backgroundGradientFromOpacity: 0,
			backgroundGradientTo: "#08130D",
			backgroundGradientToOpacity: 0.5,
			color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
			strokeWidth: 2, // optional, default 3
			barPercentage: 0.5,
			useShadowColorFromDataset: false, // optional
		};
		return (
			<Container>
				<SafeAreaView style={styles.container}>
					<ScrollView style={styles.scrollView}>
						<PieChart
							data={data}
							width={screenWidth}
							height={220}
							chartConfig={chartConfig}
							accessor="population"
							backgroundColor="transparent"
							paddingLeft="15"
							absolute
							hasLegend={true}
						/>
						<PieChartWithCenteredLabels />
						<PieChartWithDifferentArcs />
						<Content>
							<ListItem icon>
								<Left>
									<Button style={{ backgroundColor: "#FF9501" }}>
										<Icon active name="airplane" />
									</Button>
								</Left>
								<Body>
									<Text>Airplane Mode</Text>
								</Body>
								<Right>
									<Switch value={false} />
								</Right>
							</ListItem>
							<ListItem icon>
								<Left>
									<Button style={{ backgroundColor: "#007AFF" }}>
										<Icon active name="wifi" />
									</Button>
								</Left>
								<Body>
									<Text>Wi-Fi</Text>
								</Body>
								<Right>
									<Text>GeekyAnts</Text>
									<Icon active name="arrow-forward" />
								</Right>
							</ListItem>
							<ListItem icon>
								<Left>
									<Button style={{ backgroundColor: "#007AFF" }}>
										<Icon active name="bluetooth" />
									</Button>
								</Left>
								<Body>
									<Text>Bluetooth</Text>
								</Body>
								<Right>
									<Text>On</Text>
									<Icon active name="arrow-forward" />
								</Right>
							</ListItem>
						</Content>
					</ScrollView>
				</SafeAreaView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginBottom: Constants.statusBarHeight,
	},
	scrollView: {
		backgroundColor: "pink",
		marginHorizontal: 20,
	},
	text: {
		fontSize: 42,
	},
});
