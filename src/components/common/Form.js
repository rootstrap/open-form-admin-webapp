import styled, { css } from 'styled-components';
import { Form } from 'formik';

export const formStyles = css`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  width: 50%;
  align-self: center;
  max-width: 730px;
`;

export default styled(Form)`
  ${formStyles}
`;
