import React from 'react';
import {render} from 'react-dom';

//import components
import App from './components/App.js';
import NotFound from './components/NotFound.js';

//react-router
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

import 'bootstrap/less/bootstrap.less'

import { addTask } from './actions/actionCreators'
import tasks from './data/tasks.js';
import habits from './data/habits.js';
import progressbars from './data/progressbars.js';

tasks.forEach(({taskType, text}) => store.dispatch(addTask(taskType, text)))
// TODO: The same for habits and progressbars

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
