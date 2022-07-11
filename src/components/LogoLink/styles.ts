import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  display: 'grid',
  maxWidth: '150px !important',
  placeContent: 'center',
  color: 'inherit',
  textDecoration: 'none',

  '& img': {
    borderRadius: '50%',
    border: '4px solid !important',
    borderColor: '$secondary !important',
  },
});

export const AltText = styled('span', {
  fontSize: '$3',
  color: '$secondary',
  fontWeight: 600,
});
