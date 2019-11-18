import styled, { css } from 'styled-components';

export default styled.button`
  box-shadow: 0px 3px 6px rgba(48, 83, 115, 0.09893);
  color: #fff;
  padding: 0.7rem 0.9rem;
  border-width: 0;
  font-size: 0.9em;
  margin: 0.5rem 1rem;

  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    border-radius: ${theme.border.radius};
  `};
`;
