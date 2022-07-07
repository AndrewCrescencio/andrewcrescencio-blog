import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  gap: '$5',
  borderBottom: '1px solid $darkerGray',
});

export const Content = styled('div', {});

export const Heading = styled('h2', {
  fontSize: '$5',
  fontWeight: 600,
  marginBottom: '$4',
  '@bp2': {
    fontSize: '$8',
  },
});

export const Description = styled('p', {
  fontSize: '$4',
  '@bp2': {
    fontSize: '$5',
  },
});
