import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import * as ActionTypes from 'actions';
import paginate from './paginate';

function entities(state = { formCategories: {}, forms: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  }
  if (error) {
    return error;
  }

  return state;
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  formCategories: paginate({
    types: [
      ActionTypes.FORM_CATEGORIES_REQUEST,
      ActionTypes.FORM_CATEGORIES_SUCCESS,
      ActionTypes.FORM_CATEGORIES_FAILURE
    ]
  }),
  formsByCategory: paginate({
    mapActionToKey: action => action.category,
    types: [ActionTypes.FORMS_REQUEST, ActionTypes.FORMS_SUCCESS, ActionTypes.FORMS_FAILURE]
  }),
  sectionsByForm: paginate({
    mapActionToKey: action => action.form,
    types: [
      ActionTypes.SECTIONS_REQUEST,
      ActionTypes.SECTIONS_SUCCESS,
      ActionTypes.SECTIONS_FAILURE
    ]
  })
});

export default combineReducers({
  entities,
  pagination,
  errorMessage
});
