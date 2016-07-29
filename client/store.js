import {createStore, compose, applyMiddleware} from 'redux';
import Logger from 'redux-logger';

import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/root.js';


const logger = Logger({
  duration: true,
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
