// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from "react-native";

const setItem = async (key: string, value: any) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (err) {
		console.log(`The error is: ${err}`);
	}
};

const getItem = async (key: string) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (err) {
		console.log(`The error is: ${err}`);
	}
};

const clearItem = async (item: any) => {
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