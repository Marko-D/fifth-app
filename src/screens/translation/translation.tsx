import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Translate from "../../components/translate";
import { LocalizationContext } from "../../services/localization";

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

            <Translate label={"myNameIs.test"} variable={{ value: nameList[random] }}/>
            <Translate label={"courses.materials"}/>
						<Text style={{ marginBottom: 20 }}>
							{locale}
						</Text>

			{locale === "en-us" ? (
				<Button title="Switch to Spanish" onPress={() => setLocale("es-es")} />
			) : (
				<Button title="Switch to English" onPress={() => setLocale("en-us")} />
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
