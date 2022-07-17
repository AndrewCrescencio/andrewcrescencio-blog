import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  display: 'grid',
  '&.hide': {
    display: 'none !important',
  },
  maxWidth: '150px !important',
  placeContent: 'center',
  color: 'inherit',
  textDecoration: 'none',

  '& img': {
    borderRadius: '50%',
    border: '4px solid !important',
    borderColor: '$primary !important',
  },
});

export const AltText = styled('span', {
  fontSize: '$3',
  color: '$secondary',
  fontWeight: 600,
});
