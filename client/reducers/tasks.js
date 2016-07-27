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

    case 'REMOVE_TASK':
      const task=action.id;
      let i = state.indexOf(task);
      return [
        ...state.slice(0,i), //id is bigger with 1 than the index
        ...state.slice(i+1)
      ];

      break;

    default:
      return state;
  }
  return state;
}

export default tasks;
