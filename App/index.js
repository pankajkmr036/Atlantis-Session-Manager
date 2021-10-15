import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import LandingScreen from './screens/LandingScreen.js';

const App = () => {
  return (
    <Provider store={store}>
      <LandingScreen />
    </Provider>
  );
};

export default App;
