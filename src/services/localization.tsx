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
  [key: string]: any
}
// interface Locale {
//   [key: string]: any, 
// }

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

// const languages = ['en-us', 'es-es'];

const stores: [] = []


const AppLocalization: React.FC<AppLocalizationProps> = ({children, languagesList}) => {
  console.log('AppLocalization -------', )

  const [locale, setLocale] = useState<any>();
  // const [user, setUser] = useState<IUser>({name: 'Jon'});
  const [changeLocale, setChangeLocale] = useState<any>();
  const locContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
      changeLocale,
      setChangeLocale,
			defaultLocale: DEFAULT_LANGUAGE
    }),
    [locale]
  );
  
  // const setLanguages = async () => {
	// 	try {
  //     for (const item of languages) {
  //       let lang =  await translationService.language(item.val);
  //       await AsyncStorageService.setItem(item.val, JSON.stringify(lang.data));
  //     }
	// 	} catch (error) {
	// 		console.log('Error Setting Language', error)
	// 	}
	// }

  // const getLanguages = async(languages) => {
  //   let obj = {};

  //   for (const item of languages) {
  //     let lang = await AsyncStorageService.getItem(item.val);
  //     obj = Object.assign(obj, {[item.val]: JSON.parse(lang)})
  //   }

  //   return obj
  // }
  
  const initializeAppLanguage = async () => {
    // const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    let localeLanguageTag = Localization.locale.toLowerCase();
    let isRTL = Localization.isRTL;
    let parsedLang = {};
    try {
      // await setLanguages();
      parsedLang = await languagesList;
    } catch (error) {
      console.log(error)
    }
    
    
    if (changeLocale) {
      setLocale(changeLocale);
    } else {
      setLocale(localeLanguageTag);
    }
    // alert(`Localization ${localeLanguageTag}`)
      
    i18n.defaultLocale = DEFAULT_LANGUAGE;
    I18nManager.forceRTL(isRTL);

    // i18n.translations = { fr, en, es };
    i18n.translations = parsedLang;  
    // i18n.translations = {
    //   [localeLanguageTag]: parsedLang[localeLanguageTag],
    // };
    


    i18n.locale = localeLanguageTag;
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.fallbacks = true;
    // i18n.fallbacks = {
    //   fr: ["de", "en"],
    //   'MK-MK': "en-us"
    // } 
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