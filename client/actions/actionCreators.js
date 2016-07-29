import tasks from '../data/tasks.js';
import habits from '../data/habits.js';
import progressbars from '../data/progressbars.js';

//tasks
export function addTask(taskType, text){
  return {
    type: 'ADD_TASK',
    taskType,
    text
  }
}

export function toggleTask(id){
  return {
    type: 'TOGGLE_TASK',
    id
  }
}

export function removeTask(id) {
  return {
    type: 'REMOVE_TASK',
    id
  }
}

//habits
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

//progressbars
export function addProgress(progressType){
  return {
    type: 'ADD_PROGRESS',
    progressType
  }
}

export function increaseHealth(){
  return {type: 'INCREASE_HEALTH'}
}

export function decreaseHealth(){
  return {type: 'DECREASE_HEALTH'}
}
