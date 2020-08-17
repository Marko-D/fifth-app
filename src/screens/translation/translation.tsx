import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Translate from "../../components/translate";
import { LocalizationContext, APP_LANGUAGE } from "../../services/localization";
import { AsyncStorageService } from "../../core/services/asyncStorageService";
import { ListItem } from "native-base";

interface TranslationProps {}

const Translation: React.FC<TranslationProps> = ({}) => {
	const { t, locale, setLocale, defaultLocale } = useContext<any>(
		LocalizationContext
	);

	const langs = [
		{
			name: 'English',
			val: 'en-us'
		}, 	
		{
			name: 'Spanish',
			val: 'es-us'
		}, 
	];
	const nameList = ["Marta", "Stefanija", "Marko", "Ivona"];

	const random = Math.floor(Math.random() * nameList.length);
	console.log(random, nameList[random]);
	const [lang, changeLang] = useState("en");

	const change = async (selectedLang) => {
		await AsyncStorageService.setItem(APP_LANGUAGE, selectedLang);
		setLocale(selectedLang);
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ marginBottom: 20, fontSize: 20 }}>
				Current locale: {locale}.{" "}
			</Text>
			{/* <Text>
				{locale !== "en-US" && locale !== "fr-FR"
					? 'Translations will fall back to "en" because none available'
					: null}
			</Text> */}
			{/* <Text>{IMLocalized('welcome')}</Text> */}

			{/* <Text style={{marginBottom: 20}}>{t("welcome", { someValue: Date.now() })}</Text> */}

			{/* <Translate label={"courseType"} variable={{ value: nameList[random] }}/>
            <Translate label={"courseSubTypeIsRequired"}/>
						<Text style={{ marginBottom: 20 }}>
							{locale}
						</Text>

			{locale === "en-us" ? (
				<Button title="Switch to Spanish" onPress={() => change("es-es")} />
			) : (
				<Button title="Switch to English" onPress={() => change("en-us")} />
			)} */}

			{/* <Button title="Reset Default" onPress={() => setLocale(defaultLocale)} /> */}

			<View style={[styles.container, { paddingTop: 30 }]}>
				<Text style={styles.language}>Change Language</Text>
				{langs.map((currentLang, i) => (
					<ListItem
						key={i}
						checkmark={currentLang.val === lang}
						onPress={() => change(currentLang.val)}
					>
						<Text style={styles.language}>{currentLang.name}</Text>
					</ListItem>
				))}
			</View>
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
