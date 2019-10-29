import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../Button';

const theme = {
  color: {
    primary: 'blue'
  },
  border: {
    radius: '1px'
  }
};

it('renders correctly', () => {
  const tree = renderer.create(<Button theme={theme}>Action</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('handles click', () => {
  const mockCallback = jest.fn();
  const tree = renderer.create(
    <Button onClick={mockCallback} theme={theme}>
      Mocked action
    </Button>
  );
  tree.root.findByType('button').props.onClick();
  expect(mockCallback.mock.calls.length).toBe(1);
});
