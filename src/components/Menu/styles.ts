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
  display: 'grid',
  placeContent: 'center',
  gap: '$2',
  textAlign: 'center',
  transition: 'all 300ms ease-in-out',
  [`& ${LogoLink}`]: {
    marginBottom: '$4',
  },
});

export const OpenClose = styled('button', {
  position: 'fixed',
  top: '$6',
  left: '$2',
  '@bp1': {
    left: '$4',
  },
  '@bp2': {
    left: '$6',
  },
  display: 'grid',
  placeContent: 'center',
  color: '$white',
  background: '$customOrange400',
  zIndex: '2',
  width: '36px',
  height: '36px',
  transition: 'all 300ms ease-in-out',
  border: '2px solid $customOrange400',
  boxShadow: '$1',
  cursor: 'pointer',
  borderRadius: '8px',
  padding: 0,
  '&.open': {
    left: 'calc(320px - 36px - $4)',
    '@bp2': {
      left: 'calc(320px - 36px - $6)',
    },
  },
  '& span': {
    fontSize: '20px',
    fontWeight: 800,
  },
});
