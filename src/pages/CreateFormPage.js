import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFormCategories } from 'actions/formActions';
import { getFormCategories } from 'selectors/formSelectors';
import Select from 'components/formik/Select';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import Title from 'components/common/Title';

function handleSubmit(values) {
  console.log(values);
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
        <Title>title</Title>
      </Header>
      <Formik initialValues={{ category: '' }} onSubmit={handleSubmit}>
        <Form>
          <Select name="category">
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
