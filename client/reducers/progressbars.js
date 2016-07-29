let progress = 0;

function progressbars(state=[], action){
  switch (action.type) {
    case 'ADD_PROGRESS':
      return [...state, {
        progressType: action.progressType,
        progress
      }]

    case 'INCREASE_HEALTH':
      return [
        ...state.slice(0,0), //before the one needed for update
        ...state[0], {progress: state[0].progress+2.5}, //similar to Object.assign()
        ...state.slice(1)//after the one needed
      ]
      break;

    case 'DECREASE_HEALTH':
    return [
      ...state.slice(0,0),
      ...state[0], {progress: state[0].progress-2.5},
      ...state.slice(1)
    ]
      break;

    default:
      return state;
  }
  return state;
}

export default progressbars;
