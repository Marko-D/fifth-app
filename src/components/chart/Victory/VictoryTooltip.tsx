import React from 'react'

import { View, Text, StyleSheet } from 'react-native';

interface VictoryTooltipProps {
  [key: string]: any
}

export const VictoryTooltip: React.FC<VictoryTooltipProps> = (props) => {
  const { datum, x, y } = props;
    return (
    
        <View style={styles.tooltip}>

        <Text>{datum.y}</Text>
        </View>
      
    );
}

const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: 'red'
  }
});