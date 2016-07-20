import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';

function mapStateToProps(state){
  return {
    habits: state.habits,
    dailies: state.todos.filter(todo => todo.taskType === 'daily'),
    weeklies: state.todos.filter(todo => todo.taskType === 'weekly'),
    todos: state.todos.filter(todo => todo.taskType === 'todo')
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
