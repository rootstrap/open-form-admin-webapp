import React from 'react';
import styled from 'styled-components';

import { renderWithTheme } from 'utils/testHelpers';
import { linkStyles } from '../Link';

const Link = styled.a`
  ${linkStyles}
`;

it('renders correctly', () => {
  const testRenderer = renderWithTheme(<Link to="/route1">route 1</Link>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
