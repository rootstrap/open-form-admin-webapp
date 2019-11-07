import styled, { css } from 'styled-components';

import mobile from 'utils/styles/mobile';
import { transitionHeight } from 'utils/styles/transition';

export default styled.div`
  display: none;

  ${mobile(css`
    position: absolute;
    top: 3.2rem;
    left: 0;
    width: 100%;
    margin: 0;
    overflow: hidden;
    height: 2.5rem;
    display: flex;
    ${transitionHeight('2.5rem', '250ms')}

    ${({ theme }) => css`
      background-color: ${theme.background.primary};
      border: 1px solid ${theme.background.primary};
    `}
  `)}
`;
