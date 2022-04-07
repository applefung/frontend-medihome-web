import type { Translations } from '@src/types/translations';

interface TranslationContent {
  station: string;
  exit: string;
  businessHours: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    station: 'Station',
    exit: 'Exit',
    businessHours: 'Business Hours',
  },
  tc: {
    station: '地鐵站',
    exit: '出口',
    businessHours: '營業時間',
  },
};

export default translations;
