/* eslint-disable no-console */
/* eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import loadMatches from './actions/matchActions';
import loadPlayer from './actions/playerActions';
import '../node_modules/bootstrap/dist/css/bootstrap.sandstone.min.css';
import './styles/styles.css';
import './styles/dota2minimapheroes.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadPlayer('83633790'));
store.dispatch(loadMatches('83633790'));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
