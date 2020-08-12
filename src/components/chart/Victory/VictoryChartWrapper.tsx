import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { VictoryChart, VictoryZoomContainer, VictoryAxis, VictoryBar, createContainer } from 'victory-native';

interface VictoryChartWrapperProps {
  [x: string]: any
}

const vStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

const padding = {
    portrait: { left: 55, top: 40, right: 45, bottom: 50 },
    landscape: { left: 100, top: 40, right: 70, bottom: 50 }
};

const tickCount = {
  portrait: 4,
  landscape: 9
};

export const colors = [
  "#7DB3FF",
  "#49457B",
  "#FF7C78",
  "#FED3D0",
  "#6F76D9",
  "#9ADFB4",
  "#2E7987"
];

export const VictoryChartWrapper: React.FC<VictoryChartWrapperProps> = ({}) => {
  // const windowSize = Dimensions.get('window');
  // const orientation = windowSize.width < windowSize.height ? 'portrait' : 'landscape';
  // const [state, setState] = useState({ orientation, ...windowSize })

  useEffect(() => {
    // update/Dimensions();
  }, [])
  

  const data = new Array(30).fill({}).map((item, index) => {
    return {
      x: index,
      y: 23,
    };
  });
  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

    return (

      <VictoryChart
              containerComponent={
                 <VictoryZoomVoronoiContainer labels={({ datum }) => `${datum.x}`} />
               }
            >
              
              <VictoryBar
                data={data}
                events={[
                  {
                    target: 'data',
                    eventHandlers: {
                      onPressIn: () => {
                        return [
                          {
                            target: 'data',
                            mutation: (props) => {
                              console.log('onPressIn');
                            },
                          },
                        ];
                      },
                      onPress: () => {
                        return [
                          {
                            target: 'data',
                            mutation: (props) => {
                              console.log('onPress');
                            },
                          },
                        ];
                      },
                      onPressOut: () => {
                        return [
                          {
                            target: 'data',
                            mutation: (props) => {
                              console.log('onPressOut');
                            },
                          },
                        ];
                      },
                    },
                  },
                ]}
                style={{
                  data: {
                    fill: ({ datum }) => {
                      return 'red';
                    },
                  },
                }}
              />
            </VictoryChart>
    );
}