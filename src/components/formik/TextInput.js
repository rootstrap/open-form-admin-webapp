import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { TextInput, FormGroup, Label } from 'components/common';
import ErrorMessage from 'components/formik/ErrorMessage';

const FormikTextInput = ({ name, label, ...props }) => {
  const [field] = useField(name);
  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextInput {...field} {...props} />
      <ErrorMessage name={name} />
    </FormGroup>
  );
};

FormikTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  placeholder: PropTypes.string
};

FormikTextInput.defaultProps = {
  type: 'text'
};

export default FormikTextInput;
