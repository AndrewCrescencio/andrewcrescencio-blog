import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  display: 'block',
  color: '$white',
  textDecoration: 'none',
  marginBottom: '$2',
  fontSize: '1.8rem',
  position: 'relative',
  '&:after': {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '0',
    height: '0',
    content: '',
    display: 'block',
    opacity: 0,
  },
  '&:hover': {
    '&:after': {
      opacity: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      width: '2px',
      height: '100%',
      content: '',
      display: 'block',
      backgroundColor: '$secondary',
      transition: 'opacity 500ms ease-in-out',
    },
  },
});
