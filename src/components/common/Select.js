import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import useOutsideAlerter from 'hooks/useOutsideAlerter';
import DropdownArrow from 'components/common/DropdownArrow';
import SelectOption from 'components/common/SelectOption';

const StyledDropdownArrow = styled(DropdownArrow)`
  position: absolute;
  right: 0.7rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
`;

const StyledSelect = styled.div`
  flex: 1;
  border-width: 0;
  margin: 0.1em 0;
  padding: 0.5rem 0.7rem;
  height: 40px;
  font-size: 0.9em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.background.primary};
    border-radius: ${theme.border.radius};
  `}
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  max-height: 160px;
  overflow-y: scroll;
  ${({ theme, isOpen }) => css`
    background-color: ${theme.background.primary};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.background.primary};
    display: ${isOpen ? 'block' : 'none'};
  `}
`;

const Select = ({ options = [], onChange, value }) => {
  const selectedValue = options.find(option => option.value === value) || {};
  const [isOpen, setOpen] = useState(false);
  const optionsWrapperRef = useRef(null);
  useOutsideAlerter(optionsWrapperRef, useCallback(() => isOpen && setOpen(false), [isOpen]));

  return (
    <Wrapper onClick={useCallback(() => setOpen(!isOpen), [isOpen])}>
      <StyledSelect>
        {selectedValue.label}
        <OptionsWrapper isOpen={isOpen} ref={optionsWrapperRef}>
          {options.map(option => (
            <SelectOption key={option.value} onClick={() => onChange(option)}>
              {option.label}
            </SelectOption>
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
