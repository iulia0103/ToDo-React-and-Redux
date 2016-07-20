import React from 'react';

const Todos = React.createClass({
  render(){
    const todos = this.props.todos;
    const i = todos.index;
    return(
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
      </ul>
    )
  }
});

export default Todos;
