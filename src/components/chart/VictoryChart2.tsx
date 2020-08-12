import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";

// const data = [
//   { quarter: 1, earnings: 13000 },
//   { quarter: 2, earnings: 16500 },
//   { quarter: 3, earnings: 14250 },
//   { quarter: 4, earnings: 19000 }
// ];

interface VictoryChart2Props {
data:any
}

export const VictoryChart2: React.FC<VictoryChart2Props> = ({data}) => {
    return (
      <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryPie data={data} x="label" y="value" />
      </VictoryChart>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});