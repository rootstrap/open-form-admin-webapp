import React from 'react';
import { bool, string, node } from 'prop-types';
import { Route, Redirect, useLocation, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import routes from 'constants/routesPaths';
import { useSession } from 'hooks';

const PrivateRoute = ({ children, exact = false, path, hideMenu }) => {
  const location = useLocation();
  const { authenticated } = useSession();

  return authenticated ? (
    <Route exact={exact} path={path}>
      {!hideMenu && (
        <nav>
          <ul>
            <li>
              <Link to="/create-form">
                <FormattedMessage id="nav.create-form" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
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
  exact: bool,
  hideMenu: bool
};

export default PrivateRoute;
