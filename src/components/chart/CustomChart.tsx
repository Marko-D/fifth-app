
import React, { Component, useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import  {
  Svg,
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  Marker,
} from 'react-native-svg';

interface CustomChartProps {
 [key: string]: any
}

export const CustomChart: React.FC<CustomChartProps> = ({}) => {
  const [scale, setScale] = useState()

  const handlePress = (val) => {
    setScale(val)
  }
    return (
    //   <Svg height="120" width="120" viewBox="0 0 240 240">
    //   <G onPress={() => alert('Pressed on G')} scale="1.4">
    //     <Circle cx="60" cy="60" r="60" fill="green" x="20" scale="1.2" />
    //     <Text
    //       fontWeight="bold"
    //       fontSize="40"
    //       x="100"
    //       y="40"
    //       onPress={() => alert('Pressed on Text')}>
    //       H
    //     </Text>
    //     {/* <Rect x="20" y="20" width="40" height="40" fill="yellow" /> */}
    //   </G>
    // </Svg>

    <Svg height="100" width="100">
      <Circle cx="50" cy="50" r="40" fill="#ddd" />
      <G onPress={() => handlePress(1.5)} scale={scale}>
        <Circle
          origin="50, 50"
          rotate="-90"
          cx="50"
          cy="50"
          r="20"
          stroke="#0074d9"
          strokeWidth="40"
          fill="none"
          strokeDasharray="80, 160"
        />
      </G>
    </Svg>


    );
}