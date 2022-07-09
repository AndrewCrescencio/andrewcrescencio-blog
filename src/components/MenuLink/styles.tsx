import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  display: 'inline-block',
  width: 'max-content',
  color: '$white',
  textDecoration: 'none',
  marginBottom: '$4',
  fontSize: '1.8rem',
  position: 'relative',
  '&:after': {
    position: 'absolute',
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
      right: 0,
      top: '100%',
      width: '100%',
      height: '2px',
      content: '',
      display: 'block',
      backgroundColor: '$secondary',
      transition: 'opacity 500ms ease-in-out',
    },
  },
});
