import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import Select from 'components/common/Select';

const FormikSelect = ({ name, children }) => (
  <Field name={name}>{({ field }) => <Select {...field}>{children}</Select>}</Field>
);

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormikSelect;
