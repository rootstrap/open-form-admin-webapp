import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import routes from 'constants/routesPaths';
import { Logo } from 'components/common';
import Menu from './Menu.styled';
import MobileContainer from './MobileContainer.styled';
import StyledNav, { LogoLink, DesktopContainer, StyledDropdownArrow, NavList } from './Nav.styled';

export default function Nav({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledNav>
      <LogoLink to={routes.index}>
        <Logo />
      </LogoLink>
      <DesktopContainer>
        <NavList>{children}</NavList>
      </DesktopContainer>
      <Menu onClick={() => setShowMenu(!showMenu)}>
        <StyledDropdownArrow active={showMenu} />
      </Menu>
      <CSSTransition in={showMenu} timeout={250} unmountOnExit>
        <MobileContainer>
          <NavList>{children}</NavList>
        </MobileContainer>
      </CSSTransition>
    </StyledNav>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
};
