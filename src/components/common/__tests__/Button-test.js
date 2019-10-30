import React from 'react';

import { renderWithTheme } from 'utils/testHelpers';
import Button from '../Button';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Button>Action</Button>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('handles click', () => {
  const mockCallback = jest.fn();
  const testRenderer = renderWithTheme(<Button onClick={mockCallback}>Mocked action</Button>);
  const testInstance = testRenderer.root;
  testInstance.find(element => element.type === 'button').props.onClick();
  expect(mockCallback.mock.calls.length).toBe(1);
});
