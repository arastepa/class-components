import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { ThemeProvider } from './ThemeContext/ThemeContext';

import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
    // ...
  ];
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
