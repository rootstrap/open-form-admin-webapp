import styled, { css } from 'styled-components';

import mobile from 'utils/styles/mobile';
import { DropdownArrow, Link, List } from 'components/common';

export const LogoLink = styled(Link)`
  padding-left: 1rem;
`;

export const DesktopContainer = styled.div`
  display: block;

  ${mobile(css`
    display: none;
  `)}
`;

export const NavList = styled(List)`
  flex-direction: row;
  align-items: center;

  & > li {
    display: inline-block;
    margin: 0 1rem;
  }
`;

export const StyledDropdownArrow = styled(DropdownArrow)`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export default styled.nav`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background.primary};
  height: 3rem;

  ${mobile(css`
    justify-content: space-between;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  `)}
`;
