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

export const SearchInput = styled('input', {});

export const ContentContainer = styled('div', {});

export const FootetContainer = styled('div', {
  marginTop: '$8',
});
