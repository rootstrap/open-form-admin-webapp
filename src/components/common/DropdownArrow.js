import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  &.enter {
    transform: rotate(0deg);
  }

  &.enter-active {
    transform: rotate(180deg);
    transition: transform 250ms;
  }

  &.enter-done {
    transform: rotate(180deg);
  }

  &.exit {
    transform: rotate(180deg);
  }

  &.exit-active {
    transform: rotate(0deg);
    transition: transform 250ms;
  }
`;

const DropdownArrow = ({ active, ...props }) => (
  <CSSTransition in={active} timeout={250}>
    <Svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.48242 1L7.48242 7L13.4824 1"
        stroke="#4F4F4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </CSSTransition>
);

DropdownArrow.propTypes = {
  active: PropTypes.bool
};

DropdownArrow.defaultProps = {
  active: false
};

export default DropdownArrow;
