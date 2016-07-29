let progress = 0;
let id = 0;

function progressbars(state=[], action){
  switch (action.type) {
    case 'ADD_PROGRESS':
      id += 1;
      return [...state, {
        id,
        progressType: action.progressType,
        progress
      }]

    case 'INCREASE_PROGRESS':
      return state.map((progressbar) => {
        if (progressbar.id === action.id) {
          progressbar.progress = progressbar.progress + 2;
          if(progressbar.progress > 100) {
            progressbar.progress = 0;
          }
        }
        return progressbar
      });
      break;

    case 'DECREASE_PROGRESS':
      return state.map((progressbar) => {
        if (progressbar.id === action.id) {
          progressbar.progress = progressbar.progress - 2;
          if(progressbar.progress <= 100) {
            progressbar.progress = 0;
          }
        }
        return progressbar
      });
      break;

    default:
      return state;
  }
  return state;
}

export default progressbars;
