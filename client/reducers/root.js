import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todos from './todos.js';
import others from './others.js';

const rootReducer = combineReducers({
  todos,
  others,
  routing: routerReducer
});

export default rootReducer;
