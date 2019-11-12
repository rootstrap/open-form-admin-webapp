import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { loadFormCategories, submitForm } from 'actions';
import { getFormCategories } from 'selectors';
import Select from 'components/formik/Select';
import TextInput from 'components/formik/TextInput';
import { Button, Header, Title, Form } from 'components/common';

const CreateForm = styled(Form)`
  max-width: 730px;
  width: 50%;
  margin: 1rem 0;
`;

const CreateFormPage = () => {
  const { formCategories } = useSelector(getFormCategories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadFormCategories());
  }, [dispatch]);

  return (
    <>
      <Header>
        <Title>
          <FormattedMessage id="nav.create-form" />
        </Title>
      </Header>
      <Formik
        initialValues={{ name: '', category: formCategories.length && formCategories[0].id }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(<FormattedMessage id="create-form-page.name.empty" />)
        })}
        onSubmit={values => dispatch(submitForm(values, history))}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <CreateForm>
            <TextInput name="name" label={<FormattedMessage id="create-form-page.name.label" />} />
            <Select
              name="category"
              label={<FormattedMessage id="create-form-page.category.label" />}
              options={formCategories.map(({ id, name }) => ({ value: id, label: name }))}
            />
            <Button type="submit" disabled={isSubmitting}>
              <FormattedMessage id="create-form-page.submit" />
            </Button>
          </CreateForm>
        )}
      </Formik>
    </>
  );
};

export default CreateFormPage;
