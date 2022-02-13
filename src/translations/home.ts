import type { Translations } from '@src/types/translations';

interface TranslationContent {
  signIn: string;
  signUp: string;
  specialty: string;
  district: string;
  search: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    specialty: 'Specialty',
    district: 'District',
    search: 'Search',
  },
  tc: {
    signIn: '登入',
    signUp: '註冊',
    specialty: '專科',
    district: '地區',
    search: '搜尋',
  },
};

export default translations;
