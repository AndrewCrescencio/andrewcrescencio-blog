import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  margin: '$6 auto',
  maxWidth: '80rem',
  padding: '$8 0',

  '& span': {
    marginLeft: '0.5rem',
  },

  '& span::before': {
    content: ' ',
  },

  '& span::after': {
    content: ', ',
  },

  '& span:last-child::after': {
    content: '',
  },

  '& a': {
    color: '$secondary',
    textDecoration: 'none',
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      filter: 'brightness(50%)',
    },
  },
});
