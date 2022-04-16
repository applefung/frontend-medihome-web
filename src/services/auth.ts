import { LoginParam, AuthType } from '@src/types/auth';
import { ResponseSuccessType } from '@src/types/common';
import requestService from './request';

const login = (data: LoginParam) => requestService.post<AuthType, ResponseSuccessType<AuthType>>('/auth/login', { ...data, role: 'patient' });

export { login };
