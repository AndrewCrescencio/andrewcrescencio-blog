import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    width: 4rem;
    height: 4rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
  `}
`;
