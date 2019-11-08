import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { Select, FormGroup, Label } from 'components/common';

const FormikSelect = ({ name, label, ...props }) => {
  const [field] = useField(name);
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Select
        {...props}
        {...field}
        onChange={({ value }) => field.onChange({ target: { value, name } })}
      />
    </FormGroup>
  );
};

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default FormikSelect;
