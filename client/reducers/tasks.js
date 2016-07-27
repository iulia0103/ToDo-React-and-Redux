import {MdGrade, MdDoneAll} from 'react-icons/lib/md';
import React from 'react';

function tasks(state=[], action){
  const task=action.id;
  let i = state.indexOf(task);

  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        id: state.length + 1,
        taskType: action.taskType,
        text: action.text,
        completed: false
      }];
      break;

    case 'TOGGLE_TASK':
      if(task.completed === false) {
              return [
                ...state.slice(0,i),
                ...state[i], {completed: true, symbol: <MdDoneAll />},
                ...state.slice(i+1)
              ];
            }
            else {
              return [
                ...state.slice(0,i),
                ...state[i], {completed: false, symbol: <MdGrade />},
                ...state.slice(i+1)
              ];
            }
      break;

    case 'REMOVE_TASK':
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ];
      break;

    default:
      return state;
  }
  return state;
}

export default tasks;
