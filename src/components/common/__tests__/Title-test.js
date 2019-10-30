import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Title from '../Title';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Title />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
