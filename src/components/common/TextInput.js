import styled, { css } from 'styled-components';

export default styled.input`
  border-width: 0;
  margin: 0.1em 0;
  padding: 0.5em 0.7em;
  height: 40px;
  box-sizing: border-box;
  ${({ theme }) => css`
    background-color: ${theme.background.input};
    border-radius: ${theme.border.radius};
  `}
`;
