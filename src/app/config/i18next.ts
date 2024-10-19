// i18next.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';
import en from 'assets/locales/en.json';
import vi from 'assets/locales/vi.json';
import en_test from 'assets/locales/en.test.json';
import vi_test from 'assets/locales/vi.test.json';

function idioma(): string {
  try {
    const deviceLanguage: string =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : // NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
          NativeModules.I18nManager.localeIdentifier;
    var deviceLanguageSplit: string = deviceLanguage.split('_')[0];
    return deviceLanguageSplit;
  } catch (error) {
    var idiomaDevuelve: string = 'en'; // Default language
    return idiomaDevuelve; // Default in browser
  }
}

const PROFILES = process.env.EXPO_PUBLIC_PROFILES;
let resources;

if (PROFILES.split(',').includes('test')) {
  resources = {
    en: en_test,
    vi: vi_test,
  };
} else {
  resources = { en, vi };
}

i18n.use(initReactI18next).init({
  lng: idioma(),
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  initImmediate: false, // Add this line
});

export default i18n;
