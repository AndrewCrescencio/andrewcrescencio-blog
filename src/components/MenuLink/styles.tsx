import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  display: 'block',
  color: '$text',
  textDecoration: 'none',
  marginBottom: '$2',
  fontSize: '1.8rem',
  borderRight: '0.5rem solid $text',
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    borderRight: '0.5rem solid #00ADB5',
    color: '#00ADB5',
  },
});
