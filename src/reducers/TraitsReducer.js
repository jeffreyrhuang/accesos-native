import {
  PUERTA_ABRE_SELECTED,
  CERRADURA_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
  puerta_abre: null,
  cerradura: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUERTA_ABRE_SELECTED:
      return { ...state, puerta_abre: action.payload };
    case CERRADURA_SELECTED:
      return { ...state, cerradura: action.payload }
    default:
      return state;
  }
};