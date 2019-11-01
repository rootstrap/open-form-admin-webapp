import React from 'react';
import { bool, string, node } from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import routes from 'constants/routesPaths';
import { useSession } from 'hooks';
import Nav from 'components/common/Nav';
import NavLink from 'components/common/NavLink';

const PrivateRoute = ({ children, exact = false, path }) => {
  const location = useLocation();
  const { authenticated } = useSession();

  return authenticated ? (
    <Route exact={exact} path={path}>
      <Nav>
        <li>
          <NavLink to={routes.index} exact>
            <FormattedMessage id="nav.home" />
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.forms}>
            <FormattedMessage id="nav.forms" />
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.createForm}>
            <FormattedMessage id="nav.create-form" />
          </NavLink>
        </li>
      </Nav>

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
