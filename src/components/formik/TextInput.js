import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import TextInput from 'components/common/TextInput';
import FormGroup from 'components/common/FormGroup';
import Label from 'components/common/Label';

const FormikTextInput = ({ name, label, type = 'text' }) => (
  <Field name={name}>
    {({ field }) => (
      <FormGroup>
        <Label htmlFor={name}>{label}</Label>
        <TextInput {...field} type={type} />
      </FormGroup>
    )}
  </Field>
);

FormikTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default FormikTextInput;
