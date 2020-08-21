import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import {} from "react-native";
import { Colors } from "../../../styles";

interface UploadProps {}

export const Upload: React.FC<UploadProps> = ({ children }) => {
  const handleUpload = () => {
    console.log()
  }
	return (
		<View>
      <View style={styles.info}>
        <Text style={styles.infoTitle}>There are not any files uploaded yet.</Text>
        <Text style={styles.infoMessage}>Allowed formats .pptx, .ppt, .docx, .doc, .pdf, .txt, .jpeg, .jpg, .png, .xlsx, .xls, .zip, .rar; Max file size is: 50 MB.</Text>
      </View>

      {/* <View style={styles.btn}> */}

      <TouchableOpacity 
          style={styles.btn} 
          onPress={() => handleUpload()}>
          <Text style={styles.buttonTxt}>Upload</Text>
        </TouchableOpacity>
      {/* </View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	info: {
    // backgroundColor: Colors.EMG_SUCCESS,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // alignItems: "center"
  },
  infoTitle:{
    marginBottom: 10
  },
  infoMessage: {
    // backgroundColor: Colors.GRAY_MEDIUM,
    fontSize: 12,
    color: Colors.GRAY_DARK
  },
  btn: {
    backgroundColor: "#841584",
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: 10
  },
  buttonTxt:{
    color: "#fff",
    fontSize: 14,
    fontWeight: '700'
  }
});
