import routesPaths from 'constants/routesPaths';
import api from 'api';
import swallow from 'utils/swallow';
import { CALL_API, Schemas } from '../middleware/api';

export const FORMS_REQUEST = 'FORMS_REQUEST';
export const FORMS_SUCCESS = 'FORMS_SUCCESS';
export const FORMS_FAILURE = 'FORMS_FAILURE';

const fetchForms = (category, refetch) => ({
  category,
  [CALL_API]: {
    types: [FORMS_REQUEST, FORMS_SUCCESS, FORMS_FAILURE],
    endpoint: `form_categories/${category}/forms`,
    schema: Schemas.FORM_ARRAY,
    refetch
  }
});

export const loadForms = (category, refetch) => (dispatch, getState) => {
  const { formsByCategory } = getState().pagination;
  if (!formsByCategory[category] || refetch) {
    dispatch(fetchForms(category, refetch));
  }
};

export const CREATE_FORM_REQUEST = 'CREATE_FORM_REQUEST';
export const CREATE_FORM_SUCCESS = 'CREATE_FORM_SUCCESS';
export const CREATE_FORM_FAILURE = 'CREATE_FORM_FAILURE';

const createForm = ({ category, ...data }) => ({
  [CALL_API]: {
    types: [CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_FORM_FAILURE],
    endpoint: `admin/form_categories/${category}/forms`,
    schema: Schemas.FORM,
    // adding version as is a requirement from the api
    data: { version: 1, ...data }
  }
});

export const submitForm = (values, history) => async dispatch => {
  await dispatch(createForm(values));
  dispatch(loadForms(values.category, true));
  history.push(routesPaths.forms);
};

const DELETE_FORM_FAILURE = 'DELETE_FORM_FAILURE';

export const deleteForm = ({ id, formCategoryId }) =>
  swallow(
    (error, dispatch) => dispatch({ type: DELETE_FORM_FAILURE, error: error.message }),
    async dispatch => {
      await api.delete(`admin/forms/${id}`);
      dispatch(loadForms(formCategoryId, true));
    }
  );

export const FORM_REQUEST = 'FORM_REQUEST';
export const FORM_SUCCESS = 'FORM_SUCCESS';
export const FORM_FAILURE = 'FORMS_FAILURE';

const fetchForm = id => ({
  [CALL_API]: {
    types: [FORM_REQUEST, FORM_SUCCESS, FORM_FAILURE],
    endpoint: `forms/${id}`,
    schema: Schemas.FORM
  }
});

export const loadForm = id => (dispatch, getState) => {
  const { forms } = getState().entities;
  if (!forms[id]) {
    dispatch(fetchForm(id));
  }
};
