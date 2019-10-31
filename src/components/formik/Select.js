import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import Select from 'components/common/Select';
import FormGroup from 'components/common/FormGroup';
import Label from 'components/common/Label';

const FormikSelect = ({ name, label, children }) => {
  const [field] = useField(name);
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Select {...field}>{children}</Select>
    </FormGroup>
  );
};

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormikSelect;
