import { createStitches } from '@stitches/react';
import { reset } from 'stitches-reset';

export const { styled, getCssText, createTheme, globalCss, theme } =
  createStitches({
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
      colors: {
        white: '#fff',
        black: '#000',
        text: '#181818',
        mediumGray: '#DDDDDD',
        darkGrey: '#121212',

        primary: '$purple500',
        primaryVariant: '$purple700',

        secondary: '$aqua200',
        secondaryVariant: '$aqua900',

        background: '$white',
        surface: '$white',
        error: '#B00020',

        onPrimary: '$white',
        onSecondary: '$black',
        onBackground: '$black',
        onSurface: '$black',
        onError: '$white',

        purple50: '#F2E7FE',
        purple100: '#DBB2FF',
        purple200: '#BB86FC',
        purple300: '#985EFF',
        purple400: '#7F39FB',
        purple500: '#6200EE',
        purple600: '#5600E8',
        purple700: '#3700B3',
        purple800: '#30009C',
        purple900: '#23036A',

        aqua50: '#C8FFF4',
        aqua100: '#70EFDE',
        aqua200: '#03DAC5',
        aqua300: '#00C4B4',
        aqua400: '#00B3A6',
        aqua500: '#01A299',
        aqua600: '#019592',
        aqua700: '#018786',
        aqua800: '#017374',
        aqua900: '#005457',
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
        2: '0 0 0 2px #03DAC5 !important',
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
export const darkTheme = createTheme('dark-theme', {
  colors: {
    text: '#fff',

    primary: '$purple200',
    primaryVariant: '$purple700',

    secondary: '$aqua200',
    secondaryVariant: '$aqua200',

    background: '#121212',
    background01dp: '#1d1d1d',
    background02dp: '#212121',
    background03dp: '#242424',
    background04dp: '#262626',
    background06dp: '#2c2c2c',
    background08dp: '#2d2d2d',
    background12dp: '#323232',
    background16dp: '#353535',
    background24dp: '#373737',

    surface: '$darkGray',
    error: '#CF6679',

    onPrimary: '$black',
    onSecondary: '$black',
    onBackground: '$white',
    onSurface: '$white',
    onError: '$black',
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
