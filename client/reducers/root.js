import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import tasks from './tasks.js';
import habits from './habits.js';
import progressbars from './progressbars.js';

const rootReducer = combineReducers({
  progressbars,
  habits,
  tasks,
  routing: routerReducer
});

export default rootReducer;
