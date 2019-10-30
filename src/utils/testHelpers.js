import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from 'constants/theme';

export function renderWithTheme(component) {
  return TestRenderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
