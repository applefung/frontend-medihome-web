import type { Translations } from '@src/types/translations';

interface TranslationContent {
  noRating: string;
  noData: string;
  languages: string;
  qualifications: string;
  services: string;
  hospitalAffiliations: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    noRating: 'No rating',
    noData: 'No Data',
    languages: 'Languages',
    qualifications: 'Qualifications',
    services: 'Services',
    hospitalAffiliations: 'Hospital Affiliations',
  },
  tc: {
    noRating: '沒有評分',
    noData: '沒有搜尋結果',
    languages: '語言',
    qualifications: '專業資格',
    services: '服務',
    hospitalAffiliations: '醫院名單',
  },
};

export default translations;
