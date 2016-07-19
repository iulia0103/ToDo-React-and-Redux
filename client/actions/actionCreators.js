import todos from '../data/todos.js';
import others from '../data/others.js';

export function addTodo(text){
  return {
    type: 'ADD_TODO',
    text
  }
}

export function completeTodo(index){
  return {
    type: 'COMPLETE_TODO',
    index
  }
}

export function addOther(taskType, text){
  return {
    type: 'ADD_OTHER',
    taskType,
    text
  }
}

export function removeOther(index){
  return {
    type: 'REMOVE_OTHER',
    index
  }
}
