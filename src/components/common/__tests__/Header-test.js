import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Header from '../Header';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Header>important text</Header>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
