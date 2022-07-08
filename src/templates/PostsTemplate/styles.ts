import { styled } from '../../../stitches.config';

export const Container = styled('div', {});

export const ButtonContainer = styled('div', {});

export const Button = styled('button', {
  margin: '$3 0',
  '@bp2': {
    margin: '$8 0',
  },
  cursor: 'pointer',
  padding: '$2 $4',
  background: '$customBlue500',
  border: 'transparent',
  borderRadius: '4px',
  color: '$white',
  fontFamily: '$system',
  fontSize: '$4',
  fontWeight: 600,
  transition: 'all .2s ease-in-out',
  boxShadow: '$1',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});
