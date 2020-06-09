// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from "react-native";

const setItem = async (key, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
		// console.log("AsyncStorage setItem setItem setItem", jsonValue);
	} catch (err) {
		console.log(`The error is: ${err}`);
	}
};

const getItem = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (err) {
		console.log(`The error is: ${err}`);
	}
};

const clearItem = async (item) => {
	try {
		await AsyncStorage.removeItem(item);
	} catch (err) {
		console.log(`The error is: ${err}`);
	}
};

const clearAll = async () => {
	try {
		await AsyncStorage.clear();
	} catch (err) {
		console.log(`The error is: ${err}`);
	}
};

export const AsyncStorageService = {
	setItem,
	getItem,
	clearItem,
	clearAll,
};

// async function setItem(item, value) {
// 	try {
// 		await AsyncStorage.setItem(item, JSON.stringify(value), (err) => {
// 			if (err) {
// 				// console.log(`The error is: ${err}`);
// 			}
// 		})
// 		// console.log("Item set: " + item + "=" + value);
// 	} catch (error) {
// 		// console.log("Failure setting " + item + " error: " + error);
// 	}
// }

// async function setItem(key, item) {
// 	try {
// 			//we want to wait for the Promise returned by AsyncStorage.setItem()
// 			//to be resolved to the actual value before returning the value
// 			var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
// 			return jsonOfItem;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }

// async function getItem(key) {
// 	try {
// 		const retrievedItem: any =  await AsyncStorage.getItem(key);
// 		const item = JSON.parse(retrievedItem);
// 		return item;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// 	return
// }

// async function getItem(item) {
// 	try {
// 		const value = await AsyncStorage.getItem(item);
// 		if (value !== null) {
// 			// We have data!!
// 			// console.log("found: " + item + "=" + value);
// 			// let a = JSON.parse(value)
// 			return value;
// 		} else {
// 			// console.log("Not found: " + item);
// 		}
// 	} catch (error) {
// 		// console.log("Failure retrieving " + item + " error: " + error);
// 	}
// }
