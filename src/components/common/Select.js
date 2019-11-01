import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import useOutsideAlerter from 'hooks/useOutsideAlerter';
import DropdownArrow from 'components/common/DropdownArrow';

const StyledSelect = styled.div`
  flex: 1;
  border-width: 0;
  margin: 0.1em 0;
  padding: 0.5em 0.7em;
  height: 40px;
  font-size: 0.9em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.background.input};
    border-radius: ${theme.border.radius};
  `}
`;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  appearance: none;
  border: 0;
  padding: 0;
  outline: none;
  height: 40px;
`;

const StyledDropdownArrow = styled(DropdownArrow)`
  position: absolute;
  right: 0.7em;
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 100%;
  max-height: 160px;
  overflow-y: scroll;
  ${({ theme }) => css`
    background-color: ${theme.background.input};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.background.input};
  `}
`;

const Option = styled.button`
  display: block;
  appearance: none;
  height: 40px;
  width: 100%;
  text-align: initial;
  border-width: 0;
  padding: 0 0.7em;
  outline: none;
  ${({ theme }) => css`
    background-color: ${theme.background.input};
    border-radius: ${theme.border.radius};
    &:hover {
      color: white;
      background-color: ${theme.color.primary};
    }
  `}
`;

const Select = ({ options = [], onChange, value }) => {
  const selectedValue = options.find(option => option.value === value) || {};
  const [isOpen, setOpen] = useState(false);
  const optionsWrapperRef = useRef(null);
  useOutsideAlerter(optionsWrapperRef, () => isOpen && setOpen(false));
  return (
    <Wrapper type="button" onClick={() => setOpen(!isOpen)}>
      <StyledSelect>
        {selectedValue.label}
        <OptionsWrapper isOpen={isOpen} ref={optionsWrapperRef}>
          {options.map(option => (
            <Option key={option.value} onClick={() => onChange(option)} type="button">
              {option.label}
            </Option>
          ))}
        </OptionsWrapper>
      </StyledSelect>
      <StyledDropdownArrow />
    </Wrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired
};

export default Select;
