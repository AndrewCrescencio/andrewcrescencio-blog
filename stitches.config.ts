import { createStitches } from '@stitches/react';
import { reset } from 'stitches-reset';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    fontSizes: {
      1: '0.25rem',
      2: '.5rem',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
    },
    colors: {
      text: '#181818',
      white: '#fff',
      background: '#fff',
      primary: '#000000',
      darkText: '#393E46',
      secondary: '#00ADB5',
      mediumGray: '#DDDDDD',
      darkerGray: '#AAAAAA',
    },
    space: {
      1: '1rem',
      2: '1.6rem',
      3: '2.4rem',
      4: '3.2rem',
      5: '4.0rem',
      6: '4.8rem',
      7: '5.6rem',
      8: '6.4rem',
    },
    media: {
      bp1: '(min-width: 414px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1440px)',
    },
  },
});

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    text: '#fff',
    white: '#181818',
    background: '#181818',
  },
});

const GlobalStyles = globalCss({
  ...reset,
  html: {
    boxSizing: 'border-box',
    '& *': {
      boxSizing: 'border-box !important',
    },
  },
  body: {
    background: '$background',
    color: '$text',
    fontFamily: '$system',
    padding: 0,
  },
});

//we can declare the styles here or in pages/_app.tsx
GlobalStyles();
