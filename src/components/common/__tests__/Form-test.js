import React from 'react';
import TestRenderer from 'react-test-renderer';
import styled from 'styled-components';

import { formStyles } from '../Form';

/**
 * doing this because we don't wanna test formik internals
 * testing this way, it will let us know if something went wrong with styles
 */
const StyledForm = styled.form`
  ${formStyles}
`;

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<StyledForm>Form</StyledForm>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
