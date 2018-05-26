import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import UserData from './UserData';
import App from './App';

const store = createStore(
  state => state,
  UserData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <App />,
  document.getElementById('root')
);
