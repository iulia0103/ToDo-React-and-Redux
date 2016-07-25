
function tasks(state=[], action){
  const i = action.i;
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        id: state.length + 1,
        taskType: action.taskType,
        text: action.text,
        completed: false
      }];
      break;

    case 'COMPLETE_TASK':
    return [
      ...state.slice(0,i), //before the one needed for update
      {...state[i], completed: true}, //similar to Object.assign()
      ...state.slice(i+1)//after the one needed
    ]
      break;

    case 'REMOVE_TASK':
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ]
        break;

    default:
      return state;
  }
  return state;
}

export default tasks;
