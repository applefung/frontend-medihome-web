import type { Translations } from '@src/types/translations';

interface TranslationContent {
  all: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    all: 'All',
  },
  tc: {
    all: '全部',
  },
};

export default translations;
