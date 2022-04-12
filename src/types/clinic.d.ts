import { BilingualFormat } from './common';
import { Doctor } from './doctor';

export interface District {
  id: string;
  name: BilingualFormat;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

interface LocationFormat {
  latitude: string;
  longitude: string;
}

interface AddressFormat {
  name: BilingualFormat;
  location: LocationFormat;
}

interface MtrType {
  station: string;
  exit: string;
}

type ContactsFormat = Partial<Record<'email' | 'phone' | 'whatsapp', string[]>>;

interface Timeslot {
  fromTime: string;
  toTime: string;
}

interface ReservationTime {
  date: Date;
  timeslots: Timeslot[];
}

type BusinessHours = Partial<Record<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun', Timeslot[]>>;

export interface Clinic {
  id: string;
  name: BilingualFormat;
  address: AddressFormat;
  mtr: MtrType;
  fee: string;
  contacts: ContactsFormat;
  businessHours: BusinessHours;
  reservationTime: ReservationTime[];
  doctors: Doctor[];
  district: District;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
