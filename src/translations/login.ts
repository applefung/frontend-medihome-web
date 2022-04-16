import type { Translations } from '@src/types/translations';

interface TranslationContent {
  loginTitle: string;
  email: string;
  password: string;
  login: string;
  signUp: string;
  forgotPassword: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    loginTitle: 'MediHome - Login',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    signUp: 'Sign-up',
    forgotPassword: 'Forgot Password',
  },
  tc: {
    loginTitle: '醫家 - 登入',
    email: '電郵',
    password: '密碼',
    login: '登入',
    signUp: '註冊',
    forgotPassword: '忘記密碼',
  },
};

export default translations;
