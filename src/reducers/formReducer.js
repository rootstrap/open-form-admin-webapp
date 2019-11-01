import * as types from 'actions/actionTypes';
import createReducer from './createReducer';

const initialState = {
  categories: [],
  byId: {}
};

const actionHandlers = {
  [types.FETCH_FORM_CATEGORIES_SUCCESS]: (state, { payload }) => {
    state.categories = payload.formCategories;
  },
  [types.FETCH_FORMS_SUCCESS]: (state, { payload }) => {
    state.byId[payload.category] = payload.forms;
  }
};

export default createReducer(initialState, actionHandlers);
