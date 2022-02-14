import { CommentType } from './comment';
import { BilingualFormat, BilingualArrayFormat, ContactsFormat } from './common';

export interface Doctor {
  comments: CommentType[] | null;
  contacts: ContactsFormat;
  createdAt: string;
  deletedAt: string;
  gender: BilingualFormat | null;
  hospitalAffiliations: BilingualFormat | null;
  id: string;
  languages: string;
  name: BilingualFormat;
  qualifications: BilingualArrayFormat;
  services: null;
  updatedAt: string;
}
