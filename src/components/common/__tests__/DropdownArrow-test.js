import React from 'react';
import TestRenderer from 'react-test-renderer';

import DropdownArrow from '../DropdownArrow';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<DropdownArrow />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
