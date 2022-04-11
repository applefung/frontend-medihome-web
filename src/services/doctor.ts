import { ResponseSuccessType } from '@src/types/common';
import { Doctor } from '@src/types/doctor';
import requestService from './request';

interface GetDoctorsResponse {
  data: Doctor[];
  count: number;
}

interface GetDoctorsParam {
  searchValue?: string;
}

const getDoctors = ({ searchValue }: GetDoctorsParam) => {
  const params = new URLSearchParams({
    ...(searchValue && { search: searchValue }),
  });
  const url = `/doctors${searchValue ? `?${params.toString()}` : ''}`;
  return requestService.get<GetDoctorsResponse, ResponseSuccessType<GetDoctorsResponse>>(url);
};

const getDoctorIds = () => requestService.get<Doctor, ResponseSuccessType<Record<'id', string>[]>>('/doctors/ids');

const getDoctor = ({ id }: Record<'id', string>) => requestService.get<Doctor, ResponseSuccessType<Doctor>>(`/doctors/${id}`);

export { getDoctors, getDoctorIds, getDoctor };
