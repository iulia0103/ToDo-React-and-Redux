import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Habits = React.createClass({
  handleSubmit(event){
    event.preventDefault();

    const text = this.refs.habit.value;

    this.props.addHabit(text);
    this.refs.habitForm.reset();
  },
  render(){
    const habits = this.props.habits;
    const i = habits.index;
    return(
      <div>
        <form ref="habitForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="habit" placeholder="habit" />
          <input type="submit" hidden/>
        </form>

        <span><Button bsStyle='default' bsSize='small'>Strong »</Button></span>
        <span><Button bsStyle='default' bsSize='small'>Weak »</Button></span>

        <div>
          {habits.map((habit, i) => <p key={i}>
              <span><Button bsStyle='default' bsSize='small'>&#43;</Button></span>
              <span><Button bsStyle='default' bsSize='small'>&#8722;</Button></span>
              <span>   {habit.text}   </span>
              <button onClick={this.props.removeHabit.bind(null, i)}>&times;</button>
            </p>)}
        </div>
      </div>
    )
  }
});

export default Habits;
