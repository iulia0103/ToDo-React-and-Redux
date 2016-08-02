import React from 'react';
import {render} from 'react-dom';

//import components
import App from './components/App.js';
import NotFound from './components/NotFound.js';

//react-router
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

//import bootstrap and css
import '!style!css!less!bootstrap/less/bootstrap.less';
import '!style!css!less!./styles/style.less';

//import data
import tasks from './data/tasks.js';
import habits from './data/habits.js';
import progressbars from './data/progressbars.js';

//add actionCreators
import { addTask } from './actions/actionCreators';
import { addHabit } from './actions/actionCreators';
import { addProgress } from './actions/actionCreators';

tasks.forEach(({taskType, text}) => store.dispatch(addTask(taskType, text)));
habits.forEach(({text}) => store.dispatch(addHabit(text)));
progressbars.forEach(({progressType}) => store.dispatch(addProgress(progressType)));

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
