import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {MdDeleteForever} from 'react-icons/lib/md';


const Habits = React.createClass({
  handleSubmit(event){
    event.preventDefault();

    const text = this.refs.habit.value;

    this.props.addHabit(text);
    this.refs.habitForm.reset();
  },
  render(){
    const {habits} = this.props;
    const i = habits.index;
    return(
      <div>
        <form ref="habitForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="add habit" placeholder="  add habit" className="add" />
          <input type="submit" hidden/>
        </form>

        {/*<span><Button>Strong »</Button></span>
        <span><Button>Weak »</Button></span>*/}

        <div>
          {habits.map((habit, i) => <p key={i}>
              <span>
                <Button className="increase-progress" onClick={()=>{this.props.increaseProgress(1)}}>
                  &#43;
                </Button>
              </span>
              <span>
                <Button className="decrease-progress" onClick={()=>{this.props.decreaseProgress(1)}}>
                  &#8722;
                </Button>
              </span>

              <span>   {habit.text}   </span>
              <MdDeleteForever className="delete" onClick={this.props.removeHabit.bind(null, i)} />
            </p>)}
        </div>
      </div>
    )
  }
});

export default Habits;
