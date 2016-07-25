import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import tasks from './tasks.js';
import habits from './habits.js';

const rootReducer = combineReducers({
  tasks,
  habits,
  routing: routerReducer
});

export default rootReducer;
