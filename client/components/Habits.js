import React from 'react';

const Habits = React.createClass({
  render(){
    const habits = this.props.habits;
    const i = habits.index;
    return(
      <ul>
        {habits.map((habit, i) => <li key={i}>{habit.text}</li>)}
      </ul>
    )
  }
});

export default Habits;
