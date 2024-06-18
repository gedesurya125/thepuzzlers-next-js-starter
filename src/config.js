import { ROUTE_NAMES } from 'constants/routeNames';

export const defaultLocale = 'de';
export const locales = [defaultLocale, 'en'];

//? We can define the path aliases
//! CAUTION: if we change the path that should has light background, we should register th path to the "useLightBackgroundCheck" function
//! CAUTION: we should also update the path in the sitemap generator
//! Don't translate default path
export const pathnames = {
  '/': '/',
  [ROUTE_NAMES.aboutUs]: {
    de: '/ueber-uns',
    en: '/about'
  }
};

// Use the default: `always`
export const localePrefix = 'always';
export const alternateLinks = false;
