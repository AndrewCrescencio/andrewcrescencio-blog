import { styled } from '@stitches/react';

export const Container = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  width: 'auto',
  margin: '0 auto',

  '& img': {
    width: '15rem',
    height: '15rem',
    borderRadius: '50%',
    border: '1px solid cyan',
  },
});
