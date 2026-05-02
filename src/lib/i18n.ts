import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import idTranslation from '../locales/id/translation.json';
import enTranslation from '../locales/en/translation.json';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: 'id',
    lng: 'id',
    resources: {
      id: { translation: idTranslation },
      en: { translation: enTranslation },
    },
    interpolation: { escapeValue: false },
  });
}

export default i18n;
