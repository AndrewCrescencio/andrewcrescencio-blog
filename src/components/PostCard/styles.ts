import { darkTheme, styled } from '../../../stitches.config';

export const Card = styled('div', {
  maxWidth: '320px',
  width: '100%',
  backgroundColor: '$white',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '$1',
  [`.${darkTheme} &`]: {
    backgroundColor: 'rgb(18, 18, 18)',
    color: 'rgb(255, 255, 255)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '4px',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
    overflow: 'hidden',
    maxWidth: '345px',
    '& img': {
      opacity: '0.87 !important',
    },
  },
});

export const CardImage = styled('div', {
  width: '320px',
  '& img': {
    width: '320px',
  },
});
// export const Cover = styled('img',)

export const CardBody = styled('div', {
  padding: '$2 $4 $4',
  color: '$darkGrey',
  [`.${darkTheme} &`]: {
    color: '$text',
  },
});

export const CardTitle = styled('h2', {
  fontSize: '$6',
  marginBottom: '$1',
  opacity: 0.87,
});

export const CardText = styled('div', {
  opacity: 0.6,
});
