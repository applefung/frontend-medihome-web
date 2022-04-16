import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/stores/store';
import { AuthType } from '@src/types/auth';

const initialState: AuthType = {
  accessToken: '',
  accessTokenExpireAt: '',
  refreshToken: '',
  refreshTokenExpireAt: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveAuthInfo: (state, action: PayloadAction<AuthType>) => ({ ...state, ...action.payload }),
  },
});

export const { saveAuthInfo } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
