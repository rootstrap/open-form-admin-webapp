import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { linkStyles } from './Link';

export const navLinkStyles = css`
  ${linkStyles}

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

export default styled(NavLink)`
  ${navLinkStyles}
`;
