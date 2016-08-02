import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import SingleTask from './SingleTask.js';


const Tasks = React.createClass({
  handleSubmit(event){
    event.preventDefault();

    const text = this.refs.task.value;
    const taskType = this.props.type;

    this.props.addTask(taskType, text);
    this.refs.taskForm.reset();
  },
  render(){
    const {tasks }= this.props;
    const i = tasks.index;
    return(
      <div>
        <form ref="taskForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="task" placeholder="  add task" className="add"/>
          <input type="submit" hidden/>
        </form>

        {/*<span><Button onClick={this.showActive()}>Active »</Button></span>
        <span><Button onClick={this.showCompleted()}>Completed »</Button></span>*/}

        <div>
          {tasks.map((task, i) => <SingleTask {...this.props} key={i} i={i} task={task}/>)}
        </div>
      </div>
    )
  }
});

export default Tasks;
