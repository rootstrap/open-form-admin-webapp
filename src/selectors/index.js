export const getFormCategories = ({ pagination, entities }) => ({
  formCategories:
    (pagination.formCategories.list &&
      pagination.formCategories.list.ids.map(id => entities.formCategories[id])) ||
    [],
  isFetching: pagination.formCategories.list && pagination.formCategories.list.isFetching
});

export const getForms = ({ pagination, entities }) => category => ({
  forms:
    (pagination.formsByCategory[category] &&
      pagination.formsByCategory[category].ids.map(id => entities.forms[id])) ||
    [],
  isFetching:
    pagination.formsByCategory[category] && pagination.formsByCategory[category].isFetching
});

export const getForm = id => ({ entities }) => entities.forms[id];

export const getSections = id => ({ pagination, entities }) => ({
  sections:
    (pagination.sectionsByForm[id] &&
      pagination.sectionsByForm[id].ids.map(id => entities.sections[id])) ||
    [],
  isFetching: pagination.sectionsByForm[id] && pagination.sectionsByForm[id].isFetching
});

export const getErrorMessage = ({ errorMessage }) => errorMessage;
