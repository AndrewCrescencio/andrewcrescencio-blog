import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  width: '150px',
  height: '150px',

  '& img': {
    width: '150px',
    height: '150px',
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
