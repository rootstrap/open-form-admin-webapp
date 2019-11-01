import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { linkStyles } from './Link';

export default styled(NavLink)`
  ${linkStyles}

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }
`;
