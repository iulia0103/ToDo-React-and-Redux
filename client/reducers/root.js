import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todos from './todo.js';
import others from './other.js';

const rootReducer = combineReducers({
  todos,
  others,
  routing: routerReducer
});

export default rootReducer;
