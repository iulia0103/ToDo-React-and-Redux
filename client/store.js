import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/root.js'

import tasks from './data/tasks.js';
import habits from './data/habits.js';
import progressbars from './data/progressbars.js';

import Logger from 'redux-logger';

export const defaultState = {
  progressbars,
  habits,
  tasks
};

const logger = Logger({
  duration: true,
  collapsed: true
});

const store = createStore(rootReducer, defaultState, applyMiddleware(logger));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
