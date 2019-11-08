import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import useOutsideAlerter from 'hooks/useOutsideAlerter';
import { DropdownArrow, SelectOption } from 'components/common';
import { transitionHeight } from 'utils/styles/transition';

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
  overflow-y: scroll;
  ${transitionHeight('160px', '250ms')}

  ${({ theme }) => css`
    background-color: ${theme.background.primary};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.background.primary};
  `}
`;

const Select = ({ options = [], onChange, value }) => {
  const selectedValue = options.find(option => option.value === value) || {};
  const [isOpen, setOpen] = useState(false);
  const optionsWrapperRef = useRef(null);
  useOutsideAlerter(optionsWrapperRef, () => isOpen && setOpen(false));

  return (
    <Wrapper onClick={() => setOpen(!isOpen)} data-testid="toggle">
      <StyledSelect>
        {selectedValue.label}
        <CSSTransition in={isOpen} timeout={250} unmountOnExit>
          <OptionsWrapper ref={optionsWrapperRef}>
            {options.map(option => (
              <SelectOption key={option.value} onClick={() => onChange(option)}>
                {option.label}
              </SelectOption>
            ))}
          </OptionsWrapper>
        </CSSTransition>
      </StyledSelect>
      <StyledDropdownArrow active={isOpen} />
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
