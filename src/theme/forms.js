import { colors } from './colors';

export const forms = {
  radio: {
    p: 0
  },
  input: {
    color: 'text',
    bg: 'background',
    variant: 'text.body.normal',
    lineHeight: 1.5,
    fontSize: ['1.4rem', null, '1.5rem', null, '1.6rem', '1.6rem'],
    p: [
      '1rem 1.4rem 1rem 1.4rem',
      null,
      '1rem 1.6rem 1rem 1.6rem',
      null,
      '1rem 1.6rem 1rem 1.6rem',
      '1rem 1.6rem 1rem 1.6rem'
    ],
    borderBottom: `1px solid ${colors.beige}`,
    '::placeholder': {},
    '&:checked ~ &': {},
    '&:focus': {
      outline: 'none',
      borderBottom: `1px solid ${colors.primary}`
    },
    // need to add this to fix safari 14 issue that by default adding border radius
    borderRadius: 0
  }
  // label: {
  //   fontSize: ['1.4rem', null, '1.5rem', null, '1.6rem', '1.6rem'],
  //   lineHeight: 1,
  //   variant: 'text.body.normal',
  //   opacity: 0.5,
  // },
};
