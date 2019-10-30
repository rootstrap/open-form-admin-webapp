import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import DropdownArrow from 'components/common/DropdownArrow';

const StyledSelect = styled.select`
  flex: 1;
  border-width: 0;
  margin: 0.1em 0;
  padding: 0.5em 0.7em;
  appearance: none;
  height: 40px;
  font-size: 0.9em;
  ${({ theme }) => css`
    background-color: ${theme.background.input};
    border-radius: ${theme.border.radius};
  `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledDropdownArrow = styled(DropdownArrow)`
  position: absolute;
  right: 0.7em;
`;

const Select = ({ children, ...props }) => (
  <Wrapper>
    <StyledSelect {...props}>{children}</StyledSelect>
    <StyledDropdownArrow />
  </Wrapper>
);

Select.propTypes = {
  children: PropTypes.node.isRequired
};

export default Select;
