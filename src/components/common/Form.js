import styled, { css } from 'styled-components';
import { Form } from 'formik';

export const formStyles = css`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`;

export default styled(Form)`
  ${formStyles}
`;
