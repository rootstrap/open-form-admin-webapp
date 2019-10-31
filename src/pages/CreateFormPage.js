import React, { useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { fetchFormCategories, createForm } from 'actions/formActions';
import { getFormCategories } from 'selectors/formSelectors';
import Select from 'components/formik/Select';
import TextInput from 'components/formik/TextInput';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import Title from 'components/common/Title';
import Form from 'components/common/Form';

const CreateFormPage = () => {
  const formCategories = useSelector(getFormCategories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchFormCategories());
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
        onSubmit={useCallback(values => dispatch(createForm(values, history)), [dispatch, history])}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="name" label={<FormattedMessage id="create-form-page.name.label" />} />
            <Select
              name="category"
              label={<FormattedMessage id="create-form-page.category.label" />}
            >
              {formCategories.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
            <Button type="submit" disabled={isSubmitting}>
              <FormattedMessage id="create-form-page.submit" />
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateFormPage;
