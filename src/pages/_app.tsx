import { AppProps } from 'next/app';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import '../Styles/globals.css';
import Head from 'next/head';
import { wrapper } from '../Store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
