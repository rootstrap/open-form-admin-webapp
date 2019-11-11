export const getFormCategories = ({ pagination, entities }) => ({
  formCategories:
    (pagination.formCategories.ids &&
      pagination.formCategories.ids.map(id => entities.formCategories[id])) ||
    [],
  isFetching: pagination.formCategories.isFetching
});

export const getForms = ({ pagination, entities }) => category => ({
  forms:
    (pagination.forms[category] && pagination.forms[category].ids.map(id => entities.forms[id])) ||
    [],
  isFetching: pagination.forms[category] && pagination.forms[category].isFetching
});

export const getErrorMessage = ({ errorMessage }) => errorMessage;
