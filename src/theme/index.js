import { theme as piecesTheme } from '@thepuzzlers/pieces';
// client imports
import { fontFamilies } from './fonts/fontFamilies';
import { colors } from './colors';
import { buttons, links, cards } from './elements';
import { shadows, radii, borders } from './styles';
import { forms } from './forms';
import { text } from './text';
import { space, sizes } from './distances';

const theme = {
  // pieces styles
  breakpoints: piecesTheme.breakpoints,
  measure: piecesTheme.measure,
  grids: piecesTheme.grids,
  // local styles
  fonts: fontFamilies,
  colors,
  buttons,
  links,
  cards,
  shadows,
  radii,
  text,
  forms,
  styles: {
    root: {
      fontFamily: 'body.normal',
      color: 'text',
      bg: 'background',
      hr: {
        borderWidth: 0
      },
      a: {
        color: 'texts.secondary'
      }
    }
  },
  space,
  sizes,
  borders
};

export default theme;
