import { getBaseUrl } from 'helper/getBaseUrl';

export default function robots() {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
