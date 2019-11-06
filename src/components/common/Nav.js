import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import mobile from 'utils/styles/mobile';
import routes from 'constants/routesPaths';
import Logo from 'components/common/Logo';
import DropdownArrow from 'components/common/DropdownArrow';
import List from 'components/common/List';
import Link from 'components/common/Link';
import { transitionHeight } from 'utils/styles/transition';

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
    position: absolute;
    top: 3.2rem;
    left: 0;
    width: 100%;
    margin: 0;
    overflow: hidden;
    height: 2.5rem;
    ${transitionHeight('2.5rem', '250ms')}

    ${({ theme }) => css`
      background-color: ${theme.background.primary};
      border: 1px solid ${theme.background.primary};
    `}
  `)}
`;

const LogoLink = styled(Link)`
  padding-left: 1rem;
`;

const Menu = styled.button`
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

const DesktopContainer = styled.div`
  display: ${({ authenticated }) => (authenticated ? 'block' : 'none')};

  ${mobile(css`
    display: none;
  `)}
`;

const StyledDropdownArrow = styled(DropdownArrow)`
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const Nav = ({ children, authenticated }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledNav>
      <LogoLink to={routes.index}>
        <Logo />
      </LogoLink>
      <DesktopContainer authenticated={authenticated}>
        <NavList>{children}</NavList>
      </DesktopContainer>
      <Menu onClick={() => setShowMenu(!showMenu)} authenticated={authenticated}>
        <StyledDropdownArrow active={showMenu} />
      </Menu>
      <CSSTransition in={showMenu} timeout={250} unmountOnExit>
        <NavList>{children}</NavList>
      </CSSTransition>
    </StyledNav>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  authenticated: PropTypes.bool
};

Nav.defaultProps = {
  authenticated: false
};

export default Nav;
