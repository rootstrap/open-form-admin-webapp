import styled, { css } from 'styled-components';
import mobile from 'utils/styles/mobile';

export default styled.button`
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  position: relative;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1rem;

  ${mobile(css`
    display: ${({ authenticated }) => (authenticated ? 'block' : 'none')};
  `)}
`;
