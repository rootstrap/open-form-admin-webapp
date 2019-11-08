export const getFormCategories = ({ pagination, entities }) => ({
  formCategories:
    (pagination.formCategories.list &&
      pagination.formCategories.list.ids.map(id => entities.formCategories[id])) ||
    [],
  isFetching: pagination.formCategories.list && pagination.formCategories.list.isFetching
});

export const getForms = ({ pagination, entities }) => category => ({
  forms:
    (pagination.forms[category] && pagination.forms[category].ids.map(id => entities.forms[id])) ||
    [],
  isFetching: pagination.forms[category] && pagination.forms[category].isFetching
});

export const getErrorMessage = ({ errorMessage }) => errorMessage;
