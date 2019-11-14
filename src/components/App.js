import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import mobile from 'utils/styles/mobile';
import routesPaths from 'constants/routesPaths';
import theme from 'constants/theme';
import Nav from 'components/common/Nav';
import { NavLink, ListItem } from 'components/common';
import routes from '../routes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800&display=swap');
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mobile(css`
    padding-top: 3rem;
  `)}
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Router>
          <Nav>
            <ListItem>
              <NavLink to={routesPaths.forms} exact>
                <FormattedMessage id="nav.forms" />
              </NavLink>
            </ListItem>
          </Nav>
          <Switch>
            {routes.map(({ component, ...route }) => (
              <Route key={`route-${route.path}`} {...route}>
                {component}
              </Route>
            ))}
          </Switch>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
}
