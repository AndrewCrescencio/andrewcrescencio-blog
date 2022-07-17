import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from 'stitches.config';
import '../styles/prism-vsc-dark-plus.css';
ThemeProvider.displayName = 'THEME-PROVIDER';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
      themes={['dark', 'light']}
      value={{ light: 'light', dark: darkTheme.className }}
    >
      <Component {...pageProps} />
    </ThemeProvider>,
  );
}

export default MyApp;
