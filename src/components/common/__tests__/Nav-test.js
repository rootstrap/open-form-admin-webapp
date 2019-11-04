import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { renderWithTheme } from 'utils/testHelpers';
import Nav from '../Nav';

it('renders correctly', () => {
  const testRenderer = renderWithTheme(
    <Router>
      <Nav>navigation</Nav>
    </Router>
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});
