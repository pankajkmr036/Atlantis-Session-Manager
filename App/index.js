import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import LandingScreen from './screens/LandingScreen.js';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LandingScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
