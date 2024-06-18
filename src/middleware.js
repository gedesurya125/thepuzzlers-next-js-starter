// We are using the next-intl library to support our internationalisation
import createMiddleware from 'next-intl/middleware';
import {
  pathnames,
  locales,
  localePrefix,
  defaultLocale,
  alternateLinks
} from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
  localePrefix,
  pathnames,
  alternateLinks
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  // it also need to not internationalize the system file like opengraph and twiiter, because the path is still needed to access the file from external
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
    // ? my old matcher
    // '/((?!api|_next|.*/opengraph.*|.*/twitter.*|.*\\..*).*)'
  ]
};

// ? next intl upgrade: https://github.com/amannn/next-intl/tree/main/examples/example-app-router
