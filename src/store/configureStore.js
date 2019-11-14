// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import api from '../middleware/api';

function configureStoreDev(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, api),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

function configureStoreProd(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, api));
}

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
