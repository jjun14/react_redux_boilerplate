import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import getRoutes from './routes';

const reducer = require('./redux/modules/reducer').default
const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store)

const component = (
  <Router history={history}>
    {getRoutes(store)}
  </Router>
)

render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  document.getElementById('app')
)
