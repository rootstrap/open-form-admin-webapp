import * as types from 'actions/actionTypes';
import createReducer from './createReducer';

const initialState = {
  categories: []
};

const actionHandlers = {
  [types.FETCH_FORM_CATEGORIES_SUCCESS]: (state, { payload }) => {
    state.categories = payload.formCategories;
  }
};

export default createReducer(initialState, actionHandlers);
