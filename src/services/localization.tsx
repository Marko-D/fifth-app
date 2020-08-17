import React, { useState, useMemo, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { I18nManager } from "react-native";
// import { init } from "./src/services/IMLocalized";
import axios from "axios";
// import translationService from "./src/screens/translation/translationService";
import Toast from 'react-native-simple-toast';
import translationService from '../screens/translation/translationService';
import { AsyncStorageService } from '../core/services/asyncStorageService';

interface AppLocalizationProps {

}

// export const LocalizationContext = createContext({ // 5
//   translations,
//   setAppLanguage: () => {}, // 6
//   appLanguage: DEFAULT_LANGUAGE, // 7
//   initializeAppLanguage: () => {}, // 8
// });

const DEFAULT_LANGUAGE = 'en-us';
export const APP_LANGUAGE = 'appLanguage';
const initContext = {};

export const LocalizationContext: any = createContext(initContext);

export const translationGetters = {
	"en-US": () => require("../lang/en.json"),
	"es-US": () => require("../lang/es.json"),
	"fr-FR": () => require("../lang/fr.json"),
};

const en = { ...translationGetters["en-US"]()};
const fr = { ...translationGetters["fr-FR"]()};
const es = { ...translationGetters["es-US"]()};

const languages = ['en-us', 'es-es'];
const stores: [] = []

const AppLocalization: React.FC<AppLocalizationProps> = ({children}) => {


  const [locale, setLocale] = useState(DEFAULT_LANGUAGE);
  const locContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
			setLocale,
			defaultLocale: DEFAULT_LANGUAGE
    }),
    [locale]
  );
  
  const setLanguages = async () => {
		try {
      for (const item of languages) {
        let lang =  await translationService.language(item);
        await AsyncStorageService.setItem(item, JSON.stringify(lang.data));
      }
		} catch (error) {
			console.log('errorerrorerrorerrorerror',error)
		}
	}

  const getLanguages = async(keys) => {
    let obj = {};
    // const stores = await AsyncStorage.multiGet(keys);
    // return stores.map(([key, value]) => ({[key]: value}))
    for (const key of keys) {
      let lang = await AsyncStorageService.getItem(key);
      obj = Object.assign(obj, {[key]: JSON.parse(lang)})
    }

    return obj
  }

  // const setKeysData = async(keys) => {
  //   const stores = await AsyncStorage.multiSet(keys);
  //   return stores.map(([key, value]) => ({[key]: value}))
  // }
  
  const initializeAppLanguage = async () => {
    // const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    let localeLanguageTag = Localization.locale.toLowerCase();
    let isRTL = Localization.isRTL;
    let parsedLang = {};
alert(localeLanguageTag)
    try {
      await setLanguages();
      parsedLang = await getLanguages(languages);
    } catch (error) {
      console.log(error)
    }
    
 
    // // if (currentLanguage) {
      // setLocale(localeLanguageTag);
    // // } else {
    // //   setLocale(DEFAULT_LANGUAGE);
    // // }
      
    I18nManager.forceRTL(isRTL);

    // i18n.translations = { fr, en, es };
    i18n.translations = parsedLang;  
    // i18n.translations = {
    //   [localeLanguageTag]: parsedLang[localeLanguageTag],
    // };
    console.log('i18n.translations', i18n.translations)


    i18n.locale = localeLanguageTag;
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.fallbacks = true;
  };


  // useEffect(() => {
    // setTimeout(() => {
      initializeAppLanguage();      
    // }, 5000);
  // }, [])

  return (
    <LocalizationContext.Provider value={locContext}>
      {children}
    </LocalizationContext.Provider>
  );


}

export default AppLocalization;