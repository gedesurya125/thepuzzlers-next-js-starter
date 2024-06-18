export const text = {
  default: {
    //? fix the font looks different with figma https://forum.figma.com/t/font-in-browser-seem-bolder-than-in-the-figma/24656/4
    // for safari and chrome
    '-webkit-font-smoothing': 'antialiased',
    //for firefox
    '-moz-osx-font-smoothing': 'grayscale',
    //other
    fontSmooth: 'never',
    fontWeight: 'normal',
    fontStyle: 'normal',
    '& *': {
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    // this means if the word is too long on any breakpoint it will break
    overflowWrap: 'anywhere'
  },

  heading: {
    normal: {
      variant: 'text.default',
      fontFamily: 'primary.normal',
      fontFeatureSettings: `'ss02' on, 'ss03' on, 'ss01' on, 'salt' on`
    }
  },

  body: {
    normal: {
      variant: 'text.default',
      fontFamily: 'body.normal'
    }
  },

  'primary-135-normal': {
    variant: 'text.heading.normal',
    lineHeight: 1.35
  },

  'body-135-normal': {
    variant: 'text.body.normal',
    lineHeight: 1.35
  }
};
