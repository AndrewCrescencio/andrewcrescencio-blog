import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  textAlign: 'center',
  borderTop: '1px solid $mediumGray',
  padding: '$2 0',

  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '$1',
  },
});
