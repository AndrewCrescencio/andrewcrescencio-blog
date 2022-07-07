import { styled } from '../../../stitches.config';

export const Card = styled('div', {
  maxWidth: '320px',
  width: '100%',
  backgroundColor: '$white',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
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
