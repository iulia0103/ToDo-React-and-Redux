function habits(state=[], action){
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, {
        text: action.text
      }];
      break;

    case 'DELETE_HABIT':
      const i = action.index;
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
}

export default habits;
