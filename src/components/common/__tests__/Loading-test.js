import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Loading from '../Loading';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Loading />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
