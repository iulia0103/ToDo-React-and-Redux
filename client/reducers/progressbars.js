function progressbars(state=[], action){
  switch (action.type) {

    case 'INCREASE_HEALTH':
      return [
        ...state.slice(0,0), //before the one needed for update
        {...state[0], porgress: state[0].progress+1}, //similar to Object.assign()
        ...state.slice(1)//after the one needed
      ]
      break;

    case 'DECREASE_HEALTH':

      break;

    default:
      return state;
  }
  return state;
}

export default progressbars;
