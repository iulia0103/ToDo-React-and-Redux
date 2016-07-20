import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todos from './todos.js';
import habits from './habits.js';

const rootReducer = combineReducers({
  todos,
  habits,
  routing: routerReducer
});

export default rootReducer;
