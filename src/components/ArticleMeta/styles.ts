import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  fontSize: '$4',
  color: '$darkerGray',
  fontStyle: 'italic',

  '& .categories span::after': {
    content: ', ',
  },

  '& .categories span:last-child::after': {
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
