import type { Translations } from "@src/types/translations";

interface TranslationContent {
  signIn: string;
  signUp: string;
}

const translations: Translations<TranslationContent> = {
  en: {
    signIn: "Sign In",
    signUp: "Sign Up",
  },
  tc: {
    signIn: "登入",
    signUp: "註冊",
  },
};

export default translations;
