import React from 'react';

// External Components
import { GridItem } from 'theme/components';

export const GridSpacer = ({ height, sx, display, ...props }) => {
  return (
    <GridItem
      className="__grid-spacer"
      sx={{
        height,
        display,
        ...sx
      }}
      {...props}
    />
  );
};
