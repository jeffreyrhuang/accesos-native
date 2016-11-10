import {
  ORIENTATION_CHOSEN
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = null, action) => {
  switch (action.type) {
    case ORIENTATION_CHOSEN:
      return action.payload;
    default:
      return state;
  }
};