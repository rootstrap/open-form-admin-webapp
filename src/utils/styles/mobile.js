import { css } from 'styled-components';

const mobile = styles => css`
  @media (max-width: 50em) {
    ${styles}
  }
`;

export default mobile;
