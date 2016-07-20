import React from 'react';
import {Link} from 'react-router';

//import components
import Habits from './Habits.js';
import Todos from './Todos.js';

const Main = React.createClass({
  render(){
    const {habits, dailies, weeklies, todos} = this.props;

    return(
      <div>
        <h1><Link to="/">Habitica</Link></h1>

        <section>
          <h3>Habits</h3>
          <Habits habits={habits}/>
        </section>

        <section>
          <h3>Daily</h3>
          <span>[All]</span>
          <span>[Active]</span>
          <span>[Completed]</span>
          <Todos todos={dailies}/>
        </section>

        <section>
          <h3>Weekly</h3>
          <span>[All]</span>
          <span>[Active]</span>
          <span>[Completed]</span>
          <Todos todos={weeklies}/>
        </section>

        <section>
          <h3>To Do</h3>
          <span>[All]</span>
          <span>[Active]</span>
          <span>[Completed]</span>
          <Todos todos={todos}/>
        </section>
      </div>
    )
  }
});

export default Main;
