import { NextImage } from 'components/NextImage';
import React from 'react';
import { Box, Heading, Section } from 'theme/components';
import Icon from '../../../public/next.svg';

export const Navigation = () => {
  return (
    <Section
      as="nav"
      sx={{
        bg: 'neutral.beige',
        pt: ['1rem', '1rem', '1rem', '1rem'],
        pb: ['1rem', '1rem', '1rem', '1rem']
      }}>
      <Logo />
    </Section>
  );
};

const Logo = ({}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '10rem'
      }}>
      <NextImage
        src={Icon}
        sx={{
          with: '100%',
          height: 'auto'
        }}
      />
    </Box>
  );
};
