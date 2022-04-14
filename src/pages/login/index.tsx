import { Box, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import LayoutWrapper from '@src/components/LayoutWrapper';
import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import styles from './styles.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.loginContainer}>
          <Paper elevation={3} className={styles.loginPaper}>
            <div role="img">
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
              <TextField required label="Username" />
              <TextField required label="Password" type="password" />
            </Box>
          </Paper>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Login;
