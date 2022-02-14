import { CarouselType } from '@src/types/carousel';
import { ResponseSuccessType } from '@src/types/common';
import { Doctor } from '@src/types/doctor';
import requestService from './request';

interface GetDoctorsResponse {
  data: Doctor[];
  count: number;
}

const getDoctors = ({ searchValue }: Record<'searchValue', string>) => {
  return requestService.get<GetDoctorsResponse, ResponseSuccessType<GetDoctorsResponse>>(`/doctors?search=${searchValue}`);
};

export { getDoctors };
