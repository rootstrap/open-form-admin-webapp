import React from 'react';
import renderer from 'react-test-renderer';

import DropdownArrow from '../DropdownArrow';

it('renders correctly', () => {
  const tree = renderer.create(<DropdownArrow />).toJSON();
  expect(tree).toMatchSnapshot();
});
