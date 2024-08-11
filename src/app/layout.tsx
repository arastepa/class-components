import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import '../Styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
