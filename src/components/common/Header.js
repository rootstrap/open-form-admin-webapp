import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Content>{children}</Content>
    </StyledHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node
};
