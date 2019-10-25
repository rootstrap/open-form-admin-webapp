import React from 'react';
import { bool, string, node } from 'prop-types';
import { Route, Redirect, useLocation, Link } from 'react-router-dom';

import routes from 'constants/routesPaths';
import { useSession } from 'hooks';

const PrivateRoute = ({ children, exact = false, path }) => {
  const location = useLocation();
  const { authenticated } = useSession();

  return authenticated ? (
    <Route exact={exact} path={path}>
      <nav>
        <ul>
          <li>
            <Link to="/create-form">Create Form</Link>
          </li>
        </ul>
      </nav>
      {children}
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: routes.login,
        state: { from: location }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: node.isRequired,
  path: string.isRequired,
  exact: bool
};

export default PrivateRoute;
