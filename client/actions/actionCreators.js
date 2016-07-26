import tasks from '../data/tasks.js';
import habits from '../data/habits.js';
import progressbars from '../data/progressbars.js';

export function addTask(taskType, text){
  return {
    type: 'ADD_TASK',
    taskType,
    text
  }
}

export function completeTask(id){
  return {
    type: 'COMPLETE_TASK',
    id
  }
}

export function removeTask(id) {
  return {
    type: 'REMOVE_TASK',
    id
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

export function increaseHealth(index){
  return {
    type: 'INCREASE_HEALTH',
    index
  }
}

export function decreaseHealth(index){
  return {
    type: 'DECREASE_PROGRESS',
    index
  }
}
