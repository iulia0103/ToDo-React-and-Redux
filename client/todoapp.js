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


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
