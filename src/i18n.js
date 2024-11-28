import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./translations/en/translation.json"
import translationHI from "./translations/hi/translation.json"
import translationGU from "./translations/gu/translation.json"
import { supportedLanguages } from "./helper/supportedLanguages";

const resources = {
    en: {
        translation: translationEN,
    },
    hi: {
        translation: translationHI,
    },
    gu: {
        translation: translationGU,
    },
}

const i8 = () => {
    const supportLang = [];
    supportedLanguages &&
        supportedLanguages.map((o, i) => supportLang.push(o.key));
    i18n
        .use(LanguageDetector)
        .use(initReactI18next) 
        .init({
            resources,
            fallbackLng: "en",
            load: "languageOnly",
            supportedLngs: supportLang ? supportLang : ["en", "ar"],
            interpolation: {
                escapeValue: false,
            },
        });
};

export default i8;
