import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (
      await (locale === defaultLocale
        ? // When using Turbopack, this will enable HMR for `en`
          import(`./translations/${defaultLocale}.json`)
        : import(`./translations/${locale}.json`))
    ).default
  };
});
