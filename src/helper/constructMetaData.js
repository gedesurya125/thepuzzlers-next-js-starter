import { defaultLocale } from '../config';

export const constructMetaData = ({
  title,
  description,
  shortTitle,
  shortDescription,
  creator,
  twitterCard,
  locale,
  localizedFullPaths
}) => {
  const currentPath =
    localizedFullPaths?.find(
      (localizedFullPath) => localizedFullPath.locale === locale
    )?.path + '/';

  const defaultPath =
    localizedFullPaths?.find(
      (localizedFullPath) => localizedFullPath.locale === defaultLocale
    )?.path + '/';

  const allpaths = localizedFullPaths?.reduce((acc, cur) => {
    return { ...acc, [cur.locale]: cur.path + '/' };
  }, {});

  return {
    title,
    description,
    alternates: {
      canonical: currentPath,
      languages: {
        'x-default': defaultPath,
        ...allpaths
      }
    },
    openGraph: {
      type: 'website',
      title: shortTitle || title,
      description: shortDescription || description,
      siteName: 'Intrexx',
      url: currentPath
    },
    twitter: {
      card: twitterCard || 'summary',
      title,
      description,
      creator: creator || process.env?.NEXT_PUBLIC_AUTHOR || undefined
      // url //? twitter use url from open graph https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
    }
  };
};
