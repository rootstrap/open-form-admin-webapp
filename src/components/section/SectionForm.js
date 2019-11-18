import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { Form, Button } from 'components/common';
import TextInput from 'components/formik/TextInput';

const SectionName = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;

  input {
    color: ${({ theme }) => theme.color.primary};
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const NameFormGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 730px;
  margin: 0.5rem 1rem;

  // > div {
  //   flex: 1;
  // }

  // > button {
  //   padding-right: 2rem;
  //   padding-left: 2rem;
  // }
`;

const FormGroup = styled.div``;

export default function SectionForm({ onSubmit }) {
  const intl = useIntl();
  return (
    <Formik
      initialValues={{ name: '', description: 'desc', order: 1, longDescription: 'long desc' }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(<FormattedMessage id="section.name.empty" />)
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <SectionName>
            <NameFormGroup>
              <TextInput
                name="name"
                placeholder={intl.formatMessage({ id: 'section.name.placeholder' })}
              />
              <Button type="submit" disabled={isSubmitting}>
                <FormattedMessage id="section.saveChanges" />
              </Button>
            </NameFormGroup>
          </SectionName>
          <FormGroup>
            <TextInput
              name="description"
              placeholder={intl.formatMessage({ id: 'section.description.placeholder' })}
            />
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}

SectionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
