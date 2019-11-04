import React from 'react';
import TestRenderer from 'react-test-renderer';

import Logo from '../Logo';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<Logo />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
