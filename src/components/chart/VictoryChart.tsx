import React, { useState, useEffect } from 'react';
import { View , StyleSheet, Alert, Text, Button, TouchableOpacity} from 'react-native';
import { VictoryPie, VictoryLabel, VictoryTheme, VictoryTooltip } from 'victory-native';
import { useFocusEffect } from '@react-navigation/native';
import Svg from 'react-native-svg';
import { Colors } from '../../styles';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

interface VictoryChartProps {
  data?: any,
  [x: string]: any
}


const graphicColor = ['#E7B421', '#d0112b', '#009943', '#233e97']; // Colors
// const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

export const VictoryChart: React.FC<VictoryChartProps> = ({data}) => {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  const [modalData, setModalData] = useState();
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal(false)
  }
  // const data = [
  //   { date: "2019-12-10", volume: 16197 },
  //   { date: "2019-12-9", volume: 32010 },
  //   { date: "2019-12-8", volume: 26518 },
  //   { date: "2019-12-7", volume: 18606 },
  //   { date: "2019-12-6", volume: 16795 },
  //   { date: "2019-12-5", volume: 28607 },
  //   { date: "2019-12-4", volume: 23621 }
  // ];

  const mapData = () => {
    let d = data.map(item => {
      return {
        x: item.value,
        y: item.value
      }
    })
    return d
  }



  useEffect(() => {
    setGraphicData(mapData()); // Setting the data that we want to display
  }, []);

  //   useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused
      
  //     setGraphicData(mapData()); // Setting
  //     return () => {
  //       // Do something when the screen is unfocused
  //       setGraphicData(mapData());
  //     };
  //   }, [])
  // )

  return (
    <> 
    {/* <View style={styles.container}>
      <VictoryPie
      events={[{
        target: "data",
        eventHandlers: {
          onPressIn: () => {
            return [
              {
                target: "data",
                mutation: ({ style }) => {
                  return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                }
              }, {
                target: "labels",
                mutation: ({ text }) => {
                  return text === "clicked" ? null : { text: "clicked" };
                }
              }
            ];
          }
        }
      }]}
        animate={{  
          duration: 2000,
          onLoad: { duration: 1000 } 
        }}
        data={graphicData}
        width={250}
        height={250}
        colorScale={graphicColor}
        innerRadius={0}
      />
    </View> */}
    
 <View style={styles.container}>
  {/* {modal &&
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Text>{modalData}</Text>
        <TouchableOpacity onPress={handleModalClose} style={styles.modalClose}>
          <Text style={styles.modalCloseText}>X</Text>
          </TouchableOpacity>
      </View>
    </View>
  } */}
 <Svg>
   <VictoryPie
    colorScale={graphicColor}
    innerRadius={0}
    style={{
      labels: {
        fontSize: 18, fill: "#ffffff"
      }
    }}
    labelComponent={
      <VictoryTooltip
        style={{  }}
        cornerRadius={({ datum }) => datum.x > 6 ? 0 : 20}
        pointerLength={({ datum }) => datum.y > 0 ? 5 : 20}
        flyoutStyle={{
          stroke: ({ datum }) => datum.x === 10 ? "tomato" : "black",
            fill: Colors.GRAY_DARK,
        }}
      />
    }
    animate={{  
      duration: 2000,
      onLoad: { duration: 1000 } 
    }}
    // animate={{duration: 1000}}
    data={graphicData}
    padding={{ top: 0, bottom: 0, right:0, left:0 }}
    labelRadius={50}
    standalone={true}
    width={200}
    height={200}
    theme={VictoryTheme.material}
    // labels={() => ''}
    // labelComponent={ <VictoryTooltip flyoutComponent={<VictoryTooltip/>}/> }
    // labelComponent={<VictoryTooltip/>}
    events={[{
      target: "data",
      eventHandlers: {
        onPress: () => {
          return [
            // {
            //   target: "data",
            //   mutation: ({ style, text }) => {
            //     // return (style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" }});
            //     // return (style.strokeOpacity === 0.5 ? null : { style: { strokeOpacity: 0.5 }});
            //   },
            // }, 
            {
              target: "labels",
              mutation: (props) => {
                debugger
                console.log('text: '+props);
                // Alert.alert(props.text);
                setModal(true)
                setModalData(props.text)
                return null;
              }
            }
          ];
        }
      }
    }]}/>
  {/* <VictoryLabel
    x={200} y={200}
    textAnchor="middle"
    style={{ fontSize: 23,fill: 'white'}}
    text="Total Revenue"/> */}
</Svg>
</View>


{/* <View>
  <Svg width={400} height={400} viewBox="0 0 400 400" style={{ width: "100%", height: "auto" }}>
    <VictoryPie
      standalone={false}
      innerRadius={0}
      labelRadius={125}
      style={{ labels: { fontSize: 20 }}}
      data={wantedGraphicData}
      animate={{duration: 1500}}
      events={[
        {
            target: "data",
            eventHandlers: {
                onPress: () => {
                    return [{
                        target: "data",
                        eventKey: "all",
                        mutation: (props) => {
                            console.log('WORK PLEASE', props.text);
                            Alert.alert('chart touched');
                            return null
                        }
                    }];
                }
            }
        }
    ]}
      // events={[
      //   {
      //     target: "data",
      //     eventHandlers: {
      //       onPressIn: alert
      //     }
      //   }
      // ]}
    />
  </Svg>
</View> */}
</>
  );
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: "row",
    position: "relative",
    // paddingVertical: 40,
    backgroundColor: 'red',
    marginVertical: 20
  },
  modalContainer: {
    width: '100%',
    position: 'absolute',
    left: 'auto',
    zIndex: 10,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.GRAY_MEDIUM,
    borderStyle: 'solid',
    padding: 20,
    width: '70%'

  },
  modalClose: {
    padding: 5,
    position: 'absolute',
    left: '100%',
    top: 15,
    zIndex: 10,
    backgroundColor: Colors.ALERT
  },
  modalCloseText: {
    color: '#fff',
  }
});
export default VictoryChart;