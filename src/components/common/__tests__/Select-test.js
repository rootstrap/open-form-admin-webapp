import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Select from '../Select';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(
    <Select
      options={[{ label: 'option1', value: '1' }, { label: 'option2', value: '2' }]}
      value="1"
      onChange={() => {}}
    />
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('changes option', () => {
  const mockCallback = jest.fn();
  const testRenderer = renderWithTheme(
    <Select
      options={[{ label: 'option1', value: '1' }, { label: 'option2', value: '2' }]}
      value="1"
      onChange={mockCallback}
    />
  );
  const testInstance = testRenderer.root;
  testInstance.findByProps({ children: 'option2' }).props.onClick();
  expect(mockCallback.mock.calls[0][0].value).toBe('2');
});
