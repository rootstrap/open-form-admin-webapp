import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './Logo';

const Header = ({ children, className }) => (
  <header className={className}>
    <Logo />
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(Header)`
  display: flex;
  align-items: center;
`;
