import React from 'react';
import {render} from 'react-dom';

//import components
import Main from './components/Main.js';
import NotFound from './components/NotFound.js';

//react-router
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}/>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
