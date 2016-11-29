import React from 'react';
import ReactDOM from 'react-dom';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Main from './components/Main.jsx';

const loggerMiddleware = createLogger();

const configureStore = function(initialState) {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      loggerMiddleware,
      promiseMiddleware()
    )
  );

  return store;
}

ReactDOM.render(<Provider store={configureStore({})}><Main /></Provider>, document.getElementById('app'));
