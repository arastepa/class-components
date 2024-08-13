import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import '../Styles/globals.css';
import { SelectedProvider } from '../SelectedContext/SelectedContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <ThemeProvider>
            <SelectedProvider>{children}</SelectedProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
