import { AppProps } from 'next/app';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import '../Styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <Component {...pageProps} />;
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default MyApp;
