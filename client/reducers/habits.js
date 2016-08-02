
function habits(state=[], action){
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, {
        text: action.text,
      }];
      break;

    case 'REMOVE_HABIT':
      const i = action.i;
        return [
          // from the start to the one we want to delete
          ...state.slice(0,action.i),
          // after the deleted one, to the end
          ...state.slice(action.i + 1)
        ];
        break;

    default:
      return state;
  }
  return state;
}

export default habits;
