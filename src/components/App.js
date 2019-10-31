import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import RouteFromPath from 'components/routes/RouteFromPath';
import routes from '../routes';
import theme from '../constants/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800&display=swap');
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Router>
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
