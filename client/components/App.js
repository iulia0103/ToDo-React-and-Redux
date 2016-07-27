import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';


function mapStateToProps(state){
  return {
    progressbars: state.progressbars,
    habits: state.habits,
    dailies: state.tasks.filter(task => task.taskType === 'daily'),
    weeklies: state.tasks.filter(task => task.taskType === 'weekly'),
    todos: state.tasks.filter(task => task.taskType === 'todo'),
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
