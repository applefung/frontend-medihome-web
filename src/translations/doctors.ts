import type { Translations } from '@src/types/translations';

interface TranslationContent {
  noRating: string;
  noData: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    noRating: 'No rating',
    noData: 'No Data',
  },
  tc: {
    noRating: '沒有評分',
    noData: '沒有搜尋結果',
  },
};

export default translations;
