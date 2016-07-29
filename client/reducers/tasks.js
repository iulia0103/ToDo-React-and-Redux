
// Simple counter to ensure each task has unique id, see ADD_TASK handler below
 let id = 0;

function tasks(state=[], action){
  switch (action.type) {
    case 'ADD_TASK':
      id += 1;
      return [...state, {
        id,
        taskType: action.taskType,
        text: action.text,
        completed: false
      }];
      break;

    case 'TOGGLE_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          task.completed = !task.completed
        }
        return task
      });
      break;

    case 'REMOVE_TASK':
      return state.filter((task) => task.id != action.id);
      break;

    default:
      return state;
  }
  return state;
}

export default tasks;
