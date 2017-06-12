import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import greetingReducer from './reducers/greeter.reducer';

const store = createStore(
  greetingReducer,
  {
    salutation: 'Hello',
    name: 'Friend',
    punctuation: '!'
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();