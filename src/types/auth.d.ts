export interface AuthType {
  accessToken: string;
  accessTokenExpireAt: string;
  refreshToken: string;
  refreshTokenExpireAt: string;
}

export type LoginParam = Record<'email' | 'password', string>;
