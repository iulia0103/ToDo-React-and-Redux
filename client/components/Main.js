import React from 'react';
import {Link} from 'react-router';

//import components
import Weekly from './Weekly.js';
import Daily from './Daily.js';

const Main = React.createClass({
  render(){
    return(
      <div>
        <Link to="/">ToDo App</Link>
        <Weekly />
        <Daily />
      </div>
    )
  }
});

export default Main;
