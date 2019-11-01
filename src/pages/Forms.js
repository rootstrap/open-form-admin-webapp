import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFormCategories, getFormsCategoriesByCategory } from 'selectors/formSelectors';
import { fetchFormCategories, fetchForms } from 'actions/formActions';

const Forms = () => {
  const formCategories = useSelector(getFormCategories);
  const forms = useSelector(getFormsCategoriesByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFormCategories());
  }, [dispatch]);

  useEffect(() => {
    formCategories.forEach(({ id }) => {
      dispatch(fetchForms(id));
    });
  }, [formCategories, dispatch]);

  return (
    <div>
      {formCategories.map(({ id, name }) => (
        <div key={id}>
          {name}
          {forms[id] && forms[id].map(form => <div key={form.id}>{form.name}</div>)}
        </div>
      ))}
    </div>
  );
};

export default Forms;
