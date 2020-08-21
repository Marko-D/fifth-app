import React, { useState } from "react";
import {} from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

import { Colors } from "../../../styles";

interface DownloadProps {

}




export const Download: React.FC<DownloadProps> = () => {
let link = 'http://www.mtsp.gov.mk/content/pdf/programi/2019/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0%20%D0%BD%D0%B0%20%D0%BD%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%20%D0%B4%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%20%D0%B7%D0%B0%202020%20%D0%B3%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0.pdf';


// async componentDidMount() {
//   const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
//   if (permission.status !== 'granted') {
//       const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (newPermission.status === 'granted') {
//         //its granted.
//       }
//   } else {
//    ....your code
//   }
// }

  const downloadFile = async (url) =>{ 
    debugger;
    let path = url.split('/');
    const file_name = path[path.length-1];

    const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);

    if (permission.status !== 'granted') {
      alert('Permission Denied')
    } else {
      const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (newPermission.status === 'granted') {
        FileSystem.downloadAsync(url,FileSystem.documentDirectory + file_name).then(({ uri }) => {
          console.log('Finished downloading to ', uri);
          MediaLibrary.createAssetAsync(uri).then(asset => {
            console.log('asset', asset);
            MediaLibrary.createAlbumAsync('Emergenetics+', asset)
            .then(() => {
              alert('download success')
              // showMessage({
              //   message: t('general.success'),
              //     description: t('download.success'),
              //   type: 'success'
              // });
            })
            .catch(error => {
              alert('download failed')
              // showMessage({
              //   message: t('general.success'),
              //     description: t('download.failed'),
              //   type: 'danger'
              // });
            });
          });
          
        })
        .catch(error => {
          console.error(error);
        });
      }
      
    }
  

  }

	
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

			<TouchableOpacity style={styles.btn} onPress={() => downloadFile(link)}>
				<Text style={styles.buttonTxt}>Download</Text>
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
		backgroundColor: Colors.EMG_SUCCESS,
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
