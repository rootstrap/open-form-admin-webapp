import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import TextInput from 'components/common/TextInput';
import FormGroup from 'components/common/FormGroup';
import Label from 'components/common/Label';
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
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

FormikTextInput.defaultProps = {
  type: 'text'
};

export default FormikTextInput;
