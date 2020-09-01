import React, { useState } from "react";
import { NativeModules } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { useSelector } from 'react-redux';



import { Colors } from "../../../styles";
import client from "../../../core/services/axios";

interface UploadProps {

}


export const Upload: React.FC<UploadProps> = () => {
  // const [file, setFile] = useState()
  const token = useSelector((state) => state.auth.token);

  console.log('11111111111',token)
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

  const selectFile = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({ type: 'text/csv' });
      if (file.type === 'success') {
        parseFile(file.uri);
      }
    } catch (err) {
      // Expo didn't build with iCloud, expo turtle fallback
      // webview.injectJavaScript('selectFile()');
    }
  };

  const parseFile = (uri) => {
    alert(uri)
  }

	const handleDocumentPick = async () => {    
    let result = await DocumentPicker.getDocumentAsync({});
    let fileToUpload = {
      uri: result['uri'],
      type: 'image/jpeg', // or photo.type
      name: result['name']
    };
    // alert(result['uri']);
    // console.log(result['uri']);
    // setFile(result['uri'])
    // let blob = await convertToBlob(result['uri'])
    // let name =  getFileExtension(blob)
    // alert(name);
    uploadFIle(fileToUpload)
  }

  // const convertToBlob = async audioUri => {
  //   let maxBlobSize = 1024;

  //   try {
  //     const fetchedAudio = await fetch(audioUri);
  //     const blob = await fetchedAudio.blob();

  //     if (blob.size <= maxBlobSize) {
  //       return blob;
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // // This will return a blob type, then, getting the file type is as simple as:

  // const getFileExtension = blob => {
  //     const { type } = blob;
  //     return type.substr(type.indexOf("/")).replace("/", ".");
  //   };
  
  
  const uploadFIle = async (file) => {
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

        
        const request = client('lms', token);
        debugger
        request.post('/roadmaps/6038e61f-19f2-4b22-9487-f68af6c7c505/actionsteps/fde13b03-8061-4831-b8b7-087905c71524/users/dfc5bf50-d7d6-4b46-96eb-7f2888d421f3/documents', data)
        .then(res => {
          alert('Upload Successful');
        }).catch(err => {
          alert('eeeeeeeeeeeeeeerrr')
        })


        // let res = await fetch(
        //   'https://qa-lms.emergenetics.com/roadmaps/6038e61f-19f2-4b22-9487-f68af6c7c505/actionsteps/fde13b03-8061-4831-b8b7-087905c71524/users/dfc5bf50-d7d6-4b46-96eb-7f2888d421f3/documents',
        //   {
        //     method: 'post',
        //     body: data,
        //     headers: {
        //       'Content-Type': 'multipart/form-data; ',
        //     },
        //   }
        // );
        // let responseJson = await res.json();
        // if (res.status == 1) {
        //   alert('Upload Successful');
        // }
      } else {
        //if no file selected the show alert
        alert('Please Select File first');
      }
  };

  // THUNK ASYNC FUNCTIONS
// Regular THUNK function
// export const getRoadmaps = () => async (dispatch, getState) => {
// 	dispatch(getRequest());
// 	try {
// 		let feed = await RoadmapsService.roadmap();
// 		dispatch(getSuccess(feed));
// 	} catch (error) {
// 		dispatch(getError(error.message));
// 	}
// };

  // // https://stackoverflow.com/questions/29489502/how-to-upload-file-to-server-using-react-native
  // const fileUpload2 = () => {
  //   var FileTransfer = require('@remobile/react-native-file-transfer');
  //     var FilePickerModule = NativeModules.FilePickerModule;

  //     var that = this;
  //     var fileTransfer = new FileTransfer();
  //     FilePickerModule.chooseFile()
  //     .then(function(fileURL){
  //       var options = {};
  //       options.fileKey = 'file';
  //       options.fileName = fileURL.substr(fileURL.lastIndexOf('/')+1);
  //       options.mimeType = 'text/plain';
  //       var headers = {
  //         'X-XSRF-TOKEN':that.state.token
  //       };
  //       options.headers = headers;
  //       var url = "Set the URL here" ;
  //       fileTransfer.upload(fileURL, encodeURI(url),(result)=>
  //       {
  //             console.log(result);
  //         }, (error)=>{
  //             console.log(error);
  //         }, options);
  //    })
  // }
	
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
