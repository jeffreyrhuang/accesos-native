import {
  ORIENTATION_CHOSEN
} from '../actions/types';

export default (state = null, action) => {

  switch (action.type) {
    case ORIENTATION_CHOSEN:
      return { ...state, orientation: action.payload };
    default:
      return state;
  }
};
