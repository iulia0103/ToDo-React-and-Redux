import todos from '../data/todos.js';
import habits from '../data/habits.js';

export function addTodo(taskType, text){
  return {
    type: 'ADD_TODO',
    taskType,
    text
  }
}

export function completeTodo(index){
  return {
    type: 'COMPLETE_TODO',
    index
  }
}

export function deleteTodo(index) {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export function addHabit(text){
  return {
    type: 'ADD_HABIT',
    text
  }
}

export function removeHabit(index){
  return {
    type: 'REMOVE_OTHER',
    index
  }
}
