import { Specialty } from '@src/types/doctor';
import { ResponseSuccessType } from '@src/types/common';
import requestService from './request';

const getSpecialties = () => requestService.get<Specialty[], ResponseSuccessType<Specialty[]>>('/specialties');

export { getSpecialties };
