import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import history from 'utils/history';
import RouteFromPath from 'components/routes/RouteFromPath';
import routes from '../routes';
import theme from '../constants/theme';
import Header from './common/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <title>Open form webapp</title>
        </Helmet>
        <Header />
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map(route => (
              <RouteFromPath key={`route-${route.path}`} {...route} />
            ))}
          </Switch>
        </ConnectedRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
