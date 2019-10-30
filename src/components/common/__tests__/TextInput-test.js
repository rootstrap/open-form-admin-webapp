import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import TextInput from '../TextInput';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<TextInput />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
