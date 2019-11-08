import routesPaths from 'constants/routesPaths';
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

export const loadFormCategories = () => dispatch => dispatch(fetchFormCategories());

export const CREATE_FORM_REQUEST = 'CREATE_FORM_REQUEST';
export const CREATE_FORM_SUCCESS = 'CREATE_FORM_SUCCESS';
export const CREATE_FORM_FAILURE = 'CREATE_FORM_FAILURE';

const createForm = ({ category, ...data }) => ({
  [CALL_API]: {
    types: [CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_FORM_FAILURE],
    endpoint: `admin/form_categories/${category}/forms`,
    schema: Schemas.FORM,
    data
  }
});

export const submitForm = (values, history) => async dispatch => {
  await dispatch(createForm(values));
  history.push(routesPaths.forms);
};

export const FORMS_REQUEST = 'FORMS_REQUEST';
export const FORMS_SUCCESS = 'FORMS_SUCCESS';
export const FORMS_FAILURE = 'FORMS_FAILURE';

const fetchForms = category => ({
  category,
  [CALL_API]: {
    types: [FORMS_REQUEST, FORMS_SUCCESS, FORMS_FAILURE],
    endpoint: `form_categories/${category}/forms`,
    schema: Schemas.FORM_ARRAY
  }
});

export const loadForms = category => dispatch => dispatch(fetchForms(category));

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
});
