import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import 'jest-styled-components';

import Form from '../Form';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Formik>
        <Form>
          <input type="text" />
        </Form>
      </Formik>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
