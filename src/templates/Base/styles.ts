import { styled } from '../../../stitches.config';

export const Wrapper = styled('div', {});
Wrapper.displayName = 'BaseTemplate-Wrapper';

export const HeaderContainer = styled('div', {
  marginBottom: '$16',
});

export const SearchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
});

export const SearchInput = styled('input', {
  all: 'unset',
  width: 200,
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  border: 'none',
  color: '$white',
  backgroundColor: '$black',
  boxShadow: '0 0 0 1px $secondary',
  '&:focus': { boxShadow: `$2` },
});

export const ContentContainer = styled('div', {});

export const FootetContainer = styled('div', {
  marginTop: '$8',
});
