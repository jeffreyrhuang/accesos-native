import {
  PUERTA_ABRE_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
  puerta_abre: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUERTA_ABRE_SELECTED:
      return { ...state, puerta_abre: action.payload };
    default:
      return state;
  }
};