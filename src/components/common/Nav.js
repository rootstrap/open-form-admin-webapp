import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from 'components/common/Logo';
import DropdownArrow from 'components/common/DropdownArrow';
import List from 'components/common/List';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1.5em;
  background: ${({ theme }) => theme.background.input};

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
    <Logo />
    <NavList>{children}</NavList>
    <OpenMenuIcon />
  </StyledNav>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired
};

export default Nav;
