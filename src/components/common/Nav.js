import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import routes from 'constants/routesPaths';
import Logo from 'components/common/Logo';
import DropdownArrow from 'components/common/DropdownArrow';
import List from 'components/common/List';
import Link from 'components/common/Link';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.background.primary};

  @media (max-width: 50em) {
    justify-content: space-between;
  }
`;

const NavList = styled(List)`
  flex-direction: row;
  align-items: center;

  & > li {
    display: inline-block;
    margin: 0 1rem;
  }

  @media (max-width: 50em) {
    display: none;
  }
`;

const OpenMenuIcon = styled(DropdownArrow)`
  display: none;
  height: 1.5rem;
  width: 1.5rem;

  @media (max-width: 50em) {
    display: block;
  }
`;

const Nav = ({ children }) => (
  <StyledNav>
    <Link to={routes.index}>
      <Logo />
    </Link>
    <NavList>{children}</NavList>
    <OpenMenuIcon />
  </StyledNav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired
};

export default Nav;
