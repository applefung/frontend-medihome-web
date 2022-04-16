import { LoginParam, LoginType } from '@src/types/auth';
import { ResponseSuccessType } from '@src/types/common';
import requestService from './request';

const login = (data: LoginParam) => requestService.post<LoginType, ResponseSuccessType<LoginType>>('/auth/login', { ...data, role: 'patient' });

export { login };
