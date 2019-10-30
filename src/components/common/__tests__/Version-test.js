import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Version from '../Version';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Version />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
