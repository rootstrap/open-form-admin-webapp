import { combineReducers } from 'redux';

import * as ActionTypes from 'actions';
import paginate from './paginate';
import entities from './entities';
import errorMessage from './errorMessage';

// Updates the pagination data for different actions.
const pagination = combineReducers({
  formCategories: paginate({
    mapActionToKey: () => 'list',
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
