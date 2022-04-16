import { Provider } from 'react-redux';
import { store } from '@src/stores/store';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
