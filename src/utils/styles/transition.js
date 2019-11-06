import { css } from 'styled-components';

export const transitionHeight = (height, timeout) => css`
  max-height: ${height};

  &.enter {
    max-height: 0;
  }

  &.enter-active {
    max-height: ${height};
    transition: max-height ${timeout};
  }

  &.exit-active {
    max-height: 0;
    transition: max-height ${timeout};
  }
`;
