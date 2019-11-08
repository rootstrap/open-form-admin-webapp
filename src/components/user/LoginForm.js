import React, { memo } from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';

import { Loading, Input } from 'components/common';
import { validations, login } from 'utils/constraints';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' }
});

export const LoginForm = ({ handleSubmit, error, submitting }) => {
  const intl = useIntl();
  return (
    <form onSubmit={handleSubmit}>
      {error && <strong>{error}</strong>}
      <div>
        <Field
          name="email"
          label={intl.formatMessage(messages.email)}
          component={Input}
          type="email"
        />
      </div>
      <div>
        <Field
          name="password"
          label={intl.formatMessage(messages.password)}
          component={Input}
          type="password"
        />
      </div>
      <button type="submit">
        <FormattedMessage id="login.form.submit" />
      </button>
      {submitting && <Loading />}
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: validations(login, { fullMessages: false })
})(memo(LoginForm));
