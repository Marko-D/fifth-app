import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import Constants from "expo-constants";
import { Colors, Typography } from "../styles";

const Loader = () => {
  let color = Colors.WARNING
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={color} size="large" />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
	loading: {
		position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1000
	},
})
