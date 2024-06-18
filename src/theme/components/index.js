'use client';

import theme from 'theme';
import { ThemeUIProvider } from 'theme-ui';
export { Themed } from '@theme-ui/mdx';
import React from 'react';

export {
  Section,
  Heading,
  Paragraph,
  Box,
  Button,
  Link,
  GridItem,
  Overlay, // ! Don't use the overlay from the library because it has bugs, use the Overlay from the src/components instead
  Input,
  Label,
  Image,
  ResponsiveImage,
  GridWrapper,
  fullWidthMinusMargins
} from '@thepuzzlers/pieces';

export const NextThemeUiProvider = ({ children }) => {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>;
};
