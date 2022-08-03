/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
const MangaApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MangaApp);
