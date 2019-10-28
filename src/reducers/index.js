import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import localForage from 'localforage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import session from './sessionReducer';
import forms from './formReducer';

const sessionPersistConfig = {
  key: 'session',
  storage: localForage,
  whitelist: ['authenticated', 'info', 'user'],
  stateReconciler: autoMergeLevel2
};

export default combineReducers({
  form,
  forms,
  session: persistReducer(sessionPersistConfig, session)
});
