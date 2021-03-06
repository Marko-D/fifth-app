import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

import PureChart from "react-native-pure-chart";
import { useFocusEffect } from "@react-navigation/native";
import VictoryChart from "./VictoryChart";

interface AppPureChartProps {
	[key: string]: any;
}

const Chart: React.FC<AppPureChartProps> = ({ data, chart }) => {
	const [toggle, setToggle] = useState(0);
	const fadeAnim = useRef(new Animated.Value(toggle)).current;
	// const switchToggle = () => setToggle(0);
// 
	Animated.timing(fadeAnim, {
		toValue: toggle,
		duration: 100,
		easing: Easing.ease,
		useNativeDriver: true, // To make use of native driver for performance
	}).start();

	// useEffect(() => {
	// 	setToggle(0);
  // }, []);
  
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused
  //     setToggle(0);
  //     return () => {
  //       // Do something when the screen is unfocused
  //       setToggle(0);
  //     };
  //   }, [])
  // )

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.barsContainer, { translateX: fadeAnim }]}>
				<View>
					<Text style={[styles.bars, styles.expressiveness]}>14</Text>
					<Text style={[styles.bars, styles.assertiveness]}>44</Text>
					<Text style={[styles.bars, styles.flexibility]}>20</Text>
				</View>
			</Animated.View>

			<View style={styles.chart}>
        {chart}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
    position: "relative",
    // paddingVertical: 40,
    // backgroundColor: 'blue',
    marginVertical: 20
	},
	barsContainer: {
		position: "absolute",
		width: "70%",
		top:22
		// right: 60
	},
	bars: {
		paddingVertical: 12,
		paddingHorizontal: 15,
		color: "#fff",
		fontSize: 20,
		fontWeight: "700",
	},
	expressiveness: {
		backgroundColor: "#9069b3",
	},
	assertiveness: {
		backgroundColor: "#b497ce",
	},
	flexibility: {
		backgroundColor: "#cdbadf",
	},
	chart: {
    // backgroundColor: 'red',
		// flex: 1,
		// alignSelf: 'flex-end',
		// position: "absolute",
		// right: 0,
		// width: '100%'
		padding: 0,
		marginLeft: "auto",
		// height: 180,
		// opacity: 0.5
	},
});

export default Chart;
