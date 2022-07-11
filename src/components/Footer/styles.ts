import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  textAlign: 'center',
  borderTop: '1px solid $mediumGray',
  padding: '$6 0',
  fontWeight: 600,
  '@bp2': {
    padding: '$8 0',
  },
  '& a': {
    color: '$secondary !important',
    textDecoration: 'none',
    fontSize: '$4',
    cursor: 'pointer',
  },
});
