const linkDefault = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'texts.secondary',
  variant: 'text.body-135-normal',
  p: 0
};

const buttonDefault = {
  cursor: 'pointer',
  textDecoration: 'none',
  variant: 'text.body-135-normal',
  fontSize: ['1.4rem', '1.5rem', '1.5rem', '1.6rem'],
  bg: 'primary',
  color: 'texts.secondary',
  p: '1.2rem 2.4rem 1.2rem 2.4rem',
  borderRadius: 'button',
  width: 'max-content',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textAlign: 'center',
  ':disabled, &[disabled]': {
    pointerEvents: 'none',
    bg: 'neutral.tundoraGray'
  }
};

const buttonSize = {
  medium: {
    px: '2.2rem',
    py: '1rem',
    fontSize: ['1.4rem', '1.5rem', '1.5rem', '1.6rem']
  }
};

const buttonStyle = {
  primary: {
    bg: 'neutral.white',
    color: 'texts.secondary'
  },
  secondary: {
    bg: 'surfaces.darker',
    color: 'texts.primary'
  },
  clear: {
    p: 0,
    bg: 'transparent',
    border: 'none'
  }
};

const buttons = {
  primary: {
    normal: {
      ...buttonDefault,
      ...buttonStyle.primary,
      ...buttonSize.medium
    }
  },
  secondary: {
    normal: {
      ...buttonDefault,
      ...buttonSize.medium,
      ...buttonStyle.secondary
    }
  },
  clear: {
    ...buttonDefault,
    ...buttonStyle.clear
  }
};

const links = {
  clear: {
    ...linkDefault,
    p: 0,
    bg: 'transparent'
  }
};

const cards = {
  sectionBackground: {
    extraSmall: {
      width: [
        'phoneSectionBackground',
        'tabletPortraitSectionBackgroundV2',
        '100%',
        '100%'
      ],
      gridColumn: ['1/13', '1/25', '1/25', '2/ span 22']
    },
    small: {
      width: [
        'phoneSectionBackground',
        'tabletPortraitSectionBackgroundV2',
        'tabletLandscapeSectionBackgroundV2',
        '100%'
      ],
      gridColumn: ['1/13', '1/25', '1/25', '1/25']
    },
    large: {
      width: [
        'phoneSectionBackground',
        'tabletPortraitSectionBackground',
        'tabletLandscapeSectionBackground',
        'desktopSectionBackground'
      ],
      gridColumn: ['1/13', '1/25', '1/25', '1/25']
    }
  }
};

export { links, buttons, cards };
