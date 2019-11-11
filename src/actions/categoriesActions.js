import { CALL_API, Schemas } from '../middleware/api';

export const FORM_CATEGORIES_REQUEST = 'FORM_CATEGORIES_REQUEST';
export const FORM_CATEGORIES_SUCCESS = 'FORM_CATEGORIES_SUCCESS';
export const FORM_CATEGORIES_FAILURE = 'FORM_CATEGORIES_FAILURE';

const fetchFormCategories = () => ({
  [CALL_API]: {
    types: [FORM_CATEGORIES_REQUEST, FORM_CATEGORIES_SUCCESS, FORM_CATEGORIES_FAILURE],
    endpoint: 'form_categories',
    schema: Schemas.FORM_CATEGORY_ARRAY
  }
});

export const loadFormCategories = () => (dispatch, getState) => {
  const { formCategories } = getState().entities;
  if (!Object.keys(formCategories).length) {
    dispatch(fetchFormCategories());
  }
};
