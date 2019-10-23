import swallow from 'utils/swallow';
import formServices from 'services/formService';
import createAction from 'actions/createAction';
import {
  FETCH_FORM_CATEGORIES,
  FETCH_FORM_CATEGORIES_SUCCESS,
  FETCH_FORM_CATEGORIES_ERROR
} from 'actions/actionTypes';

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
