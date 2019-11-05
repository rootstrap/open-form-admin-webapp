import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import mobile from 'utils/styles/mobile';
import routes from 'constants/routesPaths';
import Logo from 'components/common/Logo';
import DropdownArrow from 'components/common/DropdownArrow';
import List from 'components/common/List';
import Link from 'components/common/Link';

const StyledNav = styled.nav`
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

const NavList = styled(List)`
  flex-direction: row;
  align-items: center;

  & > li {
    display: inline-block;
    margin: 0 1rem;
  }

  ${mobile(css`
    display: none;
  `)}
`;

const OpenMenuIcon = styled(DropdownArrow)`
  display: none;
  height: 1.5rem;
  width: 1.5rem;
  padding-right: 1rem;

  ${mobile(css`
    display: block;
  `)}
`;

const LogoLink = styled(Link)`
  padding-left: 1rem;
`;

const Nav = ({ children }) => (
  <StyledNav>
    <LogoLink to={routes.index}>
      <Logo />
    </LogoLink>
    <NavList>{children}</NavList>
    <OpenMenuIcon />
  </StyledNav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired
};

export default Nav;
