import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as rssParser from "react-native-rss-parser";

import { Colors } from "../../../styles";

interface DownloadProps {

}

export const Download: React.FC<DownloadProps> = () => {
	let link = 'https://eduteach.es/worksheets-grammar.pdf';
	// const [downloadProgress, setDownloadProgress] = useState({	progress: 0	})
	const [downloadProgress, setDownloadProgress] = useState(false)

//   const requestPermission = async () => {
// //     askPermissionsAsync = async () => {
// //     await Permissions.askAsync(Permissions.CAMERA);
// //     await Permissions.askAsync(Permissions.CAMERA_ROLL);
// // };
//     const CAMERA_ROLL = await Permissions.getAsync(Permissions.CAMERA_ROLL);
//     const CAMERA = await Permissions.getAsync(Permissions.CAMERA);
//     if (!CAMERA.granted) alert("You need to enable permission to access the library.");
//     if (!CAMERA_ROLL.granted) alert("You need to enable permission to access the library.");
//   };

	const requestPermission = async () => {
		const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
		if (permission.status !== "granted") {
			const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (newPermission.status === "granted") {
				//its granted.
				alert('its granted')
			}
		} else {
			//  ....your code
		}
	};

	// const callback = downloadProgress => {
	// 	const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
	// 	setDownloadProgress({progress});
	// };


	// tEST POVIK OD KOA KE SE NAPRAVI DOWNLOAD
	const getData = () => {
		// console.log("rss...");

		return fetch("https://www.emergenetics.com/blog/feed/")
			.then((response) => response.text())
			.then((responseData) => rssParser.parse(responseData))
			.then((rss) => {			
				console.log(rss);
			})
			.catch((error) => {
				console.log(error);
			
			});
	};

  const downloadFile = async (url) =>{ 
		setDownloadProgress(true)
    debugger;
    let path = url.split('/');
    const file_name = path[path.length-1];
    FileSystem.downloadAsync(url,FileSystem.documentDirectory + file_name).then(({ uri }) => {
			console.log('Finished downloading to ', uri);
      MediaLibrary.createAssetAsync(uri).then(asset => {
				console.log('asset', asset);
        MediaLibrary.createAlbumAsync('Emergenetics+', asset)
        .then(() => {
					getData()
          alert('download success')
          // showMessage({
          //   message: t('general.success'),
          //     description: t('download.success'),
          //   type: 'success'
					// });
					setDownloadProgress(false)
        })
        .catch(error => {
					alert('download failed')
					setDownloadProgress(false)
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

  useEffect(() => {
    requestPermission();
  }, []);

	
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

			{/* <Text>{downloadProgress.progress}</Text> */}
			{!!downloadProgress && 	<ActivityIndicator color="#bc2b78" size="small" style={{ marginTop: 20 }} />}
		
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
