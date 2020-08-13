import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { I18nManager } from "react-native";

export const translationGetters = {
	"en-US": () => require("../lang/en.json"),
	"es-US": () => require("../lang/es.json"),
	"fr-FR": () => require("../lang/fr.json"),
};

// function getLocale (type) {
//   let lang = {
//     "en-US": () => require("../lang/en.json"),
//     "es-US": () => require("../lang/es.json"),
//     "fr-FR": () => require("../lang/fr.json"),
//     'default': () => require("../lang/en.json"),
//   };
//   return (lang[type] || lang['default']);
// }
// 
// getLocale('coke');


export const IMLocalized = memoize(
	(key, config) =>
		i18n.t(key, config).includes("missing") ? key : i18n.t(key, config),
	(key, config) => (config ? key + JSON.stringify(config) : key)
);



export const init = () => {
	let localeLanguageTag = Localization.locale;
	let isRTL = Localization.isRTL;
	IMLocalized.cache.clear();
	// update layout direction
	I18nManager.forceRTL(isRTL);
  // set i18n-js config
  
  // i18n.translations = {
  //   "en-US": () => require("../lang/en.json"),
  //   "es-US": () => require("../lang/es.json"),
  //   "fr-FR": () => require("../lang/fr.json"),
  // }
  
  // if (translationGetters[localeLanguageTag]) {
  //   i18n.translations = {
  //     [localeLanguageTag]: translationGetters[localeLanguageTag](),
  //   };
  // } else {
  //   i18n.translations = {
  //     "en-US": () => require("../lang/en.json"),
  //   };
  // }

  i18n.translations = {
		[localeLanguageTag]: translationGetters[localeLanguageTag](),
  };
  // i18n.translations = {
  //   "en-US": () => require("../lang/en.json"),
  //   "es-US": () => require("../lang/es.json"),
  //   "fr-FR": () => require("../lang/fr.json"),
  // }
  
  i18n.locale = localeLanguageTag;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;
};
