import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const linkStyles = css`
  font-weight: 600;
  text-decoration: none;
  padding: 0.1em 0.2em;
  color: ${({ theme }) => theme.color.primary};
`;

export default styled(Link)`
  ${linkStyles}
`;
