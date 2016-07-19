function todos(state=[], action){
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        text: action.text;
        completed: false
      }];
      break;

    case 'COMPLETE_TODO':
    const i = action.index;
    return [
      ...state.slice(0,i), //before the one needed for update
      {...state[i], completed: true}, //similar to Object.assign()
      ...state.slice(i+1)//after the one needed
    ]
      break;

    case 'DELETE_TODO':
      const i = action.index;
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ]
        break;

    default:
      return state;
  }
}

export default todos;
