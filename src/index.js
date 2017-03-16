/* eslint-disable no-console */
/* eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import matchActions from './actions/matchActions';
import playerActions from './actions/playerActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/dota2minimapheroes.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
let mainPlayer = '83633790';
store.dispatch(playerActions.steam_getPlayerSummaries());
// store.dispatch(playerActions.OD_getPlayer(mainPlayer));
store.dispatch(matchActions.steam_getMatchHistory(mainPlayer));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
