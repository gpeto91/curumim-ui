import { createStitches } from '@stitches/core';

export const { css } = createStitches({
  media: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 481px)',
    md: '(min-width: 1025px)',
    lg: '(min-width: 1201px)'
  },
  theme: {
    colors: {
      green: '#418c47',
      greenDarker: '#377C3D',
      greenDark: '#2E6C33',
      yellow: '#FCDB03',
      yellowDarker: '#DFC400',
      yellowDark: '#BFAB00',
      blue: '#4287f5',
      red: '#f73b3b',
      primary: '$green',
      accent: '$yellow'
    },
    space: {
      1: '0px',
      2: '2px',
      3: '4px',
      4: '8px',
      5: '16px',
      6: '32px',
      7: '64px',
      8: '128px'
    },
    fontSizes: {
      small: '12px',
      base: '16px',
      subheading: '24px',
      heading: '36px'
    },
    fonts: {
      roboto: 'Roboto, sans-serif'
    },
    fontWeights: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900
    },
    sizes: {
      1: '0px',
      2: '2px',
      3: '4px',
      4: '8px',
      5: '16px',
      6: '32px',
      7: '64px',
      8: '128px'
    },
    borderStyles: {},
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px'
    },
    shadows: {},
    zIndices: {},
    transitions: {}
  }
});
