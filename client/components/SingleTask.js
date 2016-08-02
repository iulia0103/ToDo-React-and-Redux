import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {MdDeleteForever, MdStar, MdDoneAll} from 'react-icons/lib/md';


const SingleTask = React.createClass({
  handleOnClick(){
    const {task} = this.props;
    this.props.toggleTask(task.id);
    if(task.completed === true){
      this.props.increaseProgress(2);
    }
    else{
      this.props.decreaseProgress(2);
    }
  },
  render(){
    const {task} = this.props;
    return (
      <p className={task.class}>
        <span>
          <Button className={task.class} onClick={()=>{this.handleOnClick()}}>
            {task.completed ? <MdDoneAll /> : <MdStar />}
          </Button>
        </span>
        <span>   {task.text}  </span>
        <MdDeleteForever className="delete" onClick={()=>{this.props.removeTask(task.id)}} />
      </p>
    )
  }
});

export default SingleTask;
