import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import routes from 'constants/routesPaths';
import Logo from 'components/common/Logo';
import Menu from './Menu.styled';
import NavList from './NavList.styled';
import StyledNav, { LogoLink, DesktopContainer, StyledDropdownArrow } from './Nav.styled';

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
