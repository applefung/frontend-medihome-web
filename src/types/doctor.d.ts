import { Clinic } from './clinic';
import { CommentType } from './comment';
import { BilingualFormat, ContactsFormat } from './common';

interface Specialty {
  id: string;
  name: BilingualFormat;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

interface Name {
  firstName: BilingualFormat;
  lastName: BilingualFormat;
  fullName: BilingualFormat;
}

export interface Doctor {
  id: string;
  name: Name;
  comments: CommentType[] | null;
  contacts: ContactsFormat;
  gender: BilingualFormat | null;
  hospitalAffiliations: BilingualFormat[] | null;
  languages: string[];
  qualifications: BilingualFormat[] | null;
  services: BilingualFormat[] | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  specialty: Specialty;
  clinics: Clinic[];
  rating?: number;
}
