import { styled } from '../../../stitches.config';

export const Container = styled('a', {
  width: '36px',
  height: '36px',
  '@bp1': {
    width: '48px',
    height: '48px',
  },
  display: 'grid',
  placeContent: 'center',
  border: 'none',
  background: '$customBlue300',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',

  borderRadius: '8px',
  cursor: 'pointer',
  textDecoration: 'none',
  position: 'fixed',
  bottom: '25px',
  right: '$2',
  padding: 0,
});

export const ChevronUp = styled('span', {
  width: '0.45em',
  height: '0.45em',
  display: 'grid',
  placeContent: 'center',
  position: 'relative',
  '&:before': {
    position: 'relative',
    top: '2px',
    borderStyle: 'solid',
    borderWidth: '0.25em 0.25em 0 0',
    content: "''",
    display: 'inline-block',
    width: '0.5rem',
    height: '0.5rem',
    verticalAlign: 'top',
    transform: 'rotate(-45deg)',
    textAlign: 'center',
    borderColor: '$white',
  },
});
