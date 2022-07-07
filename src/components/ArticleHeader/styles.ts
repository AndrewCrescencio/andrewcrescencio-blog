import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  maxWidth: '640px',
  width: '100%',
  margin: '0 auto',
});
export const Cover = styled('div', {
  // maxWidth: '640px',
  width: '100%',
  marginBottom: '$2',
});

export const Heading = styled('h2', {
  fontSize: '$7',
  marginBottom: '$6',
  fontWeight: 600,
  '@bp2': {
    fontSize: '$10',
  },
});

export const Excerpt = styled('p', {
  marginBottom: '$6',
  '@bp2': {
    fontSize: '$5',
  },
});
