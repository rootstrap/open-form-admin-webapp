import swallow from 'utils/swallow';
import formServices from 'services/formService';
import createAction from 'actions/createAction';
import {
  FETCH_FORM_CATEGORIES,
  FETCH_FORM_CATEGORIES_SUCCESS,
  FETCH_FORM_CATEGORIES_ERROR,
  CREATE_FORM,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_ERROR
} from 'actions/actionTypes';
import routesPaths from 'constants/routesPaths';

const fetchFormCategoriesRequest = createAction(FETCH_FORM_CATEGORIES);
const fetchFormCategoriesSuccess = createAction(FETCH_FORM_CATEGORIES_SUCCESS);
const fetchFormCategoriesError = createAction(FETCH_FORM_CATEGORIES_ERROR);

export const fetchFormCategories = () =>
  swallow(
    (error, dispatch) => dispatch(fetchFormCategoriesError(error)),
    async dispatch => {
      dispatch(fetchFormCategoriesRequest());
      const { data } = await formServices.fetchFormCategories();
      dispatch(fetchFormCategoriesSuccess(data));
    }
  );

const createFormRequest = createAction(CREATE_FORM);
const createFormSuccess = createAction(CREATE_FORM_SUCCESS);
const createFormError = createAction(CREATE_FORM_ERROR);

export const createForm = (values, history) =>
  swallow(
    (error, dispatch) => dispatch(createFormError(error)),
    async dispatch => {
      dispatch(createFormRequest());
      const { data } = await formServices.createForm(values);
      dispatch(createFormSuccess(data));
      history.push(routesPaths.forms);
    }
  );
