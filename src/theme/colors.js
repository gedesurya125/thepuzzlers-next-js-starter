// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const neutral = {
  white: '#FFFFFF',
  black: '#000000',
  beige: '#F4F7F3',
  darkTealDarker: '#052326',
  darkTeal: '#062F34',
  yellow: '#F8CD66'
};

const base = {
  primary: neutral.beige,
  secondary: neutral.black,
  background: neutral.darkTeal,
  backgroundDarker: neutral.darkTealDarker,
  text: neutral.beige
};

export const colors = {
  // defaults
  ...base,
  neutral
};
