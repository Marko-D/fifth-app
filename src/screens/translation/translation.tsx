import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button, Switch } from "react-native";
import Translate from "../../components/translate";
import { LocalizationContext, languages, APP_LANGUAGE } from "../../services/localization";
import { AsyncStorageService } from "../../core/services/asyncStorageService";
import { ListItem } from "native-base";
import { Colors } from "../../styles";

interface TranslationProps {}

const Translation: React.FC<TranslationProps> = ({}) => {
	const { t, locale, setLocale, defaultLocale, changeLocale, setChangeLocale } = useContext<any>(
		LocalizationContext
	);
	// alert(locale)
	// const langs = [
	// 	{
	// 		name: 'English',
	// 		val: 'en-us'
	// 	}, 	
	// 	{
	// 		name: 'Spanish',
	// 		val: 'es-es'
	// 	}, 
	// ];
	const nameList = ["Marta", "Stefanija", "Marko", "Ivona"];

	const random = Math.floor(Math.random() * nameList.length);
	console.log(random, nameList[random]);
	const [lang, changeLang] = useState("en");

	const change = async (selectedLang) => {
		await AsyncStorageService.setItem(APP_LANGUAGE, selectedLang);
		setChangeLocale(selectedLang);
	};


	const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ marginBottom: 20, fontSize: 20 }}>
				Current locale: {locale}
			</Text>
			{/* <Text style={{ marginBottom: 20, fontSize: 20 }}>
				Changed locale: {changeLocale}
			</Text> */}
			{/* <Text>
				{locale !== "en-US" && locale !== "fr-FR"
					? 'Translations will fall back to "en" because none available'
					: null}
			</Text> */}
			{/* <Text>{IMLocalized('welcome')}</Text> */}

			{/* <Text style={{marginBottom: 20}}>{t("welcome", { someValue: Date.now() })}</Text> */}

			<Translate label={"courseType"} variable={{ value: nameList[random] }}/>
			<Translate label={"courseSubTypeIsRequired"}/>
			{/* <Text style={{ marginBottom: 20 }}>
				{locale}
			</Text> */}

			{locale === "en-us" ? (
				<Button title="Switch to Spanish" onPress={() => change("es-es")} />
			) : (
				<Button title="Switch to English" onPress={() => change("en-us")} />
			)}

			<Switch
        trackColor={{ false: "#767577", true: Colors.EMG_SUCCESS }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

			{/* <Button title="Reset Default" onPress={() => setLocale(defaultLocale)} /> */}

			{/* <View style={[styles.container, { paddingTop: 30 }]}>
				<Text style={styles.language}>Change Language</Text>
				{languages.map((currentLang, i) => (
					<ListItem
						key={i}
						onPress={() => change(currentLang.val)}
					>
						<Text style={styles.language}>{currentLang.name}</Text>
					</ListItem>
				))}
			</View> */}
		</View>
	);
};

export default Translation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		// padding: 20,
		// justifyContent: "center",
		// alignItems: "center",
	},
	welcomeText: {
		fontSize: 16,
	},
	language: {
		paddingTop: 10,
		textAlign: "center",
	},
});
