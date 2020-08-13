import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { LocalizationContext } from "../../../App";
import Translate from "../../components/translate";

interface TranslationProps {}

const Translation: React.FC<TranslationProps> = ({}) => {
	const { t, locale, setLocale, defaultLocale } = useContext<any>(LocalizationContext);



    const nameList = ["Marta", "Stefanija", "Marko", "Ivona"];

    const random = Math.floor(Math.random() * nameList.length);
    console.log(random, nameList[random]);


	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{marginBottom: 20, fontSize: 20}}>Current locale: {locale}. </Text>
			{/* <Text>
				{locale !== "en-US" && locale !== "fr-FR"
					? 'Translations will fall back to "en" because none available'
					: null}
			</Text> */}
			{/* <Text>{IMLocalized('welcome')}</Text> */}


			{/* <Text style={{marginBottom: 20}}>{t("welcome", { someValue: Date.now() })}</Text> */}

            <Translate label={"myNameIs"} variable={{ value: nameList[random] }}/>

			{locale === "en-US" ? (
				<Button title="Switch to French" onPress={() => setLocale("fr-FR")} />
			) : (
				<Button title="Switch to English" onPress={() => setLocale("en-US")} />
			)}

			<Button title="Reset Default" onPress={() => setLocale(defaultLocale)} />
		</View>
	);
};

export default Translation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	welcomeText: {
		fontSize: 16,
	},
});
