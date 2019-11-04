import * as types from 'actions/actionTypes';
import createReducer from './createReducer';

const initialState = {
  categories: [],
  byId: {},
  isFetching: true,
  error: ''
};

const actionHandlers = {
  [types.FETCH_FORM_CATEGORIES]: state => {
    state.isFetching = true;
  },
  [types.FETCH_FORM_CATEGORIES_SUCCESS]: (state, { payload }) => {
    state.categories = payload.formCategories;
    state.isFetching = false;
  },
  [types.FETCH_FORM_CATEGORIES_ERROR]: (state, { payload }) => {
    state.error = payload.data.message;
    state.isFetching = false;
  },
  [types.FETCH_FORMS]: state => {
    state.isFetching = true;
  },
  [types.FETCH_FORMS_SUCCESS]: (state, { payload }) => {
    state.byId[payload.category] = payload.forms;
    state.isFetching = false;
  },
  [types.FETCH_FORMS_ERROR]: (state, { payload }) => {
    state.error = payload.data.message;
    state.isFetching = false;
  }
};

export default createReducer(initialState, actionHandlers);
