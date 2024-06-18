import React from 'react';
import { Box, Paragraph } from 'theme/components';
import { PageLink } from './PageLink';

export const LocaleSwitcher = ({
  sx,
  currentLocale,
  translationPaths,
  ...props
}) => {
  if (translationPaths?.length > 1)
    return (
      <Box
        className="locale-switcher"
        sx={{
          color: 'texts.primary',
          variant: 'text.body-125-bold',
          fontSize: ['1.4rem', '1.5rem', '1.5rem', '1.5rem'],
          ...sx
        }}
        {...props}>
        {translationPaths?.map((translationPath, index) => {
          return (
            <React.Fragment key={index}>
              {index !== 0 && (
                <Box
                  as="span"
                  sx={{
                    mx: ['1rem']
                  }}>
                  |
                </Box>
              )}
              <LocaleButton
                locale={translationPath.locale}
                currentLocale={currentLocale}
                href={translationPath?.path}>
                {translationPath.locale.toUpperCase()}
              </LocaleButton>
            </React.Fragment>
          );
        })}
      </Box>
    );
  return null;
};

const LocaleButton = ({ href, locale, currentLocale, children }) => {
  const isActive = currentLocale === locale;

  if (isActive)
    return (
      <Paragraph
        as="span"
        sx={{
          color: 'neutral.yellow',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          lineHeight: 'inherit',
          pointerEvents: 'none'
        }}>
        {children}
      </Paragraph>
    );
  return (
    <PageLink
      href={href}
      localePrefix="never"
      // hrefLang={locale}
      {...(!isActive ? { rel: 'alternate' } : {})}
      sx={{
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit'
      }}>
      {children}
    </PageLink>
  );
};
