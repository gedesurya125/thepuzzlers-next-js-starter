import localFont from 'next/font/local';

import './globals.css';

// External Components
import { NextThemeUiProvider, Paragraph } from 'theme/components';
// TODO SETUP NAVIGATION
import { draftMode } from 'next/headers';
import { Z_INDEX } from 'constants/zIndex';
import { Matomo } from 'components/MatomoProvider';
import { getBaseUrl } from 'helper/getBaseUrl';
import { locales } from 'config';
import { Suspense } from 'react';
import { Navigation } from 'components/navigation/Navigation';

const font_abc_arizona_mix_regular = localFont({
  src: '../../theme/fonts/raw/ABCArizonaMix-Regular.woff',
  display: 'swap',
  variable: '--abc_arizona_mix_regular',
  fallback: ['serif']
});
const font_abc_arizona_sans_regular = localFont({
  src: '../../theme/fonts/raw/ABCArizonaSans-Regular.woff',
  display: 'swap',
  variable: '--abc_arizona_sans_regular',
  fallback: ['sans-serif']
});

const baseUrl = getBaseUrl();
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s`
  }
};

export default async function RootLayout({ children, params: { locale } }) {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  return (
    <html lang={locale}>
      <head></head>

      <body
        className={`
          ${font_abc_arizona_mix_regular.variable}
          ${font_abc_arizona_sans_regular.variable}
        `}>
        <Suspense fallback={null}>
          <Matomo
            config={{
              url: process.env.NEXT_PUBLIC_MATOMO_URL_BASE,
              siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
              disableCookies: true
            }}
          />
        </Suspense>
        <NextThemeUiProvider>
          <Navigation locale={locale} />
          {children}
        </NextThemeUiProvider>
        {isDraftModeEnabled && <DraftLabel />}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const DraftLabel = () => {
  return (
    <Paragraph
      sx={{
        variant: 'text-primary.bold',
        fontSize: '2rem',
        color: 'blue',
        position: 'fixed',
        bottom: '4rem',
        right: '4rem',
        zIndex: Z_INDEX.draftLabel
      }}>
      Draft Mode Enabled
    </Paragraph>
  );
};
