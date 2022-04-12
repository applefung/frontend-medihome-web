import { District } from '@src/types/clinic';
import { ResponseSuccessType } from '@src/types/common';
import requestService from './request';

const getDistricts = () => requestService.get<District[], ResponseSuccessType<District[]>>('/districts');

export { getDistricts };
