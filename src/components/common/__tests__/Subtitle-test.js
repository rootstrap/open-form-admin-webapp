import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Subtitle from '../Subtitle';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Subtitle>info text</Subtitle>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
