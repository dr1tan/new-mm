import { createI18n } from 'vue-i18n';
import de from './locales/de.json';
import en from './locales/en.json';

const messages = {
  de,
  en,
};

const i18n = createI18n({
  legacy: false, // disable legacy mode
  locale: 'de', // set default locale
  fallbackLocale: 'de', // set fallback locale
  messages,
});

export default i18n;
