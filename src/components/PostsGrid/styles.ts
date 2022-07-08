import { styled } from '../../../stitches.config';

export const Container = styled('div', {});

export const Grid = styled('div', {
  maxWidth: '1280px',
  width: 'auto',
  margin: '0 auto',
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 320px))',
  gap: '$8',
  padding: '$8',
});

export const NotFound = styled('p', {
  padding: '$8',
  textAlign: 'center',
  fontSize: '$4',
});
