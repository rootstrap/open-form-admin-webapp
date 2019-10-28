import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from 'reducers';

export default function configureStore(initialState, isServerSide = false) {
  const middlewares = [thunkMiddleware];

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  if (isServerSide) {
    return { store };
  }

  const persistor = persistStore(store);

  return { store, persistor };
}
