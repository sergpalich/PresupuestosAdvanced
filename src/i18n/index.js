import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';
import ca from './ca.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ca: { translation: ca },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // react ya se encarga de esto
  }
});

export default i18n;
