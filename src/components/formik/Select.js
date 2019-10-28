import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import Select from 'components/common/Select';
import FormGroup from 'components/common/FormGroup';
import Label from 'components/common/Label';

const FormikSelect = ({ name, label, children }) => (
  <Field name={name}>
    {({ field }) => (
      <FormGroup>
        <Label htmlFor={name}>{label}</Label>
        <Select {...field}>{children}</Select>
      </FormGroup>
    )}
  </Field>
);

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormikSelect;
