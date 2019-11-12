import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { useSession } from 'hooks';
import RouteFromPath from 'components/routes/RouteFromPath';
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

const App = () => {
  const { authenticated } = useSession();
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Router>
          <Nav authenticated={authenticated}>
            <ListItem>
              <NavLink to={routesPaths.forms} exact>
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
