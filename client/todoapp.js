import React from 'react';
import {render} from 'react-dom';

//import components
import Main from './components/Main.js';
import NotFound from './components/NotFound.js';

//react-router
import {Router, Route, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

render(router, document.getElementById('root'));
