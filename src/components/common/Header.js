import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Version } from 'components/common';

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  justify-content: space-between;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5em 3em;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};

  > div {
    flex: 1;
  }
`;

const Header = ({ children }) => (
  <StyledHeader>
    <div>
      <Content>{children}</Content>
      <Version>ID:1 - Version 1</Version>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
