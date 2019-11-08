import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from 'reducers';
import api from '../middleware/api';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, api));
  const persistor = persistStore(store);

  return { store, persistor };
}
