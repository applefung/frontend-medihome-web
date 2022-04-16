import { Box, Button, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import LayoutWrapper from '@src/components/LayoutWrapper';
import { login } from '@src/services/auth';
import { loginTranslations } from '@src/translations';
import { LoginParam } from '@src/types/auth';
import { Locale } from '@src/types/translations';
import { useApiRequest } from '@src/utils/api';
import { FORGOT_PASSWORD, SIGN_UP } from '@src/utils/constants/routes';
import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useRef } from 'react';
import styles from './styles.module.scss';

const Login = () => {
  const { locale } = useRouter();
  const loginTranslation = loginTranslations[locale as Locale];
  const { submit } = useApiRequest(login);
  const userInfo = useRef<LoginParam>({ email: '', password: '' });

  const handleLogin = useCallback(async () => {
    const { email, password } = userInfo.current;
    const resp = await submit({ email, password });
    console.log('resp', resp);
  }, []);

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.loginContainer}>
          <Paper elevation={3} className={styles.loginPaper}>
            <div role="img" className={styles.posterContainer}>
              <Image
                loader={imageLoader}
                src="https://cdn5.vectorstock.com/i/1000x1000/28/09/doctor-medical-poster-health-care-vector-18852809.jpg"
                // objectFit="contain"
                // layout="fill"
                height="400px"
                width="250px"
                alt="Banner"
              />
            </div>
            <Box component="form" autoComplete="off" className={styles.loginBoxContainer}>
              <Typography variant="h5" component="div" className={styles.loginTitle}>
                {loginTranslation['loginTitle']}
              </Typography>
              <TextField
                required
                label={loginTranslation['email']}
                onChange={(event: ChangeEvent<HTMLInputElement>) => (userInfo.current.email = event.target.value)}
              />
              <TextField
                required
                label={loginTranslation['password']}
                type="password"
                onChange={(event: ChangeEvent<HTMLInputElement>) => (userInfo.current.password = event.target.value)}
              />
              <Button variant="outlined" onClick={handleLogin}>
                {loginTranslation['login']}
              </Button>
              <div className={styles.bottomContainer}>
                <Link href={SIGN_UP}>
                  <a className={styles.link}>{loginTranslation['signUp']}</a>
                </Link>
                <Link href={FORGOT_PASSWORD}>
                  <a className={styles.link}>{loginTranslation['forgotPassword']}</a>
                </Link>
              </div>
            </Box>
          </Paper>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Login;
