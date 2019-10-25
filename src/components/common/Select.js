import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  color: red;
`;

const Select = ({ children, ...props }) => <StyledSelect {...props}>{children}</StyledSelect>;

Select.propTypes = {
  children: PropTypes.node.isRequired
};

export default Select;
