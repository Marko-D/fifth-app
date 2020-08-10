import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

import PureChart from "react-native-pure-chart";

interface AppPureChartProps {
	[key: string]: any;
}

const AppPureChart: React.FC<AppPureChartProps> = ({ data }) => {
	const [toggle, setToggle] = useState(0);
	const fadeAnim = useRef(new Animated.Value(20)).current;
	// const switchToggle = () => setToggle(0);
// 
	Animated.timing(fadeAnim, {
		toValue: toggle,
		duration: 200,
		easing: Easing.ease,
		useNativeDriver: true, // To make use of native driver for performance
	}).start();

	useEffect(() => {
		setToggle(0);
  }, []);
  

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.barsContainer, { translateX: fadeAnim }]}>
				<View>
					<Text style={[styles.bars, styles.expressiveness]}>14</Text>
					<Text style={[styles.bars, styles.assertiveness]}>44</Text>
					<Text style={[styles.bars, styles.flexibility]}>20</Text>
				</View>
			</Animated.View>

			<View style={styles.pureChart}>
				<PureChart data={data} type="pie" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		position: "relative",
	},
	barsContainer: {
		position: "absolute",
		width: "70%",
		top: 25,
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
	pureChart: {
    // backgroundColor: 'red',
		// flex: 1,
		// alignSelf: 'flex-end',
		// position: "absolute",
		// right: 0,
		// width: '100%'
		marginLeft: "auto",
		// opacity: 0.5
	},
});

export default AppPureChart;
