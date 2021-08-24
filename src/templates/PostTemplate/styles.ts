/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
  `}
`;
