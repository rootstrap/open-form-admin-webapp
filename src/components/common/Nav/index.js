import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import routes from 'constants/routesPaths';
import { Logo } from 'components/common';
import Menu from './Menu.styled';
import MobileContainer from './MobileContainer.styled';
import StyledNav, { LogoLink, DesktopContainer, StyledDropdownArrow, NavList } from './Nav.styled';

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
        <MobileContainer>
          <NavList>{children}</NavList>
        </MobileContainer>
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
