import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Nav from '../Nav';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Nav>navigation</Nav>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
