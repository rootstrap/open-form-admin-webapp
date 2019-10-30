import styled, { css } from 'styled-components';
import { Form } from 'formik';

export const formStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
`;

export default styled(Form)`
  ${formStyles}
`;
