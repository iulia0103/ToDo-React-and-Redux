import todos from '../data/todos.js';
import habits from '../data/habits.js';

export function addTodo(taskType, text){
  return {
    type: 'ADD_TODO',
    taskType,
    text,
    completed: false
  }
}

export function completeTodo(index){
  return {
    type: 'COMPLETE_TODO',
    index
  }
}

export function removeTodo(index) {
  return {
    type: 'REMOVE_TODO',
    index
  }
}

export function addHabit(text){
  return {
    type: 'ADD_HABIT',
    text
  }
}

export function removeHabit(i){
  return {
    type: 'REMOVE_HABIT',
    i
  }
}
