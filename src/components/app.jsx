import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Index from './index.jsx';
import reducer from '../main/reducer';

const store = createStore(reducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('content')
);
