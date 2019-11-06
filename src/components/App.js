import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import RouteFromPath from 'components/routes/RouteFromPath';
import mobile from 'utils/styles/mobile';
import routesPaths from 'constants/routesPaths';
import theme from 'constants/theme';
import Nav from 'components/common/Nav';
import NavLink from 'components/common/NavLink';
import ListItem from 'components/common/ListItem';
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Router>
          <Nav>
            <ListItem>
              <NavLink to={routesPaths.forms}>
                <FormattedMessage id="nav.forms" />
              </NavLink>
            </ListItem>
          </Nav>
          <Switch>
            {routes.map(route => (
              <RouteFromPath key={`route-${route.path}`} {...route} />
            ))}
          </Switch>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
