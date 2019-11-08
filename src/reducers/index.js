import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import localForage from 'localforage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import merge from 'lodash/merge';

import * as ActionTypes from 'actions';
import paginate from './paginate';
import session from './sessionReducer';

const entities = (state = { formCategories: {}, forms: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  return state;
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  }
  if (error) {
    return error;
  }

  return state;
};

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
  forms: paginate({
    mapActionToKey: action => action.category,
    types: [ActionTypes.FORMS_REQUEST, ActionTypes.FORMS_SUCCESS, ActionTypes.FORMS_FAILURE]
  })
});

const sessionPersistConfig = {
  key: 'session',
  storage: localForage,
  whitelist: ['authenticated', 'info', 'user'],
  stateReconciler: autoMergeLevel2
};

export default combineReducers({
  entities,
  form,
  session: persistReducer(sessionPersistConfig, session),
  pagination,
  errorMessage
});
