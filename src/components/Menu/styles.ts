import { styled } from '../../../stitches.config';

import { LogoLink } from '@components/LogoLink';
LogoLink.toString = () => '.logo-link';

export const Wrapper = styled('div', {
  background: '$primary',
  padding: '$1',
  display: 'flex',
  position: 'fixed',
  zIndex: '1',
  width: '100%',
  maxWidth: '320px',
  height: '100vh',
  scrollbarWidth: 'thin',
  top: '0',
  left: '-400px',
  boxSizing: 'border-box',
  transition: 'all 300ms ease-in-out',
  overflowY: 'auto',
  '&.open': {
    left: '0',
  },
});

export const Nav = styled('nav', {
  margin: '0 auto',
  width: '100%',
  transition: 'all 300ms ease-in-out',
  [`& ${LogoLink}`]: {
    marginBottom: '$4',
  },
});

export const OpenClose = styled('button', {
  position: 'fixed',
  top: '$1',
  left: '$1',
  color: '$secondary',
  background: '$white',
  zIndex: '2',
  width: '3rem',
  height: '3rem',
  transition: 'all 300ms ease-in-out',
  border: '4px solid $secondary',
  cursor: 'pointer',
  borderRadius: '8px',
  '&.open': {
    left: 'calc(320px - $1 - 3rem)',
    background: '$primary',
  },
  '& span': {
    fontSize: '20px',
  },
});
