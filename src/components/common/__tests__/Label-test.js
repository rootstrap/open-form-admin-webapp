import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Label from '../Label';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Label>input label</Label>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
