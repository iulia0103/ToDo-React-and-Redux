import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Habits = React.createClass({
  render(){
    const habits = this.props.habits;
    const i = habits.index;
    return(
      <div>
        <form ref="todoForm">
          <input type="text" ref="task" placeholder="task" />
          <input type="submit" hidden/>
        </form>

        <span><Button bsStyle='default' bsSize='small'>Strong »</Button></span>
        <span><Button bsStyle='default' bsSize='small'>Weak »</Button></span>

        <div>
          {habits.map((habit, i) => <p key={i}>
              <span><Button bsStyle='default' bsSize='small'>&#43;</Button></span>
              <span><Button bsStyle='default' bsSize='small'>&#8722;</Button></span>
              <span>   {habit.text}   </span>
              <span>&times;</span>
            </p>)}
        </div>
      </div>
    )
  }
});

export default Habits;
