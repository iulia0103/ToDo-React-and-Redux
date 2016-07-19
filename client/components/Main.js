import React from 'react';
import {Link} from 'react-router';

//import components
import OtherTasks from './OtherTasks.js';
import Todo from './Todo.js';

const Main = React.createClass({
  render(){
    return(
      <div>
        <Link to="/">ToDo App</Link>
        <OtherTasks />
        <OtherTasks />
        <Todo />
      </div>
    )
  }
});

export default Main;
