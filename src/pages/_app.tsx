import { AppProps } from 'next/app';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import StoreProvider from '../Store/storeProvider';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import '../Styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <Head>
            <meta charSet="UTF-8" />
            <meta content="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>star wars api</title>
          </Head>
          <Component {...pageProps} />;
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default MyApp;
