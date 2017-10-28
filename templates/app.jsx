import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Index from './index.jsx';

// const store = createStore(reducer);
// window.store = store;

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);