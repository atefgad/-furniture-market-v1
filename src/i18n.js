import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import languageDetector from "i18next-browser-languagedetector";

// the translations
import En from "./locale/en.json";
import Ar from "./locale/ar.json";

// (tip move them in a JSON file and import them,
const resources = {
  en: {
    translation: En,
  },
  ar: {
    translation: Ar,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
