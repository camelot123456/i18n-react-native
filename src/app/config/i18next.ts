// i18next.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';
import en from 'assets/locales/en.json';
import vi from 'assets/locales/vi.json';

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
    var idiomaDevuelve: string = 'es'; // Default language
    return idiomaDevuelve; // Default in browser
  }
}

i18n.use(initReactI18next).init({
  lng: idioma(),
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en,
    vi,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  initImmediate: false, // Add this line
});

export default i18n;
