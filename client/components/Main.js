import React from 'react';
import {Link} from 'react-router';

//import components
import Habits from './Habits.js';
import Todos from './Todos.js';

const Main = React.createClass({
  render(){
    return(
      <div>
        <Link to="/">Habitica</Link>
        <Todos />
        <Todos />
        <Todos />
        <Habits />
      </div>
    )
  }
});

export default Main;
