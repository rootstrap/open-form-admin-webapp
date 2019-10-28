import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFormCategories } from 'actions/formActions';
import { getFormCategories } from 'selectors/formSelectors';
import Select from 'components/formik/Select';
import TextInput from 'components/formik/TextInput';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import Title from 'components/common/Title';
import Form from 'components/common/Form';

function handleSubmit(values) {
  alert(JSON.stringify(values));
}

const CreateFormPage = () => {
  const formCategories = useSelector(getFormCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFormCategories());
  }, []);

  return (
    <>
      <Header>
        <Title>Create new form</Title>
      </Header>
      <Formik initialValues={{ category: '' }} onSubmit={handleSubmit}>
        <Form>
          <TextInput name="name" label="Form's name" />
          <Select name="category" label="Category">
            {formCategories.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
};

export default CreateFormPage;