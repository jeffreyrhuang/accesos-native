import {
  PUERTA_ABRE_SELECTED,
  CERRADURA_SELECTED,
  SEGMENTAR
} from '../actions/types';

const INITIAL_STATE = {
  puerta_abre: null,
  cerradura: null,
  segmentar: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUERTA_ABRE_SELECTED:
      return { ...state, puerta_abre: action.payload };
    case CERRADURA_SELECTED:
      return { ...state, cerradura: action.payload };
    case SEGMENTAR:
      return { ...state, segmentar: action.payload };
    default:
      return state;
  }
};