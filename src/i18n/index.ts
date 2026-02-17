import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import esAR from "./locales/es-AR.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "es-AR": { translation: esAR },
      es: { translation: esAR },
      en: { translation: en },
    },
    fallbackLng: "es-AR",
    supportedLngs: ["es-AR", "es", "en"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

if (typeof document !== "undefined") {
  const initialLang = i18n.resolvedLanguage || i18n.language;
  document.documentElement.lang = initialLang;
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
