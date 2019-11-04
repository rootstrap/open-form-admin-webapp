import React from 'react';
import styled from 'styled-components';

import { renderWithTheme } from 'utils/testHelpers';
import { navLinkStyles } from '../NavLink';

const NavLink = styled.a`
  ${navLinkStyles}
`;

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<NavLink to="/route1">route 1</NavLink>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
