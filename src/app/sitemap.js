import { ROUTE_NAMES } from 'constants/routeNames';
import { locales, pathnames } from '../config';
import { getBaseUrl } from 'helper/getBaseUrl';
import { assignParamsToPathname } from 'helper/assignParamsToPathName';

// ? source: https://www.youtube.com/watch?v=3P9hrS23jXI
export const revalidate = 86400; // revalidate every 24h

const getLocalizedSitemap = async (locale) => {
  const baseUrl = getBaseUrl();
  const routes = [
    { url: `/${locale}`, lastModified: new Date().toISOString() },
    {
      url: assignParamsToPathname(locale, pathnames[ROUTE_NAMES.aboutUs]).path,
      lastModified: new Date().toISOString()
    }
  ].map((route) => ({
    url: `${baseUrl}${route?.url}/`,
    lastModified: new Date(route.lastModified).toISOString()
  }));

  return routes;
};

const sitemap = async () => {
  const allRoutes = await Promise.all(
    locales.map(async (locale) => {
      return getLocalizedSitemap(locale);
    })
  ).then((result) => result?.flat());
  return allRoutes;
};

export default sitemap;
