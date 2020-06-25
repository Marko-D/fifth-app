import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import { View } from "native-base";

class PieChartWithCenteredLabels extends React.PureComponent {
	render() {
		const data = [
			{
				key: 1,
				amount: '50',
				svg: { fill: "#E7B421" },
			},
			{
				key: 2,
				amount: 50,
				svg: { fill: "#d0112b" },
			},
			{
				key: 3,
				amount: 40,
				svg: { fill: "#009943" },
			},
			{
				key: 4,
				amount: 95,
				svg: { fill: "#233e97" },
			}
    ];
    
    // const data = [
		// 	{
		// 		name: "Seoul",
		// 		population: 40,
		// 		color: "#009943",
		// 		legendFontColor: "#7F7F7F",
		// 		legendFontSize: 15,
		// 	},
		// 	{
		// 		name: "Toronto",
		// 		population: 30,
		// 		color: "#E7B421",
		// 		legendFontColor: "#7F7F7F",
		// 		legendFontSize: 15,
		// 	},
		// 	{
		// 		name: "Beijing",
		// 		population: 20,
		// 		color: "#233e97",
		// 		legendFontColor: "#7F7F7F",
		// 		legendFontSize: 15,
		// 	},
		// 	{
		// 		name: "New York",
		// 		population: 10,
		// 		color: "#d0112b",
		// 		legendFontColor: "#7F7F7F",
		// 		legendFontSize: 15,
		// 	},
		// ];

		const Labels: any = ({ slices, height, width }) => {
			return slices.map((slice, index) => {
				const { labelCentroid, pieCentroid, data } = slice;
				return (
					<Text
						key={index}
						x={pieCentroid[0]}
						y={pieCentroid[1]}
						fill={"white"}
						textAnchor={"middle"}
						alignmentBaseline={"middle"}
						fontSize={20}
						stroke={"black"}
						strokeWidth={0.2}
					>
						{data.amount}
					</Text>
				);
			});
		};

		return (
			<View>
				<Text>asdsdasd</Text>
			<PieChart
				style={{ height: 200 }}
				valueAccessor={({ item }) => item.amount}
				data={data}
				spacing={0}
        outerRadius={"100%"}
        innerRadius={3}
			>
				<Labels />
			</PieChart>
			</View>
		);
	}
}

export default PieChartWithCenteredLabels;
