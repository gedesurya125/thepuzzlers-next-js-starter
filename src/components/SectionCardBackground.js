import React from 'react';

// External Components
import { Box } from 'theme/components';

export const SectionCardBackground = ({ sx, children, ...props }) => {
  return (
    <Box
      className="__section-card-background"
      sx={{
        variant: 'cards.sectionBackground.large',
        position: 'absolute',
        borderRadius: [0, 'card', 'card', 'card'],
        zIndex: -1,
        justifySelf: 'center',

        //mostly overridden value
        display: ['block', 'block', 'block', 'block'],
        height: '100%',
        alignSelf: 'end',
        ...sx
      }}
      {...props}>
      {children}
    </Box>
  );
};
