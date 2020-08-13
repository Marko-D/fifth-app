import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { LocalizationContext } from "../../App";

interface TranslateProps {
  label: string, 
  variable?: {
    value: any
  },
}

const Translate: React.FC<TranslateProps> = ({label, variable}) => {
	const { t, locale, setLocale, defaultLocale } = useContext<any>(
		LocalizationContext
	);

	return (
			<Text style={{ marginBottom: 20 }}>
				{t(label, { variable: variable?.value })}
			</Text>
	);
};

export default Translate