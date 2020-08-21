import React, { useState } from "react";
import {} from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';



import { Colors } from "../../../styles";

interface UploadProps {

}


export const Upload: React.FC<UploadProps> = () => {
  const [file, setFile] = useState()

  // const handleFilePick = async () => {
  //   // let fileInfo = await FileSystem.getInfoAsync(fileUri);
  //   // console.log(fileInfo);
  //   // // return fileInfo.size;
 
  //   // const fileUri = FileSystem.documentDirectory + filename;
  //   // const url = fileRoute;
  
  //   // let downloadObject = FileSystem.createDownloadResumable(
  //   //   url,
  //   //   fileUri
  //   // );
  //   // let response = await downloadObject.downloadAsync();
  
  // };
 

	const handleDocumentPick = async () => {    
    let result = await DocumentPicker.getDocumentAsync({});
    let fileToUpload = {
      uri: result['uri'],
      type: 'image/jpeg', // or photo.type
      name: result['name']
    };
    alert(result['uri']);
    console.log(result['uri']);
    setFile(result['uri'])
  }
  
  const uploadFIle = async () => {
    // const data = new FormData();
    // data.append('name', 'testName'); // you can append anyone.
    // data.append('photo', {
    //   uri: photo.uri,
    //   type: 'image/jpeg', // or photo.type
    //   name: 'testPhotoName'
    // });
    // fetch(url, {
    //   method: 'post',
    //   body: data
    // }).then(res => {
    //   console.log(res)
    // });

      //Check if any file is selected or not
      if (file != null) {
        //If file selected then create FormData
        const fileToUpload = file;
        const data = new FormData();
        data.append('name', 'Image Upload');
        data.append('file_attachment', fileToUpload);
        let res = await fetch(
          'http://localhost//webservice/user/uploadImage',
          {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          alert('Upload Successful');
        }
      } else {
        //if no file selected the show alert
        alert('Please Select File first');
      }
  };
	
	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<Text style={styles.infoTitle}>
					There are not any files uploaded yet.
				</Text>
				<Text style={styles.infoMessage}>
					Allowed formats .pptx, .ppt, .docx, .doc, .pdf, .txt, .jpeg, .jpg,
					.png, .xlsx, .xls, .zip, .rar; Max file size is: 50 MB.
				</Text>
			</View>

			{/* <View style={styles.btn}> */}

			<TouchableOpacity style={styles.btn} onPress={handleDocumentPick}>
				<Text style={styles.buttonTxt}>Upload</Text>
			</TouchableOpacity>
			{/* </View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	info: {
		// backgroundColor: Colors.EMG_SUCCESS,
		// paddingHorizontal: 10,
		// paddingVertical: 5,
		// alignItems: "center"
	},
	infoTitle: {
		marginBottom: 10,
	},
	infoMessage: {
		// backgroundColor: Colors.GRAY_MEDIUM,
		fontSize: 12,
		color: Colors.GRAY_DARK,
	},
	btn: {
		backgroundColor: "#841584",
		marginTop: 10,
		paddingVertical: 7,
		paddingHorizontal: 10,
		justifyContent: "center",
		alignSelf: "center",
		width: "100%",
	},
	buttonTxt: {
    textAlign: "center",
		color: "#fff",
		fontSize: 14,
		fontWeight: "700",
	},
});
