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

      customBlue50: '#dff3ff',
      customBlue100: '#b6dafc',
      customBlue200: '#8ac0f4',
      customBlue300: '#5da6ed',
      customBlue400: '#328de7',
      customBlue500: '#1873cd',
      customBlue600: '#0e5aa1',
      customBlue700: '#054074',
      customBlue800: '#002648',
      customBlue900: '#000e1e',

      customPurple50: '#fee7ff',
      customPurple100: '#edbff4',
      customPurple200: '#dd96ea',
      customPurple300: '#cf6ce0',
      customPurple400: '#c043d5',
      customPurple500: '#a72abc',
      customPurple600: '#821f93',
      customPurple700: '#5e1569',
      customPurple800: '#3a0b41',
      customPurple900: '#17021a',

      customRed50: '#ffe6ea',
      customRed100: '#f7bec4',
      customRed200: '#eb959b',
      customRed300: '#e16b6f',
      customRed400: '#d74242',
      customRed500: '#bd2832',
      customRed600: '#941e2e',
      customRed700: '#6a1426',
      customRed800: '#420919',
      customRed900: '#1d000a',

      customOrange50: '#ffe6dc',
      customOrange100: '#ffc1af',
      customOrange200: '#ff9e7e',
      customOrange300: '#ff7f4c',
      customOrange400: '#ff621a',
      customOrange500: '#e65100',
      customOrange600: '#b43200',
      customOrange700: '#811b00',
      customOrange800: '#4f0900',
      customOrange900: '#210003',

      customGreen50: '#e6faec',
      customGreen100: '#c4ebcd',
      customGreen200: '#a1ddac',
      customGreen300: '#7dcf89',
      customGreen400: '#58c165',
      customGreen500: '#40a847',
      customGreen600: '#308234',
      customGreen700: '#215d28',
      customGreen800: '#123819',
      customGreen900: '#001504',
    },
    space: {
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
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      18: '4.5rem',
      19: '4.75rem',
      20: '5rem',
      21: '5.25rem',
      22: '5.5rem',
      23: '5.75rem',
      24: '6rem',
      25: '6.25rem',
      26: '6.5rem',
      27: '6.75rem',
      28: '7rem',
      29: '7.25rem',
      30: '7.5rem',
      31: '7.75rem',
      32: '8rem',
      33: '8.25rem',
      34: '8.5rem',
      35: '8.75rem',
      36: '9rem',
      37: '9.25rem',
      38: '9.5rem',
      39: '9.75rem',
      40: '10rem',
      41: '10.25rem',
      42: '10.5rem',
      43: '10.75rem',
      44: '11rem',
      45: '11.25rem',
      46: '11.5rem',
      47: '11.75rem',
      48: '12rem',
      49: '12.25rem',
      50: '12.5rem',
    },
    shadows: {
      1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
  },
  media: {
    bp1: '(min-width: 414px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1440px)',
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
