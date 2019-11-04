import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Option = styled.button`
  display: block;
  appearance: none;
  height: 40px;
  width: 100%;
  text-align: initial;
  border-width: 0;
  padding: 0 0.7rem;
  outline: none;
  ${({ theme }) => css`
    background-color: ${theme.background.primary};
    border-radius: ${theme.border.radius};
    &:hover {
      color: white;
      background-color: ${theme.color.primary};
    }
  `}
`;

const SelectOption = ({ onClick, children }) => {
  return (
    <Option onClick={onClick} type="button">
      {children}
    </Option>
  );
};

SelectOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default SelectOption;
