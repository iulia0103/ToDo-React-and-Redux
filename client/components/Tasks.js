import React from 'react';
import Button from 'react-bootstrap/lib/Button';

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
            <span><Button bsStyle='default' bsSize='small'>&#9733;</Button></span>
            <span>   {task.text}  </span>
            <button onClick={()=>{this.props.removeTask(task)}}>&times;</button>
          </p>)}
        </div>
      </div>
    )
  }
});

export default Tasks;
