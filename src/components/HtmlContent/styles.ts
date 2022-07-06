import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  fontSize: '$1',
  lineHeight: '1.5',
  '& p': {
    marginBottom: '$2',
  },
  '& a, a:visited, a.link': {
    color: '$secondary',
    textDecoration: 'none',
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      filter: 'brightness(50%)',
    },
  },
  '& img': {
    maxWidth: '100%',
  },
  '& .image': {
    maxWidth: '100%',
    background: '$mediumGray',
    lineHeight: '0',
    marginBottom: '$2',
  },
  '& .image figcaption': {
    fontSize: '$1',
    padding: '$1',
    textAlign: 'center',
    lineHeight: '1.3',
  },
  '& .image-style-side': {
    maxWidth: '50%',
    float: 'right',
    margin: '$1 0',
  },
  '& hr': {
    border: 'none',
    borderBottom: '0.1rem solid $mediumGray',
  },
  '& ul, ol': {
    margin: '$1 $2',
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '$2 0',
  },
  '& table td, table th': {
    padding: '$1',
    border: '0.1rem solid $mediumGray',
  },
  '& blockquote': {
    borderLeft: '0.5rem solid $secondary',
    color: '$darkerGray',
    filter: 'brightness(80%)',
    paddingLeft: '$3',
    fontStyle: 'italic',
    margin: '$2',
  },
});
