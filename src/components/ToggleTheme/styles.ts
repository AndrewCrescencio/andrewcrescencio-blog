import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  position: 'fixed',
  top: '$2',
  right: '$2',
  '@bp1': {
    top: '$4',
    right: '$4',
  },
  '@bp2': {
    top: '$6',
    right: '$6',
  },
});
