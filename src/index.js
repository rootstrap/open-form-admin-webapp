import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer, setConfig } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import 'normalize.css';

import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';
import App from 'components/App';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from 'constants/constants';
import configureStore from './store/configureStore';
import locales from './locales';

// Load service worker
if (process.env.ENABLE_PWA) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/main-sw.js');
  });
}

// Fix for browsers that don't implement Intl by default e.g.: Safari)
if (!window.Intl) {
  require.ensure(
    [
      '@formatjs/intl-relativetimeformat',
      '@formatjs/intl-relativetimeformat/dist/include-aliases.js',
      '@formatjs/intl-relativetimeformat/dist/locale-data/en.js',
      '@formatjs/intl-relativetimeformat/dist/locale-data/es.js'
    ],
    require => {
      require('@formatjs/intl-relativetimeformat/polyfill');
      require('@formatjs/intl-relativetimeformat/dist/include-aliases');
      require('@formatjs/intl-relativetimeformat/dist/locale-data/en.js');
      require('@formatjs/intl-relativetimeformat/dist/locale-data/es.js');
    }
  );
}

const usersLocale = navigator.language.split('-')[0];
const supportedUserLocale = SUPPORTED_LANGUAGES.includes(usersLocale);
const locale = supportedUserLocale ? usersLocale : DEFAULT_LANGUAGE;
const messages = locales[locale];

const store = configureStore();

function renderApp(Component) {
  render(
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>
    </IntlProvider>,
    document.getElementById('app')
  );
}

applyDefaultInterceptors(api);
renderApp(App);

setConfig({ logLevel: 'no-errors-please' });

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App);
  });
}
