import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, Button, Platform, Alert, TouchableOpacity } from 'react-native'
import Constants from "expo-constants";
import { Colors, Typography } from "../styles";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import useForceUpdate from '../hooks/useForceUpdate';

interface CheckInternetConectionProps {

}

const CheckInternetConection: React.FC<CheckInternetConectionProps> = ({}) => {
  const netInfo = useNetInfo();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []); 

  const checkConnectivity = () => {
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  };

  // if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) { 
    return (   
      <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>Internet Not Reachable</Text>
        <Text style={styles.text}>type: {netInfo.type}</Text>
        <Text style={styles.text}>{!!netInfo.isConnected ? 'isConnected: true' : 'isConnected: false'}</Text>
        <Text style={styles.text}>{!!netInfo.isInternetReachable ? 'isInternetReachable: true' : 'isInternetReachable: false'}</Text>

        <TouchableOpacity 
          style={
            netInfo.isInternetReachable === false
            ? { ...styles.buttonWrapper, ...styles.buttonDisabled }
            : styles.buttonWrapper
          } 
          disabled={netInfo.isInternetReachable === false}
          onPress={() => checkConnectivity()}>
          <Text style={styles.buttonTxt}>Check Connectivity</Text>
        </TouchableOpacity>
      </View>
    
      </View>
    );
  // } else {
    // forceUpdate();
    // alert('force  update')
    // checkConnectivity()

    // forceUpdate()
  // }

  return null
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '100%',
    height: 160,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#e2e2e2',
    flexDirection: 'row'
    // position: 'absolute',
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    padding: 20
  },
  text: {
    lineHeight: 20,
  },
  buttonWrapper: {
    backgroundColor: "#841584",
    color: "#fff",
    padding: 10,
    justifyContent: "center",
    alignSelf: 'center',
  },
  buttonDisabled: {
    backgroundColor: "#666",
    color: "#999"
  },
  buttonTxt: {
    color: "#fff",
  }
});

export default CheckInternetConection;