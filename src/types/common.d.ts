export interface ResponseSuccessType<T> {
  data: T | null;
  status: number;
}

export type ResponseFailType = Record<'code' | 'message' | 'details', string>;

export type DatabaseDates = Record<'createdAt' | 'updatedAt' | 'deletedAt', string>;

export type Locale = 'tc' | 'en';

export type BilingualFormat = Record<Locale, string>;

export type ContactsFormat = Partial<Record<'email' | 'phone' | 'whatsapp', string[]>>;
