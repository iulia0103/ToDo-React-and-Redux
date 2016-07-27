import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {MdClear} from 'react-icons/lib/md';

const Tasks = React.createClass({
  handleSubmit(event){
    event.preventDefault();

    const text = this.refs.task.value;
    const taskType = this.props.type;

    this.props.addTask(taskType, text);
    this.refs.taskForm.reset();
  },
  render(){
    const tasks = this.props.tasks;
    const i = tasks.index;
    return(
      <div>
        <form ref="taskForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="task" placeholder="task" />
          <input type="submit" hidden/>
        </form>

        <span><Button bsStyle='default' bsSize='small'>Active »</Button></span>
        <span><Button bsStyle='default' bsSize='small'>Completed »</Button></span>

        <div>
            {tasks.map((task, i) => <p key={i}>
              <span>
                <Button bsStyle='default' bsSize='small' onClick={()=>{this.props.toggleTask(task)}}>
                  {task.symbol}
                </Button>
              </span>
              <span>   {task.text}  </span>
              <MdClear onClick={()=>{this.props.removeTask(task)}} />
            </p>)}
          </div>
      </div>
    )
  }
});

export default Tasks;
