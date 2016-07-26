import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/root.js'

import tasks from './data/tasks.js';
import habits from './data/habits.js';
import progressbars from './data/progressbars.js';

export const defaultState = {
  progressbars,
  habits,
  tasks
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
