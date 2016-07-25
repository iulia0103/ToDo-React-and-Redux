import tasks from '../data/tasks.js';
import habits from '../data/habits.js';

export function addTask(taskType, text){
  return {
    type: 'ADD_TASK',
    taskType,
    text
  }
}

export function completeTask(i){
  return {
    type: 'COMPLETE_TASK',
    i
  }
}

export function removeTask(i) {
  return {
    type: 'REMOVE_TASK',
    i
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
