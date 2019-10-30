import React from 'react';
import TestRenderer from 'react-test-renderer';

import FormGroup from '../FormGroup';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<FormGroup>field</FormGroup>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
