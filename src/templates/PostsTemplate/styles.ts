import { styled } from '../../../stitches.config';

export const ButtonContainer = styled('div', {
  textAlign: 'center',
});

export const Button = styled('button', {
  margin: '$3 auto',
  '@bp2': {
    margin: '$8 auto',
  },
  padding: '$2 $4',
  color: '$white',
  fontSize: '$4',
  fontWeight: 600,
  background: '$secondary',
  border: 'transparent',
  borderRadius: '4px',
  boxShadow: '$1',
  transition: 'all .2s ease-in-out',
  cursor: 'pointer',
});
