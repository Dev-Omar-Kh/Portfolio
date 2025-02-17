import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from './Locales/en.json';
import arLang from './Locales/ar.json';

const resources = {
    en: {
        translation: enLang
    },
    ar: {
        translation: arLang
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        lng: localStorage.getItem('language') || 'en',

        interpolation: {
            escapeValue: false
        }

    });

export default i18n;