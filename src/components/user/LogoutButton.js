import React from 'react';
import { FormattedMessage } from 'react-intl';

import useDispatch from 'hooks/useDispatch';
import { logout } from 'actions/userActions';
import Button from 'components/common/Button';

const LogoutButton = () => {
  const logoutRequest = useDispatch(logout);

  return (
    <Button onClick={logoutRequest} type="button">
      <FormattedMessage id="logout.button" />
    </Button>
  );
};

export default LogoutButton;
