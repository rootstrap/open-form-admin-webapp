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
  const { forms } = getState().entities;
  if (!Object.keys(forms).length || refetch) {
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
    data
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
