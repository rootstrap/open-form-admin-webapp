import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation: ${spin} 2s linear infinite;
  align-self: center;

  ${({ theme }) => css`
    border: 0.5em solid ${theme.color.gray};
    border-top: 0.5em solid ${theme.color.primary};
  `}
`;
