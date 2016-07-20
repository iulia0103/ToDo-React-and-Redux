import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Todos = React.createClass({
  render(){
    const todos = this.props.todos;
    const i = todos.index;
    return(
      <div>
        <form ref="todoForm">
          <input type="text" ref="task" placeholder="task" />
          <input type="submit" hidden/>
        </form>

        <span><Button bsStyle='default' bsSize='small'>Active »</Button></span>
        <span><Button bsStyle='default' bsSize='small'>Completed »</Button></span>

        <div>
          {todos.map((todo, i) => <p key={i}>
            <span><Button bsStyle='default' bsSize='small'>&#9733;</Button></span>
            <span>   {todo.text}   </span>
            <span>&times;</span>
          </p>)}
        </div>
      </div>
    )
  }
});

export default Todos;
