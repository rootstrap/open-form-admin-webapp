import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Version from 'components/common/Version';

const Header = ({ children, className }) => (
  <header className={className}>
    <div>
      {children}
      <Version>ID:1 - Version 1</Version>
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(Header)`
  display: flex;
  align-items: center;
  padding: 1.5em 3em;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;
