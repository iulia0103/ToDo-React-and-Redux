import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {MdClear} from 'react-icons/lib/md';

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

        <span>
          <Button bsStyle='default' bsSize='small'>
            Strong »
          </Button>
        </span>
        <span>
          <Button bsStyle='default' bsSize='small'>
            Weak »
          </Button>
        </span>

        <div>
          {habits.map((habit, i) => <p key={i}>
              <span>
                <Button bsStyle='default' bsSize='small' onClick={this.props.increaseHealth.bind(null, i)}>
                  &#43;
                </Button>
              </span>
              <span>
                <Button bsStyle='default' bsSize='small' onClick={this.props.decreaseHealth.bind(null, i)}>
                  &#8722;
                </Button>
              </span>
              
              <span>   {habit.text}   </span>
              <MdClear onClick={this.props.removeHabit.bind(null, i)} />
            </p>)}
        </div>
      </div>
    )
  }
});

export default Habits;
