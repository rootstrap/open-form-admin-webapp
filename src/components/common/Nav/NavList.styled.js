import styled, { css } from 'styled-components';

import mobile from 'utils/styles/mobile';
import List from 'components/common/List';
import { transitionHeight } from 'utils/styles/transition';

export default styled(List)`
  flex-direction: row;
  align-items: center;

  & > li {
    display: inline-block;
    margin: 0 1rem;
  }

  ${mobile(css`
    position: absolute;
    top: 3.2rem;
    left: 0;
    width: 100%;
    margin: 0;
    overflow: hidden;
    height: 2.5rem;
    ${transitionHeight('2.5rem', '250ms')}

    ${({ theme }) => css`
      background-color: ${theme.background.primary};
      border: 1px solid ${theme.background.primary};
    `}
  `)}
`;
