import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { I18nManager } from "react-native";

export const translationGetters = {
	"en-US": () => require("../lang/en.json"),
	"es-US": () => require("../lang/es.json"),
	"fr-FR": () => require("../lang/fr.json"),
};
const en = { ...translationGetters["en-US"]()};
const fr = { ...translationGetters["fr-FR"]()};
const es = { ...translationGetters["es-US"]()};


// for (const [key, value] of Object.entries(translationGetters)) {
//   // console.log(`${key}: ${value}`);
//   const [key] = { ...translationGetters[key]()};
// }

// let languages = Object.entries(translationGetters).forEach(([key, value]) => {
//    return  [key]: {...value}
// }); 

// console.log(languages)

// "foo: bar", "baz: 42"
// function getlanguages (type) {
//   var languages = {
//     "en-US": () => require("../lang/en.json"),
//     "es-US": () => require("../lang/es.json"),
//     "fr-FR": () => require("../lang/fr.json"),
//     'default': () => require("../lang/en.json")
//   };
//   return (languages[type] || languages['default']);
// }

// var drink = getDrink('coke');

// const languages = (localeLanguageTag) => {
//   return {
// 		[localeLanguageTag]: translationGetters[localeLanguageTag](),
//   };
// }

// const en = {
//   welcome: 'welcome',
//   bar: 'Bar {{someValue}}',
// };

// const fr = {
//   welcome: 'Benuevento',
//   bar: 'Bár {{someValue}}',
// };

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


// export const IMLocalized = memoize(
// 	(key, config) =>
// 		i18n.t(key, config).includes("missing") ? key : i18n.t(key, config),
// 	(key, config) => (config ? key + JSON.stringify(config) : key)
// );



export const init = () => {
	// let localeLanguageTag = Localization.locale;
	let isRTL = Localization.isRTL;
	// IMLocalized.cache.clear();
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

  i18n.translations = { fr, en, es };

  // i18n.translations = {
	// 	[localeLanguageTag]: translationGetters[localeLanguageTag](),
  // };
  // i18n.translations = {
  //   "en-US": () => require("../lang/en.json"),
  //   "es-US": () => require("../lang/es.json"),
  //   "fr-FR": () => require("../lang/fr.json"),
  // }
  
  i18n.locale = localeLanguageTag;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;
};
