import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Select from '../Select';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(
    <Select>
      <option value="test">test</option>
    </Select>
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
