import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Platform, Alert, TouchableOpacity } from 'react-native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import Constants from "expo-constants";
import { useIsFocused } from '@react-navigation/native';
import Marta from './marta';
import Toast from 'react-native-simple-toast';
interface ConnectionControlProps {
  refresh?: any
}

const ConnectionControl: React.FC<ConnectionControlProps> = ({children, refresh}) => {
  const netInfo = useNetInfo();
  const [refreshConnection, setRefreshConnection] = useState<boolean>(false);
  const isFocused = useIsFocused();
  console.log('is focuseeeeeed', isFocused);

  const checkConnectivity = (refreshState) => {
    NetInfo.fetch().then(state => {
      refresh()
      Toast.show('Established internet connection');
    });
  };

  return (   
    <View style={styles.container}>
      {netInfo.type !== "unknown" && netInfo.isInternetReachable === false && 
        <Marta checkConnectivity={checkConnectivity}/>
      }
      {children}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e2e2e2',
    top: 0,
    position: 'absolute',
    zIndex: 1,
  },
  inner: {
    // flex: 1,
    // top: 0,
    // height: '100%',
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
    // position: 'absolute',
    backgroundColor: '#6669'
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
  },
  focused: {
    backgroundColor: 'red',
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: Constants.statusBarHeight,
    padding: 10,
    zIndex: 2
  }
});

export default ConnectionControl;