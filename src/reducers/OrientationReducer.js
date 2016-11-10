import {
  ORIENTATION_CHOSEN
} from '../actions/types';

export default (state = null, action) => {
  console.log(action)

  switch (action.type) {
    case ORIENTATION_CHOSEN:
      return action.payload;
    default:
      return state;
  }
};