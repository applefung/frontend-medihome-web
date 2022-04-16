import type { Translations } from '@src/types/translations';

interface TranslationContent {
  specialty: string;
  district: string;
  search: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    specialty: 'Specialty',
    district: 'District',
    search: 'Search',
  },
  tc: {
    specialty: '專科',
    district: '地區',
    search: '搜尋',
  },
};

export default translations;
