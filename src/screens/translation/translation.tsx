import React, { useContext } from "react";
import { IMLocalized, init } from "../../services/IMLocalized";
import { View, StyleSheet, Text, Button } from "react-native";
import { LocalizationContext } from "../../../App";

// import mainStack from '../../routes/mainStack';
interface TranslationProps {}

const Translation: React.FC<TranslationProps> = ({}) => {
	const { t, locale, setLocale, defaultLocale } = useContext<any>(
		LocalizationContext
	);

	//   init();
	return (
		//   <View style={styles.container} >
		//       <Text style={styles.welcomeText} >
		//           {IMLocalized('welcome')}
		//       </Text>
		//   </View>
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Current locale: {locale}. </Text>
			<Text>
				{locale !== "en-US" && locale !== "fr-FR"
					? 'Translations will fall back to "en" because none available'
					: null}
			</Text>
			{/* <Text>{IMLocalized('welcome')}</Text> */}
			<Text>{t("welcome", { someValue: Date.now() })}</Text>
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
