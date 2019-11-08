import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { TextInput, FormGroup, Label } from 'components/common';
import ErrorMessage from 'components/formik/ErrorMessage';

const FormikTextInput = ({ name, label, type }) => {
  const [field] = useField(name);
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <TextInput {...field} type={type} />
      <ErrorMessage name={name} />
    </FormGroup>
  );
};

FormikTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.string
};

FormikTextInput.defaultProps = {
  type: 'text'
};

export default FormikTextInput;
