import { createStitches } from '@stitches/react';
import { reset } from 'stitches-reset';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
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
      1: '8rem',
      2: '1.6rem',
      3: '2.4rem',
      4: '3.2rem',
      5: '4.0rem',
      6: '4.8rem',
      7: '5.6rem',
      8: '6.4rem',
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
