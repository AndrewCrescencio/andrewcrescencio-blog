import { styled } from '../../../stitches.config';

export const Card = styled('div', {
  maxWidth: '320px',
  width: '100%',
  backgroundColor: '$white',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '$1',
});

export const CardImage = styled('div', {
  maxWidth: '320px',
  height: '180px',
});
// export const Cover = styled('img',)

export const CardBody = styled('div', {
  padding: '$2 $4 $4',
});

export const CardTitle = styled('h2', {
  fontSize: '$6',
  marginBottom: '$1',
});

export const CardText = styled('div', {});
